const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
const { comparePasswords, generateToken, hashPassword } = require("../Utils/auth");
router.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "User Route is Healthy",
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({
        error: "User Not Found",
      });
    }
    const isPasswordValid = await comparePasswords(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        error: "Password is incorrect",
      });
    }

    const token = generateToken(user.username);
    return res.status(200).json({
      message: "User Succesfully Logged In",
      token: token,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

router.post('/register', async (req, res)=>{
    const { email, username, password } = req.body

    try{
        const existingUser = await User.findOne({ $or : [{username}, {email}]})
        if(existingUser){
            return res.status(400).json({
                error: "Username or email already exist !!"
            })
        }
        const hashedPassword = await hashPassword(password)
        const newUser = new User({username, email, password: hashedPassword})
        await newUser.save()
        res.status(201).json({ message: 'User registered successfully' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
      }

})

module.exports = router;
