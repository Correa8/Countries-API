const City = require("./City");
const Country = require("./Country");
const Country1 = require("./Country1");
const User = require("./User")

//City -> countryId
Country.hasMany(City) //countryId
City.belongsTo(Country)

Country1.hasMany(User)
User.belongsTo(Country1)