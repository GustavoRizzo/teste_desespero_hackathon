import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-oferta-inv',
  templateUrl: './cad-oferta-inv.component.html',
  styleUrls: ['./cad-oferta-inv.component.css']
})
export class CadOfertaInvComponent implements OnInit {

  in_str_valor: string;
  in_str_remuneracao: string;

  constructor() { }

  ngOnInit() {
  }

}
