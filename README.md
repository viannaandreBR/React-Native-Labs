React Native Labs
================== 

Welcome React
-------------

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

.
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

.
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
.
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
>>>>>>> static navigationOptions = {
>>>>>>> 
>>>>>>>  headerTitleStyle :{textAlign: 'center',alignSelf:'center', flex:1},
>>>>>>   title: 'Product Hunt',
>>>>>> };

.
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

.
--------------------------------------------------------------------------------
(6) Buscando produtos da API
--------------------------------------------------------------------------------
>
> Biblioteca para acessar API Externa - Axios
>
> yarn add axios
>
> Criação da pasta services dentro da pasta scr:
>
> Utilizar /services => Comunicação externa via API, Banco de Dados...
>
>>>>> /src/services/api.js
>
> Trabalhando no api.js
>
>>>>>> "base_URL": "https://rocketseat-node.herokuapp.com/api"
>
>Utilizar o Método componentDidMount()
>
>
> Abrir o Console.log no iOS e no Android
>   Debug JS Remotely
>
> Abriu a tela no navegador local:
>
>> Dark Theme  Maintain Priority
React Native JS code runs as a web worker inside this tab.

Press Ctrl⇧J to open Developer Tools. Enable Pause On Caught Exceptions for a better debugging experience.

You may also install the standalone version of React Developer Tools to inspect the React component hierarchy, their props, and state.

Status: Debugger session #0 active.

Reload app
>

.
--------------------------------------------------------------------------------
(7) Entendendo o estado
--------------------------------------------------------------------------------
>
>
>Estado => Uma variável, um objeto, que serve para armazenar toda e qualquer 
> informação que será manipulada por dentro da classe, o React fica ounvindo a 
> variável de estado, e toda vez que houver uma  alteração o método render() irá  >atualizar, de formar a fazer a renderização automática.
>
>
>>>>> Visualizando estado (1):
>>>>>>>>  <Text>Pagina Main:</Text>
            {this.state.docs.map(product => {
              return <Text>{product.title}</Text>;
            })}
>
>
>>>>> Visualizando estado (2):
>>>>>>>  <Text>Pagina Main:</Text>
            {this.state.docs.map(product => (
               <Text>{product.title}</Text>
            ))}
>
>
>>>>> Visualizando estado (3):
>>>>>>   <Text>Pagina Main:</Text>
            {this.state.docs.map(product => <Text>{product.title}</Text>)}
>
>
>>>>> Visualizando estado (4) Retirar Mensagem de Advertência:
>>>>>
        <Text>Pagina Main:</Text>
            {this.state.docs.map(product => (
              <Text key={product._id}>{product.title}</Text>))}


.
--------------------------------------------------------------------------------
(8) Listando produtos
--------------------------------------------------------------------------------
>
> FlatList => Componente ReactNative pra Mostrar uma lista de dados 
>
>>>> renderItem
>>>>>>>>>  renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
>
>
>>>> Flatlist
>
>>>>>>>>>> <View>
        <FlatList   
            data = {this.state.docs}
            keyExtractor={item => item._id}
            renderItem = {this.renderItem}
        />
            </View>
>
>
>
.
--------------------------------------------------------------------------------
(9) Estilizando lista de produtos
--------------------------------------------------------------------------------
>