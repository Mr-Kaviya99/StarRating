import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StarRating';
  starRatingForm = new FormGroup({
    starRating: new FormControl(''),
  });

  clickMe() {
    console.log(this.starRatingForm.get('starRating')?.value!)
  }
}
