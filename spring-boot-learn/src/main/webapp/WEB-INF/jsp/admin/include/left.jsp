<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!-- sidebar: style can be found in sidebar.less -->
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
    		<li class="treeview">
                <a href="#">
                    <i class="fa fa-dashboard"></i> <span>测试模块</span> <i class="fa fa-angle-left pull-right"></i>
                </a>
                <ul class="treeview-menu">
                    <li><a id="moduleName1" href="#"><i class="fa fa-circle-o"></i> 模块名1</a></li>
                    <li><a id="moduleName2" href="#"><i class="fa fa-circle-o"></i> 模块名2</a></li>
                    <li><a id="moduleName3" href="#"><i class="fa fa-circle-o"></i> 模块名3</a></li>
                </ul>
            </li>

        <c:forEach items="${userLeftModules}" var="ModuleAndCategory">
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-dashboard"></i> <span>${ModuleAndCategory.category.moduleCategoryName}</span> <i class="fa fa-angle-left pull-right"></i>
                </a>
                <ul class="treeview-menu">
                    <c:forEach var="module" items="${ModuleAndCategory.moduleList}">
                        <li><a id="${module.moduleName}" href="${module.moduleUrl}"><i class="fa fa-circle-o"></i> ${module.moduleTitle}</a></li>
                    </c:forEach>
                </ul>
            </li>
        </c:forEach>
    </ul>
    <%--<ul class="sidebar-menu"  id="leftNavigate">
        <li class="treeview">
            <a href="#">
                <i class="fa fa-dashboard"></i> <span>抽奖</span> <i class="fa fa-angle-left pull-right"></i>
            </a>
            <ul class="treeview-menu">
                <li><a id="1-1" href="admin/prize/list"><i class="fa fa-circle-o"></i> 抽奖列表</a></li>
                <li><a id="1-2" href="admin/prizeDetail/list"><i class="fa fa-circle-o"></i> 奖品详情</a></li>
                <li><a id="1-3" href="admin/prizeUserRestrict/list"><i class="fa fa-circle-o"></i> 抽奖限制</a></li>
                <li><a id="1-4" href="admin/prizeUserWin/list"><i class="fa fa-circle-o"></i> 中奖查询</a></li>
                <li><a id="1-5" href="admin/prize_user_extra_chance/list"><i class="fa fa-circle-o"></i> 用户额外赠送抽奖次数查询</a></li>
            </ul>
        </li>

        <li class="treeview">
            <a href="#">
                <i class="fa fa-laptop"></i>
                <span>竞猜活动</span>
                <i class="fa fa-angle-left pull-right"></i>
            </a>
            <ul class="treeview-menu">
                <li><a id="2-1" href="admin/jc_main/list"><i class="fa fa-circle-o"></i> 竞猜活动表</a></li>
                <li><a id="2-2" href="admin/jc_main_child/list"><i class="fa fa-circle-o"></i> 竞猜主题表</a></li>
                <li><a id="2-3" href="admin/jc_detail/list"><i class="fa fa-circle-o"></i> 竞猜题目</a></li>
                <li><a id="2-4" href="admin/jc_user_answer/list"><i class="fa fa-circle-o"></i> 竞猜用户答题</a></li>
                <li><a id="2-5" href="admin/jc_prize/list"><i class="fa fa-circle-o"></i> 竞猜活动关联抽奖</a></li>
            </ul>
        </li>

    </ul>--%>
</section>
<script src="assets/app/admin/left.js" type="text/javascript"></script>
