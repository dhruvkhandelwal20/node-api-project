import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

app.listen(process.env.PORT_NUMBER, () => {
  console.log(`Server is running at Port: ${process.env.PORT_NUMBER}`);
});