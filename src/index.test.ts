import { describe, it, expect, vi } from 'vitest';
import * as simpleGit from 'simple-git';

// Import the CLI entry point
import '../src/index';

describe('temple CLI', () => {
  it('should call git clone with the provided --repo argument', async () => {
    const cloneMock = vi.fn();
    vi.spyOn(simpleGit, 'simpleGit').mockReturnValue({ clone: cloneMock } as any);

    // Simulate process.argv
    process.argv = ['node', 'temple', '--repo', 'https://github.com/example/repo.git'];

    // Re-require the CLI to trigger argument parsing
    await import('../src/index');

    expect(cloneMock).toHaveBeenCalledWith('https://github.com/example/repo.git');
  });
});
