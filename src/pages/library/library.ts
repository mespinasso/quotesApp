import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { QuotesPage } from './../quotes/quotes';
import { Quote } from './../../data/quote.inteface';

import quotes from '../../data/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quotesPage = QuotesPage;
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];

  ngOnInit() {
    // Fetching the data from the quotes.ts file
    this.quoteCollection = quotes;
  }
}
