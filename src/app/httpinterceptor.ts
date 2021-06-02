import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SpinnerserviceService } from "./spinner/spinnerservice.service";
import { tap } from 'rxjs/operators';




@Injectable()
export class SpinnerHttpInterceptor implements HttpInterceptor{

    constructor(private service:SpinnerserviceService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        

        this.service.requestStarted();

        const clonedReq = req.clone({setHeaders:{'AuthToken':'this is a dummy auth token'}});

       
       return next.handle(clonedReq)
       .pipe(
        tap(
               data=>{
                   if(data instanceof HttpResponse)
                   {
                       this.service.requestEnded();
                   }
                   
                   
               }
           )
           
       );
    }

}