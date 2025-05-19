# Instruções para Personalização do Site

Este documento contém instruções para personalização do site da Bem Vida Serviços Elétricos, especializado em instalação de carregadores para veículos elétricos.

## Estrutura de Arquivos

O site é composto pelos seguintes arquivos:
- `index.html` - Estrutura principal do site
- `styles.css` - Estilos e responsividade
- `script.js` - Funcionalidades interativas
- Pasta `images/` - Contém todas as imagens do site

## Como Personalizar

### 1. Alterando as Imagens da Galeria

Para substituir as imagens da galeria:
- Prepare novas imagens de projetos realizados (formato JPG ou PNG)
- Substitua os arquivos na pasta `images/`:
  - `carregador1.jpg` - Carregador GWM com Quadro STECK
  - `carregador2.jpg` - Carregador WEG VOLVO
  - `carregador3.jpg` - Carregador WEG Residencial
  - `carregador4.jpg` - Carregador GWM Moderno
- Mantenha os mesmos nomes de arquivos
- Recomendado usar imagens com proporções semelhantes para manter a consistência visual

### 2. Alterando a Imagem de Fundo do Banner

Para substituir a imagem de fundo do banner:
- Prepare uma imagem horizontal (formato JPG recomendado)
- Substitua o arquivo `images/hero-bg.jpg` pela sua imagem
- Recomendado usar uma imagem de alta qualidade e boa resolução

### 3. Configurando o Número do WhatsApp

O número do WhatsApp já está configurado como 5511947499755, conforme informações do seu perfil. Caso precise alterar:
1. Abra o arquivo `script.js`
2. Localize a linha com `const phoneNumber = '5511947499755';`
3. Substitua pelo novo número com código do país
4. Você também pode alterar a mensagem padrão na linha seguinte

### 4. Alterando Textos e Conteúdo

Para alterar textos e conteúdo:
1. Abra o arquivo `index.html`
2. Localize as seções que deseja modificar
3. Altere os textos dentro das tags HTML mantendo a estrutura

## Dicas Adicionais

- O site é totalmente responsivo e funciona em dispositivos móveis e desktop
- A galeria possui efeito de lightbox ao clicar nas imagens
- O menu mobile é ativado automaticamente em telas menores
- O botão de WhatsApp possui destaque visual para aumentar conversões
- As cores foram escolhidas para combinar com a identidade visual da Bem Vida (azul escuro e amarelo)

## Hospedagem

Para publicar o site:
1. Faça upload de todos os arquivos e a pasta `images/` para seu servidor web
2. Mantenha a mesma estrutura de pastas
3. Certifique-se de que o arquivo `index.html` esteja na raiz do diretório
