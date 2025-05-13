const mongoose = require('mongoose');

// Definizione del modello User
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);

// Funzione per creare un utente
async function createUser(name, email) {
  const user = new User({ name, email });
  return await user.save();
}

// Funzione per trovare un utente
async function findUserByEmail(email) {
  return await User.findOne({ email });
}

module.exports = { createUser, findUserByEmail };
