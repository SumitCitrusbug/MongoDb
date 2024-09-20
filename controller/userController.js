const User = require("../model/user.model.js");

//index page

async function index(req, res) {
  res.render("index");
}
async function read(req, res) {
  const user = await User.find({});
  res.render("read", { alluser: user });
}

async function getUser(req, res) {
  return res.json("user");
  // const user = await User.find({});
  // user
  //   .then(() => {
  //     return res.json(user);
  //   })
  //   .catch((err) => {
  //     return res.status(500).json({ error: err.message });
  //   });
  // Retrieve all users from the database.
}
async function getUserById(req, res) {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id.toString());
    user
      .save()
      .then(() => {
        return res.render("edit", { user: user });
      })
      .catch((err) => {
        return res.status(500).json({ error: err.message });
      });
  } catch (err) {
    return res.status(404).json({ error: "User Not found" });
  }
}

async function createUser(req, res) {
  try {
    // Create the user
    const result = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    // Return the result
    return res.redirect("/read");
  } catch (err) {
    // Handle errors (e.g., validation, database errors)
    return res.status(500).json({ error: err.message });
  }
}

//update user in the database
async function updateUser(req, res) {
  console.log(req.body);
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.redirect("/read");
}

//delete user from the database
async function deleteUser(req, res) {
  console.log(req.params.id);
  const user = await User.findByIdAndDelete({ _id: req.params.id.toString() });
  console.log(user);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.redirect("/read");
}
//export async function
module.exports = {
  index,
  read,
  getUser,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
