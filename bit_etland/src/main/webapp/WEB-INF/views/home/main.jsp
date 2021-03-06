<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<link rel="stylesheet" href="${css}/home/main.css" />
    <div class="grid-item" id="left">
    	고객 전용<br /><br />
    	<a href="#" id="cust_join" >회원가입</a><br />
    	<a href="#" id="cust_login" >로 그 인</a>
    </div>
    <div class="grid-item" id="right">
    	직원 전용<br /><br />
    	<a href="#" id="emp_register" >사원등록</a><br />
    	<a href="#" id="emp_access">접속승인</a>
    </div>
     <div class="grid-item" id="left">
    	알고리즘<br /><br />
    	<a href="#" id="algo_access" >접속하기</a><br />
    </div>
      <div class="grid-item" id="right">
    	객체지향<br /><br />
    	<a href="#" id="oop_access" >접속하기</a><br />
    </div>
<script src="${js}/oop.js"></script>
<script>
$('#cust_login').click(function(){
	location.assign('${ctx}/move/customer/signin');
});
$('#cust_join').click(function(){
	location.assign('${ctx}/move/customer/signup');
});
$('#emp_register').click(function(){
	location.assign('${ctx}/move/employee/register');
});
$('#emp_access').click(function(){
	location.assign('${ctx}/move/employee/access');
});
$('#oop_access').click(function(){
	/* app.main(); */
	//app.food();
	info.main();
});

</script>