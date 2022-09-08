const User = require("./User");
const Trail = require("./Trail");

User.hasMany(Trail);
Trail.belongsTo(User);

module.exports = { Trail, User };
