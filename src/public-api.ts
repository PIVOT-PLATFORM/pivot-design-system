/*
 * Public API Surface of @pivot/design-system
 *
 * EN17.8 — incubation du design system dans pivot-ui workspace.
 * Structure ADR-007 : tokens/ · cdk/ · components/ · scss/
 *
 * Point d'entrée unique — exporter uniquement ce qui est stable et documenté.
 */

// ─── Components ──────────────────────────────────────────────────────────────
// EN17.13 (Vague 0) — fondations : icône SVG inline + registre, enveloppe de champ.
export * from './components/icon/icon-registry';
export * from './components/icon/icon.component';
export * from './components/form-field/form-field.component';
export * from './components/confirm-dialog/confirm-dialog.component';
export * from './components/toast/toast.service';
export * from './components/toast/toast.component';
export * from './components/password-strength/password-policy.service';
export * from './components/password-strength/password-strength.component';
