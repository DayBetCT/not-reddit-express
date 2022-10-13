const dotenv = require('dotenv');

dotenv.config({ path: '.env.dev' });

export const { PORT } = process.env;
