import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input() header: string = '';
  @Input() content: string = '';
  @Input() autohide: boolean = true;
  @Input() delay: number = 5000; 
  @Input() class: string = 'bg-success text-light';
}
