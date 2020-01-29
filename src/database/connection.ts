import { PoolConfig } from "mysql";
import mysql, { Pool, PoolConnection } from "promise-mysql";
import db_config from "./config";

function createPool(poolConfig?: PoolConfig): Promise<Pool> {
  return mysql.createPool({
    ...poolConfig,
    connectionLimit: 10,
    port: db_config.PORT,
    host: db_config.HOST,
    user: db_config.USER,
    password: db_config.PASSWORD,
    database: db_config.DATABASE
  });
}
export default async function getPoolConnection(
  poolOptions?: PoolConfig
): Promise<PoolConnection> {
  const pool = await createPool(poolOptions);
  return pool.getConnection();
}
