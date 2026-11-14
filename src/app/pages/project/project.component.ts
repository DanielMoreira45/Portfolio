import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListCardsComponent } from '../../components/list-cards/list-cards.component';

@Component({
    selector: 'app-project',
    imports: [ListCardsComponent],
    templateUrl: './project.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './project.component.css',
})
export class ProjectComponent {}
