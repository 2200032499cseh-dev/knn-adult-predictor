<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>KNN Adult Income Predictor</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; background: #f9f9f9; }
    code, pre { background: #eee; padding: 5px; border-radius: 4px; }
    h1, h2, h3 { color: #2c3e50; }
    ul { margin-left: 20px; }
  </style>
</head>
<body>

<h1>🧠 KNN Adult Income Predictor</h1>

<p>This project predicts whether a person earns <strong>more than or less than $50K</strong> using the UCI Adult dataset. It includes:</p>

<ul>
  <li>A trained <strong>K-Nearest Neighbors (KNN)</strong> model</li>
  <li>A <strong>FastAPI backend</strong> serving real-time predictions</li>
  <li>A modern <strong>React + TailwindCSS frontend</strong></li>
  <li>Built-in <strong>bias/fairness analysis</strong> and <strong>explainability</strong> using SHAP</li>
</ul>

<hr>

<h2>🚀 Project Structure</h2>
<pre><code>knn-adult-predictor/
├── backend/
│   ├── app/
│   ├── models/
│   ├── data/
│   └── notebook/
├── frontend/
├── requirements.txt
└── README.md
</code></pre>

<h2>📊 Innovations</h2>
<ul>
  <li>✅ <strong>Fairness Analysis</strong> – Evaluate bias by gender/race</li>
  <li>✅ <strong>SHAP Explainability</strong> – Feature influence insights</li>
  <li>✅ <strong>Interactive UI</strong> – Real-time prediction web form</li>
</ul>

<h2>⚙️ How to Run</h2>

<h3>1. Clone the Repository</h3>
<pre><code>git clone https://github.com/&lt;your-username&gt;/knn-adult-predictor.git
cd knn-adult-predictor
</code></pre>

<h3>2. Train the Model (Optional)</h3>
<pre><code>cd backend
python knn_model_trainer.py
</code></pre>

<h3>3. Run the Backend</h3>
<pre><code>uvicorn app.main:app --reload
</code></pre>

<h3>4. Run the Frontend</h3>
<pre><code>cd ../frontend
npm install
npm run dev
</code></pre>
<p>Open <a href="http://localhost:5173" target="_blank">http://localhost:5173</a> in your browser.</p>

<hr>
<h2>🚀 Key Innovations in This Project</h2>
<ul style="line-height: 1.6;">
  <li><strong>🧠 Machine Learning with KNN:</strong> Implements a full pipeline using K-Nearest Neighbors for binary income classification.</li>
  <li><strong>⚖️ Fairness & Bias Analysis:</strong> Evaluates prediction performance by gender and race to detect any model bias.</li>
  <li><strong>🧠 Explainable AI (SHAP):</strong> Uses SHAP to visualize which features most influence each prediction.</li>
  <li><strong>🌐 Interactive Frontend:</strong> Built with React + TailwindCSS and allows real-time predictions from user input.</li>
  <li><strong>🚀 FastAPI Backend:</strong> Serves predictions using a RESTful API and handles input preprocessing consistently.</li>
  <li><strong>🗃️ Modular Project Structure:</strong> Clean separation of concerns across frontend, backend, and models.</li>
  <li><strong>📊 Notebook-Based Training:</strong> Includes a Jupyter notebook for training, EDA, and exporting models.</li>
  <li><strong>🧩 Model Reusability:</strong> Model, encoder, and scaler are saved and reused in production.</li>
</ul>

<h2>📁 Dataset</h2>
<p>Based on the <a href="https://archive.ics.uci.edu/ml/datasets/adult" target="_blank">UCI Adult Census dataset</a>.</p>

<h2>📜 License</h2>
<p>MIT License. Feel free to use, modify, and share.</p>

<h2>🙋‍♂️ Author</h2>
<p>
<strong>Bellamkonda V A Devesh</strong><br>
📫 <a href="https://portfolio-bice-three-40.vercel.app/" target="_blank">Portfolio</a> |
<a href="https://github.com/klu2200032499" target="_blank">GitHub</a> |
<a href="https://www.linkedin.com/in/bellamkonda-v-81511a289/" target="_blank">LinkedIn</a>
</p>

</body>
</html>
