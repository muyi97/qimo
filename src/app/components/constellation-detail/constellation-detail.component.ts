import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constellation } from '../../constellation';
import { ConstellationService } from '../../constellation.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-constellation-detail',
  templateUrl: './constellation-detail.component.html',
  styleUrls: ['./constellation-detail.component.scss']
})
export class ConstellationDetailComponent implements OnInit {

  constellation: Constellation;

  constructor(
    private route: ActivatedRoute,
    private constellationService: ConstellationService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getConstellation();
  }

  getConstellation(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.constellationService.getConstellationById(id)
      .subscribe(constellation => this.constellation = constellation);
  }



  goBack(): void {
    this.location.back();
  }
}
