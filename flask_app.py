from flask import Flask, render_template, url_for, flash, redirect, request
from flask_sqlalchemy import SQLAlchemy
from forms import RegistrationForm, LoginForm
import json
from os import listdir
import psycopg2
from function import *

app = Flask(__name__)

#lösen
app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'

DB_NAME ="iuynkqwn"
DB_USER ="iuynkqwn"
DB_PASS ="7SjVSYqjBepvGwJXaWsTVobOjluh0ihN"
DB_HOST ="balarama.db.elephantsql.com"
DB_PORT="5432"

conn =psycopg2.connect(database = DB_NAME, user = DB_USER, password = DB_PASS, host = DB_HOST, port = DB_PORT)
cursor=conn.cursor()

@app.route('/')
@app.route('/hem')
def home():
    return render_template('hem.html', title='Hem')

@app.route('/sorter')
def sorter():
    return render_template('sorter.html', title='Sorter')

@app.route('/produkter')
def produkter():
    cursor.execute('select * from produkter'); #hämta från databasen
    pro = cursor.fetchall() #Spara de hämtade
    return render_template('produkter.html', title='Produkter', produkt = pro)

@app.route('/kontakt')
def kontakt():
    return render_template('kontakt.html', title='kontakt')

@app.route('/omoss')
def omoss():
    return render_template('omoss.html', title='Om oss')

@app.route('/varukorg')
def varukorg():
    return render_template('varukorg.html', title='Varukorg')

@app.route('/admin')
def admin():
    return render_template('admin.html', title='Admin')

@app.route('/laddaupp')
def laddaupp():
    namn = request.form['namn']
    gram = request.form['gram']
    lank = request.form['lank']
    innehaller = request.form['innehaller'] 
    ingredienser = innehaller.split(',') #dela upp vid , och lägg in i ingrediens
    sort = request.form['sort']
    cursor.execute("Begin transaction;")
    cursor.execute('INSERT INTO produkter VALUES (%s, %s, %s)',(namn, gram, lank))
    cursor.execute('INSERT INTO sorter VALUES (%s, %s)',(sort, namn))
    for ingrediens in ingredienser:
        cursor.execute('INSERT INTO ingredienser VALUES (%s, %s)',(ingrediens, namn))
    cursor.execute("commit;")
    return render_template('laddaup.html', title='Laddaupp')

#SELECT * FROM candy WHERE name LIKE "%god%"
@app.route('/sok', methods=['GET', 'POST'])
def sok():
    sokt = request.form['searchBar'] #hämtar från input 
    fel = False
    cursor.execute('select * from produkter');
    produkter = cursor.fetchall() 
    sokt = lookforsimilar(sokt, produkter)
    cursor.execute('select * from sorter');
    sort = cursor.fetchall()
    sokt = lookforsimilar(sokt, sort)
    cursor.execute("select count(*) from produkter where namn='{0}'".format(sokt)); 
    antalp = cursor.fetchall()
    cursor.execute("select count(*) from sorter where namn='{0}'".format(sokt));
    antals = cursor.fetchall()
    if antalp[0][0] > 0:
        cursor.execute("select * from produkter where namn='{0}'".format(sokt)); 
        sok = cursor.fetchall()
    elif antals[0][0] > 0:
        cursor.execute("select produkter.* from produkter join sorter on produkter.namn=sorter.p_namn where sorter.namn='{0}'".format(sokt));
        sok = cursor.fetchall()  
    else: 
        sok='tyvärr fanns inte det du letar efter'
        fel = True 
    print(sok)
    return render_template('sok.html', title='Sök', produkt = sok, fel = fel)

    
if __name__ == '__main__':
    app.run(debug=True)