import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CommonService } from './common.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChannelTableComponent } from './channel-table/channel-table.component';
import { ChannelDetailsComponent } from './channel-details/channel-details.component';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChannelTableComponent,
    ChannelDetailsComponent,
    SortPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    CommonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
