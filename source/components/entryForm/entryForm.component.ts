import { Component, OnInit } from '@angular/core';
import { MdInput } from '@angular2-material/input';

@Component({
	moduleId: module.id,
	selector: 'rmEntryForm',
	templateUrl: 'entryForm.component.html',
	directives: [MdInput],
})
export class EntryFormComponent implements OnInit {
	constructor() { }

	ngOnInit() { }

}