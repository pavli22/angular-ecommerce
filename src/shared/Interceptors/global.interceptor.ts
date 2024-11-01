import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError, finalize } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
export const globalInterceptor: HttpInterceptorFn = (req, next) => {
  const _ToastrService = inject(ToastrService)
  const _NgxSpinnerService = inject(NgxSpinnerService)
  _NgxSpinnerService.show()
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      _ToastrService.error('there is a problem in getting Product Data')
      return throwError(() => error);
    }),
    finalize(() => {
      setTimeout(() => {
        _NgxSpinnerService.hide()
      }, 100);

    })
  );
};
