import { Observable } from 'rxjs';
export declare class ObservableCursor<T> extends Observable<T[]> {
    private _cursor;
    private _hCursor;
    private _observers;
    static create<T>(cursor: Mongo.Cursor<T>): ObservableCursor<T>;
    constructor(cursor: Mongo.Cursor<T>);
    cursor: Mongo.Cursor<T>;
    stop(): void;
    dispose(): void;
    fetch(): Array<T>;
    observe(callbacks: Mongo.ObserveCallbacks): Meteor.LiveQueryHandle;
    observeChanges(callbacks: Mongo.ObserveChangesCallbacks): Meteor.LiveQueryHandle;
    _runComplete(): void;
    _runNext(cursor: Mongo.Cursor<T>): void;
    _observeCursor(cursor: Mongo.Cursor<T>): any;
}