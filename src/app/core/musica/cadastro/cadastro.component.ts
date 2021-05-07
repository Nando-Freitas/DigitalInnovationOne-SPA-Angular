import { Component, OnInit, Input } from '@angular/core';
import { Music } from '../../../models/musica';
import { MusicService } from '../../musicas.service';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms'
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'spa-cad-musica',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})

export class CadMusicaComponent implements OnInit {

    imageUrl:String = "assets/";

    constructor(private musicService: MusicService) { }

    ngOnInit(): void {
    }

    salvar(musica: NgForm): void {
        var valores = musica.control.value
        valores.imagem = valores.imagem.replace("C:\\fakepath\\",this.imageUrl);
        console.log(valores.imagem)
        this.musicService.salvar(musica.value).subscribe({
            next: musicas => console.log('Saved with success', musicas),
            error: err => console.log('Error', err)
        });
        confirm("Cadastrado com sucesso!");
        this.redirect();
    }

    redirect():void{
        document.location.href = '';
    }


}
