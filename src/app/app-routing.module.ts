import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalchannelsComponent } from './digitalchannels/digitalchannels.component'
import { AnalogchannelsComponent } from './analogchannels/analogchannels.component'
import { ZonesComponent } from './zones/zones.component'
import { ScanlistsComponent } from './scanlists/scanlists.component'
import { ContactsComponent } from './contacts/contacts.component'
import { GrouplistsComponent } from './grouplists/grouplists.component'
import { MessagesComponent } from './messages/messages.component'

const routes: Routes = [
    { path: 'digitalchannels', component: DigitalchannelsComponent },
    { path: 'analogchannels', component: AnalogchannelsComponent },
    { path: 'zones', component: ZonesComponent },
    { path: 'scanlists', component: ScanlistsComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'grouplists', component: GrouplistsComponent },
    { path: 'messages', component: MessagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
