import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecleo',
  templateUrl: './tecleo.component.html',
  styleUrls: ['./tecleo.component.css']
})
export class TecleoComponent implements OnInit {

  public frase = "En un lugar de La Mancha";
  public mensaje = "Esperando...";
  public loTecleado = "Haz click en Empezar";
  public inputType = 'text';
  public inputClass = '';
  public inputDeshabilitado = true;
  private inicio = Date.now();
  private haTerminado = false;
  constructor() { }

  ngOnInit(): void {
  }

  public empezar() {
    console.log("Empezando...");
    this.inicio = Date.now();
    this.loTecleado = "";
    this.mensaje = "Ánimo";
    this.inputDeshabilitado = false;
    this.inputClass = '';
    this.haTerminado = false;
  }

  public onInput() {
    if (this.haTerminado) return;
    const ahora = Date.now();
    let tiempo = (ahora - this.inicio) / 1000;
    if (this.frase === this.loTecleado) {
      this.mensaje = "Enhorabuena, has tardado " + tiempo;
      this.inputClass = 'terminado';
      this.haTerminado = true;
      this.inputDeshabilitado = true;
    } else {
      if (this.frase.startsWith(this.loTecleado)) {
        this.mensaje = "Aún no está completa, llevas " + tiempo;
        this.inputClass = 'va-bien';
      } else {
        this.mensaje = "vas mal, llevas " + tiempo;
        this.inputClass = 'va-mal';
      }
    }

  }
}
