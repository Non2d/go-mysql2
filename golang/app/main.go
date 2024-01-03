package main

import (
	"app/handler"

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

	/* ここから追加 */
	// ルートを設定（第一引数にエンドポイント、第二引数にハンドラーを指定）
	e.GET("/users", handler.GetAllUser)
	e.POST("/users", handler.PostNewUser)
	e.GET("/users/:id", handler.GetOneUser)
	e.PUT("/users/:id", handler.PutUser)
	e.DELETE("/users/:id", handler.DeleteUser)
	/* ここまで */

	// サーバーをポート番号8080で起動
	e.Logger.Fatal(e.Start(":8080"))
}
