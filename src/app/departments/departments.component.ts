import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from './departments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
})
export class DepartmentsComponent implements OnInit {
  departments: any[] = [];
  constructor(private sv: DepartmentsService, private router: Router) {}

  ngOnInit(): void {
    this.sv.getlist().subscribe((res: any) => {
      console.log(res);
      this.departments = res;
    });
  }

  edit(department: any) {}

  delete() {}

  add() {
    this.router.navigate(['departments/detail']);
  }
}
