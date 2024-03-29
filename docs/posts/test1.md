---
layout: Post
title: test集
subtitle: 测试集
author: a xi
date: 2023-02-09
useHeaderImage: true
headerImage: /images/home-bg/home-bg-2.jpg
headerMask: rgb(14, 21, 5, .2)
permalinkPattern: /post/:year/:month/:day/:slug/
tags:
  - test
---



### **软件测试流程**

1. 获取测试要求
2. 测试分析与评审
3. 编写测试计划
4. 制定测试方案
5. 设计与开发测试用例
6. 执行测试
7. 提交缺陷报告  
8. 提交测试总结
9. 准备下一版本测试 

### 测试用例

1. 标识符（用例编号）：TextCase**_**项目名称**_**模块名称**_**功能名称_0001
2. 测试项：一句话表明测试目的
3. 依赖用例：例如 增加了一个数据的测试用例，将会被删除该数据的测试用例依赖，删除依赖增加。
4. 测试步骤：操作步骤，尽量详细，数据。
5. 测试数据：单独整合测试数据，和测试步骤中的数据保持一致
6. 预期结果：准备，原则上每一个操作，都要有一个结果。在重要的步骤之后，设定预期结果。 一般和测试目的密切相关。测试目的决定了测试步骤和预期结果
7. 测试结果：要求在测试执行完成后添加，没有执行保持为空；**通过 / 失败**， **Pass / Failed**。
8. 测试人：可以和设计者一致。
9. 备注：为了测试用例正常执行而做的特殊准备。例如：专门用于网络不畅情况下，软件错误提示。

### **7**个用例设计方法

- 等价类划分法
- 边界值分析法
- 因果图法
- 判定表法
- 场景法
- 正交实验法
- 状态迁徙图法（功能图法）

### 缺陷概述

缺陷类型：功能、用户界面、文档、软件包、性能、接口。<br>
缺陷严重程度：致命、严重、一般、较小。<br>
缺陷修复优先级：立即解决**P1**级、高优先级**P2**级、正常排队**P3**级、低优先级**P4**级。<br>
缺陷的状态：表示缺陷的处理进度<br>
**①**：激活/打开(新建)：由测试人员标注<br>
**②**：确认：确认新提交的是一个真实有效的缺陷，一般由测试主管或者质量保证(QA)、由产品经理进行确认；经确认后，有效的缺陷会指派给相关人员进行处理。<br>
**③**：已修正/修复：在缺陷被修复后，一般由开发人员进行。<br>
**④**：关闭/非激活：缺陷被修复完成后，经过测试人员验证后，没有问题。<br>
**⑤**：重新打开：经过测试人员验证后，缺陷没有修复成功，需要重新打开进行再次处理和修复。<br>
**⑥**：推迟：缺陷现在不修复，推迟到下一个版本或阶段，测试要跟开发或者其他相关管理人员进行确认。<br>
**⑦**：保留：缺陷暂时修复不了。一般也是有开发人员去设定，也需要测试人员进行确认。<br>
**⑧**：不能重现：开发按照缺陷显现步骤不能再次发现缺陷。一般闪退、崩溃类型的缺陷具有类似的特征，或者由于操作系统的差异、浏览器的缓存等出现的问题。所以作为测试人员，提交bug之前，要再三确认。<br>
**⑨**：需要更多信息：作为测试人员，提交bug的时候，要尽可能的把所有相关的文件（图片、视频）一起提交。<br>
**⑩**：重复：测试中，一定要避免这种情况的出现，尤其在一个软件的某一个功能频繁被多个模块（由不同的测试人员测试）调用的情况下。<br>
**⑪**：不是缺陷：一定不要在测试工程师的工作生涯中被开发标注缺陷状态为不是bug。<br>
**⑫**：需要修改需求说明书：缺陷不是技术原因造成的，而是由于需求不明确或者设计不明确造成。<br>

### 缺陷的生命周期

- 发现缺陷<br>
- 提交缺陷<br>
- 确认缺陷：一般由测试主管或者质量保证QA、产品经理进行缺<br>
- 分配缺陷：一般由谁确认的缺陷，就有谁分配，对象（开发、ui、产品）<br>
- 修复缺陷<br>
- 验证缺陷<br>
- 关闭缺陷：只能是测试人员进行<br>

### 缺陷的识别

依据：需求文档、设计文档、产品原型、测试用例，都是客观的依据。<br>
同行业类似成熟软件、和开发人员沟通、跟有经验的测试人员沟通。

### 缺陷报告

1. 缺陷编号：BUG_项目名称_模块名称_功能名称_0001
2. 所属模块：一级模块/二级模块/三级模块
3. 优先级：缺陷的修复紧急程度，P1>P2>P3>P4
4. 严重程度：S1>S2>S3>S4
5. 缺陷概述：用一句话去描述缺陷的基本情况
6. 缺陷描述：将缺陷的复现步骤、预期结果和实际结果列出来
7. 提交人：是谁就写谁的名字
8. 备注：一般写产生该缺陷的特殊情况。将bug截图作为备注信息。

### 缺陷报告的编写目的

- 展现缺陷的详细信息
- 展现缺陷的影响程度和方式

读者很多，所以要写的直白、清晰、明了。<br>
缺陷报告编写的准则：准确、清晰、一直、简洁、完整。<br>
缺陷描述的规则：

- [ ] 可以再现
- [ ] 不做评价 

### 需求、用例、BUG的关系

获取测试需求是测试工作的重点，也是第一部，通过需求而的分析。了解和掌握测试的方向和内容。例如：<br>
1）分析出系统的模块和组织结构<br>
2）分析出软件的基本功能和运行流程（业务分析）包括可能会有哪些人或者哪些角色要用<br>
3）识别出软件的重要功能和次要功能。<br>
获取测试需求的过程中，测试人员就要有相应的分析成果。一般用xmind这样的思维导图工具进行分析，或者使用需求跟踪矩阵来完成测试需求的获取和分析。<br>
设定测试中需求的正、反向和优先级。<br>
当有了测试需求之后，就开始针对每一个需求点进行测试用力的设计。也就说，每一个需求点，都要被测试。<br>
因此测试的过程中，衡量需求的覆盖程度就非常的重要。<br>

**需求的覆盖程度 = 被测试用例覆盖的需求数 / 需求点总数** <br>
使用↑↑↑计算和说明。

如果需求覆盖度 < 100%，说明测试的覆盖度不够。<br>
测试中，最能体现测试人员工作量的指标就是缺陷的数量和用例的数量<br>
- 设计的测试用例总量   TC

- 执行的测试用例数量   EC

- 未执行的测试用例总量   WC

- 执行通过的测试用例总量   SC

- 执行失败的测试用例总量   FC

- 提交的缺陷的总量  BC（bug counts）

  ```javascript
  TC >= EC，
  
  TC = EC + WC，
  
  EC = SC + FC，
  
  BC >= FC，
  提交bug的数量，多于执行未通过的用例数。测试过程中发现的缺陷，
  一部分是用例执行失败带来的，还有一部分应该是测试人员自身的经验和直觉等带来的。
  通过 SC/EC 可以表现出系统的质量是否合格
  通过 EC/TC 可以表现出系统的需求是否得到满足
  ```

### Linux

### 数据库基础

数据Data<br>
数据库Database<br>
数据库管理系统DBMS<br>
数据库系统DBS，DBS **=** 上边三者相加<br>

数据库系统的发展经历了3个阶段：<br>
​网状数据库、层次数据库、关系数据库<br>

关键字：列，<br>
属性名 = 字段名，<br>
主键：唯一，不重复，不为空。<br>

#### E+R图

实体-联系图，提供了标识实体类型、属性和联系的方法<br>
通常用**矩形表示实体**型，矩形框内写明实体名<br>
用**椭圆表示实体属性**，椭圆内写明实体属性名<br>
用**菱形表示实体型间的联系**，在菱形内写明联系名<br>
用线段连接起来

#### MySql


查看现有数据库：show databases;<br>
创建数据库：create database 库名;<br>
删除数据库：drop database 库名;<br>

![image-20220930150904031](/images/typora-user-images/image-20220930150904031.png)

##### mySql数据类型：

1. 数值型：

- ​	整数类型：int

- ​	小数类型：decimal

- ​	小数格式：decimal(总长度，小数位)

  ​	decimal(5,2)：总长度5位，小数2位 → 123.45

  ​	价格decimal(3,2) → 9.99

2. 日期和时间类型

​	datetime：YYYY_MM_DD HH:MM:SS<br>
​	date：YYYY+MM_DD

  3.字符串类型

​	char()：定长，不会释放空闲空间，系统会用空格填充满<br>
​	varchar()：变长，剩下字符空间，会释放


<img src="/images/typora-user-images/image-20220930152320631.png" style="width:800px;height:480px" />

切换数据库：use 库名;

```js
创建表：create table 表名 (
​			列名2 数据类型,
​			列名3 数据类型,
​			列名4 数据类型,
​			);

create table student (
​	学号 varchar(15),
​	姓名 varchar(10),
​	性别 char(2),
​	年龄 int
);
```

删除表：drop table 表名; &nbsp; &nbsp; 多表之间有逗号

##### **修改表结果：**

​	添加列：<br>
​	 alter table 表名add 属性名 数据类型;

​	 alter table student 专业 varchar(7);

​	删除列：<br>
​	 alter table 表名 drop 属性名;

​	 alter table student  drop 专业;

​	修改字段的数据类型：<br>
​	 alter table 表名 modify 字段名 新的数据类型;

​	 alter table student modify 学号 int;

​	修改字段名：<br>
​	 alter table 表名 change 旧字段名 新字段名 数据类型;

​	 alter table student change 年龄 age int;

​	显示表：<br>
​	 desc 表名;

​	 desc student;

​	**<u>实体完整性约束：</u>**

​		**<u>目的：在表中至少有一个唯一的标识，主属性字段中，不能为空，不能重复。</u>**

##### 主键约束：		

主键约束：唯一，不重复，primary key，一个表中有且只有一个。

```js
********************关系型数据库通用，比如Oracle，SQL Server。
格式一：create table 表名(
​						字段名1 数据类型 primary key,
​						字段名2 数据类型						
       );
********************
格式二：主键约束名字的写法：PK_字段名
			create table 表名{
					字段名1 数据类型,
					字段名2 数据类型,
					主键约束的名字 primary key(字段名1)
            };
格式三：create table 表名{
					字段名1 数据类型,
					字段名2 数据类型,
					primary key(字段名1)
       };
针对已经存在的表，添加主键约束，三种格式：
​			alter table 表名 modify 字段名 数据类型 primary key;
​			alter table 表名 add primary key(字段名);
*************************
​			alter table 表名 add constraint 主键约束的名字 primary key(字段名);	
*************************
删除主键约束：
		alter table 表名 drop primary key;
```

<img src="/images/typora-user-images/image-20221008152344064.png" alt="image-20221008152344064" style="zoom: 77%;" />

联合主键：指的是把两个字段名看成是一个整体，这个整体不为空，唯一，不重复。

1.创建表的同时创建联合主键

```js
格式二：主键约束名字的写法：PK_字段名
			create table 表名{
					字段名1 数据类型,
					字段名2 数据类型,
					主键约束的名字 primary key(字段名1,字段名2)
		   };
格式三： create table 表名{
					字段名1 数据类型,
					字段名2 数据类型,
					primary key(字段名1,字段名2)
	  	};
```

2.针对已经存在表，添加联合主键

```js
alter table 表名 add primary key(字段名1,字段名2);

alter table 表名 add constraint 主键约束的名字 primary key(字段名1,字段名2);
```

##### 唯一约束：

unique<br>
特征：<br>
1. 不允许有重复的值，保证数据的唯一性
2. 可以有空值
3. 在一个表中，可以有多个唯一约束
4. 默认情况下，唯一约束的名字和字段名保持一致
5. 添加唯一约束的列，系统也会默认给这个列添加一个唯一索引

索引：等同于书本的目录，将来能够加快数据的查询速度。

1.创建表的时候同时创建唯一约束

```js
格式一：
create table 表名(
	字段名1 数据类型,
  字段名2 数据类型,
  字段名3 数据类型,
  constraint 唯一约束的名字 unique(字段名1),
  constraint 唯一约束的名字 unique(字段名2)
);
格式二：
create table 表名(
	字段名1 数据类型 unique,
  字段名2 数据类型 unique,
  字段名3 数据类型
);

create table 会员表(
	会员编号 varchar(10),
  会员姓名 varchar(10),
  手机号 varchar(15),
  constraint UN_TEL unique(手机号)
);
```

一个表中可以存在多个约束。

2.针对已经存在的表，添加唯一约束

```js
alter table 表名 add unique(字段名1,字段名2);

alter table student add unique(学号);  
```

删除约束：<br> 
alter table 表名 drop index 唯一约束的名字;<br> 
alter table 登记表 drop index 手机号;<br> 
alter table 会员表 drop index UN_TEL;<br> 

唯一约束名字默认和字段名一致。

<u>**域完整性约束：保证在表中不会输入无效的数据**</u>

##### 默认约束：

default

当默认约束来修饰某个列的时候，修饰的列即使不写数据也会默认一个值。

```js
1.创建表的时候同时创建默认约束
create table 表名{
	字段名1 数据类型 default '字符串类型或者日期类型的默认值',
	字段名2 数据类型 default 数值,
	字段名3 数据类型
};
create table 成绩表(
	学号 varchar(20) primary key,
  姓名 char(4),
  性别 char(2) default '男',
  成绩 int
);
2.针对已经存在的表，添加默认约束
alter table 表名 modify 列名 数据类型 default '值';

alter table 成绩表 modify 成绩 int default 60;

删除约束：
alter table 表名 modify 字段名 数据类型;
alter table 成绩表 modify 性别 char(2);
```

##### 非空约束：

not null，当前列必须有值

```js
1.在创建表的同时创建非空约束
create table 表名(
	字段名1 数据类型 not null,
  字段名2 数据类型 not null,
  字段名3 数据类型
);
create table tempstudent(
	sno varchar(10) primary key,
  sname char(10) unique,
  sdept varchar(20) not null,
  sage char(4) not null
);
2.针对已经存在的表，添加非空约束
alter table 表名 modify 列名 数据类型 not null;
alter table 成绩表 modify 姓名 char(4) not null;

删除非空约束
alter table 表名 modify 列名 数据类型;
```

**<u>参照完整性</u>**

##### 外键约束：

 foreign key

```js
1.创建表的时候同时创建外键约束
主表：
create table 表1{
		字段名1 数据类型 primary key,
		字段名2 数据类型
};
从表(外键约束所在的表)：
create table 表名2(
   字段名1 数据类型,
   字段名2 数据类型
   constraint 外键约束的名字 foreign key(从表的字段名1) 	
   references 主表表名(字段名1)
);
注意事项：
①：外键约束是建立在从表；
②：当从表的列参照主表的列，列名可以不一样，但是，这两个列的数据类型和内容必须保持一致；
③：从表引用主表的列，要求主表的列必须有主键约束或者唯一约束；
④：当主表的数据被从表引用，主表的数据无法删除；
⑤：当从表中的数据想做操作的时候，先询问主表的意见，主表有的，允许从表操作，主表没有，拒绝从表操作。

student表中学号参照引用tempstudent表中的sno
create table student(
	学号 varchar(10),
  姓名 varchar(10),
  年龄 int,
  constraint FK_SNO foreign key(学号) 
  references tempstudent(sno)
);

2.针对已经存在的表，添加外键约束
alter table 从表表名 add constraint 外键约束的名字 
 foreign key(从表列名1) references 主表表名(主表列名);

alter table 学生表 add constraint FK_SNO foreign key(学号) references 成绩表(sno);


删除外键约束
alter table 表名 drop foreign key 外键约束的名字;
alter table 学生表 drop foreign key FK_SNO;
```

##### 插入语句：

```js
************************
格式一：
insert into 表名(字段名1,字段名2,字段名3) values(,值1,值2,值3);

insert into student(学号,姓名,年龄,性别,专业) values(102,'tom',18,'男','会计');

格式二：
insert into student values(,值1,值2,值3);
************************

格式三：
insert into 表名 values(值1,值2,值3...),(值1,值2,值3...),(...);

insert into student values(102,'tom',18,'男','会计'),(103,'li',19,'女','财务');
```

##### 删除语句：

delete

```js
************************
delete from 表名;   把整个表中的数据全部删除。

delete仅限于删除表中数据，表还在，drop是把表和数据一并删除。

delete from 表名 where 条件;

delete from student where 专业='会计';
************************
```



##### 更新/修改语句：

```js
**********************

update 表名 set 列名=值;

update student set 专业='工商';

update 表名 set 列名1=值1,列名2=值2...;

update student set 年龄=18,性别='女';

update 表名 set 列名=值 where 条件;

update student set 专业='播音' where 性别='女';

************************

update student set 年龄=年龄+3;
update teacher set salary = 5000 where name='张三';
```

##### 查询语句：

```js
select 列名 from 表名;
select 列名1,列名2,列名3,列名4 from 表名;
去重：select distinct 列名 from 表名;
别名：select 列名1 '别名1',列名2 '别名2',列名3 '别名3' from student;
		 select 列名1 as '别名1',列名2 as 别名2 from 表名;

select 学号,姓名,性别 from student;
select distinct 专业 from student;
select 学号 'sid',年龄 'sage',性别 'sex' from student;
select 姓名 as 'name',性别 as 'sex' from student;
```

##### 计算列：

```js
select 学号,课程编号,成绩,成绩+10 '成绩' as from 成绩表;
```

##### 条件查询：

>  <=>操作符和 `=` 等于操作符类似，不过 `<=>` 可以用来判断 NULL 值，具体语法规则为：
>
> - 当两个操作数均为 NULL 时，其返回值为 1 而不为 NULL；
>
> - 而当一个操作数为 NULL 时，其返回值为 0 而不为 NULL。
>
>   ![image-20221010113833366](/images/typora-user-images/image-20221010113833366.png)

```js
 =  >  <  >=  <= <>  !=          !=等于<>

安全等于运算符：<=>
select * from 学生表 where 专业='播音' and 性别='女';
select * from student where 成绩<60;
```

范围搜索条件：<br>
针对查询结果满足某个范围内的数据

select 列名 from 表名 where 列名 between 开始值 and 结束值;<br>
select 列名 from 表名 where 列名 not between 开始值 and 结束值;

```js
查询成绩>=70,<=90
select 姓名,性别,年龄,成绩 from 成绩表 where 成绩 between 70 and 80;
```

列表搜索条件：**in**<br>
通过in关键字使用户带上条件可以h和列表中任意值做匹配，满足其一就会有查询结果

select 列名 from 表名 where 列名 in(值1,值,值3...);

```js
select * from student where 籍贯 in('beijing','tianjin');
也可用or
select * from student where 籍贯='beijing' or 籍贯='shanghia';
```

**not in**：不在这个列表之内的

select 列名 from 表名 where 列名 not in(值1,值,值3...);

```js
select * from student where 籍贯 not in('beijing','tianjin');
```

字符匹配符：  **like  模糊查询**

通配符

| %    | 表示0个或多个字符 |
| ---- | ----------------- |
| _    | 表示一个字符      |

select 列名 from 表名 where 列名 like '字符模式';

```js
select * from student where name like '王%';
select * from student where name like '_大%';
```

not like<br>
where not like '王%';

涉及空值的查询：<br>
is null

is not null

```js
select 列名 from 表名 where 列名 is null;
select 列名 from 表名 where 列名 is not null;

select * from 成绩表 where 成绩 is null;
```

##### 聚合函数：

sum(列名)  对某个列求和<br>
avg(列名)  对某个列求平均值<br>
max(列名)  对某个列求最大值<br>
min(列名)  对某个列求最小值<br>

```js
select 聚合函数 from 表名;
select sum(成绩) '总成绩' from 成绩表;
select svg(成绩) '平均成绩' from 成绩表;
select max(成绩) '最高分',min(成绩) '最低分' from 成绩表;
```

count(*)  统计表中元组个数（一个表有多少条记录）

```js
select count(*) '总人数' from 成绩表;
select count(成绩) '成绩个数' from 成绩表;
除了count(*)外，替他函数再做操作时，均忽略空值(null);
```

##### 行数限定：

**limit**  哪行开始，查看几行数据

​		  [指定开始查询的行,] 查询的总行数

> mysql数据库中行数是从0开始的

```js
select * from student limit 5;  前5行数据
select * from student limit 2,6;   第三行开始，查看6行数据
```

##### 数据分组：

**group by**

select 列名 聚合函数 from 表名 group by 列名;

```js
查询每个年级的总人数和班级数
某年级多少人几个班
select 年级,sum(人数) '总人数',count(*) '班级总数' from 班级表 group by 年级;
```

分组：<br>
1.先查询结果（先统计出相关的总数或总和）；<br>
​2.统计出来之后或查询出来后，再进行分组(依据某个列来进行分组)

##### 分组条件：

**having**  在分组中进行条件限制（对分组的结果添加条件）<br>
select 列名 from 表名 group by 列名 having 条件;

一般情况下都是和聚合函数当做条件

**注意：**<u>having必须和group固定搭配</u>

​            <u>having后面可以写聚合函数，但是where后面不能写</u>

```js
查询成绩大于200的
select 学号,sum(成绩) from 成绩表 '总成绩' group by 学号 having '成绩'>200;
查询选课总数大于2门课的学生的学号
select 学号,count(课程) '选课总数' from 课程表 group by 学号 having count(课程)>=2;
```

##### 排序：

 **order by**<br>
select 列名 from 表名 order by 列名 desc;

默认情况**升序asc**排列，**降序desc**

```js
select * from 成绩表 order by 成绩;      45 67 82 94
select * from 成绩表 order by 成绩 desc;  94 82 67 45

select 学号,成绩 from 成绩表 order by 成绩,学号 desc;
```

##### MySQL函数

**length(字符串)**  求的是字符串的字节长度

**char_length(字符串)**  求的是字符串的长度

```js
计算机系：4     工管系：3
select 系别,char_length(系别) '长度' from student;

计算机系：12    工管系：9    dd：2   hh：2
select 系别,length(系别) ‘字节总长度’ from student;

MySQL中一个汉字占3个字节，一个字母占1个字节
```

**mid(原始字符串,截取开始位置,截取长度)**<br>
select mid(原始字符串,截取开始位置,截取长度) 别名 from student;

```js
select 系别,mid(系别,1,2) '截取后的字符串' from student;
```

**round(原始数据,保留小数位)**

> MySQL默认保留4位小数

> round如果不带参数，默认保留4位

```js
select round(34.5678,3);  34.568

select 学号,round(svg(成绩),2) '平均成绩' from 成绩表;
```

least(值1,值2,值3...)  求最小的数字

greatest(值1,值2,值3...) 求最大的数字

```js
select least(2,43,58,231,1);
select greatest(2,43,58,231,1);
```

**日期函数**

| now()             | 获取日期和时间     |
| ----------------- | ------------------ |
| current_date()    | 获取日期           |
| current_time()    | 获取时间           |
| to_days(日期值)   | 将日期转换成总天数 |
| dayofyear(日期值) | 求该年已过的天数   |
| week(日期值)      | 已过的周数         |

```js
select to_days(now());     从系统计时开始到今天的天数
select dayofyear(now());   今年已经过去了多少天
select week(now());        今年过去了多少周
```

**控制函数**

- if(布尔表达式,参数1,参数2)
- if(null,参数1,参数2)
- ifnull(参数1,参数2)
- ifnull(null,参数2)

```js
select if(5<6,'test','testing');
select ifnull(null),'testing';
```

##### 表连接：

1.内连接：提供了两种表与表之间的连接方式

1.1表连接的实现是通过where关键字来进行的关联

```js
表与表之间建立起关联的列，要求列名可以不一样，但是这两个列的数据类型和内容需保持一致。
select 表名1.列名1,表名1.列名2,表名2.列名1,表名2.列名2... 
from 表名1,表名2 
where 表名1.列名1=表名2.列名1;
```

**内连接查询 只关联表与表中 能够匹配到的数据**

```js
1.确定表 2.确定列 3.确定表与表之间能够关联的列 4.确定题上是否有额外要求
查询学生的学号、姓名、性别，以及所在的班级名称和年级
select 学生表.学号,学生表.姓名,学生表.性别,班级表.年级,班级表.班级名称
from 学生表,班级表
where 学生表.班级编号=班级表.班级编号;
```

------

```js
select 表名1.列名1,表名1.列名2,表名2.列名1,表名2.列名2... 
from 表名1 [inner] join 表名2
on 表名1.列名1=表名2.列名1;
```

```js
select xs.学号,xs.姓名,xs.性别,bj.年级,bj.班级编号 
from 学生表 xs inner join 班级表 bj
on 学生表.班级编号=班级表.班级编号;

select xs.学号,姓名,系别,kc.成绩
from 学生表 xs inner join 课程表 kc
on 学生表.学号=课程表.学号;

select xs.学号,xs.姓名,xs.性别,bj.年级,bj班级名称 
from 学生表 xs inner join 班级表 bj 
on 学生表.班级编号=班级表.班级编号 
where xs.籍贯='beijing' and bj.班级名称 like 'pu%';
```

inner join on 又划分为两个分类：<br>
1.等值连接 指的是条件中质保函等号”=“，没有其它符号在里面<br>
2.非等值连接 指的是条件中，除了等号之前，还有其他的符号 > < >=

```js
select xs.学号,姓名,班级编号,cj.成绩 
from 学生表 xs inner join 成绩表 cj 
on xs.学号=xs.学号 
where cj.成绩>40
order by cj.成绩 desc;
```

`select → from → where → group by → having → order by`

`select → from → inner join → on → where → group by → having → order by`

##### **多表查询**

1. select 表名.列名 from 表名1,表名2,表名3 where 表名1.列名=表名2.列名 and 表名2.列名=表名3.列名;
2. select from 表名1 inner join 表名2 on 表名1.列名=表名2.列名 inner join 表名3 on 表名2.列名=表名3,列名;![image-20221011181630037](/images/typora-user-images/image-20221011181630037.png)

![image-20221012115818765](/images/typora-user-images/image-20221012115818765.png)

**外连接 至少会返回出一个表的所有内容**

左外连接：对左边的表不加限制，返回左表的所有行

右外连接：对右边的表不加限制，返回右表的所有行

在from之后，先写的表是左表，后写的表是右表

```js
select 表名.列名 
from 表名1 left outer join 表名2
on 表名1.列=表名2.列;

会返回左表的所有内容，如果在右表中没有匹配到，在对应位置上就显示为null

select xs.学号,姓名,课程编号,成绩
from 学生表 xs left outer join 成绩表 cj
on xs.学号=cj.学号;

右外连接同理。
```

##### 子查询：

指的是查询语句里面嵌套查询语句

**select 列名 from 表名 where 列名 in(查询语句);**

```js
select 列名 from 表名 where 列名 in(select 列名 from 表名 where 列名 in(select 列名 from 表名 where 条件));
```

注意事项：

1. where后面条件要什么，子查询就查什么，例：条件要学号，子查询就查学号
2. 优先考虑子查询的情况：题中没有给出明确的提示结果，
3. where后面要用到举个函数当条件

```js
例：查询计算机系学生选择了哪些课程？问：计算机系学生有哪些？
聚合函数不能直接写，可以借助查询语句把聚合函数的结果查出来
成绩大于平均成绩
where grade>(select avg(grade) from 成绩表);

select distinct 学号 from 课程表  
where 学号 in(select 学号 from 学生表 where 系别='计算机系');

查询修了”c02“课程且成绩高于此课程的平均成绩的学生的学号和成绩
select 学号,成绩
from 成绩表
where 课程='c02' and 成绩>(select avg(成绩) from 成绩表 where 课程='c02');

```

嵌套子查询：指的是子查询中还包含其他的子查询<br>
相关子查询：指的是子查询的结果有且只有一个值



当insert语句和select语句做结合，就是把查询的结果插入到某一张表中<br>
格式：insert into 表名 select 查询语句

向学生信息表插入籍贯是北京的数据

```js
insert into 学生信息表 select * from 学生信息 where 籍贯='北京';

insert into stu select 学号,姓名,系别 from student;

insert into 成绩表 select * from 成绩表 where 成绩>70 and 课程编号='1003';
```

更新语句<br>
update 表名 set 值 where 列名 in(select查询语句)

```js
update 学生表 set 成绩=成绩+5 where 学号 in(select 成绩 from 学生表 where 系别='计算机系');
```

删除语句<br>
delete from 表名 where 列名 in(select 查询语句)

```js
例：删除计算机系学生的成绩
delete from 学生表 where 学号 in(select 学号 from student where 系别='计算机系');
```

##### 视图

指的是根据某个实际的表（实表）查询出来，生成的一个虚表<br>
目的是方便用户的操作

**创建视图**<br>
create view 视图名字 as select 语句

```js
create view view_班级信息 as select * from 班级信息;
select * from view_班级信息;
update view_班级信息 set 人数=100 where 年级='er';
insert into view_班级信息 values(‘15’,'jiayou','yi',40);
```

注意事项：视图既然作为一张虚标存在，那么对实表的增删改查操作，视图同样成立。<br>
视图既然是根据实表得到的，那么对视图的增删改查操作，同样影响实表。<br>
向视图中插入数据的时候，注意约束的影响。

**修改视图**

alter view 视图名 as select 语句;

```js
alter view_班级信息 as select * from 班级信息;
update view_班级信息 set 班级编号=20 where 人数=100;
```

**插入数据**

insert into 视图名 values(值1,值2...);

```js
insert into view_班级信息 values(‘15’,'jiayou','yi',40);
```

**删除视图**

带有条件删除视图中的数据

```js
delete from view_班级信息2 where 班级编号=28;
```

删除视图：drop view 视图名;

```js
drop view view_班级信息2;
```

删除两个视图：drop view 视图1,视图2;

> drop删除，不影响原表

##### 索引：

指的是在数据库表中的一个列或多个列的设置，帮助快速的定位所查询的数据。<br>
作用（优点）：

- 加快查询速度（定位）
- 保证数据的唯一性（唯一约束）
- 实现表与表之间的参照完整性（进行外键约束参照的列）
- 可以减少group by、order by，分组和排序的时间（根据某个列来进行分组或排序）

索引的弊端：<br>
（1）索引本身很大，可以存放在内存或硬盘上，通常存储在硬盘上。<br>
（2）索引不是所有情况都使用，比如①少量数据②频繁变化的字段③很少使用的字段。<br>
（3）索引会降低增删改的效率。<br>

------

**索引的分类**

| 按数据结构分类： | B+tree索引、[Hash](https://so.csdn.net/so/search?q=Hash&spm=1001.2101.3001.7020)索引、Full-text索引 |
| ---------------- | :----------------------------------------------------------- |
| 按物理存储分类： | 聚集索引、非聚集索引（也叫二级索引、辅助索引）               |
| 按字段特性分类： | 主键索引(PRIMARY KEY)、唯一索引(UNIQUE)、普通索引(INDEX)、全文索引(FULLTEXT)。 |
| 按字段个数分类： | 单列索引、[联合索引](https://so.csdn.net/so/search?q=联合索引&spm=1001.2101.3001.7020)（也叫复合索引、组合索引） |

​	普通索引：alter table 表名 add index index_name(''列名'');

> FULLTEXT(全文索引)
>
> alter table 表名 add fulltext ('列名');
>
> 仅可用于MyISAM表，针对较大的数据，生成全文索引很耗时和耗空间

（1）**单值（列）索引**：以某一个字段为索引

```js
create table User(
`name` varchar(50) not null,
`uid` int(4) not null,
`gender` int(2) not null,
 key(`name`)
);
```

（2）**唯一索引**：主要用于业务上的唯一约束，他跟主键索引的区别是，一个表可以有多个唯一索引。

```js
create table User(
`name` varchar(50) not null,
`uid` int(4) not null,
`gender` int(2) not null,
 unique key(`name`)
);

alter table 表名 add unique('列名');
```

（3）**联合(多列、组合)索引**：两个或两个以上字段联合组成一个索引。使用时需要注意满足最左匹配原则;

​最左前缀原则指的是，查询从联合索引的最左列开始，并且不跳过索引中的列。<br>如下：select * from user where name=xx and city=xx ;

```js
create table User(
`name` varchar(50) not null,
`uid` int(4) not null,
`gender` int(2) not null,
 key(`name`,`uid`)
);

alter table 表名 add index index_name('列名1','列名2','列名3');
```

（4）**主键索引**：主键索引是唯一的，通常以表的ID设置为主键索引，一个表只能有一个主键索引，这是它与唯一索引的区别。

```js
create table User(
`name` varchar(50) not null,
`uid` int(4) not null,
`gender` int(2) not null,
 primary key(`uid`)
);

alter table 表名 add primary key('列名');
```

备注：唯一索引和主键索引唯一的区别：主键索引不能为null

**查看索引**：show index from 表名;<br>
**删除索引**：drop index [index_name] on 表名;<br>

数据库只会选择一个最优的索引来使用，并不会使用全部索引。

```js
索引失效的情况：

1、like查询以“%”开头，如‘%XXX’；
2、or语句前后没有同时使用索引；
3、组合索引中不是使用第一列索引；
4、在索引字段上使用“not”，“<>”，“!=”等等。

补充：有类型转换时索引失效；
		 where中索引列使用了函数和运算；
		 is null可以走索引，is not null无法使用索引；
		 字符串不加单引号索引会失效；复合(联合)索引没有用到左列字段；
		 
		 OR前后存在非索引的列，索引失效
     如果条件中有or，即使其中有条件带索引也不会使用(这也是为什么尽量少用or的原因)
     要想使用or，又想让索引生效，只能将or条件中的每个列都加上索引
```

------

简洁版：

mysql有哪些索引<br>
- index 普通索引
  - alter table `table_name` add index index_name(`column`)
  - 最基本的索引，没有任何限制
- primary key 主键索引
  - alter table `table_name` add primary key(`column`)
  - 是一种特殊的唯一索引，不允许有空值
- unique 唯一索引
  - alter table `table_name` add unique(`column`)
  - 与“普通索引”类似，不同的就是，索引列的值必须是唯一，但允许有空值
- filltext 全文索引
  - alter table `table_name` add fulltext(`column`)
  - 仅可用于MyISAM表，针对较大的数据，生成全文索引很耗时和耗空间
- 组合索引
  - alter table `table_name` add index index_name(`column1`,`column2`,`column3`)
  - 遵循“最左前缀”原则

```js
创建索引
create index index_name on table_name(column_name)
修改表结构（添加索引）
alter table table_name add index index_name(column_name)
创建表时直接指定
create table table_name(
  id int not null,
  username varchar(64) not null,
  index [index_name] (username)  
);
删除索引
drop index [index_name] on table_name
```

------

##### 数据库管理系统（DBMS）：

管理数据库，位于应用程序和数据库之间的一个管理软件<br>
四大功能：定义、操作、维护、保护功能。<br>
实体联系模型<br>
实体：对客观事物的反映<br>
属性：用来修饰实体<br>
联系：一对一、一对多、多对多<br>
例：学生，拥有学号、成绩、专业<br>
实体集：实体的集合，具有相同属性的实体<br>

##### Oracle

数据库实例=表+数据<br>
数据库（图书馆）实例（书籍）<br>
数据库实例关闭（图书馆闭馆）<br>
数据库实例开启（图书馆开放）<br>
数据库实例的开启：启动实例，加载数据库，打开数据库

startup<br>
nomount 开启实例<br>
mount 开启实例，加载数据库，但是数据库还是一个关闭的状态<br>
<u>open 启动，加载，打开</u><br>
force 强制终止实例并重启数据库实例<br>

普通用户切换：conn 用户名/密码;<br>
sys用户切换： conn 用户名/密码 as sysdba;<br>


显示当前用户：show user;

关闭数据库实例： 

```js
	1、shutdown normal
　　正常方式关闭数据库。等待用户完成工作然后关闭；
​	2、shutdown immediate
		立即关闭 ,当前所有做工作回滚到一致状态,断开其连接；
　　立即方式关闭数据库。
　　在SVRMGRL中执行shutdown immediate，数据库并不立即关闭，
　　而是在Oracle执行某些清除工作后才关闭（终止会话、释放会话资源），
　　当使用shutdown不能关闭数据库时，shutdown immediate可以完成数据库关闭的操作。 　　
​​​	3、shutdown abort
		强制关闭,非干净关闭,下次重起后要回滚日志；
		直接关闭数据库，正在访问数据库的会话会被突然终止，
		如果数据库中有大量操作正在执行，这时执行shutdown abort后，重新启动数据库需要很长时间。
​	4、Shutdown transactional 
		等待用户完成工作但是强制关闭连接；
```

数据库实例的启动与关闭，只有sys用户才有权限<br>
oracle数据库的查询：<br>
select 列名 | *  from 表名;<br>
查询所有的表名：select * from tab;<br>
未选定行 代表的是没有查询的结果<br>
设置一行显示的字符总数<br>
set linesize 长度;<br>

设置每页显示多少行<br>
set pagesize 行;<br>

查看表结构： desc 表名;

oracle数据类型：<br>
字符串类型：varchar2(长度)  等同于varchar(长度)<br>
数值型：number或者number(长度) 整数<br>
&nbsp;​&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;number(总位数,小数位)  小数<br>
日期：date

------

连接符：||<br>
把字符串和表中查询的数据来做一个拼接

```js
例子： 要求查询出雇员的编号，姓名，工作，按照以下格式显示：
			编号是:7369的雇员.姓名是:SMITH.工作是:CLERK
			
			select '编号是:' || empno || '的雇员.姓名是:' || ename '.工作' || job from emp;

```

```js
例子： 要求查询出雇员的编号，姓名，工作，按照以下格式显示：
			编号是:7369的雇员.姓名是:SMITH.工作是:CLERK
			
			select '编号是:' || empno || '的雇员.姓名是:' || ename '.工作' || job from emp;
			
			求出雇员的姓名和年薪
			select ename,sai*12 年薪 from emp;

```

去重复 distinct<br>
select distinct 列名 from 表名;

别名：select 列名 别名 from 表名;

```js
查询出所有的工作种类（是否要去重复）
select distinct job from emp;


```

SQL语言的三个特性：集合性、统一性、可移植性

数据库对象：表、视图、索引。

SQl语句的分类：<br>
1.DQL 数据查询语言：select语句<br>
2.DML 数据操作语言：insert  update delete语句<br>
3.DDL 数据定义语言：create alter drop语句<br>
4.DCL 数据控制语言：授权grant  收权revoke<br>
5.TCL事务控制语言：commit提交  rollback回滚或者撤销 savepoint设置保存点

------

用户模式

目的：方便管理每个用户所包含的数据库对象（表、索引、视图），就引入			模式概念。<br>
模式：就是一个数据库对象的集合，模式的名字和用户的名字是相同的。

一个用户拥有一个模式

```js
例子：scott用户→scott模式→dept emp salgrade bonus
连接scott用户，密码是tiger
conn scott/tiger;
select * from tab;
```

##### 简单查询

```mysql
set linesize 800;
set pagesize 10;
select * from dept;

不推荐这种写法 冗余: select * from dept,salgrade;

select ename,empno job from emp;

检索emp表指定的列job和ename，还包括rowid伪列
select rowid,ename,job from emp;

select sal 原来的工资,sal*(1+0.1) 现有工资 from emp;

别名：select 列名 别名 from 表名;
		 select 列名 as "别名" from 表名;
select empno "员工编号",ename "员工名称",job "职务" from emp;
```

##### 条件查询

select 列名 from 表名 where 条件;

```js
select * from emp where sal>1200;
```

all只有与所有元素的比较值都为true的情况下，才返回数据的查询行。

格式：select 列名 from 表名 where 列名 比较运算符all(值1,值2,值3);

​			把括号里面的值同时满足

```js
select * from emp where sal != all(3000,950,800);
判断为空：is null
判断不为空：is not null
查询有奖金的员工
select from emp where comm is not null;
查询没有奖金的员工
select from emp where comm is null;
```

字符串和日期值必须使用单引号

```js
查询出，工资大于1500，同时可以领取奖金的雇员信息。
select * from emp where sal>1500 and comm is not null;
查询出，工资大于1500，或者可以景区奖金的雇员信息。
select * from emp where sal>1500 or sal is not null;
```

not取反，针对条件的结果取反<br>
select 列名 from 表名 where not(条件);

```js
查询出工资不大于1500，同时不可以领取奖金的雇员信息
select * from emp where sal<=1500 and comm is null;
select * from emp where not(sal>1500 or comm is not null);
查询出工资大于1500，但是小于3000的全部雇员信息
select * from emp where not(sal<=1500 or sal>=3000);
```

##### 范围查询

between 开始值 and 结束值;<br>
not between 开始值 and 结束值;

```js
select * from emp between 1500 and 3000;
```

------

Oracle中对数据的大小写是区分的。

```js
select * from emp where ename="SMITH";
```

列表搜索条件  in

在列表内   where 列名 in()值1,值2...;<br>
在列表外 where 列名 not in(值1,值2...);

```js
select * from emp where ename in("SMITH","ALTEN","KING");
反之，不在此范围中  not in(值1,值2...);
```

##### 模糊查询 like

匹配符： %代表任意长度的字符  _代表一个字符<br>
格式： where 列名 like '字符匹配符'

not like 不要匹配到的内容<br>
like还可以匹配日期

```js
查询 雇员姓名第二个字母包含“M”的雇员信息
select * from emp where ename like '_M%';
查询出不要雇员姓名中第二个字母包含“L”的雇员信息
select * from emp where ename not like '_L%';
查询雇佣日期包含81的雇员信息
select * from emp where hiredate like '%81%';
```

##### 排序 order by

升序 asc  <u>默认</u><br>
降序 desc

```js
检索emp表中所有的数据，并按照部门编号，员工编号降序来排序
select * from emp order by deptno asc,empno desc;
```

##### 分组排序 group by

select 列名 from 表名 group by 列名;<br>
*select后边可以写列名，但列名须与分组列名一致*

```js
sekect deptno,avg(sal) 平均工资 from emp group by deptno;
```

在分组过程中，如果有聚合函数当条件，可以放在having之后。

```js
sekect deptno,avg(sal) 平均工资 from emp group by deptno having avg(sal)<=2000;
```

##### 完整的查询结构

```js
select 列名
from 表名
where 条件
group by 分组的列
having 分组的条件
order by 列名;
```

##### 多表关联查询→表连接

1、内连接 的梁总表连接的方式和mysql的写法要求是一样的。

where：

```js
select 表名.列名 from 表名1,表名2,表名3... where 表名1.列名=表名2.列 and 表名2.列=表名3.列...;
```

on：

```js
select 表名1.列名 
from 表名1 inner join 表名2 
on 表名1.列名=表名2.列名 inner join 表名3 on 表名2.列名=表名3,列名;

join后边跟表名，on后边跟条件。
```

```js
select empno,ename,dname from emp e,dept d where e.deptno=d.deptno;

select empno,ename,dname from emp inner join dept on emp.daptno=dept.deptno;
```

2、外连接：至少会返回一个表的所有行

左连接  left outer join 返回的是左表的所有行<br>
右连接 right outer join 返回的是右表的所有行

3、完全连接 full outer join fan'i 返回的是两个表的所有行

```js
select empno,ename,dname from emp left outer join dept on emp.deptno=dept.deptno;

select empno,ename,dname from emp right outer join dept on emp.deptno=dept.deptno;

select empno,ename,dname from emp full outer join dept on emp.deptno=dept.deptno;
```

4、自然连接 natural join

会自动匹配两个表中具有相同名称的列

```js
在emp表中检索工资大于2000的记录，并实现emp与dept的自然连接。
select empno,ename,job,dname from emp natural join dept where sal>2000;
```

### 测试项目实战

1、需求分析

```js
输入文本框：
1、内容：文本，2.约束：非空
1、内容：数字，2、范围：[？]，参考数据库设计，3、约束：非空

```

```js
单独测试每个元素；将多个元素进行组合测试————判定表、正交试验。
先单侧再考虑组合
```

2、测试用例

一个需求可以对应多个测试用例，一个测试用例也可以对应多个需求分析  

3、缺陷报告

添加列→附件列→粘贴截图

 

```js
删除测试
删除前要有提示，删除后也要有提示，刷新页面数据
独立表格：直接删除
非独立表格：主外键约束
		字表数据：可以删除
		主表数据：分析是否有关联的外键数据
							没有 可以删除
							关联：不允许删除 - 建议
							     允许数据，
```

### HTML


### 正则


### Python

> 在python中，一切皆对象，对象必有的三个属性：地址、类型、值；
>
> 当对象的值发生变化，但内存地址没有改变时，则说明是可变类型
>
> 当对象的值发生变化，内存地址也发生改变时，则说明是不可变类型

命名以字母或下划线开头

```python
关键字
from keyword import kwlist
print(kwlist)
print(len(kwlist))

单行注释：以#开头
块注释：以三个'''或"""开始。以三个'''或"""结尾

缩进：4个空格

多行语句
one,two,three = 1,2,3
total = one + \
				two + \
				three
print(total)

print输出后换行
不换行加end：print('hello world',end-'')
print打印多个对象时，默认使用一个空格间隔
print打印多个对象时，可以通过参数sep指定间隔符
print('hello','world',sep='0')
```

```python
导包方式
import 模块名
from 模块名 import 方法名
from 模块名 import 方法名1,方法名2
from 模块名 import *

import sys
for i in sys.argv:
    print(i)
print('\n python路径为',sys.path)
```

```python
a = b = c = 1
print(type(a))
print(id(a)) #查看地址
number string list tuple sets dictionary
Number:int、float、bool、complex

str1 = 'zhang san'
print(str1[0:4]) #zhan  左闭右开，第一位为0位
print(str1[0:len(str1)]) #len为长度
print(str1[0:-1]) #zhang sa
print(str1[0:9:3]) #zagsn第三位数字代表步长，可以让切片结果跳着取

转义符： \n回车， \r将光标回退到开始位置，“\t”是指制表符,代表着四个空格 也就是一个tab，\\代表一个反斜杠，＋号两个字符串拼接
str2 = 'zhang\san'

可变对象修改之后，前后地址不变，不可变对象修改之后，前后地址会变
```

```python
str1 = 'zhangsan123'
print(stri.isdigit()) #判断字符串是否为纯数字。是返回True，否返回False
print(stri.isupper()) #判断纯大写
print(str1.islower()) #判断纯小写
print(str1.isalpha()) #是否纯字母
print(stri.isalnum()) #是否字母或者数字
print(str1.index('a')) #返回字母a第一次出现的位置下标
print(stri.index('an')) 
print(str1.replace('a','u')) #zhungsun123
print(str1.replace('a','u',1)) #zhungsan123

list1 = ['1','2','3']
print(''.join(list1)) #123
print('#'.join(list1)) #1#2#3
print(str1.split('a')) #['zh','ngs','n123']
print(str1.split('a',1)) #['zh','ngsan123']

list1 = ['1','2','3','abc',['a','b']]
print(list[4][1]) #b

list1 = [1,2,3,4,5,6,7,8,9,10]
print(list1[:]) #[1,2,3,4,5,6,7,8,9,10]
print(list1[0:10]) #结果同上
print(list1[0:len(list1)]) #结果同上
print(list1[0:-1]) #[1,2,3,4,5,6,7,8,9]
print(list1[2:-1]) #[3,4,5,6,7,8]
print(list1[0:10:2]) #[1,3,5,7,9]

list1 = [1,2,3]
list2 = ['a','b','c']
print(list1 + list2) #[1,2,3,'a','b','c']
print(list1 * 2) #[1,2,3,1,2,3]

list1 = ['a','b','c']
list1[1] = 'B'
print(list1) #['a','B','c']
list1.append('d') #['a','B','c','d']
list1.pop(0) #['B','c','d']
list1.remove('B') #['c','d']
list1.clear()  #清空列表
list1 = [] #清空列表

list1.index('c') #返回指定成员在列表中第一次出现的位置下标
list1.count('c') #统计指定对象的个数
list1.sort() #排序 - 升序
list1.sort(reverse=Ture) #排序 - 降序
list1.reverse() #排序 - 反序，翻转

```

```python
tuple1 = ()
print(type(tuple1))  <class 'tuple'>
tuple1 = (1,2,3,'aa',(11,12))
print(tuple1[3]) #aa
print(tuple1[0:5:2]) #(1,3,(11,12))
tuple1[2:] #输出从第三个元素开始的所有元素
tuple1 * 2 #输入两次元组
tuple1 + tuple1 #连接元组

tuple1[1] = 22  #报错，不支持修改，会报错

print(tuple1.count(2)) #统计2的个数
print(tuple1.index(2,0,len(tuple1))) #返回对象2的首次出现的位置下标
tuple1 = (1,2,3,[11,12])
tuple1[3][1] = 22
print(tuple1) #(1,2,3,[11,22])
```

小结：元组用()定义，支持索引下标和切片，不支持修改

```python
Set 集合是一个无序不重复元素的序列
set1 = {} #定义一个空字典，而非空集合
print(type(set1)) #<class 'dict'>

set1 = set() #定义一个空集合
set1 = {1,2,3,4}
print(type(set1)) #<class 'set'>
#集合带有自动去重，不支持索引下标，更不支持切片截取

set1 = {1,2,3,4}
set2 = {3,4,5,6}
print(set1 | set2) #并集，linux中叫管道 {1,2,3,4,5,6}
print(set1 - set2) #差集 {1,2} 即把set1中属于set2的元素去掉
print(set1 & set2) #交集 {3,4}
print(set1 ^ set2) #异或，不同时存在的元素 {1,2,5,6}

set2 = set('abcde')
set1.clear() #清空
set1.remove('某一项') #删除某一项
set1.pop() #删除结果中的第一个
set1.add('wangwu') #添加成员
set1.update(('liuliu')) #将liuliu加入集合
set2 - set1.copy()
id.(set1)和id.(set2)内存地址不同
```

```python
dict1 = {}
dict1 = {'name':'张三','age':18}
dict1['age'] = 20
print(dict1['name']) #张三   不支持索引下标
dict1.keys()   #dict1.key(['name','age'])
dict1.values()  #dict1.values(['张三',20])
dict1.get('name')  #张三
dict1.pop('name') #{'age',18}
dict1.clear() #清空字典
```

```python
a = 5        #将整型转化为float类型
b = float(a) #a为int，b为float

a = 5.5     #将float型转化为int类型，自动去吃小数点，仅保留整数位，不会四舍五入
b = int(a)  #a为float，b为int

a = 5       #将数值型转化为字符串类型
b = str(a)  #a为int，b为str

a = '5'    #将字符串转int类型，只能转纯数字的，不然会报错(带字母带小数点都报错)
b = int(a)

a = '1 + 2'
b = eval(a) #将字符串的算术表达式计算结果 b为3

a = 'zhang san'   #b为['z','h','a','n','g','','s','a','n']
b = list(a)     #a为str，b为list，
print(type(a),type(b)) 

a = 'zhang san'   #b为['a','z','s','h','n','g','']
b = set(a)     #a为str，b为set，
print(type(a),type(b)) 
```

```python
a = 9
print(bin(a))  #十进制转二进制
print(oct(a))  #十进制转八进制
print(hex(a))  #十进制转十六进制
```

#### 类型转换方法总结


#### 运算符

```python
print(5 + 2)  #7
print(5 - 2)  #3
print(5 * 2)  #10
print(5 / 2)  #
print(5 // 2) #2 取整
print(5 % 2)  #1 取余
print(3 ** 2) #9

a,b = 1,2
print(a == b)  #False
print(a != b)  #True
print(a > b)  #False
print(a < b)  #True
print(a <= b)  #True
print(a >= b)  #False

a = 1
a += 1  #a = a + 1  #2
a -= 1  #a = a - 1  #1
a *= 2  #a = a * 2  #2
a /= 2  #a = a / 2  #1.0
a //= 2  #a = a // 2  #0.0
a %= 2  #a = a % 2  @1
a *= 2  #a = a ** 2 #4
```

```python
a,b = 5,2  #5:0101  2:0010
print(a & b)  #0  按位与，对应位置上的两个数都为1时才为1，否则为0
print(a | b)  #7  按位或，7:0111 对应位置上有1出1，否则为0
print(a ^ b)  #7  按位异或 7:0111 亮着相异时为1，否则为0
print(~ a)  #-6  按位取反  对数据的每个二进制位取反，1变0,0变1
print(a << 2) #20   #左移动运算符，左移2位，末位补0
print(a >> 2) #1   #右移动运算符 右移2位 00
```

```python
#与或非
a,b,c = 1,2,3
print(a > b and b < c) #False
print(a > b or b < c) #True
print(not a < b) #False
```

```python
str1 = 'wang'
for i in str1:
    print(i)   # w  a  n  g
  
list1 = ['a','b','c','d']
if 'b' not in list1:
    print('yes')
else:
  	print('no')
```

```python
a,b = 1,1
print(id(a),id(b))
print(a is b) #True  #判断两个对象的内存地址空间，一样为True
print(a is not b) #False
print(a == b) #True
print(a != b) #False
```


#### 分支结构(选择结构)

```python
content = int(input("请输入一个整数：")) #input接收的都是str类型
if content < 5:
  	print("您输入的数字小于5")
elif content == 5:
    print("您输入的数字等于5")
else:
		print("您输入的数字大于5")
    
if content <= 5:
  	if content < 5:
      	print("您输入的数字小于5")
    else:
    		print("您输入的数字等于5")
else:
		print("您输入的数字大于5")
    
    
total = 0
for i in range(2,11,2)
		total+=i
print("1到10的所有偶数的和是:%d" %total)

i = 1
total = 0
while i <= 10:
		total += i
    i += 1
print("1到10的所有的和是:%d" %total)

for i in range(1,11):
  	if i % 2 == 0:
    		print(i)
    else:
      	pass  #空语句，又叫占位语句，作用是啥都不干
      
for i in range(1,11):
  	if i == 5:
      	continue #结束本轮循环，继续后面的循环
    else:
      	print(i)
        
for i in range(1,11):
  	if i == 5:
      	break #条件成立，结束整个循环
    else:
      	print(i)        
        
#break后续不执行，continue跳出当前，继续执行        
```

```python
i = 10
a = 0
while a < i:
	print(i)
	i -=1

a = 10
while a > 0:
  print(a)
  a -=1
```

#### 函数

```python
def sum(x,y):
  	total = x + y
  	#return total
  	#函数中不加return或只加return默认都返回None
    return total,total,total
a = sum(2,3)
print(a)   #(5, 5, 5)
print(type(a))   <class 'tuple'>
    #return可以返回多个对象，如返回多个时，用来接受的话，这个对象类型是元组
a1,a2,a3 = sum(2,3)
print(a1)   #5
```

#### 可变对象和不可变对象在函数体中传参使用

> **不可变对象：数值，字符串，元组**
>
> ​		修改了对象的值后，对象前后的内存地址会改变，用id()查看内存地址
>
> **可变对象：列表，集合，字典**
>
> ​		修改了对象的值后，对象前后的内存地址不会改变，还是指向同一个对象

```python
a = 1
def method():
  	a = 2
    print(a)
method()
print(a)
   # 2
 	 # 1
    
a = 1
def method():
  	global a #在函数体中声明，这是一个全局变量a
    a = 2
    print(a)
method()
print(a)
	 # 2
   # 2
    
a = 1
def method(A):
  	A = 2
    print(a)
method(a)
print(a)
	 # 2
   # 1
	
a = [1]
def method(A):
  	A.append = [2]
    print(A)
method(a)
print(a)
	 # [1,2]
   # [1.2]
    
#可变对象当做实参传入函数体当中修改使用的话，外面的可变对象的值会改变
```

```python
文档字符串：对函数的参数和返回值进行说明
def method(x,y):
  	'''
  	:param x: int类型，用于计算
  	:param y: int类型，用于计算
  	:return: 返回x与y的和的值
  	'''
    return x + y
print(method(1,2))
print(method.__doc__)
```

```python
必需参数
def method(name,age):
  	print("姓名是：%s，年龄是：%d" %(name,age))
method('张三',18)    

关键字参数
def method(name,age):
  	print("姓名是：%s，年龄是：%d" %(name,age))
method(age = 18,name = '张三') 

默认参数
def method(str1,str2="嘎嘎"):
  	print(str1,str2)
method("我是","人")  #不推荐
if __name__ == '__main__':  #推荐，如果自己执行当前文件，条件满足，对应的调用语句会执行；若跨模块导包调用时，条件不满足，不会执行调用语句。
  	method("我是","人") 
# 自己还行时，__name__结果为__main__，如果导包执行，__name__为文件名，也就是模块名称

不定长参数  #可以接收0~多个参数
def add(*number):
  	total = 0
  	for i in number:
      	print(i)
if __name__ = '__main__':
		print(add(1,2,3))  #不传实参的时候，number是一个空元组
    
匿名函数
sum = lambda x,y,z: x+y+z
if __name__ = '__main__':
  	print(sum(4,2,3))
    
return
def method(x,y):
  	total = x + y
    print("函数内：%d" % total)
    return total 
print(method(1,2))
```

#### 文件读写

1、txt文件

```python
方式一：写  不推荐
f = open('1.txt','w')  #以写(覆盖)的方式打开1.txt文件，并得到一个文件打开对象f
f.write('111111')  #向文件写入字符串111111
f.close()  #关闭打开的文件对象

方式二：读
f = open('1.txt','r')  #以读的方式打开1.txt文件，
result = f.read()  #读文件中的所有内容
print(result)  #打印读到的文件内容
f.cloes()  #关闭打开的文件对象

方式三：推荐，读写完成之后不需要每次写关闭文件的语句，会自动帮我们关闭打开的文件对象
文件打开模式：r读，w覆盖写，a追加写，b二进制，等，举例：rb:以二进制读的方式打开文件
写
with open('1.txt','w') as f:
  	f.write('aaaaa\nbbbbb\n')  #写入字符串对象，
   # f.writelines(['11111\n','22222\n'])  #写入的对象是列表
读
with open('1.txt','r') as f:
  	result = f.read()  #读所有内容，以字符串类型返回
    result = f.readline()  #读第一行，以字符串类型返回
    result = f.readlines()  #第一行，以列表形式返回，每行作为列表														的一个成员，后面会自动带上\n
    result = f.read().splitlines()  #读所有行，以列表形式返回，每													行作为列表的一个成员，后面会自动去掉\n
    print(result)
    
# 定义读写方法
def write_txt(file_name,content):
  	with open(file_name,'a') as f:
      	f.write(content)

def read_txt(file_name):
  	with open(file_name,'r') as f:
      	result = f.read().splitlines()
        return result
      
if __name__ = '__main__':
  	write_txt('1.txt','AAAAAAAA\n')
    result = read_txt('1.txt')
    print(result)
```

2、csv

```python
# csv：逗号分隔值，是个纯文本文件，通常用来存储测试数据
# 占用空间比excel文件小得多，在windows系统上默认使用excel打开，可以右键使用记事本打开。
写
import csv
with open('2.csv','a'，newline='',encoding='utf8') as f: # newline=''解决每次多																					写入一个空行的问题
  	obj = csv.writer(f)  # 得到一个csvwen件的对象
    obj.writerow(['3','wangmazi','13'])  # 向csv文件写入一行记录
    obj.writerow(['4','李四','14'])
    
读
with open('2.csv'.'r',encoding='utf8') as f:
  	obj = csv.reader(f)
    for i in obj:
      	print(i)
        
# 定义读写方法    
def write_csv(file_name,content):
  	with open(file_name,'a'，newline='',encoding='utf8') as f: 
      	obj = csv.writer(f) 
        obj.writerow(content)

def read_csv(file_name):
  	result = []
  	with open(file_name,'r',encoding='utf8') as f:
      	obj = csv.reader(f)
    		for i in obj:
      			result.append(i)
      
if __name__ = '__main__':
  	write_csv('2.csv',['5','王五',15])
    result = read_csv('2.csv')
    print(result)
```

3、excel

```python
#pip install xird
import xird
def read_excel(file_name,index):
  	excel = xird.open_workbook(file_name)  # 打开excel文件
    sheet = excel.sheets()[index]  # 得到表单对象
    return sheet

if __name__ = '__main__':
  	table = read_excel('3.xlsx',0)  # 得到索引为0的sheet
    for i in range(table.nrows):
      	rows = table.row_values(i)
        print(rows)
        print(rows[1])  #打印每行的第二个成员，也就是下标为1的内容
```

4、xml

```python
XML：可拓展标记语言，通常用来作配置文件
读，方式1：DOM，文档对象模型（document object model），不推荐，繁琐
方式2：ElementTree
import xml.etree.ElementTree as ET #导入模块并重命名为ET
def read_xml(file_name,node_name):
  	datas = []  #定义一个空列表，用来存储指定节点的内容
  	tree = ET.parse(file_name)  #得到元素树
    root = tree.getroot() #得到根
    for i in root.iter(node_name): #循环遍历指定名称的所有节点
	      datas.append(i.text) #将匹配的节点值加入列表
    return datas
  
if __name__ = '__main__':
  	result = read_xml('./4.xml','username')
    print(result)
```

#### 面向对象

类：是一类具有相同属性和方法的对象的集合。<br>
对象：实例化类即可得到一个具体的对象，这个对象就可以调用类的属性和方法。<br>
属性：对象的属性特征。<br>
方法：对象所具有的能力运作。<br>

```python
# 封装
#命名规则：python中，包名，模块名称均小写，类名每个单词首字母大写，方法名除首歌单词小写外其它单词首字母大写
class Person:
  	def __init__(self):  #构造方法，在类实例化的时候最优先执行，通常用来初始化一些对象
      	print("我是构造方法")
        self.name = 'zhangsan'  # 属性定义在构造方法中需要加self，如果定义在类中方法的外面，不需要加self。
    		self.age = 18
  	#name = 'zhangsan'  # 类的属性
    #__age = 18
    def study(self):  #类的方法
      	print('study')
        print(self.__age)
    def __del__(self):  #析构方法，在类实例化的时候，通常最后执行，用来回收对象，释放资源
      	print("我是析构方法")
        del self.name  #删除属性对象 
        del self.age
#类内部，无论私有化或非私有化的属性和方法，想在类的内部的其它方法中调用的话，必须使用关键字self        
#私有化的属性和方法，在类的外部不能访问，只能在类的内部调用
if __name__ = '__main__':
  	p = Person()  #实例化类得到一个对象
    print(p.name)  #调用类的属性
    p.study()  #调用类的方法
    print(p.age)  #私有化
    
    #print(Person().name)
    #Person().study()
```

```python
#继承规则：python支持多继承，调用顺序，从左到右，先深度在广度
class GrandFather:
  	name = "老张"
    def eat(self):
      	print("GrandFather: eat!")
class Father1(GrandFather):
		name = "大张"
  	def eat1(self):
    		print("Father1: eat!")
class Father2:
		name = "二张"
  	def eat2(self):
    		print("Father2: eat!")        
class Son(Father1,Father2):  #继承，子类(派生类、衍生类)Son继承父类(基类、超类)Father，子类就继承了父类的属性和方法  #多继承
		name = "小张"
  	def eat(self):
    		print("Son: eat!")
if __name__ == '__main__':
  	s = Son()
    print(s.name)
    #s.eat1()
    #s.eat()   # ctrl+b 可以直接跳到方法定义处和调用处
    
#继承可以避免重复造轮子，如果父类当中的方法子类都要使用，推荐使用继承；如果子类中只使用父类中的部分方法，不推荐使用继承，建议使用导包。    
```

```python
# 在子类中调用父类方法
class Father：
		def study(self):
    		print("Father:study")
class Son(Father):
  	def study(self):  #重写：父类方法不能满足子类需求，在子类当中重新定义同名的父类方法
    def sleep(self):
      	print("Son:sleep")
        super().study()  # 子类中调用父类同名方法 #方式1：推荐
				#self.study()  # 方式2：不推荐，因为子类当中如果有同名的方法，将会优先调用自己的，如果没有的话，才会调用父类的方法
if __name__ = '__main__':
  	s = Son()
    s.sleep()   	
```

```python
#多态
class Father:
  	def study(self):
      	print("Father:study")
class Son:        
  	def study(self):  # 重写
      	print("Son:study")
        
if __name__ = '__main__':
  	def method(obj):
      	obj.study()
    f = Father()
    s = Son()
    method(f)  # 多态：调用相同名称的方法，传入不同的参数对象，展现出不同的结果
    method(s)
```

重写：子类继承父类方法后，父类方法不能满足子类需求，让子类当中重新定义与父类同名的方法.

重载：python没有重载，java有重载。重载是指方法名相同，方法的参数个数、顺序和类型不同，根据方法调用时传入的不同参数来决定具体调用哪个方法。

```python
class Test:
  	def method(self):
      	print('method:1')
    def method(self,name):  # 在同一个类中，定义同名的方法，参数的个数、顺序和类型不一致，这个就叫重载
      	print('method:',name)
    def method(self,name,age):
      	print('method:',name,age)
    def method(self,age,name)
    		print('method:',age,name)
      
if __name__ = '__main__':
  	t = Test()
    t.method()
    t.method('zhangsan')  # 重载调用的时候，具体调用哪个重载方法，取决于实参的个数、顺序和类型
    t.method('zhangsan',18)
    t.method(18,'zhangsan')
```

#### 异常捕获

异常：指程序运行时处语法错误外的运行错误

```python
try:
  	print('111111')
   # print(1/0)  #ZeroDivisionError
  	print(1 + 'a')  #TypeError
except ZeroDivisionError as e:
  	print(e)
except TypeError as e:
  	print(e)    
print('222222')    


try:
  	print('111111')
   # print(1/0)  #ZeroDivisionError
  	print(1 + 'a')  #TypeError
except (ZeroDivisionError,TypeError,NumberError) as e:
  	print(e)   
print('222222')    


import sys
try:
  	print('111111')
    print(1/0)
except:  #捕获所有已知和未知的异常，不推荐，因为这种捕获方式可能会隐藏更深层次的问题
  	print(sys.exc_info())
print('222222')    

import sys
try:
  	print('111111')
    print(1/0)
except Exception as e:  #捕获所有已知的异常类型，推荐
  	#print(e)
    pass
  	#通常会调用一个写好的截图和写日志的方法
print('222222')    


print('000000)
try:  #认为有可能有异常的代码块放到try的子句里面
  	print('111111')
    print(1/0)
    print('222222')
except Exception as e:  #有异常时，且捕获到了异常才会执行
  	print("我是except")
else:   #没有异常时才会执行
   	print("我是else")
finally:   #不管有没有异常都会执行
		print("我是finally")    
print('333333')   
```

```python
#自定义异常
for i in range(1,11):
  	if i == 5:
      	break
    else:
      	print(i)
        
for i in range(1,11):
  	if i == 5:
 				try:     
      			raise TypeError("自定义异常！")
        except Exeption as e:
        		#	break
            #continue
				pass            
    else:
      	print(i)        


for i in range(1,11):
  	if i == 5:
 				#continue #结束本轮循环，继续下一轮循环
				pass  #占位语句，又叫空语句，为了保持代码结构的完整性不至于出错，啥事也不干          
    else:
      	print(i)           
```

except和finally不是必须的，但是二者必须要有一个，否则try就没有意义了；except可以有多个

```python
try:
  	print(1/0)
except Exception as e:
    print(e)	
    raise  #捕获到异常后，可以使用raise关键字继续抛出异常
```

#### 导包

```python
目录结构
project1>test>data + package1 + __init__.py + study1.py
package1>__init__.py + module1.py + module1.py
说明：在study.py模块中package1包里面的两个模块的方法

from test.package1.module1 import method1 #得到方法名称
from test.package1.module1 import method2
from test.package1.module1 import method1,method2
from test.package1.module1 import *

from test.package1.module2 import Test1 #导入到类名
from test.package1.module2 import Test2
from test.package1.module2 import Test1,Test2
from test.package1.module2 import *

import test.package1.module1 as m1
if __name__ = '__main__':
  	m1.method1()
    m2.method2()
    t1 = Test1()
    t2 = Test2()
    t2.method5()
    
#调用一个类中的方法，如果类中的方法只是部分要使用，建议使用导包方式调用；如果类中的方法是全部要使用，推荐使用继承的方式来调用   

import csv
class Test:
  	def read_cev(self,file_name):
      	with open(file_name,'r',encoding='utf8') as f:
          	obj = csv.reader(f)
            for i in obj:
              	print(i)
if __name__ = '__main__':
  	Test().read_csv('./data/2.csv')
    
    
import csv
import os
class Test:
  	def read_cev(self,file_name):
      	result = []
      	with open(file_name,'r',encoding='utf8') as f:
          	obj = csv.reader(f)
            for i in obj:
              	result.append(i)
        return result        
if __name__ = '__main__':
  	#result = Test().read_csv('./data/2.csv')   
    #print(result)
    
    path = os.getcwd()  #获取当前执行文件的绝对路径
    path = os.path.abspath('.')  #获取当前路径
    path = os.path.abspath('..')  #获取当前的父路径
    result = Test().read_csv(path + '/data/2.csv')  
    print(result)
```

### selenium自动化测试

白盒测试覆盖方法：语句覆盖、条件覆盖、判定覆盖、条件组合覆盖。


selenium的组成：<br>
selenium1.0：selenium IDE、selenium rc、slelnium grid；<br>
selenium2.0：selenium IDE、selenium rc、webdriver、selenium grid<br>
selenium IDE：UI用户界面的脚本录制工具（不用写脚本，只需要点点就能生成脚本），能够处理的逻辑有限，<br>
selenium rc（Remote Control）：c/s<br>
​		c：java/python开发的脚本<br>
​		s：浏览器<br>
webdriver：包（各种模块）对浏览器的api（对浏览器中元素或者浏览器的操作），替代rc为什么替代？主要是webdriver对浏览器的调度效率提高了好多<br>
selenium 3.0：selenium IDE、webdriver、selenium grid

#### **selenium IDE工具**

- Record a new test in a new project：在新项目中记录新测试
- Open an existing project：打开现有项目
- Create a new project：创建一个新项目
- Close Selenium IDE：关闭 IDE

Target：对谁进行操作？可以使用他们的属性进行定位<br>
command：找到之后，你要对它干啥？输入、键入<br>
value：键入啥？abc<br>
录制完之后，需要把脚本的步骤列表中，不需要的步骤可以删除。<br>
断言要求：一个即可只要能够唯一确定脚本是通过的即可。<br>
断言页面上显示的文本：assert text；assert value：断言值；<br>

#### **katalon工具**

测试集（testsuite）：存放测试用例脚本的文件夹

#### Python+chromedriver+geckodriver

chromedriver需和Chrome浏览器版本一致。

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
driver = webdriver.Chrome()
driver.get("https://www.baidu.com")
#driver.find_element_by_id("kw").send_keys("selenium")  #旧版本
#driver.find_element_by_id("su").click()  #旧版本

driver.find_element(By.ID,"kw").send_keys("selenium")
driver.find_element(By.ID,"su").click()
driver.quit()
```

页面元素及定位操作<br>
页面元素：在浏览器上能显示所有的要素，如图片、文本框、按钮、下拉列表等。

自动化测试的主要步骤：1.通过某些方式定位到需要执行的对象、目标(Target)；2.对这个对象进行什么操作(command)；3.通过操作对定位到的元素赋值((value))；4.添加断言操作。

浏览器操作、多窗口<br>
鼠标、键盘操作<br>
多表单处理<br>
元素等待（时间等待）

####  自动化测试用例

自动化测试用例一般可以由手工测试用例转化而来,需注意

- 不是所有的手工测试用例都要转为自动化测试用例
- 考虑到脚本开发的成本,不要选择流程太复杂的用例,可以把流程拆分成多个用例
- 选择的用例最好可以构建成场景
- 选取的用例可以是你认为是重复执行、很耗时间的部分,例如字段验证
- 选取的用例可以是主流程用例,即适用于冒烟测试的用例

自动化测试用例的**设计原则**

- 一个用例为一个完整的场景，从用户登录系统到最终退出并关闭浏览器
- 一个用例只验证一个功能点，不要试图在用户登录后把所有的功能都验证一遍
- 尽可能少的编写逆向测试用例,一方面因为逆向逻辑的用例很多
- 另一方面自动化测试脚本本身比较脆弱
- 用例和用例之间尽量避免产生依赖。
- 一条用例完成测试之后需要对测试场景进行还原，以免影响其它用例的执行

自动化测试用例**设计实践**

测试点转为测试用例的原则是什么？

- 设计一条正向用例，覆盖足够多的有效等价类数据
- 设计一条反向用例，需要覆盖一条无效等价类数据，其他数据一概使用正向数据

 有验证码的时候，该怎么进行自动化？

- 让开发暂时屏蔽验证码；将验证码改为万能码；懂机器学习，可以训练样本，可以达到99%以上识别成功率；调用OCR接口；

常见的自动化测试模型：四中不同个脚本开发模式，没有先后或者用的多少

**线性模型**、最基本的代码组织形式，以一行行的代码直接实现测试步骤，脚本相对独立，单纯的模拟用户完整的操作场景，测试用例的开发和维护成本很高，如果一个页面元素被改动了，所有线性脚本中用到这个元素的都需要更改。

**模块化脚本**：脚本中重复的代码抽离出未形成一个模块(模块中的方法)；<br>
​		1.如果你单独验证的是登录、退出、xxx功能，则需要加上断言。<br>
​		2.如果你把它做成模块化了(写成了方法或者类)，就不需要再加上断言。

把常用、公用的一些功能、业务、步骤专门提取出来，写在一个专门的模块中，以方法、类的形式实现出来，再其他的模块如果需要这些功能，直接调用即可，无需重复显示这些代码。比如可以做登录模块、退出模块、邮件发送模块、数据库处理模块、日志生成模块等。

模块化驱动测试最大层度地去除了重复，提高了测试脚本中的复用性和可维护性。

**数据驱动测试**：由数据的改变驱动测试的执行，最终改变测试的结果；

​数据与业务的分离，分离出来的数据应该怎么存储：

​字典：<br>
数据量比较小，只有几个的时候，使用的频率还挺高；<br>
​在python定义一个字段类型的数据结构，把数据存进去

​csv文件(excel文件)：<br>数据量比较大，几十~几万条数据，使用频率不算太高，常用测试珊瑚橘的存储；<br>
写在一个外部文件中，用的时候取出来即可

数据库：<br>
数据非常大，几万条意思，使用频率较低，如基础类数据；<br>
​直接存储在数据库，通过数据库读写模块，直接获取想要的数据使用即可

配置文件：<br>
数据库连接，数据库主机地址、数据库用户名、密码、端口等<br>
​用于更改数据库环境，比如直接在配置文件中更改数据库的用户名，你的脚本是不需要变化数据的参数化<br>

```python
csv文件数据读取：
新建一个excel文件，写入测试数据(是根据测试用例中分离处理的数据部分，有几个都是什么)
将文件另存为utf都逗号分隔符的csv文件
将csv文件 转码为utf-8格式
在python代码中导入数据：导包、使用with+open打开文件、使用data=csv.reader(f)、使用foe循环遍历该数据
文件路径问题
import os
filename = os.path.dirname(__file__)+r"/data_csv.csv"
```

```python
excel文件数据读取：
安装xird模块：pips indstall xird
导包，import xird
使用xird的方法打开excel文件(创建一个文件对象)
获取excel文件的sheet页
获取sheet页中的行数据、列数据、单元格数据
需要遍历数据，先得到文件中有多少行数据、多少列数据
使用for循环遍历
```

关键字驱动测试：通过”关键字“的改变引起测试结果的改变

> 断言：判断预期和实际结果是否一致，try-except-finally

其它的模块化使用场景：

1. 处理数据库数据，增删改查等，可以写一个专门的模块
2. 邮件模块，发邮件带附件，发带正文的邮件。
3. 写日志的模块

### unittest框架

之前脚本存在的问题：

1. 在测试用执行的时候，比较繁琐（如果测试用例数量过大，要么挨个执行，要么导包执行）
2. 断言方式太low了，只能是在控制台打印测试用例是否通过，我们希望这个断言的状态是显示在报告中的，而且不应该通过if-else去判断。
3. 基本上看不到测试报告的效果，显示总共执行了多少条用例，通过了多少条，失败了多少条，失败的原因是什么？

web自动化：python+selenium+unittest<br>
unittest：单元测试框架，有很多好的特性，再走订花测试中是可以借鉴的<br>
单元测试：包括两部分，带啊级别的功能测试，逻辑覆盖。

单元测试框架的好处：提供用例组织与执行；提供丰富的断言方法；提供丰富的日志和报告（html）格式的更好一些。

```js
setUp()、test_xxx()、tearDown()，三个方法，执行顺序不变
setUp()：主要是进行测试用例的资源初始化，测试用例的前提条件写在这
test_xxx():测试用例，要把测试用例的步骤写在这个方法中
tearDown()：主要是进行测试用例的资源释放的
@classmethod()：注解的方法是类方法，不用创建对象也能用的方法，
在对象进内存之前就已经存在的方法随着类一起近的内存
setUpClass：给当前单元测试类的所有的用例进行初始化的
tearDownClass：给当前单元测试类的所有的用力进行资源释放

 setUpClass和setUp()的区别：
     setUp()实例方法，就需要创建对象再调用，setUpClass类方法，不需要对象也可以调用；
     setUp()在每一个测试用例执行之前运行一次，setUpClass方法在测试执行之前只执行一次
     setUp()是对一条测试用例的初始化，setUpClass()对当前单元测试类的所有的用例进行初始化
```

```js
创建测试用例，test开头的方法

测试用例执行：
main()：是把所有的测试用例执行了一遍；
执行测试用例的顺序控制不了(按照测试用例(方法名)的字母顺序执行)；
如何解决？
使用测试集testsuite，

     testsuite：
         1、创建testsuite的对象
         2.调用testsuite中的方法addtest、addtests()将测试用例加入测试集合
         3、testsuite的run()方法运行测试集合
         注意：run方法的参数是testresult的对象：re=unittest.TestResult()
         testresult中存储的是测试执行的结果，print(re.__dict__)
        
     TestLoader：
         1、创建TestLoader对象：loader = unittest.TestLoader()
         2、使用loader方法loadtestsfromName()：
         通过添加一个模块名、类名、测试用例名，将其中的测试用例加载到测试集合
             loadtestsfromName()的参数比较灵活
                 1.可以是模块名:unitMymath
                 2.可以是模块中的类名:unitMymath.unitMymath
                 3、可以是模块中类中的某一个用例:unitMymath.unitMymath.test_add_1
         3、使用loader的discover方法，将指定的文件(模块)中的测试用例一次性加载。
             discover()方法： suitt=unittest.defaultTestLoader.discover(r"./axi/",pattern="unit*.py")
                 path：指定存放测试用例的目录即可(单元测试用例，使用unittest框架写的测试用例)
                 pattern：指定匹配规则：例：very_reg_*.py
```

```python
TestRunner：
  	在前面测试用例、测试集合执行的时候都是用testsuite()的run()方法： suitt.run(result)
    TextTestRunner()将结果能够以text文本形式展示的运行器
    使用TextTestRunner()运行器提供的run()方法运行测试集合
    如何产生一个文件流对象，如果打开一个文本文件，往里写入数据
    报告是以TextTestResult的形式展示的
    with.open(r"./axi01.txt","w",encoding="utf-8") as f:
        runner = unittest.TextTestRunner()
        runner = unittest.TextTestRunner(f,descriptions="单元测试报告",verbosity=5)
        runner.run(suitt)
    TextTestRunner是TestRunner的子类
    TextTestResult是TestResult的子类
    断言：一个自动化测试用例，测试步骤、测试的断言缺一不可
    使用HTMLTestRunner第三方模块
    为增加报告可读性，可在代码中添加文档字符串（'''XXXXXX''''）
```

```python
import unittest
discover = unittest.defaultTestLoader.discover(r,"./axi01/",pattern="myMathTest*.py")
# 使用runner运行期运行测试集
width open(r"./axi01/res.txt","w",encoding="utf-8") as f:
  	runner = unittest.TextTestRunner(f,descriptions="用于测试math类的用例执行",verbosity=2)
    runner.run(discover)
```

```python
import unittest,time,os
from HTMLTestLoader import HTMLTestLoader
filename = time.strftime("%Y-%m-%d-%H-%M-%S")+r"html"
path = os.path.dirname(__file__)+r"/"
filename = path + filename
width open(filename,"wb") as f:
  	runner = HTMLTestLoader(f,verbosity=2,title="单元测试报告",description="第一次执行结果")
    runner.run(discover)
```

### pytest

```python
pip3 install pytest
def reverse(str):
  	return str[::-1]  #字符串/列表倒序输出
def test_reverse01():
  	assert reverse('god') == 'dog'  #断言
    
1安装 2定义reverse函数，相当于是源代码 定义测试函数，以test_开头 3运行pytest xxx.py
```

```python
import pytest
def div(a,b):
  	return a/b
def test_zero_div():
  	with pytest.raises(ZeroDivisionError):
    		div(5,0)

def test_zero_div2():
  	with pytest.raises(ZeroDivisionError) as zero:
    		div(5,0)      
    assert 'division by zero' in str(zero.value)   
```

```python
import json
s = [{"name":"tony","password":"password"}]
print(type(s))  #<class 'str'>
s1 = json.loads(s)  #loads把字符串解码成python对象
print(type(s1))  #<class 'list'>

content = open('users_dev.json','r').read()
print(type(content))  #str

content1 = json.loads(content)
print(type(content1))  #list
for i in content1:
  	print(i['password'])
    
import pytest
class TestUserPwd:
  	@pytest.fixture()
    def users(self):
      	return json.loads(open('users_dev.json','r').read())
    def test_user_pwd(self，users):
      	for user in users:
          	pwd = user['password']
            assert len(pwd) >=6
            
```

```python
import pytest
class TestParamsDemo:
    # users中的数据，可以从json，excel，txt，数据库中读取，实现数据驱动
  	users = [{'name':'Tony','password':'iloveyou'},
    {'name':'Dom','password':'ilove'},
    {'name':'Tom','password':'iloveyou'}]
    @pytest.fixture(params=users)
    def user(self,request):
      	return request.param
    def test_user_pwd(self,user):
      	pwd = user['password']
        assert len[pwd] >= 6
参数化fixture允许我们向dixture提供参数，参数必须是可迭代对象(列表，元组)
该对象中有几条数据，fixture就会允许几次，相应的测试用例也会运行几次
可迭代对象中有多少个元素，就会执行多少条测试用例
数据驱动/参数化
class TestParamsDemo2:
  	users = jsons.loads(open('user_dev.json','r').read())
    @pytest.fixture(params=users)
    def user(self,request):
      	return request.param
    def test_user_pwd(self,user):
      	pwd = user['password']
        assert len[pwd] >= 6
```

```python
# parametrize装饰器可以简单想象成数据表格，有表头’test_input,result‘以及对应的具体数据
import pytest
@pytest.mark.parametrize('test_input,result',[('1+2',3),('2+3',6),('pow(2,3)',8),('pow(2,2)',8)])

def test_eval(test_input,result):
  	assert eval(test_input) == result
```

```python
pip3 install pytest-html
应用：pytest xxx.py --html-report.html
#report.html如果未指定路径，它生成的测试报告会存放在py同级目录下
```

### 接口测试

接口测试的必要条件

1. 接口说明
2. 调用url
3. 请求方法（get/post）
4. 请求参数、参数类型、请求参数说明
5. 返回参数说明

- 网络体系结构有几个：TCP/IP，OSI/PM
- TCP/IP有几层，分别是什么？4层，应用层、传输层、网络层、接口层
- 传输层有几个传输协议，分别是什么？2：TCP(传输控制协议)，UDP(用户数据报协议)
- 传输协议哪一个更安全？ TCP
- 常用的应用层协议有哪些？HTTP/HTTPS，ftp，POP3，IMAP/SMTP
- 常用协议的端口：80/443、21(保密)、110
- HTTP协议是超文本传输协议的缩写，是用于从万维网服务器传输超文本到本地浏览器的传送协议
- HTTP是一个基于TCP/IP通信协议来传递数据
- HTTP协议：工作在客户端—服务端架构上（C/S）
- HTTP协议的特点：①无连接的。请求和相应的双方可以不同时在线 ②媒体独立的。传输过程中的数据和通信协议没有关系（只要客户端和服务端能能都识别数据，就能进行传输）③无状态的。只要请求，就重新响应，不管之前响应了多少数据。
- HTTPS是HTTP的安全版（HTTP+SSL），安全的传输信息：①SSL(HTTPS)需要安全认证的证书（CA）②连接方式不同（443）③加密，敏感信息加密
- HTTP协议：请求（Request）、客户端发送的、包含的内容：请求行、头部、空行、请求数据

响应状态码：

1. 1**：接受请求，但是需要更多的信息
2. 2**：成功接收并作出处理
3. 3**：接收了，但是需要更多信息
4. 4**：客户端请求出错
5. 5**：服务器处理错误

常见的：200、301、304、404、403、401、400、500、502...

Response区域，显示服务器返回的信息的主体<br>
cookies区域：服务器返回的所有cookie值（用于验证客户端、服务端身份信息）。<br>
headers区域：服务器返回的响应头部信息。<br>
test results：断言。判断服务器返回的响应信息是否正确<br>
响应的其他信息：status(状态码)、time(响应时间)、size(响应信息大小)

在postman中设定参数，请求的body中，一般设置为form-data，写出对应的参数的值，发送请求，分析响应结果

自动化测试的两大技术点：

一、参数化运行

​	参数化：在程序中使用变量代替常量的过程。<br>
​	循环实现脚本的自动运行。<br>
​	for循环遍历数据<br>
​	数据可能来自：程序本身的数据字典、集合、列表；外部的数据文件，例如csv、txt文件。

二、断言

​	脚本中添加相应的判断，实现脚本自动的比较（判断）程序的实际结果和预期结果。<br>
​	if--else，框架或者内置的断言机制；

机制：以整个请求的集合（目录：cillection）为一个主体，通俗解释就是，参数化运行的作用对象是一个集合中的所有请求，需要将特定的请求单独放在一个集合中。

```js
变量名代替常量，"{{}}"，例如{{u_id}}表示接口中代替用户id的变量。
选择要进行参数化运行的collection
设置运行效果
	设置运行的迭代次数
	设置延时
	选择数据文件
	设置文件类型和查看运行预览效果
	其它信息设置（建议保持默认选项即可）
```

postman中脚本应用的场合：

​断言（tests模块）作用：在接收到http的响应后进行处理和运行。

​预处理信息（pre-request script）作用：在http请求发送之前进行数据的处理和运行。可以配合参数化运行，通过指定的脚本运行（读取参数文件）。

​控制请求的运行，比如跳转某一个请求，或者循环执行某一个请求。

脚本的运行顺序：<br>
​	1.率先运行、2.控制和分支、循环、3.断言

### Java

```java
创建Java项目
创建Java类（一般类名和Hava的类文件名称保持一致，并且这个类还必须是public形式的），也就是Java格式的代码文件（.java）
编写源代码。一个Java项目中，只能有且只有一个main()方法，而且main()方法的固定书写格式为：public static void main(String args) {}
保存并编译程序，生成class文件（class文件在Java里面是.java文件经过编译后的文件，也是Java虚拟运行的文件。学名：Java字节码文件。）
运行程序（只有运行包含main()方法的文件才执行）
  
public class HelloWorld {
    public static void main(String []args) {
       System.out.println("Hello World!");
    }
}
```

#### 基础语法

Java的关键字：全是小写<br>
Java的标识符：以大小写字母、数字、下划线、$、_组成；不以字母开头；不用用关键字；严格区分大小写’；见名知意

```java
注释：单行：//  多行：/**/   文档注释：/**  **/
```

Java中类、方法、语句块都要使用{}括起来，表示一个独立的代码内容。<br>
Java中需要独立运行的代码，结尾都要加;<br>
Java中的常量<br>
1. 常量的分类：字面值常量（直接显示的数值）；用户定义的常量（以字符的方式表现）
2. 常量的类型：
   1. 字符串常量：使用双引号亲戚来的0个或者多个字符的组合，例如”Hello“
   2. 字符常量：使用单引号引起来的1个字符，转义字符除外，例如‘a'，’\n’
   3. 整数常量：所有的证书，例如：2020,27
   4. 小数常量：所有的小数，例如：3.14159
   5. 布尔常量：只有true和false
   6. 空常量：null

进制：常用进制<br>
1. 二进制：0-1
2. 八进制：用途较少，Linux表示文件权限的时候。0,1,2,3,4,5,6,7
3. 十进制：。。。0,1,2,3,4,5,6,7,8,9
4. 十六进制：计算机的硬件地址（网卡物理地址、内存地址）。0,1,2,3,4,5,6,7,8,9，a,b,c,d,e,f

数据类型：基本数据类型 + 引用数据类型<br>
基本数据类型：数值型 + 字符型char + 布尔型型boolean<br>
引用数据类型：类class + 接口interface + 数组[]<br>
整数类型：byte、short、int、long，分别占用1、2、4、8字节<br>
浮点类型：float、double，分别占用4、8字节<br>

> 表述范围：byte：-128~127，shot：-2^15 ~ 2^15-1<br>
> ​	int：-2^31~2^31-1，long：-2^63~2^63-1<br>
> 整数的取值范围整体比浮点的取值范围小，即使是long也比float的取值范围小<br>
> 整数默认：int，小数默认：double

```java
public class HelloWorld {
    public static void main(String []args) {
        System.out.println("Hello World!");
	   		System.out.println("输出各种数据类型");
				int i = 100000000;
				byte b = 127;
				short s = 5000;
				long l = 1000000000L; // 表示是一个长整型
				float f = 3.14;  //在小数点后面加F表示该小数是一个单精度的小数
				double d = 30.2758587;
				char c = 'a';
				boolean bl = true;
				System.out.println(i);
				System.out.println(b);
				System.out.println(s);
				System.out.println(l);
				System.out.println(f);
				System.out.println(d);
				System.out.println(c);
				System.out.println(bl);
    }
}
```

注意:<br>
​	1、同一个代码模块级别中，不能同时定义两个相同名字的变量。一个花括号内，即使有内嵌的花括号，也算是同一级别。<br>
​	2、变量没有初始化，不可以直接参与程序运行。

数据类型的转换<br>
1) “+“号,是个多功能的运算符。可以当加法用，也可以当连接运算符。
2) boolean不转换成任何类型。
3) 默认数据类型转换。Java运行时会默认将小数据类型或者小范围的数据类型转化为大范围的数据类型
4) 强制数据类型转换。语法格式：数据类型  变量 = (目标类型)(被转换的数据); 例：double dd = 234.345； float ff = (float)dd;
5) 补充：+号的运算规则。ASCII 码

运算符：

1、算术运算符：+  -  *  /  %  ++  --

```java
public class HelloWorld {
    public static void main(String []args) {
        System.out.println("Hello World!");
		    int a = 10;
				int b = 10;
				int c = 10;
				a = b++;
				c = --a;
				b = ++a;
				a = c--;
				System.out.println(a);
				System.out.println(b);
				System.out.println(c);
    }
}

$javac HelloWorld.java
$java -Xmx1024M -Xms256M HelloWorld
Hello World!
9
10
8
```

2、赋值运算符 +=  -=  *=  /=  %=<br>
3、比较运算符  ==  !=  <  >  <=  >=  instanceof(”Hello instanceof String“ → true)<br>
4、逻辑运算符 &与   |或   ^异或   !非   &&短路   ||短路<br>
5、位运算符  <<左移   >>右移     >>>无符号右移    &与    |或    ^异或     ~按位取反。注意：位运算的参与都是整数；要以二进制的方式参与运算；在左移或者右移的过程中，需要补0（总原则就是哪里空出来，就在哪里补0）<br>
6、三目运算符：(条件表达式)  ？表达式1 : 表达式2   注意：三目运算也叫做三元运算符，特指运算的时候有三部分组成；如果运算的时候，邮箱部分内容参与运算，就成为二元运算符；如果运算的时候，只有一个数据参与运算，则称为单目运算(~)

```java
3 << 2 = 12  3*2*2=12
3 >> 1 = 1   3/2=1
3 >>> 1 = 1  3/2=1
6 & 3 = 2
6 | 3 = 7
6 ^ 3 = 5
~6 = -7
```

#### 输入类

Java中的输入类有很多，Scanner类用的比较多。

```java
1、需要导包
  import java.util.Scanner;
2、创建输入类的对象
  Scanner sc = new Scanner(System.in);
3、通过类方法接收输入参数
  System.out.println("请输入一个整数：");
  int x = sc.nextInt();
	System.out.println(x);
	sc.close();
```

```java
System.out.println("请输入一个字符串：")
```

#### 程序的三大语句结构

顺序结构、选择结构、循环结构

1、顺序结构：没有逻辑条件和判断，按照代码编写的先后顺序进行执行。<br>
2、选择结构：<br>
```java
​1）
if(a>b) {
​	System.out.println("a大于b");			 
​}else if (a=b){
​	System.out.println("a=b");
}else {
​	System.out.println("a小于b");
}
```


```java
import java.util.Scanner;
Scanner sc = new Scanner(System.in);
System.out.println("请输入x的值：");
int x = sc.nextInt();
int y = 0;
if(x >= 3) {
  y = 2 * x + 1;
}else if(x >= -1 && x < 3) {
  y = 2 * x;
}else {
  y = 2 * x - 1;
}
System.out.println(y);
sc.close();
```

​		2）switch语句

```java
switch(x) {
  case 60:
    System.out.println("60");
    break;
  case 80:
    System.out.println("80");
    break;
  case 90:
    System.out.println("90");
    break;
  default:
    System.out.println("啥也不是");
    break;
}
```

switch后面的表达式只能是整数、字符串、字符、枚举类型，最好是变量。<br>
if语句使用场景：针对结果是boolean类型的判断；针对一个范围的判断<br>

switch语句使用场景：针对几个常量值的判断<br>
关于switch 和if，在特定环境下，可以互相转化。更多的是将switch转化为if-else-if结构。<br>但是大多数的if-else-if结构不能转化为switch结构。

3、循环结构：

```java
public class XunHuan {
  public static void main(String[] args) {
    int i = 0;
    int sum = 0;
    for(i = 1;i <= 100;i++) {
      sum +=i;
    }
    System.out.println("结果是"+sum);
  }
}
```

```java
i = 1;
sum_ji = 0;
sum_ou = 0;
while(i <= 100) {
  if(i % 2 == 0) {
    sum_ou += i;
  }else {
    sum_ji += i; 
  }
  i++;
}
```

```java
int m = 1;
int sum = 0;
do {
  sum +=m;
  m++;
} while(m < 100);
至少会执行一次循环体。
```

break终端循环；continue跳出当前，继续循环。

```java
小芳的妈妈每天给她2.5元，她都会存起来，
但是，每当这一天是存钱的第五题或者5的倍数的话，她都会去用掉6块钱。
问：至少经过多少天可以存到100块？
public class HelloWorld {
    public static void main(String []args) {
		int day = 0;
		double money=0;
		for(money=0;money<=100;money+=2.5) {
			day++;
			if(day%5==0) {
				money=money-6;
			}
		}
		System.out.println(day);
	}
}
```

#### 数组

数组的定义： 一组数据。

数组的特征:<br>
	1) 是多个数据元素的集合和代表。每一个数据元素都是数组的一部分。<br>
	2) 数组中的数据元素的类型(数据类型)都完全一致。要区别于Python中的列表(列表中的数据类型，没有统一规定，可以是任意类型)。<br>
	3) 不同类型的数组，可以存储和表示不同的数据类型，但是同一个数组中的所有数组元素类型都是相同的。例如，一个整型数组，只能存储整数。一个字符串数组，只能存储字符串。 

数组点多定义方法（语法格式）：<br>
1）数据类型[] 数组名;<br>
2）数据类型 数组名[];

注意：刚定义的数组，元素没有值，没有初始化。

```java
int[] zx;
char ch[];
String[] str;
数组和变量定义的唯一区别就在于写不写[]
```

数组的初始化：<br>
1、Java中的数组必须先初始化，然后才能使用。<br>
2、所谓初始化：就是为数组中的数组元素分配内存空间，并为每个数组元素赋值。

数组的初始化方式：<br>
1、动态初始化：初始化时只指定数组的长度，由系统为数组分配初始值。<br>
2、静态初始化：初始化时指定每个数组元素的初始值。由系统决定数组长度。

```java
动态初始化：
  格式： 数据类型[] 数组名 = new 数据类型[数组长度];
		数组长度就是数组中元素个数
  举例： int[] arr = new int[3];
		解释：定义了一个int类型的数组，这个数组中可以存放3个int类型的值。

静态初始化：
  格式： 数据类型[] 数组名 = new 数据类型[]{元素1,元素2,...}
	  String[] s = new String[] {"H","e","l","l","o"};
  	double[] db = {12,13,14,43,54,5678};

		int[] arr = new int[]{1,2,3};  简化： int[] arr = {1,2,3};

	.length 获取数组长度（元素个数）
    
引用方式： 数组名[数组元素下标]
数组元素下标：整型常量或整型表达式。如a[3],b[i],c[6*i]
    下标从0开始，长度为n，取值范围则为：0至n-1
```

使用动态初始化数组方法的时候，没有给数组元素赋值，系统会默认给一个初始值(每一个元素的初始值都一样)。

- 整型数组的默认值是0
- Double型数组的默认值是0.0
- 字符型数组的默认值是 (空字符)像空格一样
- 字符串数组的默认值是null(空)
- Boolean型数组的默认值是false

> 1、栈内存(存放局部变量)<br>
> 2、堆内存(存放new出来的变量的地方)<br>
> 3、方法区<br>
> 4、本地方法区(和系统相关)<br>
> 5、寄存器(cpu)<br>
> ✅堆——先往底部存数据，后来的数据存到顶部：先进后出<br>
> ✅队列——先进入的数据，先读取出来：先进先出

```java
栈存储局部变量，基本数据类型，引用类型变量
​	a:方法定义中或者方法声明上的所有变量
​	b:使用完毕,立即消失
  
堆存储new出来的东西(实体，对象)
​	a:每一个实体都有首地址值
​	b:每一个实体内的数据都有默认值
​		byte，short，int，long 0
​		float，double 0.0
​		引用类型: null
​ c:使用完毕后,会被垃圾回收器空闲的时候回收。
```

------

一个数组占用多少存储空间。取决于数组的数据类型和元素的个数。<br>
例如, Int类型的数组，8个元素。占用32字节的空间。Double型的数组， 6个元素，占用48字节。若是字符串类型的数组，其占用空间数则不确定。

------

```java
int[] arr = new int[] {23,67,823,78,32,21,54,78};
int max = arr[0];
for(int i = 1;i < arr.length;i++) {
  	if(max < arr[i]) {
      	max = arr[i]
    }
}
System.out.println(max)
```

数组的排序算法（常见）：
快速排序：利用数组类（Arrays）的静态方法sort（）进行排序。

冒泡排序：将排序中的数据按照从小到大的顺序进行排列。

选择排序：本质是在一组数据中选择一个参照数据（第一个或者最后一个），其它元素分别于选择的参照元素进行对比和交换（满足条件的交换）。

```java
快速排序
import java.util.Arrays;

Arrays.sort(arr);

for(int i=0;i<arr.length;i++) {
  	System.out.println(i)
}

冒泡排序
for(int i=0;i<arr.length - 1;i++) {
  	for(int j=0;j>arr.length - 1 - i;j++) {
      	if(arr[j] > arr[j + 1]) {
          	int temp = arr[j];
          	arr[j] = arr[j+1];
          	arr[j+1] = temp;
        }
    }
}

选择排序
for(int x=0;x<arr.length-1;x++) {
  	for(int y=x+1;y<arr.length;y++) {
      	if(arr[y] < arr[x]) {
          	int temp = arr[x];
          	arr[x] = arr[y];
          	arr[y] = temp;
        }
    }
}
```

```java
int[][] haha = new int[][] {{1,2,3,4,5},{21,22,23,24},{31,32,33,34}};
public class HelloWorld {
    public static void main(String []args) {
       	System.out.println("Hello World!");
			  int[][] haha = new int[][] {{1,2,3,4,5},{21,22,23,24},{31,32,33,34}};
				for(int i = 0;i < haha.length;i++) {
					for(int j = 0;j<haha[i].length;j++) {
						System.out.println(haha[i][j]+"\t");	
					}
				}
    }
}
```

#### 方法

概念：有独立功能的代码模块。面向对象和开发语言（Java）里面叫做方法，面向过程的开发语言称为函数。<br>
定义方法的语法规范：

```Java
修饰符 返回值类型 方法名(参数类型 参数名,...) {
		方法体
		return 返回值;
}
```

```java
package test12;
public class FangFa {
  public static void main(String[] args) {
    
    	Scanner sc = new Scanner(System.in);
    
    	System.out.pringln("请输入i的值：");
    	int i = sc.nextInt();
  	  System.out.pringln("请输入j的值：");
    	int j = sc.nextInt();
    	int sum = he(i,j);
    	System.out.pringln(i+"和"+j+"的和："+sum);
    	System.out.pringln(i+"和"+j+"的和："+he(i,j));
    
  }
  public static int he(int a,int b) {
  	  int sum = a + b;
    	return sum;
  }
  public static int max(int m,int n) {
 			int result = (m > n) ? m : n;    
    	return result;
  }
}
```

方法的调用<br>
1)有返回值方法的调用。单独调用、输出调用、赋值调用。<br>
单独调用：直接调用方法，不赋值，也不输出。<br>
输出调用：将方法的返回值直接输出。<br>
赋值调用：将方法的返回值作为一个数据赋值给其他变量的过程。<br>
2)没有返回值的方法的调用。只能单独调用。

Java方法的重载

1)含义：就是在一个类中，定义多个同名的方法，但是这些方法在参数的数量和类型上各有不同
2)注意：方法重载与方法的返回值无关，只与方法定义时的参数个数和类型相关。

```java
public static void bijiao(byte b1,byte b2) {
  
}
public static void bijiao(short b1,short b2) {
  
}
public static void bijiao(int b1,int b2) {
  
}
public static void bijiao(long b1,long b2) {
  
}
```

#### 面向对象

面向过程、面向对象：省略...<br>
面向对象特征：封装继承多态<br>
类：具有相同属性和行为的实物的统称。
对象：一类事物中，某一个具体的事物。

```java
class Student{
	public String name;
  private String name2;
	public char sex;
	public int age;
  protected double weight;
  private String classname;
	public static void study() {
    	System.out.println("正在学习，请勿打扰！");
  }
  public static void homework() {
    	String content = "void";
    	for(int i=1;i<100;i++) {
        	System.out.println(content);
      }
  }
  public String getName2() {
    	return this.name2;
  }
  public void String setName2(String name) {
    	this.name2 = name;
  }
  public Student() {
    	System.out.println("我是构造方法，系统自动调用");
  }
  public Student(String name,char sex,int age) {
  	  this.name = name;
    	this.sex = sex;
    	this.age = age;
  }
  public void printInfo() {
    	System.out.println("我是"+this.name+"性别为"+this.sex+"今年"+this.age+"岁");
  }
} 
public class Demo {
  	public static void main(String[] args) {
      	Student s1 = new Student();
      	System.out.println(s1.name);
      	s1.study();
      	s1.setName2("张三");
	      System.out.println(s1.getName2());
      
      	Student s1 = new Student("李四","男",21);
      	s1.printInfo();
    }
}
```

**成员变量和局部变量的区别**

在类中的位置不同<br>
		成员变量：类中方法外<br>
		局部变量:方法内或者方法声明上<br>
在内存中的位置不同<br>
		成员变量：堆内存<br>
		局部变量：栈内存<br>
生命周期不同<br>
		成员变量：随着对象的存在而存在，随着对象的消失而消失<br>
		局部变量：随着方法的调用而存在，随着方法的调用完毕而消失<br>
初始化值不同<br>
		成员变量：有默认的初始化值<br>
		局部变量：没有默认的初始化值，必须先定义、赋值、才能使用

**匿名对象**：没有名字的对象。一边用来执行调用一次方法使用，或者作为实参进行传递。

##### 封装

1)含义：将对象的属性和行为隐藏，对外只提供访问的接口。<br>
2)好处：提高代码的安全性(因为把数据都可以隐藏起来)，提高代码的复用性。<br>
3)原则：隐藏不想让外界知道的数据，提供对外的接口，访问内部数据。

private关键字：<br>
1.是一个权限修饰符<br>
2.可以修饰成员(成员变量和成员方法)<br>
3.被private修饰的成员只在本类中才能访问<br>

**构造方法**
1、作用：给对象的属性进行初始化。<br>
2、形式：...<br>
3、注意：方法名必须和类名一样；必须是pubilc的；没有返回值，也不是void类型；可以有参数，也可以没有；构造方法可以重载；由系统自动调用，如没有自定义构造方法，则系统默认安排一个；自定义的构造方法确定后，则运行自定义的构造方法。

类的成员方法：
一般分类：①有没有返回值；②有没有参数

**基本类的代码**<br>
1、成员变量（可以是共有的、保护的、私有的）<br>
2、构造方法（带参数的、不带参数的）<br>
3、成员方法（setXXX或者getXXX）<br>
4、Java中的特殊类——主类（包含了main()方法的类），一般不顶用具体的成员变量、构造方法

##### 继承

1、概念：如果多个类拥有一部分相同的属性和行为，编程的时候可以将这些相同的内容归纳出一个新的类，其他类继承这个归纳类即可。
归纳出的类，称为父类、基类、超类
继承父类的，称为子类、派生类

2、继承的语法格式：

```java
class 子类名 extends 父类名 {
  	子类特有的成员变量
    子类特有的成员方法
    子类重写父类的方法
}
```

3、继承的好处：
①提高了代码的复用性：多个类相同的成员可以放到同一个类中
②提高了代码的维护性：如果功能的代码需要修改，修改一处即可让
③类与类之间产生了关系，是多态的前提：其实这也是继承的一个弊端:类的耦合性很强

> Java只支持单继承，不支持多继承：一个类只能有一个父类，不可有多个父类<br>
> Java支持多层继承

##### 重写

Java中方法的重写：<br>
1）方法重写指的是在子类中，重现编写父类中同名方法的功能。<br>
2）注意：重写方法，必须名称、参数列表、返回值都一样；<br>
	父类私有的方法不能被重写；<br>
	方法重写不能降低方法的访问权限(public > protected > private)；<br>
	父类方法如果是静态的(static)，重写时也应该是静态的。<br>

```java
public class Animal {
  private String name;
  private char sex;
  privatr String type;
  
  public static void eat() {
    System.out.println("吃东西");
  }
  public void sleep() {
    System.out.println("睡觉");
  }
  private void drink() {
    System.out.println("喝水");
  }
  public void run() {
    System.out.println("跑🏃");
  }
}
```

```java
public class Cat extends Animal{
  public String color;
  public int leg;
  public void catchFish() {
    System.out.println("会抓鱼");
  }
  public void climb() {
    System.out.println("会爬树");
  }
  // 重写父类方法 static类型的方法不能少static
  public static void eat() {
    System.out.println("喜欢吃鱼");
  }
  // 重写父类方法 不能降低方法的访问权限
  public void sleep() {
    System.out.println("抬着腿睡觉");
  }
  // 私有的父类方法不能重写 所以即使同名，二者也没有关系
  private void drink() {
    System.out.println("喜欢喝牛奶");
  }
}
```

```java
public class Main {
  public static void main(String[] args) {
    Animal a1 = new Animal();
    a1.eat();
    a1.sleep();
    
    Cat c1 = new Cat();
    c1.sleep();
    c1.pao();
  }
}
```

**继承中super关键字**

1）表示对父类成员的使用<br>
2）super.父类成员变量<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super.父类成员方法

```java
public class Person {
  private String name;
  private char sex;
  private int age;
  public void setName(String name) {
    this.name = name;
  }
  public void setSex(char sex) {
    this.sex = sex;
  }
  public void setAge(int age) {
    this.age = age;
  }
  public String getNmae() {
    return this.name;
  }
  public char getSex() {
    return this.sex;
  }
  public int getAge() {
    return this.age;
  }
}
```

```java
public class Teacher extend Person{
  private String major;
  private int class_id;
  public void setMajor(String major) {
    this.major = major;
  }
  public void setClassID(String class_id) {
    this.class_id = class_id;
  }
  public String getMajor(){
    return this.major;
  }
  public int getClassID(){
    return this.class_id;
  }
  public void printInfo() {
    System.out.println("老师的名字是："+ super.getNmae());
    System.out.println("老师的性别是："+ super.getSex());
    System.out.println("老师的年龄是："+ super.getAge());
    System.out.println("老师的专业是："+ this.major; //this.getMajor()
    System.out.println("老师的班级是："+ this.class_id;
  }
}
```

```java
public class Main {
  public static void main(String[] args) {
    Teacher t1 = new Teacher();
    t1.setName("王美美");
    t1.setAge(21);
    t1.setClassID(2102);
    t1.setMajor("工商管理");
    t1.setSex('F');
  	
    t1.printInfo();
  }
}
```

**Java中关于方法重写和方法重载区别**

|           | 方法重写                                                     | 方法重载                             |
| --------- | ------------------------------------------------------------ | ------------------------------------ |
| 位置      | 再子类中重新编写父类中同名的方法                             | 同一个类中                           |
| 返回值    | 父类和子类中同名方法返回值相同                               | 同名的方法，返回值无所谓             |
| 参数类型  | 父类和子类中同名方法必须相同                                 | 同名的方法必须不同                   |
| 参数个数  | 同上                                                         | 同上（如果类型不同，个数相同也不行） |
| 静态 动态 | 同属一个状态                                                 | 无所谓                               |
| 访问权限  | 重写后的方法，访问权限的方法不能低于父类中的方法（私有方法不能重写） | 无所谓                               |

**this和super的应用**

|          | this                         | super                                        |
| -------- | ---------------------------- | -------------------------------------------- |
| 位置     | 一个类中，代表自己类中的成员 | 在继承关系中，用于子类中使用父类的属性和行为 |
| 成员变量 | 可以代表                     | 可以代表父类的                               |
| 成员方法 | 可以代表                     | 可以代表父类的                               |
| 构造方法 | 不可以代表                   | 可以代表父类的                               |

##### 多态

某一个事物（对象、行为），在不同时刻表现出来的不同状态。

```java
public class Main {
  public static void main(String[] args) {
    Animal a1 = new Animal();
    a1.eat();
    a1.sleep();
    
    Cat c1 = new Cat();
    c1.sleep();
    c1.pao();
    
    // Java中的多态，父类引用指向子类对象
    Animal c2 = new Cat();
    c2.eat();  // 可以运行，c2对象，eat方法被重写了
    c2.catchFish();  // 报错，catchFish()没有被重写，故不能被c2调用
  }
}
```

**Java中多态的实现：**<br>
1）要有类的继承<br>
2）要有方法的重写<br>
3）父类指向引用子类对象<br>

**代码实例说明：**<br>
1）定义一个父类<br>
2）定义两个子类，分别继承同一个父类。重写父类中的方法<br>
3）定义一个主类，写一个方法，参数为父类的对象。功能为对象引用父类的某个方法	（是重写过的方法）<br>
4）主方法中，定义两个父类的对象，引用指向子类对象<br>
5）调用主类中的方法，传递两个对象。观察运行结果是否实现了多态<br>

**对于多态运行中的表现和问题：**<br>
父类 对象名 = new 子类 ();<br>

对象引用的成员的方式：

|                | 编译 | 运行 |
| :------------: | :--- | ---- |
|    成员变量    | 父类 | 父类 |
| 非静态成员方法 | 父类 | 子类 |
|  静态成员方法  | 父类 | 父类 |

**多态的优势和弊端：**<br>
1）优点：提高了维护性和扩展性<br>
2）缺点：子类忐忑又的功能无法调用

**解决多态中父类对象无法调用子类特有功能的方法：转型。**<br>
1）子类转型父类（可以通过子类中的方法、super关键字实现）——一般不用<br>
2）父类引用指向子类对象——Java中多态的标准实现方式

##### 抽象类

1、含义：把已有的类（多个类）中相同的属性和行为提取出来，抽象成一个新类的过程。其它类可以继承抽象出来的新类。

2、定义抽象类的语法：

```java
修饰符 abstract class 类型 {
  成员变量;
  成员方法
  抽象方法(实质上也是成员方法，只不过使用了abstract关键字)
}
```

**注意：**<br>
1）抽象类一定要有abstract关键字<br>
2）抽象方法一定要在抽象类中（类必须有abstract关键字）<br>
3）抽象类中可以没有抽象方法<br>
4）抽象类不能实例化对象（不能创建对象）<br>
5）抽象类要想创建对象，必须被继承（不能是抽象类）<br>
6）子类（非抽象类）继承了抽象类，必须完全重写父类中的所有抽象方法（如果有）<br>
7）子类（抽象类）继承了抽象类，不需要完全重写父类中的所有抽象方法（如果有）<br>

```java
// 定义抽象类：class之前加关键字abstract
public abstract class Animal{
  public String birthday;
  public String area;
	public void setBirthday(String birthday) {
  this.birthday = birthday;
	}
	public String getBirthday() {
  	return this.birthday;
	}  
  // 定义抽象方法，就是没有方法体（就是没有{} 的方法）
	public abstract void eat();
	public abstract void sleep();
}


public class Cat extends Animal{
  // 普通的类继承抽象类，必须将抽象类中的方法重写
  public void eat() {
    System.out.println("吃");
  }
  public void sleep() {
    System.out.println("睡😴");
  }
}

public abstract class Maoke extends Animal{
  public int leg;
  public String color;
  public abstract void run();
  public abstract void pashu();
}
```

|                  | 抽象类                                           | 非抽象类                                                   |
| :--------------: | :----------------------------------------------- | ---------------------------------------------------------- |
|     成员变量     | 可以是常量<br />也可以是变量                     | 可以是常量<br />也可以是变量                               |
|   普通成员方法   | 可以有，可以没有                                 | 虽然没有强制必须有，但是一般都有                           |
|     抽象方法     | 可以没有抽象方法<br />但是抽象方法一定要在抽象类 | 绝对没有抽象方法                                           |
|     构造方法     | 可以有，也可以没有<br />一般用来让子类使用       | 可以有，也可以没有<br />一般用来进行对象创建的时候的初始化 |
|       对象       | 不能创建对象                                     | 可以创建对象                                               |
|   子类（继承）   | 可以是抽象类<br />也可以是非抽象类               | 只能是非抽象类<br />抽象类作为子类没有实际意义             |
| 子类中的方法重写 | 需要重写父类中的所有抽象方法                     | 是否重写看代码逻辑和需求                                   |

#### 接口

含义：Java中的接口就是给类提供原本并不是本类事物所属行为的一种扩展。

> Java中三种引用数据类型：类、接口、数组

```java
public interface TestInterface {
  // 接口的成员变量
  
  // 可以定义接口的成员方法
}
interface if2 {
  
}
interface if3 {
  
}
//类实现（implements）接口
//类通过实现接口，可以获取接口中的方法、属性
//并且能够避免接口和类之间产生继承关系
public class TestIF implements TestInterface {
  
}
```

**一个类可以同时实现多个接口**<br>
语法： 修饰符 class 类名 implements 接口名1,接口名2,接口名3...{ }<br>
可以认为是”多继承“——实质是实现了多接口。<br>

**接口成员的说明：**<br>
1）成员变量。只能是变量。定义方式：public static final 数据类型 变量名 = 值;<br>
2）构造方法。接口就不是类，根本没有构造方法。<br>
3）成员方法。都必须是抽象方法。未来类都必须实现和重写接口中的所有抽象方法。<br>

```java
public interface Camera {
  public static final double jiaoju = 8.0;
  public static final int px = 30000000;
  public static final String pp = "徕卡";
  
  public abstract void tiaoJiao();
  public abstract void pai();
  public abstract void record();
}


public class Phone implements Camera {
  public void tiaoJiao() {
    
  }
  public void pai() {
    
  }
  public void record() {
    
  }
}

public class main {
  public static void main(String[] args) {
		Phone p = new Phone();
    
    p.record();
    p.pai();
    p.tiaoJiao();
    p.jiaoju;
  }
}
```

 **接口和类的关系**<br>
1）类和类的关系：可以有继承关系。但是只有单继承，不能多继承。允许多层继承。<br>
2）类和接口的关系：类实现接口；一个类可以同时实现接口。<br>
3）接口和接口的关系：可以继承、允许单继承和多继承。<br>

**接口和抽象类的区别**

|                    | 抽象类                                                   | 接口                                   |
| ------------------ | -------------------------------------------------------- | -------------------------------------- |
| 常量               | 可以有                                                   | 只能有                                 |
| 成员变量           | 可以有                                                   | 没有                                   |
| 成员方法（非抽象） | 可以有                                                   | 没有                                   |
| 抽象方法           | 可以有                                                   | 只能有                                 |
| 与类的关系         | 继承的关系  extends                                      | 实现的关系  implements                 |
| 与接口的关系       | 实现的关系                                               | 可以继承                               |
| 继承方式           | 单继承                                                   | 单继承、多继承均可                     |
| 应用中             | 子类（普通）继承抽象类，需要重写其中的抽象方法（如果有） | 类实现接口后，所有的抽象方法都需要重写 |

#### 权限修饰符

作用：Java中就是为了控制类的成员变量、成员方法的访问。
并且在不同的包（package）中，他们的访问形式也各不相同。<br>
包含的内容：public  protected  private  (缺省不写)<br>
控制的范围：同一个类中；在同一个文件中，但是在不同的类；在同一个包的不同的文件中；在不同的包中。

```java
01、02、03在一个包内，04、main在一个包内

public class Test01 {
  public void f1() {
    System.out.println("公有的方法");
  }
  protected void f2() {
    System.out.println("保护的方法")；
  }
  void f3() {
    System.out.println("默认的方法");
  }
  //私有的方法，只能本类中的内容使用
  private void f4() {
    System.out.println("私有的方法")；
  }
}

class Test02{
  public void t3() {
    Test01 t1 = new Test01();
    t1.f1();
    t1.f2();
    t1.f3();
  }
}

//此代码在另一个文件
public class Test03 extends Test01 {
  public void t3() {
    Test01 t1 = new Test01();
    t1.f1();
    t2.f2();
    t3.f3();
  }
}

//此代码在另一个文件
import demo。Test03;
public class Main {
  public static void main(String[] args) {
    Test03 t3 = new Test03();
    t3.f1();
  }
}

//此代码在另一个文件
import demo.Test01;
public class Test04 extends Test01 {
  Test01 t1 = new Test01();
  t1.f1();
}
```

|                    | public | protected | 默认 | private |
| ------------------ | :----: | :-------: | :--: | :-----: |
| 同一类中           |   ✔️    |     ✔️     |  ✔️   |    ✔️    |
| 同一包子类，其他类 |   ✔️    |     ✔️     |  ✔️   |         |
| 不同包子类         |   ✔️    |     ✔️     |      |         |
| 不同包其他类       |   ✔️    |           |      |         |

#### 其它关键字

Static关键字：<br>
1、可以将类的成员变量。成员方法设置为类的变量和方法<br>
2、经过static修饰的变量、方法都会有限分配资源，比对象要更早<br>
3、调用的时候可以直接通过”类名.成员“方式调用 （注意成员可以是变量，也可以是方法）。例如：Array.sort()就是对数组进行快速排序的时候，调用Arrays的静态方法 sort()<br>
4、注意：静态方法只能用静态的成员；非静态的方法可以访问静态的成员；局部变量不能是静态的；静态方法中不能用this。<br>

main方法<br>
形式：public static void main(String[] args)<br>
解释：public可以让JVM运行的时候，有最高的权限<br>
static可以让JVM不创建对象就可以用类名直接访问<br>
void不要返回值。但是需要让JVM访问<br>
String[] args以前可以用来进行键盘输入<br>

Package关键字<br>
1、作用：Java为了更好的管理和组织类、接口，设定的管理方式<br>
2、可以避免类名的冲突；（不同包中可以有相同的类名，调用时使用包名加以区分）还可以通过包进行权限的管理。<br>

import关键字<br>
在编程中导入程序所需的外部文件包和类、模块。<br>

Final关键字<br>
用于表示”最终、终结“<br>
1、如果是类使用了final，该类不能被继承<br>
2、如果是成员方法使用了final，该方法不能被子类重写<br>
3、如果是成员变量使用了final，该变量就成了常量<br>

#### 异常处理

Error：程序代码错误（语法错误）<br>
Warning：警告。程序编写有不合理的地方，但是不是错误。<br>
Java中异常的处理

```java
try {
  可能产生异常的代码
} catch (异常) {
  
} finally{
  
}
Java中可以使用throws语句，抛出代码运行（针对方法）的异常。直接写在方法之后。
public void haha() throws 异常名称{
  
}
```

### 移动端

基础知识省略...

测试要点：↓

- **安装、卸载测试**<br>
  不同方式渠道下载和安装；<br>
  安装包不同格式(exe、apk、dmg)；对网络需求；<br>
  对存储空间的要求；<br>
  删除安装文件和目录能否卸载软件；<br>
  卸载时有无提示；<br>
  卸载时有无进度条；<br>
  卸载软件能否删除掉所有相关软件；<br>
  安装或卸载时的特殊情况的处理(死机、重启、断电)。

- **UI测试**<br>
  界面风格统一；<br>
  导航是否直观、方便；<br>
  图片的自适应；<br>
  文本内容：准确、不违法、对违法内容要有相关限制；<br>
  图片：质量高、大小要小；<br>
  搜索功能。<br>

- **功能测试**<br>
  1）运行app：检查app的基本业务功能是否正确；<br>
  2）app的前后台切换：app处于界面运行状态(前台)，调入后台运行(不可见界面)，但是还在运行，如：音乐🎵播放不会停，聊天消息还能继续接收；<br>
  相互调入的过程中，程序运行是否稳定、可靠、正确。<br>
  3）免登陆：app是否在前后台切换中检验登录信息；<br>
  运行app登录信息的存留和使用是否保存上一次的内容；<br>
  切换账号是否可以保证原账号信息被替换；<br>
  同一账号被不同设备的app登录是否有提示且友好；<br>
  4）数据更新。确定更新数据的方式：手动/自动；<br>
  在什么功能自动、什么功能手动；<br>
  数据更新有没有缓存；<br>
  app在前后台运行期间是否需要数据更新；<br>
  数据更新时有没有提示。<br>
  5）离线浏览。app没有网络时，缓存数据依然可以查看；无论app是否前后台切换、是否锁屏再解锁都能查看；<br>
  在服务端数据发生变化、更新时，是否同步提示客户端app。<br>
  6）app更新。更新要有提示。非强制更新app，用户不更新也能正常使用。并且每次运行都是提示；<br>
  强制更新的app，用户不更新不可以使用，并且每次运行都提示强制更新；<br>
  更新时是否需要下载安装包；<br>
  更新时是否只更新部分资源文件；<br>
  7）定位、相机等权限的使用。app使用权限都需要用户许可；<br>
  在没有用户许可的情况下，不得私自调用相应的权限。<br>
  8）时间测试。主要重点是时区的调整(地理知识)。<br>
  9）push测试。服务端按照规则推送消息，app客户端能够接收消息；<br>
  用户不开启app的通知权限，则不接收推送消息；<br>
  免打扰时间段，app不接收推送消息，否则就接收推送消息；<br>
  推送消息是否区分登录与不登录。例如：有些app要保证按照要求，不登录的时候接收不到推送；
  需要真机测试。

  *`以上针对各种app的基本功能都适用。`*

- **性能测试**<br>
  1）极限测试。app在系统各项资源处于某种临界值的时候的测试。
  网速、电量、存储空间、温度、湿度。<br>
  2）响应能力。app运行中各种操作的响应时间是否满足用户需要。<br>
  3）压力测试。app长时间、反复运行对系统资源的消耗。<br>
  4）基线测试。与竞争对手产品的对比测试。
- **交叉事件测试**<br>
  当一个app运行时，其它事件或者操作同时进行或者打断时app的表现，如 微信视频和来电、视频时拍照、音乐和视频一同播放▶️的效果。
- **兼容测试**<br>
  与本机或者主流app是否兼容。一般安全类app互不兼容；<br>
  网络兼容。wifi、5G、4G、3G等网络模式能否兼容。一般wifi和4G的互转测试比较重要。
  屏幕分辨率、屏幕尺寸的兼容。同一个app 的运行效果。
  不同品牌之间互相兼容。同一个app在不同品牌手机上的运行效果。
  不同版本的操作系统上，应该兼容。注意：app 的运行对系统版本的要求应该重点关注。
- **升级、更新测试**<br>
  是否强制升级和更新
  升级和更新会不会下载新的资源文件
  离线更新和在线更新的区别
  更新时意外重启、断电、断网、关机，对app 的影响
  更新中取消更新会不会不能再用了
- **用户体验测试**<br>
  多从用户的使用习惯上进行说明。主观性较强。
- **硬件环境测试**<br>
  手势操作。结合屏幕功能键等进行，在app运行时观察运行功能和状态。
  网络环境。结合不同网络速度、时间、状态，对app运行过程进行检测。
- **接口测试**<br>
  主要针对服务器进行。检查接口接收和返回的数据是否正确、准确、安全、可靠、稳定。常用工具进行，需了解接口测试、数据形式、app的接收数据的表示结果。
- **客户端数据库测试**<br>
  移动端操作系统在对app的数据进行管理。
  保证客户端的数据库能够正常使用，并且能够按照需求正常工作。
- **安全性测试**<br>
  app的使用操作系统的权限安全性上，app需要的权限允许是正常的，不需要的权限或者私自强制获取用户权限都是不安全的。<br>
  安装、卸载的安全性。安装包本身经过加密后的密钥和软件正版发现的密钥保持一致。<br>
  数据安全行。app的数据在本机设备存储、与服务器交互中不会发生泄露、被攻击、被拦截等不安全事件的发生。<br>
  通讯安全。打电话、发短信、蓝牙数据传递中，过程是安全，不被拦截获取信息。

  *`以上针对各种app的基本功能都适用。`*

### Android

2003年成立，05年被Google公司收购，07年开源。

#### Android系统的基本结构：

​	Linux内核层
​	Android函数库和Android运行的虚拟机
​	应用程序框架
​	应用程序

#### Android系统运行的原理：

​Java源代码(app本身的开发语言)先经过Java编译器编译生成Java字节码文件(.class)<br>
​然后再经过Dex编译器，生辰Android的字节码文件<br>
​最后Android 字节码文件交给Android虚拟机运行(Dalvik VM)。<br>
所以，注意Android应用程序经常性崩溃、死机、闪退无响应都是编译次数过多和虚拟机运行无法保障运行结果的准确。

Android应用程序的开发语言是Java。

------

#### 测试常见术语

1、系统碎片化。指的是Android平台下，手机设备差异化很大。<br>
1）操作系统版本上。虽然有原生的Android系统，但是由于开源，各大手机厂商都会根据自己用户的特点进行美化、改进。<br>
2）手机品牌众多。每个品牌都有不同的产品型号和配置。<br>
3）硬件配置上，各种各样。<br>
4）app需要针对设备厂商、操作系统进行单独的优化<br>

2、屏幕尺寸，屏幕对角线的长度，单位是英寸。

3、屏幕分辨率：
分辨率考察屏幕显示信息的精密度。分辨率越大，精密度越高，图像就会越真实。同一个图像在不同分辨率的显示器中，显示效果会有不同。

4、像素(px)

以小方格的形式展现图形。屏幕上有多少像素，也就成为分辨率。一个图片占用的存储空间，跟像素的数量、每个像素的颜色有直接关系。

5、网络制式名称

2G：GPS通信。
3G：WCDMA/CDMA2000
4G：TD-LFE

#### Android的构成：

1）Activity(冻结)。就是Android应用的界面。与用户交互的主要方式。界面涉及到效果会直接影响用户的使用。<br>
2）Service(服务)。就是用户程序切换到后台运行的形式。app一旦运行成功，服务就开始运行到手机关机，或者该app 的后台服务关闭。Service承担着app大多数的数据处理工作。<br>
3）ContentProvider(内容提供者)。给Android的app提供数据的存储、读取。数据存取来源有：Android系统数据库(SQLite)、文件、xml、网络等。<br>
4）BroadCastReceiver(广播接收器)。主要负责Android应用的推送消息的接收。需要注意，广播的发送者和接收者是异步。发送者不关心有没有接收者，也不关心接收者何时会收到。

#### **Android应用测试环境搭建**

明确：所有的移动端app的测试，都是C/S(绝大多数)或者B/S。移动端就是客户端。所有的数据都需要和服务端交互。
其次，服务器环境的配置和搭建与app测试的环境没有直接关系。
一般所说的app的测试环境特指app运行所需的硬件、网络以及与其相关其它app。<br>

1、真机测试。在实际的真实手机设备上安装app，进行安装、功能，性能，兼容，卸载等各方面的测试。真机测试是必须的，因为拥有模拟器所不具有的功能。例如： 定位、相机、消息推送等功能测试。第三方模拟器。<br>
2、就像VMware一样，可以创建Android操作系统，模拟运行APP。常用的模拟器有：tTools、雷电、夜神、腾讯手游、网易mumu等很多。<br>
3、Android自带的模拟器。一般Android开发人员使用较多。消耗资源较多；启动特别慢；优点：纯Android原生系统。<br>
补充：云真机测试。1. Testin云测平台 2. 百度移动测试中心

Android(安卓)应用开发环境搭建

1、搭建和配置Java开发环境(安装和配置JDK和环境变量)

2、下载和解压缩ADT工具。包含Eclipse、SDK、SDK Manager

3、配置Android开发环境的变量。<br>
	1）在系统环境变量中，在用户变量中创建（可可以在系统变量中创建）<br>
			名：ANDROID_SDK_HOME<br>
			值：sdk所在目录<br>
	2）在系统环境变量的path中，添加<br>
			%ANDROID_SDK_HOME%\platform-tools<br>
			%ANDROID_SDK_HOME%\tools<br>
	3）配置完成后，在cmd中运行adb命令，查看运行结果。

4、启动ADT中的Eclipse，创建Java项目。<br>
	1）创建app 的过程。<br>
	2）编辑app的界面(Activity)<br>
	3）编写Java程序(app逻辑运行代码)<br>

5、使用Android Virtual Device Manager进行创建Android自带模拟器<br>
	1）先创建对应的设备（手机的型号和硬件设置）
	2）创建模拟器（确定模拟器操作系统、运行内存、存储空间等）
	3）启动模拟器
模拟器和真机操作有相通之处，在测试中也作为一种测试手段

#### ADB命令

含义：全程Android Debug Bridge（安卓调试桥），主要用于电脑端与模拟器或者真机进行交互。<br>

主要功能：<br>
1、电脑端进行Android的shell命令；<br>
2、对Android应用。设备进行管理；<br>
3、在电脑与Android设备之间进行文件互传，<br>

主要常见命令：<br>
1）开启、关闭adb服务。如果adb服务没有启动，则无法正常连接Android设备。<br>
			adb kill-server<br>
			adb start-server<br>

2）查看电脑端连接的Android设备。<br>
​			adb devices

3）安装和卸载Android应用(apk文件)<br>
​			安装：保证电脑和Android设备是连接状态。其次若是只连接一台设备，可以直接安装，多台设备，则需要指明安装在哪一台上。<br>
​			adb install apk 文件名和路径(在电脑上)不指定设备(只有一台设备)<br>
​			adb uninstall <软件包名称> 软件包的名称不是桌面图标的名称。而是需要用其它命令去查询
​			如果有多个设备，想单独操作真机设备(多个设备中只有一个真机)：<br>
​			adb -d install<br>
​			如果有多个设备，想单独操作模拟器设备(多个设备中只有一个模拟器)：<br>
​			adb -e install<br>
​			还可以使用具体的设备序列号进行<br>
​			adb -s install

​	4）查看Android系统的安装的app的包<br>
​			adb shell pm list packages<br>
​			卸载app<br>
​			adb uninstall 包名

​	5）文件的上传和下载<br>
​			文件类型上，注意和了解Android和Windows的文件系统区别<br>
​			文件路径上，尤其是Android系统文件路径，有些事链接文件(开头文件属性为l)<br>
​			文件权限上，如果权限不足，也无法操作文件的上传和下载。<br>
​			将文件从电脑上传到Android ↓<br>
​			adb push <PC文件路径和名称> <Android文件路径和名称><br>
​			将文件从Android下载到电脑 ↓<br>
​			adb push <Android文件路径和名称> <PC文件路径和名称>

​	6）查看Android系统运行日志<br>
​			在命令行中（只看）：adb logcat  如果命令行运行结束，则信息就不便保存<br>
​			如果需要保存日志数据信息：adb logcat > (目录和指定的文件)<br>
​			Android Q系统有两个日志文件：/dev/log/main和/dev/log/system。但是由于系统原因不应该被查看，所以只能通过输出日志信息的方式查看里面的内容<br>
​			Android中对日志信息的过滤：<br>
​			adb logcat 标识 优先级 > 文件<br>
​			过滤后的日志数据，有可能失去了准确性。只记录了异常信息和错误信息发送的位置，但是没有前因后果。<br>
​			一般都是所有的日志数据都保留着，然后利用相关的需求和技术手段分析错误和错误的关联性。<br>
​			**控制日志的输出格式**<br>
​			adb logcat -v 具体参数选项 > 文件<br>
​			一般根据需要，控制日志输出的内容。一般需要时间的格式更多一些。<br>
​			adb logcat -v time >d:\app_test\log3.txt<br>

### Monkey

含义：Monkey测试的时候，所有的操作事件都是随机发生的。不以人的意志为变化。Monkey测试的时候，由于事件都是随机、无序的，所以不做功能方面的测试，只对app进行性能、稳定性方面的测试。<br>
Monkey测试的时候，需要长时间、大量的操作事件。<br>

特征：Monkey测试的时候，只针对app应用，具有一定的局限性。<br>
Monkey测试的时候，事件的类型、运行的数量、运行的频率是可以设置的。<br>

进入Monkey模式<br>
命令行输入：adb shell。进入到如下(举例的模式)<br>
root@iToolsAVM_T0023696S:/<br>
1.查看应用程序列表。pm list packages<br>

2.运行指定的app包n次，使用-p参数。monkey -p app包名 运行次数(n)<br>
例如：monkey -p com.youba.calculate 1000<br>
如果不指定运行的app的包名，则会将所有的app都运行。<br>

3.Monkey中设定运行中显示的日志信息的详细程度。-v参数。<br>
-v。默认的详细度。启动、开始、完成、结果信息。<br>
-v -v，在1级的基础上，外加Activity的发送的消息。<br>
-v -v -v。所有的Activity的信息。<br>
例如：monkey -p com.youba.calculate -v -v -v 1000<br>
日志信息越详细，越有利于出问题时找到问题所在。<br>

4.Monkey中设定运行时采用相同的随机事件组合。参数：-s。如果两次测试的-s值相同则会使用相同的随机事件顺序。<br>
例如：monkey -p com.youba.calculate -v -s 100 10<br>

5.Monkey测试利用参数-throttle设定操作事件之间的时间延迟，也就是可以让测试过程稍微显得真实一些。throttle参数的单位是毫秒。<br>
例如：monkey -p com.youba.calculate -v -v -v --throttle 1000 50<br>

6.Monkey测试中，设定操作事件的频率(百分比)。<br>
使用参数 -pct-事件类型 百分比。<br>
例如：monkey -p com.youba.calculate -v -v --pct-touch 50 --pct-trackball 20 --throttle 1000 50<br>
Monkey中常见的操作事件：<br>
Touch、Trackball、Appswitch、Anyevent<br>

Monkey命令的参数，没有特别强制性的顺序，可以按照monkey命令的帮助列表的参数顺序记忆和使用。<br>

Monkey测试中，APP异常情况的分析<br>
出现异常情况的原因<br>
1）随机的各种操作，没有任何逻辑和流程<br>
2）长时间的操作，功能和界面之间互相调用，消耗大量的系统资源<br>
3）操作之间的时间间隔太短会造成异常。<br>

常见的异常及应对策略：<br>
1、空指针异常（NullPointerException）。对比app运行日志记录，分析代码找出原因。<br>
2、Debug异常（lllegalStateException）。一般常见于程序代码本身的错误。<br>
3、低内存异常（OutOfMemoryError）。内存空间不足的时候。<br>
4、操作已响应异常（TimerOut）。频繁的操作导致某些功能无响应。<br>
5、系统重启异常（RestartSystem）。可能是误操作，也可能是系统崩溃。<br>
6、运行时异常（RunTimeException）。一般在无响应之后。<br>
7、数据读取异常（ReadException）。数据库数据读取异常。<br>
8、非法参数异常（lllgalArgumentException）。方法调用时参数传递非法。<br>

在使用Monkey测试的时候，如何更好的提交bug：<br>
1、首先要阅读和分析app测试的日志。找出问题(哪里有问题)<br>
2、结合提交bug的流程，将所需的日志内容截图，原文照搬。<br>
3、如果能力或者权限足够、可以通过阅读代码的方法，进行bug的追根。<br>

monkey主要用于app的性能和稳定性方面的测试。<br>

### Appium

**简介：**<br>
1、appium核心功能：用于对移动端应用进行自动化测试。移动端应用包含：原生app（IOS、Android、Windows Phone平台）、移动Web应用（使用手机浏览器能够打开运行的）、混合应用（在app中封装网页源代码）。<br>
2、Appium与Selenium也是有关联的。Appium封装了标准的selenium类库。<br>
3、Appium支持多平台应用：Mac、Windows、Linux。也支持多种脚本语言：Java、 Python、JS、PHP、Ruby等其他语言。<br>
4、运行原理和过程：<br>
​	1）通过appium的对应开发语言的客户端(通过Java-client)，写脚本语言。<br>
​	2）通过脚本语言，控制appium服务(可以单独使用appium的服务端，也可以使用包含服务端的appium桌面程序)<br>
​	3）Appium相当于驱动一样，控制脚本中设定的模拟器或者真机设备中指定的app、app的界面，进行自动运行。<br>

**Appium环境搭建：**​<br>
本环境搭建过程适用于：以Java语言为基础、在Windows平台下，进行Android应用的自动化测试。其它平台的搭建过程类似。<br>
1、所需软件：JDK、ADT、Appium、Node.js、Java开发appium的相关组件<br>
2、配置过程：<br>
	1）首先配置Java的开发环境，安装JDK，配置环境变量<br>
	2）配置ADT环境（Android开发环境）<br>
	3）安装Node.js<br>
	4）安装appium<br>

| 对比点         | 移动端自动化测试                                             | Web端自动化测试                      |
| -------------- | ------------------------------------------------------------ | ------------------------------------ |
| 测试对象       | 运行在移动设备上(Android、IOS、Windows Phone、模拟器)的移动应用 | 运行在Linux、Mac、Windows上的Web应用 |
| 脚本语言       | Java、Python、都行                                           | Python、Java等都行                   |
| 工具平台       | Appium                                                       | Selenium+浏览器驱动                  |
| 其它插件       | Appium对应的java客户程序Selenium支持                         | 不需要                               |
| 自动化测试框架 | Junit                                                        | Unittest                             |

3、使用Java编写和创建Appium的测试项目。<br>
	1）创建一个Java项目<br>
	2）在项目中创建一个lib目录，将appium相关的三个开发工具包放入<br>
	3）将2)中放入的三个jar包，添加到项目的路径中(build path---add to build)<br>
	4）接下来就可以编写脚本，通过appium运行移动应用程序。<br>

Appium要能够运行，必须确定测试平台、app的相关信息和属性，需要用到一个关键的内容：DesiredCapabilities。<br>
需要确定相关的属性：deviceName、automation Name、platformName、platformVersion、appPackage、appActivity。<br>
查包名：adb shell pm list packages<br>
查Android系统版本：adb shell getprop ro.build.version.release<br>
查看前台activity：adb shell dumpsys activity activities | grep mFocusedActivity<br>

> adb shell dumpsys activity activities | findstr mFocusedActivity

​	注意Windows不支持grep的话，就直接使用adb shell dumpsys activity activities 在查询结果中找到mFocusedActivity<br>

**移动端app元素的识别**<br>
以Android系统的app为例，使用ADT环境中的sdk目录下，tools目录中的uiautomatorviewer.bat实现。<br>
操作步骤：双击运行，待弹出界面后，点击device Screenshot。<br>

识别元素的属性和定位的语句

| 识别元素的方式      | 属性                      | 定位语句                                            |
| ------------------- | ------------------------- | --------------------------------------------------- |
| id                  | Resource-id               | findElement(By.id())                                |
| name                | text                      | findElement(By.name())                              |
| class name          | class                     | findElement(By.className())                         |
| xpath               | 元素所属的xml中的路径标识 | findElement(By.xpath())                             |
| AccessbilityID      | Content-desc              | findElementByAccessbilityId()                       |
| Android UIautomator | 元素的Text                | findElementByUIAutomator("new UiSelector().text()") |

注意：从Android开发的角度，每一个元素的属性都是不同的。因此在元素定位的时候，不存在使用除了id以外的其他方式定位（仅限于原生app）。如果是混合类型的app（包含或者内嵌了web页面），需要使用其他方式。

注意：在Android开发中，界面（Activity）是在xml文件中进行设计的，所以在使用xpath进行元素定位的时候，语法格式与web自动化中使用的语法相同。（不管是xml还是html文件，都是属于XML——扩展标记语言）

**使用appium可以进行的操作**<br>
Appium是针对移动端进行的自动化测试，和selenium在web自动化中一样，selenium除了可以对页面的元素进行操作，还可以对浏览器窗口本身进行操作。<br>
Appium也可以对Android系统中相关的功进行操作。

1、对应用程序可以进行的操作<br>
安装<br>
卸载<br>
重置<br>
检查是否安装<br>
启动<br>
关闭<br>
app放置后台运行<br>

2、模拟输入和点击<br>
输入：sendKeys()<br>
点击：click()<br>

3、模拟手势<br>
按压<br>
长按<br>
点击（tap）<br>
暂停<br>
移动<br>
释放<br>
发送到服务器<br>

4、设备相关操作<br>
息屏<br>
滑动<br>
文件传输<br>
收起键盘<br>

### Junit

1、Java语言编写<br>
2、用于Java程序的单元测试<br>
3、体现了一种“”先测试后编码的思想，可以提高开发人员编程的质量和稳定性<br>
4、自动化的进行单元测试。具有以下优势：<br>
1)效率高，速度快。<br>
2)投入人力资源较少。<br>
3可信度较高，精确度高。<br>
4)可程序化，编写复杂的逻辑判断代码。<br>

5、框架的特点:<br>
1)简单，容易理解和编写代码<br>
2)可以组织测试套件、包含测试用例和流程<br>
3)对测试流程进行运行和测试<br>
4)包含断言可以对测试结果进行判断<br>

6、使用Junit完成一次单元测试用例设计的过程<br>
1)准备好被测的应用程序。以及该程序的需求<br>
2)组建和配置Junit环境(JDK环境配置必须无误)<br>
3)编写代码——就是为了完成测试用例中的步骤和测试数据<br>
4)使用断言——就是为了设计程序的预期结果，以及对实际结果的判断。<br>
5)使用套件、组织和添加测试用例——就是为了设计好测试用例的执行顺序<br>
6)运行测试流程——就是执行测试、对比和查看测试结果（实际结果）<br>

7、安装和配置Junit环境<br>
1)安装和配置JDK (1.8)<br>
2)创建一个Junit目录，包含junit-4.13.1.jar文件<br>
3)在系统环境变量中添加JUNIT_HOME变量，其值为JUNIT的目录路径<br>
4)在系统环境变量中添加classpath变量，其值为%JUNIT_HOME%\junit-4.13.1.jar<br>

8、JUnit完整的特性<br>
1)作为完整的测试工具。用于继承TestCAse,类；可以使用setUp()或者tearDown()等方法完成类和测试用例的设计。<br>
2)可以创建和整合测试套件，将不同类的测试用例进行整合。使用TestSuite。<br>
3)可以执行测试。使用runClasses()进行。‘<br>
4)可以对测试进行分类。<br>

**Junit的核心内容**<br>
1、核心模块和功能<br>
2、Assert模块。提供各种各样的断言方法，让程序能够自动运行并判断结果。使用时可以直接用Assert.方法名（参数)。该形式不建议使用。<br>
3、TestCase模块。提供测试用例的设计方法和其他统计和信息完善类的方法。<br>
4、TestResult模块、运行测试，并且针对测试结果进行数据统计。<br>
5、TestSuite,模块。将测试用例模块内容进行统计，运行并结合测试结果模块给出测试结果。<br>

### 阶段总结

**移动端测试**<br>
1、移动端的测试要点:安装、卸载、更新、界面、功能（最多)、兼容、安全、性能、用户体验、交叉事件、硬件和手势交互。'<br>
2、Android移动应用测试<br>
1) Android的基本结构<br>
2) Android应用的四大组成部分<br>
3) Android开发环境和测试环境的搭建<br>
4) Adb命令的应用<br>
5) Monkey命令的应用<br>

**Java语言基础**<br>
1、JDK的安装和环境配置。<br>
2、使用Eclipse 编写Java代码<br>
3、Java中的数据类型：名字和关键字<br>
4、Java中的运算符。<br>
5、Java中的标识符和定义规则。<br>
6、Java中的语句结构。顺序、分支(if-else、switch-case)、循环(while、for 、do-while)<br>
7、Java中的数组。[]；定义—初始化---引用和使用。下标初始值、最大值；数组的排序算法（快速、冒泡、插入排序)<br>
8、Java中的方法先定义。重载：没有返回值的void；有参数的时候（参数类型和参数名必须写)；都是独立的功；方法不调研，永远不执行(构造方法除外)<br>

9、面向对象部分。封装——类（成员变量、成员方法；<br>可以是公有的public、private、protected、可以不写修饰符；<br>对本类的方法、成员变量的使用this)；<br>继承(单继承； extends表示继承；<br>使用super引用父类的方法；<br>子类可以重写父类的方法) ；<br>多态(继承、方法重写、父类指向引用子类对象；<br>使用其他方法将对象作为参数传递可以实现多态)<br>

10、抽象类、抽象方法的概念、关键字、与普通方法的区别<br>
11、接口的定义、与类、接口的关系，关键字、理论知识点<br>
12、其他关键字(final  static  权限修饰符、包、导入)<br>
13、 Java中的异常。try catch   finally   throws<br>

**appium环境**<br>
1、安装和配置环境appium<br>
2、真机、模拟器（和电脑使用adb.命令能够连接成功)<br>
3、每次运行都要开启服务<br>
4、主要的app的属性设置(DesiredCapabilities)<br>
5、创建AppiumDriver对象，正确的编写URL地址<br>
6、元素的识别（充分利用adb命令、adt中的uiautomatorviewer.bat工具)<br>
7、编写逻辑代码<br>

**使用Junit 组织和管理测试用例（测试类中的万法）**

1、配置Junit的环境(较新版本的Eclipse直接就支持Junit)(如果配置中Junit 不被识别，可以将junit的文件名中关于版本号的标识全部去掉)<br>
2、利用JUnit编程的流程<br>
1)编写测试类Testcase，利用Assert判断<br>
2)创建测试套件TestSuite<br>
3)创建测试结果和运行TestResult <br>
4)执行测试（必须放入主方法)。一<br>

> 所有的自动化测试.最有价值的地方不在于：使用什么语言，使用什么工具，工具如何操作，环境如何配置。只有代码编写的逻辑顺序才是最有价值的。

游戏测试<br>
游戏测试主要分为两部分组成：<br>
1、传统的软件测试<br>
2、游戏本身的测试<br>

游戏本身的测试有以下几个特性:<br>
1.游戏情节的测试：主要指游戏世界中的任务系统的组成，也称为游戏世界的事情驱动<br>
⒉.游戏世界的平衡测试：经济平衡，能力平衡，保证游戏世界的相对竞争公平<br>
3.游戏文化的测试：游戏世界的风格，是哪个国家的文化主导的<br>

游戏开发的阶段<br>
1.概念开发阶段<br>
2.试生产阶段<br>
3.开发阶段<br>
4.Alpha阶段(内部测试版)<br>
5.Beta阶段（公开测试版）<br>
6.生产发布阶段<br>
7.补丁阶段<br>
8.升级阶段<br>

### 该了解的浏览器知识

#### 1.浏览器输入URL到显示页面发生了什么？

**1.1在浏览器中输入url**

**1.2查看浏览器缓存**

​	如果访问过该url，会先进入浏览器缓存中查询是否有要请求的文件（浏览器缓存是在本地保存资源副本）。

​	当浏览器发现请求的资源已经在浏览器缓存中存有副本，它会拦截请求，返回该资源的副本，并直接结束请求，而不会再去源服务器重新下载。如果缓存查找失败，就会进入网络请求过程了。

**1.3DNS域名解析**

​	如果没有访问过该url，就会进行DNS域名解析了。<br>
​	IP地址和域名一样都是用来做网络标识的，域名和 IP 地址是一一对应的映射关系。

```js
DNS解析过程：

1.3.1 用户主机上运行着DNS的客户端，就是我们的PC机或者手机客户端运行着DNS客户端。

1.3.2 浏览器将接收到的url中抽取出域名字段，就是访问的主机名，
比如www.feng.com, 并将这个主机名传送给DNS应用的客户端.

1.3.3 DNS客户机端向DNS服务器端发送一份查询报文，
报文中包含着要访问的主机名字段（中间包括一些列缓存查询以及分布式DNS集群的工作）。

1.3.4 该DNS客户机最终会收到一份回答报文，其中包含有该主机名对应的IP地址。

1.3.5 一旦该浏览器收到来自DNS的IP地址，就可以向该IP地址定位的HTTP服务器发起TCP连接。
```

**1.4获取端口号**

​	可能域名下有多个端口号，对应着不同的网络功能，所以在DNS解析之后，浏览器还会获取端口号。

**1.5建立TCP连接**

​	TCP连接，就是耳熟能详的三次握手好朋友，四次挥手是路人。

```js
1.5.1 服务端通过socket，bind和listen准备好接受外来的连接，此时服务端状态为Listen
。
1.5.2 客户端通过调用connect来发起主动连接，导致客户端TCP发送一个SYN（同步）字节，
告诉服务器客户将在（待建立的）连接中发送的数据的初始序列号，客户端状态为SYN_SENT。

1.5.3 服务器确认（ACK）客户的SYN，并自己也发送一个SYN，它包含服务器将在同一连接中发送数据的初始序列号。

1.5.4 客户端确认服务的ACK和SYN，向服务器发送ACK，客户端状态ESTABLISHED。

1.5.5 服务器接收ACK,服务器状态ESABLISHED。
```

**1.6HTTP请求**

既然握手成功了，连接到了Web服务器，浏览器会根据解析到的IP地址和端口号发起HTTP请求。

```js
1.6.1 http协议向服务器发送请求，发送请求的过程中，
浏览器会向Web服务器以Stream(流)的形式传输数据，
告诉Web服务器要访问服务器里面的哪个Web应用下的Web资源。

1.6.2 服务器接收到浏览器传输的数据后，开始解析接收到的数据，
服务器解析请求里面的内容时知道客户端浏览器要访问的是应用里面的哪这个Web资源，
然后服务器就去读取这个Web资源里面的内容，将读到的内容再以Stream(流)的形式传输给浏览器。
```

**1.7关闭TCP**

```js
TCP连接中止过程：
1.7.1 某端首先调用close，成为主动关闭端，向另一端发送FIN分节，
表示数据发送完毕，此时主动关闭端状态FIN_WAIT_1；

1.7.2 接收到FIN的是被动关闭端，FIN由TCP确认，先向主动关闭端发送ACK，
作为一个文件结束符传递给接收端应用进程（放在已排队等候该应用进程接收到的任何其他数据之后），
因为FIN的接收意味着接收端应用进程在相应连接无额外数据可接收，
接收端状态CLOSE_WAIT；主动关闭端接收到ACK状态变为FIN_WAIT_2；

1.7.3 一段时间后，接收端接收到这个文件结束符的应用进程调用close关闭套接字，
向主动关闭端发送FIN，接收端状态为LAST_ACK；

1.7.4 主动关闭端确认FIN，状态变为TIME_WAIT，
并向接收端发送ACK，接收端接收到ACK关闭TCP，而主动关闭端一段时间后也关闭TCP；
```

**1.8浏览器渲染**

当浏览器获得一个html文件时，会自上而下的加载，并在加载过程中进行解析渲染。<br>
1. 浏览器会将HTML解析成一个DOM树，DOM 树的构建过程是一个深度遍历过程：当前节点的所有子节点都构建好后才会去构建当前节点的下一个兄弟节点。
2. 将CSS解析成 CSS Rule Tree 。
3. 根据DOM树和CSSOM来构造 Rendering Tree。注意：Rendering Tree 渲染树并不等同于 DOM 树，因为一些像 Header 或 display:none 的东西就没必要放在渲染树中了。

4. 有了Render Tree，浏览器已经能知道网页中有哪些节点、各个节点的CSS定义以及他们的从属关系。下一步操作称之为Layout，顾名思义就是计算出每个节点在屏幕中的位置。
5. 再下一步就是绘制，即遍历render树，并使用UI后端层绘制每个节点。

#### 2.浏览器是如何解析代码的？

**2.1解析HTML**

HTML的解析是逐行解析。

**2.2解析CSS**

CSS选择器的读取顺序是从右向左。

**2.3解析JS**

当浏览器遇到js代码时，js解析器解析js代码，解析器会找到js当中的所有变量、函数、参数等等，并且把变量赋值为未定义(undefined)。这里就涉及到一个作用域链的问题。整个解析过程像是一条链子一样。由上向下，由里到外。局部能够读写全局，全局无法读写局部。

#### 3.浏览器的垃圾回收机制

由于字符串、对象和数组没有固定大小，所有当他们的大小已知时，才能对他们进行动态的存储分配。JavaScript程序每次创建字符串、数组或对象时，解释器都必须分配内存来存储那个实体。只要像这样动态地分配了内存，最终都要释放这些内存以便他们能够被再用，否则，JavaScript的解释器将会消耗完系统中所有可用的内存，造成系统崩溃。

JavaScript的解释器可以检测到何时程序不再使用一个对象了，当它确定了一个对象是无用的时候，他就知道不再需要这个对象，可以把它所占用的内存释放掉了。

浏览器通常用采用的垃圾回收有两种方法：标记清除、引用计数。

**3.1标记清除**

​	这是javascript中最常用的垃圾回收方式。当变量进入执行环境是，就标记这个变量为“进入环境”。从逻辑上讲，永远不能释放进入环境的变量所占用的内存，因为只要执行流进入相应的环境，就可能会用到他们。当变量离开环境时，则将其标记为“离开环境”。

​	垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记。然后，它会去掉环境中的变量以及被环境中的变量引用的标记。而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后。垃圾收集器完成内存清除工作，销毁那些带标记的值，并回收他们所占用的内存空间。

**3.2引用本次**

​	引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型赋值给该变量时，则这个值的引用次数就是1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数就减1。当这个引用次数变成0时，则说明没有办法再访问这个值了，因而就可以将其所占的内存空间给收回来。这样，垃圾收集器下次再运行时，它就会释放那些引用次数为0的值所占的内存。大多数浏览器已经放弃了这种回收方式。

#### 4.浏览器的本地存储

**4.1cookie**

​	Cookies 是最早的本地存储，是浏览器提供的功能，并且对服务器和 JS 开放，这意味着我们可以通过服务器端和客户端保存 Cookies。不过可以存储的数据总量大小只有 4KB，如果超过了这个限制就会忽略，没法进行保存。

​	HTTP协议本身是无状态的。什么是无状态呢，即服务器无法判断用户身份。Cookie实际上是一小段的文本信息（key-value格式）。客户端向服务器发起请求，如果服务器需要记录该用户状态，就使用response向客户端浏览器颁发一个Cookie。客户端浏览器会把Cookie保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同该Cookie一同提交给服务器。服务器检查该Cookie，以此来辨认用户状态。

**4.2 Local Storage Session Storage**

​	Local Storage 与 Session Storage 都属于 Web Storage。Web Storage 和 Cookies 类似，区别在于它有更大容量的存储。其中 Local Storage 是持久化的本地存储，除非我们主动删除数据，否则会一直存储在本地。Session Storage 只存在于 Session 会话中，也就是说只有在同一个 Session 的页面才能使用，当 Session 会话结束后，数据也会自动释放掉。

**4.3 cookie Local Storage Session Storage比较**

|                | cookie                                                       | Local Storage                                                | Session Storage                                              |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 数据的生命期   | 可设置失效时间，默认是关闭浏览器后失效                       | 除非被显式清除，否则永久保存                                 | 会话级存储，仅在当前会话下有效，会话结束，关闭页面或浏览器后被清除 |
| 存放数据大小   | 4KB左右                                                      | 5MB~10MB(浏览器不同，情况不同)                               | 5MB~10MB(浏览器不同，情况不同)                               |
| 与服务器端通信 | 每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能和安全问题 | 仅在客户端（即浏览器）中保存，不参与和服务器的通信           | 仅在客户端（即浏览器）中保存，不参与和服务器的通信           |
| 易用性         | 源生的Cookie接口不友好，开发者需要根据需求封装               | 源生接口良好，亦可再次封装来对Object和Array有更好的支持      | 源生接口良好，亦可再次封装来对Object和Array有更好的支持      |
| 应用场景       | 用户登录时，保存服务器返回的一段加密过的唯一辨识单一用户的code，用以判断当前用户登录状态，或者之前电商网站用来保存用户的购物车信息。 | Local Storage可以替代Cookie完成用户购物车信息的前端保存功能，同时可以当作HTML5游戏的本地数据的存储空间。 | 当页面存在多表单的情况下，可以利用Session Storage实现表单页拆分，优化用户体验。 |

注意：不要将系统敏感的数据保存到Cookie，Local Storage，Session Storage中，防止XSS注入的风险。因为XSS注入可以通过控制台对你的属性值进行修改。

**4.4 WebSQL**

WebSQL 与 IndexedDB 都是最新的 HTML5 本地缓存技术，相比于 Local Storage 和 Session Storage 来说，存储功能更强大，支持的数据类型也更多，比如图片、视频等。

WebSQL 更准确的说是 WebSQL DB API，它是一种操作本地数据库的网页 API 接口，通过 API 可以完成客户端数据库的操作。当我们使用 WebSQL 的时候，可以方便地用 SQL 来对数据进行增删改查。而这些浏览器客户端，比如 Chrome 和 Safari 会用 SQLite 实现本地存储，微信就采用了 SQLite 作为本地聊天记录的存储。

**4.5 IndexedDB**

IndexedDB就是浏览器提供的本地数据库，它可以被网页脚本创建和操作。它可以存储大量数据，提供了查找接口，能够建立索引。但是不属于关系型数据库（不支持SQL查询语句，更类似于NoSQL数据库）。
IndexedDB的特点：1、键值对存储 2、异步 3、支持事务 4、同源限制 5、存储空间大 6、支持二进制存储

事务是数据库的概念，**事务**( transaction)是访问并可能操作各种数据项的一个数据库操作序列，这些操作要么全部执行,要么全部不执行，是一个不可分割的工作单位。事务由事务开始与事务结束之间执行的全部数据库操作组成。

#### 5.浏览器的线程

js是单线程的，而浏览器，则是多线程的。

**5.1CPU**

CPU是计算机的核心，其负责承担计算机的计算任务。这里我们比喻为一个工厂。

**5.2进程**

进程是一个具有一定独立功能的程序在一个数据集上的一次动态执行的过程，是操作系统进行资源分配和调度的一个独立单位，是应用程序运行的载体。比喻为工厂的车间，比喻一个车间的工人，

**5.3线程**

线程是程序执行中一个单一的顺序控制流程，是程序执行流的最小单元。

**5.4浏览器的多线程**

浏览器内核是多线程，在内核控制下各线程相互配合以保持同步，一个浏览器通常由以下常驻线程组成：

- GUI 渲染线程
- JavaScript引擎线程
- 事件触发线程
- 定时触发器线程
- 异步http请求线程

#### 6.浏览器的兼容

**6.1为什么代码在浏览器中会出现兼容问题**

不同的浏览器对同一段代码有不同的解析，造成页面显示效果不统一的情况。

**6.2如何解决**

**6.2.1CSS Hack**<br>
在CSS方面，我们可以使用CSS Hack。CSS hack是通过在CSS样式中加入一些特殊的符号也就是浏览器前缀，让不同的浏览器识别不同的符号（什么样的浏览器识别什么样的符号是有标准的，CSS hack就是让你记住这个标准），以达到应用不同的CSS样式的目的。

**6.2.2polyfill**<br>
在JS方面，我们可以使用polyfill。polyfill 是一段代码(或者插件)，提供了那些开发者们希望浏览器原生提供支持的功能。程序库先检查浏览器是否支持某个API，如果不支持则加载对应的 polyfill。比如，html5的storage。不同浏览器，不同版本，有些支持，有些不支持。其实polyfill就是shim的一种。

> Shim 指的是在一个旧的环境中模拟出一个新 API ，而且仅靠旧环境中已有的手段实现，以便所有的浏览 器具有相同的行为。

**6.2.3 PostCSS**<br>
PostCSS是一个利用JS插件来对CSS进行转换的工具，这些插件非常强大，比如Autoprefixer，它可以自动帮我们加上浏览器前缀。

**6.2.4 Modernizr.js**<br>
Modernizr.js十分的强大，既能给老版本浏览器打补丁，又能保证新浏览器渐进增强的用户体验。

#### 7.浏览器的安全

**1.跨站脚本(XSS)**<br>
**2.跨站请求伪造（CSRF）**<br>
**3.界面操作劫持**<br>
**4.漏洞挖掘**<br>
**5.WEB蠕虫**<br>
**6.控制台注入代码**<br>
**7.钓鱼**

------

**等价类、边界值、因果图、判定表、正交实验法、场景法、错误猜测法、随机测试**

### 相关配套单词

|        英语         |     汉语     |
| :-----------------: | :----------: |
|        tail         |     尾巴     |
|       change        |     改变     |
|        alter        |     改变     |
|        drop         |     下降     |
|       modify        |     修改     |
|       unique        |    独特的    |
|     primary key     |     主键     |
|     constraint      |     约束     |
|        dept         |     部门     |
|     foreign key     |     外键     |
|      distinct       |  截然不同的  |
|      group by       |     集团     |
|        grade        |     年级     |
|       article       |     文章     |
|        join         |     加入     |
|        outer        |      外      |
|        inner        |    内心的    |
|       revoke        |     撤销     |
|       natural       |     自然     |
|       manual        |     手册     |
|      features       |     特性     |
|      generator      |    发电机    |
|     integration     |     集成     |
|       assert        |     断言     |
|       target        |     目标     |
|       command       |     命令     |
|        raise        |     提高     |
|       finally       |     最后     |
| Zero Division Error |  零除法误差  |
|       except        |     除了     |
|   Remote Control    |   远程控制   |
|        scelf        |     自我     |
|       pocket        |    口袋里    |
|       Lambda        |      λ       |
|        loop         |     循环     |
|     Description     |     描述     |
|       natural       |     自然     |
|       revoke        |     撤销     |
|        grant        |    格兰特    |
|      selenium       |              |
|       katalon       |              |
|   play test case    |  玩测试用例  |
|   play test suite   | 游戏测试套件 |
|       mation        |              |
|  ...  ...   ...     |   后续没更新  |





