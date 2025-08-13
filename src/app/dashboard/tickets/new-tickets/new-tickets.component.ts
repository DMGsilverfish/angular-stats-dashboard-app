import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";


@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css'
})
export class NewTicketsComponent implements OnInit, AfterViewInit {
@ViewChild('form') private form?: ElementRef<HTMLFormElement> ;
//private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

@Output() add = new EventEmitter<{title: string; text: string}>();

  ngOnInit(){
      console.log('ON INIT');
      console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(){
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  

  onSubmit(title: string, ticketText: string) {
    this.add.emit({title: title, text: ticketText});
    this.form?.nativeElement.reset();
  }
}
