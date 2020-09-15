import server from './shared/infrastructure/config/server';
import connect from './shared/infrastructure/config/Mongoose';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

connect();

const PORT: number = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
