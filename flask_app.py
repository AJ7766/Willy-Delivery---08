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
    cursor.execute('select * from produkter join product_info on produkter.namn = product_info.name order by produkter.namn'); #hämta från databasen
    pro = cursor.fetchall() #Spara de hämtade
    return render_template('produkter.html', title='Produkter', produkt = pro)

@app.route('/filtrera', methods=['POST']) #Filtrering av produkterna beroende på vilken sort som är vald
def filtrera():
    if request.form.get('karamell'):
        kategori="'karamell'"
    elif request.form.get('choklad'):
        kategori="'choklad'"
    elif request.form.get('gele'):
        kategori="'gele'"
    elif request.form.get('skum'):
        kategori="'skum'"
    elif request.form.get('lakrits'):
        kategori="'lakrits'"
    elif request.form.get('drage'):
        kategori="'drage'"
    elif request.form.get('tuggummi'):
        kategori="'tuggummi'"
    elif request.form.get('kola'):
        kategori="'kola'"
    else:
        kategori="'karamell' or sorter.namn='choklad' or sorter.namn='gele' or sorter.namn='skum' or sorter.namn='lakrits' or sorter.namn='drage' or sorter.namn='tuggummi' or sorter.namn='kola'"

    cursor.execute("select produkter.namn, produkter.bild, produkter.pris, sorter.p_namn,product_info.ingredients, sorter.namn from produkter join sorter on produkter.namn = sorter.p_namn join product_info on produkter.namn = product_info.name where sorter.namn={0} order by produkter.namn".format(kategori))
    valdagodisar= cursor.fetchall()
    print(valdagodisar)

    return render_template('produkter.html', title='Produkter', produkt = valdagodisar)

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
    cursor.execute("select count(*) from produkter where namn='{0}'".format(sokt)); 
    antalp = cursor.fetchall()
    if antalp[0][0] > 0:
        cursor.execute("select * from produkter join product_info on produkter.namn = product_info.name where produkter.namn='{0}' order by produkter.namn".format(sokt)); 
        sok = cursor.fetchall()
    else: 
        sok='tyvärr fanns inte det du letar efter'
        fel = True 
    print(sok)
    return render_template('sok.html', title='Sök', produkt = sok, fel = fel)

if __name__ == '__main__':    app.run(debug=True)

cursor.close()