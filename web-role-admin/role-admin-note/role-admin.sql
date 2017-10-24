---------角色管理功能说明----------------
----1.角色表
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `role_name` varchar(20) DEFAULT '' COMMENT '角色名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DYNAMIC COMMENT='角色';

-----2.权限表
DROP TABLE IF EXISTS `priority`;
CREATE TABLE `priority` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `priority_name` varchar(20) DEFAULT '' COMMENT '权限名',
  `can_insert` char(1) DEFAULT '0' COMMENT '新增',
  `can_delete` char(1) DEFAULT '0' COMMENT '删除',
  `can_update` char(1) DEFAULT '0' COMMENT '编辑',
  `can_query` char(1) DEFAULT '0' COMMENT '查询',
  `can_truncate` char(1) DEFAULT '0' COMMENT '清空',
  `can_export` char(1) DEFAULT '0' COMMENT '导出',
  `can_import` char(1) DEFAULT '0' COMMENT '导入',
  `can_statistics` char(1) DEFAULT '0' COMMENT '统计',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='权限';

----------3.模块分类表
DROP TABLE IF EXISTS `module_category`;
CREATE TABLE `module_category` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `module_category_name` varchar(20) DEFAULT '' COMMENT '模块名称',
  `sort_num` int(2) DEFAULT '0' COMMENT '排序',
  `domain` varchar(100) DEFAULT '' COMMENT '域名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='模块分类';

-------4.模块详情表
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

--------5.角色-模块-权限表
DROP TABLE IF EXISTS `role_module_priority`;
CREATE TABLE `role_module_priority` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `role_id` bigint(20) DEFAULT '0' COMMENT '角色',
  `module_id` bigint(20) DEFAULT '0' COMMENT '模块',
  `priority_id` bigint(20) DEFAULT '0' COMMENT '权限',
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_module` (`role_id`,`module_id`),
  KEY `FK_role_module_priority_m` (`module_id`),
  KEY `FK_role_module_priority_p` (`priority_id`),
  KEY `FK_role` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8 COMMENT='角色模块权限';

-------6.管理员表
DROP TABLE IF EXISTS `a_admin_user`;
CREATE TABLE `a_admin_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) DEFAULT '' COMMENT '用户名',
  `password` varchar(50) DEFAULT '',
  `real_name` varchar(25) DEFAULT '' COMMENT '真名',
  `email` varchar(30) DEFAULT '' COMMENT '邮箱',
  `telephone` varchar(20) DEFAULT '' COMMENT '座机号',
  `mobile_phone` varchar(20) DEFAULT '' COMMENT '手机号',
  `address` varchar(100) DEFAULT '' COMMENT '手机号',
  `create_time_ymd` int(4) DEFAULT '0',
  `create_time_hms` int(4) DEFAULT '0',
  `modified_time_ymd` int(4) DEFAULT '0',
  `modified_time_hms` int(4) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `idx_user_name` (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
