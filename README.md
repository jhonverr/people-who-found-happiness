# 행복을 찾은 사람들 (People Who Found Happiness)

> 뮤지컬 극단 '행복을 찾은 사람들' 공식 웹사이트

## 🎭 프로젝트 소개

'행복을 찾은 사람들'은 2021년 창단된 '더열정 뮤지컬' 동호회 소속 극단의 공식 웹사이트입니다. 
이 사이트는 극단 소개, 공연 정보, 배우 소개, 갤러리, 공지사항 등을 제공합니다.

## 🛠 기술 스택

- **Frontend**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Language**: JavaScript (ES6+)
- **Styling**: Vanilla CSS
- **Type**: Static Website (No Backend/Database)

## 🚀 빠른 시작

### 사전 요구사항

- Node.js 18.x 이상
- npm 9.x 이상

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📦 배포

이 프로젝트는 여러 플랫폼에 배포할 수 있습니다:

### Vercel (권장)

1. [Vercel](https://vercel.com)에 GitHub 계정으로 로그인
2. 저장소 import
3. 자동으로 Vite 감지 및 배포

### Netlify

1. [Netlify](https://netlify.com)에 GitHub 계정으로 로그인
2. 저장소 import
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

```bash
# gh-pages 배포 (자동으로 빌드 후 배포)
npm run deploy
```

**주의**: GitHub Pages 사용 시 `vite.config.js`에서 `base` 경로를 저장소 이름으로 설정해야 합니다.

## 📝 콘텐츠 수정

### 공연 정보 수정

`src/App.jsx` 파일에서 `performances` 배열을 수정하세요:

```javascript
const performances = [
  {
    id: 1,
    title: "제5회 정기공연: 맘마미아",
    date: "2024. 12. 20 ~ 2024. 12. 22",
    venue: "성남아트센터 미디어홀",
    description: "전설적인 그룹 ABBA의 음악으로...",
    status: "Upcoming",  // "Upcoming" 또는 "Completed"
    statusLabel: "공연 예정"
  },
  // 추가 공연...
];
```

### 공지사항 수정

`src/App.jsx` 파일에서 `notices` 배열을 수정하세요:

```javascript
const notices = [
  {
    id: 1,
    date: "2024.05.01",
    title: "[공지] 신입 단원 모집 안내",
    content: "2024년 하반기 정기공연을 함께할..."
  },
  // 추가 공지...
];
```

### 연락처 정보 수정

`src/App.jsx` 파일의 Contact 섹션에서 다음을 수정할 수 있습니다:
- 네이버 카페 링크 (210번째 줄)
- 단장 이름 (216번째 줄)
- 카카오톡 링크 (221번째 줄)
- 이메일 주소 (227번째 줄)

### 이미지 및 비디오 교체

`src/assets/` 폴더의 파일을 교체하세요:
- `Logo.png` - 상단 로고
- `cafe_logo.png` - 네이버 카페 로고
- `Main.mp4` - 메인 히어로 비디오

## 📂 프로젝트 구조

```
people-who-found-happiness/
├── public/              # 정적 파일
├── src/
│   ├── assets/         # 이미지, 비디오 등
│   ├── components/     # React 컴포넌트
│   │   └── Header.jsx
│   ├── App.jsx         # 메인 앱 컴포넌트
│   ├── App.css         # 앱 스타일
│   ├── index.css       # 글로벌 스타일
│   └── main.jsx        # 진입점
├── .env.example        # 환경 변수 템플릿
├── .gitignore
├── index.html
├── package.json
└── vite.config.js      # Vite 설정
```

## 🔧 유지보수

### 의존성 업데이트

```bash
# 오래된 패키지 확인
npm outdated

# 패키지 업데이트
npm update

# 주요 버전 업그레이드 (주의 필요)
npm install react@latest react-dom@latest
```

### 코드 린트

```bash
npm run lint
```

## 🌐 연락처

- **이메일**: itmusical@naver.com
- **네이버 카페**: [더열정 뮤지컬](https://cafe.naver.com/univmusical)
- **카카오톡**: [단장 전수아](http://pf.kakao.com/_xhNQxmxl/chat)

## 📄 라이선스

이 프로젝트는 개인 프로젝트이며 '행복을 찾은 사람들' 극단의 소유입니다.

---

## 🔄 프로젝트 이관

이 프로젝트를 이관받으셨다면 다음 문서를 확인하세요:

**📘 [프로젝트 이관 가이드](./HANDOFF_GUIDE.md)** - 완전한 이관 절차 안내

이관 가이드에는 다음 내용이 포함되어 있습니다:
- Git 저장소 이전 방법
- 개발 환경 설정
- 배포 플랫폼별 상세 가이드
- 도메인 연결 방법
- 유지보수 가이드
- 체크리스트

---

**Made with ❤️ by People Who Found Happiness**
