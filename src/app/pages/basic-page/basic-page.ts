import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { LocaleService, SupportedLocale } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.html',

})
export default class BasicPage {

  localeService = inject(LocaleService)
  currentLocale = this.localeService.getLocale

  nameLower = signal('rafael')
  nameUpper = signal('RAFAEL')
  fullName = signal('rAfAel boTELla')

  customDate = signal( new Date() )

  clockTickEffect = effect( (onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set( new Date() )
    }, 1000);

    onCleanUp( () => clearInterval(interval) )
  } )
}
