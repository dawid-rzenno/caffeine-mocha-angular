import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {finalize, Observable, tap} from 'rxjs';
import {StatusService} from "./status.service";

@Injectable()
export class StatusInterceptor implements HttpInterceptor {
  constructor(private service: StatusService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const started = Date.now();
    let isSuccess: boolean;

    return next.handle(request).pipe(
      tap({
        next: (event) => (isSuccess = event instanceof HttpResponse),
        error: () => (isSuccess = false)
      }),
      finalize(() => {
        const elapsed = Date.now() - started;
        const message = `${request.method} "${request.urlWithParams}" ${isSuccess} in ${elapsed} ms.`;

        if (isSuccess) {
          this.service.emitSuccessMessage(message);
        } else {
          this.service.emitFailureMessage(message);
        }
      })
    );
  }
}
