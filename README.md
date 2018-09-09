JavaScript "simple-git" Get Latest Commit Demo
==============================================

使用"simple-git"将指定的git仓库clone到本地，并得到最新的commit信息

```
npm install
node run demo
```

输出：

```
cloned to: local-repo/demo-project
----------------- git log HEAD -------------
{
  "all": [
    {
      "hash": "e37400f8d7dde49977ff7e146a986cc961fc2f61",
      "date": "2018-07-31 14:10:27 +0800",
      "message": "demo (HEAD -> master, origin/master, origin/HEAD)",
      "author_name": "freewind",
      "author_email": "nowindlee@gmail.com"
    }
  ],
  "latest": {
    "hash": "e37400f8d7dde49977ff7e146a986cc961fc2f61",
    "date": "2018-07-31 14:10:27 +0800",
    "message": "demo (HEAD -> master, origin/master, origin/HEAD)",
    "author_name": "freewind",
    "author_email": "nowindlee@gmail.com"
  },
  "total": 1
}
```
