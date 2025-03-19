const express = require('express');
const router = express.Router();
const fs = require('fs');
const HISTORY_FILE = './data/history.json';

router.post('/submit', (req, res) => {
  const { username, heartRate, stressLevel } = req.body;

  if (!username || !heartRate || !stressLevel) {
    return res.status(400).json({ success: false, message: 'Incomplete data' });
  }

  const history = JSON.parse(fs.readFileSync(HISTORY_FILE));
  const userHistory = history[username] || [];

  const newRecord = {
    timestamp: new Date().toISOString(),
    heartRate,
    stressLevel
  };

  userHistory.push(newRecord);
  history[username] = userHistory;

  fs.writeFileSync(HISTORY_FILE, JSON.stringify(history, null, 2));
  res.json({ success: true, message: 'Data submitted successfully' });
});

router.get('/history/:username', (req, res) => {
  const { username } = req.params;
  const history = JSON.parse(fs.readFileSync(HISTORY_FILE));

  if (!history[username]) {
    return res.status(404).json({ success: false, message: 'No data found' });
  }

  res.json({ success: true, history: history[username] });
});

module.exports = router;
