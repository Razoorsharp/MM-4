var d = document;
window.addEventListener('load', function(){
    console.log("started");
    if(!d.getElementById("gpuImage"))return false;

    // Existency check

    // image and part of image
    gpuImage = d.getElementById('gpuImage');
    gpuChips = d.getElementById('gpuChips');
    gpuPowersupply = d.getElementById('gpuPowersupply');
    gpuFans = d.getElementById('gpuFan');
    gpuPCIE = d.getElementById('gpuPCIE');
    gpuCooler = d.getElementById('gpuCooler');
    //    other 
    gpuInfoContainer = d.getElementById('gpuInformation')
    gpuInfo = d.getElementById('gpuInfoText');
    // test

    // Constructs query for all children of the map tag
    const mapItems = d.querySelector('map').children;
    // construct put all queried results of the map tag into an array called mapArray
    const mapArray = Array.from(mapItems);

    // console.log(mapArray);
    // Functions
    // for(area of mapArray){
        for(i=0; i <= 4; i++){
        // console.log(mapArray[i].id); // looks for all id's within the current loop. 
        // area is now per loop defined by the ID
        var area = d.getElementById(mapArray[i].id);
        // add events per area  
        console.log(tekstenGpu[i]);   
        area.addEventListener('mouseover', function(){
            gpuInfo.textContent = tekstenGpu[i].txt;         
            
        });
    }
    // } // map area for loop ends
    // events
    // d.addEventListener('mouseover', function(e){
    //     var that = this.
    //     console.log(that.element);
    // });

    





});