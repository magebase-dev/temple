import { exec } from 'child_process';
import path from 'path';

describe('temple CLI', () => {
  it('should call the cloneRepo function with the provided --repo argument', (done) => {
    // Arrange: Path to the CLI entry point
    const cliPath = path.resolve(__dirname, '../src/index.ts');
    const repoUrl = 'https://github.com/example/repo.git';

    // Act: Run the CLI with the --repo argument
    exec(`ts-node ${cliPath} --repo ${repoUrl}`, (error, stdout, stderr) => {
      // Assert: Check output for expected clone message (simulate for now)
      expect(stdout).toContain(`Cloning repository: ${repoUrl}`);
      done();
    });
  });
});
