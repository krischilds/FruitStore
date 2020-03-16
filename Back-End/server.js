var express = require("express")
var app = express()
var fdb = require("./fruitDatabase")
var cors = require('cors')
var bodyParser = require("body-parser");

const port = process.env.PORT || 8000

// configure post
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Start server
app.listen(port, () => {
    console.log("Running Fruit API on port %PORT%".replace("%PORT%", port))
});

app.use(cors());

app.get("/", (req, res, next) => {
    res.json({
        "message": "Back-End API Service"
    })
});

// Return all fruit
app.get("/api/fruit", (req, res, next) => {
    var sql = "select * from fruit_prices order by date"
    var params = []
    fdb.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

app.post("/api/fruit/", (req, res, next) => {
    var errors = []
    if (!req.body.date) {
        errors.push("No date specified");
    }

    if (errors.length) {
        res.status(400).json({ "error": errors.join(",") });
        return;
    }

    var data = {
        date: req.body.date,
        bananas: req.body.bananas || 0,
        apples: req.body.apples || 0,
        strawberries: req.body.strawberries || 0,
        oranges: req.body.oranges || 0
    }

    var sql = 'INSERT INTO fruit_prices (date, bananas, apples, oranges, strawberries) VALUES (?,?,?,?,?)'
    var params = [data.date, data.bananas, data.apples, data.oranges, data.strawberries]
    fdb.run(sql, params, function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id": this.lastID
        })
    });
})

app.get("/api/fruit/:fruit", (req, res, next) => {

    const fruitParam = req.params.fruit
    console.log(fruitParam)
    var sql = `select date,  ${fruitParam} from fruit_prices`
    var params = [req.params.fruit]
    fdb.get(sql, null, (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": row
        })
    });
});




// Root path
app.get("/", (req, res, next) => {
    res.json({ "message": "Ok" })
});

