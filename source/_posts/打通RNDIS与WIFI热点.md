---
title: 打通USB网络共享（RNDIS）与WIFI热点
categories:
  - 刷机
  - 安卓
tags:
  - 安卓
  - adb
abbrlink: ec531c77
date: 2024-03-13 12:56:03
---

### 原始需求

犯懒癌的我，想在宿舍床上用平板访问我电脑的文件，使用类似 `FTP` / `SMB` 协议来共享文件。于是使用手机插线到电脑上使用 `USB网络共享`，并开启热点让平板连接上。

发现此方法的电脑和平板并不能互相 ping 通。

### 解决方案（需要设备拥有`root`权限）

问题的出现在安卓 `iptables` 的默认策略下，将 `USB网络共享` 与 `WIFI` 热点的数据包全部 DROP 了。

可以使用 `adb shell` 来删除对应策略。

先进入到 `adb shell` 环境，需要拥有 adb 工具，使用命令
```shell
adb shell
```

获得权限
```shell
su
```

查找相关策略
```shell
iptables -L --line-number
```
![img.png](1.png)
可以看到 `tetherctrl_FORWARD` 链中的 DROP，并且记录下行号

删除该条规则
```shell
iptables -D tetherctrl_FORWARD 行号
```

然后我的电脑就能够和平板互相ping通了，FTP等服务一样可用。
