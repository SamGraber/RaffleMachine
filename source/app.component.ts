import { Component, OnInit } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';

import { EntryFormComponent } from './components/entryForm/entryForm.component';
import { EntryService } from './services/entry/entry.service';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: 'app.component.html',
	directives: [MdToolbar, EntryFormComponent],
	providers: [EntryService],
})
export class AppComponent implements OnInit {
	constructor(private entryService: EntryService) {}
	
	ngOnInit(): void {
		this.entryService.entryListChanges.subscribe(x => console.log(x));
	}
}
