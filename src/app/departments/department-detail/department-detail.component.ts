import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css'],
})
export class DepartmentDetailComponent implements OnInit {
  departmentForm!: FormGroup;

  constructor(private fb: FormBuilder, private sv: DepartmentsService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.departmentForm = this.fb.group({
      dpm_id: null,
      dpm_cd: null,
      dpm_name: null,
    });
    this.departmentForm.get('dpm_id')?.disable();
  }

  saveDetail() {
    let detail = this.departmentForm.getRawValue();
    this.sv.AddDepartment(detail).subscribe((res) => {
      console.log(res);
    });
  }
}
function disable() {
  throw new Error('Function not implemented.');
}
