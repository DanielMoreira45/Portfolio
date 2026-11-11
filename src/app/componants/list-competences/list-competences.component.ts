import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { CompetenceComponent } from '../competence/competence.component';
import info from '../../assets/infos_competence.json';

@Component({
    selector: 'app-list-competences',
    imports: [CommonModule, CompetenceComponent],
    templateUrl: './list-competences.component.html',
    styleUrls: ['./list-competences.component.css']
})
export class ListCompetencesComponent implements AfterViewInit {
  @ViewChild('skillsContainer', { read: ViewContainerRef, static: false }) skillsContainer!: ViewContainerRef;

  data: any = info['informatique'];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

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
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CompetenceComponent);
      const componentRef = this.skillsContainer.createComponent(componentFactory);
      const competenceComponent = componentRef.instance as CompetenceComponent;

      competenceComponent.titre = competenceData.nom;
      competenceComponent.pourcentage = competenceData.pourcentage;

      categoryElement.appendChild(componentRef.location.nativeElement);
    });
  }
}
