import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http: HttpClient) { }
  getListData() {
    return this.http.get<any[]>("http://localhost:3000/patients").
    pipe(map((res: any) => { return res }));//.subscribe(data => { return data }  );
  }
  AddPatientData(data: any) {
    return this.http.post<any>("http://localhost:3000/patients", data).
      pipe(map((res: any) => { return res }));
  }

  deleteData(id: number) {
    return this.http.delete("http://localhost:3000/patients/" + id).subscribe(data => console.log(data));
  }
}
