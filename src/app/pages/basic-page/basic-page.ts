import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',

})
export default class BasicPage {
  nameLower = signal('rafael')
  nameUpper = signal('RAFAEL')
  fullName = signal('rAfAel boTELla')

  customDate = signal( new Date() )

  clockTickEffect = effect( (onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set( new Date() )
      console.log('tick');
    }, 1000);

    onCleanUp( () => clearInterval(interval) )
  } )
}
