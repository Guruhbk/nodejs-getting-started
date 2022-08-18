import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();
const port = process.env.PORT || 3000;
// loader(app);
app.use(helmet());
app.use(cors());

app.use('/api', routes);
app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return process.exit(1);
  }
  console.log(`Server is running on ${port}`);
});

export default app;
