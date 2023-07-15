import { Sequelize, Dialect } from 'sequelize';

const dbName = process.env.DB_NAME || 'test1';
const dbUser = process.env.DB_USER || 'postgres';
const dbPassword = process.env.DB_PASSWORD || '1';

const dialect = process.env.SQL_DIALECT as Dialect || 'postgres';
const host = process.env.DB_HOST || 'localhost';
const port = +process.env.DB_PORT || 5432;

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {dialect, host, port})