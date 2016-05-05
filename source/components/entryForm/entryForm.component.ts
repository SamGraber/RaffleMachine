import { Component } from '@angular/core';
import { MdInput } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';

import { EntryService } from '../../services/entry/entry.service';

@Component({
	moduleId: module.id,
	selector: 'rmEntryForm',
	templateUrl: 'entryForm.component.html',
	directives: [MdInput, MdButton],
})
export class EntryFormComponent {
	name: string;
	
	constructor(private entryService: EntryService) {}

	add(): void {
		this.entryService.addEntry({ name: this.name });
	}
}