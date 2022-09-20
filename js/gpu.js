var d = document;
window.addEventListener('load', function(){
    $('img[usemap]').rwdImageMaps();
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







});