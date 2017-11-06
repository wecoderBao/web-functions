<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%--
 Created by www.magicalcoder.com
 如果你改变了此类 read 请将此行删除
 799374340@qq.com
--%><!DOCTYPE html>
<html>
<head>
    <%@include file="../../common/head.jsp"%>
    <title>AdminLTE | Dashboard</title>
    <meta content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' name='viewport'>
    <%@include file="../include1/head.jsp"%>
</head>
<body class="skin-blue">
<header class="header">
    <%@include file="../include1/top.jsp"%>
</header>
<div class="wrapper row-offcanvas row-offcanvas-left">
    <aside class="left-side sidebar-offcanvas">
        <%@include file="../include1/left.jsp"%>
    </aside>
    <aside class="right-side">
        <section class="content-header">
            <h1>
                管理员表列表 
                <a class="btn btn-app" href="admin/admin_user/detail"><i class="fa fa-edit"></i>新增</a>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
                <li><a href="#">li</a></li>
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
                                                     <label for="idFirst">主键 (=)</label>
                                                     <input type="text" class="form-control"
                                                      value="${ idFirst }"
                                                                                                    id="idFirst" name="idFirst">
                                                 </div>
                                             </div>
                                             <div class="col-xs-2">
                                                 <div class="form-group">
                                                     <label for="userNameFirst">用户名 (like)</label>
                                                     <input type="text" class="form-control"
                                                      value="${ userNameFirst }"
                                                                                                    id="userNameFirst" name="userNameFirst">
                                                 </div>
                                             </div>
                                             <div class="col-xs-2">
                                                 <div class="form-group">
                                                     <label for="realNameFirst">真名 (like)</label>
                                                     <input type="text" class="form-control"
                                                      value="${ realNameFirst }"
                                                                                                    id="realNameFirst" name="realNameFirst">
                                                 </div>
                                             </div>
                                             <div class="col-xs-2">
                                                 <div class="form-group">
                                                     <label for="emailFirst">邮箱 (=)</label>
                                                     <input type="text" class="form-control"
                                                      value="${ emailFirst }"
                                                                                                    id="emailFirst" name="emailFirst">
                                                 </div>
                                             </div>
                                                 <div class="col-xs-2">
                                                 <div class="form-group">
                                                 <label for="createTimeFirst"> 创建时间 (>=)</label>
                                                 <input  type="text"
                                                  class="Wdate form-control" style="width: 170px;"
                                                  onfocus="WdatePicker({skin:'whyGreen',dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:'%y-%M-%d %H:%m:%s'})"
                                                      value="<c:out value='${ createTimeFirst }' escapeXml="false"/>"
                                                  id="createTimeFirst" name="createTimeFirst">
                                                 </div>
                                                 </div>
                                                 <div class="col-xs-2">
                                                 <div class="form-group">
                                                 <label for="createTimeSecond"> 创建时间 (<=)</label>
                                                 <input  type="text"
                                                  class="Wdate form-control" style="width: 170px;"
                                                  onfocus="WdatePicker({skin:'whyGreen',dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:'%y-%M-%d %H:%m:%s'})"
                                                  value="<c:out value='${ createTimeSecond }' escapeXml="false"/>"
                                                  id="createTimeSecond" name="createTimeSecond">
                                                 </div>
                                                 </div>
                                                 <div class="col-xs-2">
                                                 <div class="form-group">
                                                 <label for="updateTimeFirst"> 更新时间 (>=)</label>
                                                 <input  type="text"
                                                  class="Wdate form-control" style="width: 170px;"
                                                  onfocus="WdatePicker({skin:'whyGreen',dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:'%y-%M-%d %H:%m:%s'})"
                                                      value="<c:out value='${ updateTimeFirst }' escapeXml="false"/>"
                                                  id="updateTimeFirst" name="updateTimeFirst">
                                                 </div>
                                                 </div>
                                                 <div class="col-xs-2">
                                                 <div class="form-group">
                                                 <label for="updateTimeSecond"> 更新时间 (<=)</label>
                                                 <input  type="text"
                                                  class="Wdate form-control" style="width: 170px;"
                                                  onfocus="WdatePicker({skin:'whyGreen',dateFmt:'yyyy-MM-dd HH:mm:ss',maxDate:'%y-%M-%d %H:%m:%s'})"
                                                  value="<c:out value='${ updateTimeSecond }' escapeXml="false"/>"
                                                  id="updateTimeSecond" name="updateTimeSecond">
                                                 </div>
                                                 </div>
                                             <div class="col-xs-2">
                                                 <div class="form-group">
                                                 <label for="superAdminFirst">是否超级管理员</label>
                                                     <select class="form-control" id="superAdminFirst" name="superAdminFirst">
                                                                 <option value="">全部</option>
                                                                 <option value="0"
                                                                     <c:if test="${ superAdmin == 0 }">selected</c:if>
                                                                  >否
                                                                 </option>
                                                                 <option value="1"
                                                                     <c:if test="${ superAdmin == 1 }">selected</c:if>
                                                                  >是
                                                                 </option>
                                                     </select>
                                                 </div>
                                             </div>                                              <div class="col-xs-2">
                                                 <div class="form-group">
                                             <label for="roleIdFirst">角色</label>
                                            <input type="hidden" id="roleIdFirst"
                                                   name="roleIdFirst"
                                                   value="">
                                            <input type="text" class="form-control" id="roleIdFirstSearch"
                                                  name="roleIdFirstSearch"  placeholder="请输入关键词查询角色"
                                                         value="">
                                                 </div>
                                             </div>                                                <div class="col-xs-2">
                                                    <div class="form-group">
                                                        <label for="querySubmit">&nbsp;</label>
                                                        <button class="btn btn-primary form-control" id="querySubmit">查询</button>
                                                    </div>
                                                </div>

                                            <input type="hidden" id="pageCount" value="0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- /.box-header -->
                        <div class="box-body table-responsive" style="overflow: auto">
                            <div class="row">
                                <div class="form-horizontal" >
                                    <div class="col-sm-1">
                                        <input type="button" onclick="batchDeleteItem('admin_user')" value="删除选中项">
                                    </div>
                                </div>
                                <div class="form-horizontal" >
                                    <div class="col-sm-1">
                                        <input type="button" class="form-control" onclick="truncateTable('admin_user')" value="清空数据">
                                    </div>
                                </div>
                                <div class="form-horizontal" >
                                    <label class="col-sm-1 control-label">导出Json文件:</label>
                                    <div class="col-sm-1">
                                        <input type="text" class="form-control" size="2"  id="start" value="0">
                                    </div>
                                    <div class="col-sm-1">
                                        <input type="text"  class="form-control" size="2" id="limit" value="50">
                                    </div>
                                    <div class="col-sm-1">
                                        <input type="button" class="form-control" onclick="exportJsonFile()" value="开始导出">
                                    </div>
                                </div>
                                <div class="form-horizontal" >
                                    <label class="col-sm-1 control-label">导入Json文件:</label>
                                    <div class="col-sm-1">
                                        <input type="file" id="importJsonFile" class="form-control"
                                               name="myfiles" onchange="importJsonFile('admin/admin_user/import/json')"/>
                                    </div>
                                </div>
                            </div>
                            <table id="example2" class="table table-bordered table-hover dataTable">
                                <thead id="thead">
                                              <tr>
                                                  <th><input type="checkbox" id="checkAll"></th>
                                                  <th>序号</th>
                                                 <th  class="sorting" orderField="id">
                                                      主键
                                                  </th>
                                                 <th  class="sorting" orderField="user_name">
                                                      用户名
                                                  </th>
                                                 <th  class="sorting" orderField="real_name">
                                                      真名
                                                  </th>
                                                 <th  class="sorting" orderField="email">
                                                      邮箱
                                                  </th>
                                                 <th  class="sorting" orderField="update_time">
                                                      更新时间
                                                  </th>
                                                 <th  class="sorting" orderField="role_id">
                                                      角色
                                                  </th>
                                                 <th  class="sorting" orderField="super_admin">
                                                      是否超级管理员
                                                  </th>
                                                 <th  class="sorting" orderField="create_time">
                                                      创建时间
                                                  </th>
                                                  <th>操作</th>
                                              </tr>
                                </thead>
                                <tbody id="tbody"></tbody>
                                <tfoot></tfoot>
                            </table>
                            <div class="row">
                                <div class="col-xs-6">
                                    <div class="dataTables_info"></div>
                                </div>
                                <div class="col-xs-6">
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
        </section>
        <!-- /.content -->
    </aside>
    <!-- /.right-side -->
</div>
<!-- ./wrapper -->
<%@include file="../include1/tail.jsp"%>

<script type="text/javascript" src="assets/admin/js/ajaxfileupload.js"></script>
<script language="javascript" type="text/javascript"
        src="${CTX}assets/admin/js/My97DatePicker/WdatePicker.js"></script>
<script src="assets/admin/app/oldjs/list_page.js" type="text/javascript"></script>
<script src="assets/admin/app/adminuser/adminUserPaging.js" type="text/javascript"></script>
<script type="text/javascript" >
    $(function(){
        //base.js
            foreignSearch('role','roleIdFirst','','id');
    })
</script>
</body>
</html>
