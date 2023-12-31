# バージョン指定
FROM golang:1.19.2-alpine3.16
# go moduleモードに設定
ENV GO111MODULE on
# 必要なものをインストール
RUN apk update && \
    apk --no-cache add git && \
    apk add bash
# 作業ディレクトリ指定
WORKDIR /go/src/app
# go.mod作成
RUN go mod init app
# go.mod更新&Airインストール
RUN go mod tidy && \
    go install github.com/cosmtrek/air@v1.40.4
# Air起動
CMD ["air", "-c", ".air.toml"]