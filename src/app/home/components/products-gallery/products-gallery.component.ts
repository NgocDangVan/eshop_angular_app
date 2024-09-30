import { Component } from '@angular/core';
import { ProductStoreItem } from '../../services/product/product.storeItem';
@Component({
  selector: 'app-products-gallery',
  templateUrl: './products-gallery.component.html',
  styleUrls: ['./products-gallery.component.scss']
})
export class ProductsGalleryComponent {
  constructor(private productStoreItem: ProductStoreItem){}

  onSelectedSubCategory(subCategoryId: number): void {
    this.productStoreItem.loadProduct('subCategoryId='+subCategoryId);
  }
}
