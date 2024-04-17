import app from './src/app';
import { config } from './src/config/config';
import connectDB from './src/config/db';

const PORT = config.port || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
