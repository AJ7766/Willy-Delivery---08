# Willy-Delivery---08

Willy Delivery är en hemsida som skall låta användaren att beställa hem olika godissorter. Vår målgrupp är för personer som gillar att äta godis. Det finns olika hemsidor som är lik Willy Deliver som t.ex. Fodora eller Uber eats. Men ingen av dessa webbplatser säljer en skräddarsydd godispåse utan de säljer godispåsarna viktvis med blandade lösgodis som t.ex. ”500g, 1000g” men kunderna vet aldrig vad de får. Med Willy delivery vill vi ändra på det. Vi vill att kunderna skall kunna välja hur mycket och vilka godis de vill ha i sin godispåse och att det inte skall vara slumpmässigt.

Instruktioner:
Ni bör ha installerat Python och Postgresql för att programmet skall fungera.
Vi använder oss av ramverket flask, för att hemsidan skall fungera så måste en del filer måste installeras.

Ni skall ladda ner githuben som en zip och sedan unzipa den på valfritt ställe lokalt.
1. Starta Kommandotolken eller Terminal för er som använder Mac.
2. Först måste vi ta reda på vilken version av Python ni använder och där med kan ni skriva in "pip -V". Ni kommer att få fram en liknande text som:

C:\Users\Jackie>pip -V
pip 19.2.3 from c:\users\jackie\appdata\local\programs\python\python37\lib\site-packages\pip (python 3.7)

I slutet av texten kan ni se vilken version av Python ni använder, i detta fallet använder jag (python 3.7)

3. Beroende på vilken Python version ni använder skall ni skriva pip2 ifall ni använder (python 2.x) och pip3 ifall det är (python 3.x)-I kommandotolken skall ni skriva in följande koder:
pip3 install psycopg2-binary
pip3 install flask
pip3 install flask_wtf
pip3 install email_validator

4. Efter att ni har installerat flask och alla importer som krävs för att köra programmet, skall ni öppna flask_app.py som finns i Willy-Deilivery---08 mapen med Visual Studio Code och trycka på "Run" --> "Start Debugging" --> "Python File".
5. I Visual Studio Codes Terminal längst ned under koden skall ni kunna se en rad där det står "Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)" Det innebär att ni lyckades köra programmet och kan nu besöka hemsidan via http://127.0.0.1:5000/



          
    


