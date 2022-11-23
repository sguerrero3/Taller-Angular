import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  selectedSerie!: Serie;
  selected: Boolean = false;


  constructor(private serieService: SerieService) { }

  getSeries():void {
    this.serieService.getSeries().subscribe((series) =>{
      this.series = series;
    })

    this.average();
  }

  average():number{

    let aver = 0;

    this.series.forEach(serie => {
      aver += serie.seasons;
    })

    return aver/this.series.length;
  }

  onSelected(serie: Serie):void{
    this.selected = true;
    this.selectedSerie = serie;
  }

  ngOnInit() {
    this.getSeries();
  }

}
