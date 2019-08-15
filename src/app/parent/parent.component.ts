import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  link: string;
  newlink: string;

  receiveMessage($event) {
    this.link = $event
    this.newlink = "test"
  }

  ngOnInit() {
  }

}
