import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { EventsPageComponent } from '../events-page/events-page.component';
import { InvolvedPageComponent } from '../involved-page/involved-page.component';
import { PartnershipsPageComponent } from '../partnerships-page/partnerships-page.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
  },
  {
    path: 'events',
    component: EventsPageComponent,
  },
  {
    path: 'team',
    component:InvolvedPageComponent,
  },
  {
    path: 'partnerships',
    component:PartnershipsPageComponent,
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }