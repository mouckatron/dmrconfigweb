import { Component, OnInit } from '@angular/core';

import { DigitalChannelService } from '../services/digital-channel.service'
import { AnalogChannelService } from '../services/analog-channel.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    digitalChannelCount: number;
    analogChannelCount: number;

    constructor(
        private digitalChannelService: DigitalChannelService,
        private analogChannelService: AnalogChannelService
    ) { }

    ngOnInit(): void {
    }

    loadCounts(): void {
        //this.digitalChannelCount = this.digitalChannelService.count();
        //this.analogChannelCount = this.analogChannelService.count();
    }

}
