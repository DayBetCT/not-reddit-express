import { config } from 'dotenv';

config({ path: '.env.dev' });

export const { PORT } = process.env;
