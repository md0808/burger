const express = require("express");
const router = express.Router();
const burger = require("../models/burger")

router.get("/", function (req, res) {
    burger.all(function (burger_data) {
        console.log(burger_data)
        //why does "burger_data" need to be in {}
        res.render("index", { burger_data })
    })
})
//router.create()


//changes burger from devoured:false to devoured: true
router.post("/burgers/update", function (req, res) {
    burger.update(req.body.burger_id, function (result) {
        console.log(result);
        res.redirect("/");
    })
});

router.post("/burgers/create", function (req, res) {
    const isBurger = req.body.burger_name.toLowerCase().includes("burger");
    console.log(isBurger);
    if (isBurger) {
        burger.create(req.body.burger_name, function (result) {
            res.redirect("/");
        })
    } else{
        burger.all(function (burger_data){
        const data = {burger_data,isNotBurger: true}
        console.log(data);
        res.render("index", data)
    })

    }
    //if (burger name is a valid string){ call database} else {send invalid input to user}


})


//router.delete()

const burgerModel = require("../models/burger.js")

module.exports = router;