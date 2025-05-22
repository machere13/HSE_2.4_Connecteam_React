from flask import Flask, request, jsonify
from flask_cors import CORS
import pymorphy2

app = Flask(__name__)
CORS(app)
morph = pymorphy2.MorphAnalyzer()

@app.route('/lemmatize', methods=['POST'])
def lemmatize():
    data = request.get_json()
    text = data.get("text", "")
    words = text.lower().split()
    lemmas = [morph.parse(word)[0].normal_form for word in words]
    return jsonify({"lemmas": lemmas})

if __name__ == '__main__':
    app.run(port=5000)
