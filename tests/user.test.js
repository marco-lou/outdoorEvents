/*const mongoose = require('mongoose');
const { createUser, findUserByEmail } = require('./user');  // Modulo da testare

beforeAll(async () => {
  // Connetti al database (potresti usare un database di test separato)
  await mongoose.connect('mongodb://localhost:27017/test_db', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  // Disconnessione dal database dopo i test
  await mongoose.connection.close();
});

describe('User model tests', () => {
  it('should create and find a user', async () => {
    // Crea un utente
    const user = await createUser('John Doe', 'john.doe@example.com');
    
    // Verifica che l'utente sia stato creato correttamente
    expect(user).toHaveProperty('_id');
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('john.doe@example.com');
    
    // Trova l'utente nel database
    const foundUser = await findUserByEmail('john.doe@example.com');
    
    // Verifica che l'utente trovato sia lo stesso
    expect(foundUser).not.toBeNull();
    expect(foundUser.name).toBe('John Doe');
    expect(foundUser.email).toBe('john.doe@example.com');
  });
});*/
