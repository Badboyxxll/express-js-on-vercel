// api/automation.js
// Vercel serverless endpoint for /api/automation
export default function handler(req, res) {
  // Allow simple CORS so tests in browser/tools work
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method === 'POST') {
    try {
      const data = req.body ?? {};
      return res.status(200).json({
        success: true,
        message: 'Automation data received successfully!',
        received: data
      });
    } catch (err) {
      return res.status(400).json({ success: false, error: 'Invalid request', detail: String(err) });
    }
  }

  return res.status(200).json({ message: 'Send a POST to this endpoint with JSON' });
}
