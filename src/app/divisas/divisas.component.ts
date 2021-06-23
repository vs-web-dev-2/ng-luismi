import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrankfurterService } from './frankfurter.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent implements OnInit {

  public fecha: Date = new Date();
  public cotizaciones: any[] = [];
  public cargado = false;

  constructor(private frank: FrankfurterService) {

  }

  ngOnInit(): void {
    const url = "https://api.frankfurter.app/latest";
    this.frank.obtenerCotizaciones$().subscribe(
      {
        next: (body: any) => {
          console.log("respuesta obtenida" + JSON.stringify(body))
          console.log("fecha última cotización " + body.date);
          this.fecha = new Date(body.date);
          const rates: any = body.rates;
          Object.keys(rates).forEach((key) => {
            this.cotizaciones.push({
              divisa: key,
              contravalor: rates[key],
            });
          });
          this.cargado = true;
          console.log(this.cotizaciones);
        }
      }
    );
    console.log("Llamada establecida a " + url);
  }

}
