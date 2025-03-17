import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'My Site',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
      { icon: 'gitlab', mode: 'link', content: 'https://gitlab.com/web-infra-dev/rspress' },
      { icon: 'x', mode: 'link', content: 'https://example.com' },
      { icon: 'bluesky', mode: 'link', content: 'https://www.linkedin.com/in/yourname' },
      { icon: 'linkedin', mode: 'link', content: 'https://www.linkedin.com/in/yourname' },
      { icon: 'discord', mode: 'link', content: 'https://discord.gg/yourserver' },
      { icon: 'youtube', mode: 'link', content: 'https://www.youtube.com/channel/yourchannel' },
    ],
  },
});
