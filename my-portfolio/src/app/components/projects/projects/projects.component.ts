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
      description:
        'A team-developed cinema web application built with Angular 16, Firebase, and SCSS.',
      showDescription: false,
      tech: [
        { name: 'Angular', link: '/tags/angular' },
        { name: 'Firebase', link: 'https://firebase.google.com/' },
        { name: 'TypeScript' },
        { name: 'SCSS' },
        { name: 'Bootstrap' },
        { name: 'Rest API' },
        { name: 'Authorization' },
      ],
    },
    {
      title: 'My Portfolio',
      img: './img/portfolio-project.png',
      demo: 'https://rumitibor.github.io/my-frontend-portfolio/#/',
      description: 'A personal portfolio built with Angular 16 and SCSS. ',

      showDescription: false,
      tech: [
        { name: 'Angular', link: '/tags/angular' },
        { name: 'Firebase', link: 'https://firebase.google.com/' },
        { name: 'Bootstrap' },
        { name: 'API' },
        { name: 'SCSS' },
        { name: 'TypeScript' },
      ],
    },
    {
      title: 'Bamboo Webshop',
      img: './img/bg2.jpg',
      demo: 'https://github.com/rumitibor/bamboo-webshop',
      description: 'Bamboo webshop built with Angular 16 and SCSS.  ',

      showDescription: false,
      tech: [
        { name: 'Angular', link: '/tags/angular' },
        { name: 'Firebase', link: 'https://firebase.google.com/' },
        { name: 'Authorization' },
        { name: 'Bootstrap' },
        { name: 'TypeScript' },
        { name: 'SCSS' },
      ],
    },
    {
      title: 'Progmasters Bootcamp Projects',
      img: './img/bg3.jpg',
      demo: 'https://github.com/PROGmasters-Bootcamp-2024-Okt-Frontend',
      description:
        'My Github projects at Progmasters (Frontend Developer Academy).  ',

      showDescription: false,
      tech: [
        { name: 'Angular', link: '/tags/angular' },
        { name: 'Firebase', link: 'https://firebase.google.com/' },
        { name: 'JavaScript' },
        { name: 'Bootstrap' },
        { name: 'TypeScript' },
        { name: 'CSS' },
        { name: 'SCSS' },
        { name: 'HTML5' },
        { name: 'VUE' },
        { name: 'React' },
      ],
    },
  ];

  toggleDescription(project: any, event: MouseEvent): void {
    event.preventDefault(); // ne ugorjon linkre rögtön
    project.showDescription = !project.showDescription;
  }
}
