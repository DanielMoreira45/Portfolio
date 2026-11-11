import { Component, AfterViewInit, ViewChild, ViewContainerRef, ChangeDetectionStrategy } from '@angular/core';

import info from '../../assets/infos_cards.json';
import { CardComponent } from '../card/card.component';


@Component({
    selector: 'app-list-cards',
    imports: [CardComponent],
    templateUrl: './list-cards.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './list-cards.component.css'
})

export class ListCardsComponent {
    data = info;
}
