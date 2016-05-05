import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';

import { EntryFormComponent } from './components/entryForm/entryForm.component';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: 'app.component.html',
	directives: [MdToolbar, EntryFormComponent],
})
export class AppComponent {}
