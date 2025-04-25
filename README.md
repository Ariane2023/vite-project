# Busca de Perfis Consumindo API do GitHub!

![image](https://github.com/user-attachments/assets/8153cc4f-64e2-4606-b42f-07bf787a53cb)

## 1. Estrutura e Componentes

  App.tsx (Componente Principal):
  Importa os componentes Header, SearchBar, UserProfile e o Hook useGitHubUser.
  Utiliza o Hook useGitHubUser para gerenciar o estado da busca do usuário (dados do usuário, loading, erro).
  Renderiza a estrutura da aplicação:
  Um container principal (styles.appContainer).
  Um container interno (styles.box) para agrupar o conteúdo.
  Os componentes Header e SearchBar.
  Renderização condicional para exibir "Carregando..." durante a busca ou o componente UserProfile após a busca bem-sucedida.
  Header Componente: Exibe o título "Perfil GitHub" (conforme a imagem).
  SearchBar Componente:
  Exibe um campo de entrada para o usuário digitar o nome do GitHub.
  Chama a função handleSearch (passada como prop) quando o usuário realiza a busca.
 

  Exibe mensagens de erro, se houver, com base na prop error.

  ![image](https://github.com/user-attachments/assets/b673fb6b-4f5e-46f9-8d8f-3683abd3b86c)

  
## UserProfile Componente:
  Exibe as informações do usuário do GitHub: avatar, nome, login, bio e link para o perfil.
  
 ![image](https://github.com/user-attachments/assets/752b44a3-0be9-4185-9317-837f2c790059)
 
  useGitHubUser Hook:
  Encapsula a lógica de busca do usuário na API do GitHub.
  Retorna o estado da busca: userData, loading, error e a função fetchUser.

## 2. Estilos

  global.css:
  Define estilos globais para a aplicação.
  Reseta estilos padrão de elementos HTML (margin, padding, box-sizing).
  Define a cor de fundo da aplicação como #313131.
  Define a fonte como "Nunito Sans".
  Garante que o body ocupe toda a altura da tela (100vh).
  App.module.css:
  Define estilos específicos para o componente App.
  Estiliza os containers appContainer e box (centralização, largura, margens).

## 3. Fluxo da Aplicação

  O usuário digita um nome de usuário do GitHub no componente SearchBar.
  O componente SearchBar chama a função handleSearch, passando o nome de usuário digitado.
  A função handleSearch chama a função fetchUser do Hook useGitHubUser.
  O Hook useGitHubUser faz uma requisição à API do GitHub para buscar os dados do usuário.
  Enquanto a requisição está em andamento, o Hook atualiza o estado loading para true, e o componente App exibe "Carregando...".
  Se a requisição for bem-sucedida, o Hook atualiza o estado userData com os dados do usuário e loading para false. O componente App renderiza o componente UserProfile, passando os dados do usuário como props.
  Se a requisição falhar, o Hook atualiza o estado error com a mensagem de erro e loading para false. O componente App passa o estado error para o componente SearchBar, que exibe a mensagem de erro para o usuário.
  Ajustes Finais e Próximos Passos

## Com base nessa análise detalhada, os ajustes finais e próximos passos podem incluir:

  Estilizar os Componentes:
  Criar arquivos CSS de módulo para Header, SearchBar e UserProfile para encapsular os estilos e evitar conflitos.
  Aplicar estilos para garantir que os componentes tenham a aparência desejada (cores, fontes, espaçamento, etc.).
  Estilizar a mensagem de erro exibida pela SearchBar.
  Melhorar a Experiência do Usuário:
  Adicionar validação ao campo de busca na SearchBar (por exemplo, exibir um erro se o campo estiver vazio).
  Tratar diferentes tipos de erros de API (por exemplo, exibir uma mensagem específica para "usuário não encontrado").
  Adicionar animações e transições para tornar a aplicação mais interativa.
  Testar a Responsividade:
  Garantir que a aplicação se adapte bem a diferentes tamanhos de tela (desktop, tablet, celular) usando media queries.
  Acessibilidade:
  Verificar se a aplicação é acessível para usuários com deficiências (por exemplo, garantir contraste de cores adequado, usar rótulos para elementos de formulário).
