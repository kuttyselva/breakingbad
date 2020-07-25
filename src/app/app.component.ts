import { Component } from '@angular/core';
import { BreakingBadService } from './breaking-bad.service';
import { Char, Quote } from './interfaces/char.interface'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'breakingbad';
  input = '';
  character: Char = <Char>{};
  viewData = false;
  quote: Quote = <Quote>{};
  constructor(private brba: BreakingBadService) { }
  getChar() {
    this.brba.getCharacter().subscribe(data => {
      console.log(data);
      this.character = data[0];
      this.viewData = true;
    })
    this.getQuote();
  }
  getQuote() {
    this.brba.getQuote().subscribe(data => {
      this.quote = data[0];
    })
  }
}
