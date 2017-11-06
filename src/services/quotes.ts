import { Quote } from "../data/quote.inteface";

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorites(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteAtIndex: Quote) => {
            return quoteAtIndex.id == quote.id;
        });

        this.favoriteQuotes.splice(position, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();    
    }
    isQuoteFavorite(quote: Quote) {
        return this.favoriteQuotes.find((quoteAtIndex: Quote) => {
            return quoteAtIndex.id == quote.id;
        });
    }
}