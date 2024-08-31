import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CountryComponent} from './country/country.component'
import {CountriesComponent} from './countries/countries.component'
import {SearchBarComponent} from './search-bar/search-bar.component'
import { Country } from './Modules/class';
import { PluralizePipe } from './pipes/pluralize.pipe';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CountryComponent,CountriesComponent,SearchBarComponent,PluralizePipe,UpperCasePipe,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app13';
  allCountries:Country[]=[]
  constructor(){
    this.getCountries();
  }
  getCountries(){
    
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {  
        this.fillArray(json)
      })}

      getCountryByName(name:string){
        fetch(`https://restcountries.com/v3.1/name/${name}`)
          .then(response => response.json())
          .then(json => {  
            this.fillArray(json)
          })}
    

      fillArray(json:any){
        this.allCountries=[];
        json.forEach((element:any) => {
          let c = new Country();
          c.name = element.name.common;
          c.imgsrc = element.flags.png;
          c.population =element.population;
          c.language = element.languages ? Object.values(element.languages)[0] as string : 'N/A'; 
        c.capital = element.capital ? element.capital[0] : 'N/A'; 
          if (c.name === 'Palestine') {
            c.capital = 'Jerusalem';
          }
      
          // Skip adding Israel to the list (case-sensitive)
          if (c.name !== 'Israel') {
            this.allCountries.push(c);
          }
        });
      }
      parentFunction(childmsg:string){
        if (childmsg==''){
          this.getCountries()
        }
        else{
          this.getCountryByName(childmsg);

        }
      }
}
