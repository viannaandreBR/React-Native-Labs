React Native Labs
================== Welcome React


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

--------------------------------------------------------------------------------
Ações:
------
> Cloning gitlinuxdev - ok


--------------------------------------------------------------------------------
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

-------------------------------------------------------------------------------- 
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

--------------------------------------------------------------------------------
(3) O que são componentes
----------------------------
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

> Componetização é uma arquitetura para separarmos, em vários componentes,
> utilizada tanto na web como mobile. Componentes são Visualização, Lógica e Estilização.
> É apresentado como uma classe, um componente por arquivo, podendo utilizar o export > > > default.
>
> render() -> É um método obrigatório do componente, responsável pela parte visual.
>
>
>
>
>
>
--------------------------------------------------------------------------------
(4) Configurando Navegação
---------------------------
> Instalação Biblioteca React-Navigation
>>>>> yarn add react-navigation@2.18.3
>
> Criar pasta /scr
>    => Criar pasta pages /src/pages
>    => index.js
>    => routes.js
> 
> Migração App.js => /Temp
>
>
>
>>> routes.js
    >>>> import {createStackNavigator } from 'react-navigatio';
    >>>>
    >>>> react-navigation=> Possui varios tipos de navegação:
            >>>> Navegação Stack => Navegação por clicks
            >>>> Navegação por abas
            >>>> Navegação por botão lateral
>
>
> Códigos Semelhantes com Arrow Functions:
> 
> >>>>>>const App = () => <Routes/>;
>
>>>>>>>>const App extends Component {
>>>>>>>>>>>>render() {
      >>>>>>>>>>>return <Routes/>
   >>>>>>>> }
>
>
>> Centralizando Titulo no Cabeçalho no Android
static navigationOptions = {

  headerTitleStyle :{textAlign: 'center',alignSelf:'center', flex:1},
   title: 'Product Hunt',
};
--------------------------------------------------------------------------------
(5) Estilizando Header e StatusBar
--------------------------------------------------------------------------------
>> Cabeçalho
export default createStackNavigator({
  Main
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: "#DA552F"
    },
    headerTintColor: "#FFF"
  },
});



>> Pasta Configuração Cabeçalho iOS
   /src/config/StatusBarConfig.js
>>>>> Somente no Android
       StatusBar.setBackgroundColor


>> Mundando a cor do Cabeçalho
import { StatusBar } from 'react-native';

//Android
//StatusBar.setBackgroundColor('#DA552F');
StatusBar.setBackgroundColor('#000');

//iOS
StatusBar.setBarStyle('light-content');