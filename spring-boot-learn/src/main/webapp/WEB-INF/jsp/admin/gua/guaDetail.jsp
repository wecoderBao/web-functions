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
					gua详情 <small></small>
				</h1>
				<ol class="breadcrumb">
					<li><a href="admin/index"><i class="fa fa-dashboard"></i>
							主页</a></li>
					<li><a href="admin/prize/list">gua列表</a></li>
					<li class="active">gua详情</li>
				</ol>
			</section>
			<section class="content">
				<div class="row">
					<div class="col-md-12">
						<div class="box box-primary">
							<form class="form-horizontal" role="form" id="form"
								action="admin/prize/save" method="post">
								<div class="box-header">
									<h3 class="box-title">
										<c:choose>
											<c:when test="${gua.id==null}">新增</c:when>
											<c:otherwise>编辑</c:otherwise>
										</c:choose>
									</h3>
									<h3 class="box-title alert-danger">${exceptionMsg}</h3>
								</div>
								<input type="hidden" name="id" value="${gua.id}"> <input
									type="hidden" id="queryParamCacheKey" name="queryParamCacheKey"
									value="${queryParamCacheKey}">

								<div class="box-body">
									<div class="form-group ">
										<label class="col-sm-1 control-label"> gua代号 </label>
										<div class="col-sm-3 input-select">
											 <input
												type="text" class="form-control" name="code"
												placeholder="填写gua代号">
										</div>
										<label class="col-sm-2 control-label"> <c:if
												test="${ gua.code!=null}">
												<a target="_blank"
													onclick="openUrl(this,'admin/prize_root/detail_param?id=${gua.code}')">
													查看详情</a>
											</c:if> <span class="validateMsg"></span>
										</label>
									</div>
									<div class="form-group ">
										<label class="col-sm-1 control-label"> gua ci </label>
										<div class="col-sm-9">
											<input type="text" class="form-control " name="guaCi"
												title="gua ci" placeholder="请输入gua ci" required minLength="0"
												value="${gua.guaCi}">
										</div>
										<label class="col-sm-2 control-label"> <span
											class="validateMsg"></span>
										</label>
									</div>
									<div class="form-group ">
										<label class="col-sm-1 control-label"> gua name </label>
										<div class="col-sm-9">
											<input type="text" class="form-control " name="guaName"
												title="gua名称" placeholder="请输入gua名称" required
												minLength="0" value="${gua.guaName}">
										</div>
										<label class="col-sm-2 control-label"> <span
											class="validateMsg"></span>
										</label>
									</div>
									<div class="form-group ">
										<label class="col-sm-1 control-label"> gua模型 </label>
										<div class="col-sm-9">
											<input type="text" class="form-control " name="guaModel"
												title="gua模型"
												placeholder="请输入gua模型"
												required minLength="1" maxLength="20"
												value="${gua.guaModel}">
										</div>
										<label class="col-sm-2 control-label"> <span
											class="minLength">0</span><span class="maxLength">/20</span>
											<span class="validateMsg"></span>
										</label>
									</div>
									<div class="form-group ">
										<label class="col-sm-1 control-label"> guaci 描述 </label>
										<div class="col-sm-9">
											<input type="text" class="form-control " name="guaCiDesc"
												title="guaci描述"
												placeholder="请输入guaci描述"
												required minLength="1" maxLength="20"
												value="${gua.guaCiDesc}">
										</div>
										<label class="col-sm-2 control-label"> <span
											class="minLength">0</span><span class="maxLength">/20</span>
											<span class="validateMsg"></span>
										</label>
									</div>
									<div class="form-group ">
										<label class="col-sm-1 control-label"> guaci xiang </label>
										<div class="col-sm-9">
											<input type="text" class="form-control " name="guaCiXiang"
												title="guacixiang"
												placeholder="请输入guacixiang"
												required minLength="1" maxLength="200"
												value="${gua.guaCiXiang}">
										</div>
										<label class="col-sm-2 control-label"> <span
											class="minLength">0</span><span class="maxLength">/200</span>
											<span class="validateMsg"></span>
										</label>
									</div>
									<div class="form-group ">
										<label class="col-sm-1 control-label"> guacixiang 描述 </label>
										<div class="col-sm-9">
											<input type="text" class="form-control " name="guaCiXiangDesc"
												title="guacixiang描述"
												placeholder="请输入guacixiang描述"
												required minLength="1" maxLength="200"
												value="${gua.guaCiXiangDesc}">
										</div>
										<label class="col-sm-2 control-label"> <span
											class="minLength">0</span><span class="maxLength">/200</span>
											<span class="validateMsg"></span>
										</label>
									</div>	
								</div>
								<!-- /.box-body -->
								<div class="box-footer">
									<c:if
										test="${ 1==1}">
										<button type="button" onclick="submitForm('#form')"
											class="btn btn-primary">保存</button>
									</c:if>
									<button type="button"
										onclick="returnToListPage('prize','${queryParamCacheKey}','${gua.id}')"
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
