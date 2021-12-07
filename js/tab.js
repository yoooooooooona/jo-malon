$(document).ready(function(){
    //탭제목을 클릭하면 해당 탭 내용 나타남
    $('.t1').click(function(){
        $('.c1').show();
        $('.c2').hide();
        $('.t1').addClass('active');
        $('.t2').removeClass('active');
    });

    $('.t2').click(function(){
        $('.c1').hide();
        $('.c2').show();
        $('.t1').removeClass('active');
        $('.t2').addClass('active');
    });
});