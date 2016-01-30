window.onload=function(){ 
var ROW=10,COL=10;
var sence=document.getElementById('changjing');
  for(var i=0;i<ROW;i++){
    for (var j = 0; j<COL; j++) {
      var block=document.createElement('div');
      block.setAttribute('class','block');
      block.setAttribute('id',i+'_'+j);
      sence.appendChild(block);
    };    
  }


 //用数组存储蛇
 var snake=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
 var  RIGHT=39,LEFT=37,UP=38,DOWN=40;
 var  dd=RIGHT;
 var isInSnake=function(cc,dd){
   for(i=0;i<snake.length;i++){
     	if(snake[i].x==cc && snake[i].y==dd){
     		return true;
     	}
   }
     return false;
 }
 var dropFood=function(){
    var
      x=Math.floor(Math.random()*10),
      y=Math.floor(Math.random()*10);
      //当蛇的数据占满整个页面的时候 会陷入死循环;
      if(snake.length==100){
      	ischenggong('chenggong');
      	return;
      }
	  while(isInSnake(x,y)){
	  	 x=Math.floor(Math.random()*10),
         y=Math.floor(Math.random()*10);
	  }
	  document.getElementById(x+'_'+y).style.background='url(./imgs/shi.png)';
	  return {foodx:x,foody:y};
 };

 var drawSnake = function(){
 	for(i=0; i<snake.length;i++){
       document.getElementById(snake[i].x+'_'+snake[i].y).style.backgroundColor='rgb(104, 255, 104)';
      document.getElementById(snake[i].x+'_'+snake[i].y).style.borderRadius='50%';
    };
 }
 var  food = dropFood();
 drawSnake();

 var zou =function(){
    var last=snake.length-1;    
    var newHead;
    if(dd==RIGHT){
    	newHead={x:snake[last].x,y:snake[last].y+1};
    }
    if(dd==LEFT){
    	newHead={x:snake[last].x,y:snake[last].y-1};
    }
    if(dd==DOWN){
    	newHead={x:snake[last].x+1,y:snake[last].y};
    }
    if(dd==UP){
    	newHead={x:snake[last].x-1,y:snake[last].y};
    }

    if(newHead.x>9||newHead.x<0||newHead.y>9||newHead.y<0){
    	ischenggong('失败');
      clearInterval(t);
    	return;
    } 
    if (isInSnake(newHead.x,newHead.y)){
    	ischenggong('失败');
      return null;
    }
  	if (newHead.x==food.foodx &&newHead.y==food.foody){
  		snake.push(newHead);
  		var tmp=document.getElementById(food.foodx+'_'+food.foody).style.background='rgb(104, 255, 104)';
          tmp=document.getElementById(snake[i].x+'_'+snake[i].y).style.borderRadius='50%';
  		food=dropFood();
  		return;
  	}
    var weiba=snake.shift();
    snake.push(newHead);
      var t=document.getElementById(weiba.x+'_'+weiba.y);
      t.style.background ='';
      var h=document.getElementById(newHead.x+'_'+newHead.y);
      h.style.background ='rgb(104, 255, 104)';
      h.style.borderRadius='50%';
  }
// onkeydown  按下弹出  keyCode 阿斯科马
document.onkeydown=function(e){
    var  d =e.keyCode;
    if(d==LEFT || d==UP ||d==RIGHT  ||d==DOWN){
    	if(Math.abs(d-dd)!==2){  //只能朝一个方向走
             dd=d;
    	}
    }
}

 var button=document.getElementsByClassName('button');
 var t;
  for(var i=0;i<button.length;i++){
    button[i].onclick=function(){
      if(this.innerHTML=='开始'){
        t=setInterval(zou,800);
        this.innerHTML='暂停';
      }else if(this.innerHTML=='退出'){
        window.close();
      }else if(this.innerHTML=='暂停'){
        clearInterval(t);
        this.innerHTML='继续';
      }else if(this.innerHTML=='继续'){
        t=setInterval(zou,800);
        this.innerHTML='暂停';
      }else if(this.innerHTML=='新局'){
        location.reload();
      }
    }
  }

var tip=document.getElementById('tip'),
    ts=document.getElementById('ts'),
 ischenggong=function(s){
    tip.style.display='block';
    if(s=='失败'){
      ts.style.backgroundImage='url(./imgs/44.png)';
    }else{
      ts.style.backgroundImage='url(./imgs/444.png)';
    }
  };
 









// 点名系统
// var isKongZuo= function(x,y){
// 	if(x==2&&y==0){
// 		return true;
// 	}else{
// 		return false;
// 	}
// }
// var  dianming=function(){
// 	var x=Math.floor(Math.random()*5);
// 	var y=Math.floor(Math.random()*10);
//     document.getElementById(x+'_'+y);
//     while(/*x==2 && y==0*/ isKongZuo(x,y)){
//          var x=Math.floor(Math.random()*6);
// 	     var y=Math.floor(Math.random()*11);
//     }

// 	return {x:x,y:y};
// }

// console.log(dianming());








//---------
// var  da=[{a:1,b:2},{a:3,b:5},{a:12,b:16}];
// var  ssss=function(x,y){
// 	for(i=0;i<da.length;i++){
// 		if(da[i].a==x && da[i].b==y){
// 	       return true;
// 		}		  
//  } 
//  return false;
// }
// console.log(ssss(4,5));

//如果数组中有a:3 b:5 对象return true    如果没有返回 false;





//

// var arr=[{x:0,y:0},{x:0,y:1},{x:0,y:2}];

// var fn=function(){
// 	arr.shift();
// 	var c={};
// 	c.x=arr[arr.length-1].x;
// 	c.y=arr[arr.length-1].y+1;
// 	arr.push(c);
//  	
// };
//  fn();
//  console.log(arr);











// document.onclick=function(){
//   alert(1);
//   alert(2);
// };







};