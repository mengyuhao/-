$(function() {
	//注册
	$("#login").click(function() {
	
//		alert(1)
	$.ajax({
			type:"post",
			url:url+"login",
			async:true,
			data:{
				username:$("#username").val(),
				passwrd:$("#passwrd").val()
			},
			success:function(data){
				if(data.errcode==0){
					location.href="goodslist.html";
					localStorage.setItem("username",$("#username").val());
					localStorage.setItem("token",data.tokenid);
				}else{
					$("#tip").text(data.msg);
				}
			}
		});
	});
	});
		
