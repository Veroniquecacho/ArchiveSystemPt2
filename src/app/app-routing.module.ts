import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ServiceComponent } from './service/service.component';
import { ApplicationComponent } from './application/application.component';
import { UserComponent } from './user/user.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { SeeEquipmentComponent } from './see-equipment/see-equipment.component';
import { SeeServiceComponent } from './see-service/see-service.component';
import { SeeApplicationComponent } from './see-application/see-application.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
 {path: '', redirectTo:'home/login', pathMatch: 'full'},
{path: 'home', component:HomeComponent, children:[
  {path: 'login', component:LoginComponent},
  {path: 'admin', component:AdminComponent, canActivate: [AuthGuard], children:[
  {path: 'equipment', component: EquipmentComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'application', component: ApplicationComponent},
  {path: 'user', component: UserComponent}
  
  ]},
  {path: 'helpdesk', component:HelpdeskComponent, children:[
  {path: 'see-equipment', component: SeeEquipmentComponent},
  {path: 'see-service', component: SeeServiceComponent},
  {path: 'see-application', component: SeeApplicationComponent}
  
  ]}
  
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
