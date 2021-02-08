import { Component, OnInit } from '@angular/core';

import { AnalogChannel } from '../serviceobjects/AnalogChannel'
import { AnalogChannelService } from '../services/analog-channel.service'

@Component({
  selector: 'app-analogchannels',
  templateUrl: './analogchannels.component.html',
  styleUrls: ['./analogchannels.component.css']
})
export class AnalogchannelsComponent implements OnInit {

    channels: AnalogChannel[];

    constructor(private analogChannelService: AnalogChannelService) { }

    ngOnInit(): void {
        this.getChannels();
    }

    getChannels(): void {
        this.channels = this.analogChannelService.getChannels();
    }

}
