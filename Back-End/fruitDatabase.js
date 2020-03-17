var sqlite3 = require('sqlite3').verbose()
//const DBSOURCE = "db.sqlite"
const DBSOURCE = ":memory:"


let fruitDb = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQlite database.')
        console.log("RUN CREATE table");
        fruitDb.run(`CREATE TABLE IF NOT EXISTS fruit_prices (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT,
            bananas INTEGER, 
            strawberries INTEGER, 
            apples INTEGER,             
            oranges INTEGER )`, (err) => {
            if (err) {
                // Table already created
                console.log(err);
            } else {
                console.log("RUN DELETE fruit_prices");
                // NOTE: Delete records to start over when we rerun the server.  Remove to persist data.
                fruitDb.run('DELETE FROM fruit_prices WHERE id>0', (err) => {
                    if (err) {
                        // Table already created
                        console.log(err);
                        console.log("ERROR");
                    }
                });

                console.log("RUN INSERT dummy data into fruit_prices table");

                // Table just created, add fruit prices
                var insert = 'INSERT INTO fruit_prices (date, bananas, strawberries, apples, oranges) VALUES (?,?,?,?,?)';
                fruitDb.run(insert, ["2019-01-07", 401, 58, 290, 191]);
                fruitDb.run(insert, ["2019-02-07", 354, 98, 132, 123]);
                fruitDb.run(insert, ["2019-03-07", 512, 120, 321, 159]);
                fruitDb.run(insert, ["2019-04-07", 287, 75, 214, 187]);
                fruitDb.run(insert, ["2020-01-01", 321, 19, 160, 131]);
                fruitDb.run(insert, ["2020-02-01", 344, 58, 132, 231]);
                fruitDb.run(insert, ["2020-03-01", 122, 20, 210, 129]);
                fruitDb.run(insert, ["2020-04-01", 667, 175, 214, 147]);

            }
        });



    }
});

module.exports = fruitDb

