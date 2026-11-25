# Botão de Acessibilidade — WordPress AW

Plugin com painel de acessibilidade para visitantes do site. **Versão 2.0.0**, da Alfama Web.

## Baixar e instalar

**[Baixar o plugin pronto — botao-acessibilidade.zip](botao-acessibilidade.zip?raw=true)**

1. Baixe o arquivo pelo link acima. Não é necessário executar comandos ou extrair o ZIP.
2. No WordPress, abra **Plugins → Adicionar novo → Enviar plugin**.
3. Selecione `botao-acessibilidade.zip`, clique em **Instalar agora** e depois em **Ativar plugin**.
4. Abra **Botão Acessibilidade** no menu do painel, ajuste as opções e clique em **Salvar**.

O botão **Code → Download ZIP** do GitHub baixa o projeto completo. Para instalar no WordPress, use o arquivo `botao-acessibilidade.zip` indicado acima.

Requisitos: WordPress 5.8 ou mais novo e PHP 7.4 ou mais novo (os mesmos da 1.x). No WordPress 6.3+ o script sai com `defer`; antes disso, no rodapé sem `defer` (funciona igual).

## O que mudou na 2.0.0

O painel agora é **o mesmo do kit PHP do SGW**: o `acessibilidade.js` é gerado a partir dele (ver "De onde vem o JavaScript").

- Tamanho do texto que funciona também em temas com fonte em `px` (o painel mede cada elemento e aplica um fator), de 100% a 150% em passos de 10%.
- Contraste claro e contraste escuro (o escuro preserva imagens e vídeos), tons de cinza, destacar links, fonte legível, espaçamento do texto, pausar animações (inclui vídeos e respeita o "reduzir movimento" do sistema), cursor grande e guia de leitura.
- Novos: **máscara de leitura**, **foco reforçado**, **estrutura da página** (lista de regiões e títulos para pular direto), **perfis prontos** (baixa visão, dislexia, concentração, sensível a movimento) e o atalho **Alt+Shift+A**.
- Ouvir (leitura em voz alta, com velocidade) e Libras (VLibras) continuam, com o comportamento do kit.
- Botão redondo em um dos **quatro cantos**, com distância e tamanho configuráveis; a cor do ícone é escolhida pelo contraste.
- **Botão flutuante opcional**: sem ele, o painel abre por qualquer elemento do tema com `data-sgw-a11y-abrir` (por exemplo `<a href="#" data-sgw-a11y-abrir>Acessibilidade</a>` no menu) ou pelo atalho. Também existe `window.sgwAcessibilidade.abrir()`, `.fechar()` e `.alternar()`.
- **Textos do painel editáveis** na tela de ajustes, e idioma do painel e da voz.
- **Esconder o botão por página**: caixa "Esconder o botão de acessibilidade nesta página" na lateral do editor de posts, páginas e tipos de conteúdo públicos. Marcada, o script nem é carregado nessa página.
- Painel mais acessível: alvos de 44 px, foco visível, `Esc` fecha e devolve o foco a quem abriu, `forced-colors`, não aparece na impressão.
- As preferências do visitante passam da chave `botao-acessibilidade` para `sgw-a11y` no `localStorage` (migração automática, abaixo).

## Atualizar da 1.1.0

Envie o novo ZIP em **Plugins → Adicionar novo → Enviar plugin** e escolha **Substituir o atual pelo enviado**. A pasta, o identificador e a opção salva (`botao_acessibilidade`) continuam os mesmos.

**Configurações do painel administrativo.** A opção da 1.x é lida e convertida na hora, sem precisar salvar, para o site ficar como estava:

| 1.1.0 | 2.0.0 |
| --- | --- |
| Lado direita/esquerda + altura "Em cima" | canto superior do mesmo lado |
| Lado direita/esquerda + altura "No meio" ou "Embaixo" | canto inferior do mesmo lado (**"No meio" não existe mais**: o painel do kit só fica nos cantos) |
| Tamanho pequeno / médio / grande | 44 / 52 / 64 px (a altura da aba antiga, que media 38×44, 46×52 e 56×64 px; o botão novo é redondo) |
| Cor | a mesma cor (padrão da 1.x: `#1449c7`) |
| Libras sim/não | Libras ligado/desligado como estava |
| (Ouvir sempre aparecia) | Ouvir ligado |
| — | recursos novos ligados; distância do canto 16 px; botão flutuante e atalho ligados; idioma pt-BR; textos padrão |

A tela de ajustes mostra um aviso enquanto a opção ainda está no formato da 1.x; ao clicar em **Salvar**, ela é gravada no formato novo. Os campos da 1.x (`lado`, `altura`, `tamanho`, `libras`) continuam sendo gravados, derivados dos novos, para que voltar à 1.1.0 não perca o essencial.

**Preferências dos visitantes.** Na primeira visita depois da atualização, o JavaScript converte uma única vez a chave antiga `botao-acessibilidade` para `sgw-a11y` e apaga a antiga: contraste → contraste escuro; parar animações → pausar animações; tons de cinza, links, fonte legível, espaçamento, cursor, guia e Libras como estavam; velocidade da leitura como estava; tamanho do texto 115% → 120%, 130% → 130%, 150% → 150% (o painel novo não tem 90%: 90% e 100% viram o padrão). Se a chave nova já existir, ela vence.

Se o site ainda apresentar a versão anterior, limpe o cache do site/CDN e recarregue a página com **Ctrl + Shift + R** (a versão do script mudou para 2.0.0, o que renova a URL).

## Tela de ajustes

Em **Botão Acessibilidade** (menu do painel; só administradores com `manage_options`):

- Cor do botão, posição (quatro cantos), distância do canto (0–200 px), tamanho do botão (44–96 px).
- Botão flutuante sim/não (explicação do gatilho `data-sgw-a11y-abrir` na própria tela) e atalho do teclado sim/não.
- Recursos do painel: uma caixa por recurso (`fonte`, `contraste`, `cinza`, `links`, `legivel`, `espaco`, `animacoes`, `cursor`, `guia`, `ouvir`, `libras`, `mascara`, `foco`, `estrutura`, `perfis`). Desmarcar todos volta ao padrão do kit (todos menos Ouvir e Libras), com aviso.
- Idioma (etiqueta como `pt-BR`, `en`, `es`).
- Textos do painel: nome do botão, título, aviso e "Redefinir" à vista; os demais em "Todos os textos do painel". Campo em branco = texto padrão. Texto puro: tags HTML são retiradas, mas `<`, `&` e `%` soltos ficam como foram digitados ("Tamanho < 100", "R&D"). Limite de 200 bytes por texto (letras acentuadas contam 2): o campo avisa e não deixa salvar acima disso.
- Pré-visualização ao lado, que muda na hora e não grava nada no navegador.

Filtros para desenvolvedores: `botao_acessibilidade_nonce` (nonce da CSP, ver abaixo), `botao_acessibilidade_esconder` (`bool $esconder, int $post_id`: esconder o botão em outras situações) e `botao_acessibilidade_tipos_de_post` (tipos que ganham a caixa no editor).

## CSP (Content Security Policy)

- O arquivo não usa `eval` nem `new Function`. Libere-o em `script-src` pela origem do site ou por `nonce`.
- O painel injeta um `<style>`: com `nonce`, ele recebe o mesmo `nonce` do `<script>`; sem `nonce`, `style-src` precisa de `'unsafe-inline'`.
- Para o plugin pôr o `nonce` no `<script>`, devolva-o no filtro: `add_filter( 'botao_acessibilidade_nonce', function () { return MEU_NONCE; } );`. Se outro plugin de CSP já colocar `nonce` na tag, ele é mantido.
- **Com Libras ligado**, libere também os domínios do VLibras (medido com VLibras 7.12.2; o serviço pode mudar de domínio):

| Diretiva | O que liberar |
| --- | --- |
| `script-src` | `https://vlibras.gov.br`, `https://cdn.jsdelivr.net` |
| `style-src` | `'unsafe-inline'`, `https://vlibras.gov.br`, `https://cdn.jsdelivr.net` |
| `img-src` | `data:`, `blob:`, `https://vlibras.gov.br`, `https://cdn.jsdelivr.net` |
| `font-src` | `https://vlibras.gov.br`, `https://cdn.jsdelivr.net` |
| `connect-src` | `https://vlibras.gov.br`, `https://traducao2.vlibras.gov.br`, `https://cdn.jsdelivr.net` |
| `frame-src` | `https://vlibras.gov.br` |

O VLibras só é pedido quando o visitante liga a opção. Ouvir não precisa de nada na CSP. Sites com Trusted Types obrigatórios (`require-trusted-types-for 'script'`) bloqueiam o painel, que monta o HTML por `insertAdjacentHTML`.

## Usar em um site HTML (sem WordPress)

Copie `acessibilidade.js` para o site e inclua antes de `</body>`:

```html
<script src="/acessibilidade.js" defer
  data-posicao="inferior-direita"
  data-cor="#1449c7"
  data-tamanho="52"
  data-recursos="fonte,contraste,cinza,links,legivel,espaco,animacoes,cursor,guia,ouvir,libras,mascara,foco,estrutura,perfis"
  data-rotulos='{"titulo":"Acessibilidade do site"}'></script>
```

Todos os atributos são opcionais; valor inválido vale o padrão.

| Atributo | Valores | Padrão |
| --- | --- | --- |
| `data-posicao` | `inferior-esquerda`, `inferior-direita`, `superior-esquerda`, `superior-direita` | `inferior-esquerda` |
| `data-cor` | `#rgb` ou `#rrggbb` | `#0b5cad` |
| `data-deslocamento` | inteiro 0–200 (px do canto) | `16` |
| `data-tamanho` | inteiro 44–96 (px do botão) | `56` |
| `data-elevar` | inteiro 0–400 (px a mais na vertical) | `0` |
| `data-safe-area` | `true`/`sim`/`1` soma a área segura do aparelho | desligado |
| `data-botao-flutuante` | `false`/`nao`/`0` esconde o botão (abre por `[data-sgw-a11y-abrir]`) | visível |
| `data-atalho` | `false`/`nao`/`0` desliga o Alt+Shift+A | ligado |
| `data-recursos` | ids separados por vírgula (lista acima) | os 13 sem `ouvir` e `libras` |
| `data-rotulos` | JSON `{"chave":"texto"}` (chaves `botao`, `titulo`, `aviso`, `redefinir`...) | textos em pt-BR |
| `data-rotulo` | nome acessível do botão | `Acessibilidade` |
| `data-idioma` | `pt-BR`, `en`, `es-419`... | `pt-BR` |
| `data-ouvir-seletor` | seletor CSS da área lida pelo Ouvir (até 200 bytes) | `main`, `[role=main]`, `article`, `body` (o primeiro que existir) |
| `nonce` | nonce da CSP | nenhum |

Os atributos da 1.x (`data-lado`, `data-altura`, `data-tamanho` pequeno/médio/grande, `data-libras`) **não são mais lidos**. A lista completa e as regras estão no README do kit PHP do SGW, seção "acessibilidade.js autônomo".

## De onde vem o JavaScript

`acessibilidade.js` é **gerado** pelo kit PHP do SGW (`kits/site-php/gerado/acessibilidade.js`, pela ferramenta `kits/site-php/ferramentas/gerar-acessibilidade-js.php`) e copiado para cá **byte a byte**. **Não edite à mão**: mude o painel no kit, gere de novo lá e copie o arquivo. O `.gitattributes` deste repositório marca o arquivo como `-text`, para o Git no Windows não trocar os finais de linha e o arquivo continuar idêntico ao gerado.

## Testar

Para uma demonstração local, abra `demo.html` no navegador (com o projeto extraído). O formulário dela monta os mesmos `data-*` do plugin.

Depois de instalar ou atualizar no WordPress:

1. Abra o painel pelo botão e pelo Alt+Shift+A; feche com `Esc`.
2. Aumente a fonte e confira que o texto do tema cresce (também com fonte em `px`).
3. Ligue um perfil e depois "Redefinir tudo".
4. Marque "Esconder o botão" numa página e confira que o botão some só nela.
5. Num navegador que já usava a 1.x, confira que as preferências continuam.

## Gerar outro ZIP após alterar o código

No Windows, abra o PowerShell na pasta do projeto e execute:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\empacotar.ps1
```

O script copia o JavaScript e a licença para `wordpress/botao-acessibilidade/` e recria `botao-acessibilidade.zip`, com caminhos internos usando `/`. A cópia do JS dentro de `wordpress/` vem sempre do script: não a edite.

Antes de publicar uma atualização, ajuste a versão no cabeçalho PHP e na constante `BA11Y_VERSAO`, execute o empacotador e envie também o ZIP atualizado ao repositório.

## Arquivos

| Arquivo | Finalidade |
| --- | --- |
| `botao-acessibilidade.zip` | Plugin pronto para instalar |
| `acessibilidade.js` | Painel (gerado pelo kit do SGW; não editar) |
| `wordpress/botao-acessibilidade/botao-acessibilidade.php` | Integração e configurações do WordPress |
| `wordpress/botao-acessibilidade/acessibilidade.js` | Cópia do JavaScript incluída no plugin (feita pelo `empacotar.ps1`) |
| `empacotar.ps1` | Atualiza os arquivos do plugin e gera o ZIP |
| `demo.html` | Página de demonstração local |
| `LICENSE` | Licença MIT |

## Notas de uso

O plugin oferece ferramentas de apoio ao visitante, mas não substitui semântica HTML correta, contraste de projeto, texto alternativo e navegação por teclado no próprio site, nem garante conformidade com WCAG. Limites conhecidos: imagem de fundo não é invertida no contraste escuro; GIF animado não é pausado; texto dentro de imagem ou `<canvas>` não aumenta; layouts com altura fixa em px podem cortar texto ampliado. Enquanto o avatar do VLibras está aberto, ele captura os cliques da página (inclusive os do painel): feche o avatar para usar o painel.

## Licença

Licença [MIT](LICENSE), preservada também dentro do ZIP do plugin.
