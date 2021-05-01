class Snake{
    constructor(){
        this.body=[];
        this.body[0]=createVector(floor(w/2),floor(h/2));
        this.xdir=0;
        this.ydir=0;
        this.len=1;
        
    }

    setDir(x,y){
        this.xdir=x;
        this.ydir=y;

    }

    update(){
        var head = this.body[this.body.length-1].copy(); 
        this.body.shift(); 
        head.x+=this.xdir; 
        head.y+=this.ydir; 
        this.body.push(head);
    }
    
    grow(){
        var head=this.body[this.body.length-1].copy();
        this.body.push(head);   
    }

    end(){
        let x = this.body[this.body.length-1].x;
        let y = this.body[this.body.length-1].y;
    
        if(x>w-1 || x<0|| y>h-1||y<0){
          return true;
        }
        for(var i=0;i<this.body.length-1;i++){
          var part = this.body[i];
          if(part.x===x && part.y===y){
            return true;
          }
        }
        return false;
      }

    eat(pos){
        var x=this.body[this.body.length-1].x;
        var y=this.body[this.body.length-1].y;
        console.log(x+" "+pos.x)
        //if(x===pos && y===pos){
        if((x>=pos.x-5 && x<=pos.x+5)&&(y==pos.y)|| (y>=pos.y-5 && y<=pos.y+5)&&(x==pos.x)){
            console.log("eatingFood");
            this.len++;
            this.grow();
            return true;
        }
        return false;
    }
    show(){
        for(var i=0;i<this.body.length;i++){
        rect(this.body[i].x,this.body[i].y,10,10) 
        }
     }
 

    
   
    

}





