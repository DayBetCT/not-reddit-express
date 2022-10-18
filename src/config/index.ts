import { config } from 'dotenv';

config({ path: '.env.dev' });

export const { PORT } = process.env;
export const { DB_USER } = process.env;
export const { DB_PASSWORD } = process.env;
export const { DB_NAME } = process.env;
export const { DB_PORT } = process.env;
export const { DB_HOST } = process.env;
