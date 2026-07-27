import { Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, SlicePipe } from '@angular/common';

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
    Card,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe],
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
}
