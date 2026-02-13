// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserOrOrgSite = Boolean(
  owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`
);

const site = process.env.SITE ?? (owner ? `https://${owner}.github.io` : 'https://example.com');
const base = isGithubActions && repo && !isUserOrOrgSite ? `/${repo}/` : '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});
