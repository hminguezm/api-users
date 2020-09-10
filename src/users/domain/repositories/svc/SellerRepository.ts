import Seller, { SellerInterface } from '../../entity/svc/Seller';
import RepositoryBase from './base/RepositoryBase';

class SellerRepository extends RepositoryBase<SellerInterface> {
  constructor() {
    console.log('Seller');
    console.log({ Seller });
    super(Seller);
  }
}

export = SellerRepository;
