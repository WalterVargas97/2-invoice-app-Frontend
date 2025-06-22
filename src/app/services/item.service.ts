import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { InvoiceData } from '../data/invoice.data';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private invoice: Invoice = InvoiceData;
  constructor() { }
}
