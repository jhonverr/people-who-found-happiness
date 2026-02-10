# 프로젝트 이관 가이드
# Project Handoff Guide - People Who Found Happiness (행복을 찾은 사람들)

> 뮤지컬 극단 웹사이트 프로젝트 이관을 위한 완전한 가이드입니다.

---

## 📋 목차 (Table of Contents)

1. [프로젝트 개요](#프로젝트-개요)
2. [기술 스택](#기술-스택)
3. [소스코드 이관](#소스코드-이관)
4. [개발 환경 설정](#개발-환경-설정)
5. [배포 및 호스팅](#배포-및-호스팅)
6. [도메인 연결](#도메인-연결)
7. [유지보수 가이드](#유지보수-가이드)
8. [문의 및 지원](#문의-및-지원)

---

## 🎭 프로젝트 개요

**프로젝트명**: 행복을 찾은 사람들 (People Who Found Happiness)  
**타입**: 뮤지컬 극단 소개 웹사이트  
**기술**: React + Vite (정적 웹사이트)  
**데이터베이스**: 없음 (모든 데이터는 소스코드 내 포함)

### 주요 기능
- 극단 소개
- 공연 정보 (과거 및 예정 공연)
- 배우 소개
- 갤러리
- 공지사항
- 연락처 (카카오톡, 이메일, 네이버 카페)

---

## 🛠 기술 스택

| 항목 | 기술 |
|------|------|
| **프레임워크** | React 19.2.0 |
| **빌드 도구** | Vite 7.2.4 |
| **언어** | JavaScript (ES6+) |
| **스타일링** | CSS (Vanilla CSS) |
| **패키지 매니저** | npm |
| **Node.js 요구사항** | Node.js 18.x 이상 권장 |

---

## 📦 소스코드 이관

### 1단계: Git 저장소 권한 이전

#### 방법 A: GitHub Organization/Repository 이전

현재 저장소가 GitHub에 있는 경우:

1. **저장소 설정으로 이동**
   - 저장소 페이지 → Settings → General → Transfer Ownership

2. **새 소유자에게 저장소 이전**
   ```
   New owner's GitHub username or organization name: [새로운-소유자-계정명]
   Type the repository name to confirm: people-who-found-happiness
   ```

3. **새 소유자는 이메일로 받은 초대 수락**

#### 방법 B: 새로운 저장소로 복제

저장소를 새로 만들어야 하는 경우:

1. **새 소유자가 GitHub에서 새 저장소 생성**
   ```bash
   Repository name: people-who-found-happiness
   Description: Musical theater group website
   Visibility: Public 또는 Private
   ```

2. **현재 저장소를 미러 클론**
   ```bash
   # 원본 저장소를 미러로 클론
   git clone --mirror https://github.com/[현재소유자]/people-who-found-happiness.git
   cd people-who-found-happiness.git
   
   # 새 저장소로 푸시
   git remote set-url origin https://github.com/[새소유자]/people-who-found-happiness.git
   git push --mirror
   ```

#### 방법 C: ZIP 파일로 전달

Git을 사용하지 않는 경우:

1. **프로젝트 폴더 압축**
   - `.git` 폴더를 제외하고 모든 파일 압축
   - `node_modules` 폴더는 제외 (설치 가능)

2. **압축 파일 전달**
   - 이메일, 클라우드 스토리지 등 활용

---

## 💻 개발 환경 설정

새 소유자가 개발 환경을 설정하는 방법입니다.

### 1단계: 필수 프로그램 설치

1. **Node.js 설치**
   - [Node.js 공식 사이트](https://nodejs.org/) 방문
   - LTS 버전 다운로드 및 설치 (18.x 이상)
   - 설치 확인:
     ```bash
     node --version  # v18.0.0 이상
     npm --version   # 9.0.0 이상
     ```

2. **Git 설치** (선택사항)
   - [Git 공식 사이트](https://git-scm.com/) 방문
   - 다운로드 및 설치

3. **코드 에디터 설치** (권장)
   - [Visual Studio Code](https://code.visualstudio.com/)
   - 또는 선호하는 에디터 사용

### 2단계: 프로젝트 클론 또는 다운로드

#### Git 사용 시:
```bash
# 저장소 클론
git clone https://github.com/[새소유자]/people-who-found-happiness.git

# 프로젝트 폴더로 이동
cd people-who-found-happiness
```

#### ZIP 파일 사용 시:
```bash
# 압축 해제 후 폴더로 이동
cd people-who-found-happiness
```

### 3단계: 의존성 설치

```bash
# npm을 사용하여 모든 패키지 설치
npm install
```

이 명령은 `package.json`에 정의된 모든 의존성을 설치합니다.

### 4단계: 로컬 개발 서버 실행

```bash
# 개발 서버 시작
npm run dev
```

브라우저에서 자동으로 열립니다 (보통 http://localhost:5173)

### 5단계: 빌드 테스트

```bash
# 프로덕션 빌드 생성
npm run build

# 빌드 결과 미리보기
npm run preview
```

---

## 🚀 배포 및 호스팅

이 프로젝트는 정적 웹사이트이므로 다양한 무료 호스팅 서비스를 사용할 수 있습니다.

### 옵션 1: Vercel (가장 권장)

#### 특징
- ✅ 무료 (개인 프로젝트)
- ✅ 자동 배포 (Git push 시)
- ✅ https 자동 제공
- ✅ 커스텀 도메인 지원
- ✅ 글로벌 CDN

#### 배포 방법

**1. Vercel 계정 생성**
- [Vercel](https://vercel.com/) 방문
- GitHub 계정으로 로그인

**2. 새 프로젝트 생성**
```
1. Dashboard → New Project
2. Import Git Repository → GitHub repo 선택
3. Framework Preset: Vite 자동 감지
4. Build & Development Settings:
   - Build Command: npm run build
   - Output Directory: dist
   - Install Command: npm install
5. Deploy 클릭
```

**3. 자동 배포 설정**
- GitHub에 push하면 자동으로 배포됩니다
- Pull Request도 자동 미리보기 생성

**4. 배포 완료**
- `https://[프로젝트명].vercel.app` 형태의 URL 제공

### 옵션 2: Netlify

#### 특징
- ✅ 무료 (개인 프로젝트)
- ✅ 자동 배포
- ✅ https 자동 제공
- ✅ 커스텀 도메인 지원

#### 배포 방법

**1. Netlify 계정 생성**
- [Netlify](https://www.netlify.com/) 방문
- GitHub 계정으로 로그인

**2. 새 사이트 생성**
```
1. Sites → Add new site → Import an existing project
2. Connect to Git provider → GitHub
3. Pick a repository → people-who-found-happiness 선택
4. Build settings:
   - Base directory: (비워둠)
   - Build command: npm run build
   - Publish directory: dist
5. Deploy site 클릭
```

**3. 배포 완료**
- `https://[랜덤문자열].netlify.app` 형태의 URL 제공

### 옵션 3: GitHub Pages

#### 특징
- ✅ 완전 무료
- ⚠️ 수동 배포 필요 (또는 GitHub Actions 설정)
- ✅ https 자동 제공

#### 배포 방법

**1. gh-pages 패키지 설치** (이미 package.json에 포함됨)
```bash
npm install
```

**2. vite.config.js 수정**

저장소 이름에 맞게 base 경로 설정:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/people-who-found-happiness/'  // ← 저장소 이름으로 변경
})
```

**3. GitHub 저장소 Settings 설정**
```
Settings → Pages → Source: gh-pages branch 선택
```

**4. 배포 실행**
```bash
npm run deploy
```

**5. 배포 완료**
- `https://[username].github.io/people-who-found-happiness/` 형태의 URL 제공

---

## 🌐 도메인 연결

커스텀 도메인 (예: www.happypeople.com)을 연결하려면:

### Vercel에서 도메인 연결

1. **Vercel Dashboard → 프로젝트 → Settings → Domains**
2. **도메인 입력** (예: `happypeople.com`)
3. **DNS 설정 안내에 따라 도메인 제공업체에서 설정**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Netlify에서 도메인 연결

1. **Site settings → Domain management → Add custom domain**
2. **도메인 입력 후 DNS 설정**
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: [사이트명].netlify.app
   ```

### 도메인 구매처
- [GoDaddy](https://www.godaddy.com/)
- [Namecheap](https://www.namecheap.com/)
- [가비아](https://www.gabia.com/) (한국)
- [후이즈](https://www.whois.co.kr/) (한국)

---

## 🔧 유지보수 가이드

### 공연 정보 수정

**파일**: `src/App.jsx`

```javascript
// 34번째 줄부터 performances 배열 수정
const performances = [
  {
    id: 1,
    title: "제5회 정기공연: 맘마미아",  // ← 공연명 수정
    date: "2024. 12. 20 ~ 2024. 12. 22",  // ← 날짜 수정
    venue: "성남아트센터 미디어홀",  // ← 장소 수정
    description: "공연 설명...",  // ← 설명 수정
    status: "Upcoming",  // Upcoming 또는 Completed
    statusLabel: "공연 예정"  // 공연 예정 또는 공연 종료
  },
  // 새 공연 추가 시 위 형식으로 추가
];
```

### 공지사항 수정

**파일**: `src/App.jsx`

```javascript
// 13번째 줄부터 notices 배열 수정
const notices = [
  {
    id: 1,
    date: "2024.05.01",  // ← 날짜
    title: "[공지] 제목",  // ← 제목
    content: "공지 내용..."  // ← 내용
  },
  // 새 공지 추가 시 위 형식으로 추가
];
```

### 연락처 정보 수정

**파일**: `src/App.jsx`

```javascript
// 210번째 줄 - 네이버 카페 링크
<a href="https://cafe.naver.com/univmusical" ...>

// 216번째 줄 - 단장 이름
<h3>단장 전수아</h3>

// 221번째 줄 - 카카오톡 링크
<a href="http://pf.kakao.com/_xhNQxmxl/chat" ...>

// 227번째 줄 - 이메일
<p>이메일: itmusical@naver.com</p>
```

### 로고 및 이미지 변경

이미지 파일 위치: `src/assets/`

- `Logo.png` - 상단 로고
- `cafe_logo.png` - 네이버 카페 로고
- `Main.mp4` - 메인 비디오

파일을 같은 이름으로 교체하거나, 파일명 변경 시 `src/App.jsx`에서 import 경로 수정:

```javascript
import logo from './assets/NewLogo.png';  // ← 새 파일명
```

### 스타일(디자인) 수정

**파일**: `src/index.css` (전역 스타일)  
**파일**: `src/App.css` (앱 전용 스타일)

색상, 폰트, 레이아웃 등을 CSS로 수정할 수 있습니다.

---

## 📞 문의 및 지원

### 기술 지원이 필요한 경우

1. **React 공식 문서**: https://react.dev/
2. **Vite 공식 문서**: https://vite.dev/
3. **커뮤니티 지원**:
   - [Stack Overflow](https://stackoverflow.com/)
   - [Reddit r/reactjs](https://www.reddit.com/r/reactjs/)

### 이관 과정에서 문제 발생 시

- Git/GitHub 문제: [GitHub Docs](https://docs.github.com/)
- 배포 문제:
  - Vercel: [Vercel Docs](https://vercel.com/docs)
  - Netlify: [Netlify Docs](https://docs.netlify.com/)

---

## ✅ 이관 체크리스트

프로젝트 이관 시 아래 항목을 확인하세요:

- [ ] 소스코드 이관 완료 (Git 저장소 또는 ZIP)
- [ ] 새 소유자가 로컬에서 개발 서버 실행 성공 (`npm run dev`)
- [ ] 빌드 테스트 성공 (`npm run build`)
- [ ] 호스팅 플랫폼 선택 및 배포 완료
- [ ] 배포된 사이트 접속 확인
- [ ] 도메인 연결 완료 (커스텀 도메인 사용 시)
- [ ] 유지보수 가이드 숙지
- [ ] 카카오톡, 네이버 카페 관리자 권한 이전 (필요 시)
- [ ] 이메일 계정 정보 전달 (필요 시)

---

## 📝 기타 참고사항

### 데이터베이스가 없는 이유

현재 이 프로젝트는 **정적 웹사이트**로 설계되었습니다. 모든 정보(공연, 공지사항 등)는 소스코드(`App.jsx`)에 직접 포함되어 있습니다.

**장점**:
- 간단한 구조
- 무료 호스팅 가능
- 빠른 성능
- 데이터베이스 관리 불필요

**향후 확장 가능성**:
만약 미래에 관리자 페이지에서 공연/공지를 관리하고 싶다면:
1. 백엔드 서버 추가 (Node.js + Express)
2. 데이터베이스 추가 (MongoDB, PostgreSQL 등)
3. CMS (Contents Management System) 도입

하지만 현재 규모에서는 정적 사이트로 충분합니다.

### 비용

현재 설정에서 **모든 것이 무료**입니다:
- ✅ 호스팅: Vercel/Netlify 무료 플랜
- ✅ https: 자동 제공
- ✅ 저장소: GitHub 무료

**유료 비용 발생 요소**:
- ❌ 커스텀 도메인 구매 (연간 1~2만원, 선택사항)

---

**이관 완료 후 궁금한 점이 있으면 언제든지 문의하세요!** 🎉
