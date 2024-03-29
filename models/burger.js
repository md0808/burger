// * Inside `burger.js`, import `orm.js` into `burger.js`
const orm = require("../config/orm")

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//     * Export at the end of the `burger.js` file.


  
const burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        })
    },
    update: function(id, cb){
        orm.update('burgers',id,cb)
    },
    create: function(name, cb){
        orm.create('burgers', name, cb)
    }
}

module.exports = burger;
