class QRCode {
    constructor(
        public readonly qr: string = ""
    ) {}

    public toJson(): string {
        return JSON.stringify(this);
    }

    public static New(qr: string): QRCode {
        return new QRCode(qr);
    }

    public static fromJson(json): QRCode {
        return Object.assign(new this, JSON.parse(json));
    }
}