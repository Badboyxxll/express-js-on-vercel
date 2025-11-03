export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    return res.status(200).json({
      success: true,
      message: 'Automation data received successfully!',
      received: data
    });
  } else {
    return res.status(405).json({ error: 'Only POST requests are allowed!' });
  }
}
