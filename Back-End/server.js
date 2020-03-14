var express = require("express")
var app = express()
var fdb = require("./fruitDatabase")
var cors = require('cors')
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 8000

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

app.use(cors());

// Return all fruit
app.get("/api/fruit", (req, res, next) => {
    var sql = "select * from fruit_data"
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


app.get("/api/fruit/:fruit", (req, res, next) => {

    const fruitParam = req.params.fruit
    console.log(fruitParam)
    var sql = `select date,  ${fruitParam} from fruit_data`
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

