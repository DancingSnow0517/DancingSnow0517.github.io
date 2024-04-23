---
title: 'NeoForge 模组开发教程#1 - Minecraft 1.20.4 自定义物品'
series: NeoForgeTutorial
mathjax: false
categories:
  - 游戏
  - 教程
  - Minecraft
tags:
  - Minecraft
  - Modding
  - NeoForge
  - 教程
  - Java
abbrlink: 2d565825
date: 2024-04-23 13:41:55
---

### 准备工作

按照我的习惯，会创建一个名为`setup`的软件包，用来存放mod自定义的东西。

在软件包中新建一个类`ModItems`，用来存放mod注册的物品。

### 创建 DeferredRegister

1. 将以下代码添加到类`ModItems`中，就可以创建一个DeferredRegister，用于我们mod物品的注册。

    ```java
    // Mod 使用的 DeferredRegister
    public static final DeferredRegister.Items ITEM = DeferredRegister.createItems(TutorialMod.MODID);

    // 加载并将我们的 DeferredRegister 添加到事件总线中
    public static void register(IEventBus bus) {
        ITEM.register(bus);
    }
    ```
   ![此时的 ModItems.java](1.png)

2. 接着在Mod主类的构造方法中添加以下代码，用来调用上面的物品注册方法
   ![此时的 TutorialMod.java](2.png)

### 注册新物品

1. 添加以下代码到`ModItems`来注册一个最简单的物品，这里叫做红水晶好了
   ```java
   public static final DeferredItem<Item> RED_CRYSTAL = ITEM.registerSimpleItem("red_crystal");
   ```
2. 为这个物品添加 贴图和模型（目前模型为手动写，后面会教使用数据生成器来自动生成）

    * 在`resources`中新建文件夹，`assets/你的modid/`，在本教程的modid为`tutorialmod`
      ，所以就新建一个文件夹叫做`assets/tutorialmod/`
    * 新建一个文件夹 `textures/item` 用于存放物品贴图，并将准备好的贴图命名为你的物品id在放入这个文件夹
    * 新建一个文件夹 `models/item` 用于存放物品模型，并将准备好的模型命名为你的物品id在放入这个文件夹
    * 模型json文件可仿照下面来写
   ```json
   {
        "parent": "item/generated",
        "textures": {
            "layer0": "tutorialmod:item/red_crystal"
        }
   }
   ```

   此时的文件结构大致如下：
   ![此时文件结构](3.png)
3. 为物品添加语言文件
    * 创建`lang`文件夹并新建文件`en_us.json`作为英文文本文件，中文的文本文件是 `zh_cn.json`
   
      物品的翻译键一般为`item.modid.itemid`，这里示例为`item.tutorialmod.red_crystal`
4. 进入游戏检查是否成功注册
    * 现在还没有创造模式物品栏，可以使用give命令来获取注册的物品
      例：`give @p tutorialmod:red_crystal`
      ![img.png](4.png)

此教程所写代码的GitHub仓库：https://github.com/DancingSnow0517/Tutorial-Mod-NeoForge/tree/1-custom_item
