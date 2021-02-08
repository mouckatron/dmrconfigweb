export class AnalogChannel {
    id: number;
    Name: string;
    Receive: number;
    Transmit: string;
    Power: string;
    Scan: string;
    TOT: number;
    RO: string;
    Admit: string;
    Sq: number;
    RxTone: number;
    TxTone: number;
    Width: number;
}

export class AnalogChannelFactory {
    static parse(line: string){
        var ac = new AnalogChannel();

        var parts = line.trim().split(/\s+/)

        ac.id = Number(parts[0]);
        ac.Name = parts[1].replace(/_/g, ' ');
        ac.Receive = Number(parts[2]);
        ac.Transmit = parts[3]; // TODO: Should be a number
        ac.Power = parts[4];
        ac.Scan = parts[5];
        ac.TOT = Number(parts[6]);
        ac.RO = parts[7];
        ac.Admit = parts[8];
        ac.Sq = Number(parts[9]);
        ac.RxTone = Number(parts[10]);
        ac.TxTone = Number(parts[11]);
        ac.Width = Number(parts[12]);

        return ac
    }
}
