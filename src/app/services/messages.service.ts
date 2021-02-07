import { Injectable } from '@angular/core';

import { Message,MessageFactory } from '../serviceobjects/Message'

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

    messages: Message[]

    constructor() {
        this.messages = [];
    }

    public parseLines(lines: string[]){

        lines.forEach(element => {
            this.messages.push(MessageFactory.parse(element))
        })
    }

    public add(m: Message) {
        this.messages.push(m)
    }

    public getMessages(){
        return this.messages;
    }
}
