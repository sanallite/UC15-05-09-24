/* Não funciona ainda... */
import sqlite3 from 'sqlite3';

const SQLite = sqlite3.verbose();

function execute(command, params, method = "all") {
    return new Promise( ( resolve, reject ) => {
        db[method] (command, params, ( error, result ) => {
            if ( error )
                reject(error);
            else
                resolve(result);
        });
    });
}

const db = new SQLite.Database("./banco_sqlite.txt", SQLite.OPEN_READWRITE
    if ( err )
        return console.log("Erro ao conectar ao banco "+ err.message);
});

export { db, execute }