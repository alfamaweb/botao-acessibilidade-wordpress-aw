# Botão de Acessibilidade — WordPress AW

Plugin com painel de acessibilidade para visitantes do site. **Versão 1.0.1**.

## Baixar e instalar

**[Baixar o plugin pronto — botao-acessibilidade.zip](botao-acessibilidade.zip?raw=true)**

1. Baixe o arquivo pelo link acima. Não é necessário executar comandos ou extrair o ZIP.
2. No WordPress, abra **Plugins → Adicionar novo → Enviar plugin**.
3. Selecione `botao-acessibilidade.zip`, clique em **Instalar agora** e depois em **Ativar plugin**.
4. Abra **Botão Acessibilidade** no menu do painel. Ajuste cor, lado, altura, tamanho do botão e disponibilidade de Libras; clique em **Salvar**.

O botão **Code → Download ZIP** do GitHub baixa o projeto completo. Para instalar no WordPress, use o arquivo `botao-acessibilidade.zip` indicado acima.

### Atualizar uma instalação existente

Envie o novo ZIP pela mesma tela e escolha **Substituir o atual pelo enviado**. A pasta e o identificador do plugin continuam sendo `botao-acessibilidade`, preservando as configurações salvas. A versão do JavaScript foi atualizada para 1.0.1 para renovar sua URL de cache.

Se o site ainda apresentar a versão anterior, limpe o cache do site/CDN e recarregue a página com **Ctrl + Shift + R**.

## Recursos

- Tamanho do texto em cinco níveis: 90%, 100%, 115%, 130% e 150%.
- Leitura em voz alta da página ou de um trecho selecionado, com pausa e parada.
- Alto contraste, tons de cinza e destaque de links.
- Fonte mais legível e maior espaço entre linhas.
- Pausa das animações e cursor grande.
- Guia de leitura que acompanha o ponteiro.
- Libras pelo VLibras, carregado quando o visitante ativa essa opção.
- Restauração das preferências padrão.

As preferências do visitante ficam no `localStorage` do navegador. A leitura em voz alta depende dos recursos e vozes disponíveis no navegador; o VLibras depende de conexão com seu serviço externo.

## Testar

Para uma demonstração local, extraia o projeto completo e abra `demo.html` no navegador.

Depois de instalar ou atualizar no WordPress:

1. Abra o painel e ative **Guia de leitura**.
2. Clique na opção novamente para desativar.
3. Ative, feche o painel, reabra pelo botão lateral e desative.
4. Recarregue a página com o guia ativo e confirme que consegue desativá-lo.
5. Confira **Restaurar o padrão** e os cliques nos links do site.

**Validação desta entrega:** sintaxe JavaScript e regras CSS verificadas; estrutura e integridade do ZIP conferidas. O teste automatizado de interação não pôde executar neste ambiente. A instalação e os cliques devem ser confirmados no WordPress de destino.

## Usar em um site HTML

Copie `acessibilidade.js` para o site e inclua antes de `</body>`:

```html
<script src="/acessibilidade.js" defer
  data-cor="#1449c7"
  data-lado="direita"
  data-altura="meio"
  data-tamanho="medio"
  data-libras="sim"></script>
```

| Atributo | Valores | Padrão |
| --- | --- | --- |
| `data-cor` | Cor hexadecimal | `#1449c7` |
| `data-lado` | `direita`, `esquerda` | `direita` |
| `data-altura` | `topo`, `meio`, `baixo` | `meio` |
| `data-tamanho` | `pequeno`, `medio`, `grande` | `medio` |
| `data-libras` | `sim`, `nao` | `sim` |

## Gerar outro ZIP após alterar o código

O ZIP já incluído está pronto para instalação. O empacotador só é necessário quando houver mudanças no código.

No Windows, abra o PowerShell na pasta do projeto e execute:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\empacotar.ps1
```

O comando libera a execução somente para esse processo. O script copia o JavaScript e a licença para o plugin e recria `botao-acessibilidade.zip`, com caminhos internos usando `/`.

Antes de publicar uma atualização, ajuste a versão no cabeçalho do JavaScript, no cabeçalho PHP e na constante `BA11Y_VERSAO`. Execute o empacotador e envie também o ZIP atualizado ao repositório.

## Arquivos

| Arquivo | Finalidade |
| --- | --- |
| `botao-acessibilidade.zip` | Plugin pronto para instalar |
| `acessibilidade.js` | Código-fonte principal do botão |
| `wordpress/botao-acessibilidade/botao-acessibilidade.php` | Integração e configurações do WordPress |
| `wordpress/botao-acessibilidade/acessibilidade.js` | Cópia do JavaScript incluída no plugin |
| `empacotar.ps1` | Atualiza os arquivos do plugin e gera o ZIP |
| `demo.html` | Página de demonstração local |
| `LICENSE` | Licença MIT |

## Notas de uso

O aumento do texto depende das unidades usadas pelo tema: fontes em `rem` e `em` acompanham o tamanho raiz; fontes fixadas em `px` podem não aumentar. Sites com CSP precisam permitir os recursos externos usados pelo VLibras. O plugin oferece ferramentas de apoio, mas a acessibilidade também depende do conteúdo e da estrutura do site.

##  licença

Licença [MIT](LICENSE), preservada também dentro do ZIP do plugin.
