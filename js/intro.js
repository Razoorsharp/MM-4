window.addEventListener('load', function(){
    console.log("started script");
    var d = document;
    //existancy check
    if(!d.getElementById("cpuAnimated") && !d.getElementById("gpuAnimated")) return false;

    // Variables
    var pcCase= d.getElementById('caseAnimated');
    var mobo = d.getElementById('moboAnimated');
    var cpu = d.getElementById('cpuAnimated');
    var gpu = d.getElementById('gpuAnimated');
    var cpuText = d.getElementById('homeCPU');
    var gpuText = d.getElementById('homeGPU');
    var noJS = d.getElementById('noJS');
    var transit = true;

    //add text nodes
    noJS.style = "display:none;"; // delete text that requests JS to be run.
    
    // Adding the 2 P elements to the information block for CPU and GPU
    cpuText.innerHTML = '<p>The CPU is the working horse of every day tasks in a computer. It manages every click and every piece of logic the computer needs to handle. When things need calculations or images need to be sent to the GPU for display, everything is done by the CPU. If It was a football match it would be the coach and referee.</p>';
    gpuText.innerHTML = '<p>Want to have amazing 3D images, play games and play 4k video? The GPU is your goto for this task. Instead of handling tasks in batch they process it in bulk in a split second.Every frame if rendered simultaniously with complex code to provide the best image quality. If the CPu can feed it fast enough from Ram. this is what makes it look good.</p>';
    
    // Set display none for Text elements CPU and GPU
    gpuText.style = "display:none;";
    cpuText.style = "display:none;";

    //Functions
    function runAnim(){
        let array = [pcCase, mobo, cpu, gpu];    
        for(part of array){
            console.log(part.style);
            
            let leftVal = parseInt(part.style.left); 
            console.log(leftVal);
            for(i=0; leftVal < 200; i++){
                setTimeout('', 10);
                this.style.left = leftVal + "px";
        }      

        }
    }


    
    
    // Events
    runAnim();

    // 



});
