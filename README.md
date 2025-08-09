# temple

A TypeScript CLI tool to clone, configure, and initialize repositories.


## Features
- Clone a repository from a given URL
- (Planned) Configure and initialize the repository with custom options

## Usage

### Install dependencies
```
npm install
```

### Build
```
npm run build
```

### Run CLI (dev)
```
npm run dev -- --repo <repository-url>
```

### Run CLI (built)
```
node dist/index.js --repo <repository-url>
```

### Run tests
```
npm test
```

## Environment Setup
- Node.js >= 18
- npm >= 9

## TDD Usage
- Write a failing test for the next smallest unit of behavior
- Implement the simplest code to make the test pass
- Run `npm test` to confirm all tests pass
- Commit only on clean GREEN
- Repeat for each new feature or behavior

---

## License
MIT
