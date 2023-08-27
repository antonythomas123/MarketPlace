import Loki from "lokijs";

const db = new Loki("auth.db", {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 10000, // 10 seconds
});

function databaseInitialize() {
  const users = db.getCollection("users");
 // const reviews = db.getCollection("reviews");

  if (users === null) {
    db.addCollection("users", { indices: ["username"] });
  }
  // if (reviews === null) {
  //   db.addCollection("reviews", { indices: ["productId"] });
  // }
}

export function getUsersCollection() {
  return db.getCollection("users");
}

export async function getUsersReviewCollection() {
  return new Promise((resolve, reject) => {
    db.loadDatabase({}, () => {
      const reviews = db.getCollection("reviews");
      if (!reviews) {
        resolve(db.addCollection("reviews", { indices: ["productId", "userId"] }));
      } else {
        resolve(reviews);
      }
    });
  });
}


export default db;
