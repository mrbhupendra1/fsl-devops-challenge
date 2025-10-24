const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  const secret = process.env.MY_SECRET || 'NO_SECRET';
  res.send(`<h2>FSL DevOps Challenge</h2><p>MY_SECRET: ${secret}</p>`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


const a = 10; // unused variable (ye lint error hai)


