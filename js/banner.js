var indice=0;
    $(".pagination li").eq(indice).css("background","rgba(255,255,255,0.4)");
    $(".pagination li").click(function(){
        
        indice=$(this).index();
        $(".pagination li").css("background","rgba(255,255,255,0)");
        $(this).css("background","rgba(255,255,255,0.4)");
        $(".banner-content").hide();
        $(".banner-content").eq(indice).fadeIn();
    });
    setInterval(function(){
        indice++;
        if(indice>2){
            indice=0;
        }
        $(".banner-content").hide();
        $(".banner-content").eq(indice).fadeIn();
        $(".pagination li").css("background","rgba(255,255,255,0)");
        $(".pagination li").eq(indice).css("background","rgba(255,255,255,0.4)");
    },7000);
    $(".right").click(function(){
        indice++;
        if(indice>2){
            indice=0;
        }
        $(".banner-content").hide();
        $(".banner-content").eq(indice).fadeIn();
        $(".pagination li").css("background","rgba(255,255,255,0)");       
        $(".pagination li").eq(indice).css("background","rgba(255,255,255,0.4)");
    });
    $(".left").click(function(){
        indice--;
        if(indice<0){
            indice=2;
        }
        $(".banner-content").hide();
        $(".banner-content").eq(indice).fadeIn();
        $(".pagination li").css("background","rgba(255,255,255,0)");
        $(".pagination li").eq(indice).css("background","rgba(255,255,255,0.4)");
    });