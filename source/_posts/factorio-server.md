---
title: 异星工厂（factorio） 开服教程
categories:
  - 游戏
  - 教程
  - 异星工厂
tags:
  - Factorio
  - 异星工厂
  - 教程
abbrlink: bbe455b5
date: 2024-01-16 01:48:15
---
{% note warning %}
此教程基于`linux`服务器，使用`windows`类似
{% endnote %}
### 下载服务器

首先，下载异星工厂的headless版本，可以在 [这里](https://factorio.com/get-download/stable/headless/linux64) 下载，上传到服务器中的一个地方

或者直接使用命令下载到服务器

```shell
wget https://factorio.com/get-download/stable/headless/linux64
```

### 配置服务器

下载的服务端的文件名字为 `factorio_headless_x64_X.X.XX.tar.xz`

其中的 `X.X.XX` 为游戏版本号

解压下载好的服务端

```shell
tar -xvf factorio_headless_x64_X.X.XX.tar.xz
```

此时你会得到一个文件夹叫做 `factorio`

来到这个文件夹，并且新建个文件夹来管理你的存档

```shell
cd factorio
mkdir saves
```

复制一份样例配置文件，并且按照需求修改

```shell
cp ./data/server-settings.example.json server-settings.json
vim server-settings.json
```

配置文件的解释在里面也有相关的注释

上传你的游戏存档到`saves`文件夹

接着你可以编写一个启动脚本`start.sh`，来方便后续游戏的启动
```shell
bin/x64/factorio --port 此处填写你期望的端口号 --server-settings server-settings.json --start-server ./saves/存档名字.zip 
```

运行以下命令来启动服务器
```shell
screen -S factorio  # 新建一个screen，这样关闭ssh连接后进程也不会退出
sh ./start.sh
```

### 服务器安装mod

在第一次启动服务器后，会在文件夹内创建一个`mods`文件夹

将你的所有mod上传到这个文件夹即可

### 升级异星工厂版本

只需要参考 `下载服务器` 部分，下载一个新版本的headless异星工厂

使用解压命令覆盖解压即可
