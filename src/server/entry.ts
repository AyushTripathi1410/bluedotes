import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;

app.use(express.json());

// Contact form API
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email and message are required' });
    }

    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

    const dbFile = path.join(dataDir, 'submissions.json');
    let submissions = [];
    if (fs.existsSync(dbFile)) {
      submissions = JSON.parse(fs.readFileSync(dbFile, 'utf-8'));
    }

    submissions.push({
      id: Date.now(),
      name, email,
      phone: phone || '',
      service: service || '',
      message,
      created_at: new Date().toISOString(),
    });

    fs.writeFileSync(dbFile, JSON.stringify(submissions, null, 2));
    return res.status(200).json({ success: true, message: 'Submission received!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`✅ API server running on http://localhost:${PORT}`);
});