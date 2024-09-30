from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS  # For handling cross-origin requests

app = Flask(__name__, static_folder='public')
CORS(app)  # Enable CORS for all routes

# Fake prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        # Hardcoded mock prediction value for the demo
        fake_prediction = "Class A"  # You can replace this with any class or result you want
        return jsonify({'prediction': fake_prediction})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Serve the predict.html file
@app.route('/predict-form')
def predict_form():
    return send_from_directory('public', 'predict.html')

if __name__ == '__main__':
    app.run(debug=True)
