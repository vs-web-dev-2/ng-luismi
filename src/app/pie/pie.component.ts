import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  public autor: string = "Luis Miguel";

  //public year: number = 2021;
  public year: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
