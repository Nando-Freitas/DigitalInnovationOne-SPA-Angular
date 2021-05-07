import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMusicaComponent } from './core/musica/lista/lista.component';
import { CadMusicaComponent } from './core/musica/cadastro/cadastro.component';

const routes: Routes = [
    {
        path: '', component: ListaMusicaComponent
    },
    {
        path: 'cadastro', component: CadMusicaComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
