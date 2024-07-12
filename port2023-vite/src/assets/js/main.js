import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // 프로젝트의 루트 디렉토리 설정
  build: {
    outDir: '../public', // 빌드 후 생성될 디렉토리 설정
  },
  // 엔트리 포인트 설정
  optimizeDeps: {
    entryPoints: ['assets/js/main.js'], // 엔트리 포인트로 사용할 파일 경로 설정
  },
});
