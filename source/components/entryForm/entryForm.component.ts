import { Component } from '@angular/core';
import { MdInput } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';

@Component({
	moduleId: module.id,
	selector: 'rmEntryForm',
	templateUrl: 'entryForm.component.html',
	directives: [MdInput, MdButton],
})
export class EntryFormComponent {
	name: string;

	add(): void {
		console.log(this.name);
	}
}