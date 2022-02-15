//https://teachablemachine.withgoogle.com/models/-E1wn_qxg/ 
Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });
  camera = document.getElementById("webcam_view");
  Webcam.attach( camera );
  function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("captured_image").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-E1wn_qxg/model.json',modelLoaded);
function modelLoaded() {
    console.log('Model Loaded!');
  }
function Check() {
    img = document.getElementById("selfie_image");
    classifier.classify(img, gotResult);
}  
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
    document.getElementById("Object").innerHTML = results[0].label;
    document.getElementById("Accuray_of_object_shown").innerHTML = (results[0].confidence * 100 ).toFixed(2) + " %";
    }
}
