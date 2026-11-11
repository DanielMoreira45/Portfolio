import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ListCardsComponent } from '../../componants/list-cards/list-cards.component';

@Component({
    selector: 'app-project',
    imports: [NavComponent, ListCardsComponent],
    templateUrl: './project.component.html',
    styleUrl: './project.component.css'
})
export class ProjectComponent {

}
