import { Component, OnInit } from '@angular/core';
import { PersonProvider } from '../../providers/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

  persons: Person[] = [];
  constructor(private personService: PersonProvider) { }

  ngOnInit(): void {
    this.getPersons();
  }

  changeCheck(idx: number) {
    this.persons[idx].checked = !this.persons[idx].checked;
  }

  updatePersons() {
    this.persons.forEach((item) => {
      item.indicted = item.checked;
    });
    this.personService.updatePersons(this.persons).subscribe((data: Person[]) => {  
      alert('Registros Procesados Correctamente');
      this.getPersons();
    }, ( error ) => {
      console.log(error)
    });
  }

  getPersons() {
    this.personService.getPersons().subscribe((data: Person[]) => {
      this.persons = data;
      this.persons.forEach((item) => {
        item.checked = item.indicted;
      });
    }, ( error ) => {
      console.log(error)
    });
  }
}
