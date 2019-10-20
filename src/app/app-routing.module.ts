import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { ControleClassicoComponent } from './controle-classico/controle-classico.component';
import { TesteMaterialComponent } from './teste-material/teste-material.component';
import { CadFinanciamentoComponent } from './cad-financiamento/cad-financiamento.component';
import { CadOfertaInvComponent } from './cad-oferta-inv/cad-oferta-inv.component';

const routes: Routes =[
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HeaderComponent },
  { path: 'about', component: IntroComponent },
  { path: 'services', component: ContentComponent },
  { path: 'testimonials', component: TestimonialComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'clients', component: ClientsComponent},
  { path: 'pricing', component: PricingComponent },
  { path: 'controle-classico', component: ControleClassicoComponent},
  { path: 'teste-material', component: TesteMaterialComponent},
  { path: 'CadFinan' , component: CadFinanciamentoComponent},
  { path: 'CadOfertInv' , component: CadOfertaInvComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
