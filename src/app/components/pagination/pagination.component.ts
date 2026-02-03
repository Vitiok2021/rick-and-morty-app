import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  @Input() currentPage = 1;
  @Input() totalPages = 0;

  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  onNext() {
    this.next.emit();
  }
  onPrev() {
    this.prev.emit();
  }
}
