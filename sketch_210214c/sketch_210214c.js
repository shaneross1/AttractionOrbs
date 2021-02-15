let bg = 0;
let t;
function setup(){
    t = new glitchText();
    createCanvas(3840, 2160);
    background(bg);
    let t;
}

function draw(){
    background(bg);
    let day = String.valueOf(day());
    let month = String.valueOf(month());
    let year = String.valueOf(year());
    t.write(month + "/" + day + "/" + year, width / 2, height / 1.7, width / 8);
}

class glitchText{
    constructor(){
        this.originX = 0;
        this.originY = 0;
    }

    setup(){
    }

    write(input, x, y, size){
        this.originX=x;
        this.originY=y;
        this.textInput=input;
        this.vcr=loadFont("data/vcr.ttf");
    textSize(32);
        textAlign(CENTER);
        textSize(size);
        textFont(this.vcr, size);
        text(this.textInput, this.originX, this.originY);
        t.dispersion(10, 1000, .5, 100);
    }

    dispersion(distance, slowness, noise, jitterRarity){
        let osc1 = cos(millis() / slowness) * distance + random(-noise, noise);
        let osc2 = sin(millis() / slowness) * distance + random(-noise, noise);
        textAlign(CENTER);
        if(int(random(jitterRarity)) == 1) {
            osc1=osc2 * -2;
            osc2=osc1 * -2;
            textAlign(RIGHT_ARROW);
        }
        fill(0, 0, 0, random(240, 255));
        text(this.textInput, this.originX, this.originY);
        fill(255, 0, 0, 255);
        text(this.textInput, this.originX, this.originY + osc1);
        fill(0, 0, 255, 255);
        text(this.textInput, this.originX, this.originY + osc2);
        fill(0, 255, 0, 255);
        text(this.textInput, this.originX + osc1, this.originY);
    }

}

