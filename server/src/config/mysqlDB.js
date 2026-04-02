const { PrismaMariaDb } = require('@prisma/adapter-mariadb');
const { PrismaClient } = require('../../generated/prisma_client');
const { URL } = require('node:url');

const databaseUrl = new URL(process.env.DATABASE_URL);

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb({
    host: databaseUrl.hostname,
    port: Number(databaseUrl.port || 3306),
    user: decodeURIComponent(databaseUrl.username),
    password: decodeURIComponent(databaseUrl.password),
    database: databaseUrl.pathname.replace(/^\//, ''),
  }),
});

module.exports = prisma;
