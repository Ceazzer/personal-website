import { ReplaySubject} from "rxjs";

export class AvatarBloc {
    private _avatarUrl$: ReplaySubject<string>;
    public get avatarUrl$() {
        return this._avatarUrl$.asObservable();
    }

    private constructor() {
         this._avatarUrl$ = new ReplaySubject(1);
    }

    public setAvatarUrl(url: string) {
        this._avatarUrl$.next(url);
    }

    public dispose() {
        this._avatarUrl$.complete();
    }

    public static instance: AvatarBloc;

    public static New(): AvatarBloc {
        if (!AvatarBloc.instance) {
            AvatarBloc.instance = new this();
        }

        return AvatarBloc.instance;
    }
}
