import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heros.data';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.html',
})
export default class CustomPage {
  name = signal('rafael botella')

  upperCase = signal(true)

  heros = signal(heroes)

  changeUpperCase() {
    return this.upperCase.set(!this.upperCase())
  }
}
