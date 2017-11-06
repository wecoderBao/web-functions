<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%--
代码为自动生成 Created by www.magicalcoder.com
 如果你改变了此类 read 请将此行删除
 欢迎加入官方QQ群:323237052
--%>
<!DOCTYPE html>
<html>
<head>
    <%@include file="../../common/head.jsp"%>
    <title>AdminLTE | Dashboard</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <%@include file="../include2.0.8/head.jsp"%>
</head>
<body class="skin-blue">
<header class="header">
    <%@include file="../include2.0.8/top.jsp"%>
</header>
<div class="wrapper row-offcanvas row-offcanvas-left">
    <aside class="left-side sidebar-offcanvas">
        <%@include file="../include2.0.8/left.jsp"%>
    </aside>
    <aside class="right-side">
        <section class="content-header">
            <h1>
                gua列表 
                <c:if test="${ 1==1}">
                    <a class="btn btn-app" href="/gua/detail"><i class="fa fa-edit"></i>新增</a>
                </c:if>
            </h1>
            <ol class="breadcrumb">
                <li><a href="admin/index"><i class="fa fa-dashboard"></i> 主页</a></li>
                <li class="active">gua列表</li>
            </ol>
        </section>
        <!-- Main content -->
        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <div class="box-tools">
                                <div class="form">
                                    <div class="box-body">
                                        <div class="row">
                                             <div class="col-xs-2">
                                                 <div class="form-group">
                                                     <label for="identifierFirst">抽奖活动主键 (=)</label>
                                                     <input type="text" class="form-control"
                                                      value="${ identifierFirst }"
                                                   required  minLength="0"                                                   id="identifierFirst" name="identifierFirst">
                                                 </div>
                                             </div>
                                             <div class="col-xs-2">
                                                 <div class="form-group">
                                                     <label for="nameFirst">抽奖活动名称 (like)</label>
                                                     <input type="text" class="form-control"
                                                      value="${ nameFirst }"
                                                   required  minLength="0"                                                   id="nameFirst" name="nameFirst">
                                                 </div>
                                             </div>
                                              <div class="col-xs-2">
                                                 <div class="form-group input-select">
                                             <label for="prizeRootIdFirst">抽奖大类</label>
                                            <input type="hidden" id="prizeRootIdFirst" name="prizeRootIdFirst" value="${prizeRoot.id}" foreignTableName="prize_root" foreignJavaField="id" selectValue="">
                                            <input type="text" class="form-control" id="prizeRootIdFirstSearch" name="prizeRootIdFirstSearch"  placeholder="搜索一下" >
                                                 </div>
                                             </div>                                              <div class="col-xs-2">
                                                 <div class="form-group input-select">
                                             <label for="huoDongIdFirst">运营活动</label>
                                            <input type="hidden" id="huoDongIdFirst" name="huoDongIdFirst" value="${huodong.id}" foreignTableName="huodong" foreignJavaField="id" selectValue="">
                                            <input type="text" class="form-control" id="huoDongIdFirstSearch" name="huoDongIdFirstSearch"  placeholder="搜索一下" >
                                                 </div>
                                             </div>                                                <div class="col-xs-2">
                                                    <div class="form-group">
                                                        <label for="querySubmit">&nbsp;</label>
                                                        <button class="btn btn-primary form-control" id="querySubmit">查询</button>
                                                    </div>
                                                </div>

                                            <input type="hidden" id="pageIndex" name="pageIndex"  value="1">
                                            <input type="hidden" id="pageCount" name="pageCount" value="0">
                                            <input type="hidden" id="orderBySqlField" name="orderBySqlField" value="">
                                            <input type="hidden" id="descAsc" name="descAsc" value="">
                                            <input type="hidden" id="queryParamCacheKey" name="queryParamCacheKey" value="${queryParamCacheKey}">
                                            <input type="hidden" id="focusTrId" name="focusTrId" value="${focusTrId}">
                                            <input type="hidden" id="canDelete"  value="${adminPriority.canDelete}">
                                            <input type="hidden" id="canUpdate"  value="${adminPriority.canUpdate}">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body table-responsive" style="overflow: auto">
                            <div class="row">
                                <c:if test="${ adminPriority!=null && adminPriority.canDelete }">
                                <div class="form-horizontal" >
                                    <div class="col-sm-1">
                                        <input id="batchDeleteItem" class="btn btn-sm btn-danger" type="button" onclick="batchDeleteItem('prize')" value="批量删除">
                                    </div>
                                </div>
                                </c:if>
                                <c:if test="${ adminPriority!=null && adminPriority.canTruncate}">
                                <div class="form-horizontal" >
                                    <div class="col-sm-1">
                                        <input class="btn btn-sm btn-danger" type="button" class="form-control" onclick="truncateTable('prize')" value="清空数据">
                                    </div>
                                </div>
                                </c:if>
                                <c:if test="${ adminPriority!=null && adminPriority.canInsert}">
                                    <div class="form-horizontal" >
                                        <div class="col-sm-1">
                                            <input class="btn btn-sm btn-danger" type="button" class="form-control" onclick="batchCopyItem('prize')" value="批量复制">
                                        </div>
                                    </div>
                                </c:if>
                                <div class="form-horizontal" >
                                    <label class="col-sm-1 control-label">导出:</label>
                                    <div class="col-sm-1">
                                        <input type="text" class="form-control" size="2" name="start"  id="start" value="0">
                                    </div>
                                    <div class="col-sm-1">
                                        <input type="text"  class="form-control" size="2" name="limit" id="limit" value="20">
                                    </div>
                                    <c:if test="${ adminPriority!=null && adminPriority.canExport}">
                                    <div class="col-sm-1">
                                        <input type="button" class="btn btn-sm btn-info" onclick="exportFile('excel')" value="EXCEL导出">
                                    </div>
                                    <div class="col-sm-1">
                                        <input type="button" class="btn btn-sm btn-info" onclick="exportFile('json')" value="JSON导出">
                                    </div>
                                    </c:if>
                                </div>
                                <c:if test="${ adminPriority!=null && adminPriority.canImport}">
                                <div class="form-horizontal" >
                                    <label class="col-sm-1 control-label">导入:</label>
                                    <div class="col-sm-1">
                                        <input type="file" id="importJsonFile" class="btn btn-sm btn-danger"
                                               name="myfiles" onchange="importJsonFile('admin/prize/import')"/>
                                    </div>
                                </div>
                                </c:if>
                            </div>
                            <table id="example2" class="table table-bordered table-hover dataTable">
                                <thead id="thead">
                                              <tr>
                                                  <th><input type="checkbox" id="checkAll"></th>
                                                  <th>序号</th>
                                                 <th  class="sorting" orderField="identifier">                                                      抽奖活动主键
                                                  </th>
                                                 <th  class="sorting" orderField="huo_dong_id">                                                      运营活动
                                                  </th>
                                                 <th  class="sorting" orderField="prize_root_id">                                                      抽奖大类
                                                  </th>
                                                 <th  class="sorting" orderField="name">                                                      抽奖活动名称
                                                  </th>
                                                 <th  class="sorting" orderField="end_time">                                                      结束时间
                                                  </th>
                                                 <th  class="sorting" orderField="begin_time">                                                      开始时间
                                                  </th>
                                                 <th  class="sorting" orderField="status">                                                      状态
                                                  </th>
                                                 <th  class="sorting" orderField="support_http_invoke">                                                      是否支持http抽奖
                                                  </th>
                                                  <th>操作</th>
                                              </tr>
                                </thead>
                                <tbody id="tbody"></tbody>
                                <tfoot></tfoot>
                            </table>
                            <div class="row">
                                <div class="col-xs-2">
                                    <div class="dataTables_info"></div>
                                </div>
                                <div class="col-xs-10">
                                    <div class="dataTables_paginate paging_bootstrap">
                                        <ul class="pagination" id="pagination">
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.box-body -->
                    </div>
                    <!-- /.box -->
                </div>
            </div>

            <c:if test="${ adminPriority!=null && adminPriority.canStatistics}">
            <!-- statistics begin-->
            <!--基础统计汇总日期创建记录-->
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <div class="box-tools">
                                <div class="form">
                                    <div class="box-body">
                                        <div class="row">
                                            <div class="col-xs-2">
                                                <div class="form-group">
                                                    <label for="groupDateCountBySqlField">时间分组</label>
                                                    <select class="form-control" id="groupDateCountBySqlField" name="groupDateCountBySqlField">
                                                            <option value="begin_time">开始时间</option>
                                                            <option value="end_time">结束时间</option>
                                                            <option value="create_time">创建时间</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-xs-2">
                                                <div class="form-group">
                                                    <label for="groupDateCountByPrecision">时间精度</label>
                                                    <select class="form-control" id="groupDateCountByPrecision" name="groupDateCountByPrecision">
                                                        <option value="3">日</option>
                                                        <option value="2">月</option>
                                                        <option value="1">年</option>
                                                        <option value="4">时</option>
                                                        <option value="5">分</option>
                                                        <option value="6">秒</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-xs-2">
                                                <div class="form-group">
                                                    <label for="groupDateCountStatistics">&nbsp;</label>
                                                    <button class="btn btn-primary form-control" id="groupDateCountStatistics">统计</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-body" id="groupDateCountStatisticsDiv">

                        </div>
                        <div class="box-footer">
                            日期汇总统计
                        </div>
                    </div>
                </div>
            </div>
            <!--基础统计间隔日期创建记录-->
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <div class="box-tools">
                                <div class="form">
                                    <div class="box-body">
                                        <div class="row">
                                            <div class="col-xs-2">
                                                <div class="form-group">
                                                    <label for="groupDateIntervalBySqlField">时间分组</label>
                                                    <select class="form-control" id="groupDateIntervalBySqlField" name="groupDateIntervalBySqlField">
                                                                <option value="begin_time">开始时间</option>
                                                                <option value="end_time">结束时间</option>
                                                                <option value="create_time">创建时间</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-xs-2">
                                                <div class="form-group">
                                                    <label for="groupDateIntervalByPrecision">时间精度</label>
                                                    <select class="form-control" id="groupDateIntervalByPrecision" name="groupDateIntervalByPrecision">
                                                        <option value="6">秒</option>
                                                        <option value="5">分</option>
                                                        <option value="4">时</option>
                                                        <option value="3">日</option>
                                                        <option value="2">月</option>
                                                        <option value="1">年</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-xs-2">
                                                <div class="form-group">
                                                    <label for="groupDateIntervalStatistics">&nbsp;</label>
                                                    <button class="btn btn-primary form-control" id="groupDateIntervalStatistics">统计</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-body" id="groupDateIntervalStatisticsDiv">

                        </div>
                        <div class="box-footer">
                            距离上一条记录产生的间隔时间统计
                        </div>
                    </div>
                </div>
            </div>
            <!--基础统计间隔日期创建记录-->
            <div class="row">
                <div class="col-xs-12">
                    <div class="box">
                        <div class="box-header">
                            <div class="box-tools">
                                <div class="form">
                                    <div class="box-body">
                                        <div class="row">
                                            <div class="col-xs-2">
                                                <div class="form-group">
                                                    <label for="groupBySqlField">分组</label>
                                                    <select class="form-control" id="groupBySqlField" name="groupBySqlField">
                                                                <option value="id">主键</option>
                                                                <option value="identifier">抽奖活动主键</option>
                                                                <option value="name">抽奖活动名称</option>
                                                                <option value="prize_desc">抽奖活动描述</option>
                                                                <option value="status">状态</option>
                                                                <option value="need_login">是否需要登录</option>
                                                                <option value="login_restrict_type">登陆后限制类型</option>
                                                                <option value="login_restrict_count">登陆后限制抽奖次数</option>
                                                                <option value="ip_restrict">是否限制ip</option>
                                                                <option value="ip_restrict_type">ip限制类型</option>
                                                                <option value="ip_restrict_count">ip抽奖限制次数(-1不限制)</option>
                                                                <option value="support_http_invoke">是否支持http抽奖</option>
                                                                <option value="today_max_win_count">当天用户最大能获取的奖品数</option>
                                                                <option value="prize_root_id">抽奖大类</option>
                                                                <option value="give_chance_type">赠送抽奖机会类型</option>
                                                                <option value="give_chance_max_count">赠送抽奖机会最大次数</option>
                                                                <option value="support_http_give_chance">是否支持http赠送抽奖次数</option>
                                                                <option value="huo_dong_id">运营活动</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-xs-2">
                                                <div class="form-group">
                                                    <label for="groupStatistics">&nbsp;</label>
                                                    <button class="btn btn-primary form-control" id="groupStatistics">统计</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-body" id="groupStatisticsDiv">

                        </div>
                        <div class="box-footer">
                            <div class="form-group ">
                                <label class="col-sm-3 control-label">自定义横坐标分组统计</label>
                                <div class="col-sm-9">
                                    <label type="text"  id="groupStatisticsName" value=""></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- statistics end-->
            </c:if>
        </section>
        <!-- /.content -->
    </aside>
    <!-- /.right-side -->
</div>
<!-- ./wrapper -->
<%@include file="../include2.0.8/tail.jsp"%>
<script src="assets/admin/app/prize/prizePaging.js" type="text/javascript"></script>
<script type="text/javascript" >
    function resetDefaultValue() {
        getItemPage()
        initOrderBy()
        bindOrderByEvent()
        //外键下拉==========begin=========//
        inputSelectSetValue();
        $("section").find(".input-select").each(function(index,item){
            registerInputSelect($(item));
        })
        //外键下拉==========end========//
    }
    $(function(){
    //分页相关==========begin==========//
        restoreBuildQueryParam($("#queryParamCacheKey").val(),resetDefaultValue)
        //查询
        $("#querySubmit").click(function(){
            $("#pageIndex").val("1")
            $("#pageCount").val("0")
            buildQueryParamCacheKeyAndSetCache(buildReqParam(),"queryParamCacheKey",getItemPage)
        })
        //批量删除
        bindCheckAllEvent();
    //分页相关==========end==========//
    //统计=============begin==========//
        $("#groupDateCountStatistics").click(function(){
            var start = $("#start").val()
            var limit = $("#limit").val()
            var groupDateCountBySqlField = $("#groupDateCountBySqlField").val()
            if(groupDateCountBySqlField==''){
                alert("无日期字段，不支持日期汇总统计，请使用其他统计功能")
                return
            }
            var reqParam = buildReqParam();
            reqParam.groupDateCountBySqlField=groupDateCountBySqlField
            reqParam.groupDateCountByPrecision=parseInt($("#groupDateCountByPrecision").val())
            groupDateCountStatistics("prize","groupDateCountStatisticsDiv",start,limit,reqParam);
        })
        $("#groupDateIntervalStatistics").click(function(){
            var start = $("#start").val()
            var limit = $("#limit").val()
            var groupDateIntervalBySqlField = $("#groupDateIntervalBySqlField").val()
            if(groupDateIntervalBySqlField==''){
                alert("无日期字段，不支持日期间隔频率统计，请使用其他统计功能")
                return
            }
            var reqParam = buildReqParam();
            reqParam.groupDateIntervalBySqlField=groupDateIntervalBySqlField
            var groupDateIntervalByPrecision=parseInt($("#groupDateIntervalByPrecision").val())
            groupDateIntervalStatistics("prize","groupDateIntervalStatisticsDiv",start,limit,reqParam,groupDateIntervalByPrecision);
        })
        $("#groupStatistics").click(function(){
            var start = $("#start").val()
            var limit = $("#limit").val()
            var reqParam = buildReqParam();
            reqParam.groupBySqlField=$("#groupBySqlField").val()
            groupStatisticsDiv("prize","groupStatisticsDiv",start,limit,reqParam,"groupStatisticsName");
        })
    //统计=============end============//
    })
</script>
</body>
</html>
