import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'services/water-resources',
    loadComponent: () => import('./features/services/water-resources/water-resources.component').then(m => m.WaterResourcesComponent)
  },
  {
    path: 'services/land-development',
    loadComponent: () => import('./features/services/land-development/land-development.component').then(m => m.LandDevelopmentComponent)
  },
  {
    path: 'services/transportation',
    loadComponent: () => import('./features/services/transportation/transportation.component').then(m => m.TransportationComponent)
  },
  {
    path: 'services/environmental',
    loadComponent: () => import('./features/services/environmental/environmental.component').then(m => m.EnvironmentalComponent)
  },
  {
    path: 'services/permitting',
    loadComponent: () => import('./features/services/permitting/permitting.component').then(m => m.PermittingComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'experience',
    loadComponent: () => import('./features/experience/experience-page.component').then(m => m.ExperiencePageComponent)
  },
  {
    path: 'experience/:slug',
    loadComponent: () => import('./features/experience/components/project-detail/project-detail.component').then(m => m.ProjectDetailComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'careers',
    loadComponent: () => import('./features/careers/careers.component').then(m => m.CareersComponent)
  },
  { path: '**', redirectTo: '' }
];
