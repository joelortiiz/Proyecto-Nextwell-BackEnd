// // src/server.js
// const app = require('./app');
// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/api', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

