const authService = require("./auth.service");

function userAuthenticate(req, res, next) {
  console.log(req.body);
  authService
    .auth(req.body)
    .then((result) => {
      res.status(200).json({ message: "User logged in sucessfully", result });
    })
    .catch((err) => next(err));
}

function userRegister(req, res, next) {
  authService
    .register(req.body)
    .then((result) =>
      res.status(200).json({
        message: "User registered sucessfully you can login now",
        result,
      })
    )
    .catch((err) => next(err));
}

module.exports = {
  userAuthenticate,
  userRegister,
};
