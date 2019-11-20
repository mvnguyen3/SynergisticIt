// Auto run the printName function for each second. Stop printing at the 6th time.
var printingNameLoop = setInterval(printName,1000);
var count = 1;
function printName(){
    if(count <= 5){
        console.log("Minh");
        count++;
        console.log("Count: " + count);
    }else{
        console.log("Successfully executed function for " + (count - 1)  + " times");
        clearTimeout(printingNameLoop);
    }
}


