window.addEventListener('load', function(){
    console.log("started script");
    var d = document;
    //existancy check
    if(!d.getElementById("cpuAnimated") && !d.getElementById("gpuAnimated")){
        return false;
        
    } else {
        var noJS = d.getElementById('noJS');
        noJS.style = "display:none;"; // delete text that requests JS to be run.

    // Variables
    var pcCase= d.getElementById('caseAnimated');
    var mobo = d.getElementById('moboAnimated');
    var cpu = d.getElementById('cpuAnimated');
    var gpu = d.getElementById('gpuAnimated');
    var cpuText = d.getElementById('homeCPU');
    var gpuText = d.getElementById('homeGPU');
    var functionalAnimated = d.getElementById('functionalAnimated');
    
    var selection = d.getElementById("selection");
    functionalAnimated.style = ("display:none;");
    var animationPlaying = true; // set true or false so it will only run if the animation stopped playing
    
    var transit = true;

    var cpuTouched = false; // Cpu button touche once for info, twice for entering
    var gpuTouched = false; // Gpu button touche once for info, twice for entering

    //add text nodes
   
    
    // Adding the 2 P elements to the information block for CPU and GPU
    cpuText.innerHTML = '<p>The CPU is the working horse of every day tasks in a computer. It manages every click and every piece of logic the computer needs to handle. When things need calculations or images need to be sent to the GPU for display, everything is done by the CPU. If It was a football match it would be the coach and referee.</p>';
    gpuText.innerHTML = '<p>Want to have amazing 3D images, play games and play 4k video? The GPU is your goto for this task. Instead of handling tasks in batch they process it in bulk in a split second.Every frame if rendered simultaniously with complex code to provide the best image quality. If the CPu can feed it fast enough from Ram. this is what makes it look good.</p>';
    
    // Set display none for Text elements CPU and GPU
    gpuText.style = "display:none;";
    cpuText.style = "display:none;";

    //Functions
    function runAnim(){
      
        // GSAP animation
        let tl = gsap.timeline({repeat: 0, yoyo: false})

            tl.from(pcCase, { x: -1500});
            tl.from(mobo, { x: -1500});
            tl.from(cpu, { x: -1500});
            tl.from(gpu, { x: -1500});
            tl.call(function(){
                mobo.style = "display:none;"; 
                pcCase.style = "display:none;";
                cpu.style = "display:none;";
                gpu.style = "display:none;";
                functionalAnimated.style="display:block;"; 
                functionalAnimated.src="images/intro/caseUnselected.png";
                animationPlaying = false;
            });
            tl.call(function(){mapper();});
    }
    // end gsap animation

    function mapper(){
        if(animationPlaying == true){
            return false;
        }else{
            const mapItems = d.querySelector("#buttons").children;
            // construct put all queried results of the map tag into an array called mapArray
            const mapArray = Array.from(mapItems);
            // for the buttons it check which button it is and displays blocks of text accordingly. 
            for(btn of mapArray){
                btn.addEventListener("mouseover", function(e){  
                    if(e.target.name == "cpu"){
                        cpuText.style = "display:block;";
                    }else if(e.target.name == "gpu"){
                        gpuText.style = "display:block;";
                    }                                 
                    functionalAnimated.src="images/intro/case"+ e.target.name + ".png";
                });
                btn.addEventListener("mouseout", function(e){  
                    if(e.target.name == "cpu"){
                        cpuText.style = "display:none;";
                    }else if(e.target.name == "gpu"){
                        gpuText.style = "display:none;";
                    }                                 
                    functionalAnimated.src="images/intro/caseUnselected.png";
                });
                
                btn.addEventListener("click", function(e){ 
                    e.preventDefault();  
                    if(e.target.name == "cpu"){
                        cpuText.style = "display:block;";
                    }else if(e.target.name == "gpu"){
                        gpuText.style = "display:block;";
                    }                
                    functionalAnimated.src="images/intro/caseUnselected.png";
                    window.open("paginas/"+ e.target.name + ".html")

                });
                // Attempt to make a touch functionality for mobile so the buton is pressed once and it will 
                // show the text, pressed twice it goes to the page. 
                // could not finish this one  but will leave the code in for review.. Maybe i can get some pointers. 
                btn.addEventListener("touchstart", function(e){ 
                    e.preventDefault();  
                    if(e.target.name == "cpu"){
                        //if the cpu button is not pressed show info, if pressed open new window
                        if(cpuTouched = false){
                            gpuTouched = false;
                            gpuText.style = "display:none;";
                            cpuTouched = true;
                            cpuText.style = "display:block;";
                        }else{
                            functionalAnimated.src="images/intro/caseUnselected.png";
                            cpuTouched = false;
                    window.open("paginas/"+ e.target.name + ".html")
                        } 
                        
                    }else if(e.target.name == "gpu"){
                        if(gpuTouched = false){
                            cpuTouched = false;
                            cpuText.style = "display:none;";
                            gpuTouched = true;
                            gpuText.style = "display:block;";
                        }else{
                            functionalAnimated.src="images/intro/caseUnselected.png";
                            gpuTouched = false;
                    window.open("paginas/"+ e.target.name + ".html")
                        } 
                    }  
                    

                 

                });// end touched check
               
            }
        }

    }
}
    
    // Events
    runAnim();
    mapper();

});
