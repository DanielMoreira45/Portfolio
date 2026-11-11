import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListCompetencesComponent } from "../../components/list-competences/list-competences.component";


@Component({
    selector: 'app-home',
    imports: [ListCompetencesComponent],
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './home.component.css'
})
export class HomeComponent {

}
