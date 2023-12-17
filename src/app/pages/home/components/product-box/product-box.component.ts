import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styles: [
  ]
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Output() addToCard = new EventEmitter();

  product: Product | undefined = {
    id: 1,
    title: 'Snickers',
    price:150,
    category: 'shoes',
    description: 'Description',
    image: 'https://via.placeholder.com/150'
  };
  constructor(){}

  ngOnInit(): void {
    
  }

  onAddToCart(): void{
    this.addToCard.emit(this.product);
  }
}
