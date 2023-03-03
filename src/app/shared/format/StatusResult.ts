export class StatusResult<T> {
    private _status?: string;
    private _data?: T;

    constructor();
    constructor(status: string, data: T);
    constructor() {}

    get status(): string | undefined {
        return this._status;
    }

    set status(status: string | undefined){
        this._status = status;
    }

    get data(): T | undefined {
        return this._data;
    }

    set data(data: T | undefined){
        this._data = data;
    }
}