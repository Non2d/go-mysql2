package main

import (
	"app/handler"
	"os"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	// Echoインスタンスを作成
	e := echo.New()

	// ミドルウェアを設定
	e.Use(middleware.Logger())  // ログ出力
	e.Use(middleware.Recover()) // パニック時にリカバリー
	e.Use(middleware.CORS())    // CORS設定を追加

	// 環境変数からAPIのプレフィックスを取得
	apiPrefix := os.Getenv("API_PREFIX")
	if apiPrefix == "" {
		apiPrefix = "/" // デフォルトのプレフィックス
	}

	// ルートを設定（第一引数にエンドポイント、第二引数にハンドラーを指定）
	e.GET(apiPrefix+"users", handler.GetAllUser)
	e.POST(apiPrefix+"users", handler.PostNewUser)
	e.GET(apiPrefix+"users/:id", handler.GetOneUser)
	e.PUT(apiPrefix+"users/:id", handler.PutUser)
	e.DELETE(apiPrefix+"users/:id", handler.DeleteUser)

	// サーバーをポート番号8080で起動
	e.Logger.Fatal(e.Start(":8080"))
}
