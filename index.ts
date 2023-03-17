import cors from 'cors';
import express from 'express';
require('dotenv/config');

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;

app.get('/', (_req, res) => res.json({ message: 'active server' }));

app.listen(port, () => console.log(`Server is running on port ${port}`));