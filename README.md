# Meia Guarda

App de treino diário focado em meia guarda: fundamentos, knee shield, underhook e dogfight, meia guarda profunda, lockdown, half butterfly, ataques de perna, finalizações, costas, defesas e contra-ataques.

São 20 semanas em 7 fases. Cada semana tem:

- **Segunda, terça e quinta:** técnica nova (vídeo + pontos-chave + drill + rola específico)
- **Quarta:** defesa e contra-ataque
- **Sexta:** revisão da semana
- **Sábado:** rola com meta
- **Domingo:** descanso ativo e estudo de lutas

Você abre o app, ele mostra o treino do dia, você toca em "Assistir" e vai para o tatame.

## Publicar no GitHub Pages

1. Crie um repositório (ex.: `meia-guarda`) e suba todos os arquivos desta pasta, mantendo a pasta `icons/`.
2. No repositório: **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
3. Em um ou dois minutos o app fica em `https://SEU-USUARIO.github.io/meia-guarda/`.

## Colocar na tela inicial

- **iPhone (Safari):** abra o link → botão Compartilhar → *Adicionar à Tela de Início*.
- **Android (Chrome):** abra o link → menu ⋮ → *Adicionar à tela inicial* / *Instalar app*.

## Como usar

- **Hoje:** o treino do dia. Marque como feito no fim. No modo "Próximo pendente" (padrão) o app sempre mostra o primeiro treino não feito, então faltar um dia não bagunça o plano. Em Progresso dá para trocar para "Pela data".
- **Toque numa técnica** para ver detalhes, marcar seu nível (faixa branca → preta) e salvar o link do vídeo que você mais gostou. Link do YouTube salvo toca dentro do app.
- **Progresso:** faixa preta com 4 graus (cada grau = 1/4 do plano), técnicas por nível, anotações e backup.
- Os dados ficam salvos no celular. Use **Exportar backup** de vez em quando.

## Editar o plano

Tudo está em `data.js`: técnicas em `TECH`, semanas em `WEEKS`. Depois de alterar qualquer arquivo, mude a versão em `sw.js` (`meia-guarda-v1` → `v2`) para o celular pegar a atualização.

## Arquivos

| Arquivo | O que é |
|---|---|
| `index.html` | Estrutura da página |
| `style.css` | Visual |
| `app.js` | Lógica (telas, progresso, backup) |
| `data.js` | Plano e técnicas |
| `manifest.webmanifest`, `sw.js`, `icons/` | Instalar na tela inicial e abrir offline |
