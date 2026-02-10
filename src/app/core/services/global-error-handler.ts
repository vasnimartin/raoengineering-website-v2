import { ErrorHandler, Injectable, NgZone } from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(private zone: NgZone) { }

    handleError(error: any) {
        this.zone.run(() => {
            console.error('Core Error:', error);
            // Here you could send logs to a server or show a toast notification
        });
    }
}
