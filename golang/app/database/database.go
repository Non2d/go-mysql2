package database

import (
	"fmt"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// MySQLに作成するUserテーブルの定義
type User struct {
	// gorm.Modelをつけると、idとCreatedAtとUpdatedAtとDeletedAtが作られる
	gorm.Model

	Name string
	Age  int
}

// 外部参照可能なDB変数を定義
var Db *gorm.DB

// dbInit()が呼び出されたときに最初に処理される関数
func init() {
	Db = dbInit()
	// Userテーブル作成
	Db.AutoMigrate(&User{})
}

// DBを起動させる
func dbInit() *gorm.DB {
	// [ユーザ名]:[パスワード]@tcp([ホスト名]:[ポート番号])/[データベース名]?charset=[文字コード]
	dsn := fmt.Sprintf(`%s:%s@tcp(db:3306)/%s?charset=utf8mb4&parseTime=True`, os.Getenv("MYSQL_USER"), os.Getenv("MYSQL_PASSWORD"), os.Getenv("MYSQL_DATABASE"))
	// DBへの接続を行う
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	// エラーが発生した場合、エラー内容を表示
	if err != nil {
		fmt.Println(err)
	}
	// 接続に成功した場合、「db connected!!」と表示する
	fmt.Println("db connected!!")
	return db
}
