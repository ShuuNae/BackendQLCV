const { verify } = require("jsonwebtoken");

module.exports = {
  checkTokens: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      //6 words and 1 space, so we choose 7
      token = token.slice(7);
      verify(token, process.env.JWT_TOKEN, (err, decoded) => {
        if (err) {
          console.log(err);
          res.json({
            success: 0,
            message: "Invalid token",
          });
        } else {
          next();
        }
      });
    } else {
      res.json({
        success: 0,
        message: "Access denied! Unauthorized user",
      });
    }
  },
};
