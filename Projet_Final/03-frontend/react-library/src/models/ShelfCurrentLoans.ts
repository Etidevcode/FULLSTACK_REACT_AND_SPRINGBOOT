/*
 * Copyright (c) - All Rights Reserved.
 * 
 * See the LICENSE file for more information.
 */

import BookModel from "./BookModel";

class ShelfCurrentLoans {
    book: BookModel;
    daysLeft: number;

    constructor(book: BookModel, daysLeft: number){
        this.book = book;
        this.daysLeft = daysLeft;
    }
}

export default ShelfCurrentLoans;