export class DigitalChannel {
    id: number;
    Name: string;
    Receive: number;
    Transmit: string;
    Power: string;
    Scan: string;
    TOT: number;
    RO: string;
    Admit: string;
    Color: string;
    Slot: number;
    RxGL: string;
    TxContact: string;
}

export class DigitalChannelFactory {
    static parse(line: string){
        var dc = new DigitalChannel();

        var parts = line.trim().split(/\s+/)

        dc.id = Number(parts[0]);
        dc.Name = parts[1].replace(/_/g, ' ');
        dc.Receive = Number(parts[2]);
        dc.Transmit = parts[3];
        dc.Power = parts[4];
        dc.Scan = parts[5];
        dc.TOT = Number(parts[6]);
        dc.RO = parts[7];
        dc.Admit = parts[8];
        dc.Color = parts[9];
        dc.Slot = Number(parts[10]);
        dc.RxGL = parts[11];
        dc.TxContact = parts[12];

        return dc
    }
}
