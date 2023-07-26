const City = require("./City");
const Country = require("./Country")

//City -> countryId
Country.hasMany(City) //countryId
City.belongsTo(Country)