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
  const orders = db.getCollection("orders");
  const orderedItems = db.getCollection("orderedItems");

  if (users === null) {
    db.addCollection("users", { indices: ["username"] });
  }
  if (orders === null) {
    db.addCollection("orders", { indices: ["userId"] });
  }

  if (orderedItems === null) {
    db.addCollection("orderedItems", { indices: ["orderId", "productId"] });
  }
}

export function getUsersCollection() {
  return db.getCollection("users");
}

export function getOrdersCollection() {
  return db.getCollection("orders");
}

export function getOrderedItemsCollection() {
  return db.getCollection("orderedItems");
}

export async function getUsersReviewCollection() {
  return new Promise((resolve, reject) => {
    db.loadDatabase({}, () => {
      const reviews = db.getCollection("reviews");
      if (!reviews) {
        resolve(
          db.addCollection("reviews", { indices: ["productId", "userId"] })
        );
      } else {
        resolve(reviews);
      }
    });
  });
}

export function updateOrderedItemStatus(orderId, productId, status) {
  const orderedItems = db.getCollection("orderedItems");
  if (orderedItems) {
    const orderedItem = orderedItems.findOne({ orderId, productId });
    if (orderedItem) {
      orderedItem.status = status;
      orderedItems.update(orderedItem);
    }
  }
}

export default db;
