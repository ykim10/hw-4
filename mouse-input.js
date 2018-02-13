var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playingA, playingS, playingD, playingF;

var playing = false;
var playingA = false;
var playingS = false;
var playingD = false;
var playingF = false;

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
}

function draw() {
  if (playingA) {
    background(0, 255, 255);
  } else {
    background(255, 0, 255);
  }
  if (playingS) {
    background(255, 0, 0);
  } else {
    background(255, 0, 255);
  }
  if (playingD) {
    background(38, 255, 23);
  } else {
    background(255, 0, 255);
  }
  if (playingD) {
    background(0, 3, 255);
  } else {
    background(255, 0, 255);
    
    text('click here,\nthen press A/S/D/F\n keys to play', width / 2, 40);
  }
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
    if (!playing) {
      // ramp amplitude to 0.5 over 0.05 seconds
      oscA, oscS, oscD, oscF.amp(0.5, 0.05);
      playing = true;
      backgroundColor = color(0,255,255);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      oscA, oscS, oscD, oscF.amp(0, 0.5);
      playing = false;
      backgroundColor = color(255,0,255);
    }
  }
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
    playingA = true;
    playingS = true;
    playingD = true;
    playingF = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
    playingA = false;
    playingS = false;
    playingD = false;
    playingF = false;
  }
}
