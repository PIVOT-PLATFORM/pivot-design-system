# @pivot/design-system

Design system Angular de la suite PIVOT — Angular CDK (comportement/a11y) + SCSS BEM custom (visuel).

Stack actée par ADR-007 : aucune lib visuelle tierce (Material / PrimeNG / Taiga / Tailwind rejetés explicitement).

## Installation

```bash
npm install @pivot/design-system --registry https://npm.pkg.github.com
```

Prérequis pairs (peerDependencies) :

```bash
npm install @angular/cdk @jsverse/transloco
```

## Composants disponibles

| Composant | Import |
|-----------|--------|
| `ConfirmDialogComponent` | `@pivot/design-system` |
| `ToastComponent` | `@pivot/design-system` |
| `ToastService` | `@pivot/design-system` |
| `PasswordStrengthComponent` | `@pivot/design-system` |
| `PasswordPolicyService` | `@pivot/design-system` |

## Tokens SCSS

```scss
@use '@pivot/design-system/scss/tokens';
@use '@pivot/design-system/scss/reset';
@use '@pivot/design-system/scss/components';
```

## Storybook

```bash
npm run storybook
```

## Build

```bash
npm run build   # produit dist/
```

## Publier une release

Les releases sont publiées automatiquement sur GitHub Packages via le workflow `publish.yml` au push d'un tag `v*` :

```bash
git tag v0.1.0
git push origin v0.1.0
```

## Contribuer

Voir [CLAUDE.md](./CLAUDE.md) pour les conventions de développement.
