import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/interfaces/list';
import data from "../../data.json";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  renderedList: List[] = [];
  completeListData: List[] = [];
  details = [];

  constructor() { }

  ngOnInit(): void {
    this.completeListData = Object.assign([], data);;
    this.renderedList = Object.assign([], this.completeListData);

  }

  showDetails(selectedItemDetails: any): void {
    this.details = Object.assign([], selectedItemDetails);
  }

  searchTable(value: string): void {
    var searchTerms = value.trim();
    var filteredItems = [];
    if (searchTerms === '') {
      this.renderedList = Object.assign([], this.completeListData);
    } else {

      filteredItems = Object.assign([], this.completeListData).filter(
        item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      )
      this.renderedList = Object.assign([], filteredItems);

    }
  }


}
