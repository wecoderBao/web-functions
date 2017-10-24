---------��ɫ������˵��----------------
----1.��ɫ��
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '����',
  `role_name` varchar(20) DEFAULT '' COMMENT '��ɫ��',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 CHECKSUM=1 DELAY_KEY_WRITE=1 ROW_FORMAT=DYNAMIC COMMENT='��ɫ';

-----2.Ȩ�ޱ�
DROP TABLE IF EXISTS `priority`;
CREATE TABLE `priority` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '����',
  `priority_name` varchar(20) DEFAULT '' COMMENT 'Ȩ����',
  `can_insert` char(1) DEFAULT '0' COMMENT '����',
  `can_delete` char(1) DEFAULT '0' COMMENT 'ɾ��',
  `can_update` char(1) DEFAULT '0' COMMENT '�༭',
  `can_query` char(1) DEFAULT '0' COMMENT '��ѯ',
  `can_truncate` char(1) DEFAULT '0' COMMENT '���',
  `can_export` char(1) DEFAULT '0' COMMENT '����',
  `can_import` char(1) DEFAULT '0' COMMENT '����',
  `can_statistics` char(1) DEFAULT '0' COMMENT 'ͳ��',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='Ȩ��';

----------3.ģ������
DROP TABLE IF EXISTS `module_category`;
CREATE TABLE `module_category` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '����',
  `module_category_name` varchar(20) DEFAULT '' COMMENT 'ģ������',
  `sort_num` int(2) DEFAULT '0' COMMENT '����',
  `domain` varchar(100) DEFAULT '' COMMENT '����',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='ģ�����';

-------4.ģ�������
DROP TABLE IF EXISTS `module`;
CREATE TABLE `module` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '����',
  `module_name` varchar(200) DEFAULT '' COMMENT 'ģ��Ψһ��',
  `module_url` varchar(200) DEFAULT '' COMMENT 'ģ��URL',
  `module_category_id` bigint(20) DEFAULT '0' COMMENT 'ģ�����',
  `sort_num` int(2) DEFAULT '0' COMMENT '����',
  `module_title` varchar(100) DEFAULT '' COMMENT 'ģ�����',
  `target` varchar(20) DEFAULT '' COMMENT 'target',
  `if_show` char(1) DEFAULT '0' COMMENT '�Ƿ���ʾ',
  PRIMARY KEY (`id`),
  KEY `FK_module` (`module_category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8 COMMENT='ģ��';

--------5.��ɫ-ģ��-Ȩ�ޱ�
DROP TABLE IF EXISTS `role_module_priority`;
CREATE TABLE `role_module_priority` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '����',
  `role_id` bigint(20) DEFAULT '0' COMMENT '��ɫ',
  `module_id` bigint(20) DEFAULT '0' COMMENT 'ģ��',
  `priority_id` bigint(20) DEFAULT '0' COMMENT 'Ȩ��',
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_module` (`role_id`,`module_id`),
  KEY `FK_role_module_priority_m` (`module_id`),
  KEY `FK_role_module_priority_p` (`priority_id`),
  KEY `FK_role` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8 COMMENT='��ɫģ��Ȩ��';

-------6.����Ա��
DROP TABLE IF EXISTS `a_admin_user`;
CREATE TABLE `a_admin_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) DEFAULT '' COMMENT '�û���',
  `password` varchar(50) DEFAULT '',
  `real_name` varchar(25) DEFAULT '' COMMENT '����',
  `email` varchar(30) DEFAULT '' COMMENT '����',
  `telephone` varchar(20) DEFAULT '' COMMENT '������',
  `mobile_phone` varchar(20) DEFAULT '' COMMENT '�ֻ���',
  `address` varchar(100) DEFAULT '' COMMENT '�ֻ���',
  `create_time_ymd` int(4) DEFAULT '0',
  `create_time_hms` int(4) DEFAULT '0',
  `modified_time_ymd` int(4) DEFAULT '0',
  `modified_time_hms` int(4) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `idx_user_name` (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
