import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {
  }
@Input() opened: boolean ;

  @Output() toggelsidenav: EventEmitter<any> = new EventEmitter();
  ToggleSideBar(){
    this.toggelsidenav.emit();
  }
}
