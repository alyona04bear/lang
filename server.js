let express = require("express");

const app = express();

app.use("/kek", function (req, res) {
    console.log(">??????");
    res.send("<h1>!!!!!!!</h1>");
});

app.listen(3000, () => {
    console.log("ok");
});