---
title: Dual Boot W8ponto1 e Mint em um Acer Aspire E14
template: post.html
tags:
  - dualboot
  - linux
  - refind
  - uefi
  - windows
id: 67
categories:
  - linux
date: "2015-12-28"
draft: false
---
Esse post é mais como uma dica porque encontrei algumas dificuldades para montar um ambiente com Windows 8.1 e Linux Mint 17.2.

Nunca tinha trabalhado com um notebook mais recente que já tivesse vindo com o W8 de fábrica e com UEFI, por isso, tive um certo trabalho para encontrar uma solução, uma vez que, se você chegou até aqui, sabe que é de fato trabalhoso, ainda mais quando não se está tão acostumado com um ambiente Linux.<!--more-->

O motivo de ter um Dual Boot é simples: Linux para trabalhar (programar, pesquisar, etc) e Win32 para jogar. Simples. Por incrível que pareça, ficou mais fácil jogar algo, já que eu sempre ficava na promessa de testar um novo jogo.

Enfim, o modelo do notebook onde foi testado foi o Acer Aspire E14 (E5-471) com Windows 8.1 de fábrica. O método usado foi exatamente o mesmo que é encontrado em alguns artigos: primeiro dimensionar o HD para termos um espaço livre para nossa distro Linux, usar um LiveCD ou USB bootável, instalar a sua distro (que no meu caso foi o Mint 17.2) no espaço livre e... e aí, dependendo do seu notebook, como eu pude perceber, pode haver diversas situações.

A minha situação foi: não havia um GRUB no momento de boot do notebook. Ou seja, ou iniciava direto pra um sistema ou por outro. O que definia qual sistema seria iniciado era a opção de boot escolhida. Se fosse UEFI iniciava o Windows, se não fosse, iniciava direto no Mint.

A solução, a única que funcionou de todas as demais que testei, e que não foram poucas, foi a apresenta nesse vídeo:

http://www.youtube.com/watch?v=3QOfYC4LJRo

Que é basicamente desativar o UEFI, entrar no Linux, instalar e rodar um script chamado [rEFInd](http://www.rodsbooks.com/refind/), voltar a opção de boot para UEFI e pronto, no próximo boot teremos uma tela de escolha de qual sistema você deseja dar partida.

Sem mais delongas é isso, fica apenas como uma dica para quem tem esse problemas - e pude perceber que não são poucas - e, caso tenha dado certo ou dado errado comenta para descobrir se de fato é a melhor alternativa.
