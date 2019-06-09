## タイトル

- Is multi-threading worth it in a web browser for UX improvements?
- UX の改善のために Web ブラウザでマルチスレッドはいかがですか？

## 概要

どうやったら Web 体験を良くできるか？そのために私たちができることはたくさんの選択肢があります。  
製品やサービスの理解向上や、インターフェース改善、アクセシビリティの改善、そしてパフォーマンスの改善です。

とりわけパフォーマンスの改善は高い UX の土壌となり、  
パフォーマンスの改善のためにできることもまた、たくさんの選択肢があります。  
その選択の一つとして**Web Worker**を使ったことはありますか？

Web ブラウザにマルチスレッドをもたらした**Web Worker**を複数のサービスで使ってきて得られた経験や、  
ユーザーに与えられたメリットをお話できればと思っています。  
また、どのようなケースやデータサイズで**Web Worker**を使うと効果的なのかということも明らかにしてゆきます。  
さらに**Web Worker**をより使いやすくするライブラリなどを紹介します。

この発表をきっかけに**Web Worker**を身近にし、Web 体験を良くするための選択肢として知ってもらえれば嬉しいです。

---

## Abstract

How to improve the user experience of our web apps? There are certainly many ways to do it, for example by working on the interface, the accessibility or the performance.

However, we could assert without a doubt that a good performance on a web app is a good start to assure a superb user experience.
To achieve the desired performance, we could work on several fronts, but in this talk, we will focus on **Web Workers**, a very interesting multi-threading solution.

We have used **Web Workers** many times in a production environment, and we have analyzed which are the benefits and the costs.
In this talk, we will see how to use **Web Workers** effectively and how to go beyond the costs caused by the overhead and other issues, and finally
we will take a look at a library that provides a simple way to implement **Web Workers**.

The aim of this talk is to get familiar with **Web Workers**, hopefully giving you a better understanding of how **Web Workers** act on a web page.
