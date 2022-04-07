import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './pages/cover/cover.component';

const routes: Routes = [
  {
    path: 'cover', component: CoverComponent
  },
  {
    path: '',
    redirectTo: 'cover',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
