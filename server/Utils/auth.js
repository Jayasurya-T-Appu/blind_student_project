const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const generateToken = (payload) =>{
    return jwt.sign(payload, "BLIND")
}

const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (err) {
      console.log(err);
        throw new Error('Error hashing password');
    }
  };
  
  const comparePasswords = async (plaintextPassword, hashedPassword) => {
    console.log(plaintextPassword, hashedPassword);
    return await bcrypt.compare(plaintextPassword, hashedPassword);
  };
  
  module.exports = {
    generateToken,
    hashPassword,
    comparePasswords,
  };