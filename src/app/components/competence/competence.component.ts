import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-competence',
    imports: [CommonModule],
    templateUrl: './competence.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './competence.component.css',
})
export class CompetenceComponent {
    @Input() titre!: string;
    @Input() pourcentage!: number;
    delay: number = 0.1;

    getSkillBarStyle(): { [key: string]: string } {
        return {
            width: `${this.pourcentage}%`,
            animationDelay: `${this.delay}s`,
        };
    }
}
