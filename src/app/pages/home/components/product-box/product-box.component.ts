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

  @Input() product: Product | undefined;
  constructor(){}

  ngOnInit(): void {
    
  }

  onAddToCart(): void{
    this.addToCard.emit(this.product);
  }
}
