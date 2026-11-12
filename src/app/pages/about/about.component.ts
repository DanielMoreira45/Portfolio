import { Component } from '@angular/core';
import { ListCompetencesComponent } from '../../components/list-competences/list-competences.component';

@Component({
    imports: [ListCompetencesComponent],
    selector: 'app-about',
    styleUrl: './about.component.css',
    templateUrl: './about.component.html',
})
export class AboutComponent {}
