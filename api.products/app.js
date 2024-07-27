const express = require("express");
const app = express();
const productsRouter = require("./routes/products");
require("dotenv").config();

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.send("Go to /api/products");
});

const _URL_PREFIX = "/api/products";
app.use(_URL_PREFIX, productsRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);

    res.status(statusCode).json({ message: err.message });
    return;
});

const PORT = 5002;
app.listen(PORT, () => {
    console.log(`Products API listening at http://localhost:${PORT}`);
});
