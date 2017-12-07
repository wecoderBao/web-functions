create database oldCulture;

use oldCulture;
drop table if exists t_gua;
create table t_gua(
	id int(10) primary key auto_increment,
	code int(10) comment '卦代码',
	gua_ci varchar(200) comment '卦辞',
	gua_name varchar(200) comment '卦名称',
	gua_model varchar(200) comment '卦辞原文',
	gua_ci_desc varchar(200) comment '卦辞白话',
	gua_ci_xiang varchar(200) comment '卦辞象曰',
	gua_ci_xiang_desc varchar(20000 ) comment '卦辞象白话'
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
drop table if exists t_yao;
create table t_yao(
	id int(10) primary key auto_increment,
	gua_code int(10) comment '外键，卦的标识',
	yao_ci varchar(200) comment '爻辞',
	yao_ci_name varchar(200) comment '爻辞原文',
	yao_ci_desc varchar(200) comment '爻辞白话',
	yao_ci_xiang varchar(200) comment '爻辞象',
	yao_ci_xiang_desc varchar(20000) comment '爻辞象白话'
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `module` */

DROP TABLE IF EXISTS `module`;

CREATE TABLE `module` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `module_name` varchar(200) DEFAULT '' COMMENT '模块唯一键',
  `module_url` varchar(200) DEFAULT '' COMMENT '模块URL',
  `module_category_id` bigint(20) DEFAULT '0' COMMENT '模块分类',
  `sort_num` int(2) DEFAULT '0' COMMENT '排序',
  `module_title` varchar(100) DEFAULT '' COMMENT '模块标题',
  `target` varchar(20) DEFAULT '' COMMENT 'target',
  `if_show` char(1) DEFAULT '0' COMMENT '是否显示',
  PRIMARY KEY (`id`),
  KEY `FK_module` (`module_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8 COMMENT='模块';

/*Table structure for table `module_category` */

DROP TABLE IF EXISTS `module_category`;

CREATE TABLE `module_category` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `module_category_name` varchar(20) DEFAULT '' COMMENT '模块名称',
  `sort_num` int(2) DEFAULT '0' COMMENT '排序',
  `domain` varchar(100) DEFAULT '' COMMENT '域名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='模块分类';
