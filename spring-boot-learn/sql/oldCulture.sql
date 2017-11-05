create database oldCulture;

use oldCulture;
drop table if exists t_gua;
create table t_gua(
	id int(10) primary key auto_increment,
	code int(10) unique comment '�Դ���',
	gua_ci varchar(20) comment '�Դ�',
	gua_name varchar(20) comment '������',
	gua_model varchar(50) comment '�Դ�ԭ��',
	gua_ci_desc varchar(200) comment '�Դǰ׻�',
	gua_ci_xiang varchar(50) comment '�Դ���Ի',
	gua_ci_xiang_desc varchar(200) comment '�Դ���׻�'
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
drop table if exists t_yao;
create table t_yao(
	id int(10) primary key auto_increment,
	gua_code int(10) unique comment '������Եı�ʶ',
	yao_ci varchar(20) comment 'س��',
	yao_ci_name varchar(50) comment 'س��ԭ��',
	yao_ci_desc varchar(200) comment 'س�ǰ׻�',
	yao_ci_xiang varchar(50) comment 'س����',
	yao_ci_xiang_desc varchar(200) comment 'س����׻�'
)ENGINE=InnoDB DEFAULT CHARSET=utf8;