from flask import Flask, render_template, request, jsonify
import openai
import os
from dotenv import load_dotenv

load_dotenv('.env', verbose=True)
openai.api_key = os.getenv('CHATGPT_API_KEY')

app = Flask(__name__)

@app.route("/")
def index():
    html = render_template("index.html")
    return html

def process_by_gpt(message):
    res = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
                {"role": "user", "content": message},
            ]
    )
    generated_text = res["choices"][0]["message"]["content"]
    return "ChatGPT_message:{}".format(generated_text)


@app.route("/endpoint", methods=["POST"])
def endpoint():
    # エンドポイントにPOSTされたリクエストボディからメッセージを取得
    message = request.json["message"] 
    print("user_message: {}".format(message))
    
    # ChatGPTで処理した結果のメッセージ
    gpt_res_message = process_by_gpt(message)
    
    # 画面側に渡すレスポンスを作成
    response_data = {"gpt_res_message": gpt_res_message}
    
    # レスポンスをJSON形式で返す
    return jsonify(response_data) 


if __name__ == "__main__":
    app.run(debug=True)