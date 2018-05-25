import { Component, OnInit } from '@angular/core';
import { DemoDataProviderService } from '../demo-data-provider.service';


@Component({
  selector: 'app-data-picker',
  templateUrl: './data-picker.component.html',
  styleUrls: ['./data-picker.component.css']
})
export class DataPickerComponent implements OnInit {

  constructor(private dataService_: DemoDataProviderService) {}

  currentValue = 'data1';

  valuesList: Array<string> = this.dataService_.getDataList();

  ngOnInit() {

  }

  onChange($event) {
    this.dataService_.setCurrentDataSet(this.currentValue);
  }
}
