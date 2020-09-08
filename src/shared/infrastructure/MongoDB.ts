import mongoose from 'mongoose';

export default (): void => {
  const connect = () => {
    const db: string = process.env.SELLERCENTER_MONGODB_URL || '';
    mongoose
      .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log(`Successfully connected to ${db}`))
      .catch((error) => {
        console.log('Error connecting to database: ', error);
        // return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
