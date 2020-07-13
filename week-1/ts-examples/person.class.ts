/*
============================================
; Title:  Assignment 1.4
; Author: Ashleigh Lyman
; Date:   12 July 2020
; Modified By: Ashleigh Lyman
; Description: assignment 1.4
;===========================================
*/




import { IPerson } from "./person.interface";

class Person implements IPerson {

    firstName: string;
    lastName: string;
    
    constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
    }
}

let myName = new Person("Ashleigh",  "Lyman");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);