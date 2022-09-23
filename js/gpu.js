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
    gpuInfo = d.getElementById('gpuInformation')
    gpuInfo = d.getElementById('gpuInfoText');
    // test

    const mapItems = d.querySelector('map').children;
    const mapArray = Array.from(mapItems);

    console.log(mapArray);
    // Functions
    for(area of mapArray){
        
        area.addEventListener('mouseover', function(){
            console.log(this.id);
            let
            
            
        });
    }
    // events
    // d.addEventListener('mouseover', function(e){
    //     var that = this.
    //     console.log(that.element);
    // });

    





});