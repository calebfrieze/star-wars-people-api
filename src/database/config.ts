const { env } = process;

export default {
  PORT: Number(env.SW_APP_DB_PORT) || 9306,
  HOST: env.SW_APP_DB_HOST || "0.0.0.0",
  USER: env.SW_APP_DB_USER || "sw_app_user",
  PASSWORD: env.SW_APP_DB_PASSWORD || "sw_app_user",
  DATABASE: env.SW_APP_DB || "sw_app_db"
};
