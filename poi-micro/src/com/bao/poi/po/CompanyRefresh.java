package com.bao.poi.po;

public class CompanyRefresh {

	private String area;
	private String name;
	private String phone;
	private String address;
	private String refreshTimes;
	private String money;
	public CompanyRefresh() {
		super();
	}
	public CompanyRefresh(String area, String name, String phone, String address, String refreshTimes, String money) {
		super();
		this.area = area;
		this.name = name;
		this.phone = phone;
		this.address = address;
		this.refreshTimes = refreshTimes;
		this.money = money;
	}
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getRefreshTimes() {
		return refreshTimes;
	}
	public void setRefreshTimes(String refreshTimes) {
		this.refreshTimes = refreshTimes;
	}
	public String getMoney() {
		return money;
	}
	public void setMoney(String money) {
		this.money = money;
	}
	
}
