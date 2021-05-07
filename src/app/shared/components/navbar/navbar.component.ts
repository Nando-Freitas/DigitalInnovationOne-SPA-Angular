import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    appName: String = "MusicApp"
    constructor() { }

    ngOnInit(): void {
    }

}
