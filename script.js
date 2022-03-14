
    let canvas = document.getElementById("Canvas")
    let clear = document.getElementById("clear")

    let ctx = canvas.getContext("2d")

    let upperarmX = 200;
    let upperarmY = 200;
    let forearmX = 200;
    let forearmY = 300;
    let handX = 250;
    let handY = 300;
    let startx = window.innerWidth / 2 ;
    let starty = window.innerHeight / 2 ;
    let arm = []
    let height = window.innerHeight;
    let width = window.innerWidth;
  

    class Limb {

        constructor(x, y,angle,length,children) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.length = length;
        this.children = children;
    
        }
    
    }

window.addEventListener("load", ()=>{
    //setting canvas size
    canvas.height = height
    canvas.width = width

    //adding limb
    let upperarm = new Limb(startx - upperarmX ,starty -upperarmY ,0,50,[])
    let forearm = new Limb(startx -forearmX  , starty -forearmY  ,0,50,[])
    let hand = new Limb(startx - handX,starty - handY,0,50,[])

    arm.push(upperarm,forearm,hand)
    

    //adding limb children
    console.log('arm',arm)
   for (let index = 0; index < arm.length; index++) {
       const element = arm[index];
       if(element.children){
        element.children = arm[index -1 ]
       }
   }

    //drawing intial limbs
    ctx.moveTo(startx,starty)
    arm.forEach(element => {
        ctx.lineTo(element.x,element.y)
        ctx.stroke()
    })

})

window.addEventListener("resize",()=>{
    //update canvas size
    height = window.innerHeight
    width = window.innerWidth
})

function getEndx(x,angle) {
    return x + Math.cos(angle) * length
}

function getEndy(y,angle) {
    return y + Math.cos(angle) * length
}

   const draw =(x,y,arm)=>{
   
        let endPoint = arm.pop()
         let upperarm = new Limb(getEndx(endPoint.children.x,endPoint.children.angle),getEndy(endPoint.children.y,endPoint.children.angle),0,50,[])
         let forearm = new Limb(getEndx(endPoint.children.x,endPoint.children.angle),getEndy(endPoint.children.y,endPoint.children.angle),0,50,[])
         let hand = new Limb(x,y,0,50,[])
  
      
        console.log("endPoint",endPoint)
        arm = []
        arm.push(upperarm,forearm,hand)

    
        ctx.moveTo(startx  ,starty)
   
        arm.forEach(element => {
       
            ctx.lineTo(element.x,element.y)
            ctx.stroke()
            
        })

   }



    canvas.addEventListener("mousedown",(e)=>{
    ctx.beginPath()
    ctx.clearRect(0, 0, width, height)

    draw(e.clientX,e.clientY,arm)

    })
  
    clear.addEventListener("click",(e)=>{
        arm= []
        console.log('arm',arm)
        ctx.beginPath()
        ctx.clearRect(0, 0, width, height)
})




