class Cube{
    constructor(position,color,head){
        this.width= 20;
        this.height= 20;
        this.pos = position;
        this.color = color;
        this.isHead=head;
        if (this.isHead){this.foodCounter = 20;}
    }
    draw(ctx){
        ctx.fillStyle="rgba(2,2,2,0.2)";
        ctx.fillRect(this.pos.x+1,this.pos.y+8,this.width-2,this.height-1);
        ctx.fillStyle=this.color;
        if (this.isHead){
            ctx.fillRect(this.pos.x,this.pos.y,this.width,this.height);
            ctx.fillStyle="white";
            if (this.foodCounter<5){
                ctx.fillRect(this.pos.x+2,this.pos.y+6,7,7);
                ctx.fillRect(this.pos.x+12,this.pos.y+6,7,7);
            }
            else{
                ctx.fillRect(this.pos.x+2,this.pos.y+6,5,5);
                ctx.fillRect(this.pos.x+12,this.pos.y+6,5,5);
            }
            this.foodCounter++;
        }
        else{
            ctx.strokeStyle="white";
            ctx.strokeRect(this.pos.x+2,this.pos.y+2,this.width-4,this.height-4);
            ctx.fillRect(this.pos.x+2,this.pos.y+2,this.width-4,this.height-4);
        }
    }
}
class Food{
    constructor(position,color){
        this.pos=position;
        this.color=color;
        this.size=20;
    }
    draw(ctx){
        ctx.fillStyle="rgba(0,0,0,0.2)";
        ctx.beginPath(this.pos.x,this.pos.y+9);
        ctx.arc(this.pos.x+10,this.pos.y+10+9,9,0,Math.PI*2);//shadow
        ctx.fill();
        ctx.fillStyle=this.color;
        ctx.beginPath(this.pos.x,this.pos.y);
        ctx.arc(this.pos.x+10,this.pos.y+10,10,0,Math.PI*2);
        ctx.fill();
    }
}
class Snake{
    constructor(canvas){
        this.body = [];
        this.moveleft=false;
        this.moveright=false;
        this.moveup=false;
        this.movedown= true;
        this.speed=1;
        this.totalWidth=canvas.width;
        this.totalHeight=canvas.height;
        this.gameRunnning=true;
        this.food = new Food({x:0,y:0},"rgb(150,20,20)");
        this.gameOut=false;
        this.totalGridsX=this.totalWidth/20;
        this.totalGridsY=this.totalHeight/20;
        this.gameSpeed=15;
        this.clickCounter=0;
        this.reset();
    }
    update(ctx){
        if (this.gameRunnning){
            this.clickCounter++;
            if(this.checkCollisions()){
                this.speed=0;
                this.gameRunnning=false;
                this.gameOut=true;
            }
            if (this.foodEaten()){
                let lastItem=this.body[this.body.length-1];
                if (this.moveleft){
                    this.body.push(new Cube( {x:lastItem.pos.x+20, y:lastItem.pos.y},"purple",false )); }
                else if (this.moveright){
                    this.body.push(new Cube( {x:lastItem.pos.x-20, y:lastItem.pos.y},"purple",false )); }
                else if (this.moveup){
                    this.body.push(new Cube( {x:lastItem.pos.x, y:lastItem.pos.y+20},"purple",false )); }
                else if (this.movedown){
                    this.body.push(new Cube( {x:lastItem.pos.x, y:lastItem.pos.y-20},"purple",false )); }
                this.newFood();
                this.body[0].foodCounter = 0;
            }
            for(let i = this.body.length-1; i>0; i--){
                this.body[i].pos.x=this.body[i-1].pos.x;
                this.body[i].pos.y = this.body[i-1].pos.y;
            }
            if  (this.moveleft){this.body[0].pos.x-=this.speed;}
            else if (this.moveright){this.body[0].pos.x+=this.speed;}
            else if (this.moveup){this.body[0].pos.y-=this.speed;}
            else if (this.movedown){this.body[0].pos.y+=this.speed;}
            this.draw(ctx);
        }
        else{
            if (this.gameOut){
                this.draw(ctx,true);
                ctx.fillStyle="rgb(250,50,200)"
                ctx.font=`${this.totalGridsX+10}px sans-serif`;
                ctx.fillText("Game Over.",this.totalWidth*0.3,this.totalHeight*0.2);
                ctx.fillText(" Press space to play again. ",this.totalWidth*0.1,this.totalHeight*0.3);
                ctx.fillText(`Score: ${this.body.length-1} `,this.totalWidth*0.33,this.totalHeight*0.45);
                document.querySelector(".pause").innerHTML = "&#9658;"
            }
            else{
                this.draw(ctx);
                ctx.fillStyle="rgb(50,200,100)"
                ctx.font=`${this.totalGridsX+10}px sans-serif`;
                ctx.fillText("Game is stopped.",this.totalWidth*0.2,this.totalHeight*0.2);
                ctx.fillText(" Press ' space ' ",this.totalWidth*0.2,this.totalHeight*0.35);
                ctx.fillText(`Current Score: ${this.body.length-1} `,this.totalWidth*0.2,this.totalHeight*0.48);
            }
        }
    }
    draw(ctx,gameout){
        ctx.fillStyle="rgb(240,240,240)"
        ctx.font=`${Math.floor((this.totalGridsX+this.totalGridsY)*0.5)}px sans-serif`;
        ctx.fillText(`Score: ${this.body.length-1} `,10,Math.floor(this.totalGridsY+10));
        this.food.draw(ctx);
        for (let i = 0 ; i<this.body.length;i++) {
            this.body[i].draw(ctx);
        }
        if (gameout){
            ctx.strokeStyle="red";
            ctx.lineWidth = 5;
            ctx.beginPath(this.body[0].pos.x,this.body[0].pos.y);
            ctx.arc(this.body[0].pos.x+10,this.body[0].pos.y+10,18,0,Math.PI*2);
            ctx.stroke();
            ctx.lineWidth=1;
        }
    }
    checkCollisions(){
        if (this.body[0].pos.x>this.totalWidth-20){return true;}
        else if (this.body[0].pos.x<1){return true;}
        else if (this.body[0].pos.y>this.totalHeight-20){return true;}
        else if (this.body[0].pos.y<1){return true;}
        let head=this.body[0];
        let c = null;
        for(let i = 1 ; i<this.body.length;i++){
            c=this.body[i];
            if (c.pos.x===head.pos.x && c.pos.y===head.pos.y){return true;}
        }
        return false;
    }
    foodEaten(){
        if (this.distanceBetween(this.body[0].pos.x+10,this.body[0].pos.y+10,this.food.pos.x+10,this.food.pos.y+10)<=10){return true;}
        else{return false;}
    }
    newFood(){
        let newColor=`rgb(${Math.random()*150},0,${Math.random()*255})`;
        this.food.color = newColor;
        console.log(`Totalgrids X : ${this.totalGridsX}`);
        console.log(`Totalgrids Y : ${this.totalGridsY}`);
        let randomNumberX = Math.floor(Math.random()*this.totalGridsX);
        let randomNumberY = Math.floor(Math.random()*this.totalGridsY);
        if (randomNumberX<=2){randomNumberX=2;}
        if (randomNumberY<=2){randomNumberY=2;}
        console.log(`New randomX: ${randomNumberX}`);
        console.log(`New randomY: ${randomNumberY}`);
        this.food.pos.x = Math.floor(randomNumberX*20);
        this.food.pos.y = Math.floor(randomNumberY*20);
        if (this.gameSpeed>3){this.gameSpeed--;}
    }
    distanceBetween(x1,y1,x2,y2){
        return Math.sqrt( ( (x2-x1)**2 ) + ( (y2-y1)**2 )  );
    }
    reset(){
        this.body=[];
        this.body.push(new Cube({x:this.totalWidth/2,y:20},"rgb(50,60,100)",true));
        this.moveleft=false;
        this.moveright=true;
        this.moveup=false;
        this.movedown = false;
        this.gameOut=false;
        this.speed=20;
        this.gameSpeed=10;
        this.newFood();
    }
}
class Inputs{
    constructor(s){
        document.addEventListener("keydown",(e)=>{
            if (s.clickCounter>0){
                if (e.keyCode===37){
                    if( ! s.moveright){
                        s.movedown=false;s.moveup=false;s.moveright=false;s.moveleft=true;
                    }
                }
                else if (e.keyCode===38){
                    if( ! s.movedown){
                        s.movedown=false;s.moveleft=false;s.moveright=false;s.moveup=true;
                    }
                }
                else if (e.keyCode===39){
                    if( ! s.moveleft){
                        s.moveleft=false;s.moveup=false;s.movedown=false;s.moveright=true;
                    }
                }
                else if (e.keyCode===40){
                    if( ! s.moveup){
                        s.moveup=false;s.moveright=false;s.moveleft=false;s.movedown=true;
                    }
                }
                s.clickCounter = 0;
            }
            if (e.keyCode===32){
                if (s.gameRunnning){
                    s.gameRunnning=false;
                    document.querySelector(".pause").innerHTML = "&#9658;"
                }
                else{
                    if (s.gameOut){s.reset();}
                    s.gameRunnning=true;
                    document.querySelector(".pause").innerHTML = "||"
                }
            }
            // if(e.keyCode===16||e.keyCode===17){
            //     let lastItem=s.body[s.body.length-1];
            //     s.body.push(new Cube( {x:lastItem.pos.x+20, y:lastItem.pos.y},"purple",false ));
            //     s.newFood();
            // }
        });
    }
}
var canvas= document.querySelector(".canvas");
canvas.height=window.innerHeight*0.8;
while(canvas.height % 20 !== 0){
    canvas.height--;
    }
canvas.width=window.innerWidth*0.8;
while (canvas.width % 20 !== 0){
    canvas.width--;
}
var ctx = canvas.getContext("2d");
var s = new Snake(canvas);
var gameRunTime = 0;
var input = new Inputs(s);
function animate(){
    gameRunTime++;
    if (gameRunTime%s.gameSpeed===0){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        s.update(ctx);
    }
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);