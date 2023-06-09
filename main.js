function setup()
{
    video= createCapture(VIDEO);
    video.size(560, 510);

    canvas = createCanvas(550,500);
    canvas.position(700,80);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background('lightblue');
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!!!')
}

function gotPoses(result)
{
    if(result.length>0)
    {
        console.log(result);
    }
}