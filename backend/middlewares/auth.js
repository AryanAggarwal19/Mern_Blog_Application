import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import jwt from "jsonwebtoken";

//Authentication
export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  //fetch token from cookies
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("User is not authenticated", 400));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decoded.id);
});

//Authorization

export const isAuthorized = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `User with this role (${req.user.role}) is not allowed to access this resource`
        )
      );
    }
    next();
  };
};
