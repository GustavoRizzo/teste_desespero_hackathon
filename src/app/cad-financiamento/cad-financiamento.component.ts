import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-financiamento',
  templateUrl: './cad-financiamento.component.html',
  styleUrls: ['./cad-financiamento.component.css']
})
export class CadFinanciamentoComponent implements OnInit {

    in_str_nome: string;
    in_str_cpf: string;
    in_str_idade: string;          
    in_str_val_imovel: string;          
    in_str_val_quitado : string;   
    in_str_endereco: string;
    in_str_renda: string;

  ngOnInit() {
  }

}

