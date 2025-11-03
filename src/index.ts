import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Default route
app.get("/", (req, res) => {
  res.send("✅ Server is running! Try /api/automation");
});

// Automation route
app.post("/api/automation", (req, res) => {
  const data = req.body;
  console.log("Received data:", data);
  
  res.json({
    success: true,
    message: "Automation data received successfully!",
    received: data
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
