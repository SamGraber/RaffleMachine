import { Injectable } from '@angular/core';
import { isArray } from 'lodash';

@Injectable()
export class RandomService {
	random<T>(list: T[]): T {
		if (!isArray) {
			return null;
		}
		const index = Math.floor(Math.random() * list.length);
		return list[index];
	}
}