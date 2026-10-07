/* =========================================================
   PLANO MEIA GUARDA — dados
   Para editar o plano, mexa só neste arquivo.
   - TECH: cada técnica (id, sistema, nome, explicação, pontos, erro comum, buscas de vídeo)
   - WEEKS: as 20 semanas. dias = [segunda, terça, quarta, quinta] (ids de técnicas)
     Sexta = revisão automática, sábado = rola com meta, domingo = descanso e estudo.
   ========================================================= */
(function () {
  'use strict';

  const CATS = {
    fund:    'Fundamentos',
    entrada: 'Chegar na meia guarda',
    knee:    'Knee shield (Z-guard)',
    coyote:  'Underhook e dogfight',
    deep:    'Meia guarda profunda',
    lock:    'Lockdown',
    butter:  'Half butterfly',
    pernas:  'Ataques de perna',
    fin:     'Finalizações',
    costas:  'Costas',
    defesa:  'Defesa',
    contra:  'Contra-ataques',
    topo:    'O outro lado (passagem)',
    gi:      'Com kimono'
  };

  const TECH = {};
  function t(id, cat, nome, desc, pontos, erro, videos) {
    TECH[id] = { id, cat, nome, desc, pontos, erro, videos };
  }

  /* ---------- Fundamentos ---------- */
  t('f1', 'fund', 'Estrutura da meia guarda',
    'A base de tudo: ficar de lado, controlar uma perna dele e nunca aceitar ficar chapado de costas no chão.',
    ['Quadril de lado, apoiado no ombro de baixo. Costas no chão só de passagem.',
     'Pernas travadas na perna dele (triângulo ou pés cruzados), joelho de fora apontando para cima.',
     'Braço de dentro disputa o underhook; braço de fora faz frame ou controla o punho.',
     'Queixo protegido e cabeça fora do alcance do crossface.'],
    'Ficar deitado de costas esperando ele se mexer.',
    ['meia guarda fundamentos postura', 'half guard fundamentals Lachlan Giles']);

  t('f2', 'fund', 'Guerra do underhook',
    'Quem ganha o underhook geralmente ganha a meia guarda. Aprenda a ganhar, manter e recuperar.',
    ['Braço fundo, mão chegando nas costas dele, não só no ombro.',
     'Cabeça colada no peito ou ombro dele para ele não te achatar.',
     'Se ele tirar seu underhook, troque na hora para o frame e reconstrua.',
     'Busque o underhook quando ele postar a mão ou levantar a cabeça.'],
    'Underhook raso, só no ombro, que o whizzer quebra fácil.',
    ['half guard underhook battle', 'underhook meia guarda como ganhar']);

  t('f3', 'fund', 'Frames contra o crossface',
    'O crossface é a principal arma de quem passa meia guarda. Seus frames impedem que ele vire seu rosto e te chape.',
    ['Antebraço no pescoço ou na clavícula dele, não na cara.',
     'Braço de fora protege o espaço entre o seu ombro e a sua orelha.',
     'Se ele conseguir o crossface, vire o quadril para ele antes de perder o ombro.',
     'Frame e fuga de quadril juntos: o frame cria espaço, o quadril usa o espaço.'],
    'Empurrar com os braços esticados e se cansar.',
    ['half guard crossface defense', 'defesa crossface meia guarda']);

  t('f4', 'fund', 'Sair da meia chapada',
    'Quando ele já te achatou (crossface e underhook dele), recupere o lado antes de pensar em raspar.',
    ['Proteja o pescoço e o braço de baixo primeiro.',
     'Ponte curta na direção dele para criar espaço, depois fuga de quadril.',
     'Reinsira o joelho (knee shield) ou volte ao underhook.',
     'Primeiro recupere, depois ataque.'],
    'Tentar raspar deitado de costas.',
    ['flat half guard recovery', 'recuperar meia guarda chapado']);

  t('f5', 'fund', 'Voltar para a guarda completa',
    'A meia guarda também é passagem. Saber voltar para a guarda fechada ou aberta te dá opções e cansa o passador.',
    ['Frame no quadril dele e fuga de quadril para abrir ângulo.',
     'Coloque o joelho entre vocês, depois o pé no quadril.',
     'Da guarda aberta você volta para a meia quando quiser.'],
    'Soltar a perna dele antes de ter o joelho de volta.',
    ['recover full guard from half guard', 'recuperar guarda da meia guarda']);

  t('f6', 'fund', 'Drills solo de quadril',
    'Movimentos que constroem a meia guarda sem parceiro: fuga de quadril, ponte, levantada técnica e granby.',
    ['Fuga de quadril para os dois lados, sempre terminando de lado.',
     'Ponte e virada para o ombro (a base do old school e do dogfight).',
     'Levantada técnica com mão de base e mão de proteção.',
     'Devagar e limpo. A velocidade vem sozinha.'],
    'Fazer rápido e de qualquer jeito.',
    ['jiu jitsu solo drills half guard', 'drills solo jiu jitsu movimentação']);

  /* ---------- Chegar na meia ---------- */
  t('e1', 'entrada', 'Puxar meia guarda em pé',
    'Chegar na meia guarda de pé, com segurança, já no underhook ou no knee shield.',
    ['Faça a pegada antes de sentar (gola e manga, ou collar tie sem kimono).',
     'Sente perto dele: a meia guarda vive na distância curta.',
     'Enrosque a perna na hora e já busque o underhook.',
     'Confira a regra do campeonato sobre puxar para a guarda.'],
    'Sentar longe e deixar ele andar para a passagem.',
    ['pull half guard safely', 'puxar meia guarda']);

  t('e2', 'entrada', 'Da guarda aberta para a meia',
    'Quando ele passa pelas suas pernas, a meia guarda é a última linha antes dos cem quilos.',
    ['Percebeu a passagem? Abrace a perna mais próxima com as suas.',
     'Vire de lado para ele e coloque o frame no pescoço.',
     'Entre direto no knee shield ou no underhook.'],
    'Deixar ele colar o peito antes de você virar de lado.',
    ['guard retention to half guard', 'retenção de guarda meia guarda']);

  t('e3', 'entrada', 'Dos cem quilos para a meia',
    'Saída dos cem quilos (side control) para a meia guarda. Fundamental para quem joga por baixo.',
    ['Frames no pescoço e no quadril.',
     'Fuga de quadril para longe e joelho entre vocês.',
     'Enrosque a perna dele e reconstrua o underhook.'],
    'Empurrar sem mexer o quadril.',
    ['side control escape to half guard', 'saída dos cem quilos para meia guarda']);

  t('e4', 'entrada', 'Da montada para a meia',
    'Saída cotovelo-joelho da montada, terminando na meia guarda com underhook.',
    ['Cotovelo colado no joelho dele e corpo de lado.',
     'Puxe o joelho para dentro e prenda o pé dele.',
     'Repita do outro lado ou fique na meia e ataque.'],
    'Abrir os cotovelos e entregar o braço.',
    ['elbow knee escape mount to half guard', 'saída da montada cotovelo joelho']);

  /* ---------- Knee shield ---------- */
  t('k1', 'knee', 'Knee shield: estrutura',
    'O joelho atravessado no peito dele cria distância e te mantém longe do crossface. É a casa das raspagens e dos ataques de braço.',
    ['Canela na diagonal no peito ou ombro dele, pé do lado de fora do quadril.',
     'Mão de fora controla o punho ou a manga do braço de base dele.',
     'Mão de dentro no colarinho ou no pescoço, fazendo frame.',
     'Perna de baixo continua prendendo a perna dele.'],
    'Joelho colado no seu peito (sem espaço) ou pé dentro do quadril dele.',
    ['z guard knee shield basics', 'meia guarda knee shield detalhes']);

  t('k2', 'knee', 'Triângulo do knee shield',
    'Quando ele empurra seu joelho para baixo ou deixa um braço dentro, o triângulo aparece.',
    ['Controle o punho de um braço e deixe o outro dentro.',
     'Passe a perna do knee shield por cima do ombro dele.',
     'Crie ângulo girando o quadril antes de fechar.',
     'Puxe a cabeça dele para baixo e aperte.'],
    'Fechar reto, sem ângulo.',
    ['z guard triangle', 'triângulo da meia guarda knee shield']);

  t('k3', 'knee', 'Arm drag para as costas',
    'Puxar o braço dele atravessando seu corpo abre as costas, principalmente quando ele empurra com a mão.',
    ['Pegue o punho e o tríceps (arm drag de duas mãos).',
     'Sente e suba para o lado das costas dele.',
     'Primeiro gancho ou seatbelt, só então solte o braço.'],
    'Puxar o braço sem levar o corpo junto.',
    ['knee shield arm drag back take', 'arm drag da meia guarda para as costas']);

  t('k4', 'knee', 'Do knee shield para o underhook',
    'A ponte entre os dois sistemas: quando ele pressiona o knee shield, você troca para o underhook e o dogfight.',
    ['Deixe ele vir para frente e use esse movimento.',
     'Desça o joelho enquanto o braço entra por baixo do dele.',
     'Termine de lado, com a cabeça colada.'],
    'Soltar o joelho sem o underhook pronto.',
    ['knee shield to underhook half guard', 'transição knee shield underhook']);

  /* ---------- Underhook e dogfight ---------- */
  t('c1', 'coyote', 'Coyote half guard: estrutura',
    'Sistema popularizado por Lucas Leite: underhook forte e controle da perna, muito sólido contra adversários pesados.',
    ['Underhook fundo e cabeça no peito dele.',
     'Mão de fora controlando a perna ou a calça dele.',
     'Pernas fazendo gancho e alavanca, não só segurando.',
     'Movimento constante: ele não pode estabilizar.'],
    'Ficar parado só segurando a posição.',
    ['coyote half guard Lucas Leite', 'coyote guard meia guarda']);

  t('c2', 'coyote', 'Raspagem old school',
    'A raspagem clássica: underhook, pega o pé de fora dele e vira ele por cima do seu ombro.',
    ['Underhook fundo e corpo de lado para ele.',
     'Mão de fora agarra o calcanhar da perna de fora dele.',
     'Empurre com cabeça e ombro na direção do pé preso.',
     'Suba para os cem quilos ou para a montada.'],
    'Puxar só com os braços, sem o quadril.',
    ['old school sweep half guard', 'raspagem old school meia guarda']);

  t('c3', 'coyote', 'Plan B (quando bloqueiam o old school)',
    'Se ele posta a perna para bloquear o old school, troque de direção e use a perna leve dele contra ele.',
    ['Ele postou a perna: a outra perna fica leve.',
     'Troque o controle e empurre na direção oposta.',
     'Old school e plan B são uma dupla: um abre o outro.'],
    'Insistir no old school com ele já postado.',
    ['plan b sweep half guard', 'raspagem plan b meia guarda']);

  t('c4', 'coyote', 'Dogfight',
    'Subir no joelho com o underhook, lado a lado com ele. Daqui saem raspagens, single leg e costas.',
    ['Underhook fundo, apoie no cotovelo e depois na mão.',
     'Suba o quadril e fique de joelhos, cabeça colada na dele.',
     'Pressione com o ombro: ele não pode voltar a te achatar.',
     'Cuidado com D\'arce e guilhotina (veja a defesa da semana).'],
    'Subir com a cabeça para fora e entregar o pescoço.',
    ['dogfight position jiu jitsu', 'dogfight meia guarda']);

  t('c5', 'coyote', 'Single leg a partir da meia',
    'Do dogfight ou do underhook, você se levanta com a perna dele e termina por cima.',
    ['Mãos na perna dele, perto do joelho.',
     'Levante com a cabeça do lado de dentro, colada nele.',
     'Leve a perna para o seu quadril e finalize a queda.'],
    'Cabeça para fora: guilhotina.',
    ['half guard to single leg', 'single leg da meia guarda']);

  t('c6', 'coyote', 'Costas pelo underhook',
    'Quando ele tenta afundar o quadril ou sair da meia, o underhook te leva direto para as costas.',
    ['Underhook fundo e empurre o cotovelo dele com a cabeça.',
     'Saia com o quadril para trás e para o lado.',
     'Seatbelt e ganchos: controle antes de finalizar.'],
    'Pular direto no mata-leão sem controle.',
    ['half guard back take from underhook', 'pegar as costas da meia guarda']);

  t('c7', 'coyote', 'Kimura trap a partir do underhook',
    'Quando ele faz whizzer ou posta a mão, a pegada de kimura vira controle, raspagem e caminho para as costas.',
    ['Pegada em figura-quatro no braço de base dele.',
     'Use a kimura para girar ele, não só para finalizar.',
     'Se ele esconder o braço, vá para as costas.'],
    'Forçar a finalização e perder a posição.',
    ['kimura trap from half guard', 'kimura trap meia guarda']);

  /* ---------- Meia guarda profunda ---------- */
  t('d1', 'deep', 'Entrada na meia guarda profunda',
    'Na deep half você entra por baixo dele, abraçando a perna, e ele perde a base. Ótima contra quem pressiona para frente ou fica alto.',
    ['Entre quando ele ficar alto ou jogar o peso para frente.',
     'Cabeça por baixo, ombro entre as pernas dele.',
     'Abrace a coxa dele e prenda a perna com as suas.',
     'Não deixe a cabeça exposta para ele sentar em cima.'],
    'Entrar pela metade e ficar sem controle da perna.',
    ['deep half guard entry', 'entrada meia guarda profunda Bernardo Faria']);

  t('d2', 'deep', 'Raspagem do garçom (waiter)',
    'A raspagem clássica da meia profunda: você levanta a perna dele como um garçom levanta a bandeja.',
    ['Mão por dentro, pegando o pé da perna livre dele.',
     'Levante essa perna e role para o lado.',
     'Suba já passando para o lado.'],
    'Soltar a perna presa durante o rolamento.',
    ['waiter sweep deep half guard', 'raspagem do garçom meia guarda profunda']);

  t('d3', 'deep', 'Raspagem Homer Simpson',
    'Da meia profunda você gira por baixo dele e sai por trás. Funciona quando ele joga o peso para frente.',
    ['Mantenha o controle da perna dentro da meia profunda.',
     'Gire por baixo em direção às costas dele.',
     'Termine de joelhos e suba no single leg ou por cima.'],
    'Girar sem o controle da perna.',
    ['homer simpson sweep deep half', 'raspagem homer simpson']);

  t('d4', 'deep', 'Back door',
    'Saída por baixo e por trás da meia profunda, aparecendo nas costas dele. Muito associada a Jeff Glover.',
    ['Solte a perna no tempo certo e passe o quadril por trás dele.',
     'Suba nas costas com gancho e seatbelt.',
     'Use quando ele trava o peso para frente.'],
    'Soltar a perna cedo demais.',
    ['deep half back door', 'back door meia guarda profunda']);

  t('d5', 'deep', 'Da meia profunda para X-guard e SLX',
    'A meia profunda conecta com as guardas de perna. Quando ele se levanta, entre no single leg X.',
    ['Ele levantou: a perna fica acessível.',
     'Pé no quadril e a outra perna atrás do joelho dele.',
     'Do SLX, levante ou ataque o pé.'],
    'Deixar ele recuperar a postura sem trocar de guarda.',
    ['deep half to single leg x', 'deep half para x guard']);

  /* ---------- Lockdown ---------- */
  t('l1', 'lock', 'Lockdown: estrutura',
    'Trava de pernas do sistema de Eddie Bravo (10th Planet): suas pernas esticam a perna dele e tiram a base.',
    ['Cruze as pernas em volta da perna dele e empurre para trás.',
     'Estique para tirar a base e impedir que ele solte a perna.',
     'Lockdown com underhook é a combinação principal.'],
    'Travar sem esticar (vira só um abraço).',
    ['lockdown half guard Eddie Bravo', 'lockdown meia guarda']);

  t('l2', 'lock', 'Whip up e electric chair (raspagem)',
    'Do lockdown, o whip up levanta o braço de underhook por cima da cabeça dele e abre a raspagem electric chair.',
    ['Estique o lockdown para baixar o corpo dele.',
     'Passe o braço de underhook por cima da cabeça dele (whip up).',
     'Pegue a perna livre e leve para o lado.'],
    'Fazer o whip up sem esticar antes.',
    ['lockdown whip up electric chair sweep', 'electric chair raspagem']);

  t('l3', 'lock', 'Electric chair (finalização)',
    'A mesma estrutura da raspagem vira uma finalização de abertura de quadril. No treino, aplique devagar.',
    ['Mesma pegada da raspagem, com a perna dele presa.',
     'Abra a perna dele devagar: é finalização de articulação.',
     'Se ele defender, vá para a raspagem.'],
    'Forçar rápido no treino. Machuca.',
    ['electric chair submission lockdown', 'electric chair finalização']);

  /* ---------- Half butterfly ---------- */
  t('b1', 'butter', 'Half butterfly: estrutura',
    'Um gancho de borboleta por dentro da coxa dele mais o underhook. Dá elevação e é ótima para raspar.',
    ['Gancho de dentro na coxa dele; a outra perna ajuda a prender.',
     'Underhook ou controle de braço do outro lado.',
     'Fique sentado ou de lado, nunca chapado.'],
    'Gancho raso, só no joelho.',
    ['half butterfly guard basics', 'meia guarda borboleta']);

  t('b2', 'butter', 'Raspagem de gancho',
    'A raspagem clássica de borboleta, adaptada à meia: você levanta a perna dele com o gancho e cai por cima.',
    ['Underhook e cabeça colada.',
     'Caia de lado e levante com o gancho.',
     'Suba na direção da raspagem.'],
    'Raspar para o lado em que ele tem base.',
    ['half butterfly sweep', 'raspagem de gancho meia borboleta']);

  t('b3', 'butter', 'Arm drag para as costas (half butterfly)',
    'Arm drag direto da half butterfly, muito usado sem kimono.',
    ['Controle o punho e puxe o tríceps.',
     'Sente e pegue as costas com o gancho de dentro.',
     'Seatbelt antes de soltar o braço.'],
    'Não sentar junto com o arm drag.',
    ['arm drag from half butterfly', 'arm drag borboleta costas']);

  t('b4', 'butter', 'Da half butterfly para o SLX',
    'Quando ele se levanta, o gancho vira single leg X.',
    ['Siga o movimento dele com o gancho.',
     'Pé no quadril e perna por trás do joelho dele.',
     'Levante ou ataque o pé.'],
    'Deixar ele sair sem trocar de guarda.',
    ['half butterfly to single leg x', 'borboleta para single x']);

  /* ---------- Ataques de perna ---------- */
  t('p1', 'pernas', 'Da meia para o Single Leg X',
    'A meia vira single leg X quando ele fica em pé. Uma das conexões mais importantes do jogo moderno.',
    ['Ele levantou: leve a perna de baixo para o quadril dele.',
     'Abrace a perna dele e prenda com os pés.',
     'Daqui: raspagem de levantar ou chave de pé.'],
    'Ficar deitado quando ele levanta.',
    ['half guard to single leg x', 'meia guarda para single x']);

  t('p2', 'pernas', 'Raspagem do Single Leg X',
    'Levantada técnica com a perna dele presa: simples e eficiente.',
    ['Empurre o quadril dele com o pé e tire a base.',
     'Levante segurando a perna.',
     'Termine passando ou por cima.'],
    'Soltar a perna ao levantar.',
    ['single leg x sweep technical stand up', 'raspagem single x']);

  t('p3', 'pernas', 'Chave de pé reta',
    'Straight ankle lock: permitida em quase todas as faixas e regras. Sai naturalmente do SLX e da meia.',
    ['Braço baixo, na parte fina acima do calcanhar, perna dele entre as suas.',
     'Joelho de dentro trava o quadril dele.',
     'Arqueie as costas e gire levemente para fora.'],
    'Pegada alta, na panturrilha.',
    ['straight ankle lock details', 'chave de pé reta detalhes']);

  t('p4', 'pernas', 'Ashi garami e heel hook',
    'Do SLX para o outside ashi e o heel hook. Confira a regra: em muitos campeonatos, principalmente com kimono e faixas coloridas, é proibido.',
    ['Controle do joelho dele antes do pé.',
     'Esconda o calcanhar dele e gire com o corpo, não só com os braços.',
     'Treine com parceiro de confiança e solte cedo.'],
    'Aplicar rápido: lesão de joelho é séria.',
    ['outside ashi garami from half guard', 'ashi garami entradas']);

  /* ---------- Finalizações ---------- */
  t('s1', 'fin', 'Kimura da meia guarda',
    'Quando ele posta a mão no chão, a kimura aparece. Finaliza, raspa ou abre as costas.',
    ['Pegue o punho dele e passe o outro braço por cima do ombro.',
     'Figura-quatro fechada, cotovelo dele colado no seu peito.',
     'Gire o quadril e leve a mão dele para as costas dele.'],
    'Deixar espaço entre o cotovelo dele e o seu corpo.',
    ['kimura from half guard', 'kimura da meia guarda']);

  t('s2', 'fin', 'Guilhotina da meia guarda',
    'Quando ele abaixa a cabeça para pressionar ou você está no knee shield, a guilhotina é ameaça constante.',
    ['Braço fundo por baixo do pescoço.',
     'Queixo dele no seu antebraço, puxe para o seu peito.',
     'Finalize com o quadril, não só com o braço.'],
    'Apertar só com o braço.',
    ['guillotine from half guard', 'guilhotina da meia guarda']);

  t('s3', 'fin', 'Omoplata da meia guarda',
    'Do knee shield, quando ele posta o braço ou puxa a mão, a omoplata encaixa.',
    ['Controle o punho e gire o quadril.',
     'Passe a perna por cima do ombro dele.',
     'Sente para finalizar ou para raspar.'],
    'Deixar ele rolar para escapar.',
    ['omoplata from half guard', 'omoplata da meia guarda']);

  /* ---------- Costas ---------- */
  t('x1', 'costas', 'Controle das costas',
    'A meia guarda te leva às costas o tempo todo. Aprenda a ficar lá.',
    ['Seatbelt: braço de cima por cima do ombro, o de baixo por baixo do braço dele.',
     'Cabeça colada do lado do braço de baixo.',
     'Ganchos ou triângulo de corpo, pés nunca cruzados.'],
    'Cruzar os pés e tomar chave de pé.',
    ['back control seatbelt details', 'controle das costas jiu jitsu']);

  t('x2', 'costas', 'Mata-leão',
    'A finalização mais importante do jiu-jitsu, com os detalhes para finalizar quem defende.',
    ['Braço de estrangulamento profundo, pulso atrás do pescoço.',
     'Mão atrás da cabeça, cotovelos juntos.',
     'Puxe o peito dele contra você e estique as costas.'],
    'Apertar só com os braços, sem controlar o corpo.',
    ['rear naked choke details', 'mata leão detalhes']);

  t('x3', 'costas', 'Arco e flecha',
    'Estrangulamento das costas com kimono. Muito difícil de defender quando bem ajustado.',
    ['Gola profunda com uma mão.',
     'Pegue a calça dele e mude o ângulo do corpo.',
     'Estique o corpo como um arco.'],
    'Gola rasa.',
    ['bow and arrow choke details', 'arco e flecha estrangulamento']);

  /* ---------- Defesa ---------- */
  t('df1', 'defesa', 'Defesa contra o over-under',
    'Uma das passagens mais fortes contra a meia. Defenda antes que ele empilhe seu quadril.',
    ['Não deixe o braço dele passar por baixo da sua perna: frame e quadril.',
     'Gire para o lado da perna presa.',
     'Se ele empilhar, volte ao knee shield ou ao frame no ombro.'],
    'Deixar o quadril subir e ser empilhado.',
    ['over under pass defense', 'defesa over under meia guarda']);

  t('df2', 'defesa', 'Defesa contra o knee cut',
    'O knee cut (joelho atravessado) é a passagem mais comum contra a meia. Defenda com underhook e frames.',
    ['Underhook do lado da perna que ele atravessa.',
     'Frame no joelho ou no quadril dele com a mão de fora.',
     'Não deixe ele ter crossface e underhook ao mesmo tempo.'],
    'Ficar de costas enquanto ele atravessa.',
    ['knee cut pass defense', 'defesa knee cut']);

  t('df3', 'defesa', 'Defesa contra a passagem de pressão',
    'Quando ele cola o peito e tenta te chapar com o peso.',
    ['Frame no pescoço antes de o peso chegar.',
     'Leve o quadril para longe e crie espaço.',
     'Recupere o knee shield ou o underhook.'],
    'Segurar o peso dele com os braços esticados.',
    ['half guard smash pass defense', 'defesa passagem de pressão meia guarda']);

  t('df4', 'defesa', 'Defesa contra a kimura',
    'Seu braço de underhook é justamente o que ele vai tentar pegar na kimura.',
    ['Segure sua faixa ou a coxa dele para proteger o braço.',
     'Cotovelo junto ao corpo.',
     'Suba para o dogfight usando o movimento dele.'],
    'Deixar o braço de underhook esticado.',
    ['kimura defense half guard', 'defesa kimura meia guarda']);

  t('df5', 'defesa', 'Defesa contra guilhotina ao subir',
    'Quando você sobe para o dogfight ou o single leg, o pescoço fica exposto.',
    ['Cabeça do lado de dentro, colada nele.',
     'Mão protegendo o pescoço e ombro no queixo dele.',
     'Passe para o lado do braço que aplica a guilhotina.'],
    'Levantar com a cabeça reta na frente dele.',
    ['guillotine defense from half guard', 'defesa guilhotina meia guarda']);

  t('df6', 'defesa', 'Defesa contra D\'arce e anaconda',
    'As principais ameaças contra o dogfight e o underhook. Saber defender te dá confiança para subir.',
    ['Não deixe braço e cabeça juntos e expostos.',
     'Cabeça para cima e para trás, cotovelo colado.',
     'Vire na direção dele para tirar a pressão.'],
    'Descer a cabeça no dogfight.',
    ['darce defense from half guard', 'defesa darce anaconda']);

  t('df7', 'defesa', 'Defesa contra o backstep',
    'O backstep e os ataques de perna do passador. Proteja joelho e calcanhar quando ele gira.',
    ['Siga o giro dele com o quadril.',
     'Esconda o calcanhar e aponte o joelho para ele.',
     'Nunca gire para o lado errado com o joelho preso.'],
    'Girar para fora com a perna presa.',
    ['backstep leg lock defense', 'defesa heel hook backstep']);

  t('df8', 'defesa', 'Defesa contra o leg weave',
    'A passagem trançada que prende suas pernas juntas. Precisa ser defendida cedo.',
    ['Não deixe suas pernas juntas no chão.',
     'Frame e fuga de quadril antes de o peso chegar.',
     'Separe os joelhos e recupere a meia.'],
    'Deixar ele cruzar a perna por cima da sua.',
    ['leg weave pass defense', 'defesa leg weave']);

  t('df9', 'defesa', 'Saída das costas',
    'Se tudo der errado, você precisa sair das costas. Obrigatório para qualquer faixa preta.',
    ['Proteja o pescoço com as duas mãos.',
     'Escorregue para o lado do braço de baixo dele.',
     'Coloque as costas no chão e volte para a guarda.'],
    'Soltar o pescoço para tirar os ganchos.',
    ['back escape fundamentals', 'saída das costas jiu jitsu']);

  /* ---------- Contra-ataques ---------- */
  t('ct1', 'contra', 'Knee cut: contra-ataque para as costas',
    'Quando ele atravessa o joelho, o underhook te coloca atrás dele.',
    ['Underhook forte do lado do knee cut.',
     'Siga o movimento dele e vire para o dogfight.',
     'Pegue as costas antes de ele estabilizar.'],
    'Esperar ele terminar a passagem.',
    ['knee cut counter back take', 'contra-ataque knee cut costas']);

  t('ct2', 'contra', 'Contra o whizzer',
    'O whizzer é a resposta dele ao seu underhook. Use essa reação contra ele.',
    ['Afunde o underhook e suba o ombro.',
     'Troque de direção com o plan B.',
     'Kimura trap quando ele postar o braço.'],
    'Brigar força contra força.',
    ['counter whizzer half guard', 'contra whizzer meia guarda']);

  t('ct3', 'contra', 'Contra o crossface: entrar na meia profunda',
    'Quando ele coloca crossface e peso, entre por baixo na deep half.',
    ['Use a pressão dele para passar por baixo.',
     'Abrace a perna e entre com a cabeça.',
     'De lá, garçom ou Homer Simpson.'],
    'Tentar empurrar ele de volta.',
    ['crossface counter deep half', 'contra crossface meia profunda']);

  t('ct4', 'contra', 'Contra quem se levanta na sua meia',
    'Quando ele fica em pé para passar, a meia vira SLX, deep half ou single leg.',
    ['Nunca deixe a perna dele sair livre.',
     'Pé no quadril e acompanhe.',
     'Escolha: raspar, atacar o pé ou subir no dogfight.'],
    'Soltar a perna quando ele levanta.',
    ['opponent stands in half guard counter', 'oponente levanta na meia guarda']);

  t('ct5', 'contra', 'Contra o over-under: kimura e costas',
    'No over-under, o braço dele fica exposto. Transforme a defesa em ataque.',
    ['Controle o braço que passa por baixo da sua perna.',
     'Kimura ou triângulo quando ele empilhar.',
     'Saia para as costas se ele girar.'],
    'Só defender.',
    ['over under pass counter', 'contra ataque over under']);

  t('ct6', 'contra', 'Contra a troca de quadril',
    'Quando ele troca o quadril (hip switch) para soltar a perna, abre espaço para você.',
    ['Acompanhe a troca com o seu quadril.',
     'Recoloque o knee shield ou o gancho.',
     'Suba no dogfight.'],
    'Ficar parado enquanto ele troca.',
    ['hip switch half guard counter', 'contra troca de quadril meia guarda']);

  t('ct7', 'contra', 'Contra o backstep: entrar nas pernas',
    'O backstep abre as pernas dele. Faça o ataque de perna antes que ele faça.',
    ['Siga o giro e abrace a perna.',
     'Ashi garami ou kneebar.',
     'Controle do joelho antes do pé.'],
    'Entrar atrasado.',
    ['backstep counter leg lock', 'contra backstep leg lock']);

  /* ---------- O outro lado ---------- */
  t('tp1', 'topo', 'Passagem knee cut (por cima)',
    'Faça a passagem que mais vão usar contra você. Sentir a pressão por cima melhora sua defesa por baixo.',
    ['Joelho atravessado, com crossface ou underhook.',
     'Controle do quadril antes de atravessar.',
     'Repare no que te impede de passar.'],
    'Só treinar por baixo.',
    ['knee cut pass details', 'passagem knee cut']);

  t('tp2', 'topo', 'Passagem over-under (por cima)',
    'Um braço por baixo da perna, outro por cima. Muito associada a Bernardo Faria.',
    ['Empilhe o quadril dele.',
     'Cabeça no peito dele.',
     'Caminhe em volta com pressão.'],
    'Ficar alto e sem peso.',
    ['over under pass Bernardo Faria', 'passagem over under']);

  t('tp3', 'topo', 'Passagem de pressão na meia (por cima)',
    'Crossface, underhook e peito. Entenda o que o passador quer para prever o próximo passo.',
    ['Crossface primeiro.',
     'Underhook do lado oposto.',
     'Solte a perna só depois de ter o controle.'],
    'Tentar soltar a perna antes de achatar.',
    ['passing half guard crossface underhook', 'passagem da meia guarda pressão']);

  /* ---------- Com kimono ---------- */
  t('g1', 'gi', 'Meia guarda com lapela',
    'Usar a própria lapela para controlar o braço ou a perna dele.',
    ['Puxe a lapela e passe em volta da perna dele.',
     'Use como controle, não só como pegada.',
     'Combine com as raspagens do underhook.'],
    'Lapela curta demais, sem alavanca.',
    ['lapel half guard', 'meia guarda lapela']);

  t('g2', 'gi', 'Knee shield com gola e manga',
    'A versão com kimono do knee shield: gola e manga para quebrar a postura.',
    ['Gola profunda e manga controlada.',
     'Quebre a postura antes de atacar.',
     'Triângulo e omoplata aparecem daqui.'],
    'Atacar com ele de postura alta.',
    ['knee shield collar sleeve half guard', 'knee shield gola e manga']);

  /* ---------- Fases e semanas ---------- */
  const FASES = [
    'Base', 'Underhook e dogfight', 'Meia guarda profunda',
    'Lockdown e borboleta', 'Pernas e kimono', 'Finalizações', 'Seu jogo'
  ];

  // fase = índice em FASES; dias = [seg, ter, qua, qui]
  const WEEKS = [
    { fase: 0, titulo: 'Estrutura e underhook',
      dias: [['f1', 'f6'], ['f2'], ['f3'], ['f4']],
      drill: 'Fuga de quadril e ponte: 3 séries de 10 para cada lado.',
      especifico: 'Comece na meia guarda. Você vence se ficar de lado com underhook; ele vence se te chapar com crossface. 5 rounds de 2 minutos.',
      estudo: 'Roberto Gordo Correa half guard' },
    { fase: 0, titulo: 'Chegar na meia guarda',
      dias: [['e3'], ['e4'], ['e2'], ['f5', 'e1']],
      drill: 'Saída dos cem quilos para a meia: 10 de cada lado.',
      especifico: 'Comece nos cem quilos. Você vence se chegar na meia com underhook ou knee shield. 5 rounds de 2 minutos.',
      estudo: 'Lachlan Giles half guard' },
    { fase: 0, titulo: 'Knee shield',
      dias: [['k1'], ['k2'], ['df2'], ['k3']],
      drill: 'Entrar no knee shield com pegada no punho: 20 repetições.',
      especifico: 'Comece no knee shield. Você vence se raspar, finalizar ou pegar as costas; ele vence se passar.',
      estudo: 'z guard half guard competition' },
    { fase: 1, titulo: 'Coyote e old school',
      dias: [['c1'], ['c2'], ['df5'], ['c3']],
      drill: 'Old school sem resistência: 10 de cada lado.',
      especifico: 'Comece com underhook. Você vence com old school ou plan B; ele vence se tirar seu underhook e te chapar.',
      estudo: 'Lucas Leite half guard match' },
    { fase: 1, titulo: 'Dogfight',
      dias: [['c4'], ['c5'], ['df6'], ['c6']],
      drill: 'Do underhook para o dogfight: 15 repetições.',
      especifico: 'Comece no dogfight. Você vence se raspar, levantar ou pegar as costas; ele vence se finalizar ou te colocar de volta no chão.',
      estudo: 'dogfight position jiu jitsu competition' },
    { fase: 1, titulo: 'Kimura trap e whizzer',
      dias: [['c7'], ['s1'], ['df4'], ['ct2']],
      drill: 'Pegada de kimura e giro: 10 de cada lado.',
      especifico: 'Comece com underhook contra whizzer. Você vence se raspar ou chegar nas costas.',
      estudo: 'kimura trap system competition' },
    { fase: 1, titulo: 'Costas e transição',
      dias: [['x1'], ['x2'], ['df9'], ['k4']],
      drill: 'Knee shield para underhook para dogfight: 10 de cada lado.',
      especifico: 'Comece nas costas com seatbelt. Você vence se finalizar; ele vence se escapar. Depois troque.',
      estudo: 'rear naked choke finishes' },
    { fase: 2, titulo: 'Entrada na meia profunda',
      dias: [['d1'], ['d2'], ['ct3'], ['d3']],
      drill: 'Entrada na deep half: 10 de cada lado.',
      especifico: 'Comece na meia profunda. Você vence se raspar; ele vence se passar ou sair.',
      estudo: 'Bernardo Faria deep half guard match' },
    { fase: 2, titulo: 'Meia profunda avançada',
      dias: [['d4'], ['d5'], ['df1'], ['tp2']],
      drill: 'Deep half para back door: 8 de cada lado.',
      especifico: 'Ele começa fazendo over-under. Você vence se recuperar a guarda ou raspar.',
      estudo: 'Jeff Glover deep half guard' },
    { fase: 2, titulo: 'Knee cut dos dois lados',
      dias: [['tp1'], ['ct1'], ['df3'], ['ct6']],
      drill: 'Defesa do knee cut com underhook até o dogfight: 10 de cada lado.',
      especifico: 'Ele começa já atravessando o knee cut. Você vence se recuperar o underhook ou pegar as costas.',
      estudo: 'half guard sweeps compilation' },
    { fase: 3, titulo: 'Lockdown',
      dias: [['l1'], ['l2'], ['df8'], ['l3']],
      drill: 'Lockdown e whip up: 10 de cada lado.',
      especifico: 'Comece no lockdown. Você vence com raspagem; ele vence se soltar a perna.',
      estudo: 'Eddie Bravo lockdown half guard' },
    { fase: 3, titulo: 'Half butterfly',
      dias: [['b1'], ['b2'], ['ct4'], ['b3']],
      drill: 'Raspagem de gancho: 10 de cada lado.',
      especifico: 'Comece na half butterfly. Você vence raspando ou pegando as costas.',
      estudo: 'half butterfly guard no gi' },
    { fase: 3, titulo: 'Pressão por cima',
      dias: [['tp3'], ['ct5'], ['df7'], ['ct7']],
      drill: 'Sair da meia chapada: 10 de cada lado.',
      especifico: 'Ele começa com crossface e underhook. Você vence se recuperar o lado ou o knee shield.',
      estudo: 'Tom DeBlass half guard' },
    { fase: 4, titulo: 'Single leg X',
      dias: [['p1'], ['p2'], ['ct4'], ['p3']],
      drill: 'Da meia para o SLX quando ele levanta: 10 de cada lado.',
      especifico: 'Comece na meia e ele se levanta. Você vence com raspagem ou chave de pé reta.',
      estudo: 'single leg x sweeps competition' },
    { fase: 4, titulo: 'Conexões de perna',
      dias: [['b4'], ['p4'], ['df7'], ['d5']],
      drill: 'Pegada da chave de pé reta: 10 de cada lado, devagar.',
      especifico: 'Comece no SLX. Você vence raspando ou finalizando; ele vence se passar ou escapar.',
      estudo: 'Lachlan Giles leg locks half guard' },
    { fase: 4, titulo: 'Meia guarda com kimono',
      dias: [['g1'], ['g2'], ['df3'], ['x3']],
      drill: 'Pegada de gola e manga no knee shield: 20 repetições.',
      especifico: 'Com kimono. Comece no knee shield com gola e manga. Você vence raspando ou finalizando.',
      estudo: 'lapel half guard match' },
    { fase: 5, titulo: 'Finalizações da meia',
      dias: [['s1'], ['s2'], ['s3'], ['k2']],
      drill: 'Kimura, guilhotina e triângulo: 5 de cada, de cada lado.',
      especifico: 'Comece na meia. Só vale finalização, sem pontos.',
      estudo: 'half guard submissions compilation' },
    { fase: 5, titulo: 'Sequência: knee shield até as costas',
      dias: [['k1', 'k4'], ['c4', 'c6'], ['df2', 'ct1'], ['x1', 'x2']],
      drill: 'Sequência completa, knee shield até o mata-leão: 5 de cada lado.',
      especifico: 'Comece no knee shield e tente completar a sequência. Ele resiste de verdade.',
      estudo: 'half guard back take competition' },
    { fase: 6, titulo: 'Sequência: underhook, profunda e pernas',
      dias: [['c2', 'c3'], ['ct3', 'd2'], ['d5', 'p1'], ['p2', 'p3']],
      drill: 'Old school, plan B e entrada na deep half: 5 de cada lado.',
      especifico: 'Comece com underhook. Cada vez que ele bloquear, troque de sistema.',
      estudo: 'deep half guard competition' },
    { fase: 6, titulo: 'Seu jogo',
      dias: [['f1', 'f2'], ['df1', 'df2'], ['ct1', 'ct5'], ['c7', 's1']],
      drill: 'Escolha suas 3 técnicas favoritas: 10 de cada lado.',
      especifico: 'Rolas livres começando sempre da meia. Anote o que funcionou e o que falhou.',
      estudo: 'Roberto Gordo Correa' }
  ];

  const NIVEIS = [
    { nome: 'Ainda não vi',   faixa: 'branca' },
    { nome: 'Aprendendo',     faixa: 'azul' },
    { nome: 'Sai no drill',   faixa: 'roxa' },
    { nome: 'Sai no rola',    faixa: 'marrom' },
    { nome: 'Domino em luta', faixa: 'preta' }
  ];

  window.PLANO = { CATS, TECH, FASES, WEEKS, NIVEIS };
})();
