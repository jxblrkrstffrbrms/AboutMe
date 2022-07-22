import { Component} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public interest: any = [
    {name: 'KPOP', kind: 0},
    {name: 'Broken Promises', kind: 1},
    {name: 'Photography', kind: 0},
    {name: 'Exercise', kind: 1},
    {name: 'Photo Editing', kind: 0},
    {name: 'Getting Sick', kind: 1},
  ]

  constructor() {}

}
