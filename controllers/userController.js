const User = require('../models/user');

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const results = await User.find({});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  }, 
  getUser: async (req, res, next) => {
    try {
      const results = await User.find({email:req.params.email});
      if(results.length != 0){
        res.send(results);
      } else {
        res.status(404).json({'error':'Not Found'});
      }
    } catch (error) {
      console.log(error.message);
    }
  }, 
  createUser: async (req, res, next) => {
    const result = await User.findOne({ email: req.body.email });
    
    if(result == null){
        User.create(req.body).then(
            (user) => {
            console.log("User has been Added ", user);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.json(user);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    } else {
        res.status(422).json({'error':'Record already exists'});
    }
  }
};