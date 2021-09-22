# Command-Master
URL https://command-master.com  
## デモ  

### ゲームモード  
![ゲーム](https://user-images.githubusercontent.com/76866582/132550571-c4715ee2-0644-49f7-be56-78db196e912f.gif)    

### 練習モード  
![練習](https://user-images.githubusercontent.com/76866582/132551062-2d17946b-13db-4e10-9b8a-6db43afadbef.gif)  

## サイト概要
コマンドマスターでは、VScodeのショートカットキーをゲーム感覚で学ぶことができます。  
直感的に楽しく学ぶことができるアプリとなっています。

### サイトテーマ
ショートカットキー・コマンドを学べる学習アプリ

### テーマを選んだ理由
自分自身ショートカットキーを意識して使うようになり、効率化できる分、他のことについて時間を割くことができるようになったからです。  
昨今では、仕事の効率化と言われている中で「脱マウス」への関心が高まっています。  
その背景には、マウスとキーボードの間を手が幾度となく行き来する「時間のムダ」と「作業ストレス」の改善へのニーズがあると考えました。  
実際に、前職での職場でもショートカットキーなどを使える方が少なかったので、 使える使えないでは、かなり差が出ていてその方達の役に立ちたいと思ったからです。  
ゲーム感覚で学ぶことができれば、 取り掛かりやすく、より多くの人が学べてコマンド、ショートカットキーを日常的に使えるようになると思いました。

### ターゲットユーザ
・日々の業務中でショートカットキーをうまく活用できていない方
・パソコンを日常的に使う方  


### 主な利用シーン
・使えるショートカットキーを増やしたいと思われる方であれば、どのようなシーンでも利用できます。
一気にショートカットキーのコマンドを覚えるのは難しいと思います。
そこで、、1日の中で、始業前などの隙間時間で利用していただければ、日常的に使えるコマンドが増えていきます。


## 設計書   

![ER図](https://user-images.githubusercontent.com/76866582/132534075-1dcaef65-3a62-4fd1-89fa-887de652f195.png)  
・ワイヤーフレーム  
https://drive.google.com/file/d/10rutLDTEoI5WyI22Hg3Eih6cRN9Dcmch/view?usp=sharing  
・画面遷移図  
https://drive.google.com/file/d/10rutLDTEoI5WyI22Hg3Eih6cRN9Dcmch/view?usp=sharing  
・詳細設計  
https://docs.google.com/spreadsheets/d/1CqD-Dpl0iYyahEASqE3h_a-tChcEEIb2CW9Zpy1F1k8/edit?usp=sharing  
・テーブル定義書  
https://docs.google.com/spreadsheets/d/1OdN-eTVas1kPd5Q0u45LvyXtNMwQhGkupLwIIJBInFU/edit?usp=sharing  

## チャレンジ要素一覧
https://docs.google.com/spreadsheets/d/1RMsxDNuzj0mV4-ZisW9dEEyne3W5kaY5EE100yutUug/edit?usp=sharing

## 環境・使用技術

### フロントエンド  
・Bootstrap 4.5.0  
・SCSS (BEM)  
・JavaScript、jQuery、Ajax  

### バックエンド  
・Ruby 2.6.3  
・Rails 5.2.5  

### 開発環境    
・MySQL2  

### 本番環境  
・AWS（EC2, RDSforSQL, Routes53, CloudWatch, S3）  
・MySQL2  
・Nginx, Puma  
・Github Actions  

### インフラ構成図  

### テスト
・Rspec（単体/結合）

### その他使用技術  
・非同期通信(いいね機能、プレイデータ送信)  
・Action Mailer  
・HTTPS接続(AWS Certificate Manager)  
・JavaScriptによるキーバインド取得  
