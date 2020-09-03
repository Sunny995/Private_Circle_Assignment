import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
 
 @Input() selectedItemDetails: Array<string>;
  constructor() { }

  ngOnInit(): void {
  }

}
