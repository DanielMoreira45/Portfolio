import { Component, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import info from '../../assets/infos_cards.json';
import { CardComponent } from '../card/card.component';


@Component({
    selector: 'app-list-cards',
    standalone: true,
    imports: [CommonModule, CardComponent],
    templateUrl: './list-cards.component.html',
    styleUrl: './list-cards.component.css'
})

export class ListCardsComponent {
    data = info;
}
