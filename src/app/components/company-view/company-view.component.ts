import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-company-view',
  standalone: true,
  imports: [],
  templateUrl: './company-view.component.html',
  styleUrl: './company-view.component.css'
})
export class CompanyViewComponent {
@Input() name!: string;
@Input() fiscalNumber!: number;
} 
