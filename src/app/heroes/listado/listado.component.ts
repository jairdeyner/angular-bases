import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heoreBorrado: string = '';

  borrarHeroe(): void {
    this.heoreBorrado = this.heroes.pop() || '';
  }
}
