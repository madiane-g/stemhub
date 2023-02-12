import { Component, } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent {

  constructor(private formBuilder: FormBuilder){}

  searchBar = this.formBuilder.group({Search: ''})

  onClick() {
    var input = this.searchBar.value.Search || '';
    this.searchBar.reset();
    console.log(input);
    if (input.toUpperCase() == "SCIENCE") {
      window.location.assign("http://localhost:4200/science")
    }
    if (input.toUpperCase() == "TECHNOLOGY") {
      window.location.assign("http://localhost:4200/technology")

    }
    if (input.toUpperCase() == "ENGINEERING") {
      window.location.assign("http://localhost:4200/engineering")

    }
    if (input.toUpperCase() == "MATH") {
      window.location.assign("http://localhost:4200/math")

    }
    else {
      window.alert("Search result could not be found. Please enter a valid search.")
    }
  }

}
