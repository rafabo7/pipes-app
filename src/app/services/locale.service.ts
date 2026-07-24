import { Injectable, signal } from '@angular/core';

export type SupportedLocale = 'es'|'fr'|'en'

@Injectable({providedIn: 'root'})
export class LocaleService {

  private currentLocale = signal<SupportedLocale>((localStorage.getItem('locale') as SupportedLocale ) ?? 'es')
  get getLocale() {
    return this.currentLocale()
  }

  changeLocale(locale: SupportedLocale) {
    localStorage.setItem('locale', locale)
    this.currentLocale.set(locale)
    window.location.reload()
  }
}
