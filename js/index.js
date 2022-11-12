let sentaku = "";
let kazu = 0;
let count = 0;
let result = prompt('扉を何枚設置しますか', '3'); 
let sono1 = 0;
let sono2 = 0;
let sono3 = 0;
let sono4 = 0;
let kono1 = 0;
let kono2 = 0;
let kono3 = 0;
let kono4 = 0;
function alleee(){
    let set3 = document.getElementById("back");
    set3.setAttribute("onclick","");
    set3.setAttribute("id","back_");
    let set2 = document.getElementById("top");
    set2.setAttribute("src","");
    set2.setAttribute("id","top_");
if(result){
    let atari = Math.floor( Math.random() * result );
    let door = "";
    let htmle = "";
    for (let step = 0; step < result; step++) {
        if (step == atari){
            door = ""+ door +",1";
        } else {
            door = ""+ door +",0";
        }
        htmle = ""+ htmle +"<img src='images/door_close_resize.png' id='"+ step +"' class='door' onclick='openeee("+ step +","+ result +","+ atari +");'>";
    }
    let door2 = door.split(",");
    door2.shift();
    console.log(htmle);
    let output = document.getElementById("output");
    output.innerHTML = htmle;
    
    console.log("wwwww");
}
}

function openeee(num,result,atari){
    if(document.getElementById(num).getAttribute("src") == "images/door_close_resize.png"){
        if(count == 0){
            for (let step = 0; step < result; step++) {
                if(step == num){

                }else{
                    if(atari == step){
                        var open = step;
                    }else{
                    let set = document.getElementById(step);
                    set.setAttribute("src","images/door_open.png");
                    }
                }
            }
            if(atari == num){
                var hosa = Math.floor( Math.random() * result );
                while (hosa == num){
                    hosa = Math.floor( Math.random() * result );
                }
                let set = document.getElementById(hosa);
                console.log(set);
                set.setAttribute("src","images/door_close_resize.png");
                var open = set;
            }
            sentaku = num;
            count = 1;
        }else if(count == 1){
            if(num == atari){
                let set = document.getElementById(num);
                set.setAttribute("src","images/present_happy_boy.png");
                let set2 = document.getElementById("top_");
                set2.setAttribute("src","images/kuji_ken2_atari.png");
                set2.setAttribute("id","top");
                if(sentaku == num){
                    kono1 += 1; 
                }else{
                    sono1 += 1;
                }
            }else{
                let set = document.getElementById(num);
                set.setAttribute("src","images/door_open.png");
                let set2 = document.getElementById("top_");
                set2.setAttribute("src","images/kuji_ken3_hazure.png");
                set2.setAttribute("id","top");
                if(sentaku == num){
                    kono2 += 1; 
                }else{
                    sono2 += 1;
                }
            }
            sono3 = sono1 + sono2;
            kono3 = kono1 + kono2;
            sono4 = sono1 / sono3 * 100;
            kono4 = kono1 / kono3 * 100;
            document.getElementById("sono1").innerText = sono1;
            document.getElementById("sono2").innerText = sono2;
            document.getElementById("sono3").innerText = sono3;
            document.getElementById("sono4").innerText = sono4;
            document.getElementById("kono1").innerText = kono1;
            document.getElementById("kono2").innerText = kono2;
            document.getElementById("kono3").innerText = kono3;
            document.getElementById("kono4").innerText = kono4;
            let set3 = document.getElementById("back_");
            set3.setAttribute("onclick","alleee();count = 0;");
            set3.setAttribute("id","back");
            count = 2;
        }
    }else{
        kazu += 1;
        if(kazu > 10){
                let timer = setInterval(bakusoku, 100,open,sentaku,result,atari);
        }
    }
}
function bakusoku(a,b,c,d) {
    let dum = Math.floor( Math.random() * result );
    openeee(dum,c,d);
    sleep(10);
    dom = Math.floor(Math.random()*2) ;
    if(dom == 0){
        openeee(a,c,d);
    }else{
        openeee(b,c,d);
    }
    sleep(10);
    alleee();
    count = 0;
    sleep(10);
};
function sleep(waitMsec) {
    var startMsec = new Date();
   
    // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
    while (new Date() - startMsec < waitMsec);
  }