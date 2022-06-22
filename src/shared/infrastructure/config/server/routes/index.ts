import { Router } from 'express';
import { VersionHealth } from '../../../../../version';

export class Routes {
  public router: Router;
  private versionHealth: VersionHealth;

  constructor() {
    this.router = Router();
    this.versionHealth = new VersionHealth();
  }

  public routes(): Router {
    this.router.get('/health', this.versionHealth.run);

    return this.router;
  }
}
