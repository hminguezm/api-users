import server from './shared/infrastructure/config/server';
import connect from './shared/infrastructure/config/Mongoose';

connect();

const PORT: number = 3000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
