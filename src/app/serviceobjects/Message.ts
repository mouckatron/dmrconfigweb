export class Message {
    id: number;
    Text: string;
}

export class MessageFactory {
    static parse(line: string){
        var m = new Message();

        var parts = line.trim().split(/\s+/)

        m.id = Number(parts[0])
        m.Text = parts[1]

        return m
    }
}
