from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)
openai.api_key = api_key


@app.route("/")
def index():
    html = render_template("index.html")
    return html

def process_by_gpt(message):
    
    return "ChatGPTで処理した {} に対するレスポンス".format(message)


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