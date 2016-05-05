import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/common';
import { MdInput } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';
import { warning } from 'toastr';

import { EntryService } from '../../services/entry/entry.service';

@Component({
	moduleId: module.id,
	selector: 'rmEntryForm',
	templateUrl: 'entryForm.component.html',
	directives: [MdInput, MdButton],
})
export class EntryFormComponent {
	name: string;
	@ViewChild('form') form: NgForm;
	
	constructor(private entryService: EntryService) {}

	add(): void {
		if (this.form.valid) {
			this.entryService.addEntry({ name: this.name });
		} else {
			warning('You must enter a name');
		}
	}
}