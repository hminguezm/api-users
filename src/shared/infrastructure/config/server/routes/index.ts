import { Application } from 'express';
import { SellerRepository } from '../../../../../sellers/infrastructure/persistence/mongoose/SellerRepository';
import { PreSellerRepository } from '../../../../../pre-sellers/infrastructure/persistence/mongoose/PreSellerRepository';
import { FindAllUseCase } from '../../../../../sellers/application/use-cases/FindAllUseCase';
import { FindByIdUseCase } from '../../../../../sellers/application/use-cases/FindByIdUseCase';
import { SellerCreatorUseCase } from '../../../../../sellers/application/use-cases/SellerCreatorUseCase';
import { PreSellerCreatorUseCase } from '../../../../../pre-sellers/application/use-cases/PreSellerCreatorUseCase';
import { FindAllSellersController } from '../../../../../sellers/infrastructure/controllers/FindAllSellersController';
import { FindSellerByIdController } from '../../../../../sellers/infrastructure/controllers/FindSellerByIdController';
import { SellerCreatorController } from '../../../../../sellers/infrastructure/controllers/SellerCreatorController';
import { PreSellerCreatorController } from '../../../../../pre-sellers/infrastructure/controllers/PreSellerCreatorController';

export class Routes {
  // repositories
  private sellerRepository: SellerRepository = new SellerRepository();
  private preSellerRepository: PreSellerRepository = new PreSellerRepository();

  // use cases
  private findAllUseCase = new FindAllUseCase(this.sellerRepository);

  private findByIdUseCase = new FindByIdUseCase(this.sellerRepository);

  private sellerCreatorUseCase = new SellerCreatorUseCase(
    this.sellerRepository
  );

  private preSellerCreatorUseCase = new PreSellerCreatorUseCase(
    this.preSellerRepository
  );

  // Controllers
  private findAllSellersController: FindAllSellersController;

  private findSellerByIdController: FindSellerByIdController;

  private sellerCreatorController: SellerCreatorController;

  private preSellerCreatorController: PreSellerCreatorController;

  constructor() {
    this.findAllSellersController = new FindAllSellersController(
      this.findAllUseCase
    );
    this.findSellerByIdController = new FindSellerByIdController(
      this.findByIdUseCase
    );
    this.sellerCreatorController = new SellerCreatorController(
      this.sellerCreatorUseCase
    );
    this.preSellerCreatorController = new PreSellerCreatorController(
      this.preSellerCreatorUseCase
    );
  }

  public routes(app: Application): void {
    app.route('/sellers').get(this.findAllSellersController.run);
    app.route('/sellers/:id').get(this.findSellerByIdController.run);
    app.route('/sellers').post(this.sellerCreatorController.run);
    app.route('/sellers/registry').post(this.preSellerCreatorController.run);
  }
}
