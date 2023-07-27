const City = require("./City");
const Continent = require("./Continent");
const Country = require("./Country");
const Country1 = require("./Country1");
const User = require("./User")

//City -> countryId
Country.hasMany(City) //countryId
City.belongsTo(Country)

//Continent  -> continentId
Continent.hasMany(Country)
Country.belongsTo(Continent)

//User -> countryId
Country1.hasMany(User)
User.belongsTo(Country1)