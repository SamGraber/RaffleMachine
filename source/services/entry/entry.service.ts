import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { remove } from 'lodash';

export interface IEntry {
	name: string;
}

@Injectable()
export class EntryService {
	private _entryListChanges: BehaviorSubject<IEntry[]>;
	private currentEntries: IEntry[];
	
	get entryListChanges(): Observable<IEntry[]> {
		return this._entryListChanges;
	}
	
	constructor() {
		this.currentEntries = [];
		this._entryListChanges = new BehaviorSubject<IEntry[]>(this.currentEntries);
	}
	
	addEntry(entry: IEntry): void {
		this.currentEntries.push(entry);
		this._entryListChanges.next(this.currentEntries);
	}
	
	removeEntry(entry: IEntry): void {
		remove(this.currentEntries, x => x.name === entry.name);
		this._entryListChanges.next(this.currentEntries);
	}
}