import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Person } from '../models/person.model';

@Injectable()
export class PersonProvider {
    url = `http://localhost:8080/api/persons`;
    
    constructor(private http: HttpClient) { }

    getPersons() {
        return this.http.get(this.url);
    }

    addPerson(person: Person) {
        return this.http.post(this.url, person);
    }

    updatePersons(persons: Person[]) {
        return this.http.put(this.url, persons);
    }
}