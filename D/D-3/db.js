const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

let db;

async function connect() {
    if (!db) {
        try {
            db = await open({
                filename: "./db.db",
                driver: sqlite3.Database
            });

            await db.exec("CREATE TABLE IF NOT EXISTS BlogPosts (id INTEGER PRIMARY KEY AUTOINCREMENT,title TEXT NOT NULL,content TEXT NOT NULL,author TEXT NOT NULL);"); 
        } catch (err) {
            
            throw err;
        }
    }
    return db;
}

module.exports=connect