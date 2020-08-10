/**
 * Title: book.interface.ts
 * Author: Ashleigh Lyman
 * Date: 06 August 2020
 * Description: book interface
 */


export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
