const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trail extends Model {}

Trail.init(
  {
    trailId: {
      type: DataTypes.STRING,
    },
    trailName: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    directions: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);

module.exports = Trail;

//we want an Id, name of trail, city, zip, address, desc., img, url
// {
//     "id": 2,
//     "name": "Tingley Beach",
//     "city": "Albuquerque",
//     "zip": 87104,
//     "address": "1800 Tingley Drive SW",
//     "desc": "Tingley%20Beach%20is%20on%20the%20Rio%20Grande%2C%20near%20downtown%20Albuquerque%2C%20next%20to%20the%20BIOPark%20%E2%80%93%20Zoo%20and%20Aquarium%20and%20offers%20fishing%2C%20hiking%2C%20model%20boat%20sailing%2C%20wildlife%20viewing%20and%20walking%20trails%20around%20three%20ponds.%20For%20more%20information%20on%20events%2C%20call%20505-248-8514.%20Visit%20the%20city%27s%20%3Ca%20href%3D%22https%3A%2F%2Fwww.cabq.gov%2Fculturalservices%2Fbiopark%2Ftingley%2Ffishing%2Fweekly-fishing-report%22%3EWeekly%20Fishing%20Report%3C%2Fa%3E%20for%20information%20on%20fishing.",
//     "thumbURL": "https:\/\/prescriptiontrails.org\/admin\/new\/images\/square_1450551300tingly.jpg",
//     "url": "https:\/\/prescriptiontrails.org\/trail\/2\/tingley-beach\/"
//     ]
// }
