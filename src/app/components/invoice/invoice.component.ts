import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { ListItemsViewComponent } from '../list-items-view/list-items-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent,
    ClientViewComponent,
    ListItemsViewComponent,
    CompanyViewComponent,
    TotalComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {


  invoice!: Invoice;

  constructor(private service: InvoiceService) {

  }

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();

  }

  removeItem(id:number) {
    this.invoice = this.service.remove(id);
  }
}
