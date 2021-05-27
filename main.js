Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 200
});
Webcam.attach('#camera');

function takePic() {
    Webcam.snap(function (bepo) {
        document.getElementById("result").innerHTML = '<img id="bepono" src="' + bepo + '"/>'
    })
}
console.log ("ML5 version is",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OFE_8eJTX/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded Successfully")
}
function identifyPic(){
    img = document.getElementById("bepono");
    classifier.classify(img, getResult);
}
function getResult(error, results){
    if (error) {
    console.error(error);
} else {
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
    document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}
//End