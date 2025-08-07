---
layout: post
title: "SI100B 24Fall Midterm"
date: 2024-11-15 +0800
modified_date: 2025-08-07 +0800
categories: course
---

IOI 赛制, 英文题目, 拿满不难.

## 考试环境

- 操作系统: Windows10;
- 终端: `cmd`, 古董 `powershell`;
- 编辑器: `vscode` (包含插件 `pylance`, `python debugger`, `pylint`), `vim` (版本 $9.1$), `gvim`;
- IDE: `pycharm`;
- 外设: 键盘还可以, 鼠标手感稀烂. (有的机房可能键盘也烂)

## 考试题目

### 第一场

#### A1 Warm Up (20pts)

题意: 输入 $x$, $n$, 输出 $x^n + 1$.

```python
x = int(input())
n = int(input())

print(x ** n + 1)
```

#### B1 Median (25pts)

题意: 输入数列, 输出中位数.

```python
a = list(map(int, input().split()))
a = sorted(a)
n = len(a)

ans = 0
if n & 1:
    ans = a[n // 2]
else:
    ans = (a[n // 2 - 1] + a[n // 2]) / 2
print(ans)
```

#### C1 String Special Flip (25pts)

题意: 输入字符串, 偶数下标转大写, 奇数下标转小写. 最后逆序输出.

```python
s = input()
t = []
for i in range(len(s)):
    if i & 1:
        t.append(s[i].lower())
    else:
        t.append(s[i].upper())
print("".join(t)[::-1])
```

#### D1 A Bakeshop (30pts)

题意: 实现一个模拟面包房工作的类, 完成其中的三个函数.

- `__init__` 函数的调用样例为 `bakery1 = BakeShop(shopName: str, shopTelephone: str)`;
- `__str__` 函数的输出格式为 `shopName tel:shopTelephone`;
- `stock` 函数传入 `list[str]`, 统计其中每个元素出现的次数, 调用样例 `bakery1.stock(['A', 'A', 'A'])`.

本题其实有三个文件, 也许需要一定时间来理解 (事实上注意力只需要放在一个文件就行, 只是运行程序的时候入口不在这里)

```python
class BakeShop:
    def __init__(self, name, telephone):
        self.name = name
        self.telephone = telephone
        self.val = {}

    def __str__(self):
        return f"{self.name} tel:{self.telephone}"

    def stock(self, goodslist):
        ans = []
        for goods in goodslist:
            if goods in self.val.keys():
                self.val[goods] += 1
            else:
                self.val[goods] = 1
            ans.append(self.val[goods])
        return ans
```

### 第二场

本人没有参加第二场考试, 实现代码参考习题课课件.

#### A2 Heat Up (20pts)

题意: 输入 $x$, 输出 $1 + 2 + \cdots + x$;

```python
x = int(input())

print(x * (x + 1) // 2)
```

#### B2 The kth Largest Element (25pts)

题意: 输入数列, 输出第 $k$ 大数;

```python
a = map(int, intput().split())
a = sorted(a, reverse = True)
k = int(input())

print(a[k - 1])
```

#### C2 String Compression (25pts)

题意: 输入只包含小写字母的字符串, 把其中连续部分压缩; (`aaa` -> `3a`)

```python
s = input()
# 下面三行都是为了处理边界情况
# 1: 最后一个字母处理完不会更新 ans, 所以需要在末尾加上一个非小写字母
# 2: 第一个字母前面没有字母, 考虑使用一个非小写字母代替
# 3: 处理第一个字母为了不让 pre 被加入答案, 把 cnt 设置为 -1 与后面 >= 1 的情况区分开
s += "-"
pre = "="
cnt = -1

ans = []
for ch in s:
    if ch == pre:
        cnt += 1
    else:
        if cnt == 1:
            ans.append(pre)
        elif cnt > 1:
            ans.append(f"{cnt}{pre}")
        cnt = 1
        pre = ch

print("".join(ans))
```

#### D2: A Bakeshop II (30pts)

题意: 实现一个模拟面包房工作的类, 完成其中的三个函数.

- `__init__` 函数的调用样例为 `bakery1 = BakeShop(shopName: str, opening_hours: str, priceTable: dict[str, int])`;
- `__str__` 函数的输出格式为 `shopName (opening_hours)`;
- `sale` 函数传入一个 `list[str]`, 统计其中在 `priceTable` 里的部分并统计总价格, 调用样例 `bakery1.sale(['A', 'B', 'B', 'B', 'A'])`.

本题同样有三个文件.

```python
class BakeShop:
    def __init__(self, name, opening_hours, priceTable):
        self.name = name
        self.opening_hours = opening_hours
        self.val = priceTable

    def __str__(self):
        return f"{self.name} ({self.opening_hours})"

    def sale(self, goodslist):
        ret = 0
        for goods in goodslist:
            if goods in self.val.keys():
                ret += self.val[goods]
        return ret
```

## 考试总结

机房环境比想象中好, 软件除了 `vscode` 还有别的.

考试时间 $45$ 分钟, 我花了快 $30$ 分钟, 时间应该不是特别紧张 (?).

其实我觉得这场考试不好出, 面对的学生应该是刚接触编程两个月的人, 时间相当短 (为了两节课考完两批人我还是可以理解的), 而且两场考试难度应当差不多. 题目自然不能出的太难, 但是在尽量全面的涉及学习过的知识的同时需要保证合理的区分度.

这样看下来感觉题目还可以, 考察了简单的输入与输出, 数组切片 (逆序输出), 常用函数 len(), sorted(), 字符串相关的大小写转换, 类初始化与魔术方法.

~~看上去第二场前三题比第一场难诶~~

(成绩发布之后发现, 居然可以放宽评测要求重新评分的, 甚至前三题拿满第四题不做都能满分)
