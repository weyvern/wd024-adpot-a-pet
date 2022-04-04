import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello'));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
