import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,title:'home'},
    {path:'home',component:HomeComponent,title:'home'},
    {path:'about',component:AboutComponent,title:'about'},
    {path:'portifolio',component:PortifolioComponent,title:'portfolio'},
    {path:'contact',component:ContactComponent,title:'contact'},
    {path:'**',component:NotfoundComponent,title:'notfound'},
];
