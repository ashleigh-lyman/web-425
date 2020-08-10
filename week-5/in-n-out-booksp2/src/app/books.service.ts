/**
 * Title: books.service.ts
 * Author: Ashleigh Lyman
 * Date: 08 August 2020
 * Description: Book service array
 */


import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9780545316484',
        title: 'Dragon Rider',
        description: 'A young dragon named Firedrake goes on an adventure to save his valley, and he meets a runaway boy. They encounter creatures good and evil, while making their way to their destination.',
        numOfPages: 544,
        authors: ['Cornelia Funke']
      },
      {
        isbn: '9780545227704',
        title: 'The Thief Lord',
        description: 'Two orphans, Prosper and Bo, are running from their cruel aunt and uncle, when they decide to hide in an old theater in Venice. A young boy, who calls himself the "Thief Lord", is the leader of a group of pick pocket children. They eventually learn that he has secrets of his own.',
        numOfPages: 368,
        authors: ['Cornelia Funke']
      },
      {
        isbn: '9780439709101',
        title: 'Inkheart',
        description: 'A father and husband has the ability to read objects and people out of books. His power leads him to read out evil men and in exchange his wife gets transported into the book. Him and his daughter go on an adventure to rescue her, meeting new characters and fighting the evil men.',
        numOfPages: 576,
        authors: ['Cornelia Funke']
      },
      {
        isbn: '9780439554015',
        title: 'Inkspell',
        description: 'This book is a sequel of Inkheart. Picking up where the first book left off a year later. This novel focuses on Dustfinger, a story-book character from the first book who was read out, goes on a quest to return home.',
        numOfPages: 672,
        authors: ['Cornelia Funke']
      },
      {
        isbn: '9780439866293',
        title: 'Inkdeath',
        description: 'The final book in the Inkheart series, carries on with the Adderhead ordering his henchmen to plunder the villages. A band of outlaws, led by the Bluejay, attempt to save the children from a life of slavery in his silver mines.',
        numOfPages: 704,
        authors: ['Cornelia Funke']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
