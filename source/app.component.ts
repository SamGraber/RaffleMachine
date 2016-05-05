import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MdToolbar } from '@angular2-material/toolbar';
import { Observable } from 'rxjs';

import { EntryFormComponent } from './components/entryForm/entryForm.component';
import { EntryService } from './services/entry/entry.service';
import { AppStateService } from './services/appState/appState.service';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: 'app.component.html',
	directives: [MdToolbar, EntryFormComponent],
	pipes: [AsyncPipe],
	providers: [EntryService, AppStateService],
})
export class AppComponent implements OnInit {
	constructor(private appState: AppStateService) {}
	
	ngOnInit(): void {}
	
	showForm(): Observable<boolean> {
		return this.appState.stateChanges.map(x => x.showForm);
	}
}
