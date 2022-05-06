noseX = 0;
noseY = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;
go = "                    ";

function setup(){
    video = createCapture(VIDEO);
    video.size( 556, 499);
    video.position(30, 210)

    canvas = createCanvas(560, 500);
    canvas.position(1000, 210);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded(){
    console.log("MODEL HAS BEEN LOADED");
}

function start(){
    go = "yes";
    console.log("Started")
}

function gotPoses(results){
    if((results.length > 0) && (go == "yes")){
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);

        console.log("NoseX = " + noseX + " | NoseY = " + noseY + " | Difference = " + difference);

    }
}

function draw(){
    background("#e9967a");
    fill("#ff0000");
    stroke("#d44c83");
    square(noseX, noseY, difference);
    document.getElementById("moron").innerHTML = "The side of the sqare is = '" + difference + " pixels'";
    
}
