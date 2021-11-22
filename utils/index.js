const mongoose = require("mongoose")

module.exports = {
    isAdmin: (user) => user.role === "ADMIN",
}