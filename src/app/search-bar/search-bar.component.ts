import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule


@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {
  @Output() searchButtonClicked =new EventEmitter<string>();
  countryName ='';
  ngOnInit(): void {
  }
 constructor(){

 }
 handleSearchClick(){
 this.searchButtonClicked.emit(this.countryName);
 }
}
