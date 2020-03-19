from flask import Flask
import pandas as pd
app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello World!"

# if __name__ == '__main__':
print(1)
app.run()