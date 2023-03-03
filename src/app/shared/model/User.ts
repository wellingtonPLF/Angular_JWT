import { UserType } from "./UserType";

export class User {

    private _id?: number;
    private _name?: string;
    private _password?: string;
    private _email?: string;
    private _datanasc?: string;

    constructor(id:number, name: string, password: string, email: string, datanasc: string);
    constructor();
    constructor() {} //<= Important

    refract(): UserType {
        const result = { 
          id: this._id, 
          name: this._name, 
          password: this._password, 
          email: this._email,
          datanasc: this._datanasc
        }
        return result;
    }

    get id(): number | undefined{
        return this._id;
    }

    set id(id: number | undefined){
        this._id = id;
    }

    get name(): string | undefined{
        return this._name;
    }

    set name(name: string | undefined){
        this._name = name;
    }

    get password(): string | undefined{
        return this._password;
    }

    set password(password: string | undefined){
        this._password = password;
    }

    get email(): string | undefined{
        return this._email;
    }

    set email(email: string | undefined){
        this._email = email;
    }

    get datanasc(): string | undefined{
        return this._datanasc;
    }

    set datanasc(datanasc: string | undefined){
        this._datanasc = datanasc;
    }
}