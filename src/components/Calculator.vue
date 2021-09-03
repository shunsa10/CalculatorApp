<template>
<div>
     <input class="form-control" type="text" v-model.trim="value" v-on:blur="validate" style="text-align: right">
    <table align="center">
    <tr>
        <td><button @click="clear()">C</button></td>
        <td><button @click="clearAll()">CA</button></td>
        <td><button @click="chooseArithmetic('%');">%</button></td>
        <td><button @click="chooseArithmetic('×');">×</button></td>
    </tr>
    <tr>
        <td><button @click="chooseNumber('7');">7</button></td>
        <td><button @click="chooseNumber('8');">8</button></td>
        <td><button @click="chooseNumber('9');">9</button></td>
        <td><button @click="chooseArithmetic('÷');">÷</button></td>
    </tr>
    <tr>
        <td><button @click="chooseNumber('4');">4</button></td>
        <td><button @click="chooseNumber('5');">5</button></td>
        <td><button @click="chooseNumber('6');">6</button></td>
        <td><button @click="chooseArithmetic('-');">-</button></td>
    </tr>
    <tr>
        <td><button @click="chooseNumber('1');">1</button></td>
        <td><button @click="chooseNumber('2');">2</button></td>
        <td><button @click="chooseNumber('3');">3</button></td>
        <td><button @click="chooseArithmetic('+');">+</button></td>
    </tr>
    <tr>
        <td><button @click="chooseNumber('0');">0</button></td>
        <td><button @click="chooseNumber('.');">.</button></td>
        <td><button @click="calculationResult();">=</button></td>
    </tr>
</table>
</div>
</template>

<script>
export default {


}
</script>