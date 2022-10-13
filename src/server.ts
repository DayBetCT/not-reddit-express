import { PORT } from './config';
import { app } from './app';

const start = (port: string | number) => {
  try {
    app().listen(port, () => {
      console.log(`Server listening to ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

if (PORT) {
  start(PORT);
} else {
  console.error('PORT not found');
}
