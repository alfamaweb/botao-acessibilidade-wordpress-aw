/*! acessibilidade.js -- painel de acessibilidade do kit PHP do SGW, autonomo (um arquivo, sem dependencias).
 * GERADO por kits/site-php/ferramentas/gerar-acessibilidade-js.php a partir de kits/site-php/src/acessibilidade.php.
 * NAO EDITE: mude o kit e rode `php kits/site-php/ferramentas/gerar-acessibilidade-js.php`. O teste do kit falha se este arquivo ficar desatualizado.
 *
 * Uso (antes de </body>, ou com defer):
 *   <script src="acessibilidade.js" defer data-posicao="inferior-direita" data-cor="#0b5cad"
 *     data-recursos="fonte,contraste,cinza,links,legivel,espaco,animacoes,cursor,guia,ouvir,libras"></script>
 * Atributos (todos opcionais; valor invalido = o padrao, como no kit): data-posicao, data-cor, data-deslocamento, data-elevar,
 * data-safe-area, data-tamanho, data-botao-flutuante, data-recursos, data-rotulos (JSON), data-rotulo, data-idioma,
 * data-atalho, data-ouvir-seletor. O nonce do proprio <script> vai para o <style> injetado e para o script do VLibras.
 * Contrato completo: README do kit, secao "acessibilidade.js autonomo".
 */
(function(){
var SGWA11Y=(function(){
var T={"css":{"sem":".sgw-a11y,.sgw-a11y *{box-sizing:border-box}\n.sgw-a11y{--sgw-a11y-cor:@@COR@@;--sgw-a11y-cor-txt:@@CORTXT@@;position:static;margin:0;padding:0;font:16px/1.4 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;letter-spacing:normal;word-spacing:normal;text-transform:none;text-align:left;color:#1a1a1a}\n.sgw-a11y [hidden]{display:none!important}\n.sgw-a11y button{font:inherit;margin:0;letter-spacing:normal;word-spacing:normal;text-transform:none;cursor:pointer}\n.sgw-a11y-so{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\n.sgw-a11y-botao{position:fixed;@@V@@:@@BV@@px;@@H@@:@@DL@@px;z-index:2147483000;width:@@T@@px;height:@@T@@px;padding:0;border:2px solid #fff;border-radius:50%;background:var(--sgw-a11y-cor);color:var(--sgw-a11y-cor-txt);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.45)}\n.sgw-a11y-botao[hidden]{display:none!important}\n.sgw-a11y-botao svg{width:@@I@@px;height:@@I@@px;fill:currentColor;pointer-events:none}\n.sgw-a11y-painel{position:fixed;@@V@@:@@DP@@px;@@H@@:@@DL@@px;z-index:2147483000;width:340px;max-width:calc(100vw - 16px);max-height:calc(100vh - @@DM@@px);max-height:calc(100dvh - @@DM@@px - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px));overflow-y:auto;padding:16px;background:#fff;color:#1a1a1a;border:2px solid #1a1a1a;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.35)}\n.sgw-a11y-cab{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0 0 12px}\n.sgw-a11y-titulo{margin:0;font-size:18px;font-weight:700;line-height:1.3;color:#1a1a1a}\n.sgw-a11y-fechar{flex:none;width:44px;height:44px;padding:0;border:2px solid #767676;border-radius:8px;background:#fff;color:#1a1a1a;font-size:22px;line-height:1}\n.sgw-a11y-fonte{display:flex;align-items:center;gap:8px;margin:0 0 8px}\n.sgw-a11y-fonte-info{flex:1;text-align:center;font-size:15px;font-weight:600;color:#1a1a1a}\n.sgw-a11y-passo{flex:none;min-width:44px;min-height:44px;padding:0 10px;border:2px solid #767676;border-radius:8px;background:#f3f4f6;color:#1a1a1a;font-size:15px;font-weight:700}\n.sgw-a11y-passo[aria-disabled=\"true\"]{opacity:1;border-style:dashed;color:#595959;cursor:not-allowed}\n.sgw-a11y-grade{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:0 0 12px}\n.sgw-a11y-op{display:flex;align-items:center;justify-content:space-between;gap:6px;min-height:44px;padding:6px 10px;border:2px solid #767676;border-radius:8px;background:#f3f4f6;color:#1a1a1a;font-size:15px;text-align:left}\n.sgw-a11y-op[aria-pressed=\"true\"]{background:var(--sgw-a11y-cor);border-color:var(--sgw-a11y-cor);color:var(--sgw-a11y-cor-txt);font-weight:700}\n.sgw-a11y-op[aria-pressed=\"true\"]::after{content:\"\\2713\";flex:none;font-weight:700}\n.sgw-a11y-redefinir{display:block;width:100%;min-height:44px;padding:6px 10px;border:2px solid #1a1a1a;border-radius:8px;background:#fff;color:#1a1a1a;font-size:15px;font-weight:700}\n.sgw-a11y-aviso{margin:12px 0 0;font-size:13px;line-height:1.4;color:#404040}@@EXTRA@@\n.sgw-a11y-guia{position:fixed;left:0;right:0;top:0;height:44px;z-index:2147482999;pointer-events:none;background:rgba(255,235,59,.28);border-top:3px solid #000;border-bottom:3px solid #000;transform:translateY(40vh)}\n.sgw-a11y button:focus-visible,.sgw-a11y-painel:focus-visible{outline:3px solid #000;outline-offset:2px;box-shadow:0 0 0 2px #fff}\n@supports not selector(:focus-visible){.sgw-a11y button:focus,.sgw-a11y-painel:focus{outline:3px solid #000;outline-offset:2px;box-shadow:0 0 0 2px #fff}}\n@media (max-height:500px){.sgw-a11y-painel{top:8px;top:max(8px,env(safe-area-inset-top,0px));bottom:8px;bottom:max(8px,env(safe-area-inset-bottom,0px));width:min(640px,calc(100% - 16px - env(safe-area-inset-left,0px) - env(safe-area-inset-right,0px)));max-width:none;max-height:none;padding:12px;overscroll-behavior:contain}.sgw-a11y-grade{grid-template-columns:repeat(auto-fill,minmax(180px,1fr))}.sgw-a11y-cab{margin-bottom:8px}}\n@media (max-width:480px){.sgw-a11y-painel{top:8px;top:max(8px,env(safe-area-inset-top,0px));bottom:8px;bottom:max(8px,env(safe-area-inset-bottom,0px));left:8px;left:max(8px,env(safe-area-inset-left,0px));right:8px;right:max(8px,env(safe-area-inset-right,0px));width:auto;max-width:none;max-height:none;overscroll-behavior:contain}.sgw-a11y-grade{grid-template-columns:1fr}}\n@media (forced-colors:active){.sgw-a11y-op[aria-pressed=\"true\"]{border-width:4px}}\n@media print{.sgw-a11y,.sgw-a11y-guia{display:none!important}}\nhtml.sgw-a11y-fs [data-sgw-a11y-fs]{font-size:calc(var(--sgw-a11y-fs) * var(--sgw-a11y-fator,1))!important}\nhtml.sgw-a11y-fs [data-sgw-a11y-lh]{line-height:calc(var(--sgw-a11y-lh) * var(--sgw-a11y-fator,1))!important}\nhtml.sgw-a11y-contraste-claro body,html.sgw-a11y-contraste-claro body>:not(.sgw-a11y),html.sgw-a11y-contraste-claro body>:not(.sgw-a11y) *{color:#000!important;background-color:#fff!important;background-image:none!important;border-color:#000!important;box-shadow:none!important;text-shadow:none!important}\nhtml.sgw-a11y-contraste-claro body>:not(.sgw-a11y) a,html.sgw-a11y-contraste-claro body>:not(.sgw-a11y) a *{color:#0000c8!important;text-decoration:underline!important}\nhtml.sgw-a11y-contraste-escuro{filter:invert(1) hue-rotate(180deg)}\nhtml.sgw-a11y-contraste-escuro img,html.sgw-a11y-contraste-escuro video,html.sgw-a11y-contraste-escuro canvas,html.sgw-a11y-contraste-escuro picture,html.sgw-a11y-contraste-escuro iframe,html.sgw-a11y-contraste-escuro .sgw-a11y-botao,html.sgw-a11y-contraste-escuro .sgw-a11y-painel{filter:invert(1) hue-rotate(180deg)}\nhtml.sgw-a11y-cinza{filter:grayscale(1)}\nhtml.sgw-a11y-cinza.sgw-a11y-contraste-escuro{filter:invert(1) hue-rotate(180deg) grayscale(1)}\nhtml.sgw-a11y-links body>:not(.sgw-a11y) a{text-decoration:underline!important;text-decoration-thickness:2px!important;text-underline-offset:3px!important;background-color:#ff0!important;color:#000!important;outline:2px solid #000!important;outline-offset:1px}\nhtml.sgw-a11y-legivel body,html.sgw-a11y-legivel body>:not(.sgw-a11y),html.sgw-a11y-legivel body>:not(.sgw-a11y) *{font-family:Verdana,Tahoma,\"Segoe UI\",Arial,Helvetica,sans-serif!important}\nhtml.sgw-a11y-legivel body>:not(.sgw-a11y) i,html.sgw-a11y-legivel body>:not(.sgw-a11y) [class*=\"icon\"],html.sgw-a11y-legivel body>:not(.sgw-a11y) [class*=\"fa-\"],html.sgw-a11y-legivel body>:not(.sgw-a11y) svg,html.sgw-a11y-legivel body>:not(.sgw-a11y) svg *{font-family:revert!important}\nhtml.sgw-a11y-espaco body,html.sgw-a11y-espaco body>:not(.sgw-a11y),html.sgw-a11y-espaco body>:not(.sgw-a11y) *{line-height:1.8!important;letter-spacing:.12em!important;word-spacing:.16em!important}\nhtml.sgw-a11y-sem-anim *,html.sgw-a11y-sem-anim *::before,html.sgw-a11y-sem-anim *::after{animation-duration:.001ms!important;animation-delay:0s!important;animation-iteration-count:1!important;transition-duration:.001ms!important;transition-delay:0s!important;scroll-behavior:auto!important}\nhtml.sgw-a11y-cursor,html.sgw-a11y-cursor *{cursor:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNNCAydjM4bDktOCA2IDE0IDctMy02LTE0aDEyeiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=\") 4 2,auto!important}","com":".sgw-a11y,.sgw-a11y *{box-sizing:border-box}\n.sgw-a11y{--sgw-a11y-cor:@@COR@@;--sgw-a11y-cor-txt:@@CORTXT@@;position:static;margin:0;padding:0;font:16px/1.4 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;letter-spacing:normal;word-spacing:normal;text-transform:none;text-align:left;color:#1a1a1a}\n.sgw-a11y [hidden]{display:none!important}\n.sgw-a11y button{font:inherit;margin:0;letter-spacing:normal;word-spacing:normal;text-transform:none;cursor:pointer}\n.sgw-a11y-so{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}\n.sgw-a11y-botao{position:fixed;@@V@@:@@BV@@px;@@V@@:calc(@@BV@@px + env(safe-area-inset-@@V@@,0px));@@H@@:@@DL@@px;z-index:2147483000;width:@@T@@px;height:@@T@@px;padding:0;border:2px solid #fff;border-radius:50%;background:var(--sgw-a11y-cor);color:var(--sgw-a11y-cor-txt);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,.45)}\n.sgw-a11y-botao[hidden]{display:none!important}\n.sgw-a11y-botao svg{width:@@I@@px;height:@@I@@px;fill:currentColor;pointer-events:none}\n.sgw-a11y-painel{position:fixed;@@V@@:@@DP@@px;@@V@@:calc(@@DP@@px + env(safe-area-inset-@@V@@,0px));@@H@@:@@DL@@px;z-index:2147483000;width:340px;max-width:calc(100vw - 16px);max-height:calc(100vh - @@DM@@px);max-height:calc(100dvh - @@DM@@px - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px));overflow-y:auto;padding:16px;background:#fff;color:#1a1a1a;border:2px solid #1a1a1a;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.35)}\n.sgw-a11y-cab{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:0 0 12px}\n.sgw-a11y-titulo{margin:0;font-size:18px;font-weight:700;line-height:1.3;color:#1a1a1a}\n.sgw-a11y-fechar{flex:none;width:44px;height:44px;padding:0;border:2px solid #767676;border-radius:8px;background:#fff;color:#1a1a1a;font-size:22px;line-height:1}\n.sgw-a11y-fonte{display:flex;align-items:center;gap:8px;margin:0 0 8px}\n.sgw-a11y-fonte-info{flex:1;text-align:center;font-size:15px;font-weight:600;color:#1a1a1a}\n.sgw-a11y-passo{flex:none;min-width:44px;min-height:44px;padding:0 10px;border:2px solid #767676;border-radius:8px;background:#f3f4f6;color:#1a1a1a;font-size:15px;font-weight:700}\n.sgw-a11y-passo[aria-disabled=\"true\"]{opacity:1;border-style:dashed;color:#595959;cursor:not-allowed}\n.sgw-a11y-grade{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:0 0 12px}\n.sgw-a11y-op{display:flex;align-items:center;justify-content:space-between;gap:6px;min-height:44px;padding:6px 10px;border:2px solid #767676;border-radius:8px;background:#f3f4f6;color:#1a1a1a;font-size:15px;text-align:left}\n.sgw-a11y-op[aria-pressed=\"true\"]{background:var(--sgw-a11y-cor);border-color:var(--sgw-a11y-cor);color:var(--sgw-a11y-cor-txt);font-weight:700}\n.sgw-a11y-op[aria-pressed=\"true\"]::after{content:\"\\2713\";flex:none;font-weight:700}\n.sgw-a11y-redefinir{display:block;width:100%;min-height:44px;padding:6px 10px;border:2px solid #1a1a1a;border-radius:8px;background:#fff;color:#1a1a1a;font-size:15px;font-weight:700}\n.sgw-a11y-aviso{margin:12px 0 0;font-size:13px;line-height:1.4;color:#404040}@@EXTRA@@\n.sgw-a11y-guia{position:fixed;left:0;right:0;top:0;height:44px;z-index:2147482999;pointer-events:none;background:rgba(255,235,59,.28);border-top:3px solid #000;border-bottom:3px solid #000;transform:translateY(40vh)}\n.sgw-a11y button:focus-visible,.sgw-a11y-painel:focus-visible{outline:3px solid #000;outline-offset:2px;box-shadow:0 0 0 2px #fff}\n@supports not selector(:focus-visible){.sgw-a11y button:focus,.sgw-a11y-painel:focus{outline:3px solid #000;outline-offset:2px;box-shadow:0 0 0 2px #fff}}\n@media (max-height:500px){.sgw-a11y-painel{top:8px;top:max(8px,env(safe-area-inset-top,0px));bottom:8px;bottom:max(8px,env(safe-area-inset-bottom,0px));width:min(640px,calc(100% - 16px - env(safe-area-inset-left,0px) - env(safe-area-inset-right,0px)));max-width:none;max-height:none;padding:12px;overscroll-behavior:contain}.sgw-a11y-grade{grid-template-columns:repeat(auto-fill,minmax(180px,1fr))}.sgw-a11y-cab{margin-bottom:8px}}\n@media (max-width:480px){.sgw-a11y-painel{top:8px;top:max(8px,env(safe-area-inset-top,0px));bottom:8px;bottom:max(8px,env(safe-area-inset-bottom,0px));left:8px;left:max(8px,env(safe-area-inset-left,0px));right:8px;right:max(8px,env(safe-area-inset-right,0px));width:auto;max-width:none;max-height:none;overscroll-behavior:contain}.sgw-a11y-grade{grid-template-columns:1fr}}\n@media (forced-colors:active){.sgw-a11y-op[aria-pressed=\"true\"]{border-width:4px}}\n@media print{.sgw-a11y,.sgw-a11y-guia{display:none!important}}\nhtml.sgw-a11y-fs [data-sgw-a11y-fs]{font-size:calc(var(--sgw-a11y-fs) * var(--sgw-a11y-fator,1))!important}\nhtml.sgw-a11y-fs [data-sgw-a11y-lh]{line-height:calc(var(--sgw-a11y-lh) * var(--sgw-a11y-fator,1))!important}\nhtml.sgw-a11y-contraste-claro body,html.sgw-a11y-contraste-claro body>:not(.sgw-a11y),html.sgw-a11y-contraste-claro body>:not(.sgw-a11y) *{color:#000!important;background-color:#fff!important;background-image:none!important;border-color:#000!important;box-shadow:none!important;text-shadow:none!important}\nhtml.sgw-a11y-contraste-claro body>:not(.sgw-a11y) a,html.sgw-a11y-contraste-claro body>:not(.sgw-a11y) a *{color:#0000c8!important;text-decoration:underline!important}\nhtml.sgw-a11y-contraste-escuro{filter:invert(1) hue-rotate(180deg)}\nhtml.sgw-a11y-contraste-escuro img,html.sgw-a11y-contraste-escuro video,html.sgw-a11y-contraste-escuro canvas,html.sgw-a11y-contraste-escuro picture,html.sgw-a11y-contraste-escuro iframe,html.sgw-a11y-contraste-escuro .sgw-a11y-botao,html.sgw-a11y-contraste-escuro .sgw-a11y-painel{filter:invert(1) hue-rotate(180deg)}\nhtml.sgw-a11y-cinza{filter:grayscale(1)}\nhtml.sgw-a11y-cinza.sgw-a11y-contraste-escuro{filter:invert(1) hue-rotate(180deg) grayscale(1)}\nhtml.sgw-a11y-links body>:not(.sgw-a11y) a{text-decoration:underline!important;text-decoration-thickness:2px!important;text-underline-offset:3px!important;background-color:#ff0!important;color:#000!important;outline:2px solid #000!important;outline-offset:1px}\nhtml.sgw-a11y-legivel body,html.sgw-a11y-legivel body>:not(.sgw-a11y),html.sgw-a11y-legivel body>:not(.sgw-a11y) *{font-family:Verdana,Tahoma,\"Segoe UI\",Arial,Helvetica,sans-serif!important}\nhtml.sgw-a11y-legivel body>:not(.sgw-a11y) i,html.sgw-a11y-legivel body>:not(.sgw-a11y) [class*=\"icon\"],html.sgw-a11y-legivel body>:not(.sgw-a11y) [class*=\"fa-\"],html.sgw-a11y-legivel body>:not(.sgw-a11y) svg,html.sgw-a11y-legivel body>:not(.sgw-a11y) svg *{font-family:revert!important}\nhtml.sgw-a11y-espaco body,html.sgw-a11y-espaco body>:not(.sgw-a11y),html.sgw-a11y-espaco body>:not(.sgw-a11y) *{line-height:1.8!important;letter-spacing:.12em!important;word-spacing:.16em!important}\nhtml.sgw-a11y-sem-anim *,html.sgw-a11y-sem-anim *::before,html.sgw-a11y-sem-anim *::after{animation-duration:.001ms!important;animation-delay:0s!important;animation-iteration-count:1!important;transition-duration:.001ms!important;transition-delay:0s!important;scroll-behavior:auto!important}\nhtml.sgw-a11y-cursor,html.sgw-a11y-cursor *{cursor:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBkPSJNNCAydjM4bDktOCA2IDE0IDctMy02LTE0aDEyeiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=\") 4 2,auto!important}"},"cssExtra":{"ouvir":"\n.sgw-a11y-ouvir{margin:0 0 8px}\n.sgw-a11y-ouvir-titulo{margin:0 0 4px;font-size:15px;font-weight:600;line-height:1.3;color:#1a1a1a}\n.sgw-a11y-ouvir-linha{display:flex;flex-wrap:wrap;align-items:center;gap:8px}\n.sgw-a11y-ouvir-vel{flex:1;text-align:center;font-size:15px;font-weight:600;color:#1a1a1a}","libras":"\nhtml.sgw-a11y-contraste-escuro #vlibras-access-wrapper,html.sgw-a11y-contraste-escuro #vlibras-app-root{filter:invert(1) hue-rotate(180deg)}","mascara":"\n.sgw-a11y-mascara-faixa{display:none;position:fixed;left:0;right:0;top:0;height:96px;z-index:2147482999;pointer-events:none;box-shadow:0 0 0 100vmax rgba(0,0,0,.6);transform:translateY(calc(40vh - 48px));forced-color-adjust:none}\nhtml.sgw-a11y-mascara .sgw-a11y-mascara-faixa{display:block}\nhtml.sgw-a11y-contraste-escuro .sgw-a11y-mascara-faixa{filter:invert(1) hue-rotate(180deg)}","foco":"\nhtml.sgw-a11y-foco body>:not(.sgw-a11y):focus-visible,html.sgw-a11y-foco body>:not(.sgw-a11y) :focus-visible{outline:4px solid #000!important;outline-offset:2px!important;box-shadow:0 0 0 2px #fff,0 0 0 9px #ffd400!important}\n@supports not selector(:focus-visible){html.sgw-a11y-foco body>:not(.sgw-a11y):focus,html.sgw-a11y-foco body>:not(.sgw-a11y) :focus{outline:4px solid #000!important;outline-offset:2px!important;box-shadow:0 0 0 2px #fff,0 0 0 9px #ffd400!important}}","estrutura":"\n.sgw-a11y-estr{margin:0 0 12px}\n.sgw-a11y-estr-botao{display:flex;align-items:center;justify-content:space-between;gap:6px;width:100%;min-height:44px;padding:6px 10px;border:2px solid #767676;border-radius:8px;background:#f3f4f6;color:#1a1a1a;font-size:15px;text-align:left}\n.sgw-a11y-estr-botao::after{content:\"\\25BE\";flex:none}\n.sgw-a11y-estr-botao[aria-expanded=\"true\"]::after{content:\"\\25B4\"}\n.sgw-a11y-estr-tit{margin:8px 0 4px;font-size:15px;font-weight:600;line-height:1.3;color:#1a1a1a}\n.sgw-a11y-estr-lista{list-style:none;margin:0;padding:0}\n.sgw-a11y-estr-item{display:block;width:100%;min-height:44px;padding:6px 10px;border:0;border-bottom:1px solid #d0d0d0;background:#fff;color:#1a1a1a;font-size:15px;text-align:left}\n.sgw-a11y-estr-nivel{display:inline-block;min-width:2em;margin-right:6px;font-size:13px;font-weight:700;color:#404040}\n.sgw-a11y-estr-vazio{padding:6px 0;font-size:14px;color:#404040}","perfis":"\n.sgw-a11y-perfis{margin:0 0 12px;padding:0 0 12px;border-bottom:1px solid #d0d0d0}\n.sgw-a11y-perfis-titulo{margin:0 0 4px;font-size:15px;font-weight:600;line-height:1.3;color:#1a1a1a}\n.sgw-a11y-perfis-lista{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n@media (max-height:500px){.sgw-a11y-perfis-lista{grid-template-columns:repeat(auto-fill,minmax(180px,1fr))}}\n@media (max-width:480px){.sgw-a11y-perfis-lista{grid-template-columns:1fr}}","atalho":"\n.sgw-a11y-atalho{margin-top:4px}"},"ordem":["ouvir","libras","mascara","foco","estrutura","perfis","atalho"],"html":"<div class=\"sgw-a11y\" id=\"sgw-a11y\" lang=\"@@idioma@@\"><button type=\"button\" class=\"sgw-a11y-botao\" id=\"sgw-a11y-botao\" aria-expanded=\"false\" aria-controls=\"sgw-a11y-painel\"[[oculto]] hidden[[/oculto]]><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M12 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 6.5v2l-6 1v2.2l2.4 6.6-1.9.7L12 15.5 9.5 21l-1.9-.7L10 13.7v-2.2l-6-1v-2c3 .7 5.3 1 8 1s5-.3 8-1z\"/></svg><span class=\"sgw-a11y-so\">@@r_botao@@</span></button><div class=\"sgw-a11y-painel\" id=\"sgw-a11y-painel\" role=\"dialog\" aria-labelledby=\"sgw-a11y-titulo\" tabindex=\"-1\" hidden><div class=\"sgw-a11y-cab\"><p class=\"sgw-a11y-titulo\" id=\"sgw-a11y-titulo\">@@r_titulo@@</p><button type=\"button\" class=\"sgw-a11y-fechar\" data-sgw-a11y-fechar><span aria-hidden=\"true\">&times;</span><span class=\"sgw-a11y-so\">@@r_fechar@@</span></button></div>[[perfis]]<div class=\"sgw-a11y-perfis\" role=\"group\" aria-labelledby=\"sgw-a11y-perfis-titulo\"><p class=\"sgw-a11y-perfis-titulo\" id=\"sgw-a11y-perfis-titulo\">@@r_perfis_titulo@@</p><div class=\"sgw-a11y-perfis-lista\">@@p@@</div></div>[[/perfis]][[fonte]]<div class=\"sgw-a11y-fonte\" role=\"group\" aria-label=\"@@r_fonte_titulo@@\"><button type=\"button\" class=\"sgw-a11y-passo\" data-sgw-a11y=\"fonte-\" aria-disabled=\"true\"><span aria-hidden=\"true\">A-</span><span class=\"sgw-a11y-so\">@@r_fonte_diminuir@@</span></button><span class=\"sgw-a11y-fonte-info\">@@d_fonte_status@@</span><button type=\"button\" class=\"sgw-a11y-passo\" data-sgw-a11y=\"fonte+\" aria-disabled=\"false\"><span aria-hidden=\"true\">A+</span><span class=\"sgw-a11y-so\">@@r_fonte_aumentar@@</span></button></div>[[/fonte]][[ouvir]]<div class=\"sgw-a11y-ouvir\" role=\"group\" aria-labelledby=\"sgw-a11y-ouvir-titulo\" hidden><p class=\"sgw-a11y-ouvir-titulo\" id=\"sgw-a11y-ouvir-titulo\">@@r_ouvir_titulo@@</p><div class=\"sgw-a11y-ouvir-linha\"><button type=\"button\" class=\"sgw-a11y-passo\" data-sgw-a11y-ouvir=\"ler\">@@r_ouvir_ler@@</button><button type=\"button\" class=\"sgw-a11y-passo\" data-sgw-a11y-ouvir=\"menos\" aria-disabled=\"false\"><span aria-hidden=\"true\">&minus;</span><span class=\"sgw-a11y-so\">@@r_ouvir_devagar@@</span></button><span class=\"sgw-a11y-ouvir-vel\">@@d_ouvir_velocidade@@</span><button type=\"button\" class=\"sgw-a11y-passo\" data-sgw-a11y-ouvir=\"mais\" aria-disabled=\"false\"><span aria-hidden=\"true\">+</span><span class=\"sgw-a11y-so\">@@r_ouvir_rapido@@</span></button></div></div>[[/ouvir]]<div class=\"sgw-a11y-grade\">@@g@@</div>[[estrutura]]<div class=\"sgw-a11y-estr\"><button type=\"button\" class=\"sgw-a11y-estr-botao\" data-sgw-a11y-estrutura aria-expanded=\"false\" aria-controls=\"sgw-a11y-estrutura\">@@r_estrutura@@</button><div class=\"sgw-a11y-estr-caixa\" id=\"sgw-a11y-estrutura\" hidden></div></div>[[/estrutura]]<button type=\"button\" class=\"sgw-a11y-redefinir\" data-sgw-a11y=\"redefinir\">@@r_redefinir@@</button><p class=\"sgw-a11y-aviso\">@@r_aviso@@</p>[[atalho]]<p class=\"sgw-a11y-aviso sgw-a11y-atalho\">@@d_atalho@@</p>[[/atalho]]<p class=\"sgw-a11y-so sgw-a11y-status\" role=\"status\" aria-live=\"polite\"></p></div>[[guia]]<div class=\"sgw-a11y-guia\" aria-hidden=\"true\" hidden></div>[[/guia]][[mascara]]<div class=\"sgw-a11y-mascara-faixa\" aria-hidden=\"true\"></div>[[/mascara]]</div>","ops":{"fonte":"","contraste":"<button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y=\"contraste-claro\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_contraste_claro@@</span></button><button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y=\"contraste-escuro\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_contraste_escuro@@</span></button>","cinza":"<button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y=\"cinza\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_cinza@@</span></button>","links":"<button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y=\"links\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_links@@</span></button>","legivel":"<button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y=\"legivel\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_legivel@@</span></button>","espaco":"<button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y=\"espaco\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_espaco@@</span></button>","animacoes":"<button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y=\"animacoes\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_animacoes@@</span></button>","cursor":"<button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y=\"cursor\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_cursor@@</span></button>","guia":"<button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y=\"guia\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_guia@@</span></button>","ouvir":"","libras":"<button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y=\"libras\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_libras@@</span></button>","mascara":"<button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y=\"mascara\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_mascara@@</span></button>","foco":"<button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y=\"foco\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_foco@@</span></button>","estrutura":"","perfis":""},"perfilBotao":{"baixa-visao":"<button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y-perfil=\"baixa-visao\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_perfil_baixa_visao@@</span></button>","dislexia":"<button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y-perfil=\"dislexia\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_perfil_dislexia@@</span></button>","concentracao":"<button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y-perfil=\"concentracao\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_perfil_concentracao@@</span></button>","movimento":"<button type=\"button\" class=\"sgw-a11y-op\" data-sgw-a11y-perfil=\"movimento\" aria-pressed=\"false\"><span class=\"sgw-a11y-op-txt\">@@r_perfil_movimento@@</span></button>"},"config":{"chave":"sgw-a11y","passos":5,"passoPct":10,"recursos":"@@recursos@@","fonteStatus":"@@r_fonte_status@@","redefinido":"@@r_redefinido@@","botaoFlutuante":"@@botaoFlutuante@@","ouvir":{"idioma":"@@idioma@@","seletor":"@@ouvir_seletor@@","velocidades":[0.5,0.75,1,1.25,1.5,2],"ler":"@@r_ouvir_ler@@","pausar":"@@r_ouvir_pausar@@","continuar":"@@r_ouvir_continuar@@","velocidade":"@@r_ouvir_velocidade@@","lendo":"@@r_ouvir_lendo@@","pausado":"@@r_ouvir_pausado@@","fim":"@@r_ouvir_fim@@","vazio":"@@r_ouvir_vazio@@"},"libras":{"nonce":"@@nonce@@"},"estrutura":{"regioes":"@@r_estrutura_regioes@@","titulos":"@@r_estrutura_titulos@@","vazio":"@@r_estrutura_vazio@@","banner":"@@r_estrutura_cabecalho@@","navigation":"@@r_estrutura_navegacao@@","main":"@@r_estrutura_principal@@","contentinfo":"@@r_estrutura_rodape@@","complementary":"@@r_estrutura_complementar@@"},"perfis":"@@perfis@@"},"configPorRecurso":{"ouvir":"ouvir","libras":"libras","estrutura":"estrutura","perfis":"perfis"},"derivados":{"fonte_status":["{n}","100",false],"ouvir_velocidade":["{v}","1",true],"atalho":["{atalho}","Alt+Shift+A",true]},"rotulos":{"botao":"Acessibilidade","titulo":"Recursos de acessibilidade","fechar":"Fechar painel de acessibilidade","fonte_titulo":"Tamanho do texto","fonte_aumentar":"Aumentar fonte","fonte_diminuir":"Diminuir fonte","fonte_status":"Tamanho do texto: {n}%","contraste_claro":"Alto contraste claro","contraste_escuro":"Contraste escuro","cinza":"Escala de cinza","links":"Destacar links","legivel":"Fonte leg\u00edvel","espaco":"Espa\u00e7amento do texto","animacoes":"Pausar anima\u00e7\u00f5es","cursor":"Cursor grande","guia":"Guia de leitura","redefinir":"Redefinir tudo","redefinido":"Prefer\u00eancias redefinidas.","aviso":"Uma ajuda para a leitura; as prefer\u00eancias ficam salvas s\u00f3 neste navegador.","ouvir_titulo":"Ouvir a p\u00e1gina","ouvir_ler":"Ouvir","ouvir_pausar":"Pausar","ouvir_continuar":"Continuar","ouvir_devagar":"Mais devagar","ouvir_rapido":"Mais r\u00e1pido","ouvir_velocidade":"Velocidade: {v}x","ouvir_lendo":"Lendo a p\u00e1gina.","ouvir_pausado":"Leitura pausada.","ouvir_fim":"Leitura encerrada.","ouvir_vazio":"N\u00e3o h\u00e1 texto para ler.","libras":"Libras (VLibras)","mascara":"M\u00e1scara de leitura","foco":"Foco refor\u00e7ado","estrutura":"Estrutura da p\u00e1gina","estrutura_regioes":"Regi\u00f5es da p\u00e1gina","estrutura_titulos":"T\u00edtulos","estrutura_vazio":"Nada encontrado nesta p\u00e1gina.","estrutura_cabecalho":"Cabe\u00e7alho","estrutura_navegacao":"Navega\u00e7\u00e3o","estrutura_principal":"Conte\u00fado principal","estrutura_rodape":"Rodap\u00e9","estrutura_complementar":"Conte\u00fado complementar","atalho":"Atalho do teclado: {atalho}","perfis_titulo":"Perfis prontos","perfil_baixa_visao":"Baixa vis\u00e3o","perfil_dislexia":"Dislexia","perfil_concentracao":"Concentra\u00e7\u00e3o","perfil_movimento":"Sens\u00edvel a movimento"},"posicoes":["inferior-esquerda","inferior-direita","superior-esquerda","superior-direita"],"conhecidos":["fonte","contraste","cinza","links","legivel","espaco","animacoes","cursor","guia","ouvir","libras","mascara","foco","estrutura","perfis"],"padrao":["fonte","contraste","cinza","links","legivel","espaco","animacoes","cursor","guia","mascara","foco","estrutura","perfis"],"perfis":[["baixa-visao",["fonte","contraste","links","cursor","foco"]],["dislexia",["legivel","espaco","guia"]],["concentracao",["mascara","animacoes"]],["movimento",["animacoes"]]],"icone":32,"tamanhoPadrao":56,"posicaoPadrao":"inferior-esquerda","corPadrao":"#0b5cad","deslocamentoPadrao":16,"idiomaPadrao":"pt-BR"};
function tem(l,x){for(var i=0;i<l.length;i++){if(l[i]===x){return true;}}return false;}
function proprio(o,k){return Object.prototype.hasOwnProperty.call(o,k);}
function lista(v){return Object.prototype.toString.call(v)==='[object Array]';}
/* htmlspecialchars(ENT_QUOTES) do PHP (sgw_e). */
function esc(v){return String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');}
/* trim() do PHP: so espaco, \t, \n, \r, \0 e \x0B. */
function aparar(s){return s.replace(/^[ \t\n\r\0\x0B]+|[ \t\n\r\0\x0B]+$/g,'');}
/* Tamanho em bytes UTF-8 (o strlen do PHP); surrogate solto conta 3 e vira U+FFFD (o ENT_SUBSTITUTE). */
function utf8(s){var n=0,o='',i,c,d;for(i=0;i<s.length;i++){c=s.charCodeAt(i);
if(c<0x80){n+=1;o+=s.charAt(i);}else if(c<0x800){n+=2;o+=s.charAt(i);}
else if(c>=0xD800&&c<=0xDBFF&&i+1<s.length&&(d=s.charCodeAt(i+1))>=0xDC00&&d<=0xDFFF){n+=4;o+=s.charAt(i)+s.charAt(i+1);i++;}
else if(c>=0xD800&&c<=0xDFFF){n+=3;o+='\uFFFD';}else{n+=3;o+=s.charAt(i);}}return {bytes:n,texto:o};}
/* sgw__a11y_texto(): texto nao vazio de ate 200 bytes. */
function texto(v){if(typeof v!=='string'){return null;}var u=utf8(v);if(u.bytes>200||aparar(v)===''){return null;}return u.texto;}
function rotulos(o){var r={},k,t;for(k in T.rotulos){if(proprio(T.rotulos,k)){r[k]=T.rotulos[k];}}
if(o.rotulos&&typeof o.rotulos==='object'&&!lista(o.rotulos)){for(k in o.rotulos){if(proprio(o.rotulos,k)&&proprio(r,k)){t=texto(o.rotulos[k]);if(t!==null){r[k]=t;}}}}
return r;}
function posicao(o){return typeof o.posicao==='string'&&tem(T.posicoes,o.posicao)?o.posicao:T.posicaoPadrao;}
function cor(o){var c=o.cor,m;if(typeof c!=='string'){return T.corPadrao;}
m=/^#([0-9a-fA-F]{3})$/.exec(c);if(m){c=m[1].toLowerCase();return '#'+c.charAt(0)+c.charAt(0)+c.charAt(1)+c.charAt(1)+c.charAt(2)+c.charAt(2);}
return /^#[0-9a-fA-F]{6}$/.test(c)?c.toLowerCase():T.corPadrao;}
/* sgw__a11y_luminancia() e sgw__a11y_cor_do_texto(). */
function corDoTexto(hex){var l=0,p=[0.2126,0.7152,0.0722],i,c;
for(i=0;i<3;i++){c=parseInt(hex.substr(1+2*i,2),16)/255;c=c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);l+=p[i]*c;}
return (1.05/(l+0.05))>=((l+0.05)/0.05)?'#fff':'#000';}
/* sgw__bf_inteiro_em(): inteiro, ou texto so de digitos (no maximo tantos quantos tem o maximo). */
function inteiro(v,min,max,padrao){if(typeof v==='string'&&new RegExp('^[0-9]{1,'+String(max).length+'}$').test(v)){v=parseInt(v,10);}
return typeof v==='number'&&v%1===0&&v>=min&&v<=max?v:padrao;}
function deslocamento(o){var v=o.deslocamento;if(v===undefined||v===null){return T.deslocamentoPadrao;}
if(typeof v==='string'&&/^[0-9]{1,3}$/.test(v)){v=parseInt(v,10);}
return typeof v==='number'&&v%1===0&&v>=0&&v<=200?v:T.deslocamentoPadrao;}
function idioma(o){return typeof o.idioma==='string'&&/^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8}){0,3}$/.test(o.idioma)?o.idioma:T.idiomaPadrao;}
function recursos(o){var s=[],i;if(!lista(o.recursos)){return T.padrao.slice();}
for(i=0;i<T.conhecidos.length;i++){if(tem(o.recursos,T.conhecidos[i])){s.push(T.conhecidos[i]);}}
return s.length?s:T.padrao.slice();}
function perfisDoSite(rec){var s=[],i,j,l;if(!tem(rec,'perfis')){return s;}
for(i=0;i<T.perfis.length;i++){l=[];for(j=0;j<T.perfis[i][1].length;j++){if(tem(rec,T.perfis[i][1][j])){l.push(T.perfis[i][1][j]);}}if(l.length){s.push({id:T.perfis[i][0],recursos:l});}}
return s;}
function derivado(r,k){var d=T.derivados[k];return r.indexOf(d[0])>=0?r.split(d[0]).join(d[1]):(d[2]?r+' '+d[1]:r);}
/* Troca @@nome@@ pelo valor (uma passada: o valor inserido nunca e relido como marcador). */
function preencher(s,v){return s.replace(/@@([A-Za-z_]+)@@/g,function(t,n){return proprio(v,n)?String(v[n]):t;});}
function preencherCfg(c,v){var s,k,m;
if(typeof c==='string'){m=/^@@([A-Za-z_]+)@@$/.exec(c);return m&&proprio(v,m[1])?v[m[1]]:c;}
if(lista(c)){s=[];for(k=0;k<c.length;k++){s.push(preencherCfg(c[k],v));}return s;}
if(c&&typeof c==='object'){s={};for(k in c){if(proprio(c,k)){s[k]=preencherCfg(c[k],v);}}return s;}
return c;}
/* As opcoes (com os nomes do PHP) -> {css, html, config, x}: o que sgw_acessibilidade() devolveria. */
function saida(o){
o=o||{};
var rot=rotulos(o),rec=recursos(o),pos=posicao(o),cr=cor(o),dl=deslocamento(o),el=inteiro(o.elevar,0,400,0),sa=o.safe_area===true;
var t=inteiro(o.tamanho,44,96,T.tamanhoPadrao),bf=o.botao_flutuante!==false,at=o.atalho!==false,idi=idioma(o),perf=perfisDoSite(rec);
var x={},i,k,extra='',hv={},cv={},ops='',pb='',cfg,html,sel;
for(i=0;i<T.ordem.length;i++){k=T.ordem[i];x[k]=k==='perfis'?perf.length>0:(k==='atalho'?at:tem(rec,k));if(x[k]){extra+=T.cssExtra[k];}}
var dp=dl+el+t+8;
var css=preencher(el>0||sa?T.css.com:T.css.sem,{V:pos.indexOf('inferior')===0?'bottom':'top',H:pos.indexOf('esquerda')>=0?'left':'right',
DL:dl,BV:dl+Math.max(0,el),DP:dp,DM:dp+16,T:t,I:Math.round(t*T.icone/T.tamanhoPadrao),COR:cr,CORTXT:corDoTexto(cr),EXTRA:extra});
for(k in rot){if(proprio(rot,k)){hv['r_'+k]=esc(rot[k]);cv['r_'+k]=rot[k];}}
for(k in T.derivados){if(proprio(T.derivados,k)){hv['d_'+k]=esc(derivado(rot[k],k));}}
sel=texto(o.rotulo);hv.r_botao=esc(sel===null?rot.botao:sel);hv.idioma=esc(idi);
for(i=0;i<rec.length;i++){ops+=T.ops[rec[i]];}
for(i=0;i<perf.length;i++){pb+=T.perfilBotao[perf[i].id];}
hv.g=preencher(ops,hv);hv.p=preencher(pb,hv);
html=T.html.replace(/\[\[([a-z]+)\]\]([\s\S]*?)\[\[\/\1\]\]/g,function(s,n,m){
var on=n==='perfis'?x.perfis:(n==='atalho'?at:(n==='oculto'?!bf:tem(rec,n)));return on?m:'';});
html=preencher(html,hv);
sel=texto(o.ouvir_seletor);
cv.recursos=rec;cv.botaoFlutuante=bf;cv.perfis=perf;cv.idioma=idi;cv.ouvir_seletor=sel===null?null:aparar(sel);
cv.nonce=typeof o.nonce==='string'?o.nonce:'';
cfg=preencherCfg(T.config,cv);
for(k in T.configPorRecurso){if(proprio(T.configPorRecurso,k)&&!x[k]){delete cfg[T.configPorRecurso[k]];}}
return {css:css,html:html,config:cfg,x:x};}
/* Os data-* do <script> -> as opcoes do PHP (contrato no README do kit). `ler(nome)` devolve o atributo ou null. */
function sim(v){return v!==null&&v!==undefined&&/^(true|sim|1)$/i.test(aparar(String(v)));}
function nao(v){return v!==null&&v!==undefined&&/^(false|nao|n\u00e3o|0)$/i.test(aparar(String(v)));}
function opcoes(ler,nonce){var o={},v,i,p,a=[['posicao','posicao'],['cor','cor'],['deslocamento','deslocamento'],['elevar','elevar'],
['tamanho','tamanho'],['idioma','idioma'],['rotulo','rotulo'],['ouvir-seletor','ouvir_seletor']];
for(i=0;i<a.length;i++){v=ler('data-'+a[i][0]);if(v!==null&&v!==undefined){o[a[i][1]]=String(v);}}
v=ler('data-recursos');if(v!==null&&v!==undefined){p=String(v).split(',');o.recursos=[];for(i=0;i<p.length;i++){o.recursos.push(aparar(p[i]));}}
v=ler('data-rotulos');if(v!==null&&v!==undefined){try{p=JSON.parse(String(v));}catch(e){p=null;}if(p&&typeof p==='object'&&!lista(p)){o.rotulos=p;}}
if(nao(ler('data-botao-flutuante'))){o.botao_flutuante=false;}
if(nao(ler('data-atalho'))){o.atalho=false;}
if(sim(ler('data-safe-area'))){o.safe_area=true;}
if(typeof nonce==='string'&&nonce!==''){o.nonce=nonce;}
return o;}
/* MIGRACAO do plugin WordPress v1.x (chave `botao-acessibilidade`), feita uma vez: contraste:true -> 'escuro', parado ->
   animacoes, fonte (indice de 90/100/115/130/150%) -> passos de 10% arredondados para cima (nunca diminui o texto),
   velocidade (mesma escala de 6) e os booleanos como estao. Le so o que entende; o painel ainda valida tudo na leitura. */
var ANTIGA='botao-acessibilidade',ANTIGOS_PCT=[90,100,115,130,150];
function migrarValor(txt){var s,n={},b=['cinza','links','legivel','espaco','cursor','guia','libras'],i,p;
try{s=JSON.parse(txt);}catch(e){return null;}
if(!s||typeof s!=='object'||lista(s)){return null;}
if(s.contraste===true){n.contraste='escuro';}
for(i=0;i<b.length;i++){if(s[b[i]]===true){n[b[i]]=true;}}
if(s.parado===true){n.animacoes=true;}
if(typeof s.fonte==='number'&&s.fonte%1===0&&s.fonte>=0&&s.fonte<ANTIGOS_PCT.length){p=Math.ceil((ANTIGOS_PCT[s.fonte]-100)/T.config.passoPct);if(p>0){n.fonte=Math.min(p,T.config.passos);}}
if(typeof s.velocidade==='number'&&s.velocidade%1===0&&s.velocidade>=0&&s.velocidade<T.config.ouvir.velocidades.length){n.velocidade=s.velocidade;}
return n;}
function migrar(){try{var ls=window.localStorage,a=ls.getItem(ANTIGA),n,k,cheio=false;if(a===null){return;}
if(ls.getItem(T.config.chave)===null){n=migrarValor(a);for(k in n){if(proprio(n,k)){cheio=true;}}if(cheio){ls.setItem(T.config.chave,JSON.stringify(n));}}
ls.removeItem(ANTIGA);}catch(e){}}
return {saida:saida,opcoes:opcoes,migrarValor:migrarValor,migrar:migrar,cor:cor,corDoTexto:corDoTexto,cfg:null,x:null};
})();
function sgwA11yPainel(){
(function(){try{
var C=SGWA11Y.cfg;
var D=document,R=D.documentElement,CH=C.chave,PASSOS=C.passos,PCT=C.passoPct;
var ATIVO={},i;for(i=0;i<C.recursos.length;i++){ATIVO[C.recursos[i]]=1;}
var mq=window.matchMedia?window.matchMedia('(prefers-reduced-motion: reduce)'):null;
var REDUZ=!!(mq&&mq.matches);
var BOOLS=['cinza','links','legivel','espaco','cursor','guia','mascara','foco'];
function padrao(){return {fonte:0,contraste:'',cinza:false,links:false,legivel:false,espaco:false,animacoes:null,cursor:false,guia:false,velocidade:(SGWA11Y.x.ouvir?2:void 0),libras:(SGWA11Y.x.libras?false:void 0),mascara:(SGWA11Y.x.mascara?false:void 0),foco:(SGWA11Y.x.foco?false:void 0)};}
function ler(){var p=padrao(),s=null,k;
try{var t=window.localStorage.getItem(CH);if(t){s=JSON.parse(t);}}catch(e){s=null;}
if(!s||typeof s!=='object'){return p;}
if(ATIVO.fonte&&typeof s.fonte==='number'&&s.fonte>=0&&s.fonte<=PASSOS&&s.fonte%1===0){p.fonte=s.fonte;}
if(ATIVO.contraste&&(s.contraste==='claro'||s.contraste==='escuro')){p.contraste=s.contraste;}
for(k=0;k<BOOLS.length;k++){if(ATIVO[BOOLS[k]]&&s[BOOLS[k]]===true){p[BOOLS[k]]=true;}}
if(ATIVO.animacoes&&typeof s.animacoes==='boolean'){p.animacoes=s.animacoes;}if(SGWA11Y.x.ouvir){
if(ATIVO.ouvir&&typeof s.velocidade==='number'&&s.velocidade>=0&&s.velocidade<=5&&s.velocidade%1===0){p.velocidade=s.velocidade;}}if(SGWA11Y.x.libras){
if(ATIVO.libras&&s.libras===true){p.libras=true;}}if(SGWA11Y.x.mascara){
if(p.mascara&&p.guia){p.mascara=false;}}
return p;}
var E=ler();
function gravar(){try{if(JSON.stringify(E)===JSON.stringify(padrao())){window.localStorage.removeItem(CH);}else{window.localStorage.setItem(CH,JSON.stringify(E));}}catch(e){}}
function cls(n,on){if(on){R.classList.add('sgw-a11y-'+n);}else{R.classList.remove('sgw-a11y-'+n);}}
function semAnim(){return E.animacoes===null?REDUZ:E.animacoes;}
function fator(){return (100+E.fonte*PCT)/100;}
/* ANTI-FLASH: classes e fator no <html> antes de montar qualquer coisa. */
function classes(){
cls('contraste-claro',E.contraste==='claro');cls('contraste-escuro',E.contraste==='escuro');
for(var k=0;k<BOOLS.length;k++){if(BOOLS[k]!=='guia'){cls(BOOLS[k],E[BOOLS[k]]);}}
cls('sem-anim',ATIVO.animacoes&&semAnim());
R.style.setProperty('--sgw-a11y-fator',String(fator()));
cls('fs',E.fonte>0);}
classes();
var raiz=D.getElementById('sgw-a11y');
if(!raiz){return;}
/* ESCALA DE FONTE: mede o tamanho natural, grava em custom property, o CSS multiplica pelo fator. */
var PULAR={SCRIPT:1,STYLE:1,NOSCRIPT:1,TEMPLATE:1,HEAD:1,META:1,LINK:1,BR:1};
function temTexto(el){for(var n=el.firstChild;n;n=n.nextSibling){if(n.nodeType===3&&/\S/.test(n.nodeValue)){return true;}}return false;}
function medir(lista){
if(!lista.length){return;}
var tinha=R.classList.contains('sgw-a11y-fs'),fs=[],lh=[],j,cs;
R.classList.remove('sgw-a11y-fs');
for(j=0;j<lista.length;j++){cs=window.getComputedStyle(lista[j]);fs[j]=parseFloat(cs.fontSize);lh[j]=parseFloat(cs.lineHeight);}
for(j=0;j<lista.length;j++){
if(fs[j]>0){lista[j].style.setProperty('--sgw-a11y-fs',fs[j]+'px');lista[j].setAttribute('data-sgw-a11y-fs','');}
if(lh[j]>0){lista[j].style.setProperty('--sgw-a11y-lh',lh[j]+'px');lista[j].setAttribute('data-sgw-a11y-lh','');}}
if(tinha){R.classList.add('sgw-a11y-fs');}}
function marcar(no){
if(!no||no.nodeType!==1||raiz.contains(no)||!D.documentElement.contains(no)){return;}
var todos=[no],q=no.querySelectorAll('*'),lista=[],j,el;
for(j=0;j<q.length;j++){todos.push(q[j]);}
for(j=0;j<todos.length;j++){el=todos[j];
if(el.hasAttribute('data-sgw-a11y-fs')||PULAR[el.tagName]||raiz.contains(el)||!temTexto(el)){continue;}
lista.push(el);}
medir(lista);}
function remedir(){var q=D.querySelectorAll('[data-sgw-a11y-fs]'),l=[],j;for(j=0;j<q.length;j++){l.push(q[j]);}medir(l);}
var pend=[],tm=0,mo=null;
function fluxo(){tm=0;var l=pend;pend=[];for(var j=0;j<l.length;j++){marcar(l[j]);}}
function observar(on){
if(!window.MutationObserver||!D.body){return;}
if(on&&!mo){mo=new MutationObserver(function(ms){for(var j=0;j<ms.length;j++){pend.push(ms[j].target);}if(!tm){tm=window.setTimeout(fluxo,120);}});mo.observe(D.body,{childList:true,subtree:true});}
if(!on&&mo){mo.disconnect();mo=null;pend=[];}}
var rt=0;
window.addEventListener('resize',function(){if(E.fonte>0){window.clearTimeout(rt);rt=window.setTimeout(remedir,250);}});
/* GUIA DE LEITURA */
var guia=raiz.querySelector('.sgw-a11y-guia'),gy=null,graf=0;
function guiaMover(y){gy=y;if(SGWA11Y.x.mascara){mascaraPos();}if(graf){return;}graf=window.requestAnimationFrame?window.requestAnimationFrame(function(){graf=0;if(guia&&gy!==null){guia.style.transform='translateY('+Math.max(0,gy-22)+'px)';}}):0;if(!graf&&guia){guia.style.transform='translateY('+Math.max(0,gy-22)+'px)';}}
D.addEventListener('mousemove',function(e){if(E.guia){guiaMover(e.clientY);}});
D.addEventListener('touchmove',function(e){if(E.guia&&e.touches&&e.touches[0]){guiaMover(e.touches[0].clientY);}});
D.addEventListener('focusin',function(e){if(E.guia&&e.target&&e.target.getBoundingClientRect&&!raiz.contains(e.target)){var r=e.target.getBoundingClientRect();guiaMover(r.top+r.height/2);}});
/* INTERFACE */
var btn=D.getElementById('sgw-a11y-botao'),painel=D.getElementById('sgw-a11y-painel'),info=raiz.querySelector('.sgw-a11y-fonte-info'),aberto=false;
function texto(){var pct=100+E.fonte*PCT;return C.fonteStatus.indexOf('{n}')>=0?C.fonteStatus.replace('{n}',String(pct)):C.fonteStatus+' '+pct+'%';}
function estado(acao){
if(acao==='contraste-claro'){return E.contraste==='claro';}
if(acao==='contraste-escuro'){return E.contraste==='escuro';}
if(acao==='animacoes'){return !!semAnim();}
return !!E[acao];}
function sincronizar(){
var bs=raiz.querySelectorAll('[data-sgw-a11y]'),j,a;
for(j=0;j<bs.length;j++){a=bs[j].getAttribute('data-sgw-a11y');
if(a==='fonte+'){bs[j].setAttribute('aria-disabled',E.fonte>=PASSOS?'true':'false');}
else if(a==='fonte-'){bs[j].setAttribute('aria-disabled',E.fonte<=0?'true':'false');}
else if(a!=='redefinir'){bs[j].setAttribute('aria-pressed',estado(a)?'true':'false');}}
if(info){info.textContent=texto();}
if(guia){guia.hidden=!E.guia;}if(SGWA11Y.x.ouvir){ouvirSinc();}if(SGWA11Y.x.mascara){if(E.mascara&&gy===null){guiaMover(window.innerHeight*0.4);}}if(SGWA11Y.x.perfis){perfisSinc();}}
/* VIDEOS: o painel pausa so os que estavam tocando, guarda quais pausou e os retoma ao desligar "Pausar animacoes". */
var VPAUSA=[];
function pausarVideo(v){try{if(!v.paused&&!v.ended){v.pause();if(VPAUSA.indexOf(v)<0){VPAUSA.push(v);}}}catch(e){}}
function pausarVideos(){var v,j,p;
if(!ATIVO.animacoes){return;}
if(!semAnim()){v=VPAUSA;VPAUSA=[];for(j=0;j<v.length;j++){try{if(R.contains(v[j])&&v[j].paused){p=v[j].play();if(p&&p.catch){p.catch(function(){});}}}catch(e){}}return;}
v=D.querySelectorAll('video');for(j=0;j<v.length;j++){pausarVideo(v[j]);}}
D.addEventListener('play',function(e){var t=e.target;if(t&&t.tagName==='VIDEO'&&ATIVO.animacoes&&E.animacoes===true){pausarVideo(t);}},true);
function aplicar(){
if(E.fonte>0){marcar(D.body);}
classes();observar(E.fonte>0);pausarVideos();sincronizar();gravar();
if(E.guia&&gy===null){guiaMover(window.innerHeight*0.4);}}
function agir(a){if(SGWA11Y.x.ouvir){
if(a==='redefinir'){ouvirParar();}}if(SGWA11Y.x.libras){
if(a==='libras'){librasAlternar();return;}
if(a==='redefinir'&&E.libras&&librasCarregado()){E=padrao();aplicar();window.location.reload();return;}}if(SGWA11Y.x.mascara){
if(a==='guia'&&!E.guia){E.mascara=false;}
if(a==='mascara'&&!E.mascara){E.guia=false;}}
if(a==='fonte+'){if(E.fonte<PASSOS){E.fonte++;}}
else if(a==='fonte-'){if(E.fonte>0){E.fonte--;}}
else if(a==='contraste-claro'){E.contraste=E.contraste==='claro'?'':'claro';}
else if(a==='contraste-escuro'){E.contraste=E.contraste==='escuro'?'':'escuro';}
else if(a==='animacoes'){E.animacoes=!semAnim();}
else if(a==='redefinir'){E=padrao();aplicar();var st=raiz.querySelector('.sgw-a11y-status');if(st){st.textContent=C.redefinido;}return;}
else if(BOOLS.indexOf(a)>=0){E[a]=!E[a];}
else{return;}
var st2=raiz.querySelector('.sgw-a11y-status');if(st2){st2.textContent='';}
aplicar();}
function ovelo(){return VELS[E.velocidade]||1;}
function onum(v){try{return v.toLocaleString(OV.idioma);}catch(e){return String(v);}}
function ostatus(t){var st=raiz.querySelector('.sgw-a11y-status');if(st){st.textContent=t||'';}}
function ouvirSinc(){
if(oler){oler.textContent=!opartes.length?OV.ler:(opausado?OV.continuar:OV.pausar);}
if(ovel){ovel.textContent=OV.velocidade.indexOf('{v}')>=0?OV.velocidade.replace('{v}',onum(ovelo())):OV.velocidade+' '+onum(ovelo());}
var m=raiz.querySelector('[data-sgw-a11y-ouvir="menos"]'),p=raiz.querySelector('[data-sgw-a11y-ouvir="mais"]');
if(m){m.setAttribute('aria-disabled',E.velocidade<=0?'true':'false');}
if(p){p.setAttribute('aria-disabled',E.velocidade>=VELS.length-1?'true':'false');}}
function ocoletar(no,out){
for(var n=no.firstChild;n;n=n.nextSibling){
if(n.nodeType===3){out.push(n.nodeValue);continue;}
if(n.nodeType!==1||OPULAR[n.tagName]||n===raiz||n.hidden||n.getAttribute('aria-hidden')==='true'){continue;}
if(n.getClientRects&&!n.getClientRects().length&&window.getComputedStyle&&window.getComputedStyle(n).display!=='contents'){continue;}
var b=OBLOCO.test(n.tagName);if(b){out.push('\n');}ocoletar(n,out);if(b){out.push('\n');}}}
function oarea(){var a=null;
if(OV.seletor){try{a=D.querySelector(OV.seletor);}catch(e){a=null;}}
if(!a){a=D.querySelector('main')||D.querySelector('[role="main"]')||D.querySelector('article');}
return a&&!raiz.contains(a)?a:D.body;}
function otexto(){var s='',out=[];
try{var sel=window.getSelection?window.getSelection():null;if(sel&&sel.rangeCount&&!raiz.contains(sel.anchorNode)){s=String(sel);}}catch(e){s='';}
if(/\S/.test(s)){return s;}
ocoletar(oarea(),out);return out.join('');}
function ovoz(){if(!SS.getVoices){return null;}
var v=SS.getVoices()||[],l=String(OV.idioma||'').toLowerCase().replace('_','-'),b=l.split('-')[0],x=null,j,vl;
for(j=0;j<v.length;j++){vl=String(v[j].lang||'').toLowerCase().replace('_','-');if(vl===l){return v[j];}if(!x&&vl.split('-')[0]===b){x=v[j];}}
return x;}
function ofrase(){
if(oatual>=opartes.length){opartes=[];oatual=0;opausado=false;ouvirSinc();ostatus(OV.fim);return;}
var s=osessao,feito=false,u=new window.SpeechSynthesisUtterance(opartes[oatual]),vz=ovoz();
u.lang=OV.idioma;if(vz){u.voice=vz;}u.rate=ovelo();
u.onend=u.onerror=function(){if(feito||s!==osessao){return;}feito=true;oatual++;ofrase();};
SS.speak(u);}
function orecomecar(){osessao++;SS.cancel();ofrase();}
function ouvirParar(){if(!SS){return;}osessao++;opartes=[];oatual=0;opausado=false;omudou=false;try{SS.resume();SS.cancel();}catch(e){}ouvirSinc();}
function ouvirLer(){
if(!SS){return;}
if(opartes.length&&!opausado){SS.pause();opausado=true;ouvirSinc();ostatus(OV.pausado);return;}
if(opartes.length&&opausado){SS.resume();opausado=false;ouvirSinc();ostatus(OV.lendo);if(omudou){omudou=false;orecomecar();}return;}
var m=otexto().match(/[^.!?;\n]+[.!?;]*/g)||[],p=[],j,f;
for(j=0;j<m.length;j++){f=m[j].replace(/\s+/g,' ').replace(/^\s+|\s+$/g,'');if(/[^\s.!?;]/.test(f)){p.push(f);}}
if(!p.length){ostatus(OV.vazio);return;}
opartes=p;oatual=0;opausado=false;omudou=false;orecomecar();ouvirSinc();ostatus(OV.lendo);}
function ouvirVel(d){var n=E.velocidade+d;if(n<0||n>=VELS.length){return;}
E.velocidade=n;aplicar();ostatus(ovel?ovel.textContent:'');
if(opartes.length){if(opausado){omudou=true;}else{orecomecar();}}}
if(SGWA11Y.x.ouvir){
/* OUVIR: leitura em voz alta pelo speechSynthesis do navegador, uma frase por vez. */
var OV=C.ouvir||{},VELS=OV.velocidades||[1],SS=window.speechSynthesis||null,ogrupo=raiz.querySelector('.sgw-a11y-ouvir'),oler=raiz.querySelector('[data-sgw-a11y-ouvir="ler"]'),ovel=raiz.querySelector('.sgw-a11y-ouvir-vel');
var opartes=[],oatual=0,osessao=0,opausado=false,omudou=false;
if(!window.SpeechSynthesisUtterance){SS=null;}
if(ogrupo&&SS){ogrupo.hidden=false;}
var OPULAR={SCRIPT:1,STYLE:1,NOSCRIPT:1,NAV:1,TEMPLATE:1,IFRAME:1,OBJECT:1,svg:1,SVG:1};
var OBLOCO=/^(ADDRESS|ARTICLE|ASIDE|BLOCKQUOTE|BR|BUTTON|DD|DIV|DL|DT|FIELDSET|FIGCAPTION|FIGURE|FOOTER|FORM|H[1-6]|HEADER|HR|LABEL|LI|MAIN|OL|P|PRE|SECTION|TABLE|TD|TH|TR|UL)$/;













raiz.addEventListener('click',function(e){
for(var el=e.target;el&&el!==raiz;el=el.parentNode){var a=el.getAttribute?el.getAttribute('data-sgw-a11y-ouvir'):null;
if(a){if(a==='ler'){ouvirLer();}else if(a==='menos'){ouvirVel(-1);}else if(a==='mais'){ouvirVel(1);}return;}}});
window.addEventListener('pagehide',function(){if(SS){osessao++;try{SS.cancel();}catch(e){}}});
}
function librasCarregado(){return !!D.querySelector('[vw]');}
function librasAvatar(){var t=0,iv=window.setInterval(function(){
var w=D.getElementById('vlibras-access-wrapper'),b=(w&&w.shadowRoot&&w.shadowRoot.getElementById('vlibras-button'))||D.querySelector('[vw-access-button] > *');
if(b){window.clearInterval(iv);b.click();}else if(++t>60){window.clearInterval(iv);}},250);}
function librasCarregar(abrirJa){
if(abrirJa){librasAvatar();}
if(librasCarregado()||!D.body){return;}
var cx=D.createElement('div'),ab=D.createElement('div'),pw=D.createElement('div'),tp=D.createElement('div'),s=D.createElement('script');
cx.setAttribute('vw','');cx.className='enabled';ab.setAttribute('vw-access-button','');ab.className='active';
pw.setAttribute('vw-plugin-wrapper','');tp.className='vw-plugin-top-wrapper';pw.appendChild(tp);cx.appendChild(ab);cx.appendChild(pw);D.body.appendChild(cx);
s.src=LURL+'/vlibras-plugin.js';if(LB.nonce){s.setAttribute('nonce',LB.nonce);}
s.onload=function(){try{if(window.VLibras&&window.VLibras.Widget){new window.VLibras.Widget(LURL);}}catch(e){}};
D.body.appendChild(s);}
function librasAlternar(){E.libras=!E.libras;aplicar();
if(E.libras){fechar(true);librasCarregar(true);}else if(librasCarregado()){window.location.reload();}}
if(SGWA11Y.x.libras){
/* LIBRAS: widget VLibras do governo federal, pedido so quando o visitante liga. */
var LB=C.libras||{},LURL='https://vlibras.gov.br/app';




if(E.libras){librasCarregar(false);}
}
function mascaraPos(){if(masc&&gy!==null){masc.style.transform='translateY('+Math.round(gy-48)+'px)';}}
if(SGWA11Y.x.mascara){
/* MASCARA DE LEITURA: escurece a tela, menos a faixa que segue ponteiro, toque e foco (o movimento da guia). */
var masc=raiz.querySelector('.sgw-a11y-mascara-faixa');

D.addEventListener('mousemove',function(e){if(E.mascara){guiaMover(e.clientY);}});
D.addEventListener('touchmove',function(e){if(E.mascara&&e.touches&&e.touches[0]){guiaMover(e.touches[0].clientY);}});
D.addEventListener('focusin',function(e){if(E.mascara&&e.target&&e.target.getBoundingClientRect&&!raiz.contains(e.target)){var r=e.target.getBoundingClientRect();guiaMover(r.top+r.height/2);}});
}
function elimpo(t){return String(t||'').replace(/\s+/g,' ').replace(/^\s+|\s+$/g,'');}
function evisivel(el){if(el.hidden||!el.getClientRects||!el.getClientRects().length){return false;}var cs=window.getComputedStyle?window.getComputedStyle(el):null;return !cs||(cs.visibility!=='hidden'&&cs.visibility!=='collapse');}
function epapel(el){var r=el.getAttribute('role'),t=el.tagName,p;
if(r!==null){r=elimpo(r).split(' ')[0];return Object.prototype.hasOwnProperty.call(EPAPEIS,r)?r:'';}
if(t==='NAV'){return 'navigation';}if(t==='MAIN'){return 'main';}if(t==='ASIDE'){return 'complementary';}
if(t==='HEADER'||t==='FOOTER'){for(p=el.parentNode;p&&p.nodeType===1&&p!==D.body;p=p.parentNode){if(/^(ARTICLE|ASIDE|MAIN|NAV|SECTION)$/.test(p.tagName)){return '';}}return t==='HEADER'?'banner':'contentinfo';}
return '';}
function enome(el){var n=elimpo(el.getAttribute('aria-label')),ids,j,r;
if(!n&&el.getAttribute('aria-labelledby')){ids=elimpo(el.getAttribute('aria-labelledby')).split(' ');for(j=0;j<ids.length;j++){r=D.getElementById(ids[j]);if(r){n+=' '+r.textContent;}}n=elimpo(n);}
return n;}
function egrupo(titulo,id){var t=D.createElement('p'),ul=D.createElement('ul');t.className='sgw-a11y-estr-tit';t.id=id;t.textContent=titulo||'';ul.className='sgw-a11y-estr-lista';ul.setAttribute('aria-labelledby',id);ecaixa.appendChild(t);ecaixa.appendChild(ul);return ul;}
function eitem(ul,txt,el,nivel){var li=D.createElement('li'),b=D.createElement('button'),s;b.type='button';b.className='sgw-a11y-estr-item';b.setAttribute('data-sgw-a11y-ir',String(ealvos.length));
if(nivel){s=D.createElement('span');s.className='sgw-a11y-estr-nivel';s.textContent='H'+nivel;b.appendChild(s);b.style.paddingLeft=(10+(nivel-1)*12)+'px';}
b.appendChild(D.createTextNode(txt));ealvos.push(el);li.appendChild(b);ul.appendChild(li);}
function evazio(ul){if(!ul.firstChild){var li=D.createElement('li');li.className='sgw-a11y-estr-vazio';li.textContent=ES.vazio||'';ul.appendChild(li);}}
function emontar(){
var q=D.querySelectorAll('header,nav,main,footer,aside,[role]'),hs=D.querySelectorAll('h1,h2,h3,h4,h5,h6'),ul,j,el,p,n,t;
estruturaLimpar();
ul=egrupo(ES.regioes,'sgw-a11y-estr-regioes');
for(j=0;j<q.length;j++){el=q[j];if(raiz.contains(el)){continue;}p=epapel(el);if(!p||!evisivel(el)){continue;}n=enome(el);eitem(ul,n?ES[p]+': '+n:ES[p],el,0);}
evazio(ul);
ul=egrupo(ES.titulos,'sgw-a11y-estr-titulos');
for(j=0;j<hs.length;j++){el=hs[j];if(raiz.contains(el)||!evisivel(el)){continue;}t=elimpo(el.textContent);if(t){eitem(ul,t,el,+el.tagName.charAt(1));}}
evazio(ul);}
function estruturaLimpar(){ealvos=[];if(ecaixa){while(ecaixa.firstChild){ecaixa.removeChild(ecaixa.firstChild);}}}
function estruturaRecolher(){if(!ebtn||!ecaixa){return;}ebtn.setAttribute('aria-expanded','false');ecaixa.hidden=true;estruturaLimpar();}
function estruturaAlternar(){if(!ebtn||!ecaixa){return;}
if(ebtn.getAttribute('aria-expanded')==='true'){estruturaRecolher();return;}emontar();ecaixa.hidden=false;ebtn.setAttribute('aria-expanded','true');}
function estruturaIr(n){
var el=ealvos[n],pos=false,sair;if(!el||!R.contains(el)){return;}
fechar(false);
if(!el.hasAttribute('tabindex')){el.setAttribute('tabindex','-1');pos=true;sair=function(){el.removeEventListener('blur',sair);if(el.getAttribute('tabindex')==='-1'){el.removeAttribute('tabindex');}};el.addEventListener('blur',sair);}
try{el.scrollIntoView({block:'start'});}catch(e){el.scrollIntoView(true);}
try{el.focus({preventScroll:true});}catch(e){el.focus();}
if(pos&&D.activeElement!==el){el.removeEventListener('blur',sair);el.removeAttribute('tabindex');}}
if(SGWA11Y.x.estrutura){
/* ESTRUTURA DA PAGINA: regioes e titulos, montados so ao expandir; escolher um item leva o foco ate ele. */
var ES=C.estrutura||{},ebtn=raiz.querySelector('[data-sgw-a11y-estrutura]'),ecaixa=D.getElementById('sgw-a11y-estrutura'),ealvos=[];
var EPAPEIS={banner:1,navigation:1,main:1,contentinfo:1,complementary:1};












raiz.addEventListener('click',function(e){
for(var el=e.target;el&&el!==raiz;el=el.parentNode){if(!el.getAttribute){continue;}
if(el.getAttribute('data-sgw-a11y-estrutura')!==null){estruturaAlternar();return;}
var n=el.getAttribute('data-sgw-a11y-ir');if(n!==null){estruturaIr(+n);return;}}});
}
function perfilAchar(id){var l=C.perfis||[];for(var j=0;j<l.length;j++){if(l[j].id===id){return l[j];}}return null;}
function perfilTem(r){
if(r==='fonte'){return E.fonte>=2;}
if(r==='contraste'){return E.contraste==='escuro';}
if(r==='animacoes'){return E.animacoes===true;}
return E[r]===true;}
function perfilLigado(p){var j,n=0;for(j=0;j<p.recursos.length;j++){if(ATIVO[p.recursos[j]]){n++;if(!perfilTem(p.recursos[j])){return false;}}}return n>0;}
function perfilPor(r,on){
if(r==='fonte'){E.fonte=on?Math.max(E.fonte,2):0;}
else if(r==='contraste'){E.contraste=on?'escuro':'';}
else if(r==='animacoes'){E.animacoes=on?true:null;}
else if(BOOLS.indexOf(r)>=0){E[r]=on;if(on&&r==='guia'&&ATIVO.mascara){E.mascara=false;}if(on&&r==='mascara'){E.guia=false;}}}
function perfilAlternar(id){var p=perfilAchar(id),on,j;if(!p){return;}
on=!perfilLigado(p);
for(j=0;j<p.recursos.length;j++){if(ATIVO[p.recursos[j]]){perfilPor(p.recursos[j],on);}}
var st=raiz.querySelector('.sgw-a11y-status');if(st){st.textContent='';}
aplicar();}
function perfisSinc(){var bs=raiz.querySelectorAll('[data-sgw-a11y-perfil]'),j,p;
for(j=0;j<bs.length;j++){p=perfilAchar(bs[j].getAttribute('data-sgw-a11y-perfil'));bs[j].setAttribute('aria-pressed',p&&perfilLigado(p)?'true':'false');}}
if(SGWA11Y.x.perfis){
/* PERFIS: atalhos que ligam preferencias existentes; o estado pressionado e derivado delas, nada proprio e guardado. */






raiz.addEventListener('click',function(e){
for(var el=e.target;el&&el!==raiz;el=el.parentNode){var id=el.getAttribute?el.getAttribute('data-sgw-a11y-perfil'):null;if(id!==null){perfilAlternar(id);return;}}});
}
function aeditavel(el){if(!el||el.nodeType!==1){return false;}if(el.isContentEditable){return true;}var t=el.tagName;
if(t==='TEXTAREA'||t==='SELECT'){return true;}
return t==='INPUT'&&!ANAOTEXTO[String(el.type||'').toLowerCase()];}
if(SGWA11Y.x.atalho){
/* ATALHO: Alt+Shift+A alterna o painel de qualquer ponto da pagina, menos de dentro de um campo editavel. O botao so
   anuncia o atalho (aria-keyshortcuts) quando este script roda: sem JS nao ha atalho a anunciar. */
btn.setAttribute('aria-keyshortcuts','Alt+Shift+A');
var ANAOTEXTO={button:1,checkbox:1,radio:1,range:1,submit:1,reset:1,image:1,file:1,color:1,hidden:1};

D.addEventListener('keydown',function(e){
if(!e.altKey||!e.shiftKey||e.ctrlKey||e.metaKey||e.defaultPrevented||e.repeat){return;}
if(e.code!=='KeyA'&&e.key!=='a'&&e.key!=='A'&&e.keyCode!==65){return;}
if(aeditavel(e.composedPath&&e.composedPath()[0]||e.target)){return;}
e.preventDefault();alternar();});
}
/* ABRIR/FECHAR: o botao flutuante e qualquer [data-sgw-a11y-abrir] (delegado no document) alternam o painel. */
var origem=null,clicando=null;
function gatilho(no){for(var el=no;el&&el!==D;el=el.parentNode){if(el.nodeType===1&&el.hasAttribute&&el.hasAttribute('data-sgw-a11y-abrir')&&!raiz.contains(el)){return el;}}return null;}
function preparar(el){
if(!el.hasAttribute('aria-controls')){el.setAttribute('aria-controls','sgw-a11y-painel');}
if(!el.hasAttribute('aria-haspopup')){el.setAttribute('aria-haspopup','dialog');}
if(el.tagName==='A'&&!el.hasAttribute('role')){el.setAttribute('role','button');}
el.setAttribute('aria-expanded',aberto?'true':'false');}
/* Visivel para quem enxerga: sem [hidden], com caixa de layout > 0 (cobre display:none no proprio elemento e nos
   ancestrais) e sem visibility:hidden/collapse. Rolagem e opacity nao contam; inert e aria-hidden tambem nao. */
function visivel(el){
if(el.hidden||!el.getClientRects){return false;}
var rs=el.getClientRects(),j,ok=false;
for(j=0;j<rs.length;j++){if(rs[j].width>0&&rs[j].height>0){ok=true;break;}}
if(!ok){return false;}
var cs=window.getComputedStyle?window.getComputedStyle(el):null,v=cs?cs.visibility:'';
return v!=='hidden'&&v!=='collapse';}
function estadoAbrir(){
var g=D.querySelectorAll('[data-sgw-a11y-abrir]'),j;
/* Botao escondido (pelo site ou pela pagina) FICA escondido: sem rede de seguranca, com ou sem gatilho. */
for(j=0;j<g.length;j++){if(!raiz.contains(g[j])){preparar(g[j]);}}
btn.setAttribute('aria-expanded',aberto?'true':'false');}
function botaoVisivel(){return btn.hidden?null:btn;}
function focoAtual(){var a=D.activeElement;return a&&a!==D.body&&a!==R&&!raiz.contains(a)?a:botaoVisivel();}
function abrir(de){if(aberto){return;}origem=de||focoAtual();aberto=true;painel.hidden=false;estadoAbrir();painel.focus();}
function fechar(voltar){
if(!aberto){return;}
aberto=false;painel.hidden=true;estadoAbrir();if(SGWA11Y.x.estrutura){estruturaRecolher();}
var f=origem;origem=null;
if(voltar){if(!f||!R.contains(f)||!visivel(f)){f=botaoVisivel();}if(f){f.focus();}}}
function alternar(de){if(aberto){fechar(true);}else{abrir(de);}}
window.sgwAcessibilidade={abrir:function(){abrir();},fechar:function(){fechar(true);},alternar:function(){alternar();}};
btn.addEventListener('click',function(){alternar(btn);});
raiz.addEventListener('click',function(e){
for(var el=e.target;el&&el!==raiz;el=el.parentNode){
if(el.getAttribute&&el.getAttribute('data-sgw-a11y-fechar')!==null){fechar(true);return;}
if(el.getAttribute&&el.getAttribute('data-sgw-a11y')){agir(el.getAttribute('data-sgw-a11y'));return;}}});
D.addEventListener('mousedown',function(e){clicando=gatilho(e.target);});
D.addEventListener('click',function(e){
var g=gatilho(e.target);clicando=null;
if(g){e.preventDefault();preparar(g);alternar(g);return;}
if(aberto&&!raiz.contains(e.target)){fechar(false);}});
D.addEventListener('keydown',function(e){
var k=e.key,t=e.target;
if(aberto&&(k==='Escape'||k==='Esc'||e.keyCode===27)){fechar(true);return;}
if(aberto&&(k==='Tab'||e.keyCode===9)&&t&&painel.contains(t)){
var bs=painel.querySelectorAll('button'),ult=bs[bs.length-1],pri=bs[0];
if((!e.shiftKey&&t===ult)||(e.shiftKey&&(t===painel||t===pri))){e.preventDefault();fechar(true);}
return;}
if(k==='Enter'||k===' '||k==='Spacebar'||e.keyCode===13||e.keyCode===32){
var g=gatilho(t);
if(!g||g.tagName==='BUTTON'||(g.tagName==='A'&&g.hasAttribute('href')&&(k==='Enter'||e.keyCode===13))){return;}
e.preventDefault();preparar(g);alternar(g);}});
D.addEventListener('focusin',function(e){if(aberto&&!raiz.contains(e.target)&&!(clicando&&clicando===gatilho(e.target))){fechar(false);}});
/* Gatilhos inseridos depois: um observer e um timer so (debounce 50 ms) preparam os que entram no documento. Mutacoes
   dentro da raiz do kit sao ignoradas. */
var mg=0;
function agendar(){if(!mg){mg=window.setTimeout(function(){mg=0;estadoAbrir();},50);}}
if(window.MutationObserver&&D.body){
var mob=new MutationObserver(function(ms){for(var j=0;j<ms.length;j++){if(!raiz.contains(ms[j].target)){agendar();return;}}});
mob.observe(D.body,{childList:true,subtree:true});}
estadoAbrir();
aplicar();
}catch(err){}})();
}
/* O proprio <script>: document.currentScript; sem ele (type="module", ou o arquivo carregado de outro jeito), o ULTIMO <script>
   cujo src termina no nome exato `acessibilidade.js` (com ?query ou #hash). Nenhum = sem data-* (os padroes). */
function sgwA11yScript(D){var l=D.getElementsByTagName('script'),i;
for(i=l.length-1;i>=0;i--){if(/(^|\/)acessibilidade\.js([?#]|$)/.test(l[i].getAttribute('src')||'')){return l[i];}}return null;}
function sgwA11yIniciar(){
var D=document,R=D.documentElement,S=D.currentScript||sgwA11yScript(D),nonce,r,st,obs=null,fora=false,marca=null,antes,depois,fa,fp;
/* Uma vez por pagina: o painel do kit (ou outra copia deste arquivo) ja esta ai. */
if(D.getElementById('sgw-a11y')||D.getElementById('sgw-a11y-estilo')){return;}
nonce=S?(S.nonce||S.getAttribute('nonce')||''):'';
r=SGWA11Y.saida(SGWA11Y.opcoes(function(n){return S?S.getAttribute(n):null;},nonce));
SGWA11Y.cfg=r.config;SGWA11Y.x=r.x;
SGWA11Y.migrar();
st=D.createElement('style');st.id='sgw-a11y-estilo';if(nonce){st.setAttribute('nonce',nonce);}st.appendChild(D.createTextNode(r.css));
function classes(){var l=[],i;for(i=0;i<R.classList.length;i++){l.push(R.classList[i]);}return l;}
function menos(a,b){var s=[],i;for(i=0;i<a.length;i++){if(b.indexOf(a[i])<0){s.push(a[i]);}}return s;}
/* O PAINEL DO KIT apareceu depois da carga antecipada (arquivo no <head>, kit no body): o arquivo sai sem rastro -- tira o
   <style> e desfaz no <html> so o que ELE fez (as classes que pos ou tirou e o --sgw-a11y-fator), antes de o script do kit
   rodar (o observador roda no checkpoint de microtarefas que o parser faz antes de cada <script>); o kit aplica as dele. */
function desistir(){var i;if(fora){return;}fora=true;if(obs){obs.disconnect();obs=null;}if(st.parentNode){st.parentNode.removeChild(st);}
if(!marca){return;}
for(i=0;i<marca.pos.length;i++){R.classList.remove(marca.pos[i]);}
for(i=0;i<marca.tirou.length;i++){R.classList.add(marca.tirou[i]);}
if(marca.fator===''){R.style.removeProperty('--sgw-a11y-fator');}else{R.style.setProperty('--sgw-a11y-fator',marca.fator,marca.prio);}}
/* Como o kit: <style> e painel no fim do body. */
function montar(){if(fora||!D.body){return;}if(obs){obs.disconnect();obs=null;}
if(D.getElementById('sgw-a11y')){desistir();return;}
D.body.appendChild(st);D.body.insertAdjacentHTML('beforeend',r.html);sgwA11yPainel();}
if(D.body){montar();return;}
/* Antes do body (script no <head> sem defer): <style> no head e as classes ja salvas em <html> na hora (anti-flash: o painel
   do kit, sem a raiz, so aplica as classes), anotando o que mudou; o painel monta no DOMContentLoaded. */
(D.head||R).appendChild(st);
antes=classes();fa=R.style.getPropertyValue('--sgw-a11y-fator');fp=R.style.getPropertyPriority('--sgw-a11y-fator');
sgwA11yPainel();
depois=classes();marca={pos:menos(depois,antes),tirou:menos(antes,depois),fator:fa,prio:fp};
if(window.MutationObserver){obs=new MutationObserver(function(){if(D.getElementById('sgw-a11y')){desistir();}});obs.observe(R,{childList:true,subtree:true});}
D.addEventListener('DOMContentLoaded',montar);
}
if(typeof document==='undefined'){SGWA11Y.painel=sgwA11yPainel;if(typeof module==='object'&&module&&module.exports){module.exports=SGWA11Y;}return;}
try{sgwA11yIniciar();}catch(e){}
})();
