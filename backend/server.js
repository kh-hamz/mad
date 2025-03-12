const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/submit-case", (req, res) => {
  console.log("Received case:", req.body);
  
  // Simulate a delay
  setTimeout(() => {
    res.json({ message: "Case submitted successfully", case: req.body });
  }, 2000);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
