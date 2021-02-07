import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileloaderComponent } from './fileloader/fileloader.component';

import { DigitalChannel } from './serviceobjects/DigitalChannel';
import { RadioConfigService } from './services/RadioConfig.service';
import { DigitalchannelsComponent } from './digitalchannels/digitalchannels.component';
import { AnalogchannelsComponent } from './analogchannels/analogchannels.component';
import { ZonesComponent } from './zones/zones.component';
import { ScanlistsComponent } from './scanlists/scanlists.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GrouplistsComponent } from './grouplists/grouplists.component';
import { MessagesComponent } from './messages/messages.component'

@NgModule({
  declarations: [
    AppComponent,
    FileloaderComponent,
    DigitalchannelsComponent,
    AnalogchannelsComponent,
    ZonesComponent,
    ScanlistsComponent,
    ContactsComponent,
    GrouplistsComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [
    RadioConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
