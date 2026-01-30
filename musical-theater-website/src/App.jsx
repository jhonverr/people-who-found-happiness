import React, { useState } from 'react';
import Header from './components/Header';
import './index.css';
import logo from './assets/logo.png';
import cafeLogo from './assets/cafe_logo.png';

function App() {
  const [expandedPerfId, setExpandedPerfId] = useState(1);

  const performances = [
    {
      id: 1,
      title: "제5회 정기공연: 맘마미아",
      date: "2024. 12. 20 ~ 2024. 12. 22",
      venue: "성남아트센터 미디어홀",
      description: "전설적인 그룹 ABBA의 음악으로 구성된 전세계적인 사랑을 받는 뮤지컬. 소피가 자신의 결혼식에 아빠를 초대하기 위해 벌이는 유쾌하고 감동적인 에피소드를 담고 있습니다. 행복을 찾은 사람들이 선사하는 최고의 하모니를 기대해주세요.",
      status: "Upcoming",
      statusLabel: "공연 예정"
    },
    {
      id: 2,
      title: "제4회 정기공연: 빨래",
      date: "2024. 06. 15 ~ 2024. 06. 16",
      venue: "대학로 드림아트센터",
      description: "서울살이 5년차 나영과 몽골 청년 솔롱고의 이야기. 힘든 서울살이에도 서로를 위로하며 살아가는 우리 이웃들의 따뜻한 이야기. 빨래를 하며 슬픔도 얼룩도 털어내보세요.",
      status: "Completed",
      statusLabel: "공연 종료"
    },
    {
      id: 3,
      title: "제3회 정기공연: 김종욱 찾기",
      date: "2023. 11. 10 ~ 2023. 11. 12",
      venue: "대학로 예술극장",
      description: "첫사랑 주식회사를 운영하는 그 남자와 첫사랑을 찾으려는 그 여자. 인도에서 만난 첫사랑 '김종욱'을 찾아나서는 유쾌하고 로맨틱한 여정. 당신의 첫사랑은 안녕하신가요?",
      status: "Completed",
      statusLabel: "공연 종료"
    }
  ];

  return (
    <div className="app-container">
      <Header />

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">무대의 마법을 만나보세요</h1>
          <p className="hero-subtitle">
            열정, 드라마, 그리고 잊을 수 없는 순간들. <br />
            이야기가 살아 숨 쉬는 여정에 함께하세요.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className="content-section">
        <div className="section-container">
          <h2 className="section-title">극단 소개</h2>
          <p className="section-desc">
            '행복을 찾은 사람들'은 2021년 창단된 '더열정 뮤지컬' 동호회 소속 극단입니다. <br />
            우리는 무대 위에서 인간의 희로애락을 노래하며, 함께하는 모든 이들에게 행복을 전하고자 합니다.
          </p>
          <div className="intro-grid">
            <div className="intro-card">
              <h3>Since 2021</h3>
              <p>열정으로 시작된 우리의 이야기.</p>
            </div>
            <div className="intro-card">
              <h3>The Passion</h3>
              <p>더열정 뮤지컬과 함께하는 공연 활동.</p>
            </div>
            <div className="intro-card">
              <h3>Happiness</h3>
              <p>무대에서 찾는 진정한 행복.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="content-section alt-bg">
        <div className="section-container">
          <h2 className="section-title">공연 정보</h2>
          <div className="performance-list">
            {performances.map((perf) => (
              <div
                key={perf.id}
                className={`perf-card ${expandedPerfId === perf.id ? 'active' : ''}`}
                onClick={() => setExpandedPerfId(perf.id === expandedPerfId ? null : perf.id)}
              >
                <div className="perf-header">
                  <div className="perf-title-group">
                    <h3>{perf.title}</h3>
                    <p className="perf-date">{perf.date}</p>
                  </div>
                  <span className={`perf-status ${perf.status === 'Upcoming' ? 'upcoming' : ''}`}>
                    {perf.statusLabel}
                  </span>
                </div>
                {expandedPerfId === perf.id && (
                  <div className="perf-details">
                    <p className="perf-venue">장소: {perf.venue}</p>
                    <p className="perf-description">{perf.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cast Section */}
      <section id="cast" className="content-section">
        <div className="section-container">
          <h2 className="section-title">배우 소개</h2>
          <div className="cast-grid">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="cast-card">
                <div className="cast-placeholder"></div>
                <h3>배우 이름 {item}</h3>
                <p>주연 / 역할명</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="content-section alt-bg">
        <div className="section-container">
          <h2 className="section-title">갤러리</h2>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-item">
                <div className="gallery-placeholder">공연 장면 {item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Section */}
      <section id="notice" className="content-section">
        <div className="section-container">
          <h2 className="section-title">공지사항</h2>
          <ul className="notice-list">
            <li>
              <span className="notice-date">2024.05.01</span>
              <span className="notice-content">[공지] 신입 단원 모집 안내 (오디션 일정)</span>
            </li>
            <li>
              <span className="notice-date">2024.04.20</span>
              <span className="notice-content">[티켓] '한여름 밤의 꿈' 티켓 오픈 안내</span>
            </li>
            <li>
              <span className="notice-date">2024.03.15</span>
              <span className="notice-content">[소식] 제5회 뮤지컬 페스티벌 대상 수상!</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="content-section dark-bg">
        <div className="section-container">
          <h2 className="section-title text-white">Contact</h2>

          <div className="contact-content">
            <div className="cafe-link-container">
              <p className="contact-label">더열정 뮤지컬 카페 바로가기</p>
              <a href="https://cafe.naver.com/univmusical" target="_blank" rel="noopener noreferrer">
                <img src={cafeLogo} alt="The Passion Musical Cafe" className="cafe-logo" />
              </a>
            </div>

            <div className="director-info">
              <h3>단장 전수아</h3>
              <p>"함께하는 즐거움, 무대 위의 감동을 약속드립니다."</p>
            </div>

            <div className="contact-actions">
              <a href="http://pf.kakao.com/_xhNQxmxl/chat" target="_blank" rel="noopener noreferrer" className="kakao-btn">
                전수아 단장에게 카카오톡 문의하기
              </a>
            </div>

            <div className="contact-details text-white">
              <p>이메일: itmusical@naver.com</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
