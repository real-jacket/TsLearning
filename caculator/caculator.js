{
    var caculator = /** @class */ (function () {
        function caculator() {
            this.buttonList = [
                ['AC', 'Del', '%', '÷'],
                ['7', '8', '9', '×'],
                ['4', '5', '6', '-'],
                ['1', '2', '3', '+'],
                ['0', '.', '=']
            ];
            this.firstNum = '';
            this.lastNum = '';
            this.operator = '';
            this.show = '';
            this.initLayout();
            this.creatButtons();
            this.bindEvent();
        }
        caculator.prototype.initLayout = function () {
            var container = document.createElement('div');
            container.classList.add('container');
            this.container = container;
            var display = document.createElement('div');
            display.classList.add('output');
            this.output = display;
            this.container.appendChild(this.output);
            this.num = document.createElement('span');
            this.num.textContent = '0';
            this.num.classList.add('num');
            this.output.appendChild(this.num);
            document.querySelector('body').appendChild(this.container);
        };
        caculator.prototype.creatButtons = function () {
            var _this = this;
            this.buttonList.forEach(function (textList, index) {
                var div = document.createElement('div');
                div.classList.add('row');
                textList.forEach(function (text) {
                    _this.creatButton(text, div, "text-" + text);
                });
                _this.container.appendChild(div);
            });
        };
        caculator.prototype.creatButton = function (text, wrapper, className) {
            var button = document.createElement('button');
            button.textContent = text;
            button.classList.add('text', className);
            wrapper.appendChild(button);
        };
        caculator.prototype.changeNum = function (text) {
            if (this.operator) {
                this.lastNum += text;
            }
            else {
                this.firstNum += text;
            }
            this.show += text;
            this.num.textContent = this.show;
        };
        caculator.prototype.caculate = function () {
            var n1 = parseFloat(this.firstNum);
            var n2 = parseFloat(this.lastNum);
            switch (this.operator) {
                case '÷':
                    this.show = (n1 / n2).toString();
                    break;
                case '×':
                    this.show = (n1 * n2).toString();
                    break;
                case '-':
                    this.show = (n1 - n2).toString();
                    break;
                case '+':
                    this.show = (n1 + n2).toString();
                    break;
                default:
                    break;
            }
            this.firstNum = this.show;
            this.operator = null;
            this.lastNum = '';
            this.num.textContent = this.show;
        };
        caculator.prototype.percent = function () {
            if (this.operator) {
                this.lastNum = (parseFloat(this.lastNum) / 100).toString();
                this.show = this.firstNum + this.operator + this.lastNum;
            }
            else {
                this.firstNum = (parseFloat(this.firstNum) / 100).toString();
                this.show = this.firstNum;
            }
            this.num.textContent = this.show;
        };
        caculator.prototype.bindEvent = function () {
            var _this = this;
            this.container.addEventListener('click', function (event) {
                if (event.target instanceof HTMLButtonElement) {
                    var text = event.target.textContent;
                    if ('0123456789.'.indexOf(text) >= 0) {
                        _this.changeNum(text);
                    }
                    else if ('÷×-+'.indexOf(text) >= 0) {
                        _this.operator = text;
                        _this.show += text;
                        _this.num.textContent = _this.show;
                    }
                    else if (text === '=') {
                        _this.caculate();
                    }
                    else if (text === 'AC') {
                        _this.firstNum = '';
                        _this.lastNum = '';
                        _this.operator = '';
                        _this.show = '';
                        _this.num.textContent = '0';
                    }
                    else if (text === '%') {
                        _this.percent();
                    }
                }
            });
        };
        return caculator;
    }());
    new caculator();
}
