import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is running! Try /api next.");
});

app.get("/api", (req, res) => {
  res.json({ message: "✅ Express API is working on Vercel!" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
