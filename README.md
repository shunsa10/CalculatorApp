### Compiles and hot-reloads for development
```
npm run serve
```

###基礎

例：
エレメントで指定したapp(HTML内のidタグ)の中の{{}}とdataの中の値を比べている
```
new Vue({
    el:"#app",
    data:{
        number:0
    }
})
```




### MVVMはModel-View-ViewModelの頭文字

Vue.js はインタラクティブな Web インターフェイスを作るためのライブラリです。
技術的に、Vue.js は MVVM パターンの ViewModel レイヤに注目しています。それは two way (双方向)バインディングによって View と Model を接続します。実際の DOM 操作と出力の形式はディレクティブとフィルタによって抽象化されています。

model	JavaScrptのコード	データ処理の主体
view	DOM(最終的なhtml)	人間に情報を伝える、操作を受け付ける末端
ViewModel	vue.js	modelで処理したデータをどんなふうにveiwに流し込むかの制御、viewで受けた操作をmodelに伝える





### MVVMの実現のために重要なData binding

Vue.jsがMVVMを実現するために取り入れている仕組みにData bindingがあります。

Data bindingは、よく「データを流し込む目印を打ち込む」と表現されます。まさにこの言葉がすべてを表しています。本解説の肝、「props down, event up」で再度、上記の表現について触れます。Data Bindingは、その言葉が表すように __”データを特定の個所に結びつけます”__。

しがたって、元のデータが途中で変わっても目印を打ち込んであるので、自動で（Vue.jsが勝手に）目印を打ち込んだ箇所の値を書き換えてくれます。素敵ですね。

一方で誤解しやすいのがこのData bindingという考え方です。

ついつい、Vue.jsにおけるData bindingは、常に双方向にデータが流れ込むものだと思ってしまいます。（特にv-modelに値をバインドすれば値の変更に対応できることを知ったばかりの初心者さんはそう思ってしまう。）もちろん、Vue.jsとしては双方向にデータのやり取りは可能です。しかし、単純なData bindingだけですべての仕様を実現することはできません。

