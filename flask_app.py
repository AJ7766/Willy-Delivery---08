from datetime import datetime
from flask import Flask, render_template, url_for, flash, redirect, request
from flask_sqlalchemy import SQLAlchemy
from forms import RegistrationForm, LoginForm
import json
from os import listdir
import psycopg2

app = Flask(__name__)
#lösen
app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'

@app.route('/')
@app.route('/hem')
def home():
    return render_template('hem.html', title='Hem')

@app.route('/sorter')
def sorter():
    return render_template('sorter.html', title='Sorter')

@app.route('/produkter')
def produkter():
    cursor.execute('select * from produkt'); #hämta från databasen
    pro = cursor.fetchall() #Spara de hämtade
    return render_template('produkter.html', title='Produkter', produkt = pro)

@app.route('/kontakt')
def kontakt():
    return render_template('kontakt.html', title='kontakt')

@app.route('/omoss')
def omoss():
    return render_template('omoss.html', title='Om oss')

@app.route('/erbjudande')
def erbjudande():
    return render_template('erbjudande.html', title='Erbjudanen')

@app.route('/varukorg')
def varukorg():
    return render_template('varukorg.html', title='Varukorg')

@app.route('/admin')
def admin():
    return render_template('admin.html', title='Admin')

#SELECT * FROM candy WHERE name LIKE "%god%"
@app.route('/sok', methods=['GET', 'POST'])
def sok():
    sokt = request.form['searchBar'] #hämtar från input 
    fel = False
    #kolla om produkt eller sort är felstavat eller likar
    if "sur" in sokt:
        sokt = 'sur'
    if "söt" in sokt:
        sokt = 'söt'
    if "dödsk" in sokt or 'skalle' in sokt:
        sokt = 'dödskalle'
    if "bubb" in sokt or 'liz' in sokt:
        sokt = 'bubblizz'
    cursor.execute("select count(*) from produkt where namn='{0}'".format(sokt)); 
    antalp = cursor.fetchall()
    cursor.execute("select count(*) from sort where namn='{0}'".format(sokt));
    antals = cursor.fetchall()
    if antalp[0][0] > 0:
        cursor.execute("select * from produkt where namn='{0}'".format(sokt)); 
        sok = cursor.fetchall()
    elif antals[0][0] > 0:
        cursor.execute("select produkt.* from produkt join sort on produkt.namn=sort.p_namn where sort.namn='{0}'".format(sokt));
        sok = cursor.fetchall()  
    else: 
        sok='tyvärr fanns inte det du letar efter'
        fel = True 
    print(sok)
    return render_template('sok.html', title='Sök', produkt = sok, fel = fel)

    
if __name__ == '__main__':
    app.run(debug=True)
