#!/usr/bin/env node
import { simpleGit } from 'simple-git';

const args = process.argv.slice(2);
const repoIndex = args.indexOf('--repo');
if (repoIndex !== -1 && args[repoIndex + 1]) {
  const repoUrl = args[repoIndex + 1];
  const git = simpleGit();
  git.clone(repoUrl);
  console.log(`Cloning repository: ${repoUrl}`);
} else {
  console.log('No repository URL provided. Use --repo <url>');
}
