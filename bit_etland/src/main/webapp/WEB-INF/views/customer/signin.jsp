<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<link rel="stylesheet" href="${css}/employee/access.css" />
<div class="grid-item" id="side_menu">
	<h1><font style="font-size: 25px">회원 로그인</font></h1>
</div>
<div class="grid-item" id="content">
<div style="height:40px"></div>	    
<form id="form">
  <div class="form-group">
    <small class="col-sm-2 control-label">UserID</small>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="customerId" name="customerId" placeholder="User Name" value="as">
    </div>
  </div>
  <div class="form-group">
    <small class="col-sm-2 control-label">Password</small>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="password" name="password" placeholder="Password" value="1234">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default" id="confirm_btn">Sign in</button>
    </div>
  </div>
</form>
</div>
<script>
$('#confirm_btn').click(function(){
	$('#form')
	.attr('method','POST')
	.attr('action','${ctx}/customer/signin')
	.submit();
});
</script>


