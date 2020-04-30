from datetime import datetime
from flask import Flask, render_template, url_for, flash, redirect
from flask_sqlalchemy import SQLAlchemy
from forms import RegistrationForm, LoginForm

app = Flask(__name__)
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
    cursor.execute('select * from produkt'); 
    pro = cursor.fetchall()
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

@app.route('/admin')
def admin():
    return render_template('admin.html', title='Admin')

@app.route('/sok', methods=['GET', 'POST'])
def sok():
    sokt = request.form['searchBar']
    cursor.execute("select count(*) from produkt where namn='{0}'".format(sokt));
    antalp = cursor.fetchall()
    cursor.execute("select count(*) from sort where namn='{0}'".format(sokt));
    antals = cursor.fetchall()
    if antalp[0][0] > 0:
        cursor.execute("select * from produkt where namn='{0}'".format(sokt)); 
        sok = cursor.fetchall()
    elif antals[0][0] > 0:
        cursor.execute("SELECT produkt.* FROM produkt, sort WHERE sort.namn='{0}'".format(sokt));
        sok = cursor.fetchall() 
        #gör en join så vi får ut korrekt 
    else: 
        sok='tyvärr fanns inte det du letar efter' 
    return render_template('sok.html', title='Sök', produkt = sok)


if __name__ == '__main__':
    app.run(debug=True)
