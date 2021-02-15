
int bg = 0;

glitchText t = new glitchText();

void setup()
{
  size(3840,2160);
  background(bg);
  
  glitchText t;
}
void draw()
{
  background(bg);
    String day = String.valueOf(day());
    String month = String.valueOf(month());
    String year = String.valueOf(year());
    t.write(month+"/"+day+"/"+year,width/2,height/1.7,width/8);
  
  
}
