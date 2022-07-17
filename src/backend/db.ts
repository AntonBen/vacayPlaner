import mysql from 'mysql2/promise';

const DB_URL = import.meta.env.VITE_DATABASE_URL;

const client = async () => {
    const connection = await mysql.createPool(DB_URL)
    return connection;
};

export { client };