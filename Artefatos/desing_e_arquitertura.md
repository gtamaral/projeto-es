# Design e Arquitetura do APP EducaMães

## Escolha das Tecnologias

Para a construção da aplicação educaMaes, decidimos utilizar um conjunto de tecnologias modernas e robustas para o desenvolvimento de aplicativos móveis, levando em consideração a necessidade de uma solução eficaz para mães solo. As tecnologias selecionadas são:

- **Frontend:** Utilizamos o React Native em conjunto com o Expo para criar uma experiência de usuário interativa e responsiva em dispositivos móveis. O uso do Tailwind CSS facilita a estilização e garante uma interface elegante e adaptável a diferentes tamanhos de tela.

- **Backend:** Adotamos o Firebase como nossa solução backend, aproveitando seus serviços integrados como autenticação, banco de dados Firestore e armazenamento. Isso nos permite focar no desenvolvimento das funcionalidades sem nos preocuparmos com a configuração e manutenção da infraestrutura do servidor.

- **Gerenciamento de Estado:** Implementamos a Context API do React para gerenciar o estado global da aplicação, facilitando o compartilhamento de dados entre componentes e melhorando a performance geral do aplicativo.

## Arquitetura de Software

Optamos por uma arquitetura modular, que se assemelha à abordagem de Microsserviços no desenvolvimento web, mas adaptada ao contexto de aplicativos móveis. Cada módulo ou serviço do Firebase (autenticação, banco de dados, armazenamento) é utilizado de forma independente, mas integrado de forma coesa para prover a funcionalidade completa do educaMaes. Isso oferece flexibilidade, escalabilidade e facilita a manutenção e atualização do aplicativo.

## Frontend (UI)

O React Native, escolhido para o desenvolvimento do frontend, permite a criação de componentes reutilizáveis e interativos que compõem a interface do usuário do educaMaes. A integração com o Tailwind CSS permite uma estilização eficiente e responsiva, garantindo que o aplicativo seja acessível e agradável em diferentes dispositivos.

## Backend (Server-Side)

O Firebase serve como a espinha dorsal do nosso backend, fornecendo uma solução completa que inclui autenticação de usuários, armazenamento de dados em tempo real com o Firestore, e armazenamento de arquivos. Essa escolha elimina a necessidade de um backend tradicional baseado em Node.js, simplificando o desenvolvimento e reduzindo o tempo de lançamento.

## Comunicação Frontend e Backend

A comunicação entre o frontend e o backend é realizada por meio das SDKs do Firebase, que abstraem as solicitações HTTP para operações de banco de dados, autenticação e armazenamento. Essas SDKs abstraem a complexidade das solicitações HTTP, fornecendo interfaces simples para operações de CRUD (Create, Read, Update, Delete) no banco de dados Firestore, autenticação de usuários e outras funcionalidades. Isso permitiu que a gente concentrasse nosso esforços na lógica do aplicativo e na experiência do usuário, ao invés de se preocupar com os detalhes de implementação da comunicação entre cliente e servidor. Isso proporciona uma integração fluida e segura, garantindo que os dados dos usuários sejam transmitidos e armazenados de forma confiável.

## Banco de Dados

Optamos pelo Firestore, um banco de dados NoSQL oferecido pelo Firebase, devido à sua integração nativa com a plataforma, escalabilidade automática e facilidade de uso. O Firestore permite o armazenamento de dados em um formato de documentos, o que é ideal para a estrutura de dados do nosso aplicativo, facilitando o armazenamento e a recuperação de informações sobre usuários, categorias de gastos e registros de despesas.

## Por que a escolha do Firebase e a decisão da não implementação de uma API restful?

O Firebase oferece uma série de serviços de backend como serviço (Backend as a Service - BaaS), que incluem autenticação de usuários, banco de dados em tempo real, armazenamento de arquivos, entre outros. Graças a esses serviços integrados, o Firebase elimina a necessidade de desenvolver e manter uma API RESTful personalizada. A comunicação entre o frontend, desenvolvido com React Native e Expo, e o backend, provido pelo Firebase, é realizada através das SDKs do Firebase. Além disso, o uso do Firebase traz vantagens como sincronização de dados em tempo real, segurança aprimorada através de regras de segurança configuráveis, e a capacidade de escalar a aplicação automaticamente de acordo com a demanda. Essas características fazem do Firebase uma escolha atraente para o desenvolvimento rápido e eficiente de aplicativos móveis modernos, como o educaMaes.

## Conclusão

Este design e arquitetura propostos para o aplicativo educaMaes refletem nosso compromisso em oferecer uma solução robusta, escalável e de fácil uso para mães solo gerenciarem suas finanças. A seleção cuidadosa de tecnologias modernas e a adoção de uma arquitetura flexível garantem que o educaMaes possa evoluir e expandir suas funcionalidades no futuro, mantendo uma base sólida e confiável.
