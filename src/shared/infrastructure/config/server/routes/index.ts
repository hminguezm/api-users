import { Application } from 'express';
import { SellerRepository } from '../../../../../sellers/infrastructure/persistence/mongoose/SellerRepository';
import { FindAllUseCase } from '../../../../../sellers/application/use-cases/FindAllUseCase';
import { FindByIdUseCase } from '../../../../../sellers/application/use-cases/FindByIdUseCase';
import { FindAllSellersController } from '../../../../../sellers/infrastructure/controllers/FindAllSellersController';
import { FindSellerByIdController } from '../../../../../sellers/infrastructure/controllers/FindSellerByIdController';

export class Routes {
  // repositories
  private sellerRepository: SellerRepository = new SellerRepository();

  // use cases
  private findAllUseCase = new FindAllUseCase(this.sellerRepository);

  private findByIdUseCase = new FindByIdUseCase(this.sellerRepository);

  // Controllers
  private findAllSellersController: FindAllSellersController;

  private findSellerByIdController: FindSellerByIdController;

  constructor() {
    this.findAllSellersController = new FindAllSellersController(
      this.findAllUseCase
    );
    this.findSellerByIdController = new FindSellerByIdController(
      this.findByIdUseCase
    );
  }

  public routes(app: Application): void {
    app.route('/sellers').get(this.findAllSellersController.run);
    app.route('/sellers/:id').get(this.findSellerByIdController.run);
  }
}
