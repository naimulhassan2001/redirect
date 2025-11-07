const express = require("express");
const { log } = require("../helper/logger");


const router = express.Router();


router.get('/hostinger', (req, res) => {
    log('hostinger', req.originalUrl);
    console.log('hostinger');
    res.redirect(301, 'https://hostinger.com?REFERRALCODE=somediscount');
});


router.get("/test", (req, res) => {
    res.json({
        status: true,
        message: "Server is running",
        data: {},
    });
})
module.exports = router;