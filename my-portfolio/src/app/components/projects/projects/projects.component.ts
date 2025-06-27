import { Component } from '@angular/core';

interface TechTag {
  name: string;
  link?: string;
}
interface Project {
  title: string;
  img: string;
  demo: string;
  tech: TechTag[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  /** egyszerű mintaadat – bővíthető */
  projects: Project[] = [
    {
      title: 'Cinema Bites Project',
      img: './img/alpha-project.png',
      demo: 'https://angular-fb-final-project-alpha.web.app/',
      tech: [
        { name: 'Angular', link: '/tags/angular' },
        { name: 'Firebase', link: 'https://firebase.google.com/' },
        { name: 'SCSS' },
      ],
    },
    {
      title: 'Recipe Planner',
      img: 'assets/img/projects/recipe.webp',
      demo: 'https://recipe-planner-alpha.web.app/',
      tech: [
        { name: 'React', link: '/tags/react' },
        { name: 'Tailwind', link: 'https://tailwindcss.com/' },
        { name: 'TypeScript' },
      ],
    },
    {
      title: 'Chef’s Dashboard',
      img: 'assets/img/projects/dashboard.webp',
      demo: 'https://chef-dashboard-alpha.web.app/',
      tech: [
        { name: 'Vue', link: '/tags/vue' },
        { name: 'Pinia' },
        { name: 'Chart.js', link: 'https://www.chartjs.org/' },
      ],
    },
  ];
}
