import { Router } from 'express';
import { VersionHealth } from '../../../../../version';
import { UserRepository } from '../../../../../users/infrastructure/persistence/mongoose/UserRepository';
import { CreateUserUseCase } from '../../../../../users/application/use-case/CreateUserUseCase';
import { CreateUserController } from '../../../../../users/infrastructure/controller/CreateUserController';

export class Routes {
  public router: Router;
  private versionHealth: VersionHealth;

  private userRepository = new UserRepository();
  private createUserUseCase = new CreateUserUseCase(this.userRepository);
  private createUserController;

  constructor() {
    this.router = Router();
    this.versionHealth = new VersionHealth();
    this.createUserController = new CreateUserController(this.createUserUseCase);
  }

  public routes(): Router {
    this.router.get('/health', this.versionHealth.run);
    this.router.post('/users', this.createUserController.run);

    return this.router;
  }
}
