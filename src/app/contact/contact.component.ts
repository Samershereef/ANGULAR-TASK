import { Component } from '@angular/core';
import{FormsModule}from '@angular/forms';
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  text:string | null= null;
  number:number|null=null;
  email:string | null= null;
  password:string | null= null;

}
