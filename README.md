React Native Labs
==================


Ambiente de desenvolvimento React Native nas plataformas iOS e Android
----------------------------------------------------------------------


Conteúdo:
------------------------------------------------------------------------------
- (1) O que é React Native?

- (2) Criando projeto

- (3) O que são componentes?

- (4) Configurando navegação

- (5) Estilizando Header e StatusBar

- (6) Buscando produtos da API

- (7) Entendendo o estado

- (8) Listando produtos

- (9) Estilizando lista de produtos

- (10) Scroll infinito com FlatList

- (11) Detalhe com WebView

------------------------------------------------------------------------------
Ações:
------
> Cloning gitlinuxdev - ok


------------------------------------------------------------------------------
(1) O que é React Native ?
----------------------------
> É uma ferramenta que possibilita utilizar o Java Script, para o desenvolvimento
> de aplicações Mobile.

> O React Native produz interface nativa no iOS e Android.

> Podemos dizer que o React Native é uma ponte entre o Java e Objetive C e o Java Script

> O React Native utiliza uma dependencia JavaScript Core no Android e iOS.

> A base de componentes.

> Exemplo de Aplicação React Native:
import React from 'react';
import {Text, View} from 'react-native';
import {Header} from './Header';

const WelcomeScreen = () => 
  <View>
    <Header title="Welcome to React Native"/>
    <Text style={header}>Step One</Text>
    <Text>
      Edit App.js to change this screen and turn it
      into your app.
    </Text>
    <Text style={header}>See Your Changes</Text>
    <Text>
      Press Cmd + R inside the simulator to reload
      your app’s code.
    </Text>
    <Text style={header}>Debug</Text>
    <Text>
      Press Cmd + M or Shake your device to open the

------------------------------------------------------------------- 
(2) Criando projeto
--------------------

react-native -v

react-native init hunt

  > adb devices

 Pela Primeira Vez
  > cd hunt

    > ios
      > react-native run-ios

    > Android
      > react-native run-android

Metro Bundler -> Lê todo código JavaScript

 Iniciar o projeto novamente:
  > react-native start



------------------------------------------------------------------------------
(3) O que são componentes
----------------------------