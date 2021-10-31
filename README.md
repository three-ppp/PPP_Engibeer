## 開発環境

## dockerの立ち上げ and 停止
- dockerを立ち上げる
```
docker compose up -d
```
- dockerを停止する
```
docker compose down
```

## 環境を構築
- コンテナの起動状態を確認する
```
docker ps -a
```

- コンテナの中に入る
```
 docker exec -it コンテナ名 bash
```
- 開発環境の構築
```
 npm istall or yarn add
```

- next.jsをサーバーとして立ち上げる
```
yarn dev
```




