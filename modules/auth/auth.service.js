const userModel = require("./../user/user.model");
const bcrypt = require("bcrypt");
const config = require("./../../configs/config.json");
const jwt = require("jsonwebtoken");

async function register(data) {
  const { email, password } = data;
  await findByEmail(email);
  const hashPassword = bcrypt.hashSync(password, config.BCRYPT.SALT);
  var newUser = new userModel({});
  newUser.email = email;
  newUser.password = hashPassword;
  return newUser.save();
}

async function auth(data) {
  const { email, password } = data;
  const user = await userModel.findOne({ email: email });
  if (!user) throw "User with" + ` ${email} ` + "not found";
  const isMatched = bcrypt.compareSync(password, user.password);
  if (isMatched) {
    //generate web token
    var token = generateJwtToken(user);
    return { user, token };
  } else throw "Invalid password";
}

//check email already registered or not before registering user
async function findByEmail(email) {
  const user = await userModel.findOne({ email: email });
  if (user) throw "Email already registered";
  return user;
}

// create a jwt token containing the user id
function generateJwtToken(user) {
  return jwt.sign({ id: user._id }, config.JWT.JWT_SECRET, { expiresIn: "1d" });
}

module.exports = {
  register,
  auth,
};
