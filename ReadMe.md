# Projeto Integrador Desenvolvimento Mobile - Finansim, finanças empresariais.

## Objetivo da aplicação:

Facilitar o controle de gastos e resultados de uma empresa, que irá cadastrar seus setores, registrar seus números e ver relatórios sobre o estado financeiro atual da empresa, com o foco em três categorias: Vendas, Compras e Pagamentos.

## Estado atual:

O app tem navegação de telas por pilha e também por guias,

Utiliza arrays como fonte de dados para as listas,

Tem a estilização e estrutura dos itens nas telas bem definidos.

## O que falta implementar:

Conexão com um banco de dados para substituir os arrays,

Exibir os dados dividindo-os pelos meses do ano, assim adicionando mais detalhes aos relatórios,

Tela de criação dos setores da empresa, através de uma seleção de opções,

Tela de edição dos dados das tabelas,

Ajustar a estilização conforme as novas implementações,

Terminar a documentação, com protótipo de design e diagramas

## Instalação das bibliotecas:

React Native web

``node npx expo install react-native-web react-dom @expo/metro-runtime``

Navegação de telas

``npx expo install @react-navigation/native``

``npx expo install @react-navigation/native-stack``

``npx expo install @react-navigation/bottom-tabs``

``npx expo install react-native-screens react-native-safe-area-context``

Caso a instalação do React Native web tenha problemas de dependência, instale a versão correta:

``npm install react@18.2.0 react-dom@18.2.0 react-native-web@0.19.10 @expo/metro-runtime@3.2.3``

Banco de dados SQLite

``npm install --save react-native-sqlite-storage``
