<template>
<div id="wrap">
    <div>
        <div :showNum="showNum" class="result">{{ showNum }}</div>
        <p>
            OP : <b>{{ currentOperator }}</b>
        </p>
        <div class="buttons">

            <v-btn class="mx-2" fab dark color="indigo" @click="clearAll">
                <v-icon dark>
                    AC
                </v-icon>
            </v-btn>
            <div class="numop">
                <div class="num">
                    <v-btn class="mx-2" fab dark color="indigo" v-for="num in buttons.num" :key="num" :id="'btn-' + num" @click="selectNumber(num);">
                        <v-icon dark>
                            {{ num }}
                        </v-icon>
                    </v-btn>
                </div>

                <div class="op">
                    <v-btn class="mx-2" fab dark v-for="op in buttons.op" :key="op" :id="'btn-' + op" @click="selectOparator(op);">
                        <v-icon dark>
                            {{ op }}
                        </v-icon>
                    </v-btn>
                </div>
            </div>

            <v-btn class="mx-2" fab dark color="teal" @click="showResult">
                <v-icon dark>
                    =
                </v-icon>
            </v-btn>
        </div>
    </div>
</div>
</template>

<script>
// import Log from '../views/Log.vue'
export default {
    // components: {
    //     Log
    // },
    name: 'FloatingButtons',
    data() {

        return {
            buttons: {
                num: [
                    "7", "8", "9",
                    "3", "4", "5",
                    "1", "2", "3",
                    "0", "00", ".",
                ],
                op: ["+", "mdi-minus", "/", "*"]
            },
            isInsertNumber: true, // 数字入力中かどうかインサート
            isResult: false, // =を押した後かどうか
            currentOperator: "", // 現在選択中の演算子
            currentNumber: "0", // 現在選択中の数字
            numArray: [], // 押した数字の配列を格納する
            opArray: [] // 押した演算子の配列を格納する
        };
    },

    //算出プロパティ 演算や文字列の連結を使用
    computed: {
        //divの中身
        showNum() {
            let result;
            //数字入力中なら
            if (this.isInsertNumber) {

                //入力された文字を格納
                let text = String(this.currentNumber);

                //textに入った文字の中で置換対象の文字を精査
                let newText = text.replace(/^0{1,}([^.])/, "$1");

                //入った文字を代入
                result = newText;

            } else {
                result = this.total();
            }
            return result;
        }
    },
    methods: {
        // 全ての計算結果を出す
        total() {
            //配列の要素を取り出して処理後returnを返す
            return this.numArray.reduce((prev, next, index) => {
                return this.setTotalNum(prev, next, index - 1);
            });
        },
        // 前後の数字を演算子ごとに計算して値を返すsetTotalNum
        //prev 前
        //next 後
        //index 演算子
        setTotalNum(prev, next, index) {

            if (this.opArray[index] === "+") {
                return prev + next;
            } else if (this.opArray[index] === "mdi-minus") {
                return prev - next;
            } else if (this.opArray[index] === "/") {
                return prev / next;
            } else if (this.opArray[index] === "*") {
                return prev * next;
            } else if (this.opArray[index] === "%") {
                return prev % next;
            }
        },
        // 数字ボタンを押した時
        selectNumber(num) {
            // 正負を逆にする
            //   if (num === "+/-") {
            //     if (!this.isInsertNumber) return;
            //     this.currentNumber = -1 * this.currentNumber;
            //     return;
            //   }

            // = を押したなら、０、falseに戻す
            if (this.isResult) {
                this.currentNumber = "0";
                this.isResult = false;
            }
            // = 演算子を押した直後
            //例 3 + 3 = 6 + 3.......
            if (!this.isInsertNumber) {
                this.opArray.push(this.currentOperator);
                this.currentNumber = "0";
                this.isInsertNumber = true;
            }
            // numに小数点があり、currentNumbeに[.]なければ[.]は何も返さなくなる
            if (num === "." && this.currentNumber.indexOf(".") > -1) {
                return;
            }
            //各numをクリック時currentNumberに代入
            this.currentNumber += num;
        },
        // 演算子ボタンを押した時
        selectOparator(op) {
            //数字を入力中なら配列に押した数字を格納
            if (this.isInsertNumber) {
                this.numArray.push(Number(this.currentNumber));
                this.isInsertNumber = false;
            }
            //演算子を代入
            this.currentOperator = op;
        },

        // =を押した時
        showResult() {
            // 数字入力時 かつ カレント演算子有り かつ =ボタンを押していない
            if (this.isInsertNumber && this.currentOperator && !this.isResult) {
                this.numArray.push(Number(this.currentNumber));
                this.currentOperator = "";
                //totalを実行する
                this.currentNumber = this.total();
                this.numArray = [];
                this.opArray = [];
                this.isResult = true;
            }
        },

        // acを押した時
        //初期値に戻す
        clearAll() {
            this.numArray = [];
            this.opArray = [];
            this.currentNumber = 0;
            this.currentOperator = "";
            this.isInsertNumber = true;
        }
    }

}
</script>

<style lang="scss">
#wrap {
    div {
        text-align: center;

    }

    .result {
        font-size: 30px;
        font-weight: bold;
        margin: 0 auto 20px;
    }

    .buttons {

        flex-wrap: wrap;
        justify-content: space-between;
        width: 250px;
        margin: 0 auto 1rem;

        .numop {
            display: flex;
            height: 280px;
        }

        .num {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .op {
            display: flex;
            margin-left: .5rem;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        /* button {
    width: 30%;
    margin: 0 0 10px;
    font-size: 15px;
    background: rgb(34, 32, 32);
  } */
        .mx-2 {
            margin: 0 0 10px;

        }
    }
}
</style>
