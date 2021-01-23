$(function(){
    $(document).ready(function() {
      $('#fullpage').fullpage({
        anchors: ['1stPage', '2ndPage', '3rdPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['profile', 'About', 'portfolio1','portfolio2','contact'],
        });
        var defaultText=$('.main').text();
        $('.main').text('');
        var typingIndex=0;
        var typingText=defaultText.split('');//배열생성
        var maxNum=typingText.length;
        console.log(typingText);
        function typing(){
            if(typingIndex<maxNum){
                $('.main').append(typingText[typingIndex]);
                typingIndex++;
            }else{
                clearInterval(write);
            }
        }
        var write=setInterval(typing,100);
	});
});