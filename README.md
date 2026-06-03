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
docs/
```

> **Nota:** a configuração `pages` no `angular.json` gera os arquivos diretamente em `docs/`, separados do código-fonte.

## GitHub Pages — configurar `base-href`

O script `build` já usa o base-href correto para o repositório:

```json
"build": "ng build --configuration pages --base-href /recap-2-years/"
```

Se o nome do repositório mudar, atualize `/recap-2-years/` no `package.json`.

### 1. Teste local do build

Para simular a estrutura do repositório com `npx serve .`:

```bash
npm run build:local
npx serve .
```

Abra [http://localhost:3000/docs/](http://localhost:3000/docs/).

### 2. Workflow `.github/workflows/deploy.yml`

O caminho do artifact está configurado como:

```yaml
path: docs
```

### 3. Configuração no GitHub

**Opção A — Deploy from branch (manual):**

1. Rode `npm run build`
2. Commit e push da pasta `docs/`
3. Vá em **Settings → Pages**
4. Em **Build and deployment**, selecione **Deploy from a branch**
5. Branch `main` (ou a branch principal) e pasta **`/docs`**

**Opção B — GitHub Actions (automático):**

1. Vá em **Settings → Pages**
2. Em **Build and deployment**, selecione **GitHub Actions**
3. Faça push na branch `main` — o workflow publica automaticamente

URL final esperada:

```text
https://<seu-usuario>.github.io/recap-2-years/
```

## Scripts disponíveis

| Script              | Descrição                                              |
| ------------------- | ------------------------------------------------------ |
| `npm start`         | Servidor de desenvolvimento                            |
| `npm run build`     | Build de produção em `docs/` (base-href `/recap-2-years/`) |
| `npm run build:local` | Build para teste local com `npx serve .` (base-href `/docs/`) |
| `npm run watch`     | Build em modo watch (development)                      |
| `npm test`          | Testes unitários                                       |

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
