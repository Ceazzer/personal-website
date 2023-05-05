
export class Avatar {
    constructor(
        public readonly url: string = ""
    ) {}
    
    public toJson(): string {
        return JSON.stringify(this);
    }

    public static New(url: string): Avatar {
        return new Avatar(url);
    }

    public static fromJson(json): Avatar {
        return Object.assign(new this, JSON.parse(json));
    }
}