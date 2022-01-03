import type { Configuration } from 'webpack';

module.exports = {
  entry: {
    background: 'src/background.ts',
    didCommLinks: 'src/content-scripts/didCommLinks.ts'
  },
  optimization: {
    runtimeChunk: false
  }
} as Configuration;
