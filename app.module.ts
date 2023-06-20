import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificationComponent } from './certification/certification.component';
import { ContactComponent } from './contact/contact.component';
import { AngularformComponent } from './angularform/angularform.component';
import { RtformComponent } from './rtform/rtform.component';
import { TemplateComponent } from './template/template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { FliplandingComponent } from './fliplanding/fliplanding.component';
import { ProfileComponent } from './profile/profile.component';
// import { SiginComponent } from './sigin/sigin.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';

import { CreateacComponent } from './createac/createac.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { ProddetailsComponent } from './proddetails/proddetails.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { TrackComponent } from './track/track.component';
import { SucessComponent } from './sucess/sucess.component';
import { TscalComponent } from './tscal/tscal.component';
import { ShabtComponent } from './shabt/shabt.component';
import { CntsComponent } from './cnts/cnts.component';
import { PrfileComponent } from './prfile/prfile.component';
import { SiginComponent } from './sigin/sigin.component';
import { VercertfiComponent } from './vercertfi/vercertfi.component';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    WorkComponent,
    CalculatorComponent,
    EducationComponent,
    ExperienceComponent,
    CertificationComponent,
    ContactComponent,
    AngularformComponent,
    RtformComponent,
    TemplateComponent,
    ReactiveComponent,
    FliplandingComponent,
    ProfileComponent,
    SiginComponent,
    ProductsComponent,

    CreateacComponent,
    CartComponent,
    OrderComponent,
    ProddetailsComponent,
    SignupComponent,
    SigninComponent,
    TrackComponent,
    SucessComponent,
    TscalComponent,
    ShabtComponent,
    CntsComponent,
    PrfileComponent,
    VercertfiComponent,








  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
