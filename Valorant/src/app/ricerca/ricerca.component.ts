import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router"
@Component({
  selector: 'Ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.scss']
})
export class RicercaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    var player: string = f.value.Player.trim();
    this.router.navigate([`/Player/${player}`]);
  }
}
