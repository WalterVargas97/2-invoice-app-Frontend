import { Component, Input } from '@angular/core';
import { Address } from '../../models/address';

@Component({
  selector: 'app-client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css'
})
export class ClientViewComponent {

  @Input() name!: string;
  @Input() lastName!: string;
  @Input() address!: Address;

}
