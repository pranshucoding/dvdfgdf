img = "";
status = "";
function preload()
{
    img = loadImage('bott.png');
}

function setup()
{
    canvas = createCanvas(640,500);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status = DETECTING OBJECTS";
}

function modelLoaded(){
    console.log("model loaded");
    objectDetector.detect(img, gotResult);
    status=true;
}

function gotResult(error,result){
    if(error){
        console.log(error);
    }

    console.log(result);
}

function draw(){
    image(img,0,0,640,420);

    stroke('#FF0000');
    noFill();
    text("DOG",45,75);
    rect(30,60,350,450);

    stroke('#FF0000');
    noFill();
    text("CAT",320,120);
    rect(300,90,270,320);
}