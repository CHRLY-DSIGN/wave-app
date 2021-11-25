const mongoose = require("mongoose")

module.exports = {
    isAdmin: (user) => user.role === "ADMIN",

    isMine: (id1, id2) => {
        console.log(id1, id2, id2.equals(id1));
        
        return id2.equals(id1)
    }
}