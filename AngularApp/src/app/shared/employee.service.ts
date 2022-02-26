import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee!: Employee;
  employees!: Employee[];
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(public http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp.id}`, emp);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.baseURL + `/${id}`);
  }

}
