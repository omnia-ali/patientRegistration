import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;

  @Input() sideStatus: boolean;

  ngOnInit(): void {
//    this.sidenav.opened=this.sideStatus;
  }

}
