import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ListCompetencesComponent } from "../../componants/list-competences/list-competences.component";


@Component({
    selector: 'app-home',
    imports: [NavComponent, ListCompetencesComponent],
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './home.component.css'
})
export class HomeComponent {

}
