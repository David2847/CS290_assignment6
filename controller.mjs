import express from 'express';
import * as model from './model.mjs';
const app = express();
const PORT = 3000;

app.use(express.json())

// Don't change or add anything above this line






// Don't change or add anything below this line
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});