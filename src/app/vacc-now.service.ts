import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Branch, Vaccine, Application} from './classes'
import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VaccNowService {
  private branch : Object = new Object;
  private messagingSystemUrl = 'http://localhost:8080';
  private httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(private http: HttpClient) { }

  getBranch() : Object{
    return this.branch;
  }

  setBranch(value : Object) : Object{
    return this.branch = value;
  }

  listAllBranches():Observable<Branch[]> {
    console.log(`${this.messagingSystemUrl}`+'/allBranches');
    return this.http.get<Branch[]>(`${this.messagingSystemUrl}`+'/allBranches', {headers: new HttpHeaders({'Content-Type': 'application/json'})})
      .pipe(tap(_ => this.log('fetched message')), catchError(this.handleError('v', [])));
  };

  
  listAvailableVaccinesBranch(branchId : number):Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>(`${this.messagingSystemUrl}`+'/listAvailableVaccinesBranch/'+`${branchId}`, {headers: new HttpHeaders({ 'Content-Type': 'application/json'})})
      .pipe(tap(_ => this.log('fetched message')), catchError(this.handleError('listAvailableVaccinesBranch', [])));
  };

  availableTimeForBranch(branchId : number):Observable<Date[]> {
    return this.http.get<Date[]>(`${this.messagingSystemUrl}`+'/availableTimeForBranch/'+`${branchId}`, {headers: new HttpHeaders({ 'Content-Type': 'application/json'})})
      .pipe(tap(_ => this.log('fetched message')), catchError(this.handleError('availableTimeForBranch', [])));
  };

  listAllAppliedVaccinationPerBranch(branchId : number):Observable<Vaccine[]> {
    return this.http.get<Vaccine[]>(`${this.messagingSystemUrl}`+'/listAllAppliedVaccinationPerBranch/'+`${branchId}`, {headers: new HttpHeaders({ 'Content-Type': 'application/json'})})
      .pipe(tap(_ => this.log('fetched message')), catchError(this.handleError('listAllAppliedVaccinationPerBranch', [])));
  };

  listAllAppliedVaccinationPerPeriod(fromDt : string, toDt : string):Observable<Application[]> {
    let params = new HttpParams();
    params = params.append('fromDt', fromDt);
    params = params.append('toDt', toDt);
    return this.http.get<Application[]>(`${this.messagingSystemUrl}`+'/listAllAppliedVaccinationPerPeriod/', {headers: new HttpHeaders({ 'Content-Type': 'application/json'}), params: params})
      .pipe(tap(_ => this.log('fetched message')), catchError(this.handleError('listAllAppliedVaccinationPerPeriod', [])));
  };

  showAllConfirmedVaccinationsOverPeriod(fromDt : string, toDt : string):Observable<Application[]> {
    let params = new HttpParams();
    params = params.append('fromDt', fromDt);
    params = params.append('toDt', toDt);
    return this.http.get<Application[]>(`${this.messagingSystemUrl}`+'/showAllConfirmedVaccinationsOverPeriod/', {headers: new HttpHeaders({ 'Content-Type': 'application/json'}), params: params})
      .pipe(tap(_ => this.log('fetched message')), catchError(this.handleError('showAllConfirmedVaccinationsOverPeriod', [])));
  };

  
  scheduleVaccinationTimeslot(application: Application):Observable<Object> {
    return this.http.post<Object>(this.messagingSystemUrl+'/scheduleVaccinationTimeslot', application, {headers: new HttpHeaders({ 'Content-Type': 'application/json'})})
      .pipe(tap((sentMSG: any) => this.log(sentMSG)), catchError(this.handleError('scheduleVaccinationTimeslot')));
  };

  
  vaccineCertificate(application: Application):Observable<any> {
    return this.http.put<Application>(this.messagingSystemUrl+'/vaccineCertificate', application, {headers: new HttpHeaders({ 'Content-Type': 'application/json'})})
      .pipe(tap((app: Application) => this.log('the confirmed id is ' +app.id + '')), catchError(this.handleError('vaccineCertificate')));
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`SystemService: ${message}`);
  };
}
