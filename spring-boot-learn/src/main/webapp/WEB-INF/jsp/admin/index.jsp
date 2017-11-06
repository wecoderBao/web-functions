<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<%@include file="../common/head.jsp"%>
<meta charset="UTF-8">
<title>AdminLTE | Dashboard</title>
<meta
	content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
	name='viewport'>
<!-- bootstrap 3.0.2 -->
<link href="assets/css/bootstrap.min.css" rel="stylesheet"
	type="text/css" />
<!-- font Awesome -->
<link href="assets/css/font-awesome.min.css" rel="stylesheet"
	type="text/css" />
<!-- Ionicons -->
<link href="assets/css/ionicons.min.css" rel="stylesheet"
	type="text/css" />
<!-- Morris chart -->
<link href="assets/css/morris/morris.css" rel="stylesheet"
	type="text/css" />
<!-- jvectormap -->
<link href="assets/css/jvectormap/jquery-jvectormap-1.2.2.css"
	rel="stylesheet" type="text/css" />
<!-- fullCalendar -->
<link href="assets/css/fullcalendar/fullcalendar.css" rel="stylesheet"
	type="text/css" />
<!-- Daterange picker -->
<link href="assets/css/daterangepicker/daterangepicker-bs3.css"
	rel="stylesheet" type="text/css" />
<!-- bootstrap wysihtml5 - text editor -->
<link href="assets/css/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css"
	rel="stylesheet" type="text/css" />
<!-- Theme style -->
<link href="assets/css/AdminLTE.css" rel="stylesheet" type="text/css" />

<script type="text/javascript"
	src="assets/js/jquery/1.8.2/jquery-min-1.8.2.js"></script>
</head>
<body class="skin-blue">
	<!-- header logo: style can be found in header.less -->
	<header class="header">
		<%@include file="include/top.jsp"%>
	</header>
	<div class="wrapper row-offcanvas row-offcanvas-left">
		<!-- Left side column. contains the logo and sidebar -->
		<aside class="left-side sidebar-offcanvas">
			<%@include file="include/left.jsp"%>
		</aside>

		<!-- Right side column. Contains the navbar and content of the page -->
		<aside class="right-side">
			<!-- Content Header (Page header) -->
			<section class="content-header">
				<h1>
					Dashboard <small>Control panel</small>
				</h1>
				<ol class="breadcrumb">
					<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
					<li class="active">Dashboard</li>
				</ol>
			</section>

			<!-- Main content -->
			<section class="content">

				<!-- Small boxes (Stat box) -->
				<div class="row">
					<div class="col-lg-3 col-xs-6">
						<!-- small box -->
						<div class="small-box bg-aqua">
							<div class="inner">
								<h3>150</h3>
								<p>New Orders</p>
							</div>
							<div class="icon">
								<i class="ion ion-bag"></i>
							</div>
							<a href="#" class="small-box-footer"> More info <i
								class="fa fa-arrow-circle-right"></i>
							</a>
						</div>
					</div>
					<!-- ./col -->
					<div class="col-lg-3 col-xs-6">
						<!-- small box -->
						<div class="small-box bg-green">
							<div class="inner">
								<h3>
									53<sup style="font-size: 20px">%</sup>
								</h3>
								<p>Bounce Rate</p>
							</div>
							<div class="icon">
								<i class="ion ion-stats-bars"></i>
							</div>
							<a href="#" class="small-box-footer"> More info <i
								class="fa fa-arrow-circle-right"></i>
							</a>
						</div>
					</div>
					<!-- ./col -->
					<div class="col-lg-3 col-xs-6">
						<!-- small box -->
						<div class="small-box bg-yellow">
							<div class="inner">
								<h3>44</h3>
								<p>User Registrations</p>
							</div>
							<div class="icon">
								<i class="ion ion-person-add"></i>
							</div>
							<a href="#" class="small-box-footer"> More info <i
								class="fa fa-arrow-circle-right"></i>
							</a>
						</div>
					</div>
					<!-- ./col -->
					<div class="col-lg-3 col-xs-6">
						<!-- small box -->
						<div class="small-box bg-red">
							<div class="inner">
								<h3>65</h3>
								<p>Unique Visitors</p>
							</div>
							<div class="icon">
								<i class="ion ion-pie-graph"></i>
							</div>
							<a href="#" class="small-box-footer"> More info <i
								class="fa fa-arrow-circle-right"></i>
							</a>
						</div>
					</div>
					<!-- ./col -->
				</div>
				<!-- /.row -->

				<!-- top row -->
				<div class="row">
					<div class="col-xs-12 connectedSortable"></div>
					<!-- /.col -->
				</div>
				<!-- /.row -->

				<!-- Main row -->
				<div class="row">
					<!-- Left col -->
					<section class="col-lg-6 connectedSortable">
						<!-- Box (with bar chart) -->
						<div class="box box-danger" id="loading-example">
							<div class="box-header">
								<!-- tools box -->
								<div class="pull-right box-tools">
									<button class="btn btn-danger btn-sm refresh-btn"
										data-toggle="tooltip" title="Reload">
										<i class="fa fa-refresh"></i>
									</button>
									<button class="btn btn-danger btn-sm" data-widget='collapse'
										data-toggle="tooltip" title="Collapse">
										<i class="fa fa-minus"></i>
									</button>
									<button class="btn btn-danger btn-sm" data-widget='remove'
										data-toggle="tooltip" title="Remove">
										<i class="fa fa-times"></i>
									</button>
								</div>
								<!-- /. tools -->
								<i class="fa fa-cloud"></i>

								<h3 class="box-title">Server Load</h3>
							</div>
							<!-- /.box-header -->
							<div class="box-body no-padding">
								<div class="row">
									<div class="col-sm-7">
										<!-- bar chart -->
										<div class="chart" id="bar-chart" style="height: 250px;"></div>
									</div>
									<div class="col-sm-5">
										<div class="pad">
											<div class="clearfix">
												<span class="pull-left">Transfered</span> <small
													class="pull-right">10 GB</small>
											</div>
											<!-- Buttons -->
											<p>
												<button class="btn btn-default btn-sm">
													<i class="fa fa-cloud-download"></i> Generate PDF
												</button>
											</p>
										</div>
										<!-- /.pad -->
									</div>
									<!-- /.col -->
								</div>
								<!-- /.row - inside box -->
							</div>
							<!-- /.box-body -->
						</div>
						<!-- /.box -->

						<!-- Custom tabs (Charts with tabs)-->
						<div class="nav-tabs-custom">
							<!-- Tabs within a box -->
							<ul class="nav nav-tabs pull-right">
								<li class="active"><a href="#revenue-chart"
									data-toggle="tab">Area</a></li>
								<li><a href="#sales-chart" data-toggle="tab">Donut</a></li>
								<li class="pull-left header"><i class="fa fa-inbox"></i>
									Sales</li>
							</ul>
							<div class="tab-content no-padding">
								<!-- Morris chart - Sales -->
								<div class="chart tab-pane active" id="revenue-chart"
									style="position: relative; height: 300px;"></div>
								<div class="chart tab-pane" id="sales-chart"
									style="position: relative; height: 300px;"></div>
							</div>
						</div>
				
					</section>
					<!-- /.Left col -->
					<!-- right col (We are only adding the ID to make the widgets sortable)-->
					<section class="col-lg-6 connectedSortable">
						<!-- Map box -->
						<div class="box box-primary">
							<div class="box-header">
								<!-- tools box -->
								<div class="pull-right box-tools">
									<button class="btn btn-primary btn-sm daterange pull-right"
										data-toggle="tooltip" title="Date range">
										<i class="fa fa-calendar"></i>
									</button>
									<button class="btn btn-primary btn-sm pull-right"
										data-widget='collapse' data-toggle="tooltip" title="Collapse"
										style="margin-right: 5px;">
										<i class="fa fa-minus"></i>
									</button>
								</div>
								<!-- /. tools -->

								<i class="fa fa-map-marker"></i>
								<h3 class="box-title">Visitors</h3>
							</div>
							<div class="box-body no-padding">
								<div id="world-map" style="height: 300px;"></div>
								<div class="table-responsive">
									<!-- .table - Uses sparkline charts-->
									<table class="table table-striped">
										<tr>
											<td><a href="#">Australia</a></td>
											<td><div id="sparkline-6"></div></td>
											<td>1709</td>
											<td>947</td>
										</tr>
									</table>
									<!-- /.table -->
								</div>
							</div>
							<!-- /.box-body-->
							<div class="box-footer">
								<button class="btn btn-info">
									<i class="fa fa-download"></i> Generate PDF
								</button>
								<button class="btn btn-warning">
									<i class="fa fa-bug"></i> Report Bug
								</button>
							</div>
						</div>
						<!-- /.box -->

						
						</div>
						<!-- /.box -->

					</section>
					<!-- right col -->
				</div>
				<!-- /.row (main row) -->

			</section>
			<!-- /.content -->
		</aside>
		<!-- /.right-side -->
	</div>
	<!-- ./wrapper -->

	<!-- add new calendar event modal -->
	<!-- jQuery UI 1.10.3 -->
	<script src="assets/js/jquery-ui-1.10.3.min.js" type="text/javascript"></script>
	<!-- Bootstrap -->
	<script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
	<!-- jQuery Knob Chart -->
	<script src="assets/js/plugins/jqueryKnob/jquery.knob.js"
		type="text/javascript"></script>
	<!-- Bootstrap WYSIHTML5 -->
	<script
		src="assets/js/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"
		type="text/javascript"></script>
	<!-- iCheck -->
	<script src="assets/js/plugins/iCheck/icheck.min.js"
		type="text/javascript"></script>

	<!-- AdminLTE App -->
	<script src="assets/js/AdminLTE/app.js" type="text/javascript"></script>

	<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
</body>
</html>