export abstract class Usecase<type> {
    abstract execute(): Promise<type>;
}