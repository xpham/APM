import {Component, OnInit} from '@angular/core';
import {IProduct} from "./product";
import {ProductService} from "./product.service";

@Component({
  //selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string;

  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private productService: ProductService) {
    // The expression calls the getter below that itself will call performFilter
    // at that point the products has not been called yet in ngOnInit
    // this.listFilter = 'cart';
  }

  // [(ngModel)]='listFilter' reacts to these getter and setter
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }


  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  // Lifecyle hooks
  ngOnInit() {
    //this.products = this.productService.getProducts();

    this.productService.getProducts().subscribe(
      products => {
        this.products = products, this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any> error)
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

}
