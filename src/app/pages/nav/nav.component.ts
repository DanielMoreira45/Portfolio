import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-nav',
    imports: [RouterLink, RouterLinkActive, RouterOutlet],
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent {}
