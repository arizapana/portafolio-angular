import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina, InfoFirebase } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo:InfoFirebase[]=[];
  cargada=false;

  constructor(private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();
    
   }

  private cargarInfo(){
    //Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina)=>{

      this.info=resp;
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-e27db.firebaseio.com/equipo.json')
    .subscribe((resp: InfoFirebase[])=>{
      
      this.equipo=resp;
    });
  }

}
