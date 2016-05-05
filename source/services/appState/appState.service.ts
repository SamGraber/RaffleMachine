import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface IAppState {
	showForm: boolean;
}

@Injectable()
export class AppStateService {
	private _stateChanges: BehaviorSubject<IAppState>;
	private currentState: IAppState;
	
	get stateChanges(): Observable<IAppState> {
		return this._stateChanges;
	}
	
	constructor() {
		this.currentState = { showForm: true };
		this._stateChanges = new BehaviorSubject<IAppState>(this.currentState);
	}
	
	toggleForm(): void {
		this.currentState.showForm = !this.currentState.showForm;
		this._stateChanges.next(this.currentState);
	}
}