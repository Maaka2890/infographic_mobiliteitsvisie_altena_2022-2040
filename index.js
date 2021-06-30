
function clickFunction(projectnr) {
    var animationspeed=800,
        modal=$('#popupContainer'),
        modalBG=$('#popupOverlay');
    
    //open popup
    modal.css({
      'top':'-400px',
      'opacity':0,
      'display':'block'
    });
    modalBG.fadeIn(animationspeed/2);
    modal.delay(animationspeed/2).animate({
          'top':'30px',
          'opacity':1
      }, animationspeed);
 
    //close popup
    $('#popupOverlay').click(popupClose);
    
    $('body').keyup(function(e){
      if(e.which===27){popupClose();}
    });
    
    $('#popupClose').click(popupClose);
    
    //close popup function
    function popupClose(){
      modalBG.delay(animationspeed).fadeOut(animationspeed);
      modal.animate({
        'top':'-400px',
        'opacity':0
      }, animationspeed/2, function(){
        modal.css({
          'opacity':1,
          'display':'none'
        });
      });
    };
    switch (projectnr) { // execute 
        case 1:
            document.getElementById("popupMsgheader").innerHTML = "1. Kernen en woongebieden verkeersveilig inrichten met focus op voetganger en fietser";
            document.getElementById("popupMsgsubheader").innerHTML = "Door een direct fietspad te realiseren vanaf De Tol naar de Merwedebrug, wordt er een ontbrekende schakel opgevuld langs de A27 en ontstaat er een regionale (snel)fietsverbinding vanuit Gorinchem naar Oosterhout en Breda. Hiermee wordt de gemeente Altena ook direct aangesloten op het snelfietsnetwerk van Brabant en vormt het in potentie de schakel tussen de snelfietsnetwerken van de provincies Noord-Brabant en Zuid-Holland. De gemeente Altena wil dit fietspad samen met de provincie Noord-Brabant en de Regio West-Brabant gaan verkennen en realiseren.";
            break;
        case 2:
            alert("this is project number 2");
            break;
        case 3:
            alert("this is project number 3");
            break;
        case 4:
            alert("this is project number 4");
            break;       
        case 5:
            alert("this is project number 5");
            break;
        case 6:
            alert("this is project number 6");
            break;
        case 7:
            alert("this is project number 7");
            break;
        case 8:    
      document.getElementById("popupMsgheader").innerHTML = "8. Verkennen en realiseren regionale fietsverbinding vanaf De Tol naar de Merwedebrug";
      document.getElementById("popupMsgsubheader").innerHTML = "Door een direct fietspad te realiseren vanaf De Tol naar de Merwedebrug, wordt er een ontbrekende schakel opgevuld langs de A27 en ontstaat er een regionale (snel)fietsverbinding vanuit Gorinchem naar Oosterhout en Breda. Hiermee wordt de gemeente Altena ook direct aangesloten op het snelfietsnetwerk van Brabant en vormt het in potentie de schakel tussen de snelfietsnetwerken van de provincies Noord-Brabant en Zuid-Holland. De gemeente Altena wil dit fietspad samen met de provincie Noord-Brabant en de Regio West-Brabant gaan verkennen en realiseren.";
            break;
        case 9:
            alert("this is project number 9");
            break;
        case 10:
            alert("this is project number 10");
            break;
        case 11:
            alert("this is project number 11");
            break;
        case 12:
            alert("this is project number 12");
            break;
        case 13:
            alert("this is project number 13");
            break;
        case 14:
            alert("this is project number 14");
            break;
        case 15:
            alert("this is project number 15");
            break;
        case 16:
            alert("this is project number 16");
            break;
        case 17:
            alert("this is project number 17");
            break;
        case 18:
            alert("this is project number 18");
            break;
        case 19:
            alert("this is project number 19");
            break;
        case 20:
            alert("this is project number 20");
            break;
        case 21:
            alert("this is project number 21");
            break;
        case 22:
            alert("this is project number 22");
            break;

        default:
            alert("no info yet");//in svg .clickbaar onclick="clickFunction()" 
    };

    // [ ] - Slect filte to load
    // [ ] - load data from json on server
    // [ ] - get values from loaded json
    // [ ] - Chequ which values to select based on selection
    // [ ] - format values
    // [ ] - set values

    var values = {
        prtitle: "Porjectnaam",
        prtext: "body text"
    }

    setDiagramValues();
    function setDiagramValues() {
        $("#selectionPannel > div.text > div > h1").text(values.prtitle); // project tietel
        $("#selectionPannel > div.text > div > p:nth-child(3)").text(values.prtext); // sub-titel
    }
};
