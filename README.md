# Nossa Temporada

Site-presente estático de 2 anos de namoro — **Daniel & Bia**.  
Projeto **mobile-first**, sem backend, pensado para ser acessado via NFC em um troféu físico.

## Stack

- Angular 21 (standalone components)
- TypeScript
- SCSS
- Deploy estático no GitHub Pages

## Desenvolvimento local

```bash
npm install
npm start
```

Abra [http://localhost:4200](http://localhost:4200).

## Build de produção

```bash
npm run build
```

O output fica em:

```text
dist/nossa-temporada/browser/
```

> **Nota:** em versões recentes do Angular, o build de aplicações gera a pasta `browser` dentro de `dist/<nome-do-projeto>/`. O workflow do GitHub Actions já aponta para esse caminho.

## GitHub Pages — configurar `base-href`

Quando o repositório no GitHub estiver criado, substitua `REPO_NAME` pelo nome exato do repositório (ex.: `recap-2-years`).

### 1. Script `build:gh-pages` no `package.json`

```json
"build:gh-pages": "ng build --configuration production --base-href /REPO_NAME/"
```

Exemplo:

```json
"build:gh-pages": "ng build --configuration production --base-href /recap-2-years/"
```

### 2. Workflow `.github/workflows/deploy.yml`

O caminho do artifact já está configurado como:

```yaml
path: dist/nossa-temporada/browser
```

Se você renomear o projeto no `angular.json`, atualize esse caminho também.

### 3. Configuração no GitHub

1. Vá em **Settings → Pages**
2. Em **Build and deployment**, selecione **GitHub Actions**
3. Faça push na branch `main` — o workflow publica automaticamente

URL final esperada:

```text
https://<seu-usuario>.github.io/REPO_NAME/
```

## Scripts disponíveis

| Script            | Descrição                                      |
| ----------------- | ---------------------------------------------- |
| `npm start`       | Servidor de desenvolvimento                    |
| `npm run build`   | Build de produção (base-href `/`)              |
| `npm run build:gh-pages` | Build com base-href para GitHub Pages   |
| `npm run watch`   | Build em modo watch (development)              |
| `npm test`        | Testes unitários                               |

## Onde colocar imagens

```text
public/
  images/
    trips/          # fotos de viagens
    highlights/     # destaques do relacionamento
    screenshots/    # prints de conversas, etc.
  icons/            # ícones SVG ou PNG
  favicon.png       # favicon do site
```

Referência no código/template:

```html
<img src="images/trips/exemplo.jpg" alt="..." />
```

## Onde adicionar novas seções

```text
src/app/
  features/
    home/
      components/   # componentes específicos da home
      data/         # dados estáticos (home.data.ts)
      home.component.*
  shared/
    components/     # componentes reutilizáveis
    models/           # interfaces e tipos compartilhados
  core/
    constants/      # constantes globais
    services/       # serviços (se necessário no futuro)
    utils/          # funções utilitárias
```

Fluxo sugerido para novas seções:

1. Adicionar dados em `features/home/data/`
2. Criar componente em `features/home/components/`
3. Compor a seção na `home.component.html` usando `app-section-container`
4. Reutilizar `app-stat-card` e `app-button` quando fizer sentido

## Mobile-first

O layout parte de telas pequenas. Breakpoints e espaçamentos extras entram via media queries em `src/styles.scss` e nos componentes. Não há layout desktop complexo nesta base — isso será evoluído incrementalmente.

## Próximos passos

Esta é apenas a **estrutura base**. Seções, textos finais, animações, estatísticas e assets reais serão adicionados em etapas futuras.
