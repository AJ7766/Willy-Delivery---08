def lookforsimilar(sok, name):
    for x in name:
        print(x[0])
        print(sok)
        if sok.lower() in x[0].lower():
            sok = x[0]
    return sok

def splitString(innehaller):
    for x in innehaller:
        print(innehaller[0]) #skriv en funktion som delar vid ,
    return
