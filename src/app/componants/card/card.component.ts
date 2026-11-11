import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() image!: {src: string; alt: string};
  @Input() titre!: string;
  @Input() description!: string;
  @Input() url!: string;
}
