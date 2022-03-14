
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

    canvas.height = height
    canvas.width = width


    let upperarm = new Limb(startx - upperarmX ,starty -upperarmY ,0,30,[])
    let forearm = new Limb(startx -forearmX  , starty -forearmY  ,0,10,[])
    let hand = new Limb( startx -handX,starty - handY,0,5,[])

    arm.push(upperarm,forearm,hand)
    console.log('arm',arm)
    ctx.moveTo(startx,starty)
 
    arm.forEach(element => {
 
        ctx.lineTo(element.x,element.y)
        ctx.stroke()
        
    })

})

window.addEventListener("resize",()=>{
    height = window.innerHeight
    width = window.innerWidth
})


   const draw =(x,y,arm)=>{
   
        let endPoint = arm.length
        let upperarmtan = Math.atan2(arm[1].x,arm[1].y)
        let forearmtan = Math.atan2(arm[2].x,arm[2].y)
      

        let upperarm = new Limb(arm[1].x,arm[1].y  ,0,30,[])
        let forearm = new Limb( arm[2].x -Math.atan2(arm[2].x,arm[2].y) * 180 / 3.14, arm[2].y - Math.atan2(arm[2].x,arm[2].y) * 180 / 3.14  ,0,10,[])
        let hand = new Limb(x,y,0,5,[])
        
        arm = []
        arm.push(upperarm,forearm,hand)
      
 
        console.log('arm[1].x,arm[1].y',upperarmtan * 180 / 3.14)
        console.log('arm[2].x,arm[2].y',arm[2].x,arm[2].y)
        console.log('arm',arm)
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
        arm.length = 0
        console.log('arm',arm)
        ctx.beginPath()
        ctx.clearRect(0, 0, width, height)
})




