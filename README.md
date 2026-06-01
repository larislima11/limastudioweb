# Lima Studio Web

Site institucional da **Lima Studio Web** — desenvolvimento web sob medida.

## Como abrir no VSCode

1. Crie a pasta no seu computador (veja abaixo).
2. Coloque o arquivo `index.html` (e este `README.md`) dentro dela.
3. Abra a pasta no VSCode: **Arquivo > Abrir Pasta** e selecione `C:\DEV\LIMASTUDIOWEB`.

## Como visualizar o site

**Forma rápida:** dê dois cliques no `index.html` (abre no navegador).

**Forma recomendada (atualiza sozinho enquanto você edita):**
1. No VSCode, instale a extensão **Live Server** (ícone de extensões na barra lateral, busque por "Live Server").
2. Clique com o botão direito no `index.html` > **Open with Live Server**.

## Estrutura

```
LIMASTUDIOWEB/
├── index.html        <- conteúdo da página (HTML semântico)
├── css/
│   └── styles.css    <- todo o visual, com seções comentadas
├── js/
│   └── main.js       <- animação da galáxia + interações
└── README.md
```

> O código foi separado em HTML / CSS / JS para facilitar a manutenção.
> Cada arquivo começa com um comentário explicando como está organizado.

## O que personalizar

Procure pelos comentários `TODO:` no `index.html` — eles marcam tudo que precisa do seu toque:

- **Telefone / WhatsApp:** procure por `5515981605571`
- **E-mail:** procure por `larissaalmeidalima9@gmail.com`
- **Domínio:** procure por `limastudioweb.com.br` e troque pelo seu domínio real ao publicar (aparece no SEO e nos links de compartilhamento)
- **Instagram / LinkedIn:** links no rodapé já prontos — só trocar pelo seu @
- **Imagem de compartilhamento:** crie uma capa **1200×630px** e suba como `og.jpg` na raiz do site. É a imagem que aparece quando alguém cola seu link no WhatsApp/Instagram/LinkedIn
- **Projetos:** os 3 cards da seção "Projetos" (nome, tag, descrição e captura)
- **Foto:** na seção "Sobre"

## SEO e compartilhamento (já configurado)

O site já vem com Open Graph, Twitter Card, favicon, canonical e dados estruturados (JSON-LD).
Depois de publicar e subir o `og.jpg`, teste como o link aparece em:
- WhatsApp (mande o link pra você mesma)
- https://www.opengraph.xyz (cola a URL e vê a prévia)

## Animação da galáxia

Os parâmetros ficam em `js/main.js` (procure pelo comentário "MILKY WAY"):
- `BUILD` — tempo de construção da galáxia (segundos)
- `arms` — número de braços espirais
- `TILT` — achatamento do disco (0.5 = inclinado, 1 = de frente)
- `galaxy.cx / cy` — posição da galáxia na tela
