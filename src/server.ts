import { env } from './config';
import { app } from './app';
import { sequelize } from './models';

const start = async (port: string | number) => {
  try {
    app().listen(port, () => {
      console.log(`Server listening to ${port}`);
    });

    await sequelize.authenticate();
    console.log(`Connected to DB post ${env.DB_PORT}`);
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

if (env.PORT) {
  start(env.PORT);
} else {
  console.error('PORT not found');
}
