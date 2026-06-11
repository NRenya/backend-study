# Phase1 総合問題：ユーザー別注文集計

## 作るファイル

```text
phase1-js/037_user-order-summary.js
```

## 目的

ユーザー情報・商品情報・注文情報の3つの配列を使って、
指定したユーザーの注文内容を集計する。

## 使うデータ

### ユーザー一覧

```text
- id: 1, name: "レン", isPremium: true
- id: 2, name: "ナナ", isPremium: false
- id: 3, name: "タク", isPremium: false
```

### 商品一覧

```text
- id: 1, name: "ノート", price: 1200
- id: 2, name: "ペン", price: 300
- id: 3, name: "バッグ", price: 4500
- id: 4, name: "イヤホン", price: 6000
```

### 注文一覧

```text
- orderId: 101, userId: 1, productId: 1, quantity: 2
- orderId: 102, userId: 1, productId: 3, quantity: 1
- orderId: 103, userId: 2, productId: 2, quantity: 5
- orderId: 104, userId: 1, productId: 4, quantity: 1
- orderId: 105, userId: 3, productId: 2, quantity: 10
```

### 集計対象

```text
targetUserId: 1
```

## 出力結果

```text
購入者: レン
注文件数: 3件
注文商品: [ 'ノート x 2 = 2400円', 'バッグ x 1 = 4500円', 'イヤホン x 1 = 6000円' ]
割引前合計: 12900円
割引後合計: 11610円
ランク: VIP
```

## 条件

```text
ユーザー一覧・商品一覧・注文一覧は、それぞれ配列に入れる
各データはオブジェクトにする

targetUserId に一致するユーザーを探す
見つかったユーザーの id と一致する注文だけを取り出す
各注文の productId を使って、商品一覧から対応する商品を探す

各商品の小計は price × quantity で計算する
注文商品一覧は「商品名 x 個数 = 小計円」の文字列配列にする

割引前合計を出す
isPremium が true の場合は10%割引する
isPremium が false の場合は割引しない

割引後合計が10000円以上ならランクは VIP
それ以外ならランクは NORMAL

最後に指定の形で console.log する
```

## 使いそうなもの

```text
find
filter
map
reduce
if
配列
オブジェクト
関数
分割代入
文字列結合
```

## 実行コマンド

```bash
node phase1-js/037_user-order-summary.js
```

## メモ

いきなり文字列だけを作ると、あとから合計計算に使いづらい。
先に「商品名・個数・小計」を持つオブジェクト配列を作ると、表示にも合計にも使いやすい。
