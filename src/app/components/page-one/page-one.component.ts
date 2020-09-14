import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { PersonProvider } from '../../providers/person.service';
import { Router } from '@angular/router';
import { Person } from '../../models/person.model';


@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  formPerson: FormGroup;

  constructor(private personService: PersonProvider, private router: Router) { 
    this.formPerson = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'lastName': new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  ngOnInit(): void {
  }

  save () {
    if (this.formPerson.valid) {
      this.personService.addPerson(this.formPerson.value).subscribe((data: Person) => {
        alert('Registro guardado correctamente');
        this.router.navigate(["/page-two"]);
      }, ( error ) => {
        console.log(error);
        alert('Hubo un error al guardar');
      });
      this.personService.addPerson(this.formPerson.value).subscribe;

    }
    else {
      alert('Complete todos los campos');
    }
  }
}
