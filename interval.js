/*1 Sekunden Intervallfunktion*/
var lastinterval=0;
var thisinterval=0;
var interval=1000;

self.addEventListener('message', function(e) {
    lastinterval= Date.now();
    startinterval();
});

function startinterval() {
    setTimeout(function() { 
        thisinterval= Date.now();
        interval= interval-(thisinterval-lastinterval-1000);
        if (interval<=0) {
            interval=1000;
        }
        lastinterval=thisinterval;
        console.log(interval);
        self.postMessage("Ping");
        startinterval();
    }, interval)/*1 Sekunden Intervallfunktion*/
}