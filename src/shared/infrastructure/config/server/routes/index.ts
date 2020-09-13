import { Application } from 'express';
import { SellerRepository } from '../../../../../sellers/infrastructure/persistence/mongoose/SellerRepository';
import { FindAllUseCase } from '../../../../../sellers/application/use-cases/FindAllUseCase';
import { FindByIdUseCase } from '../../../../../sellers/application/use-cases/FindByIdUseCase';
import { SellerCreatorUseCase } from '../../../../../sellers/application/use-cases/SellerCreatorUseCase';
import { FindAllSellersController } from '../../../../../sellers/infrastructure/controllers/FindAllSellersController';
import { FindSellerByIdController } from '../../../../../sellers/infrastructure/controllers/FindSellerByIdController';
import { SellerCreatorController } from '../../../../../sellers/infrastructure/controllers/SellerCreatorController';

export class Routes {
  // repositories
  private sellerRepository: SellerRepository = new SellerRepository();

  // use cases
  private findAllUseCase = new FindAllUseCase(this.sellerRepository);

  private findByIdUseCase = new FindByIdUseCase(this.sellerRepository);

  private sellerCreatorUseCase = new SellerCreatorUseCase(this.sellerRepository);

  // Controllers
  private findAllSellersController: FindAllSellersController;

  private findSellerByIdController: FindSellerByIdController;

  private sellerCreatorController: SellerCreatorController;

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
  }

  public routes(app: Application): void {
    app.route('/sellers').get(this.findAllSellersController.run);
    app.route('/sellers/:id').get(this.findSellerByIdController.run);
    app.route('/sellers').post(this.sellerCreatorController.run);
  }
}
