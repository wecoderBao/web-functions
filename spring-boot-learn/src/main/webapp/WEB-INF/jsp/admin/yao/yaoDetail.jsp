<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<html>
<head>
<%@include file="../../common/head.jsp"%>
<title>AdminLTE | Dashboard</title>
<meta
	content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
	name='viewport'>
<%@include file="../include2.0.8/head.jsp"%>
</head>
<body class="skin-blue">
	<header class="header">
		<%@include file="../include2.0.8/top.jsp"%>
	</header>
	<div class="wrapper row-offcanvas row-offcanvas-left">
		<aside class="left-side sidebar-offcanvas">
			<%@include file="../include/left.jsp"%>
		</aside>
		<aside class="right-side">
			<section class="content-header">
				<h1>
					yao详情 <small></small>
				</h1>
				<ol class="breadcrumb">
					<li><a href="index"><i class="fa fa-dashboard"></i> 主页</a></li>
					<li><a href="guaList">yao列表</a></li>
					<li class="active">yao详情</li>
				</ol>
			</section>
			<section class="content">
				<div class="row">
					<div class="col-md-12">
						<div class="box box-primary">
							<form class="form-horizontal" role="form" id="form"
								action="yaoSave" method="post">
								<div class="box-header">
									<h3 class="box-title">
										<c:choose>
											<c:when test="${gua.id==null}">新增</c:when>
											<c:otherwise>编辑</c:otherwise>
										</c:choose>
									</h3>
									<h3 class="box-title alert-danger">${exceptionMsg}</h3>
								</div>
								<input type="hidden" name="guaCode" value="${guaCode}">
								<input type="hidden" id="queryParamCacheKey"
									name="queryParamCacheKey" value="${queryParamCacheKey}">

								<div class="box-body">
									<div class="form-group ">
										<label class="col-sm-1 control-label"> gua代号 </label>
										<div class="col-sm-3 input-select">
											<input type="text" class="form-control" name="default"
												disabled="disabled" value="${guaCode }" />
										</div>

									</div>
									<div class="form-group ">
										<label class="col-sm-1 control-label"> yaoci </label>
										<div class="col-sm-3 input-select">
											<input type="text" class="form-control" name="yaoCi"
												placeholder="填写yaoci" value="${yao.yaoCi }" />
										</div>

									</div>
									<div class="form-group ">
										<label class="col-sm-1 control-label"> yaoci名字 </label>
										<div class="col-sm-9">
											<input type="text" class="form-control " name="yaoCiName"
												title="yaoci名字" placeholder="请输入yaoci名字" required
												minLength="0" value="${yao.yaoCiName}">
										</div>
										<label class="col-sm-2 control-label"> <span
											class="validateMsg"></span>
										</label>
									</div>
									<div class="form-group ">
										<label class="col-sm-1 control-label"> yaoci描述 </label>
										<div class="col-sm-9">
											<input type="text" class="form-control " name="yaoCiDesc"
												title="yaoci描述" placeholder="请输入yaoci描述" required
												minLength="0" value="${yao.yaoCiDesc}">
										</div>
										<label class="col-sm-2 control-label"> <span
											class="validateMsg"></span>
										</label>
									</div>
									<div class="form-group ">
										<label class="col-sm-1 control-label"> yaoci xiang </label>
										<div class="col-sm-9">
											<textarea style="height:200px;"" class="form-control " name="yaoCiXiang"
												title="yaoCiXiang" placeholder="请输入yaoci xiang" >${yao.yaoCiXiang}</textarea>
										</div>										
									</div>
									<div class="form-group ">
										<label class="col-sm-1 control-label"> yaoci xiang 描述
										</label>
										<div class="col-sm-9">
											<input type="text" class="form-control "
												name="yaoCiXiangDesc" title="yaoci xiang描述"
												placeholder="请输入yaoci xiang描述" required minLength="1"
											 value="${yao.yaoCiXiangDesc}">
										</div>
										
									</div>
								</div>
								<!-- /.box-body -->
								<div class="box-footer">
									<c:if test="${ 1==1}">
										<button type="button" onclick="submitForm('#form')"
											class="btn btn-primary">保存</button>
									</c:if>
									<button type="button"
										onclick="returnToListPage('${guaCode}')"
										class="btn btn-primary">返回</button>

								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</aside>
	</div>
	<%@include file="../include2.0.8/tail.jsp"%>

	<script type="text/javascript">
	function returnToListPage(guaCode) {
	    window.location.href = "yaoList"+"?guaCode="+guaCode;
	}
		$(function() {
			//base.js
			validateForm("#form")
			inputSelectSetValue();
			$("section").find(".input-select").each(function(index, item) {
				registerInputSelect($(item));
			})
		})
	</script>
</body>
</html>
