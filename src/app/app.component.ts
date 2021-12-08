import { Component } from '@angular/core';
declare const quiz_data:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  handleClick = () =>{
    console.log(quiz_data)
  }
}

// Create Array In External JavaScript File ( dont need to export )
// Place path in angular.json > script
// delcare const in component
// test call in function
