import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ChannelTableComponent } from './channel-table/channel-table.component';
import { AppComponent } from './app.component';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';

const routes: Routes = [
  { path: "dashboard" , component:HeaderComponent  },
  { path: "channeldetails" , component:ChannelDetailsComponent},
  { path:"", redirectTo:"dashboard", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
