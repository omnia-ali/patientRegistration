import { Patient } from './_core/models/patient.model';
import { PatientService } from './_core/services/patient.service';
import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import Patients from "../assets/Patients.json";

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}


export interface DialogData {
  animal: string;
  name: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  public sideToggel: boolean = true;

  title = 'patientRegistration';

  displayedColumns: string[] = ['id', 'nameEn',
    'nameAr',

    'age'];

  dataSource: MatTableDataSource<Patient>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  Patients: any[];

  constructor(private PatientService: PatientService,public dialog: MatDialog) {
  }

  ngAfterViewInit() {
    this.PatientService.getListData().subscribe(data => {
      console.log(data);
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



}



