export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ status: "ok", uptime: Date.now() });
  }

  if (req.method === "POST") {
    try {
      const body = req.body;
      return res.status(200).json({
        success: true,
        message: "Automation data received",
        data: body
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        error: "Invalid request",
        detail: err.toString()
      });
    }
  }

  res.status(405).json({ error: "Method not allowed" });
}
