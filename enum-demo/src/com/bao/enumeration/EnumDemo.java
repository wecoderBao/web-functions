package com.bao.enumeration;

public class EnumDemo {
	public enum InnerEnum {
		RED(1, "red"), GREEN(2, "green"), YELLOW(3, "yellow");
		private int code;
		private String msg;

		InnerEnum(int code, String msg) {
			this.code = code;
			this.msg = msg;
		}

		public int getCode() {
			return code;
		}

		public String getMsg() {
			return msg;
		}
		

	}

	public static void main(String[] args) {
		System.out.println(InnerEnum.RED.getCode()+">>"+InnerEnum.RED.getMsg());
		System.out.println(InnerEnum.GREEN.getCode()+">>"+InnerEnum.GREEN.getMsg());
		System.out.println(InnerEnum.YELLOW.getCode()+">>"+InnerEnum.YELLOW.getMsg());
	}
}
