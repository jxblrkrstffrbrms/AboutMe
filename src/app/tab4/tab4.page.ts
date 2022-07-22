import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  age = '20 years old';
  bday = 'August 3, 2001';
  address = 'San Pascual, Batangas';
  height = '175 cm';
  weight = '45 kilograms';

  constructor() {}

}
