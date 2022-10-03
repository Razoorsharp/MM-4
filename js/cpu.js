var d = document;
window.addEventListener('load', function(){
    
    if(!d.getElementById("cpuImage"))return false;

    // Existency check

    // image and part of image
cpuImage = d.getElementById('cpuImage'); 
    // Text Part of view   
    cpuInfo = d.getElementById('cpuInfoText');
    // Image part of view
    cpuInfoImage = d.getElementById('cpuInfoImage');

    // Buttons container
    
    
   // !! CONSTRUCTORS !! 
    // Constructs query for all children of the map tag
    const mapItems = d.querySelector('map').children;
    // construct put all queried results of the map tag into an array called mapArray
    const mapArray = Array.from(mapItems);
    // Constructs query for all children of the buttons class
  
    // construct put all queried results of thebuttons into an array called buttonArray
   
    
 
    // !! Functionality !!
        // make a loop of all the mapArray parts
        // !! note that .length starts at 1 and array starts at 0. so dont use <= !!        
        for(i=0; i < mapArray.length; i++){
        // area is now per loop defined by the ID. 
        mapArrayItem = mapArray[i];
        var area = d.getElementById(mapArrayItem.id); 
        // add events per area
       
        // console.log(area);
        area.addEventListener('mouseover', function(e){
            for(tekst of tekstenCpu){ // loop through all text
                if(e.target.id == tekst.id){ // find a matching text
                    cpuInfo.textContent = tekst.txt; // put that text in the html tab for showing. 
                    // cpuImage.src = "../images/main/"+ e.target.id +".png";
                    // cpuInfoImage.innerHTML = "<img src=../images/CpuParts/"+ e.target.id +".png>";
                    // console.log(gpuInfoImage);
                }
            };
        });
        area.addEventListener('mouseout', function(e){
            // revert to original image when no longer hovering over the areamap. 
            cpuImage.src = "../images/main/cpumain.png";

        });
}

    // button Loops. 
    // make a loop of all the buttonArray parts and add eventlisteners
    // !! note that .length starts at 1 and array starts at 0. so dont use <= !! 
    for(i=0; i < buttonArray.length; i++){
        console.log("started");
        buttonArrayItem = buttonArray[i];
        var button = d.getElementById(buttonArrayItem.id); 
      
        button.addEventListener('click', function(e){
            for(tekst of tekstenGpu){ // loop through all text
                if(e.target.name == tekst.id){ // find a matching text
                    gpuInfo.textContent = tekst.txt; // put that text in the html tab for showing. 
                    gpuImage.src = "../images/main/"+ e.target.name +".png";
                    gpuInfoImage.innerHTML = "<img src=../images/GpuParts/"+ e.target.name +".png>";
                    console.log(gpuInfoImage);
                }
            }
        });
    }
});