import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { CompetenceComponent } from '../competence/competence.component';
import info from '../../assets/infos_competence.json';

@Component({
    selector: 'app-list-competences',
    imports: [],
    templateUrl: './list-competences.component.html',
    styleUrls: ['./list-competences.component.css']
})
export class ListCompetencesComponent implements AfterViewInit {
  @ViewChild('skillsContainer', { read: ViewContainerRef, static: false })
  skillsContainer!: ViewContainerRef;

  data: any = info['informatique'];

  ngAfterViewInit() {
    this.createCategories();
  }

  private createCategories() {
    this.data.forEach((categoryData: any) => {
      const categoryElement = document.createElement('div');
      categoryElement.className = 'category-container';
      categoryElement.setAttribute('style', 'position: relative; max-width: 400px; width: 100%; background: #282828; margin: 0 15px; padding: 10px 20px; border-radius: 7px; margin-bottom: 20px; flex-grow: 1;');

      const titleElement = document.createElement('h3');
      titleElement.textContent = categoryData.titre;
      titleElement.className = 'category-title';
      titleElement.setAttribute('style', 'color: #fff; font-size: 1.5em; margin: 0;');

      categoryElement.appendChild(titleElement);
      this.skillsContainer.element.nativeElement.appendChild(categoryElement);
      this.createCompetences(categoryData.competences, categoryElement);
    });
  }

  private createCompetences(competences: any, categoryElement: HTMLElement) {
    competences.forEach((competenceData: any) => {
      const componentRef = this.skillsContainer.createComponent(CompetenceComponent);

      componentRef.setInput('titre', competenceData.nom);
      componentRef.setInput('pourcentage', competenceData.pourcentage);

      categoryElement.appendChild(componentRef.location.nativeElement);
    });
  }
}   