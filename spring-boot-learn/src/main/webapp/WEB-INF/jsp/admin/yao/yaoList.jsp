<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
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
		<%@include file="../include/top.jsp"%>
	</header>
	<div class="wrapper row-offcanvas row-offcanvas-left">
		<aside class="left-side sidebar-offcanvas">
			<%@include file="../include/left.jsp"%>
		</aside>
		<aside class="right-side">
			<section class="content-header">
				<h1>
					yao列表
					<c:if test="${ 1==1}">
						<a class="btn btn-app" href="/yaoDetail?guaCode=${guaCode }"><i
							class="fa fa-edit"></i>新增</a>
					</c:if>
				</h1>
				<ol class="breadcrumb">
					<li><a href="index"><i class="fa fa-dashboard"></i> 主页</a></li>
					<li class="active">yao列表</li>
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
														<label for="identifierFirst">yaoci (=)</label> <input
															type="text" class="form-control" value="${ yaoCi }"
															required minLength="0" id="identifierFirst"
															name="identifierFirst">
													</div>
												</div>
												<div class="col-xs-2">
													<div class="form-group">
														<label for="nameFirst">yaoci名称 (like)</label> <input
															type="text" class="form-control" value="${ yaoCiName }"
															required minLength="0" id="nameFirst" name="nameFirst">
													</div>
												</div>

												<div class="col-xs-2">
													<div class="form-group">
														<label for="querySubmit">&nbsp;</label>
														<button class="btn btn-primary form-control"
															id="querySubmit">查询</button>
													</div>
												</div>

												<input type="hidden" id="pageIndex" name="pageIndex"
													value="1"> <input type="hidden" id="pageCount"
													name="pageCount" value="0"> <input type="hidden"
													id="orderBySqlField" name="orderBySqlField" value="">
												<input type="hidden" id="descAsc" name="descAsc" value="">
												<input type="hidden" id="queryParamCacheKey"
													name="queryParamCacheKey" value="${queryParamCacheKey}">
												<input type="hidden" id="focusTrId" name="focusTrId"
													value="${focusTrId}"> <input type="hidden"
													id="canDelete" value="1"> <input type="hidden"
													id="canUpdate" value="1">
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- /.box-header -->
							<div class="box-body table-responsive" style="overflow: auto">
								<table id="example2"
									class="table table-bordered table-hover dataTable">
									<thead id="thead">
										<tr>
											<th><input type="checkbox" id="checkAll"></th>
											<th>序号</th>
											<th class="sorting" orderField="identifier">gua代号</th>
											<th class="sorting" orderField="huo_dong_id">yaoci</th>
											<th class="sorting" orderField="prize_root_id">yaoci名字</th>
											<th class="sorting" orderField="name">yaoci描述</th>
											<th class="sorting" orderField="end_time">yaocixiang</th>
											<th class="sorting" orderField="begin_time">yaocixiang描述</th>
											<th>操作</th>
										</tr>
									</thead>
									<tbody id="tbody">
										<c:forEach items="${yaoList}" var="yao" varStatus="status">
											<tr>
												<td></td>
												<td align="center">${status.index+1}</td>
												<td align="center">${yao.guaCode}</td>
												<td align="center">${yao.yaoCi}</td>
												<td align="center">${yao.yaoCiName}</td>
												<td align="center">${yao.yaoCiDesc}</td>
												<td align="center">${yao.yaoCiXiang}</td>
												<td align="center">${yao.yaoCiXiangDesc}</td>											
												<td><a class="btn btn-sm btn-info"
													href="/yaoDetail?id=${yao.id}&guaCode=${yao.guaCode}">编辑</a> <a
													class="btn btn-sm btn-danger" href="javascript:{}"
													onclick="deleteYao(${yao.id},${yao.guaCode} )">删除</a>
												</td>
											</tr>
										</c:forEach>

									</tbody>
									<tfoot></tfoot>
								</table>
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
	<%@include file="../include2.0.8/tail.jsp"%>
	<script src="assets/admin/app/prize/prizePaging.js"
		type="text/javascript"></script>
	<script type="text/javascript">
		function deleteYao(id,guaCode){
			if(!confirm("确定要删除？")){
		        return
		    }
			var url = "/yaoDelete?id="+id+"&guaCode="+guaCode;
			$.get(url,function(data){
				window.location.href="/yaoList?guaCode="+guaCode;
			});
		}
		function resetDefaultValue() {
			getItemPage()
			initOrderBy()
			bindOrderByEvent()
			//外键下拉==========begin=========//
			inputSelectSetValue();
			$("section").find(".input-select").each(function(index, item) {
				registerInputSelect($(item));
			})
			//外键下拉==========end========//
		}
		$(function() {
			//分页相关==========begin==========//
			restoreBuildQueryParam($("#queryParamCacheKey").val(),
					resetDefaultValue)
			//查询
			$("#querySubmit").click(
					function() {
						$("#pageIndex").val("1")
						$("#pageCount").val("0")
						buildQueryParamCacheKeyAndSetCache(buildReqParam(),
								"queryParamCacheKey", getItemPage)
					})
			//批量删除
			bindCheckAllEvent();
			//分页相关==========end==========//
		})
	</script>
</body>
</html>
