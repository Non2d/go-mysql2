# お天気 + Communication Card

**概要**

福井の学習用．
とりあえずmenDさんのお天気アプリが実装されている．
杉本さんのシステムのプロトタイプみたいなの作って遊びたい．
ディベート研究に使えそうなシステムもいくつか作ってみたい．

**システム構成**
・開発環境
　・Docker
　　・Docker上でReact,Go,MySQL，PHPMyAdminを動かしています
　　・リバースプロキシサーバはNginxにしました
・フロントエンド
　・React
　　・`.jsx`ファイル中心
　・装飾:Material UI
・バックエンド
　・Go
　　・フレームワーク：Echo
・データベース
　・MySQL

### 開発で使用するポート

port, 説明, container名
3000, クライアント/React
3306, データベース
8080, API/Go
8081, データベースの操作:PHPMyAdmin