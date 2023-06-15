import { connect } from "mongoose";

(async () => {
  try {
    const db = await connect("mongodb://127.0.0.1:27017/mern-stack")
    console.log("Database is connected to:", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
