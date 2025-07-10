import { Component } from '@angular/core';

interface TechTag {
  name: string;
  link?: string;
}
interface Project {
  title: string;
  img: string;
  demo: string;
  description: string;
  tech: TechTag[];
  showDescription?: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  hoveredProject: any = null;

  onMouseEnter(p: any) {
    this.hoveredProject = p;
  }

  onMouseLeave() {
    this.hoveredProject = null;
  }

  projects: Project[] = [
    {
      title: 'Cinema Bites Project',
      img: './img/alpha-project.png',
      demo: 'https://angular-fb-final-project-alpha.web.app/',
      description: 'A personal portfolio built with Angular 16 and SCSS. ',
      showDescription: false,
      tech: [
        { name: 'Angular', link: '/tags/angular' },
        { name: 'Firebase', link: 'https://firebase.google.com/' },
        { name: 'SCSS' },
      ],
    },
    {
      title: 'Cinema Bites Project',
      img: './img/portfolio-project.png',
      demo: 'https://my-portfolio.web.app/',
      description: 'A personal portfolio built with Angular 16 and SCSS. ',
      showDescription: false,
      tech: [
        { name: 'Angular', link: '/tags/angular' },
        { name: 'Firebase', link: 'https://firebase.google.com/' },
        { name: 'SCSS' },
      ],
    },
  ];

  toggleDescription(project: any, event: MouseEvent): void {
    event.preventDefault(); // ne ugorjon linkre rögtön
    project.showDescription = !project.showDescription;
  }
}
