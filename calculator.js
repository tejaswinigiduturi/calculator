<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calculator - By Code Traversal</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }

        body {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(45deg, #0a3f42, #000000);
        }

        .calculator {
            border: 1px solid #717377;
            padding: 20px;
            border-radius: 16px;
            background: linear-gradient(45deg, #282525, #15adc8);
            box-shadow: 0px 3px 15px rgba(78, 167, 227, 0.5);

        }

        input {
            width: 320px;
            border: none;
            padding: 24px;
            margin: 10px;
            background: rgb(6, 2, 2);
            box-shadow: inset 0 2px 5px rgb(0, 0, 0);
            font-size: 48px;
            text-align: right;
            cursor: text;
            color: #ffffff;
            border-radius: 10px;
            font-weight: 400;


        }

        input::placeholder {
            color: #ffffff;
        }

        button {
            border: none;
            width: 60px;
            height: 60px;
            margin: 10px;
            border-radius: 50%;
            background: linear-gradient(45deg, #0d21d6, #6e94b6);
            color: #ffffff;
            font-size: 20px;
            box-shadow: -4px -4px 10px rgba(14, 0, 0, 0.1);
            cursor: pointer;
            font-weight: bold;
        }

        .equalBtn {
            background: #fb7c14;
        }

        .operator {
            background: #d63d3d;
            color: #f6f6f6;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="calculator">
            <input type="text" id="inputBox" placeholder="0" />
            <div>
                <button onclick="clearDisplay()" class="button operator">AC</button>
                <button onclick="del()" class="button operator">DEL</button>
                <button onclick="appendToDisplay('%')" class="button operator">%</button>
                <button onclick="appendToDisplay('/')" class="button operator">/</button>
            </div>
            <div>
                <button onclick="appendToDisplay('7')" class="button">7</button>
                <button onclick="appendToDisplay('8')" class="button">8</button>
                <button onclick="appendToDisplay('9')" class="button">9</button>
                <button onclick="appendToDisplay('*')" class="button operator">X</button>
            </div>
            <div>
                <button onclick="appendToDisplay('4')" class="button">4</button>
                <button onclick="appendToDisplay('5')" class="button">5</button>
                <button onclick="appendToDisplay('6')" class="button">6</button>
                <button onclick="appendToDisplay('-')" class="button operator">-</button>
            </div>
            <div>
                <button onclick="appendToDisplay('1')" class="button">1</button>
                <button onclick="appendToDisplay('2')" class="button">2</button>
                <button onclick="appendToDisplay('3')" class="button">3</button>
                <button onclick="appendToDisplay('+')" class="button operator">+</button>
            </div>

            <div>
                <button onclick="appendToDisplay('00')" class="button">00</button>
                <button onclick="appendToDisplay('0')" class="button">0</button>
                <button onclick="appendToDisplay('.')" class="button">.</button>
                <button onclick="calculate()" class="button equalBtn">=</button>
            </div>
        </div>
    </div>

    <script>
        const display = document.getElementById('inputBox');

        function appendToDisplay(input) {
            display.value += input;
        }

        function clearDisplay() {
            display.value = '';
        }

        function del() {
            display.value = display.value.slice(0, -1);
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        }

    </script>
</body>

</html>
