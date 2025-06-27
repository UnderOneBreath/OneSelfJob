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
          <p className="hero-title">OneSelfJob</p>
          <p className="hero-subtitle">
            Пространство, где талант <br /> становится брендом!
          </p>
        </div>
      </div>
      <div className="section-container">
        <div className="section-content max-w-full md:max-w-[600px]">
          <h1 className="main-title">Ваши вопросы и идеи — всегда приветствуются!</h1>
          <p className="text-section">
            Пишите нам на e-mail, и мы обязательно оперативно ответим. А еще приглашаем вас в наши соцсети — будем рады вашему общению и поддержке!
          </p>
          <h1 className="subtitle">Наши контакты</h1>
          <div className="flex items-start text-lg pb-[40px] flex-wrap">
            <p className="mr-2">Электранная почта</p>
            <a href="mailto:oneselfdata@gmail.com">oneselfdata@gmail.com</a>
          </div>
          <span className="text-lg pb-[16px]">Социальные сети OneSelfJob</span>
          <div className="social-row">
            <a href="https://t.me/OneSelfjob" className="flex items-center" target="_blank" rel="noopener noreferrer">
              <img alt="social" loading="lazy" decoding="async" className="social-icon" src="/icon_social_networks/telegram-app-96.svg"/>
            </a>
            <a href="https://www.youtube.com/@OneSelfjob" className="flex items-center" target="_blank" rel="noopener noreferrer">
              <img alt="social" loading="lazy" decoding="async" className="social-icon" src="/icon_social_networks/youtube-96.svg"/>
            </a>
            <a href="https://vk.com/club223707308" className="flex items-center" target="_blank" rel="noopener noreferrer">
              <img alt="social" loading="lazy" decoding="async" className="social-icon" src="/icon_social_networks/vk-com-96.svg"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}