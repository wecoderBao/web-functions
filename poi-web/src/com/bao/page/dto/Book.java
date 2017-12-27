package com.bao.page.dto;

public class Book {
	private int id;
	private String name;
	private double price;
	private String category;
	private String author;
	private String descs;

	public Book() {

	}

	public Book(int id, String name, double price, String category, String author, String descs) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.category = category;
		this.author = author;
		this.descs = descs;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getDescs() {
		return descs;
	}

	public void setDescs(String descs) {
		this.descs = descs;
	}

}
