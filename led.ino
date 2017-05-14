void setup() {
  Serial.begin(9600);
  pinMode(8, OUTPUT);
}

void loop() {
  int c=0;
  if(Serial.available()>0){
    c=Serial.read();
    if(c==49){
      digitalWrite(8, HIGH);
    }
    else if(c==48){
      digitalWrite(8, LOW);
    }
  }
}
