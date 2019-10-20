import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomEncoder } from './services/CustomEncoder';

//Material
import { MaterialModule } from './material';

//Componentes
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';

import { NavegationComponent } from './navegation/navegation.component';
import { AppRoutingModule } from './app-routing.module';
import { ControleClassicoComponent } from './controle-classico/controle-classico.component';
//Serviços
import { ApiControleClassicoService } from './services/api-controle-classico.service';
import { TesteMaterialComponent } from './teste-material/teste-material.component';
import { CadFinanciamentoComponent } from './cad-financiamento/cad-financiamento.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GalleryComponent,
    ContentComponent,
    TestimonialComponent,
    ClientsComponent,
    PricingComponent,
    FooterComponent,
    HeaderComponent,
    SocialComponent,
    NavegationComponent,
    ControleClassicoComponent,
    TesteMaterialComponent,
    CadFinanciamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    ApiControleClassicoService,
    CustomEncoder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
