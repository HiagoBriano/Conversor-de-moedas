import logger from './src/log/logger';
const app = require('./server');

const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;
const file = { file: './index.ts' };

app.listen(port, () => console.log(`Server is running on port ${port}`));
logger.warn(`Server is running on port ${port}`, file);
