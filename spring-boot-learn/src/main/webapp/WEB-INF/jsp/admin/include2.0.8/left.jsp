<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!-- sidebar: style can be found in sidebar.less -->
<section class="sidebar">
    <!-- Sidebar user panel -->
    <div class="user-panel">
        <div class="pull-left image">
            <img src="assets/admin/img/avatar3.png" class="img-circle" alt="User Image" />
        </div>
        <div class="pull-left info">
            <p id="magicalCoderUserName"></p>
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
                        <c:if test="${module.ifShow}">
                            <li><a id="${module.moduleName}" href="${module.moduleUrl}"><i class="fa fa-circle-o"></i> ${module.moduleTitle}</a></li>
                        </c:if>
                    </c:forEach>
                </ul>
            </li>
        </c:forEach>
    </ul>
</section>
<script src="assets/admin/app/left.js" type="text/javascript"></script>
