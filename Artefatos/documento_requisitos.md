# Documento de Requisitos do Aplicativo EducaMães

## 1. Introdução
O EducaMães é um aplicativo de gerenciamento financeiro desenvolvido com o objetivo de auxiliar mães solo na gestão de suas finanças pessoais e familiares. Por meio de uma interface amigável e intuitiva, o aplicativo permite o cadastro de usuárias, a criação de categorias de gastos, o registro de saídas (despesas) para cada categoria e a visualização detalhada dos gastos totais e por categoria.

## 2. Requisitos Funcionais

- **RF01:** O aplicativo deve permitir o cadastro de novos usuários utilizando e-mail e senha.
- **RF02:** O aplicativo deve permitir o login de usuários cadastradas.
- **RF03:** O aplicativo deve permitir a criação de categorias de gastos personalizadas pelas usuários.
- **RF04:** O aplicativo deve permitir o registro de saídas (despesas) associadas a categorias específicas.
- **RF05:** O aplicativo deve oferecer uma visão geral do total de gastos, permitindo a visualização por categoria.
- **RF06:** O aplicativo deve permitir a visualização de todas as saídas registradas, organizadas por categoria.
- **RF07:** O aplicativo deve oferecer segurança no armazenamento e na transmissão de dados pessoais e financeiros das usuários.

## 3. Requisitos Não Funcionais

- **RNF01:** O aplicativo deve ser desenvolvido utilizando React Native e Expo para garantir compatibilidade cruzada entre dispositivos iOS e Android.
- **RNF02:** O design do aplicativo deve ser responsivo e adaptável a diferentes tamanhos de tela, utilizando TailwindCSS para estilização.
- **RNF03:** O backend do aplicativo deve ser implementado com Firebase, utilizando seus serviços de autenticação, banco de dados e armazenamento.
- **RNF04:** O aplicativo deve implementar a Context API do React para gerenciamento de estados globais, facilitando o compartilhamento de dados entre componentes.
- **RNF05:** O aplicativo deve garantir a privacidade e a segurança dos dados dos usuários, seguindo as melhores práticas de segurança da informação.

## 4. Requisitos de Sistema

- **RS01:** O aplicativo deve ser compatível com dispositivos móveis que executam iOS 11.0 ou superior e Android 5.0 (Lollipop) ou superior.
- **RS02:** O aplicativo deve exigir acesso à internet para realizar a autenticação de usuários e o sincronismo de dados com o Firebase.
- **RS03:** O aplicativo deve ser otimizado para desempenho ágil, garantindo uma experiência de usuário fluida e responsiva.

## 5. Conclusão

O aplicativo educaMaes representa uma ferramenta valiosa para mães solo que buscam uma solução prática e eficaz para o gerenciamento de suas finanças pessoais e familiares. Por meio de uma abordagem centrada no usuário, o aplicativo oferece funcionalidades essenciais para o controle financeiro, apoiando essas mães na tomada de decisões financeiras mais informadas e no planejamento de um futuro financeiro estável para suas famílias.

Este documento oferece uma base para o desenvolvimento e a avaliação do aplicativo educaMaes, destacando seus principais objetivos, funcionalidades e requisitos. É importante que o desenvolvimento siga essas diretrizes para garantir que o aplicativo atenda às necessidades de seu público-alvo e cumpra com os padrões de qualidade e segurança estabelecidos.
