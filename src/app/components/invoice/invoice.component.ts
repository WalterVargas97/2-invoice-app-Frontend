import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { ListItemsViewComponent } from '../list-items-view/list-items-view.component';
import { RowItemComponent } from '../row-item/row-item.component';
import { CompanyViewComponent } from '../company-view/company-view.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent, ClientViewComponent, ListItemsViewComponent, RowItemComponent, CompanyViewComponent],
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
}
