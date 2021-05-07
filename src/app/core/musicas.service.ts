import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Music } from '../models/musica';

@Injectable({
    providedIn: 'root'
})

export class MusicService{

    private url:string = 'http://localhost:3000/musicas';

    constructor(private http: HttpClient){}

    salvar(music: Music): Observable<Music>{
        return this.http.post<Music>(`${this.url}`, music);
    }

    retrieve(): Observable<Music[]>{
        return this.http.get<Music[]>(this.url);
    }

    deletar(id: number): Observable<any>{
        return this.http.delete<any>(`${this.url}/${id}`);
    }
}
