import { bootstrap }    from '@angular/platform-browser-dynamic';
import * as toastr from 'toastr';

import { AppComponent } from './app.component';

toastr.options = {
	positionClass: 'toast-bottom-center',
};

bootstrap(AppComponent);
