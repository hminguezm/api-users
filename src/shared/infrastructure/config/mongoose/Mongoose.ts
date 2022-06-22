import mongoose from 'mongoose';

export class Mongoose {
  private db: string;

  constructor() {
    this.db = process.env.MONGODB_URL || '';
  }

  connection = (): void => {
    mongoose
      .connect(this.db, { autoIndex: true })
      .then(() => log.info(`Successfully connected to ${this.db}`))
      .catch((error) => {
        log.error('Error connecting to database: ', error);
      });
  };
}
