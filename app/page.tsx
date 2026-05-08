 "use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const services = [
  {
    no: "01",
    title: "RESIDENTIAL",
    desc: "Tailored home styling with warm minimal balance."
  },
  {
    no: "02",
    title: "COMMERCIAL",
    desc: "Brand-focused spatial flow for hospitality and retail."
  },
  {
    no: "03",
    title: "BESPOKE",
    desc: "Custom furniture and finish curation for signature mood."
  },
  {
    no: "04",
    title: "CONSULTING",
    desc: "Design direction, budget plan, and site coordination."
  }
];

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % 2);
    }, 4800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="page">
      <header className="hero">
        <Image
          src="/images/image1.png"
          alt="Luxury interior scene 1"
          fill
          priority
          className={`heroBg heroSlide ${heroIndex === 0 ? "active" : ""}`}
        />
        <Image
          src="/images/image3.png"
          alt="Luxury interior scene 2"
          fill
          priority
          className={`heroBg heroSlide ${heroIndex === 1 ? "active" : ""}`}
        />
        <div className="heroShade" />

        <div className="wrap nav reveal">
          <p className="brand">LUNE</p>
          <ul>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>PROJECTS</li>
            <li>JOURNAL</li>
            <li>CONTACT</li>
          </ul>
          <a href="#contact" className="ghostBtn">
            CONSULTATION
          </a>
        </div>

        <div className="heroPager reveal revealDelay2" aria-hidden="true">
          <span className={heroIndex === 0 ? "on" : ""}>01</span>
          <div className="heroPagerLine" />
          <span className={heroIndex === 1 ? "on" : ""}>02</span>
        </div>

        <div className="heroContent reveal revealDelay1">
          <h1>
            Designing Spaces, <br /> Elevating Life.
          </h1>
          <p>
            공간은 삶을 담는 그릇. <br />
            LUNE 스타일의 조용한 럭셔리로 your everyday scene을 완성합니다.
          </p>
          <a href="#portfolio" className="lineLink">
            VIEW OUR WORK
          </a>
        </div>
      </header>

      <section className="about wrap sectionGap">
        <div className="aboutText reveal">
          <p className="eyebrow">ABOUT LUNE</p>
          <h2>
            Timeless Design, <br /> Thoughtful Living.
          </h2>
          <p>
            고객의 라이프스타일에 맞춘 high-end interior proposal을 제공합니다.
            시간이 지나도 아름다운 비율과 재료를 중심으로, 기능과 감도를 함께 설계합니다.
          </p>
          <a href="#contact" className="lineLink dark">
            LEARN MORE
          </a>
        </div>
        <div className="aboutImage reveal revealDelay1">
          <Image src="/images/image2.png" alt="About interior scene" fill className="crop arch" />
        </div>
      </section>

      <section className="wrap sectionGap" id="portfolio">
        <div className="headingRow reveal">
          <div>
            <p className="eyebrow dark">OUR SERVICES</p>
            <h2>We Create Meaningful Spaces.</h2>
          </div>
          <a href="#" className="lineLink dark">
            VIEW ALL SERVICES
          </a>
        </div>

        <div className="serviceGrid">
          {services.map((item, idx) => (
            <article className={`serviceCard reveal revealDelay${(idx % 3) + 1}`} key={item.title}>
              <div className="serviceHead">
                <span>{item.no}</span>
                <h3>{item.title}</h3>
              </div>
              <div className="serviceImgWrap">
                <Image src="/images/example2.jpg" alt={item.title} fill className={`crop pos${idx + 1}`} />
              </div>
              <p>{item.desc}</p>
              <a href="#" className="lineLink dark small">
                SEE MORE
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <Image src="/images/example2.jpg" alt="Contact background" fill className="ctaBg" />
        <div className="ctaShade" />
        <div className="wrap ctaInner reveal">
          <h2>
            Every Space <br /> Tells a Story.
          </h2>
          <p>
            당신의 이야기가 담길 공간, <br /> LUNE가 함께 만들어갑니다.
          </p>
          <a href="#contact" className="ghostBtn">
            START YOUR PROJECT
          </a>
        </div>
      </section>

      <section className="contact wrap sectionGap" id="contact">
        <div className="headingRow reveal">
          <div>
            <p className="eyebrow dark">CONTACT</p>
            <h2>Consultation Request</h2>
          </div>
        </div>
        <form className="reveal revealDelay1">
          <input type="text" placeholder="Name / 성함" />
          <input type="text" placeholder="Phone / 연락처" />
          <input type="text" placeholder="Project Type / 주거·상업" />
          <textarea rows={5} placeholder="Budget, area, preferred schedule..." />
          <button type="button">SEND INQUIRY</button>
        </form>
      </section>

      <footer className="wrap footer">
        <div className="footerCol">
          <p className="brand dark">LUNE</p>
          <p>공간의 가치를 디자인하는 프리미엄 인테리어 스튜디오</p>
        </div>
        <div className="footerCol">
          <p className="footerTitle">CONTACT</p>
          <p>hello@lune-studio.com</p>
          <p>+82 2-0000-0000</p>
          <p>Kakao Channel: @lune-design</p>
        </div>
        <div className="footerCol">
          <p className="footerTitle">SOCIAL</p>
          <p>Instagram / @lune.studio</p>
          <p>Behance / lune-interior</p>
          <p>Pinterest / lune-moodboard</p>
        </div>
      </footer>
    </main>
  );
}
