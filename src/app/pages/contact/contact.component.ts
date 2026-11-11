import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
    selector: 'app-contact',
    imports: [NavComponent],
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './contact.component.css'
})
export class ContactComponent {

}
