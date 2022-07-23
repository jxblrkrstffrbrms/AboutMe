import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  name1 = 'Jax';
  name2 = 'Blaire';
  name3 = 'Kristoffer';
  
  constructor(private router: Router) {}

  interest(){
    this.router.navigate(['tabs/tab2']);
  }

  gallery(){
    this.router.navigate(['tabs/tab3']);
  }

  profile(){
    this.router.navigate(['tabs/tab4']);
  }
}
