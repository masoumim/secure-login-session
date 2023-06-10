// Create new express-pg connection pool
const { Pool } = require('pg');

// Configure pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// ADD USER TO DB
const addUser = async (name, password) => {
    const name_ = name;
    const password_ = password;
    const addQuery = `INSERT INTO app_user (name, password) VALUES ('${name_}','${password_}');`;
    const result = await pool.query(addQuery);
    return result;
}

// GET USER BY NAME
const getUserByName = async (name) => {
    const name_ = name;    
    const getQuery = `SELECT * FROM app_user where name ='${name_}';`;
    const result = await pool.query(getQuery);        
    return result;
}

// GET USER BY ID
const getUserById = async (id) => {    
    const id_ = id;    
    const getQuery = `SELECT * FROM app_user where id ='${id_}';`;    
    const result = await pool.query(getQuery);        
    return result;
}

module.exports = { addUser, getUserByName, getUserById }