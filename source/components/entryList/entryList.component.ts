import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { EntryService } from '../../services/entry/entry.service';

@Component({
	moduleId: module.id,
	selector: 'rmEntryList',
	templateUrl: 'entryList.component.html',
	pipes: [AsyncPipe],
	directives: [MD_LIST_DIRECTIVES],
})
export class EntryListComponent {
	constructor(public entryService: EntryService) { }
}