package com.etixicode.springbootlibrary.responsemodels;

import com.etixicode.springbootlibrary.entity.Book;
import lombok.Data;

@Data
public class ShelfCurrentLoansResponse {

	public ShelfCurrentLoansResponse(Book book, int daysLeft) {
		this.book = book;
		this.daysLeft = daysLeft;
	}

	private Book book;

	private int daysLeft;
}
