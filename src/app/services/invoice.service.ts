import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { InvoiceData } from '../data/invoice.data';
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = InvoiceData;

  constructor() { }

  getInvoice(): Invoice {
    const total: number = this.calculateTotal();
    return {... this.invoice, total};
  }
  calculateTotal(): number {
  //  Forma normal de hacerlo, abajo esta la forma reduccionista de hacerlo
  //  let total:number  = 0;
  //   this.invoice.items.forEach(item => {
  //     total += item.total();
  // });
  // return total;

    return this.invoice.items.reduce((total, item) => total + (item.price * item.quantity), 0);}
}
