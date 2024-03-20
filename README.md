# :books: EducaMãe$ - Projeto de Engenharia de Software

Este repositório é dedicado ao projeto EducaMãe$, desenvolvido como parte do curso de Engenharia de Software do Centro de Informática ([CIn](https://portal.cin.ufpe.br/)) da Universidade Federal de Pernambuco ([UFPE](https://www.ufpe.br)).

Aqui, você encontrará os códigos desenvolvidos ao longo do processo, bem como informações relevantes sobre o projeto, como autores, tecnologias utilizadas, acesso à aplicação e artefatos.

------

## Escopo

O projeto EducaMãe$ consiste em um aplicativo móvel destinados a ajudar mães solteiras na gestão financeira, organização de suas vidas e dos seus filhos. O objetivo é oferecer ferramentas que facilitem o controle de gastos, planejamento financeiro e acesso a recursos adicionais, como suporte legal, documentação de saúde e rede de apoio virtual.

------

## Metodologia de Desenvolvimento Utilizada

Para o desenvolvimento do projeto, adotamos uma abordagem ágil, combinando práticas do Scrum e Kanban. Utilizamos ferramentas como Trello, Notion e GitHub para gerenciamento de tarefas e comunicação entre a equipe, que pode ser acessado neste [link](https://github.com/gtamaral/projeto-es/tree/main/Artefatos/acompanhamento).

------

## Tecnologias Utilizadas

Aqui estão as principais tecnologias utilizadas no desenvolvimento do projeto:

| Ferramenta            | Descrição                                                               | Justificativa para o Uso                                                                                                                                                                                               |
|-----------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `React Native`          | Framework para desenvolvimento de aplicativos móveis                   | Permitirá a criação de uma interface de usuário intuitiva e responsiva, compatível com dispositivos Android e iOS.                                                                                                    |
| `Expo`                  | Plataforma para desenvolvimento e implantação de aplicativos React Native | Facilita o processo de desenvolvimento, permitindo o teste e implantação rápida do aplicativo em dispositivos móveis.                                                                                                 |
| `Firebase`              | Plataforma de desenvolvimento de aplicativos móveis e web                | Optamos pelo Firebase como nossa solução backend, aproveitando seus serviços integrados como autenticação, banco de dados Firestore e armazenamento. Isso nos permite focar no desenvolvimento das funcionalidades sem nos preocuparmos com a configuração e manutenção da infraestrutura do servidor. |
| `Tailwind CSS`          | Framework CSS utility-first                                           | Facilita a estilização e garante uma interface elegante e adaptável a diferentes tamanhos de tela.                                                                                                                     |
| `Git` | Software de controle de versões | É um software que nos permite salvar e controlar versões desenvolvidas do nosso projeto. Ele possibilita a criação de espaços(branchs) de atuação para cada funcionalidade ou membro diferente da equipe, possibilitando uma maior agilidade. |


------

## Acesso à Aplicação

Para visualizar a nosso aplicativo funcionando, acesse o [link](https://github.com/gtamaral/projeto-es/tree/main/Artefatos/app_funcionando).

------

## Requisitos preliminares

Antes de começar, certifique-se de que você atende aos seguintes requisitos:

 1. Clone o projeto em sua máquina e abra-o no seu editor de código favorito. Para isso, utilize o comando Git abaixo no seu terminal:
``
git clone <URL_DO_REPOSITÓRIO_DO_PROJETO>
``

 2. Instalação do Node.js e npm (ou yarn): Certifique-se de que você tem o Node.js versão 12.x ou superior e npm (Node Package Manager) ou yarn instalado em sua máquina. Para verificar, execute os comandos abaixo no seu terminal:
``node --version
npm --version
// Ou, se você preferir usar yarn:
yarn --version
``
 3. Expo CLI: Este projeto utiliza o Expo para facilitar o desenvolvimento de aplicativos com React Native. Instale o Expo CLI globalmente em sua máquina utilizando o npm ou yarn:
``npm install -g expo-cli
// Ou
yarn global add expo-cli
``
4.Emulador ou Dispositivo Físico: Para visualizar o aplicativo, você pode usar um emulador Android/iOS ou um dispositivo físico. Para dispositivos físicos, instale o aplicativo Expo Go disponível nas lojas de aplicativos.

## Como rodar o projeto

 1. Instalação das Dependências: No terminal, navegue até a pasta do projeto clonado e execute o seguinte comando para instalar todas as dependências necessárias:
``
npm install
// Ou, se você estiver usando yarn:
yarn
``

 2. Inicialização do Projeto: Após a instalação das dependências, ainda no terminal e na pasta do projeto, execute o comando abaixo para iniciar o projeto com Expo:
``
expo start
``
 3. Executando no Emulador ou Dispositivo Físico:
Para emuladores, o Expo CLI fornecerá opções para executar no emulador Android/iOS diretamente do terminal.
Para dispositivos físicos, escaneie o QR Code fornecido pelo Expo CLI utilizando o aplicativo Expo Go.


A partir desses passos, o App EducaMães estará rodando em seu emulador ou dispositivo físico, permitindo que você explore suas funcionalidades.

Observação: Para uma experiência completa, é recomendado ter acesso à Internet e seguir as instruções específicas para configuração do Firebase e outras integrações conforme documentado no projeto.

## Autores do Projeto

Este é o time de desenvolvimento responsável pela concepção e implementação do projeto EducaMãe$:

| [<img src="https://avatars.githubusercontent.com/u/115439066?v=4" width=160>](https://github.com/DiogoNogueiraLima) <br><sub>Diogo Nogueira Lima - dnl3@cin.ufpe.br</sub> | [<img src="https://avatars.githubusercontent.com/u/113607491?v=4" width=160>](https://github.com/gtamaral) <br><sub>Rodrigo Amaral Jucá - reaj@cin.ufpe.br</sub> | [<img src="https://avatars.githubusercontent.com/u/110510265?v=4" width=160>](https://github.com/luisfv10) <br><sub>Luis Filipe Vasconcelos - lfvp@cin.ufpe.br</sub> | [<img src="https://avatars.githubusercontent.com/u/115117550?v=4" width=160>](https://github.com/matheusbon) <br><sub>Matheus Augusto Alves Bonfim - maab2@cin.ufpe.br</sub> |
| :---: | :---: | :---: | :---: |





Líder da Equipe: Diogo Nogueira Lima - dnl3@cin.ufpe.br 

