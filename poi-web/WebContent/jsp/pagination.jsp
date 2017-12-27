<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8" isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
<title>Insert title here</title>
</head>
<body>

    <div align="center" >
    <font size="5">
        那些年一起追过的小说
    </font>
    </div>
    <br/>
    <table border="1" width="100%">
            <tr>
                <td>单号</td>
                <td>名称</td>
                <td>价格</td>
                <td>类别</td>
                <td>作者</td>
                <td>描述</td>
            </tr>

        <c:if test="${empty page.list }">
            <tr>
                <td colspan="8" align="center">没有商品</td>
            </tr>
        </c:if>
         <c:forEach items="${page.list }" var="book">
            <tr>
                <td>${book.id}</td>
                <td>${book.name}</td>
                <td>${book.price}</td>
                <td>${book.category}</td>
                <td>${book.author}</td>
                <td>${book.descs}</td>
            </tr>
        </c:forEach>

    </table>
    <br/>
    <div align="center">
    <c:if test="${page.currPage>1 }">
        <a href="${pageContext.request.contextPath }/home?page=${page.currPage-1}">上一页</a>
    </c:if>
        <a href="${pageContext.request.contextPath }/home?page=${1}">首页</a>
            <c:forEach begin="1" end="${page.totalPage }" step="1" var="i">
                <c:if test="${page.currPage==i }">
                    <a href="${pageContext.request.contextPath }/home?page=${i}"><font color="#ff0000">${i}</font></a>
                </c:if>
                <c:if test="${page.currPage!=i }">
                    <a href="${pageContext.request.contextPath }/home?page=${i}">${i}</a>
                </c:if>
            </c:forEach>
        <a href="${pageContext.request.contextPath }/home?page=${page.totalPage}">末页</a>
    <c:if test="${page.currPage< page.totalPage }">
        <a href="${pageContext.request.contextPath }/home?page=${page.currPage+1}">下一页</a>
    </c:if>
    </div>
</body>
</html>