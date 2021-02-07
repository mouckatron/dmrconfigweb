export class RadioConfigService {
    radio: string;
    lastProgrammedDate: string;
    cpsSoftwareVersion: string;

    public parse(lines: string[]){
        lines.forEach(element => {
            switch(true){
                case element.startsWith("Radio"):
                    this.radio = this.splitLine(element)[1];
                    break;
                case element.startsWith("Last Programmed Date"):
                    this.lastProgrammedDate = this.splitLine(element)[1];
                    break;
                case element.startsWith("CPS Software Version"):
                    this.cpsSoftwareVersion = this.splitLine(element)[1];
                    break;

            }
        })
        console.log(this);
    }

    splitLine(line: string) {
        return line.split(": ")
    }
}