const users   =require("../models/user.js");

/*
Post request json file structure


    obj =  {
        "name":name,
        "email":email,
        "password": password
    }

 */

//You need to complete the route of user register
//you need to register the user and return the id assign to the user.
//you will get error if user mail allready exist in that case you need to return 404 status with err message that you get.
//to look the user schema look ../models/user.js

const registerUser =async (req, res) => {

    try{

        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
    
        let result = new users({name,email,password});
    
        let finalResponse = await result.save();

        res.send(finalResponse._id);
    }
    catch(err){
        res.status(404).send(err.message);
    }

}

module.exports = { registerUser };