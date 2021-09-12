function startClassification() 
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classfication  = ml5.soundClassfication('https://teachablemachine.withgoogle.com/models/EMuEyM226/', modelReady);
}