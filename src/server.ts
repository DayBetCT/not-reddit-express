import { app } from "./app";
import { env } from "@config/baseConfig";
import { sequelize } from "@models/squelize.init";

const start = async (port: string | number): Promise<void> => {
  try {
    app().listen(port, () => {
      console.log(`Server listening to ${port}`);
    });

    await sequelize.authenticate();
    console.log(`Connected to DB port ${env.DB_PORT}`);
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

if (env.PORT !== 0) {
  void start(env.PORT);
} else {
  console.error("PORT not found");
}
