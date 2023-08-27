import Loki from 'lokijs';

const db = new Loki('auth.db', {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 10000, // 10 seconds
});

function databaseInitialize() {
  const users = db.getCollection('users');
  if (users === null) {
    db.addCollection('users', { indices: ['username'] });
  }
}

export function getUsersCollection() {
  return db.getCollection('users');
}

export default db;
