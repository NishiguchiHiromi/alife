import { Component, OnInit } from '@angular/core';
import { Sex, Alife } from '@model/alife';
import { Field } from '@model/field';
import { FieldConfig } from 'app/config/FieldConfig';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  constructor() { }
  field: Field;
  get maleNum(): number {
    return Alife.maleNum;
  }
  get femaleNum(): number {
    return Alife.femaleNum;
  }

  ngOnInit() {
    this.field = new Field(FieldConfig);
    this.create(1);
  }

  start() {
    this.field.start();
  }

  stop() {
    this.field.stop();
  }

  create(num: number) {
    this.field.create(num);
  }
  extinguish() {
    this.field.extinguish();
  }
}
