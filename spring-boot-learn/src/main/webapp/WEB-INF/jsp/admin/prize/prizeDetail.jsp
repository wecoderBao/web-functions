<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%--
代码为自动生成 Created by www.magicalcoder.com
 如果你改变了此类 read 请将此行删除
 欢迎加入官方QQ群:323237052
--%>
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
                    抽奖活动详情
                    <small></small>
                </h1>
                <ol class="breadcrumb">
                    <li><a href="admin/index"><i class="fa fa-dashboard"></i> 主页</a></li>
                    <li><a href="admin/prize/list">抽奖活动列表</a></li>
                    <li class="active">抽奖活动详情</li>
                </ol>
            </section>
            <section class="content">
                <div class="row">
                    <div class="col-md-12">
                        <div class="box box-primary">
                            <form class="form-horizontal" role="form" id="form" action="admin/prize/save" method="post">
                                <div class="box-header">
                                    <h3 class="box-title">
                                        <c:choose><c:when test="${prize.id==null}">新增</c:when><c:otherwise>编辑</c:otherwise></c:choose>
                                    </h3>
                                    <h3 class="box-title alert-danger">${exceptionMsg}</h3>
                                </div>
                                    <input type="hidden" name="id" value="${prize.id}">
                                <input type="hidden" id="queryParamCacheKey" name="queryParamCacheKey" value="${queryParamCacheKey}">

                                <div class="box-body">
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            抽奖大类
                                        </label>
                                         <div class="col-sm-3 input-select">
                                            <input type="hidden" name="prizeRootId" value="${prize.prizeRootId}" foreignTableName="prize_root" foreignJavaField="id" selectValue="">
                                            <input type="text" class="form-control" name="prizeRootIdSearch"
            placeholder="搜索一下">
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                                <c:if test="${ prize.prizeRootId!=null}">
                                                    <a target="_blank" onclick="openUrl(this,'admin/prize_root/detail_param?id=${prize.prizeRootId}')"> 查看详情</a>
                                                </c:if>
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            抽奖活动主键
                                        </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control " 
                                                   name="identifier" title="抽奖活动主键"  placeholder="请输入主键"
                                                   required  minLength="0"            value="${prize.identifier}">
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            抽奖活动名称
                                        </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control " 
                                                   name="name" title="抽奖活动名称"  placeholder="请输入抽奖活动名称"
                                                   required  minLength="0"            value="${prize.name}">
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            抽奖活动描述
                                        </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control " 
                                                   name="prizeDesc" title="抽奖活动描述"  placeholder="请输入抽奖活动描述,如果为空则无法发送积分，无法发送积分，无法发送积分........"
                                                   required  minLength="1"  maxLength="20"            value="${prize.prizeDesc}">
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                                <span class="minLength">0</span><span class="maxLength">/20</span>
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            开始时间
                                        </label>
                                        <div class="col-sm-9">
                                            <input  type="text" name="beginTime" class="Wdate form-control"                            onfocus="WdatePicker({skin:'whyGreen',dateFmt:'yyyy-MM-dd HH:mm:ss'})"
                                               value="<fmt:formatDate value="${ prize.beginTime }"
                                               pattern="yyyy-MM-dd HH:mm:ss"/>" style="width: 170px;">
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            结束时间
                                        </label>
                                        <div class="col-sm-9">
                                            <input  type="text" name="endTime" class="Wdate form-control"                            onfocus="WdatePicker({skin:'whyGreen',dateFmt:'yyyy-MM-dd HH:mm:ss'})"
                                               value="<fmt:formatDate value="${ prize.endTime }"
                                               pattern="yyyy-MM-dd HH:mm:ss"/>" style="width: 170px;">
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            创建时间
                                        </label>
                                        <div class="col-sm-9">
                                            <input  type="text" name="createTime" class="Wdate form-control"                            onfocus="WdatePicker({skin:'whyGreen',dateFmt:'yyyy-MM-dd HH:mm:ss'})"
                                               value="<fmt:formatDate value="${ prize.createTime }"
                                               pattern="yyyy-MM-dd HH:mm:ss"/>" style="width: 170px;">
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            状态
                                        </label>
                                         <div class="col-sm-9" style="min-width:120px">
                                             <select class="form-control"  name="status" title="状态"  >
                                                         <option
                                                 <c:if test="${ prize.status == 0 }">selected</c:if>
                                                 value="0" >关闭</option>
                                                         <option
                                                 <c:if test="${ prize.status == 1 }">selected</c:if>
                                                 value="1" >开启</option>
                                             </select>
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            是否需要登录
                                        </label>
                                         <div class="col-sm-9" style="min-width:120px">
                                             <select class="form-control"  name="needLogin" title="是否需要登录"  >
                                                         <option
                                                 <c:if test="${ prize.needLogin == 0 }">selected</c:if>
                                                 value="0" >否</option>
                                                         <option
                                                 <c:if test="${ prize.needLogin == 1 }">selected</c:if>
                                                 value="1" >是</option>
                                             </select>
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            登陆后限制类型
                                        </label>
                                         <div class="col-sm-9" style="min-width:120px">
                                             <select class="form-control"  name="loginRestrictType" title="登陆后限制类型"  >
                                                         <option
                                                 <c:if test="${ prize.loginRestrictType == 0 }">selected</c:if>
                                                 value="0" >每天</option>
                                                         <option
                                                 <c:if test="${ prize.loginRestrictType == 1 }">selected</c:if>
                                                 value="1" >整个周期</option>
                                             </select>
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            登陆后限制抽奖次数
                                        </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control " 
                                                   name="loginRestrictCount" title="登陆后限制抽奖次数"  placeholder="请输入登陆后限制抽奖次数"
                                                   mathNumber  digits  minLength="0"            value="${prize.loginRestrictCount}">
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            是否限制ip
                                        </label>
                                         <div class="col-sm-9" style="min-width:120px">
                                             <select class="form-control"  name="ipRestrict" title="是否限制ip"  >
                                                         <option
                                                 <c:if test="${ prize.ipRestrict == 0 }">selected</c:if>
                                                 value="0" >不限制</option>
                                                         <option
                                                 <c:if test="${ prize.ipRestrict == 1 }">selected</c:if>
                                                 value="1" >限制</option>
                                             </select>
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            ip限制类型
                                        </label>
                                         <div class="col-sm-9" style="min-width:120px">
                                             <select class="form-control"  name="ipRestrictType" title="ip限制类型"  >
                                                         <option
                                                 <c:if test="${ prize.ipRestrictType == 0 }">selected</c:if>
                                                 value="0" >每天</option>
                                                         <option
                                                 <c:if test="${ prize.ipRestrictType == 1 }">selected</c:if>
                                                 value="1" >整个周期</option>
                                             </select>
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            ip抽奖限制次数(-1不限制)
                                        </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control " 
                                                   name="ipRestrictCount" title="ip抽奖限制次数(-1不限制)"  placeholder="请输入ip抽奖限制次数(-1不限制)"
                                                   mathNumber  digits  minLength="0"            value="${prize.ipRestrictCount}">
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            是否支持http抽奖
                                        </label>
                                        <div class="col-sm-9">
                                            <input type="radio" class="form-control " name="supportHttpInvoke" title="是否支持http抽奖"  
                                                <c:if test="${prize.supportHttpInvoke!=null and !prize.supportHttpInvoke }">checked</c:if>
                                               value="false" >否
                                            <input type="radio" class="form-control " name="supportHttpInvoke" title="是否支持http抽奖"  
                                                <c:if test="${ prize.supportHttpInvoke==null or prize.supportHttpInvoke }">checked</c:if>
                                               value="true" >是
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            当天用户最大能获取的奖品数
                                        </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control " 
                                                   name="todayMaxWinCount" title="当天用户最大能获取的奖品数"  placeholder="请输入当天用户最大能获取的奖品数"
                                                             value="${prize.todayMaxWinCount}">
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            是否支持http赠送抽奖次数
                                        </label>
                                        <div class="col-sm-9">
                                            <input type="radio" class="form-control " name="supportHttpGiveChance" title="是否支持http赠送抽奖次数"  
                                                <c:if test="${prize.supportHttpGiveChance!=null and !prize.supportHttpGiveChance }">checked</c:if>
                                               value="false" >否
                                            <input type="radio" class="form-control " name="supportHttpGiveChance" title="是否支持http赠送抽奖次数"  
                                                <c:if test="${ prize.supportHttpGiveChance==null or prize.supportHttpGiveChance }">checked</c:if>
                                               value="true" >是
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            赠送抽奖机会类型
                                        </label>
                                         <div class="col-sm-9" style="min-width:120px">
                                             <select class="form-control"  name="giveChanceType" title="赠送抽奖机会类型"  >
                                                         <option
                                                 <c:if test="${ prize.giveChanceType == 0 }">selected</c:if>
                                                 value="0" >每天</option>
                                                         <option
                                                 <c:if test="${ prize.giveChanceType == 1 }">selected</c:if>
                                                 value="1" >整个周期</option>
                                             </select>
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            赠送抽奖机会最大次数
                                        </label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control " 
                                                   name="giveChanceMaxCount" title="赠送抽奖机会最大次数"  placeholder="请输入赠送抽奖机会最大次数"
                                                   minLength="0"            value="${prize.giveChanceMaxCount}">
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>
                                    <div class="form-group ">
                                        <label class="col-sm-1 control-label">
                                            运营活动
                                        </label>
                                         <div class="col-sm-3 input-select">
                                            <input type="hidden" name="huoDongId" value="${prize.huoDongId}" foreignTableName="huodong" foreignJavaField="id" selectValue="">
                                            <input type="text" class="form-control" name="huoDongIdSearch"
            placeholder="搜索一下">
                                        </div>
                                        <label class="col-sm-2 control-label" >
                                                <c:if test="${ prize.huoDongId!=null}">
                                                    <a target="_blank" onclick="openUrl(this,'admin/huodong/detail_param?id=${prize.huoDongId}')"> 查看详情</a>
                                                </c:if>
                                            <span class="validateMsg"></span>
                                        </label>
                                    </div>

                                    <div class="form-group <c:if test="${ logAdminOperateId==null }">hidden</c:if> " id="historyOperateRecords">
                                        <label class="col-sm-1 control-label">
                                            历史记录
                                        </label>
                                        <div class="col-sm-9" style="min-width:120px">
                                            <select class="form-control" onchange="historySelectChange(this)">
                                                <option value="">请选择</option>
                                                <c:forEach var="log" items="${logAdminOperateList}">
                                                    <option <c:if test="${ log.id==logAdminOperateId }">selected</c:if> value="${log.id}"><fmt:formatDate value="${ log.createTime }" pattern="yyyy-MM-dd HH:mm:ss" />-${ log.userName }</option>
                                                </c:forEach>
                                            </select>
                                        </div>
                                    </div>
                                </div><!-- /.box-body -->
                                <div class="box-footer">
                                    <c:if test="${ adminPriority!=null and ((adminPriority.canInsert and prize.id==null) or (adminPriority.canUpdate and prize.id!=null))}">
                                        <button type="button" onclick="submitForm('#form')" class="btn btn-primary">保存</button>
                                    </c:if>
                                        <button type="button" onclick="returnToListPage('prize','${queryParamCacheKey}','${prize.id}')"  class="btn btn-primary">返回</button>
                                    <button type="button" onclick="historySelectShow()"  class="btn btn-primary">显示历史记录</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </aside>
    </div>
    <%@include file="../include2.0.8/tail.jsp"%>

    <script type="text/javascript" >
        $(function(){
            //base.js
            validateForm("#form")
            inputSelectSetValue();
            $("section").find(".input-select").each(function(index,item){
                registerInputSelect($(item));
            })
        })
    </script>
</body>
</html>
