$(function(){
	var havename=[];
	var aa=1;
	var jieshuan=0;
	var tophtml='<tr><th>商品</th><th>数量</th><th>金额</th><th>操作</th></tr>'
	var tophtml_1='<tr><th>商品名称</th><th>商品数量</th><th>商品金额</th></tr>'
	$(".jieshao p").on("click",function(){
		for(var i=0;i<havename.length;i++){
			if($(this).find("span:eq(0)").text()==havename[i].name){
				havename[i].index+=1
				havename[i].num=havename[i].index*$(this).find("span:eq(2)").text()
				aa=2
			}
		}
		newname={name:$(this).find("span:eq(0)").text(),index:1,num:$(this).find("span:eq(2)").text()}
		if(Number(aa)==1){
			console.log(havename)
			havename.push(newname);
			gethtml()
		}else if(Number(aa)==2){
			gethtml()
			aa=1
		}
	})
	
	$(".img").on("click",function(){
		for(var i=0;i<havename.length;i++){
			if($(this).find("span:eq(0)").text()==havename[i].name){
				havename[i].index+=1
				havename[i].num=havename[i].index*$(this).find("span:eq(2)").text()
				aa=2
			}
		}
		newname={name:$(this).find("span:eq(0)").text(),index:1,num:$(this).find("span:eq(2)").text()}
		if(Number(aa)==1){
			console.log(havename)
			havename.push(newname);
			gethtml()
		}else if(Number(aa)==2){
			gethtml()
			aa=1
		}
	})
	
	
	
	
	
	$("#qingkong").click(function(){
		location.reload()
	})
	结算
	// $("#jieshuan").click(function(){
	// 	alert(1)
		
	// 	$.ajax({
	// 		type:"get",
	// 		url:url+"goodslist",
	// 		async:true,
	// 		data:{
	// 			goodstype:1,
	// 			goodsnum:10
	// 		},
	// 		success:function(data){
	// 			var html="";
	// 			for (var i=0;i<havename.length;i++) { 							
	// 				html+='<tr><td>'+havename[i].name+'</td><td>'+havename[i].index+'</td><td>'+havename[i].num+'</td></tr>'
	// 			}
	// 			$("#left_4").html(html)
	// 		}
	// 	});

	// })
	
	function gethtml(){
		var html;
		var a=0;
		for (var i=0;i<havename.length;i++) { 							
			html+='<tr><td>'+havename[i].name+'</td><td>'+havename[i].index+'</td><td>'+havename[i].num+'</td><td class="shanchu">删除</td>'
		}
		$(".left_3").html(tophtml+html)
		$(".shanchu").on("click",function(){
			for(var i=0;i<havename.length;i++){
				if(havename[i].name==$(this).siblings("td:eq(0)").text()){
					havename.splice(i,1);
					gethtml()
				}
			}
			console.log(havename)
		})
	}
		
	function gethtml_1(){
		var html;
		for (var i=0;i<havename.length;i++) { 							
			html+='<tr><td>'+havename[i].name+'</td><td>'+havename[i].index+'</td><td>'+havename[i].num+'</td>'
		}
		$(".left_4").html(tophtml_1+html)
	}
	
})