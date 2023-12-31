package main

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	// Echoインスタンスを作成
	e := echo.New()

	// httpリクエストの情報をログに表示
	e.Use(middleware.Logger())
	// パニックを回復し、スタックトレースを表示
	e.Use(middleware.Recover())

	// ルートを設定（第一引数にエンドポイント、第二引数にハンドラーを指定）
	e.GET("/", hello)

	// サーバーをポート番号8080で起動
	e.Logger.Fatal(e.Start(":8080"))
}

// ハンドラーを定義（どういう処理を実行するか）
func hello(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}
