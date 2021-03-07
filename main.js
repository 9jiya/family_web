function start(){
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "My mothers name is Reshma. She was a scientist. She loves the subject Maths and She also loves drawing. Drawing relaxes her mind.";
    speak_data2 = "My fathers name is Akash. My Father wanted to be a car racer but now he does bussiness of Export and Import. He loves to hear song while he is driving his car.";
    speak_data3 = "And this is ME Jiya. I want to be an astronomer when I grow up and fix the problems of the rocket. I love to do coding as It relaxes my mind and I love to do Maths and english too.";
    speak_data4 = "My brothers name is Rajveer. My brother loves animals. He can walk perfectly like a dinosuar.We all see him walk like that and laugh. He also wants to be a car racer when he grows up like our dad.";
    var c = new SpeechSynthesisUtterance(speak_data1+speak_data2+speak_data3+speak_data4);
    synth.speak(c);
}
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
Webcam.attach('#camera');
document.getElementById("camera");
function capture(){
    Webcam.snap(function(e){
        document.getElementById("result").innerHTML = '<img id="image1" src="'+e+'"/>';
    });
}
console.log("ml5",ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/olPSe4ZXQ/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model loaded");
}
function identify(){
    d = document.getElementById("image1");
    classifier.classify(d,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("acc").innerHTML = results[0].confidence.toFixed(2);
    }
}