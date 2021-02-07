import { Injectable } from '@angular/core';

import { RadioConfigService } from './RadioConfig.service';
import { DigitalChannelService } from './digital-channel.service';
import { MessagesService } from './messages.service';

@Injectable({
    providedIn: 'root',
})
export class FileService {
    file: File;

    constructor(
        private radioConfig: RadioConfigService,
        private digitalChannelService: DigitalChannelService,
        private messagesService: MessagesService
    ) { }

    public load(file){
        this.file = file;

        let fileReader = new FileReader();
        fileReader.onload = (e) => {
            var lines = fileReader.result.toString().split(/[\r\n]/g)

            var sections = FileService.getSections(lines)

            this.parseSections(sections)
        }
        fileReader.readAsText(this.file);
    }

    static getSections(data: string[]) {
        var emptyLine = new RegExp(/^$/m)
        var sections = []
        var section = []

        data.forEach(element => {
            // split to section on empty line
            if(element.length == 0){
                sections.push(section);
                section = []
            }else{
                // do not push comments
                if(!element.startsWith('#'))
                    section.push(element)
            }
        });
        if(section.length > 0){
            sections.push(section)
        }
        return sections;
    }

    parseSections(sections: string[][]){

        console.log(sections);
        var section = sections.shift()

        this.radioConfig.parse(section);


        sections.forEach(element => {
            console.log(element);
            switch(true) {
                case element[0].includes("Digital"):
                    this.digitalChannelService.parseLines(element.slice(1));
                    break;
                case element[0].includes("Message"):
                    this.messagesService.parseLines(element.slice(1));
                    break;
            }
        });
    }

    write(){
    }
}
