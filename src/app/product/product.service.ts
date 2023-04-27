import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _products: Product[] = [
    new Product(
      'ref1',
      'iphone 14 pro max',
      'https://i2-prod.irishmirror.ie/incoming/article28651682.ece/ALTERNATES/s1200c/1_Apple-iPhone-14-Pro-iPhone-14-Pro-Max-silver_screen.png',
      'iphone 14 pro max 6.7" Ecran super Retina XDR',
      1500,
      20
    ),
    new Product(
      'ref2',
      'sumsung note 13',
      'https://www.notebookcheck.net/typo3temp/_processed_/5/a/csm_4_3_Teaser_Samsung_Galaxy_Note20_Ultra_5G_SM-N986B_MysticWhite_f4a260a140.jpg',
      'sumsung note 13 7,2" ...',
      12000,
      10
    )
  ]

  get products(){
    return this._products;
  }

  constructor() { }
}
