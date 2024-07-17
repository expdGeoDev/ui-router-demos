import { Component, Input } from '@angular/core';
import { UIRouterGlobals } from '@uirouter/angular';

@Component({
	selector: 'app-state-params',
	standalone: true,
	imports: [],
	template: `
		<p>state-params works!</p>
	`,
	styles: ``,
})
export class StateParamsComponent {
	@Input()
	value: string = 'unset';

	constructor(public globals: UIRouterGlobals) {
		console.log('All params:', globals.params);
	}

	ngOnInit() {
		console.log('params:', this.value);
	}
}
