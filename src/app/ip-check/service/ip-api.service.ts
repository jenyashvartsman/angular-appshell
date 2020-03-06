import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IpApiService {

  private url = 'http://ip-api.com/json/';

  constructor(private http: HttpClient) { }

  getIpData(ip: string): Observable<any> {
    return this.http.get(this.url + ip);
  }
}
