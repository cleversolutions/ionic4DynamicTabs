import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import { SplitPanePage } from '../split-pane/split-pane.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'split-pane',
        outlet: 'split-pane',
        component: SplitPanePage,
        children: [
          {path: 'home', loadChildren: '../home/home.module#HomePageModule'},
          {path: 'about', loadChildren: '../about/about.module#AboutPageModule'},
          {path: 'contact', loadChildren: '../contact/contact.module#ContactPageModule'}
        ]
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(split-pane:split-pane/home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
