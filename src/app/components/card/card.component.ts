import { Component, input } from '@angular/core';

@Component({
    selector: 'app-card',
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    image = input.required<{ src: string; alt: string }>();
    titre = input.required<string>();
    description = input.required<string>();
    url = input.required<string>();
}
