package com.bao.page.dto;

import java.io.Serializable;
import java.util.List;

public class PageUtil implements Serializable {
	private static final long serialVersionUID = 1L;
	/**
	 * 总记录数
	 */
	private int totalCount;
	/**
	 * 每页记录数
	 */
	private int pageSize;
	/**
	 * 总页数
	 */
	private int totalPage;
	/**
	 * 当前页数
	 */
	private int currPage;
	/**
	 * 列表数据
	 */
	private List<?> list;

	/**
	 * 构造函数
	 * 
	 * @param list
	 *            数据列表
	 * @param currPage
	 *            当前页
	 * @param pageSize
	 *            每页大小
	 * @param totalCount
	 *            总记录数
	 */
	public PageUtil(List<?> list, int currPage, int pageSize, int totalCount) {
		this.list = list;
		this.currPage = currPage;
		this.pageSize = pageSize;
		this.totalCount = totalCount;
		this.totalPage = (int) Math.ceil((double) totalCount / pageSize);
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public int getCurrPage() {
		return currPage;
	}

	public void setCurrPage(int currPage) {
		this.currPage = currPage;
	}

	public List<?> getList() {
		return list;
	}

	public void setList(List<?> list) {
		this.list = list;
	}

}
