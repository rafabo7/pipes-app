import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heros.data';
import { CanFlyPipe } from '../../pipes/canFly.pipe';
import { HeroColorPipe } from '../../pipes/heroColor.pipe';
import { HeroTextColorPipe } from '../../pipes/heroTextColor.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../pipes/heroCreator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe,
    CanFlyPipe,
    HeroColorPipe,
    HeroTextColorPipe,
    HeroCreatorPipe,
    TitleCasePipe
  ],
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
