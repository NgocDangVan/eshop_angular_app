import { Component } from '@angular/core';
import { CategoriesStoreItem } from './services/category/categories.storeItem';
import { ProductStoreItem } from './services/product/product.storeItem';
import { SearchKeyword } from './types/searchKeyword.type';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private categoriesStoreItem: CategoriesStoreItem,
    private productStoreItem: ProductStoreItem
  ){
    this.categoriesStoreItem.loadCategories();
    this.productStoreItem.loadProduct();
  }

  onSelectedCategory(categoryId: number): void {
    this.productStoreItem.loadProduct('mainCategoryId='+categoryId);
  }

  onSearchKeyword(searchKeyword: SearchKeyword): void {
    this.productStoreItem.loadProduct('mainCategoryId='+searchKeyword.categoryId + '&keyword='+searchKeyword.keyword);
  }
}
