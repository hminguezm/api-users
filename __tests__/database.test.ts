import connect from '../src/shared/infrastructure/config/Mongoose';

describe('database', () => {
  it('mongoose', async () => {
    connect();
  });
});
