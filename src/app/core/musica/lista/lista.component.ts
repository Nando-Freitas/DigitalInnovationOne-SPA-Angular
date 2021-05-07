import { Component, OnInit } from '@angular/core';
import { Music } from '../../../models/musica';
import { MusicService } from '../../musicas.service';

@Component({
  selector: 'spa-lista-musica',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})

export class ListaMusicaComponent implements OnInit {

    music: Music;
    _musics:Music[] = [];
    filteredMusics: Music[] = [];

    //Music Variables
    musicLabels = ['Música', 'Autor', 'Compositor','Álbum','Ano','País', 'Imagem', 'Ações'];

    constructor(private musicService: MusicService) { }

    ngOnInit(): void {
        this.retrieve();
    }

    retrieve() {
        this.musicService.retrieve().subscribe({
            next: musics => {
                this._musics = musics;
                this.filteredMusics = this._musics;
            },
            error: err => console.log('Error', err)
        })
    }

    deletar(idMusic: number): void {
        this.musicService.deletar(idMusic).subscribe({
            next: () => {
                console.log('Deleted with success');
                this.retrieve();
            },
            error: err => console.log('Error', err)
        })
    }
}
