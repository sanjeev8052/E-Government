const mongoose = require("mongoose")

const ConnectDB = () => {
    try {


        // const sanjevUrl = "mongodb+srv://sanjeev:sanjeev@cluster0.o2huyuh.mongodb.net/Cluster0?retryWrites=true&w=majority"
        const sujeetUrl = "mongodb+srv://root:root@govcluster.0ibqh8b.mongodb.net/GOVCLUSTER?retryWrites=true&w=majority"
        // const compassUrl = "mongodb://localhost:27017"
        mongoose.connect(sujeetUrl, () => {
            console.log('database is connected...')
        })
    } catch (error) {
        console.log("error")
    }
}

module.exports = ConnectDB



