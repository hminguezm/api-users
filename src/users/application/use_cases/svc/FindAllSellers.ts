import SellerRepository from '../../../domain/repositories/svc/SellerRepository';

class FindAllSellers implements FindAllSellers {
  private _sellerRepository: SellerRepository;

  constructor() {
    this._sellerRepository = new SellerRepository();
  }

  findAll(): void {
    console.log(this._sellerRepository);
    const a = this._sellerRepository.findAllSellers();
    console.log('this._sellerRepository');
    console.log(a);
    console.log('this._sellerRepository');
  }
}

export = FindAllSellers;
