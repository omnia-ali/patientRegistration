import { BaseClass, Country } from './../../_core/models/country';
import { HelperService } from './../../_core/helper/helper.service';
import { FormGroup, FormBuilder, FormControl, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DialogData } from './../../app.component';
import { Component, forwardRef, Inject, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
//import { default as _rollupMoment, Moment } from 'moment';
import Nationality from '../../../nationality.json';
// tslint:disable-next-line:no-duplicate-imports
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { even, RxwebValidators } from '@rxweb/reactive-form-validators';
import { DatePipe } from '@angular/common'
import moment from 'moment';
//const moment = _rollupMoment || _moment;


// export const YEAR_MODE_FORMATS = {
//   parse: {
//     dateInput: 'YYYY',
//   },
//   display: {
//     dateInput: 'YYYY',
//     monthYearLabel: 'MMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY',
//   },
// };


@Component({
  selector: 'app-patient-popup',
  templateUrl: './patient-popup.component.html',
  styleUrls: ['./patient-popup.component.scss'],
  providers: [DatePipe]
  // providers: [
  //   { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  //   { provide: MAT_DATE_FORMATS, useValue: YEAR_MODE_FORMATS },
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => PatientPopupComponent),
  //     multi: true,
  //   },
  // ],
})
export class PatientPopupComponent implements OnInit {
  form: FormGroup;
  //checkedEstimate: any = true;
  NationalityList = Nationality;
  Countries: BaseClass[];
  Cities: BaseClass[];
  Regions: BaseClass[];
  maxDate = new Date(new Date().setDate(new Date().getDate() - 2))

  constructor(private fb: FormBuilder,
    public HelperService: HelperService,
    private datePipe: DatePipe
    , public dialogRef: MatDialogRef<PatientPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    console.log(this.maxDate);
    this.form = this.fb.group({
      Id: new FormControl(null),
      NameEn: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(2), Validators.pattern("^[a-zA-Z][A-Za-z0-9 ]*$")]),
      NameAr: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.minLength(2), Validators.pattern(/[\u0600-\u06FF-/ ]/)]),
      BD: new FormControl('', [Validators.required, RxwebValidators.maxDate({ value: new Date() })]),
      Gender: new FormControl("-1"),
      MaritalStatus: new FormControl("-1"),
      Religion: new FormControl("", Validators.required),
      Nationality: new FormControl("", Validators.required),
      checkedEstimate: new FormControl(false),
      age: new FormControl(""),
      ageMonths: new FormControl(""),
      IdType: new FormControl('', Validators.required),

      Country: new FormControl("", Validators.required),
      City: new FormControl("", Validators.required),
      Region: new FormControl("", Validators.required),
      AddressLine: new FormControl("", Validators.required),

      WorkPhone: new FormControl('', Validators.required),
      MobilePhone: new FormControl('', Validators.required),
      HomePhone: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, RxwebValidators.email()]),

    });

    this.HelperService.getCountries().subscribe(
      data =>
        this.Countries = data
    );

  }

  save() {
    this.dialogRef.close(this.form.value);
  }
  check() {
    console.log(this.form.value);
  }
  close() {
    this.dialogRef.close();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  changeAddress(e: any, type?: string) {
    console.log(e.value)
    console.log(e)
    switch (type) {
      case 'Country':
        this.HelperService.getCities(Number(e.value)).subscribe(data => {
          console.log(data)
          this.Cities = data
        })
        break;
      case 'City':
        this.HelperService.getRegions(Number(e.value)).subscribe(data => {
          console.log(data)
          this.Regions = data
        })
        break;
      default:
        break;
    }
    // this.form.value.country.setValue(e.target.value, {
    //   onlySelf: true
    // })
  }
  //@ViewChild(MatDatepicker) _picker: MatDatepicker<Moment>;

  _inputCtrl: FormControl = new FormControl();

  // Function to call when the date changes.
  onChange = (year: Date) => { };

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => { };

  // _yearSelectedHandler(chosenDate: Moment, datepicker: MatDatepicker<Moment>) {
  //   if (!this._isYearEnabled(chosenDate.year())) {
  //     datepicker.close();
  //     return;
  //   }

  //   this._inputCtrl.setValue(chosenDate, { emitEvent: false });
  //   this.onChange(chosenDate.toDate());
  //   this.onTouched();
  //   datepicker.close();
  // }
  // _openDatepickerOnClick(datepicker: MatDatepicker<Moment>) {
  //   if (!datepicker.opened) {
  //     datepicker.open();
  //   }
  // }

  // _openDatepickerOnFocus(datepicker: MatDatepicker<Moment>) {
  //   setTimeout(() => {
  //     if (!datepicker.opened) {
  //       datepicker.open();
  //     }
  //   });
  // }

  // /** Whether the given year is enabled. */
  // private _isYearEnabled(year: number) {
  //   // disable if the year is greater than maxDate lower than minDate
  //   if (year === undefined || year === null) {
  //     return false;
  //   }

  //   return true;
  // }



  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(event.value);
    console.log(this.datePipe.transform(event.value, 'MM/dd/YYYY'));
    if (event.value != null) {
      console.log("not null ")
      console.log(this.form.value.checkedEstimate);
      this.form.controls.checkedEstimate.value == true ? this.calculateAge(true) : this.calculateAge(false);
    }
    else
      console.log(" null ")

  }
  date = moment();
  calculateAge(Checked: boolean) {
    //if true calculate
    let birthdate: Date = this.form.value.BD;
    if (birthdate != null && Checked) {
      let age = moment().diff(birthdate, 'years');
      let totalMonths: number = moment().diff(birthdate, 'months');
      var months = totalMonths % 12;
      this.form.controls.age.setValue(age);
      this.form.controls.ageMonths.setValue(months);
    }

    //false ==> clear fields
    else {
      //   this.form.controls.age="";
      this.form.controls.age.setValue("");
      this.form.controls.ageMonths.reset();

    }
  }
}
