import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const { keyword, age } = req.query;
  console.log(keyword, age);
  const users = await User.find({});
  res.json({
    success: true,
    users,
  });
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });

  res.status(201).cookie("sample-cookie", "cookie-value").json({
    success: true,
    message: "Registered Successfully!",
  });
};

export const sampleUserIdFunction = (req, res) => {
  res.json({
    success: true,
    message: "Just a Sample",
  });
};

export const getUserDetails = async (req, res) => {
  const { _id } = req.params;
  const user = await User.findById(_id);

  res.json({
    success: true,
    user,
  });
};

export const updateUserDetails = async (req, res) => {
  const { _id } = req.params;
  const user = await User.findById(_id);

  res.json({
    success: true,
    message: "User details Updated Successfully!",
  });
};

export const deleteUser = async (req, res) => {
  const { _id } = req.params;
  const user = await User.findById(_id);

  res.json({
    success: true,
    message: "User deleted successfully!",
  });
};
