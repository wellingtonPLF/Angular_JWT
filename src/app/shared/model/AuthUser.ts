
export class AuthUser{

    private _username?: string;
    private _password?: string;

    constructor(username: string, password: string);
    constructor();
    constructor() {}

    get username(): string | undefined{
        return this._username;
    }

    set username(username: string | undefined){
        this._username = username;
    }

    get password(): string | undefined{
        return this._password;
    }

    set password(password: string | undefined){
        this._password = password;
    }
}