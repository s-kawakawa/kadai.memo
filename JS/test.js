
$(".aa").on("click", function () {

    var random = Math.floor( Math.random()*3 + 1);
    console.log(random,"ランダムな数字の箱");

    if (random === 1){
        console.log("名言1");
         $("h3").html("ココ・シャネル「翼を持たずに生まれてきたのなら、翼をはやすためにどんな障害も乗り越えなさい」");
    }else if(random === 2){
        console.log("名言2");  
         $("h3").html("ウォルト・ディズニー:「追いかけ続ける勇気さえあれば、夢は必ず叶います]");
    }else if(random === 3){
            console.log("名言3");
         $("h3").html("マリリン・モンロー:「時に、バラバラに壊れてしまうこともあるかもしれません。でもそのおかげで、それ以上に良いことが訪れるんです」");
    }

  });
  