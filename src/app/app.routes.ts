import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectComponent } from './pages/project/project.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'projet', component: ProjectComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'}

];
