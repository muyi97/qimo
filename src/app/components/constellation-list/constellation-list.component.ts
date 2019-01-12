import { Component, OnInit } from '@angular/core';
import { Constellation } from '../../constellation';
import { ConstellationService } from '../../constellation.service';


@Component({
  selector: 'app-constellation-list',
  templateUrl: './constellation-list.component.html',
  styleUrls: ['./constellation-list.component.scss']
})
export class ConstellationListComponent implements OnInit {

  constellations: Constellation[];
  constructor(private constellationService: ConstellationService) { }

  ngOnInit() {
    this.getConstellations();
  }

  getConstellations(): void {
    this.constellationService.getConstellations()
      .subscribe(constellations => this.constellations = constellations);
  }

}
