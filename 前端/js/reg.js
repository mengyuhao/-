$(function() {
	//注册
	$("#reg").click(function() {
	
		if($("#username").val().length > 12 || $("#username").val().length < 6) {
			$(".username").text("用户名必须为6-12位").css("color", "red");
			$("#username").css("border", "1px solid red");
			$("#tip").css("margin-top","-70px")
			$("#tip").text("用户名错误");
			setTimeout(tip,2000)
			return;
		} else if($("#passwrd").val().length>12||$("#passwrd").val().length<6) {
			$(".passwrd").text("密码必须为6-12位").css("color", "red");
			$("#passwrd").css("border", "1px solid red");
			$("#tip").css("margin-top","-70px")
			$("#tip").text("密码错误");
			setTimeout(tip,2000)
			return;
		}else if($("#passwrd").val()!=$("#passwrdAg").val()){
			
			$(".passwrdAg").text("密码与重复密码不一致").css("color", "red");
			$("#passwrdAg").css("border", "1px solid red");
			$("#tip").css("margin-top","-70px")
			$("#tip").text("密码与重复密码不一致");
			setTimeout(tip,2000)
			return;
		} else if($("#tel").val().length>12||$("#tel").val().length<6) {
			$(".tel").text("输入正确的手机号").css("color", "red");
			$("#tel").css("border", "1px solid red"); 
			$("#tip").css("margin-top","-70px")
			$("#tip").text("手机号错误");
			setTimeout(tip,2000)
			return;
		}else{
			
			$.ajax({
				type:"post",
				url:url+"reg",
				async:true,
				data:{
					username:$("#username").val(),
					passwrd:$("#passwrdAg").val(),
					tel:$("#tel").val(),
					telcode:$("#telcode").val()
				},
				success:function(data){
					
					if(data.errcode==0){
						location.href="login.html"
					}else{
						$("#tip").text(data.msg);
					}
				}
			});
			
			
			
		}
	});
	//登录
	
	
	//重置
	$("#chongzhi").click(function(){
		$("input").val("")
	})
});