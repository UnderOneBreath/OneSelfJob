import Image from "next/image";
import HeadbarMenu from "../components/headbarMenu";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-[320px] items-center">
      <div className="relative justify-center w-full max-w-[900px]">
        <HeadbarMenu />
      </div>
      <div className="hero-container">
        <Image
          src="/image/preview.png"
          alt="Preview"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay">
          <h1 className="hero-title">OneSelfJob</h1>
          <div className="hero-subtitle">
            Пространство, где талант <br /> становится брендом!
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="section-content">
          <div className="max-w-[600px]">

            <h1 className="main-title pt-0">О нас</h1>
            <p className="text-section">
              Мы — динамичный стартап, созданный для художников и творческих
              профессионалов, которые хотят строить личный бренд и развивать бизнес
              через социальную сеть. Наша платформа объединяет художников, дизайнеров,
              иллюстраторов, скульпторов, фотографов и фрилансеров, предоставляя
              удобное пространство для создания портфолио, которое подчеркнёт вашу
              уникальность и профессионализм.
            </p>
            <p className="text-lg">
              Здесь вы сможете собирать лучшие работы в одном месте, делиться
              историями, вдохновлять других, находить клиентов и расширять аудиторию.
            </p>
            <div>
              <h1 className="subtitle pt-8">Наша миссия</h1>
              <p className="text-section">
                Мы стремимся создать сообщество, где каждый творческий человек сможет
                раскрыть потенциал, получить поддержку и найти возможности для роста.
                Верим, что искусство и дизайн способны менять мир, и хотим помочь
                талантам сделать свои идеи заметными и востребованными.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}