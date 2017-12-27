package com.bao.page.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bao.page.dto.Book;
import com.bao.page.dto.PageUtil;

public class PageServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");

		ArrayList<Book> bookList = new ArrayList<Book>();
		int totalCount = 100;
		int currPage = 1;
		int pageSize = 10;
		PageUtil pageUtil = new PageUtil(bookList, currPage, pageSize, totalCount);
		request.setAttribute("page", pageUtil);
		request.getRequestDispatcher("/jsp/pagination.jsp?page=" + currPage).forward(request, response);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}
}
