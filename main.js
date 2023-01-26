noseX=0;
noseY=0;
function preload() {
  clown_nose = loadImage('https://i.postimg.cc/L8m5KDKx/Moustache-PNG-Image-removebg-preview.png');
}
function setup() {
  canvas = createCanvas(600, 600);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(600, 600);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
} 
function modelLoaded() {
  console.log('PoseNet Is Initialized');
} 
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-70;
    noseY = results[0].pose.nose.y-15;
  }
}
function draw() {
  image(video, 0, 0, 600, 600);
  image(clown_nose, noseX, noseY, 150, 120);
}
function take_snapshot(){    
  save('myFilterImage.png');
}