from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/api/run-command', methods=['POST'])
def run_command():
    command = request.json.get('command')
    if not command:
        return jsonify({'error': 'No command provided'}), 400

    try:
        result = subprocess.run(['bash', '-c', command], capture_output=True, text=True, check=True)
        return jsonify({'output': result.stdout}), 200
    except subprocess.CalledProcessError as e:
        return jsonify({'error': str(e), 'output': e.output}), 500

if __name__ == '__main__':
    app.run(debug=True)