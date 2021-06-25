lips_x=0;
lips_y=0;


function preload(){
lips = loadImage("https://i.postimg.cc/zXDXN7WJ/R7fb9b3502cedf96f65f88d111d2e51f9.png");
mustache = loadImage("https://i.postimg.cc/qRX4V6vh/moustache-PNG38.png");
}

function setup(){
 canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video, model_loaded);
poseNet.on('pose', gotPoses);
}
function model_loaded(){
    console.log('Posenet Initialized');
}

function draw(){
    image(video, 0, 0, 300, 300);
  image(lips, lips_x - 10, lips_y + 15, 30, 30)
  
 
}

function take_snapshot(){
save('MyFunnyFilter.jpg');
}

function gotPoses(results){
    if(results.length > 0){
        lips_x = results[0].pose.nose.x;
        lips_y = results[0].pose.nose.y;
        console.log(lips_x)
        console.log(lips_y)
    }
}
