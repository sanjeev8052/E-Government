
const jwt = require("jsonwebtoken")
const Employee = require("../models/Emp/Employee")

exports.isAuthenticateemp = async (req, res, next) => {

    try {
        const { emptoken } = req.cookies
        // console.log()
        if (!emptoken) {
            return res.status(401).json({ message: "Please Login First" })
        }
        const decoded = jwt.verify(emptoken, process.env.EMP_SECRET_KEY)
        req.admin = await Employee.findById(decoded._id)
        
         next();
    } catch (error) {
        res.status(500).json(error.message)
    }
}