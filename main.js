function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas=createCanvas(550,550);
    canvas.position(700,80);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}
function draw(){
    background("pink");
}
function modelloaded(){
    console.log("model has been initailized");
}
function gotposes(results){
    if(results.length>0)
    {
        console.log(results);
    }
}
