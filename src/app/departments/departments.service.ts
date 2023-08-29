import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://localhost:7157/api/Department';

  getlist() {
    return this.http.get(this.baseUrl);
  }

  AddDepartment(data: any) {
    return this.http.post(this.baseUrl, data);
  }
}
