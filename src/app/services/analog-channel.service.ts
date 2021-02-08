import { Injectable } from '@angular/core';

import { AnalogChannel,AnalogChannelFactory } from '../serviceobjects/AnalogChannel'

@Injectable({
  providedIn: 'root'
})
export class AnalogChannelService {

    channels: AnalogChannel[];

    constructor() {
        this.channels = [];
    }

    public parseLines(lines: string[]){

        lines.forEach(element => {
            this.channels.push(AnalogChannelFactory.parse(element));
        });
    }

    public add(ac: AnalogChannel){
        this.channels.push(ac)
    }

    public getChannels(){
        return this.channels;
    }
}
