from flask import Flask, request, redirect, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['DEBUG'] = True
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://gamez:gamez@localhost:8889/gamez'
app.config['SQLALCHEMY_ECHO'] = True
db = SQLAlchemy(app)

class user(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    score = db.Column(db.Integer)

    def __init__(self, name, score):
        self.name = name
        self.score = score

@app.route("/", methods=['GET'])
def index():
    if request.method == 'GET':
        return render_template("gamez.html")
    else:
        name = 
        score = 
        newUser = user(name=name, score=score)
        db.session.add(newUser)
        db.session.commit()
        return redirect("/")

if __name__ == '__main__':
    app.run()