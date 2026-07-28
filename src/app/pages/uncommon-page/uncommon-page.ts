import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval } from 'rxjs';

const client1 = {
  name: 'Fernando',
  gender:'male',
  age: 30
}
const client2 = {
  name: 'Amanda',
  gender:'female',
  age: 32
}

@Component({
  selector: 'app-uncommon-page',
  imports: [
    AsyncPipe,
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    JsonPipe,
    KeyValuePipe,
    SlicePipe,
    TitleCasePipe,
  ],
  templateUrl: './uncommon-page.html',
})
export default class UncommonPage {
  activeClient = signal(client1)

  welcomeMap = {
    male: 'Bienvenido',
    female: 'Bienvenida'
  }

  //i18nPlural
  clients = signal([
    'Clarita',
    'Mar',
    'Alex',
    'Kike',
    'Javi',
    'Victor',
    'Marian',
  ])

  clientsMap = {
    '=0': 'No hay nadie delante de tí en la cola, en breves momentos será tu turno',
    '=1': 'Hay un cliente esperando delante de tí',
    other: 'Hay # clientes esperando delante de tí',
  }

  // keyValuePipe sirve para convertir un objeto, en un iterable de elementos con dos propiedades, key para el nombre de la prop, value para el valor. Es otra forma de renderizar objetos
  profile = {
    name: 'Agapito',
    age: 28,
    interests: ['Sports', 'Chemistry'],
    location: 'Germany'

  }

  changeClient() {
    if (this.activeClient() === client1) {
      this.activeClient.set(client2)
      return
    }
    this.activeClient.set(client1)
  }

  deleteClient() {
    this.clients.update( prev => prev.slice(1) )
  }

  // asyncPipe espera y renderiza un valor, tambien puede suscribirse, esperar, renderizar y matar cuando salimos de la pagina un observalbe
  promiseValue : Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos en la promesa')
      console.log('Promesa finalizada')
    }, 3000);
  })

  myObservable = interval(2000)
}
