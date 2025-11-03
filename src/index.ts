import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Automation Bridge is live. Use /automation to send data.");
});

// Automation route
app.post("/automation", (req, res) => {
  const data = req.body;
  console.log("Received automation data:", data);
  res.json({
    success: true,
    message: "Automation data received successfully!",
    received: data,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
