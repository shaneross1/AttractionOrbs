class glitchText
{
  PFont vcr;
  void setup()
  {
  
  }
  
  float originX;
  float originY;
  String textInput;
  void write(String input, float x, float y, float size)
  {
    originX = x;
    originY = y;
    textInput = input;
    vcr = createFont("vcr.ttf",32);
    //background(bg);
    textAlign(CENTER);
    textSize(size);
    
    textFont(vcr,size);
    
    text(textInput,originX,originY);
    
    t.dispersion(10,1000,.5,100);
  }
  void dispersion(float distance, float slowness, float noise, float jitterRarity)
  {
    float osc1 = cos(millis()/slowness)*distance+random(-noise,noise);
    float osc2 = sin(millis()/slowness)*distance+random(-noise,noise);
    
    textAlign(CENTER);
    
    if(int(random(jitterRarity))==1)
    {
      osc1 = osc2*-2;
      osc2 = osc1*-2;
      textAlign(RIGHT);
    }
    fill(0,0,0,random(240,255));
    text(textInput,originX,originY);
    fill(255,0,0,255);
    text(textInput,originX,originY+osc1);
    fill(0,0,255,255);
    text(textInput,originX,originY+osc2);
    fill(0,255,0,255);
    text(textInput,originX+osc1,originY);
    
  }
}
