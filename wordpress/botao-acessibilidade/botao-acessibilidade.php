<?php
/**
 * Plugin Name:       Botão de Acessibilidade
 * Plugin URI:        https://github.com/alfamaweb/botao-acessibilidade-wordpress-aw
 * Description:       Painel de acessibilidade para visitantes: tamanho do texto, contraste claro e escuro, tons de cinza, links destacados, fonte legível, espaçamento, pausar animações, cursor grande, guia e máscara de leitura, foco reforçado, estrutura da página, perfis prontos, leitura em voz alta e Libras (VLibras).
 * Version:           2.0.1
 * Requires at least: 5.8
 * Requires PHP:      7.4
 * Author:            Alfama Web
 * Author URI:        https://alfamaweb.com.br
 * License:           MIT
 * Text Domain:       botao-acessibilidade
 *
 * O acessibilidade.js deste plugin é GERADO pelo kit PHP do SGW (kits/site-php/gerado/acessibilidade.js) e
 * não deve ser editado à mão. Este arquivo só converte as opções do painel do WordPress nos atributos data-*
 * do <script> (contrato no README do kit, seção "acessibilidade.js autônomo").
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // acesso direto ao arquivo: não faz nada
}

const BA11Y_VERSAO = '2.0.1';
const BA11Y_OPCAO  = 'botao_acessibilidade';
const BA11Y_HANDLE = 'botao-acessibilidade';
const BA11Y_META   = '_ba11y_esconder';

/** Recursos do painel, na ordem canônica do kit, com o nome mostrado na tela de ajustes. */
function ba11y_recursos() {
	return array(
		'fonte'     => 'Tamanho do texto',
		'contraste' => 'Contraste (claro e escuro)',
		'cinza'     => 'Escala de cinza',
		'links'     => 'Destacar links',
		'legivel'   => 'Fonte legível',
		'espaco'    => 'Espaçamento do texto',
		'animacoes' => 'Pausar animações',
		'cursor'    => 'Cursor grande',
		'guia'      => 'Guia de leitura',
		'ouvir'     => 'Ouvir a página (leitura em voz alta do navegador)',
		'libras'    => 'Libras (VLibras, serviço do governo federal)',
		'mascara'   => 'Máscara de leitura',
		'foco'      => 'Foco reforçado',
		'estrutura' => 'Estrutura da página (regiões e títulos)',
		'perfis'    => 'Perfis prontos (baixa visão, dislexia, concentração, movimento)',
	);
}

/** Os 13 recursos que o painel liga quando não recebe lista (todos menos Ouvir e Libras). */
function ba11y_recursos_padrao_do_kit() {
	return array_values( array_diff( array_keys( ba11y_recursos() ), array( 'ouvir', 'libras' ) ) );
}

/** Textos padrão do painel (os do kit, `sgw__a11y_rotulos_padrao()`), mostrados como exemplo nos campos. */
function ba11y_rotulos_padrao() {
	return array(
		'botao'                  => 'Acessibilidade',
		'titulo'                 => 'Recursos de acessibilidade',
		'aviso'                  => 'Uma ajuda para a leitura; as preferências ficam salvas só neste navegador.',
		'redefinir'              => 'Redefinir tudo',
		'fechar'                 => 'Fechar painel de acessibilidade',
		'fonte_titulo'           => 'Tamanho do texto',
		'fonte_aumentar'         => 'Aumentar fonte',
		'fonte_diminuir'         => 'Diminuir fonte',
		'fonte_status'           => 'Tamanho do texto: {n}%',
		'contraste_claro'        => 'Alto contraste claro',
		'contraste_escuro'       => 'Contraste escuro',
		'cinza'                  => 'Escala de cinza',
		'links'                  => 'Destacar links',
		'legivel'                => 'Fonte legível',
		'espaco'                 => 'Espaçamento do texto',
		'animacoes'              => 'Pausar animações',
		'cursor'                 => 'Cursor grande',
		'guia'                   => 'Guia de leitura',
		'redefinido'             => 'Preferências redefinidas.',
		'ouvir_titulo'           => 'Ouvir a página',
		'ouvir_ler'              => 'Ouvir',
		'ouvir_pausar'           => 'Pausar',
		'ouvir_continuar'        => 'Continuar',
		'ouvir_devagar'          => 'Mais devagar',
		'ouvir_rapido'           => 'Mais rápido',
		'ouvir_velocidade'       => 'Velocidade: {v}x',
		'ouvir_lendo'            => 'Lendo a página.',
		'ouvir_pausado'          => 'Leitura pausada.',
		'ouvir_fim'              => 'Leitura encerrada.',
		'ouvir_vazio'            => 'Não há texto para ler.',
		'libras'                 => 'Libras (VLibras)',
		'mascara'                => 'Máscara de leitura',
		'foco'                   => 'Foco reforçado',
		'estrutura'              => 'Estrutura da página',
		'estrutura_regioes'      => 'Regiões da página',
		'estrutura_titulos'      => 'Títulos',
		'estrutura_vazio'        => 'Nada encontrado nesta página.',
		'estrutura_cabecalho'    => 'Cabeçalho',
		'estrutura_navegacao'    => 'Navegação',
		'estrutura_principal'    => 'Conteúdo principal',
		'estrutura_rodape'       => 'Rodapé',
		'estrutura_complementar' => 'Conteúdo complementar',
		'atalho'                 => 'Atalho do teclado: {atalho}',
		'perfis_titulo'          => 'Perfis prontos',
		'perfil_baixa_visao'     => 'Baixa visão',
		'perfil_dislexia'        => 'Dislexia',
		'perfil_concentracao'    => 'Concentração',
		'perfil_movimento'       => 'Sensível a movimento',
	);
}

/** Os rótulos que aparecem logo na tela de ajustes; os demais ficam em "Todos os textos do painel". */
function ba11y_rotulos_principais() {
	return array(
		'botao'     => 'Nome do botão (lido pelo leitor de tela)',
		'titulo'    => 'Título do painel',
		'aviso'     => 'Aviso no fim do painel',
		'redefinir' => 'Botão de redefinir',
	);
}

/** Posições do painel (os quatro cantos do kit). */
function ba11y_posicoes() {
	return array(
		'inferior-direita'  => 'Canto inferior direito',
		'inferior-esquerda' => 'Canto inferior esquerdo',
		'superior-direita'  => 'Canto superior direito',
		'superior-esquerda' => 'Canto superior esquerdo',
	);
}

/**
 * Tamanho do botão da 1.x (aba presa à lateral) -> lado do botão redondo da 2.0, em px.
 * A aba antiga tinha 38x44, 46x52 e 56x64 px (e alargava para 44, 54 e 64 ao passar o mouse); o botão novo é um
 * círculo, então vale a altura da aba: 44 (também o mínimo do kit e o alvo de toque de 44 px), 52 e 64.
 */
function ba11y_tamanhos_v1() {
	return array(
		'pequeno' => 44,
		'medio'   => 52,
		'grande'  => 64,
	);
}

/**
 * Converte a opção salva pela 1.x (cor, lado, altura, tamanho, libras) no formato da 2.0, mantendo o site como
 * estava: "meio" não existe nos cantos do kit e vira o canto inferior do mesmo lado; Ouvir estava sempre ligado na
 * 1.x e continua; Libras segue o que estava salvo (padrão da 1.x: ligado); os extras novos entram ligados.
 */
function ba11y_converter_v1( $v1 ) {
	$v1       = is_array( $v1 ) ? $v1 : array();
	$cor      = sanitize_hex_color( isset( $v1['cor'] ) && is_string( $v1['cor'] ) ? $v1['cor'] : '' );
	$lado     = ( isset( $v1['lado'] ) && 'esquerda' === $v1['lado'] ) ? 'esquerda' : 'direita';
	$vertical = ( isset( $v1['altura'] ) && 'topo' === $v1['altura'] ) ? 'superior' : 'inferior';
	$tamanhos = ba11y_tamanhos_v1();
	$tamanho  = ( isset( $v1['tamanho'] ) && is_string( $v1['tamanho'] ) && isset( $tamanhos[ $v1['tamanho'] ] ) ) ? $tamanhos[ $v1['tamanho'] ] : $tamanhos['medio'];
	$libras   = ! ( isset( $v1['libras'] ) && 'nao' === $v1['libras'] );

	$recursos = array();
	foreach ( array_keys( ba11y_recursos() ) as $id ) {
		if ( 'libras' !== $id || $libras ) {
			$recursos[] = $id;
		}
	}

	return ba11y_com_campos_v1(
		array(
			'versao'          => 2,
			'cor'             => $cor ? $cor : '#1449c7',
			'posicao'         => $vertical . '-' . $lado,
			'deslocamento'    => 16,
			'tamanho_px'      => $tamanho,
			'recursos'        => $recursos,
			'botao_flutuante' => 'sim',
			'atalho'          => 'sim',
			'idioma'          => 'pt-BR',
			'rotulos'         => array(),
		)
	);
}

/**
 * Grava também os campos da 1.x (lado, altura, tamanho, libras), derivados dos novos, para que voltar à 1.1.0 não
 * perca o essencial da configuração. A 2.0 não os lê.
 */
function ba11y_com_campos_v1( $cfg ) {
	$cfg['lado']    = false !== strpos( $cfg['posicao'], 'esquerda' ) ? 'esquerda' : 'direita';
	$cfg['altura']  = 0 === strpos( $cfg['posicao'], 'superior' ) ? 'topo' : 'baixo';
	$cfg['tamanho'] = $cfg['tamanho_px'] <= 48 ? 'pequeno' : ( $cfg['tamanho_px'] <= 58 ? 'medio' : 'grande' );
	$cfg['libras']  = in_array( 'libras', $cfg['recursos'], true ) ? 'sim' : 'nao';
	return $cfg;
}

/** Inteiro dentro de [min, max] (número ou texto só de dígitos); senão o padrão. */
function ba11y_inteiro( $valor, $min, $max, $padrao ) {
	if ( is_string( $valor ) && preg_match( '/^[0-9]{1,4}$/D', trim( $valor ) ) ) {
		$valor = (int) trim( $valor );
	}
	return ( is_int( $valor ) && $valor >= $min && $valor <= $max ) ? $valor : $padrao;
}

/**
 * Texto puro de um rótulo: sem tags (nem o conteúdo de <script>/<style>), UTF-8 válido, espaços e quebras colapsados.
 * Não converte entidades nem remove "%xx" (o sanitize_text_field gravaria "<" como "&lt;", e o painel, que escapa de
 * novo na saída, mostraria "&lt;" literal). Um "<" que não abre tag ("Tamanho < 100", "<3") é mantido.
 * A mesma regra está no JS da pré-visualização (textoPuro), para a prévia mostrar o mesmo texto que o site.
 */
function ba11y_texto_puro( $texto ) {
	$marca = "\u{E000}"; // caractere de uso privado: o strip_tags apagaria um "\0"
	$texto = str_replace( array( "\0", $marca ), '', wp_check_invalid_utf8( (string) $texto ) );
	// "<" sem ">" depois (antes do próximo "<") não é tag: protege com o marcador antes de tirar as tags.
	$texto = preg_replace_callback(
		'%<[^>]*?((?=<)|>|$)%',
		function ( $m ) use ( $marca ) {
			return '>' === substr( $m[0], -1 ) ? $m[0] : $marca . substr( $m[0], 1 );
		},
		$texto
	);
	$texto = wp_strip_all_tags( (string) $texto ); // também apaga o conteúdo de <script> e <style>
	$texto = str_replace( $marca, '<', $texto );
	return trim( (string) preg_replace( '/\s+/u', ' ', $texto ) );
}

/** Guarda um aviso da tela de ajustes uma vez só (o WordPress pode chamar o saneamento duas vezes na 1ª gravação). */
function ba11y_avisar( $codigo, $mensagem ) {
	static $dados = array();
	if ( isset( $dados[ $codigo ] ) || ! function_exists( 'add_settings_error' ) ) {
		return;
	}
	$dados[ $codigo ] = true;
	add_settings_error( BA11Y_OPCAO, 'ba11y-' . $codigo, $mensagem, 'warning' );
}

/**
 * Saneia a opção: aceita o formato da 2.0 (vindo da tela de ajustes ou já salvo) e o da 1.x (convertido).
 * Idempotente: saneia de novo o que já foi saneado sem mudar nada.
 *
 * @param mixed $entrada Valor a gravar ou lido do banco.
 * @param bool  $avisar  Mostrar avisos na tela de ajustes.
 * @return array
 */
function ba11y_normalizar( $entrada, $avisar = false ) {
	if ( ! is_array( $entrada ) ) {
		$entrada = array();
	}
	if ( empty( $entrada['versao'] ) ) {
		return ba11y_converter_v1( $entrada );
	}

	$padrao   = ba11y_converter_v1( array() );
	$posicoes = ba11y_posicoes();

	$cor = sanitize_hex_color( isset( $entrada['cor'] ) && is_string( $entrada['cor'] ) ? $entrada['cor'] : '' );

	$posicao = ( isset( $entrada['posicao'] ) && is_string( $entrada['posicao'] ) && isset( $posicoes[ $entrada['posicao'] ] ) )
		? $entrada['posicao'] : $padrao['posicao'];

	$recursos = array();
	$marcados = ( isset( $entrada['recursos'] ) && is_array( $entrada['recursos'] ) ) ? $entrada['recursos'] : array();
	foreach ( array_keys( ba11y_recursos() ) as $id ) {
		if ( in_array( $id, $marcados, true ) ) {
			$recursos[] = $id;
		}
	}
	if ( ! $recursos ) {
		$recursos = ba11y_recursos_padrao_do_kit();
		if ( $avisar ) {
			ba11y_avisar( 'recursos', 'Nenhum recurso foi marcado. O painel não fica vazio: voltaram os recursos padrão (todos menos Ouvir e Libras).' );
		}
	}

	$idioma = ( isset( $entrada['idioma'] ) && is_string( $entrada['idioma'] ) ) ? trim( $entrada['idioma'] ) : '';
	if ( ! preg_match( '/^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8}){0,3}$/D', $idioma ) ) {
		if ( $avisar && '' !== $idioma ) {
			ba11y_avisar( 'idioma', 'O idioma informado não é uma etiqueta válida (exemplos: pt-BR, en, es). Ficou pt-BR.' );
		}
		$idioma = 'pt-BR';
	}

	$rotulos = array();
	$enviado = ( isset( $entrada['rotulos'] ) && is_array( $entrada['rotulos'] ) ) ? $entrada['rotulos'] : array();
	foreach ( ba11y_rotulos_padrao() as $chave => $texto_padrao ) {
		if ( ! isset( $enviado[ $chave ] ) || ! is_string( $enviado[ $chave ] ) ) {
			continue;
		}
		$texto = ba11y_texto_puro( $enviado[ $chave ] );
		if ( '' === $texto || $texto === $texto_padrao ) {
			continue; // vazio ou igual ao padrão: não grava (o painel usa o padrão)
		}
		if ( strlen( $texto ) > 200 ) {
			if ( $avisar ) {
				ba11y_avisar( 'rotulo-' . $chave, sprintf( 'O texto no lugar de "%s" passou de 200 bytes (letras acentuadas contam 2) e NÃO foi gravado: o painel continua com o texto padrão. Encurte o texto e salve de novo.', esc_html( $texto_padrao ) ) );
			}
			continue;
		}
		$rotulos[ $chave ] = $texto;
	}

	return ba11y_com_campos_v1(
		array(
			'versao'          => 2,
			'cor'             => $cor ? $cor : $padrao['cor'],
			'posicao'         => $posicao,
			'deslocamento'    => ba11y_inteiro( isset( $entrada['deslocamento'] ) ? $entrada['deslocamento'] : null, 0, 200, $padrao['deslocamento'] ),
			'tamanho_px'      => ba11y_inteiro( isset( $entrada['tamanho_px'] ) ? $entrada['tamanho_px'] : null, 44, 96, $padrao['tamanho_px'] ),
			'recursos'        => $recursos,
			// A tela manda sempre "nao" (campo oculto) ou "sim"; ausente (gravação por código) = o padrão, ligado.
			'botao_flutuante' => ( isset( $entrada['botao_flutuante'] ) && 'nao' === $entrada['botao_flutuante'] ) ? 'nao' : 'sim',
			'atalho'          => ( isset( $entrada['atalho'] ) && 'nao' === $entrada['atalho'] ) ? 'nao' : 'sim',
			'idioma'          => $idioma,
			'rotulos'         => $rotulos,
		)
	);
}

/** sanitize_callback do register_setting. */
function ba11y_limpar( $entrada ) {
	return ba11y_normalizar( $entrada, true );
}

/** Configuração em vigor: a salva (a da 1.x é convertida na leitura, sem gravar nada) ou o padrão. */
function ba11y_config() {
	return ba11y_normalizar( get_option( BA11Y_OPCAO, array() ) );
}

/** A opção salva ainda está no formato da 1.x (o site atualizou e ninguém salvou os ajustes desde então)? */
function ba11y_opcao_ainda_v1() {
	$salvo = get_option( BA11Y_OPCAO, null );
	return is_array( $salvo ) && $salvo && empty( $salvo['versao'] );
}

/** Configuração -> atributos data-* do <script> (contrato do acessibilidade.js). Valores ainda sem escape. */
function ba11y_atributos( $cfg ) {
	$attrs = array(
		'data-posicao'      => $cfg['posicao'],
		'data-cor'          => $cfg['cor'],
		'data-deslocamento' => (string) $cfg['deslocamento'],
		'data-tamanho'      => (string) $cfg['tamanho_px'],
		'data-recursos'     => implode( ',', $cfg['recursos'] ),
		'data-idioma'       => $cfg['idioma'],
	);
	if ( 'nao' === $cfg['botao_flutuante'] ) {
		$attrs['data-botao-flutuante'] = 'false';
	}
	if ( 'nao' === $cfg['atalho'] ) {
		$attrs['data-atalho'] = 'false';
	}
	if ( $cfg['rotulos'] ) {
		// HEX_*: o JSON sai sem < > & ' " dentro dos textos; esc_attr cuida das aspas da estrutura.
		$attrs['data-rotulos'] = wp_json_encode( $cfg['rotulos'], JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT );
	}
	return $attrs;
}

/** Os atributos já escapados, prontos para entrar na tag (começa com espaço). */
function ba11y_atributos_html( $cfg ) {
	$html = '';
	foreach ( ba11y_atributos( $cfg ) as $nome => $valor ) {
		$html .= ' ' . $nome . '="' . esc_attr( $valor ) . '"';
	}
	return $html;
}

/** Tipos de conteúdo que ganham a caixa "Esconder o botão": posts, páginas e tipos públicos (sem anexos). */
function ba11y_tipos_de_post() {
	$tipos = array_values( array_diff( get_post_types( array( 'public' => true ) ), array( 'attachment' ) ) );
	return (array) apply_filters( 'botao_acessibilidade_tipos_de_post', $tipos );
}

/** A página que está sendo vista pediu para esconder o botão (caixa no editor)? */
function ba11y_escondido_aqui() {
	$id = 0;
	if ( is_singular() ) {
		$id = (int) get_queried_object_id();
	} elseif ( is_home() && ! is_front_page() ) {
		$id = (int) get_option( 'page_for_posts' ); // página de posts escolhida em Configurações > Leitura
	}
	$esconder = $id > 0 && '1' === get_post_meta( $id, BA11Y_META, true );
	return (bool) apply_filters( 'botao_acessibilidade_esconder', $esconder, $id );
}

/** Carrega o painel no site (não no painel do WordPress), salvo nas páginas marcadas para esconder. */
add_action(
	'wp_enqueue_scripts',
	function () {
		if ( ba11y_escondido_aqui() ) {
			return;
		}
		// WP 6.3+ entende o array (rodapé + defer); antes dele, o array conta como "no rodapé".
		wp_enqueue_script( BA11Y_HANDLE, plugins_url( 'acessibilidade.js', __FILE__ ), array(), BA11Y_VERSAO, array( 'in_footer' => true, 'strategy' => 'defer' ) );
	}
);

function ba11y_css_mobile() {
	return <<<'CSS'
@media (max-width: 480px) {
	.sgw-a11y .sgw-a11y-painel {
		top: max(8px, env(safe-area-inset-top, 0px));
		bottom: max(8px, env(safe-area-inset-bottom, 0px));
		left: max(8px, env(safe-area-inset-left, 0px));
		right: max(8px, env(safe-area-inset-right, 0px));
		width: auto;
		max-width: none;
		max-height: none;
		overscroll-behavior: contain;
		-webkit-overflow-scrolling: touch;
	}
}
@media (max-height: 500px) {
	.sgw-a11y .sgw-a11y-painel {
		top: max(8px, env(safe-area-inset-top, 0px));
		bottom: max(8px, env(safe-area-inset-bottom, 0px));
		width: min(640px, calc(100vw - 16px - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px)));
		max-width: none;
		max-height: none;
		padding: 12px;
		overscroll-behavior: contain;
		-webkit-overflow-scrolling: touch;
	}
	.sgw-a11y .sgw-a11y-grade,
	.sgw-a11y .sgw-a11y-perfis-lista {
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	}
	.sgw-a11y .sgw-a11y-cab {
		margin-bottom: 8px;
	}
}
CSS;
}

add_action(
	'wp_head',
	function () {
		if ( ba11y_escondido_aqui() ) {
			return;
		}
		$nonce = apply_filters( 'botao_acessibilidade_nonce', '' );
		$attr  = ( is_string( $nonce ) && '' !== $nonce ) ? ' nonce="' . esc_attr( $nonce ) . '"' : '';
		echo '<style id="botao-acessibilidade-mobile"' . $attr . '>' . ba11y_css_mobile() . '</style>' . "\n";
	}
);

/**
 * Põe os data-* (e o nonce da CSP, se houver) no <script> do plugin. O nonce vem do filtro
 * `botao_acessibilidade_nonce`; se outro plugin de CSP já pôs um `nonce` na tag, ele é mantido.
 */
add_filter(
	'script_loader_tag',
	function ( $tag, $handle, $src = '' ) {
		if ( BA11Y_HANDLE !== $handle ) {
			return $tag;
		}
		$attrs = ba11y_atributos_html( ba11y_config() );
		$nonce = apply_filters( 'botao_acessibilidade_nonce', '' );
		if ( is_string( $nonce ) && '' !== $nonce && ! preg_match( '/<script\b[^>]*\snonce=/i', $tag ) ) {
			$attrs .= ' nonce="' . esc_attr( $nonce ) . '"';
		}
		$por = function () use ( $attrs ) {
			return '<script' . $attrs; // callback: nenhum "$1" do texto vira referência
		};
		// 1º pelo id que o WordPress põe na tag; se um otimizador tirou o id, pelo caminho do arquivo no src.
		$padroes = array( '/<script\b(?=[^>]*\bid=([\'"])' . preg_quote( BA11Y_HANDLE . '-js', '/' ) . '\1)/' );
		$caminho = is_string( $src ) ? wp_parse_url( $src, PHP_URL_PATH ) : '';
		if ( is_string( $caminho ) && '' !== $caminho ) {
			$padroes[] = '/<script\b(?=[^>]*\bsrc=([\'"])[^\'"]*' . preg_quote( $caminho, '/' ) . '[?\'"])/';
		}
		foreach ( $padroes as $padrao ) {
			$achou = 0;
			$novo  = preg_replace_callback( $padrao, $por, $tag, 1, $achou );
			if ( is_string( $novo ) && $achou > 0 ) {
				return $novo;
			}
		}
		return $tag;
	},
	10,
	3
);

/** Caixa no editor: esconder o botão nesta página. */
add_action(
	'add_meta_boxes',
	function () {
		foreach ( ba11y_tipos_de_post() as $tipo ) {
			add_meta_box( 'ba11y-esconder', 'Botão de acessibilidade', 'ba11y_metabox', $tipo, 'side', 'low' );
		}
	}
);

function ba11y_metabox( $post ) {
	wp_nonce_field( 'ba11y_esconder', 'ba11y_esconder_nonce' );
	$marcado = '1' === get_post_meta( $post->ID, BA11Y_META, true );
	?>
	<p>
		<label>
			<input type="checkbox" name="ba11y_esconder" value="1" <?php checked( $marcado ); ?> />
			Esconder o botão de acessibilidade nesta página
		</label>
	</p>
	<p class="description">Marcado, o painel não é carregado nesta página (nem o botão, nem o atalho, nem os gatilhos <code>data-sgw-a11y-abrir</code>).</p>
	<?php
}

add_action(
	'save_post',
	function ( $post_id, $post ) {
		if ( ! isset( $_POST['ba11y_esconder_nonce'] ) ) {
			return; // não veio da caixa (REST, importação, edição rápida...): não mexe
		}
		if ( ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['ba11y_esconder_nonce'] ) ), 'ba11y_esconder' ) ) {
			return;
		}
		if ( ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) || wp_is_post_revision( $post_id ) ) {
			return;
		}
		if ( ! current_user_can( 'edit_post', $post_id ) || ! in_array( $post->post_type, ba11y_tipos_de_post(), true ) ) {
			return;
		}
		if ( ! empty( $_POST['ba11y_esconder'] ) ) {
			update_post_meta( $post_id, BA11Y_META, '1' );
		} else {
			delete_post_meta( $post_id, BA11Y_META );
		}
	},
	10,
	2
);

/** Tela de configurações: item próprio no menu lateral do painel. */
add_action(
	'admin_menu',
	function () {
		add_menu_page(
			'Botão de Acessibilidade',
			'Botão Acessibilidade',
			'manage_options',
			'botao-acessibilidade',
			'ba11y_tela',
			'dashicons-universal-access-alt',
			81 // logo abaixo de Configurações
		);
	}
);

add_action(
	'admin_init',
	function () {
		register_setting(
			'ba11y',
			BA11Y_OPCAO,
			array(
				'type'              => 'array',
				'sanitize_callback' => 'ba11y_limpar',
				'default'           => array(),
			)
		);
	}
);

function ba11y_tela() {
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	$cfg         = ba11y_config();
	$nome        = BA11Y_OPCAO;
	$padroes     = ba11y_rotulos_padrao();
	$principais  = ba11y_rotulos_principais();
	// o <input type="color"> só aceita #rrggbb: uma cor #rgb gravada por código é expandida no campo
	$cor_campo = preg_match( '/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/D', $cfg['cor'], $m )
		? strtolower( '#' . $m[1] . $m[1] . $m[2] . $m[2] . $m[3] . $m[3] ) : strtolower( $cfg['cor'] );
	$campo_texto = function ( $chave, $rotulo ) use ( $cfg, $nome, $padroes ) {
		$valor = isset( $cfg['rotulos'][ $chave ] ) ? $cfg['rotulos'][ $chave ] : '';
		printf(
			'<p><label for="ba11y-r-%1$s">%2$s</label><br /><input type="text" class="regular-text" id="ba11y-r-%1$s" name="%3$s[rotulos][%1$s]" value="%4$s" placeholder="%5$s" maxlength="200" data-rotulo="%1$s" /></p>',
			esc_attr( $chave ),
			esc_html( $rotulo ),
			esc_attr( $nome ),
			esc_attr( $valor ),
			esc_attr( $padroes[ $chave ] )
		);
	};
	?>
	<div class="wrap">
		<h1>Botão de Acessibilidade</h1>
		<?php settings_errors(); // sem argumento: inclui o "Configurações salvas." que o core grava em "general" ?>
		<?php if ( ba11y_opcao_ainda_v1() ) : ?>
			<div class="notice notice-info"><p>As configurações da versão 1.x foram convertidas para a 2.0 e já valem no site. Confira abaixo e clique em <strong>Salvar</strong> para gravá-las no formato novo.</p></div>
		<?php endif; ?>
		<p>O painel aparece em todas as páginas do site. Cada visitante escolhe as opções que precisa, e a escolha fica salva no aparelho dele. Para tirar o botão de uma página, marque "Esconder o botão de acessibilidade nesta página" na lateral do editor dela.</p>
		<style>
			.ba11y-adm { display: flex; flex-wrap: wrap; gap: 24px 40px; align-items: flex-start; }
			.ba11y-adm form { flex: 1 1 420px; }
			.ba11y-previa { flex: 0 1 440px; position: sticky; top: 48px; }
			.ba11y-previa h2 { margin-top: 1em; }
			.ba11y-previa iframe { width: 100%; height: 560px; border: 1px solid #c3c4c7; border-radius: 8px; background: #fff; }
			.ba11y-recursos label { display: block; margin: 0 0 6px; }
			.ba11y-adm details summary { cursor: pointer; font-weight: 600; margin: 8px 0; }
		</style>
		<div class="ba11y-adm">
		<form method="post" action="options.php" id="ba11y-form">
			<?php settings_fields( 'ba11y' ); ?>
			<input type="hidden" name="<?php echo esc_attr( $nome ); ?>[versao]" value="2" />
			<table class="form-table" role="presentation">
				<tr>
					<th scope="row"><label for="ba11y-cor">Cor do botão</label></th>
					<td>
						<input type="color" id="ba11y-cor" name="<?php echo esc_attr( $nome ); ?>[cor]" value="<?php echo esc_attr( $cor_campo ); ?>" />
						<p class="description">A cor do ícone (branco ou preto) é escolhida sozinha pelo contraste. A cor do botão precisa ter contraste suficiente com o fundo do site.</p>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="ba11y-posicao">Posição</label></th>
					<td>
						<select id="ba11y-posicao" name="<?php echo esc_attr( $nome ); ?>[posicao]">
							<?php foreach ( ba11y_posicoes() as $valor => $texto ) : ?>
								<option value="<?php echo esc_attr( $valor ); ?>" <?php selected( $cfg['posicao'], $valor ); ?>><?php echo esc_html( $texto ); ?></option>
							<?php endforeach; ?>
						</select>
						<p class="description">O botão e o painel ficam num dos quatro cantos. A altura "No meio" da versão 1.x não existe mais: quem usava "No meio" passou para o canto inferior do mesmo lado. Se o site tiver outro botão flutuante (WhatsApp, voltar ao topo), use o canto oposto.</p>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="ba11y-deslocamento">Distância do canto</label></th>
					<td>
						<input type="number" id="ba11y-deslocamento" name="<?php echo esc_attr( $nome ); ?>[deslocamento]" value="<?php echo esc_attr( (string) $cfg['deslocamento'] ); ?>" min="0" max="200" step="1" class="small-text" /> px
						<p class="description">De 0 a 200 px, na horizontal e na vertical (padrão 16).</p>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="ba11y-tamanho">Tamanho do botão</label></th>
					<td>
						<input type="number" id="ba11y-tamanho" name="<?php echo esc_attr( $nome ); ?>[tamanho_px]" value="<?php echo esc_attr( (string) $cfg['tamanho_px'] ); ?>" min="44" max="96" step="1" class="small-text" /> px
						<p class="description">De 44 a 96 px. Os tamanhos da versão 1.x viraram: pequeno = 44, médio = 52, grande = 64.</p>
					</td>
				</tr>
				<tr>
					<th scope="row">Botão flutuante</th>
					<td>
						<input type="hidden" name="<?php echo esc_attr( $nome ); ?>[botao_flutuante]" value="nao" />
						<label><input type="checkbox" id="ba11y-botao-flutuante" name="<?php echo esc_attr( $nome ); ?>[botao_flutuante]" value="sim" <?php checked( $cfg['botao_flutuante'], 'sim' ); ?> />
						Mostrar o botão redondo no canto da tela</label>
						<p class="description">Desmarcado, o botão some e o painel só abre por um elemento do próprio site com o atributo <code>data-sgw-a11y-abrir</code> (por exemplo, um item "Acessibilidade" no menu: <code>&lt;a href="#" data-sgw-a11y-abrir&gt;Acessibilidade&lt;/a&gt;</code>) ou pelo atalho do teclado. <strong>Sem esse elemento no tema, o visitante que não conhece o atalho não tem como abrir o painel.</strong></p>
					</td>
				</tr>
				<tr>
					<th scope="row">Atalho do teclado</th>
					<td>
						<input type="hidden" name="<?php echo esc_attr( $nome ); ?>[atalho]" value="nao" />
						<label><input type="checkbox" id="ba11y-atalho" name="<?php echo esc_attr( $nome ); ?>[atalho]" value="sim" <?php checked( $cfg['atalho'], 'sim' ); ?> />
						<kbd>Alt</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd> abre e fecha o painel</label>
					</td>
				</tr>
				<tr>
					<th scope="row">Recursos do painel</th>
					<td class="ba11y-recursos">
						<?php foreach ( ba11y_recursos() as $id => $texto ) : ?>
							<label><input type="checkbox" name="<?php echo esc_attr( $nome ); ?>[recursos][]" value="<?php echo esc_attr( $id ); ?>" <?php checked( in_array( $id, $cfg['recursos'], true ) ); ?> /> <?php echo esc_html( $texto ); ?></label>
						<?php endforeach; ?>
						<p class="description">Libras carrega o VLibras (<code>vlibras.gov.br</code>) só quando o visitante liga a opção. Se o site usa CSP, veja no README do plugin os domínios a liberar.</p>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="ba11y-idioma">Idioma</label></th>
					<td>
						<input type="text" id="ba11y-idioma" name="<?php echo esc_attr( $nome ); ?>[idioma]" value="<?php echo esc_attr( $cfg['idioma'] ); ?>" class="small-text" maxlength="35" />
						<p class="description">Etiqueta do idioma do painel e da voz de "Ouvir" (pt-BR, en, es...). Os textos continuam os dos campos abaixo.</p>
					</td>
				</tr>
				<tr>
					<th scope="row">Textos do painel</th>
					<td>
						<p class="description">Em branco = o texto padrão (aparece apagado dentro do campo). Texto puro: tags HTML são retiradas. Limite de <strong>200 bytes</strong> por texto (letras acentuadas e emojis contam 2 a 4): passando disso, o campo avisa e não deixa salvar.</p>
						<?php
						foreach ( $principais as $chave => $rotulo ) {
							$campo_texto( $chave, $rotulo );
						}
						?>
						<details>
							<summary>Todos os textos do painel</summary>
							<p class="description"><code>{n}</code> vira a porcentagem do texto, <code>{v}</code> a velocidade da leitura e <code>{atalho}</code> a combinação de teclas.</p>
							<?php
							foreach ( $padroes as $chave => $texto_padrao ) {
								if ( ! isset( $principais[ $chave ] ) ) {
									$campo_texto( $chave, $texto_padrao . ' (' . $chave . ')' );
								}
							}
							?>
						</details>
					</td>
				</tr>
			</table>
			<?php submit_button( 'Salvar' ); ?>
		</form>
		<div class="ba11y-previa">
			<h2>Pré-visualização</h2>
			<p class="description">Muda na hora conforme você mexe nas opções. Clique no botão (ou em "Acessibilidade" no topo da prévia) para testar. Para valer no site, clique em Salvar.</p>
			<iframe id="ba11y-previa" title="Pré-visualização do botão de acessibilidade"></iframe>
		</div>
		</div>
		<script>
		( function () {
			var script = <?php echo wp_json_encode( plugins_url( 'acessibilidade.js', __FILE__ ) . '?ver=' . BA11Y_VERSAO ); ?>;
			var opcao = <?php echo wp_json_encode( $nome ); ?>;
			var form = document.getElementById( 'ba11y-form' );
			var frame = document.getElementById( 'ba11y-previa' );
			function esc( v ) { return String( v ).replace( /[&"'<>]/g, function ( c ) { return '&#' + c.charCodeAt( 0 ) + ';'; } ); }
			function campo( n ) { return form.elements[ opcao + '[' + n + ']' ]; }
			function marcado( id ) { var c = document.getElementById( id ); return !! ( c && c.checked ); }
			// Espelho de ba11y_texto_puro() (PHP): a prévia mostra o mesmo texto que o site vai mostrar.
			function textoPuro( v ) {
				var t = String( v ).replace( /[\0]/g, '' ).replace( /<[^>]*?((?=<)|>|$)/g, function ( m ) { return m.charAt( m.length - 1 ) === '>' ? m : '' + m.slice( 1 ); } );
				t = t.replace( /<(script|style)[^>]*?>[\s\S]*?<\/\1>/gi, '' ).replace( /<[^>]*>/g, '' ).replace( //g, '<' );
				return t.replace( /\s+/g, ' ' ).trim();
			}
			function bytes( t ) { return unescape( encodeURIComponent( t ) ).length; }
			// O PHP conta bytes (UTF-8), não caracteres: avisa no campo e impede salvar em vez de descartar em silêncio.
			Array.prototype.forEach.call( form.querySelectorAll( 'input[data-rotulo]' ), function ( i ) {
				function conferir() {
					var n = bytes( textoPuro( i.value ) );
					i.setCustomValidity( n > 200 ? 'Este texto tem ' + n + ' bytes; o limite é 200 (letras acentuadas contam 2). Encurte para salvar.' : '' );
				}
				i.removeAttribute( 'maxlength' ); // o limite real é o de bytes, conferido aqui
				i.addEventListener( 'input', conferir );
				conferir();
			} );
			// Os mesmos data-* que o PHP escreve no site (ba11y_atributos).
			function atributos() {
				var a = {
					posicao: campo( 'posicao' ).value,
					cor: campo( 'cor' ).value,
					deslocamento: campo( 'deslocamento' ).value,
					tamanho: campo( 'tamanho_px' ).value,
					recursos: Array.prototype.filter.call( form.querySelectorAll( 'input[name="' + opcao + '[recursos][]"]' ), function ( c ) { return c.checked; } ).map( function ( c ) { return c.value; } ).join( ',' ),
					idioma: campo( 'idioma' ).value
				};
				if ( ! marcado( 'ba11y-botao-flutuante' ) ) { a[ 'botao-flutuante' ] = 'false'; }
				if ( ! marcado( 'ba11y-atalho' ) ) { a.atalho = 'false'; }
				var r = {}, tem = false;
				Array.prototype.forEach.call( form.querySelectorAll( 'input[data-rotulo]' ), function ( i ) {
					var t = textoPuro( i.value );
					if ( t && bytes( t ) <= 200 ) { r[ i.getAttribute( 'data-rotulo' ) ] = t; tem = true; }
				} );
				if ( tem ) { a.rotulos = JSON.stringify( r ); }
				return a;
			}
			function montar() {
				var attrs = atributos();
				var data = Object.keys( attrs ).map( function ( k ) { return ' data-' + k + '="' + esc( attrs[ k ] ) + '"'; } ).join( '' );
				frame.srcdoc = '<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">' +
					// a prévia (mesma origem do site) não lê nem grava o localStorage, para não mexer nas escolhas de quem navega no site
					'<script>try{Object.defineProperty(window,"localStorage",{value:{getItem:function(){return null},setItem:function(){},removeItem:function(){},clear:function(){},key:function(){return null},length:0}})}catch(e){}<\/script>' +
					'<style>body{margin:0;font:16px/1.6 Georgia,serif;color:#222;background:#fafafa}header{display:flex;justify-content:space-between;align-items:center;background:#1b2a4a;color:#fff;padding:16px 20px}header a{color:#fff}main{padding:16px 20px}p{margin:0 0 1em}</style>' +
					'</head><body><header><strong>Seu site</strong><a href="#" data-sgw-a11y-abrir>Acessibilidade</a></header><main>' +
					'<h1>Página de exemplo</h1>' +
					'<p>Este é um texto de exemplo para ver como o botão fica na página.</p>' +
					'<p>Clique no botão do canto (ou em "Acessibilidade" no topo) para abrir o painel e testar as opções. <a href="#">Um link de exemplo.</a></p>' +
					'<p>As escolhas feitas aqui na prévia não ficam salvas.</p>' +
					'</main><script src="' + esc( script ) + '"' + data + '><\/script></body></html>';
			}
			var espera;
			form.addEventListener( 'input', function () { clearTimeout( espera ); espera = setTimeout( montar, 300 ); } );
			form.addEventListener( 'change', montar );
			montar();
		} )();
		</script>
	</div>
	<?php
}

/** Link "Configurações" na lista de plugins. */
add_filter(
	'plugin_action_links_' . plugin_basename( __FILE__ ),
	function ( $links ) {
		array_unshift( $links, '<a href="' . esc_url( admin_url( 'admin.php?page=botao-acessibilidade' ) ) . '">Configurações</a>' );
		return $links;
	}
);
