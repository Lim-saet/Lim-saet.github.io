$(document).ready(function(){
    $('.to_top a').smoothScroll();

    
        // 모바일용 메뉴 보이기,숨기기 액션처리
        $('.openMOgnb').click(function(){ //보이기영역
           //  alert('메뉴보이기 액션클릭');
           // $('.header_cont').css('display','block'); // 메뉴 보이게
           $('.header_cont').slideDown("slow");
           $('#header').addClass('on');// 메뉴 눌르면 로고 안보이게
         });
           $('.closePop').click(function(){
           // $('.header_cont').css('display','none');  // 메뉴 사라지게
           $('.header_cont').slideUp("fast");
           $('#header').removeClass('on');
         });
});
