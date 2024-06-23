import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Item } from '../../models/item';


@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice ;
  private counterId :number = 4;
  item!:Item;


  constructor(private service: InvoiceService){}

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
    this.item = new Item();
  }
  removeItem(id:number){
    this.invoice =this.service.remove(id);
  }
  onSubmit(itemForm: NgForm):void{
    this.item.id = this.counterId ++;
    this.invoice =this.service.save(this.item);
    this.item = new Item();
    itemForm.reset();
    itemForm.resetForm();
  }
 addItem(item:Item){
  this.invoice=this.service.save(item);
 }
}
