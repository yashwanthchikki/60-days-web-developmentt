create database recipe;
use recipe;
create table food(
foodid int  auto_increment primary key,
title text,
fooddisc varchar(100),
ingri varchar(100),
inst varchar(100));