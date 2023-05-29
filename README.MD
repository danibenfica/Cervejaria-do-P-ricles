### Projeto Cervejaria do Péricles Delivery
Eu já havia feito esse projeto antes em uma dinâmica, porém na epoca tive dificuldades.
Estou repostando agora uma versão melhorada, não posso garantir que está  100% responsiva, mas fiz o meu melhor!

## Introdução
A Cervejaria Péricles Delivery é uma aplicação web que simula a venda de bebidas alcoólicas e não alcoólicas. O objetivo é apresentar informações sobre a cervejaria, permitir a seleção e compra de bebidas e exibir um resumo do carrinho de compras.

## Estrutura de Arquivos
O projeto é composto por vários arquivos, organizados da seguinte maneira:

1. **index.html**: Página inicial do projeto que verifica a idade do usuário antes de redirecionar para a página adequada.
2. **site18.html**: Página exibida aos usuários maiores de 18 anos, onde podem selecionar e comprar bebidas alcoólicas.
3. **sitemenos18.html**: Página exibida aos usuários menores de 18 anos, onde podem selecionar e comprar bebidas não alcoólicas.
4. **total.html**: Página que exibe um resumo do carrinho de compras e o valor total gasto.
5. **styles.css**: Arquivo CSS principal que estiliza os elementos comuns a todas as páginas.
6. **another pages css**: Pasta contendo arquivos CSS específicos para cada página.
7. **site18.js**: Arquivo JavaScript relacionado à página site18.html, contendo lógica para exibir os valores das bebidas, adicionar itens ao carrinho e atualizar o valor total.
8. **sitemenos18.js**: Arquivo JavaScript relacionado à página sitemenos18.html, contendo lógica para exibir o valor da bebida não alcoólica, adicionar ao carrinho e atualizar o valor total.
9. **total.js**: Arquivo JavaScript relacionado à página total.html, responsável por exibir o valor total do carrinho de compras.

## Funcionalidades

### Página index.html
- Exibe uma mensagem de boas-vindas à Cervejaria Péricles Delivery.
- Apresenta uma imagem ilustrativa de cervejas.
- Contém um elemento `<div>` com a pergunta "Você é maior de 18 anos?" e dois botões de resposta ("Sim" e "Não").
- Ao clicar no botão "Sim", redireciona o usuário para a página site18.html.
- Ao clicar no botão "Não", redireciona o usuário para a página sitemenos18.html.

### Página site18.html
- Apresenta um cabeçalho com o menu de navegação.
- Exibe uma imagem ilustrativa de cervejas.
- Possui um elemento `<div>` com uma mensagem de boas-vindas e instruções para o usuário escolher uma bebida.
- Mostra imagens de três tipos de bebidas (vinho, cerveja e refrigerante) acompanhadas de seus respectivos preços.
- Ao passar o mouse sobre cada imagem, exibe o valor da bebida.
- Ao clicar no botão "Comprar" de cada bebida, adiciona o valor correspondente ao carrinho de compras e atualiza o valor total.
- Ao clicar no item "Meu Carrinho" no menu de navegação, redireciona o usuário para a página total.html, exibindo o resumo do carrinho de compras.

### Página sitemenos18.html
- Apresenta um cabeçalho com o menu de navegação.
- Exibe uma imagem ilustrativa de cervejas.
- Possui um elemento `<div>` com uma mensagem de boas-vindas e instruções para o usuário escolher uma bebida.
- Mostra uma imagem de refrigerante acompanhada do seu preço.
- Ao passar o mouse sobre a imagem, exibe o valor do refrigerante.
- Ao clicar no botão "Comprar", adiciona o valor do refrigerante ao carrinho de compras e atualiza o valor total.
- Ao clicar no item "Meu Carrinho" no menu de navegação, redireciona o usuário para a página total.html, exibindo o resumo do carrinho de compras.

### Página total.html
- Apresenta um cabeçalho com o menu de navegação.
- Exibe um elemento `<div>` com o valor total gasto em bebidas.
- Possui um botão "Voltar ao Início" para redirecionar o usuário de volta à página inicial (index.html).
- O valor total é obtido a partir dos parâmetros da URL e exibido na página.

## Estilização
- O projeto utiliza CSS para estilizar os elementos e proporcionar uma aparência agradável e responsiva.
- Os arquivos styles.css e os arquivos CSS específicos para cada página (site18.css, sitemenos18.css, total.css) contêm regras de estilo para os elementos das respectivas páginas.

### Considerações finais
Basicamente é assim que o projeto funciona, caso eu venha atualiza-lo no futuro estarei fazendo os commits por aqui.
Qualquer dúvida ou sugestão pode entrar em contato comigo! :smile: