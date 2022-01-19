import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/services/meteo.service';
import {Meteo} from 'src/app/models/meteo.model';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  data : Meteo = {
    name:'',
    country:'',
    hour:'',
    wnd_spd:0,
        wnd_dir: '',
    humidity:0,

    condition:''
  };
  meteos: any= [];
  

  constructor(private meteoService:MeteoService) { }

  ngOnInit(): void {
    this.getAllMeteo();
  }

  getAllMeteo():void{
    this.meteoService.getAll()
    .subscribe(data => {
      this.meteos = data;
      console.log(data);
    });
  }

  

}
