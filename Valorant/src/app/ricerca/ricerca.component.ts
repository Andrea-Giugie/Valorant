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
    console.log("ciao")
  }
  onSubmit(f: NgForm) {
    console.log(f.value.Player)
    this.router.navigate([`/Player/${f.value.Player}`]);
  }
}
