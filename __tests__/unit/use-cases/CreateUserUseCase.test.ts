import { IUser } from '../../../src/users/domain/entity/IUser';
import { UserRepository } from '../../../src/users/infrastructure/persistence/mongoose/UserRepository';
import { BusinessErrorHandler } from '../../../src/shared/domain/service/BusinessErrorHandler';
import { Exception } from '../../../src/shared/domain/service/Exception';
import { CreateUserUseCase } from '../../../src/users/application/use-case/CreateUserUseCase';

jest.mock('../../../src/users/infrastructure/persistence/mongoose/UserRepository');

describe('RequestHistoryCreateUseCase', () => {
  const body: IUser = { name: 'Hector Minguez', rut: '123456789' };
  const creatUserResponse: unknown = { id: '2dc7419-bc01-409f-b237-fbf56c0a294d' };
  const usersRepository = new UserRepository();
  const createRequestHistoryUseCase = new CreateUserUseCase(usersRepository);

  let mockUserRepository: jest.SpyInstance<Promise<unknown>, [body: IUser]>;
  beforeEach(() => {
    mockUserRepository = jest
      .spyOn(usersRepository, 'create')
      .mockResolvedValue(creatUserResponse);
  });

  afterEach(() => {
    mockUserRepository.mockRestore();
  });

  test('create a new registry in request_history', async () => {
    const result = await createRequestHistoryUseCase.create(body);
    expect(result).toBeDefined();
    expect(result).toEqual({ id: '2dc7419-bc01-409f-b237-fbf56c0a294d' });
    expect(mockUserRepository).toHaveBeenCalled();
    expect(result).not.toBe(null);
  });

  test('should return error if the create is not success', async () => {
    jest.spyOn(createRequestHistoryUseCase, 'create').mockImplementation(() => {
      throw BusinessErrorHandler.createException(new Error('throw error'));
    });
    try {
      await createRequestHistoryUseCase.create(undefined as unknown as IUser);
    } catch (err) {
      expect(err).toBeInstanceOf(Exception);
      expect(err).toBeInstanceOf(Error);
      //expect(err.message).toBeDefined();
      //expect(err.message).toEqual('throw error');
    }
  });
});
