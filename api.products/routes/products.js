const express = require("express");
const router = express.Router();
const products = require("../services/products");

router.get("/", async (req, res, next) => {
    try {
        const result = await products.fetchActiveProducts();
        res.json(result);
    } catch (err) {
        console.error(`Error while getting products `, err.message);
        next(err);
    }
});

module.exports = router;
