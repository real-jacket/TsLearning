{
    class caculator {
        public buttonList: Array<Array<string>> = [
            ['AC', 'Del', '%', '÷'],
            ['7', '8', '9', '×'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '+'],
            ['0', '.', '=']
        ];
        public container: HTMLElement;
        public output: HTMLElement;
        public num: HTMLSpanElement;
        public firstNum: string = '';
        public lastNum: string = '';
        public operator: string = '';
        public show: string = '';
        constructor() {
            this.initLayout();
            this.creatButtons();
            this.bindEvent()
        }
        initLayout(): void {
            let container = document.createElement('div');
            container.classList.add('container');
            this.container = container;
            let display = document.createElement('div');
            display.classList.add('output');
            this.output = display
            this.container.appendChild(this.output);
            this.num = document.createElement('span');
            this.num.textContent = '0';
            this.num.classList.add('num');
            this.output.appendChild(this.num);
            document.querySelector('body').appendChild(this.container);
        }
        creatButtons(): void {
            this.buttonList.forEach((textList: Array<string>, index) => {
                let div = document.createElement('div');
                div.classList.add('row');
                textList.forEach((text: string) => {
                    this.creatButton(text, div, `text-${text}`)
                })
                this.container.appendChild(div);
            })
        }
        creatButton(text: string, wrapper: HTMLElement, className: string) {
            let button = document.createElement('button');
            button.textContent = text;
            button.classList.add('text', className);
            wrapper.appendChild(button);
        }
        changeNum(text: string): void {
            if (this.operator) {
                this.lastNum += text
            } else {
                this.firstNum += text
            }
            this.show += text
            this.num.textContent = this.show
        }
        caculate(): void {
            const n1 = parseFloat(this.firstNum)
            const n2 = parseFloat(this.lastNum)
            switch (this.operator) {
                case '÷':
                    this.show = (n1 / n2).toString()
                    break;
                case '×':
                    this.show = (n1 * n2).toString()
                    break;
                case '-':
                    this.show = (n1 - n2).toString()
                    break;
                case '+':
                    this.show = (n1 + n2).toString()
                    break;
                default:
                    break;
            }
            this.firstNum = this.show;
            this.operator = null;
            this.lastNum = ''
            this.num.textContent = this.show
        }
        percent(): void {
            if (this.operator) {
                this.lastNum = (parseFloat(this.lastNum) / 100).toString();
                this.show = this.firstNum + this.operator + this.lastNum;
            } else {
                this.firstNum = (parseFloat(this.firstNum) / 100).toString()
                this.show = this.firstNum
            }
            this.num.textContent = this.show
        }
        bindEvent(): void {
            this.container.addEventListener('click', event => {
                if (event.target instanceof HTMLButtonElement) {
                    const text = event.target.textContent;
                    if ('0123456789.'.indexOf(text) >= 0) {
                        this.changeNum(text);
                    } else if ('÷×-+'.indexOf(text) >= 0) {
                        this.operator = text
                        this.show += text
                        this.num.textContent = this.show
                    } else if (text === '=') {
                        this.caculate()
                    } else if (text === 'AC') {
                        this.firstNum = '';
                        this.lastNum = '';
                        this.operator = '';
                        this.show = '';
                        this.num.textContent = '0';
                    } else if (text === '%') {
                        this.percent();
                    } else if (text === 'Del') {

                    }
                }
            })
        }
    }

    new caculator();
}