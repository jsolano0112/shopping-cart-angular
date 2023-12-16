import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>();

  categories = ['shoes', 'sport'];

  ngOnInit(): void {

  }

  onShowCategory(category: string): void {
    this.showCategory.emit(category);

  }
}