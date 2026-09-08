import { oxfmtConfig } from '@marcalexiei/oxfmt-config';

export default {
  ...oxfmtConfig,
  // Generated files: the profile cards a workflow writes, and the lockfile pnpm writes.
  ignorePatterns: ['profile/*.svg', 'pnpm-lock.yaml'],
};
