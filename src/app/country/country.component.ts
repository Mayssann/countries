import { Component, Input, OnInit } from '@angular/core';
import { PluralizePipe } from '../pipes/pluralize.pipe';
import { UpperCasePipe,CommonModule } from '@angular/common';

@Component({
  selector: 'country',
  standalone: true,
  imports: [PluralizePipe,UpperCasePipe,CommonModule],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit{
@Input() name ='';
@Input() src='';
@Input() description='';
@Input() population=0;
@Input() language='';
@Input() capital='';

constructor(){
  
}

  ngOnInit(): void {
  }
showPopulation(){
  alert(this.population)
}
}
