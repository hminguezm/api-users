import connect from '../src/shared/infrastructure/MongoDB';

describe('database', () => {
  it('mongoose', async () => {
    connect();
  });
});
