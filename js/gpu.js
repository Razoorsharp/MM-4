var d = document;
window.addEventListener('load', function(){
    
    if(!d.getElementById("gpuImage"))return false;

    // Existency check

    // image and part of image
    gpuImage = d.getElementById('gpuImage');
    // gpuChips = d.getElementById('gpuChips');
    // gpuPowersupply = d.getElementById('gpuPowersupply');
    // gpuFans = d.getElementById('gpuFan');
    // gpuPCIE = d.getElementById('gpuPCIE');
    // gpuCooler = d.getElementById('gpuCooler');
    // //    other 
    // gpuInfoContainer = d.getElementById('gpuInformation')
    gpuInfo = d.getElementById('gpuInfoText');
    gpuInfoImage = d.getElementById('gpuInfoImage');
   
    // Constructs query for all children of the map tag
    const mapItems = d.querySelector('map').children;
    // construct put all queried results of the map tag into an array called mapArray
    const mapArray = Array.from(mapItems);

   
    // Functions
        // make a loop of all the mapArray parts
        for(i=0; i <= mapArray.length; i++){
        // area is now per loop defined by the ID
        mapArrayItem = mapArray[i];
        var area = d.getElementById(mapArrayItem.id); // gives an error but the code works and id does exist if you print it in the console, so keep it!
        // add events per area
        area.style= ('border:10px; background-color: black; outline: 20px;');
        // console.log(area);
        area.addEventListener('mouseover', function(e){
            // console.log(e.target.id) 
            // console.log(tekstenGpu[i].id);
            for(tekst of tekstenGpu){ // loop through all tekst
                if(e.target.id == tekst.id){ // find a matching tekst
                    gpuInfo.textContent = tekst.txt; // put that tekst in the html tab for showing. 
                    gpuImage.src = "../images/main/"+ e.target.id +".png";
                    gpuInfoImage.innerHTML = "<img src=../images/GpuParts/"+ e.target.id +".png>";
                    console.log(gpuInfoImage);

                }
            };
        });
        area.addEventListener('mouseout', function(e){
            gpuImage.src = "../images/main/gpumain.png";

        });
    }

});