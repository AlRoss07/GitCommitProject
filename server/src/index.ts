import app from "./app";
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.Port || 5000;

app.listen(port, () => {
  console.log(`Server is running in the port ${port}`);
});
