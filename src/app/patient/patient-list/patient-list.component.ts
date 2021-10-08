import { PatientPopupComponent } from './../patient-popup/patient-popup.component';
import { PatientService } from './../../_core/services/patient.service';
import { Patient } from './../../_core/models/patient.model';

import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements AfterViewInit {
  public sideToggel: boolean = true;

  title = 'patientRegistration';

  displayedColumns: string[] = ['id', 'nameEn','nameAr','age'];

  dataSource: MatTableDataSource<Patient>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  Patients: any[];

  constructor(private PatientService: PatientService,public dialog: MatDialog) {
  }

  ngAfterViewInit() {
    this.PatientService.getListData().subscribe(data => {
      this.Patients = data;
      this.dataSource = new MatTableDataSource(this.Patients);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  animal: string;
  name: string;


  openDialog(): void {

    const dialogRef = this.dialog.open(PatientPopupComponent, {
      minHeight:'95%',disableClose : true,
       autoFocus : true,
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
