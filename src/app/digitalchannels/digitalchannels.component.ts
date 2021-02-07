import { Component, OnInit } from '@angular/core';

import { DigitalChannel } from '../serviceobjects/DigitalChannel'
import { DigitalChannelService } from '../services/digital-channel.service'

@Component({
  selector: 'app-digitalchannels',
  templateUrl: './digitalchannels.component.html',
  styleUrls: ['./digitalchannels.component.css']
})
export class DigitalchannelsComponent implements OnInit {

    channels: DigitalChannel[];

    constructor(private digitalChannelService: DigitalChannelService) { }

    ngOnInit(): void {
        this.getChannels();
    }

    getChannels(): void {
        this.channels = this.digitalChannelService.getChannels();
    }
}
