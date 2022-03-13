window.addEventListener("load", ()=>{

    let canvas = document.getElementById("Canvas")
    let btnUp = document.getElementById("btnUp")
    let btnDown = document.getElementById("btnDown")
    let ctx = canvas.getContext("2d")
    

    let height = window.innerHeight;
    let width = window.innerWidth;

    canvas.height = height
    canvas.width = width

    window.addEventListener("resize",()=>{
        height = window.innerHeight
        width = window.innerWidth
    })

    let upperarmX = 200;
    let upperarmY = 200;
    let forearmX = 200;
    let forearmY = 300;
    let handX = 250;
    let handY = 350;
    let amount = 10 
    let arm = []

    ctx.moveTo(100,100)

    class Limb {

        constructor(x, y,angle,length,children) {
          this.x = x;
          this.y = y;
          this.angle = angle;
          this.length = length;
          this.children = children;
      
        }
      
      }

      let upperarm = new Limb(upperarmX,upperarmY,0,[])
      let forearm = new Limb(forearmX,forearmY,0,[])
      let hand = new Limb(handX,handY,0,[])

      arm.push(upperarm,forearm,hand)


      console.log('arm',arm)


      arm.forEach(element => {
        ctx.lineTo(element.x,element.y)
        ctx.stroke()
    })

    const update =(method,hand)=>{
      if(method == "+"){
      
        hand.y =  hand.y + amount 
        ctx.lineTo(hand.x,hand.y)
        ctx.stroke() 
      }else if(method == "-"){
        hand.y =  hand.y -amount 
        ctx.lineTo(hand.x,hand.y)
        ctx.stroke() 
      }

    }
 
    btnDown.addEventListener("click",()=>{
        update("-",hand)
    })
  
    btnUp.addEventListener("click",()=>{
     
        
        update("+",hand)
    })
})



