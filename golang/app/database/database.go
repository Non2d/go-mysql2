package database

import (
	"errors"
	"fmt"
	"os"
	"time"

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
	time.Sleep(5 * time.Second)
	// [ユーザ名]:[パスワード]@tcp([ホスト名]:[ポート番号])/[データベース名]?charset=[文字コード]
	dsn := fmt.Sprintf(`%s:%s@tcp(db:3306)/%s?charset=utf8mb4&parseTime=True`,
		os.Getenv("MYSQL_USER"), os.Getenv("MYSQL_PASSWORD"), os.Getenv("MYSQL_DATABASE"))
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

// ここから追加

// レコード全件取得
func ReadAll(db *gorm.DB) ([]User, error) {
	// user構造体のスライスを作成
	users := []User{}
	// 全てのuser情報を取得
	result := db.Find(&users)
	// エラー発生時はエラー内容を表示
	if result.Error != nil {
		return users, result.Error
	}
	// 全てのuser情報を返す
	return users, result.Error
}

// レコード単体取得
func ReadOne(db *gorm.DB, id int) (User, error) {
	// user構造体を作成
	user := User{}
	// 特定のidのuser情報を取得
	result := db.First(&user, id)
	// idが見つからない場合はエラー内容を表示
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		return user, result.Error
	}
	// 特定のuser情報を返す
	return user, result.Error
}

// レコード作成
func InsertUser(db *gorm.DB, name string, age int) error {
	// 引数を元に追加するuser構造体を作成
	user := User{
		Name: name,
		Age:  age,
	}
	// 新規userを作成する
	result := db.Create(&user)
	// エラー発生時はエラー内容を表示
	if result.Error != nil {
		return result.Error
	}

	return nil
}

// レコード更新
func UpdateUser(db *gorm.DB, id int, name string, age int) error {
	// 更新するユーザを取得する
	user, err := ReadOne(db, id)
	if err != nil {
		return err
	}
	// 構造体にidがある場合はupdateされる
	user.Name = name
	user.Age = age
	result := db.Save(&user)
	// エラー発生時はエラー内容を表示
	if result.Error != nil {
		return result.Error
	}

	return nil
}

// レコード削除
func DeleteUser(db *gorm.DB, id int) (User, error) {
	// 削除するuser情報を取得
	user, err := ReadOne(db, id)
	if err != nil {
		return user, err
	}
	// DeletedAtがある場合は論理削除になる
	db.Where("id = ?", id).Delete(&User{})
	// 物理削除の場合は以下のようになる
	// db.Unscoped().Where("id = ?", id).Delete(&User{})

	// 削除したuser情報を返す
	return user, err
}
