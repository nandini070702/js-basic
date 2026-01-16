//fake database
let users = [];
let idCounter = 1;


//GET users fetch all users
const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

//GET /user/:id fetch single user
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
};

// CREATE user
const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email required" });
  }

  const newUser = {
    id: idCounter,
    name,
    email
  };

  users.push(newUser);
  idCounter++;

  res.status(201).json(newUser);
};



//PUT /users/:id Update existing user
const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (name) user.name = name;
  if (email) user.email = email;

  res.status(200).json({
    message: "User updated successfully",
    user
  });
};

//DELETE 
const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  const userExists = users.some(user => user.id === id);

  if (!userExists) {
    return res.status(404).json({ message: "User not found" });
  }

  users = users.filter(user => user.id !== id);

  res.status(200).json({ message: "User deleted successfully" });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};