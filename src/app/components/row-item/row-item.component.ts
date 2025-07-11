import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  //Este selector queda cdiferente por los corchetes, el tr seria la seleccion y aplica para las tablas y no se pierda el formato del padre
  selector: 'tr[row-item]',
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html',
  styleUrl: './row-item.component.css'
})
export class RowItemComponent {
  @Input() item!: Item;
  @Output() removeEventEmitter:EventEmitter<number> = new EventEmitter();
   onRmove(id: number) {
    this.removeEventEmitter.emit(id);
  }

}
