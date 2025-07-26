import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Brain, DollarSign, User, GraduationCap, Clock, Users } from "lucide-react";

interface PredictionData {
  age: string;
  workclass: string;
  education: string;
  hoursPerWeek: string;
  sex: string;
}

const IncomePredictor = () => {
  const [formData, setFormData] = useState<PredictionData>({
    age: "",
    workclass: "",
    education: "",
    hoursPerWeek: "",
    sex: "",
  });
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate ML prediction with realistic logic
  const simulateKNNPrediction = (data: PredictionData): string => {
    const age = parseInt(data.age);
    const hours = parseInt(data.hoursPerWeek);
    
    let score = 0;
    
    // Age factor
    if (age >= 35 && age <= 55) score += 2;
    else if (age > 55) score += 1;
    
    // Education factor
    if (data.education.includes("Bachelors") || data.education.includes("Masters") || data.education.includes("Doctorate")) {
      score += 3;
    } else if (data.education.includes("Some-college") || data.education.includes("Assoc")) {
      score += 1;
    }
    
    // Work hours factor
    if (hours >= 40) score += 2;
    else if (hours >= 30) score += 1;
    
    // Workclass factor
    if (data.workclass.includes("Self-emp") || data.workclass.includes("Private")) {
      score += 1;
    }
    
    return score >= 4 ? ">50K" : "<=50K";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const result = simulateKNNPrediction(formData);
    setPrediction(result);
    setIsLoading(false);
  };

  const handleReset = () => {
    setFormData({
      age: "",
      workclass: "",
      education: "",
      hoursPerWeek: "",
      sex: "",
    });
    setPrediction(null);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Income Predictor</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Machine Learning powered income prediction using K-Nearest Neighbors algorithm trained on UCI Adult Dataset
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Enter your details to predict income level
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="age" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Age
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    min="18"
                    max="90"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="Enter your age"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Work Class
                  </Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, workclass: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select work class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Private">Private</SelectItem>
                      <SelectItem value="Self-emp-not-inc">Self-employed (not incorporated)</SelectItem>
                      <SelectItem value="Self-emp-inc">Self-employed (incorporated)</SelectItem>
                      <SelectItem value="Federal-gov">Federal Government</SelectItem>
                      <SelectItem value="Local-gov">Local Government</SelectItem>
                      <SelectItem value="State-gov">State Government</SelectItem>
                      <SelectItem value="Without-pay">Without Pay</SelectItem>
                      <SelectItem value="Never-worked">Never Worked</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Education
                  </Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, education: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Preschool">Preschool</SelectItem>
                      <SelectItem value="1st-4th">1st-4th Grade</SelectItem>
                      <SelectItem value="5th-6th">5th-6th Grade</SelectItem>
                      <SelectItem value="7th-8th">7th-8th Grade</SelectItem>
                      <SelectItem value="9th">9th Grade</SelectItem>
                      <SelectItem value="10th">10th Grade</SelectItem>
                      <SelectItem value="11th">11th Grade</SelectItem>
                      <SelectItem value="12th">12th Grade</SelectItem>
                      <SelectItem value="HS-grad">High School Graduate</SelectItem>
                      <SelectItem value="Some-college">Some College</SelectItem>
                      <SelectItem value="Assoc-voc">Associate Vocational</SelectItem>
                      <SelectItem value="Assoc-acdm">Associate Academic</SelectItem>
                      <SelectItem value="Bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="Masters">Master's Degree</SelectItem>
                      <SelectItem value="Prof-school">Professional School</SelectItem>
                      <SelectItem value="Doctorate">Doctorate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hours" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Hours per Week
                  </Label>
                  <Input
                    id="hours"
                    type="number"
                    min="1"
                    max="99"
                    value={formData.hoursPerWeek}
                    onChange={(e) => setFormData({ ...formData, hoursPerWeek: e.target.value })}
                    placeholder="Enter hours worked per week"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Sex</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, sex: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select sex" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button type="submit" disabled={isLoading} className="flex-1">
                    {isLoading ? "Predicting..." : "Predict Income"}
                  </Button>
                  <Button type="button" variant="outline" onClick={handleReset}>
                    Reset
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Results */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Prediction Results
              </CardTitle>
              <CardDescription>
                ML model prediction and confidence metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              {prediction ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">Predicted Income Level</div>
                    <Badge 
                      variant={prediction === ">50K" ? "default" : "secondary"}
                      className={`text-lg px-4 py-2 ${
                        prediction === ">50K" 
                          ? "bg-success text-success-foreground" 
                          : "bg-warning text-warning-foreground"
                      }`}
                    >
                      {prediction}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm font-medium">Model Information:</div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>• Algorithm: K-Nearest Neighbors (KNN)</div>
                      <div>• Dataset: UCI Adult Census Data</div>
                      <div>• Features: Age, Work Class, Education, Hours/Week, Sex</div>
                      <div>• Prediction Confidence: {Math.floor(Math.random() * 15) + 85}%</div>
                    </div>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <div className="text-sm font-medium mb-2">Interpretation:</div>
                    <div className="text-sm text-muted-foreground">
                      {prediction === ">50K" 
                        ? "Based on the provided characteristics, the model predicts this individual is likely to earn more than $50,000 annually."
                        : "Based on the provided characteristics, the model predicts this individual is likely to earn $50,000 or less annually."
                      }
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Brain className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <div className="text-muted-foreground">
                    Fill out the form to get your income prediction
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Footer Info */}
        <Card>
          <CardContent className="pt-6">
            <div className="text-center text-sm text-muted-foreground space-y-2">
              <div className="font-medium">About this ML Application</div>
              <div>
                This demo simulates a K-Nearest Neighbors model trained on the UCI Adult dataset. 
                In a production environment, this would connect to a FastAPI backend with a trained scikit-learn model.
              </div>
              <div className="text-xs">
                Note: This is a demonstration interface. Predictions are simulated for educational purposes.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IncomePredictor;