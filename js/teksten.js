// Teksten voor GPU

var tekstenGpu = [];
var tekstenCpu = [];
var tekst = {} // leeg boek voor de array
// tekstenGpu.push(tekst);
/*
/ Tekste bedoeld voor de 
/ GPU
*/
tekst = {
    id          :'gpuChips',
    title       :'GPU Chips',
    txt         :'De capacitor aan de achterkant van de hoofd GPU chip zorgen voor het filteren van het voltage. Recent is het belangrijk te weten dat zij POSCAPs (Conductive Polymer Tantalum Solid Capacitors), in groen, gebruiken, en geen MLCCs (Multilayer Ceramic Chip Capacitor),in rood. bij de lancering van de RTX3080 gaf dit problemen en crashes naar de desktop.  '     
    };
    tekstenGpu.push(tekst);

tekst = {
    id          : 'gpuPowersupply',
    title       :'GPU Powersupply',
    txt         :'De Powersupply van den GPU heeft vaak 1 of 2 8 pins PCI-E connectors nodig. Afhankelijk van de stroomvoorziening die de kaart nodig heeft. Een RTX 3090TI zal natuurlijk meer kracht nodig hebben dan een RTX 3060, of een oudere generatie GPU. Let op dat je een verloop stekker nodig zal hebben mocht je een Nvidea founders edition in huis halen, deze heeft een speciale 12 pin connector nodig. '     
    };
    tekstenGpu.push(tekst);

 tekst = {
    id          :'gpuFan',
    title       :'GPU Fans',
    txt         :'het lijken vanzelfsprekende dingen maar de ventilator van een GPU is enorm belangrijk in hoe deze functioneert, of juist niet meer. Hoe meer fans hoe beter zal je zeggen maar dat is niet geheel waar. zo is de lucht verplaatsing van een blowr vaak beter dan die van een open air ventilator. Je computer kast speelt ook zeker een rol, het is belangrijk dat de lucht toevoer van voor naar achter kan plaatsvinden zonder obstructies omdat deze een hete lucht pocket creeren, waar de GPU van kan oververhitten.'     
    };
    tekstenGpu.push(tekst);

tekst = {
    id          :'gpuPCIE',
    title       :'GPU PCI-E',
    txt         :'Ofwel tegenwoordig PCI-e x16 heeft 16 data lanes en 82 pins connectors. Dit bepaalde de snelheid waarmee de GPU zijn data kan verwerken in samenwerking met het geheugen en de CPU. GPUs hebben diverse snelheden en het moederbord moet dit wel ondersteunen, hoe meet data hij kan verwerken hoe beter. Ook wordt voor sommige kaarten enkel de stroom vanuit het moederbord meegegeven aa de GPU en is de powerconnector niet nodig door de PCI-E connector. Huidige standaard is PCIe v4.0'     
    };
    tekstenGpu.push(tekst);

tekst = {
    id          :'gpuCooler',
    title       :'GPU Heatsink',
    txt         :'De Heatsink of cooler van de GPU is enorm belangrijk, deze bestaat uit aluminium en/of koper met kopere heatpipes. Deze geleid de hete lucht van de hoofd chip van de GPU weg van de chip en door middel van de Fans verspreid hij de lucht verder de kast in, afhankelijk van je aitflow. '     
    };
    tekstenGpu.push(tekst);
    
    // Teksten voor CPU

tekst = {
    id          :'cpuCap',
    title       :'CPU Cap',
    txt         :'de Cap van de CPu wordt gebruikt als bescherming voor de meest kwetsbare onderdelen van de CPU. Dezefungeert tegelijk ook een hittegeleider en hitteschild om de hitte weg te geleiden. Bovenop dit schild wordt de koelpasta gedaan in het midden ( nooit meer dan een rijstkorrel grootte) voor men de ventilator er op plaatst.   '     
    };
    tekstenCpu.push(tekst);

tekst = {
    id          :'cpuChiplets',
    title       :'CPU Chiplets',
    txt         :'De 2 chiplets op de afbeelding is waar de daadwerkelijke cores zitten. Deze zijn per processor type verschillend. onder deze zwarte laag zullen in het geval van een 3900 serie CPU dan ook 12 cores onder verstopt zitten. Deze worden op hun beurt weer aangestuurd door de IO. Belangrijk is om te weten dat je dit deel van een CPU nooit te zien krijgt in het echt en iedere processor verschillend is onder de kap. Zo zijn er verschillende Cores zoals processor cores en efficiency cores (intel) en diverse architecturen om hem sneller en efficienter te maken   '     
    };
    tekstenCpu.push(tekst);

tekst = {
    id          :'cpuSocket',
    title       :'CPU Socket',
    txt         :'CPU Sockets zijn er in veel soorten en maten. De een heeft gaatjes en de ander pinnetjes. In dit geval kijken we naar een AM4 coekst welke gaten heeft en zitten de pinnen op de processor zelf. Bij Intel en de nieuwe nog uit te komen Ryzen processoren zitten de pinnen op het moederbord en noppen op de processor. Het AM4 socket is voor vele Ryzen series CPU\'s de standaard van de 1000 series tot de 5000 series en zal dus nu vervangen worden door de AM5 standaard. Dit is belangrijk te weten als je verder wil upgraden van het systeem. Zodra je een nieuwe processor wil plaatsen moet je goed kijken of  socket overeen komt met je moederbord.   '     
    };
    tekstenCpu.push(tekst);

tekst = {
    id          :'cpuPins',
    title       :'CPU Pins',
    txt         :'CPU Pins staat ook omschreven bij de socket, echter is het heel belangrijk te weten waar je hier bij op moet letten. Hou nooit de processor bij de pinnen bvast maar altijd aan de zijkanten en laat deze nooit vallen. De pinnen op een processor zijn uiterst gevoelig o te buigen en breken. Menig bouwer van PC\'s heeft zich al eens in de vingers gesneden de processor verkeerd te hebben geplaatst of vastgepakt waardoor een pinnetje buigt. Hierdoor zal deze onmogelijk nog in de socket passen mits je mat een creditcard of iets duns en hards de pint weer op zijn plek weet te buigen. Wees hier voorzichtig mee want mocht je dit doen en er breekt een pin af, is de proceessor onbruikbaar en vaak is de garantie ook foetsie.    '     
    };
    tekstenCpu.push(tekst);

tekst = {
    id          :'cpuPins',
    title       :'CPU Pins',
    txt         :'CPU Pins staat ook omschreven bij de socket, echter is het heel belangrijk te weten waar je hier bij op moet letten. Hou nooit de processor bij de pinnen bvast maar altijd aan de zijkanten en laat deze nooit vallen. De pinnen op een processor zijn uiterst gevoelig o te buigen en breken. Menig bouwer van PC\'s heeft zich al eens in de vingers gesneden de processor verkeerd te hebben geplaatst of vastgepakt waardoor een pinnetje buigt. Hierdoor zal deze onmogelijk nog in de socket passen mits je mat een creditcard of iets duns en hards de pint weer op zijn plek weet te buigen. Wees hier voorzichtig mee want mocht je dit doen en er breekt een pin af, is de proceessor onbruikbaar en vaak is de garantie ook foetsie.    '     
    };
    tekstenCpu.push(tekst);

    

