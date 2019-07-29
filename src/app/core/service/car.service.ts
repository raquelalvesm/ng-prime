import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarModule } from '../../models/car.module'


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCarsSmall() {
    return this.http.get<any>('assets/car.json')
      .toPromise()
      .then(res => <CarModule[]>res.data)
      .then(data => { return data; });
  }

  getCarsMedium() {
    return this.http.get<any>('assets/car.json')
      .toPromise()
      .then(res => <CarModule[]>res.data)
      .then(data => { return data; });
  }

  getCarsLarge() {
    return this.http.get<any>('assets/car.json')
      .toPromise()
      .then(res => <CarModule[]>res.data)
      .then(data => { return data; });
  }

  getCarsHuge() {
    return this.http.get<any>('assets/car.json')
      .toPromise()
      // tslint:disable-next-line: no-angle-bracket-type-assertion
      .then(res => <CarModule[]>res.data)
      .then(data => { return data; });
  }
}