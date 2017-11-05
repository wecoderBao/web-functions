create database oldCulture;

use oldCulture;
drop table if exists t_gua;
create table t_gua(
	id int(10) primary key auto_increment,
	code int(10) unique comment '卦代码',
	gua_ci varchar(20) comment '卦辞',
	gua_name varchar(20) comment '卦名称',
	gua_model varchar(50) comment '卦辞原文',
	gua_ci_desc varchar(200) comment '卦辞白话',
	gua_ci_xiang varchar(50) comment '卦辞象曰',
	gua_ci_xiang_desc varchar(200) comment '卦辞象白话'
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
drop table if exists t_yao;
create table t_yao(
	id int(10) primary key auto_increment,
	gua_code int(10) unique comment '外键，卦的标识',
	yao_ci varchar(20) comment '爻辞',
	yao_ci_name varchar(50) comment '爻辞原文',
	yao_ci_desc varchar(200) comment '爻辞白话',
	yao_ci_xiang varchar(50) comment '爻辞象',
	yao_ci_xiang_desc varchar(200) comment '爻辞象白话'
)ENGINE=InnoDB DEFAULT CHARSET=utf8;