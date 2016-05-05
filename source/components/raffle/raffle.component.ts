declare var module: any;
import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

import { EntryService, IEntry } from '../../services/entry/entry.service';
import { RandomService } from '../../services/random/random.service';

@Component({
	moduleId: module.id,
	selector: 'rmRaffle',
	templateUrl: 'raffle.component.html',
	pipes: [AsyncPipe],
})
export class RaffleComponent {
	winner: BehaviorSubject<IEntry>;
	
	constructor(private entryService: EntryService
			, private randomService: RandomService) {	
		this.winner = new BehaviorSubject<IEntry>(null);
	}

	raffle(): void {
		this.entryService.entryListChanges.do(x => {
			this.winner.next(this.randomService.random(x));
		}).subscribe().unsubscribe();
	}
	
	winnerName(): Observable<string> {
		return this.winner.map(x => x != null ? x.name : null);
	}
}