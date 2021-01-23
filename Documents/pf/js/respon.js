$(function(){
	/*function topPosition(obj){
		var defaultTop=parseInt($(obj).css('top')); // 해당 개체(obj)최초 top좌표값 호출
		var position=( $(window).width()*defaultTop )/1920; //1920기준으로 비례값 계산
		$(obj).css('top',position); // 비례값으로 계산된 top좌표 정의
		$(window).resize(function(){  // 창 크기 바뀔때마다 재 실행
			var position=( $(window).width()*defaultTop )/1920;
			$(obj).css('top',position);
		});
	}
	topPosition('.maintext');
	function topMargin(obj){
		var defaultMTop=parseInt($(obj).css('margin-top'));
		var tmargin=( $(window).width()*defaultMTop )/1920;
		$(obj).css('margin-top',tmargin);
		$(window).resize(function(){
			var tmargin=( $(window).width()*defaultMTop )/1920;
			$(obj).css('margin-top',tmargin);
		});
	}
	topMargin('hgroup');*/
	function respnProp(obj,prop,defaultW){
		var defaultValue=parseInt($(obj).css(prop));
		var currentValue=( $(window).width()*defaultValue )/defaultW;
		$(obj).css(prop,currentValue);
		$(window).resize(function(){
			var currentValue=( $(window).width()*defaultValue )/defaultW;
			$(obj).css(prop,currentValue);
		});
	}
	respnProp('.maintext','top',1920);
	respnProp('hgroup','margin-top',1920);
	respnProp('.gnb','margin-top',1920);
});