# Hugo 블로그

Nuxt 정적 사이트 대신 Hugo 기반 블로그로 전환한 브랜치입니다. `content/blog/*.md` 포스트만 남기고 새 Hugo 구조를 구성했습니다.

## 구성
- `config.toml`: 사이트 설정, 퍼머링크 `/blog/:filename/`
- `layouts/`: 기본 레이아웃, 홈, 리스트, 단일 포스트 템플릿
- `static/css/main.css`: 기본 스타일
- `archetypes/default.md`: 새 글 작성 시 기본 front matter

## 로컬 실행
1) Hugo Extended 설치  
   - macOS: `brew install hugo`  
   - Debian/Ubuntu: `sudo apt-get install hugo` (또는 공식 릴리스 바이너리 다운로드)  
   - Windows: Hugo Extended zip 다운로드 후 PATH 등록

2) 개발 서버 실행  
```bash
hugo server -D
```  
`http://localhost:1313`에서 확인합니다.

3) 정적 빌드  
```bash
hugo
```  
`public/` 폴더가 배포 산출물입니다.

## 비고
- 이 환경에서는 네트워크/권한 제약으로 `hugo` 설치를 시도했으나 거부되었습니다. 위 설치 방법으로 Hugo를 설치한 뒤 실행해주세요.
