<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!-- sidebar: style can be found in sidebar.less -->


<%--2.权限划分
1超级管理员：全部权限
2管理员：资讯、精选、社区的全部权限
3运营：资讯的全部权限，精选的焦点图配置权限
4编辑：资讯的全部权限
5实习生：资讯的全部权限--%>
<section class="sidebar">
    <!-- Sidebar user panel -->
    <div class="user-panel">
        <div class="pull-left image">
            <img src="assets/img/avatar3.png" class="img-circle" alt="User Image" />
        </div>
        <div class="pull-left info">
            <p id="userName"></p>
            <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
        </div>
    </div>

    <!-- 配置好a的id（按层定 ）即可 利用了cookie 自动记录当前点击的id  -->
    <ul class="sidebar-menu"  id="leftNavigate">
        <c:forEach items="${userLeftModules}" var="ModuleAndCategory">
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-dashboard"></i> <span>${ModuleAndCategory.category.moduleCategoryName}</span> <i class="fa fa-angle-left pull-right"></i>
                </a>
                <ul class="treeview-menu">
                    <c:forEach var="module" items="${ModuleAndCategory.moduleList}">
                        <li><a id="${module.moduleName}" target="${module.target}" href="${ModuleAndCategory.category.domain}${module.moduleUrl}"><i class="fa fa-circle-o"></i> ${module.moduleTitle}</a></li>
                    </c:forEach>
                </ul>
            </li>
        </c:forEach>

    </ul>
</section>
<%--<script src="assets/js/cookie.js" type="text/javascript"></script>--%>
<script src="assets/admin/app/left.js" type="text/javascript"></script>
