import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/details', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'details.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
