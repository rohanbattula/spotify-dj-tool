const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
/*mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log(err));
*/
// Sample Route
app.get('/', (req, res) => {
  res.send('Welcome to MERN stack');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});