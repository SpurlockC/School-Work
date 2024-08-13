const signup = (req, res) => {
  const { email, phone, birthday, password } = req.body;
  res.json({
    message: "User has successfully signed up!",
    user: { email, phone, birthday, password: '●●●●●●●●●●●' }
  });
};

module.exports = { signup };
