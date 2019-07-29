import { Component, OnInit } from '@angular/core';
import { CarService } from '../core/service/car.service';
import { CarModule} from '../models/car.module';

  
import { SelectItemModule } from '../models/select-item.module';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  
  cars: CarModule[];

  selectedCar: CarModule;

  displayDialog: boolean;

  sortOptions: SelectItemModule[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsLarge().then(cars => this.cars = cars);

    this.sortOptions = [
      { label: 'Newest First', value: '!year' },
      { label: 'Oldest First', value: 'year' },
      { label: 'Brand', value: 'brand' }
    ];
  }

  // selectCar(event: Event, car: CarModule) {
  //   this.selectedCar = car;
  //   this.displayDialog = true;
  //   event.preventDefault();
  // }

  // onSortChange(event) {
  //   let value = event.value;

  //   if (value.indexOf('!') === 0) {
  //     this.sortOrder = -1;
  //     this.sortField = value.substring(1, value.length);
  //   }
  //   else {
  //     this.sortOrder = 1;
  //     this.sortField = value;
  //   }
  // }

  onDialogHide() {
    this.selectedCar = null;
  }
}


