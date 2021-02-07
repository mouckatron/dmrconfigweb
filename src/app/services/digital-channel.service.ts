import { Injectable } from '@angular/core';

import { DigitalChannel,DigitalChannelFactory } from '../serviceobjects/DigitalChannel'

@Injectable({
  providedIn: 'root'
})
export class DigitalChannelService {

  channels: DigitalChannel[];

    constructor() {
        this.channels = [];
    }

  public parseLines(lines: string[]){

    lines.forEach(element => {
      this.channels.push(DigitalChannelFactory.parse(element));
    });
  }

  public add(dc: DigitalChannel) {
    this.channels.push(dc)
  }

    public getChannels(){
        return this.channels;
    }

}
