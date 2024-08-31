import { Component, Input, OnInit } from '@angular/core';
import {CountryComponent} from '../country/country.component'
import { CommonModule } from '@angular/common'; 
import { Country } from '../Modules/class';

@Component({
  selector: 'countries',
  standalone: true,
  imports: [CountryComponent,CommonModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent implements OnInit {
  @Input() countries: Country[] =[]
ngOnInit(): void {
  
}

}

