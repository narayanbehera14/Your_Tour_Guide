
import app from './app.js'
import dotenv from "dotenv"
import connectDB from './configs/mongdb.js'
dotenv.config({ path: "../env" })

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log("Server running For Port:" + process.env.PORT || 3000)
        })
    })
    .catch((error) => {
        console.log("Mongodb Connection Faild" + error)
    })

