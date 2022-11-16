import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReadComponent } from './read/read.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = [
{path:'', component: HomepageComponent},
{path:'character/:id', component: ReadComponent},
{path:'create', component: CreateComponent},
{path:'edit', component: EditComponent},
{path:'delete', component: DeleteComponent},
{path: '**', component: HomepageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
