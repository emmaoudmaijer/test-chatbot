//let experimentId = "-e8f2ocGS8O0G2MJU-kzYg";
function getQueryVariable(variable){
    //get variables from the url
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {

     var pair = vars[i].split("=");

    if(pair[0] == variable){return pair[1];}

    }

    return(false);

}

function reloadPage(){
    //define random number between 0 and 1
    var randomNum = Math.floor((Math.random() * 2 ));
    var vari = String(getQueryVariable("vari"));

    if (vari != "0" && vari !="1" ){

            var url = window.location.href;

            var strippedUrl = url.substr(0, url.indexOf('?'));

            if (strippedUrl==''){ strippedUrl = url;}
            location.href= strippedUrl + '?vari=' + randomNum;
    }
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  

    var vari = String(getQueryVariable("vari"));
    console.log('tag: '+vari);
    let experimentId = "-e8f2ocGS8O0G2MJU-kzYg";

    ga('create', 'UA-164794708-1', 'auto');
    ga('require', 'GTM-P5JTVF2');
    if (vari == "0" || vari =="1" ){
        ga('set', 'experimentId', experimentId + vari);
    }
    ga('send', 'pageview');  

