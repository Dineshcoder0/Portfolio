import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ReactiveComponent } from './reactive/reactive.component';
import { FliplandingComponent } from './fliplanding/fliplanding.component';
import { ProfileComponent } from './profile/profile.component';
// import { SiginComponent } from './sigin/sigin.component';
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
import { SiginComponent } from './sigin/sigin.component';
import { PrfileComponent } from './prfile/prfile.component';
import { VercertfiComponent } from './vercertfi/vercertfi.component';






const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path: 'skills', component:SkillsComponent},
  {path:'projects', component:WorkComponent},
  {path:'calculator', component:CalculatorComponent},
  {path:'education', component:EducationComponent},
  {path:'experience', component:ExperienceComponent},
  {path:'Certifications', component:CertificationComponent},
  {path:'contact', component:ContactComponent},
  {path:'form', component:AngularformComponent},
  {path:'rtform', component:RtformComponent},
  {path:'template', component:TemplateComponent},
  {path:'reactive', component:ReactiveComponent},
  {path:'landing', component: FliplandingComponent},
  {path:'profile', component:ProfileComponent},
  // {path:'sigin', component:SiginComponent},
  {path: 'products', component:ProductsComponent},

  {path: 'ac', component: CreateacComponent},
  {path: 'cart', component:CartComponent},
  {path: 'order', component:OrderComponent},
  {path: 'pro', component: ProddetailsComponent},
  {path:'signup', component:SignupComponent},
  {path:'sigin', component:SigninComponent},
  {path:'track', component: TrackComponent},
  {path:'sucess', component:SucessComponent},
  {path: 'tscal', component:TscalComponent},
  {path:'shabt', component:ShabtComponent},
  {path: 'cnts', component:CntsComponent},
  {path:'sign', component:SiginComponent},
  {path:'pfile', component:PrfileComponent},
  {path : 'vercertfi', component: VercertfiComponent}









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
