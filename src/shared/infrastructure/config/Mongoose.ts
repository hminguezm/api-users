import mongoose from 'mongoose';

export default (): void => {
  const connect = () => {
    const db: string = process.env.SELLERCENTER_MONGODB_URL || '';
    mongoose
      .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        autoIndex: true,
        poolSize: 10,
      })
      .then(() => console.log(`Successfully connected to ${db}`))
      .catch((error) => {
        console.log('Error connecting to database: ', error);
        // return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);

  const debug = () => {
    const ENVIRONMENT: string = process.env.ENVIRONMENT_TYPE || 'dev';
    if (ENVIRONMENT !== 'production') {
      mongoose.set(
        'debug',
        (
          collectionName: unknown,
          method: unknown,
          query: unknown,
          doc: unknown
        ) => {
          console.log(
            `${collectionName}.${method}`,
            JSON.stringify(query),
            doc
          );
        }
      );
    }
  };
  debug();
};
