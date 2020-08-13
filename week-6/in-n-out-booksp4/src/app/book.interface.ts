/**
 * Title: book.interface.ts
 * Author: Ashleigh Lyman
 * Date: 08 August 2020
 * Description: book interface
 */


export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
