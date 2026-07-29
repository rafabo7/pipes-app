import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  // este nombre es para usar el pipe en el html
  name: 'toggleCase',
})
// el nombre de la clase se usará para importarlo en la clase del componente
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, upper: boolean = true): string {
    return upper ? value.toUpperCase() : value.toLowerCase()

  }
}
