import { execSync } from 'child_process';
import * as path from 'path';
import * as fs from 'fs';

function publishDeployBranch() {
  const distDir = path.resolve(process.cwd(), 'dist');
  if (!fs.existsSync(distDir)) {
    console.error('❌ dist/ directory not found! Run npm run build first.');
    process.exit(1);
  }

  console.log('🚀 Preparing to publish compiled dist/ static files to origin/deploy branch...');

  try {
    // 1. Initialize a temporary git repository inside dist/
    const distGitDir = path.join(distDir, '.git');
    if (fs.existsSync(distGitDir)) {
      fs.rmSync(distGitDir, { recursive: true, force: true });
    }

    execSync('git init', { cwd: distDir, stdio: 'inherit' });
    execSync('git config user.name "Antigravity Deployer"', { cwd: distDir, stdio: 'inherit' });
    execSync('git config user.email "deployer@souliography.com"', { cwd: distDir, stdio: 'inherit' });

    execSync('git checkout -b deploy', { cwd: distDir, stdio: 'inherit' });
    execSync('git remote add origin https://github.com/trueclickseo-ctrl/DestinyMatrix.git', { cwd: distDir, stdio: 'inherit' });

    console.log('📦 Staging 30,601 static HTML pages and bundle assets...');
    execSync('git add -A', { cwd: distDir, stdio: 'inherit' });

    console.log('💾 Committing compiled production build...');
    execSync('git commit -m "Hostinger Deploy: Compiled 30,601 static pages & assets"', { cwd: distDir, stdio: 'inherit' });

    console.log('⬆️ Force pushing compiled static output to origin/deploy...');
    execSync('git push origin deploy --force', { cwd: distDir, stdio: 'inherit' });

    console.log('\n✅ Successfully published compiled dist/ to origin/deploy branch!');
    console.log('Hostinger Git deployment will now deploy pre-built static HTML files directly to public_html.\n');

  } catch (err) {
    console.error('❌ Error publishing deploy branch:', err.message);
    process.exit(1);
  }
}

publishDeployBranch();
