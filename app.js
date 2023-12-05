import express, { json } from 'express';
const app = express();
const PORT = 3000;

app.use(json());

// Routes for mathematical operations
app.get('/calculator/add', (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) + parseFloat(num2);
  res.json({ result });
});

app.get('/calculator/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) - parseFloat(num2);
  res.json({ result });
});

app.get('/calculator/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  const result = parseFloat(num1) * parseFloat(num2);
  res.json({ result });
});

app.get('/calculator/divide', (req, res) => {
  const { num1, num2 } = req.query;
  if (parseFloat(num2) === 0) {
    return res.status(400).json({ error: 'Cannot divide by zero' });
  }
  const result = parseFloat(num1) / parseFloat(num2);
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
