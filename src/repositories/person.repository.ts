import db from "../database/database.connection";

async function getPersonLenght(): Promise<number> {
    const lenght = await db.query(`SELECT COUNT(*) FROM people`);
    return Number(lenght.rows[0].count);
}

async function getPerson(id: number): Promise<object> {
    const person = await db.query(`SELECT * FROM people WHERE id = $1`, [id]);
    return person.rows[0];
}

const personRepository = {
    getPersonLenght,
    getPerson
}

export default personRepository;