import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';
import { Observable } from 'rxjs';
import { isEmpty } from 'lodash';

import { EntryService, IEntry } from '../../services/entry/entry.service';

@Component({
	moduleId: module.id,
	selector: 'rmEntryList',
	templateUrl: 'entryList.component.html',
	pipes: [AsyncPipe],
	directives: [MD_LIST_DIRECTIVES, MdButton],
})
export class EntryListComponent {
	constructor(public entryService: EntryService) { }
	
	notEmptyList(): Observable<boolean> {
		return this.entryService.entryListChanges.map(x => !isEmpty(x));
	}
	
	remove(entry: IEntry): void {
		this.entryService.removeEntry(entry);
	}
}