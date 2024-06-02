import { pool } from './database.js';

export const getPersonas = async (req, res) => {
    try {
        const resultQuery = await pool.query("select * from categorias");
        // res.render('personas/list', { personas: resultQuery.rows })
        console.log(resultQuery.rows);
    } catch (error) {
        console.log("error: ",error);
    }
};

// getPersonas();