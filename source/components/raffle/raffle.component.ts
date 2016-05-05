declare var module: any;
import { Component } from '@angular/core';

import { EntryService, IEntry } from '../../services/entry/entry.service';

@Component({
	moduleId: module.id,
	selector: 'rmRaffle',
	templateUrl: 'raffle.component.html'
})
export class RaffleComponent {
	winner: IEntry;
	
	constructor() {	}

}