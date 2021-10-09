import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '@!#$%^&*()';

    let vaildChars = '';
    if (this.includeLetters) {
      vaildChars += letters;
    }

    if (this.includeNumbers) {
      vaildChars += numbers;
    }
    if (this.includeSymbols) {
      vaildChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i <= this.length; i++){
      const index = Math.floor(Math.random() * vaildChars.length);
      generatedPassword += vaildChars[index]
    }
    this.password = generatedPassword
  }
}
