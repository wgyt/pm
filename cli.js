#!/usr/bin/env -S node --experimental-fetch

import { Command } from './lib/commander/index.js';

const program = new Command();

program
  .name('pm')
  .description('A command line tool for managing your dependencies')
  .version('0.0.1');

program
  .command('install <package>')
  .description('isntall a package')
  .action((pkg) => {
    console.log(pkg);
  });

program.parse();
