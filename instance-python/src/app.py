from flask import Flask, jsonify, make_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/')
def instance_json():
    return jsonify({
        "Instancia": "Instance 2",
        "Curso": "Seminario de Sistemas 1",
        "Estudiante": "Xhunik Miguel - 201900462",
    })

@app.route('/check')
def check():
    response = make_response('', 200)  # Crea una respuesta vacía con código 200
    return response

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')