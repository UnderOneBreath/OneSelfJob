import ContentsMenu from "@/components/ContentsMenu";
import HeadbarMenu from "../components/headbarMenu";
import Link from "next/link";

const url = process.env.NEXT_PUBLIC_URL_CLIENT || "";

export default function PolicyPage() {
  return (
    <div className="flex flex-col min-h-screen min-w-[320px] items-center">
      <div className="relative justify-center w-full max-w-[900px]">
            <HeadbarMenu />
      </div>
      <div className="section-content">
        <div className="main-title tp-[60px] wrap-anywhere md:text-[52px] text-[#3B82F6]">Политика <br />конфиденциальности</div>
		  </div>
      <div className="section-container">
        	<div className="section-content pt-4">
            <div className="max-w-[900px] pr-8">
              <h1 className="main-title">
                Политика конфиденциальности в отношении персональных данных ресурса OneSelfJob от 01.10.2023
              </h1>
              <div className="rules_container">
                <div className="rules_text_container">
                    <div className="rules_text">
                    {/* 1. Общие положения */}
                    <details>
                      <summary>
                        <h2>1. Общие положения</h2>
                      </summary>
                      <p>
                        1.1. Настоящим Общество с ограниченной ответственностью «Уансэлф» (далее по тексту – <b>«Общество»</b>) доводит до Вашего сведения положения настоящей Политики конфиденциальности в отношении персональных данных (далее по тексту – <b>«Политика»</b>) Пользователей (выступающих Заказчиками и Исполнителями в терминологии Пользовательского соглашения Ресурса OneSelfJob, далее по тексту – <b>«Пользовательское соглашение»</b>), которые используют Ресурс OneSelfJob (далее по тексту – <b>«Пользователь»</b>), разработанную и утверждённую во исполнение требований п. 2 ч. 1 ст. 18.1 Федерального закона от 27.07.2006 года № 152-ФЗ «О персональных данных» (далее по тексту – <b>«Закон о ПДн»</b>) в целях обеспечения защиты прав Пользователей при обработке Персональных данных.
                        <br />
                        Под Ресурсом OneSelfJob (именуемом по тексту – <b>«Ресурс»</b>) в настоящей Политике понимается администрируемый Обществом веб-сайт, расположенный в сети «Интернет» по адресу:{" "}
                        <Link className="link" target="_blank" href={url}>
                          {url}
                        </Link>{" "}
                        (включая все уровни домена), далее именуемый <b>«Сайт»</b>, и/или мобильное приложение (отдельные самостоятельные версии для операционных систем iOS и Android, размещенные в официальных магазинах приложений AppStore и Google Play, соответственно) (далее по тексту – <b>«Мобильное приложение»</b>), представляющие собой совокупность объектов интеллектуальной собственности Общества, в том числе программ для ЭВМ (исключительные права на которые принадлежат Обществу), предназначенные, с одной стороны, для поиска/привлечения Пользователей, заинтересованных в дистанционном приобретении (получении) услуг / работ / товаров (продукции, контента и т.п.), предлагаемых / выполняемых / продаваемых Исполнителями (далее по тексту – <b>«Услуги»</b>), путем размещения представленной Исполнителями информации о реализуемых через Ресурс Услугах, а с другой стороны, представляющие Пользователям удобный и прозрачный сервис, помогающий быстро найти, выбрать и приобрести интересующие их Услуги на Ресурсе.
                        <br />
                        Ресурс, среди прочего, предоставляет доступ к электронному Каталогу Услуг, реализуемых на Ресурсе (на Сайте и/или в Мобильном приложении), а также предоставляет Пользователю (Заказчику) возможность ознакомиться с перечнем услуг, сервисов и продуктов, доступных и реализуемых на Ресурсе; возможность для Пользователей осуществлять поиск запрашиваемых услуг по Каталогу Услуг в соответствии с заданными Пользователями (Заказчиками) характеристиками и/или параметрами запроса либо путем уточнения Пользователями направленных ими запросов на Ресурсе (на Сайте и/или в Мобильном приложении).
                        <br />
                        1.2. Политика распространяется на отношения в области обработки Персональных данных, предоставленных Обществу Пользователями (Заказчиками и Исполнителями), в случаях, если указанные выше Пользователи являются физическими лицами, когда Общество действует в качестве оператора Персональных данных в том смысле, в каком данный термин определен в Законе о ПДн, самостоятельно либо привлекает для цели обработки Персональных данных специализированные организации, на основании поручений и заключаемых с этими организациями соглашений об обработке Персональных данных, как до, так и после даты утверждения и публикации в свободном доступе в сети «Интернет» настоящей Политики.
                        <br />
                        1.3. Во исполнение требований части 2 ст. 18.1 Закона о ПДн настоящая Политика публикуется в свободном доступе в информационно-телекоммуникационной сети «Интернет» (на Сайте и в Мобильном приложении) путем размещения по адресу:{" "}
                        <Link className="link" target="_blank" href={url}>
                          {url}
                        </Link>
                        .<br />
                        1.4. Если положениями Политики прямо не предусмотрено иное, термины (используемые по тексту с заглавной буквы) и определения, применяются в значении, в котором данные термины и определения приведены в Пользовательском соглашении (актуальная версия которого размещена в свободном публичном доступе на Сайте по адресу:{" "}
                        <Link className="link" target="_blank" href={url}>
                          {url}
                        </Link>{" "}
                        и в Мобильном приложении), либо в значении в соответствии с законодательством Российской Федерации, а также обычаями делового оборота (если в Пользовательском соглашении значение данных терминов и определений не установлено).
                        <br />
                        1.5. Положения настоящей Политики определяются в соответствии со следующими нормативными актами:
                        <br />
                        1.5.1. Федеральным законом от 27.07.2006 г. № 152-ФЗ «О персональных данных»;
                        <br />
                        1.5.2. Указом Президента Российской Федерации от 06.03.1997 года № 188 «Об утверждении перечня сведений конфиденциального характера»;
                        <br />
                        1.5.3. Постановлением Правительства Российской Федерации от 15.09.2008 года № 687 «Об утверждении Положения об особенностях обработки персональных данных, осуществляемой без использования средств автоматизации»;
                        <br />
                        1.5.4. Постановлением Правительства Российской Федерации от 01.11.2012 года № 1119 «Об утверждении требований к защите персональных данных при их обработке в информационных системах персональных данных»;
                        <br />
                        1.5.5. иными правовыми актами Российской Федерации и нормативными документами уполномоченных органов государственной власти.
                        <br />
                      </p>
                    </details>
                    {/* 2. Способы, цели обработки ... */}
                    <details>
                      <summary>
                        <h2>
                          2. Способы, цели обработки и действия, осуществляемые с Персональными данными. Права Пользователей (Заказчиков и Исполнителей) - субъектов Персональных данных
                        </h2>
                      </summary>
                      <p>
                        2.1. Общество осуществляет обработку Персональных данных Пользователей с использованием средств автоматизации, а также без использования таких средств.
                        <br />
                        2.2. Обработка Персональных данных Пользователей осуществляется в следующих целях:
                        <br />
                        2.2.1. для выполнения обязательств Общества перед Пользователями в рамках Пользовательского соглашения, в том числе для надлежащего исполнения заказов Пользователей;
                        <br />
                        2.2.2. для обеспечения функционирования и улучшения качества Ресурса, в том числе для проведения статистических и иных исследований на основе обезличенных данных;
                        <br />
                        2.2.3. для направления Пользователям уведомлений, касающихся исполнения обязательств Общества перед Пользователями, в том числе касающихся изменений в работе Ресурса;
                        <br />
                        2.2.4. для осуществления маркетинговых исследований и акций, направленных на улучшение качества услуг, предоставляемых Обществом;
                        <br />
                        2.2.5. для выполнения требований законодательства Российской Федерации.
                        <br />
                        2.3. Общество вправе осуществлять следующие действия с Персональными данными Пользователей:
                        <br />
                        2.3.1. сбор;
                        <br />
                        2.3.2. запись;
                        <br />
                        2.3.3. систематизация;
                        <br />
                        2.3.4. накопление;
                        <br />
                        2.3.5. хранение;
                        <br />
                        2.3.6. уточнение (обновление, изменение);
                        <br />
                        2.3.7. извлечение;
                        <br />
                        2.3.8. использование;
                        <br />
                        2.3.9. распространение (в том числе передача третьим лицам);
                        <br />
                        2.3.10. обезличивание;
                        <br />
                        2.3.11. блокирование;
                        <br />
                        2.3.12. удаление;
                        <br />
                        2.3.13. уничтожение.
                        <br />
                        2.4. Пользователь имеет право:
                        <br />
                        2.4.1. на доступ к своим Персональным данным, обработка которых осуществляется Обществом;
                        <br />
                        2.4.2. на получение информации об обработке своих Персональных данных, в том числе о целях обработки, о категориях обрабатываемых данных, о сроках их хранения, о порядке осуществления прав, предусмотренных настоящей Политикой;
                        <br />
                        2.4.3. на внесение своих Персональных данных в Общество, если они являются неполными или неточными;
                        <br />
                        2.4.4. на удаление своих Персональных данных, обработка которых осуществляется Обществом, в случаях, предусмотренных законодательством Российской Федерации;
                        <br />
                        2.4.5. на отзыв согласия на обработку своих Персональных данных, в случаях, когда обработка осуществляется на основании согласия Пользователя.
                        <br />
                      </p>
                    </details>
                    {/* 3. Принципы обработки Персональных данных */}
                    <details>
                      <summary>
                        <h2>3. Принципы обработки Персональных данных</h2>
                      </summary>
                      <p>
                        3.1. Общество при обработке Персональных данных Пользователей руководствуется следующими принципами:
                        <br />
                        3.1.1. законность целей и способов обработки Персональных данных;
                        <br />
                        3.1.2. добросовестность;
                        <br />
                        3.1.3. разумность;
                        <br />
                        3.1.4. соответствие целей и способов обработки Персональных данных требованиям законодательства Российской Федерации;
                        <br />
                        3.1.5. ограничение объема и содержания обрабатываемых Персональных данных до необходимого минимума в связи с целями их обработки;
                        <br />
                        3.1.6. обеспечение точности, достаточности и актуальности Персональных данных по отношению к целям их обработки;
                        <br />
                        3.1.7. хранение Персональных данных в форме, позволяющей определить субъекта Персональных данных, не дольше чем это необходимо для достижения целей обработки Персональных данных;
                        <br />
                        3.1.8. уничтожение или обезличивание Персональных данных по достижении целей обработки или в случае утраты необходимости в достижении таких целей.
                        <br />
                      </p>
                    </details>
                    {/* 4. Основания и сроки хранения Персональных данных */}
                    <details>
                      <summary>
                        <h2>4. Основания и сроки хранения Персональных данных</h2>
                      </summary>
                      <p>
                        4.1. Общество обрабатывает Персональные данные Пользователей на основании:
                        <br />
                        4.1.1. согласия Пользователя на обработку его Персональных данных;
                        <br />
                        4.1.2. договора, стороной которого является Пользователь, либо договора, заключаемого в интересах Пользователя;
                        <br />
                        4.1.3. обязанности Общества по закону;
                        <br />
                        4.1.4. иных основаниях, предусмотренных законодательством Российской Федерации.
                        <br />
                        4.2. Сроки хранения Персональных данных Пользователей зависят от целей обработки, но в любом случае не могут превышать:
                        <br />
                        4.2.1. срока, необходимого для достижения целей обработки Персональных данных;
                        <br />
                        4.2.2. срока, установленного законодательством Российской Федерации.
                        <br />
                      </p>
                    </details>
                    {/* 5. Меры по защите Персональных данных */}
                    <details>
                      <summary>
                        <h2>5. Меры по защите Персональных данных</h2>
                      </summary>
                      <p>
                        5.1. Общество принимает необходимые и достаточные организационные и технические меры для обеспечения безопасности Персональных данных Пользователей и защиты их от несанкционированного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий в отношении Персональных данных.
                        <br />
                        5.2. К таким мерам, в частности, относятся:
                        <br />
                        5.2.1. ограничение доступа к Персональным данным;
                        <br />
                        5.2.2. использование средств криптографической защиты информации;
                        <br />
                        5.2.3. обеспечение сохранности носителей Персональных данных;
                        <br />
                        5.2.4. проведение обучения работников Общества, имеющих доступ к Персональным данным, по вопросам обеспечения безопасности Персональных данных;
                        <br />
                        5.2.5. иные меры, предусмотренные законодательством Российской Федерации.
                        <br />
                      </p>
                    </details>
                    {/* 6. Дополнения и изменения в настоящую Политику */}
                    <details>
                      <summary>
                        <h2>6. Дополнения и изменения в настоящую Политику</h2>
                      </summary>
                      <p>
                        6.1. Общество вправе в любой время вносить изменения и дополнения в настоящую Политику.
                        <br />
                        6.2. Все изменения и дополнения к настоящей Политике вступают в силу с момента их публикации на Сайте, если иное не предусмотрено условиями настоящей Политики или законодательством Российской Федерации.
                        <br />
                        6.3. Пользователи обязаны самостоятельно отслеживать изменения и дополнения к настоящей Политике.
                        <br />
                      </p>
                    </details>
                    {/* 7. Заключительные положения */}
                    <details>
                      <summary>
                        <h2>7. Заключительные положения</h2>
                      </summary>
                      <p>
                        7.1. Настоящая Политика является публичной офертой и регулирует отношения между Обществом и Пользователями в части обработки Персональных данных.
                        <br />
                        7.2. Все споры, возникающие в связи с обработкой Персональных данных, подлежат разрешению в соответствии с законодательством Российской Федерации.
                        <br />
                        7.3. Если по каким-либо причинам одно или несколько положений настоящей Политики будут признаны недействительными или не подлежащими исполнению, остальные положения Политики останутся в силе и будут исполняться в полном объеме.
                        <br />
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </div>
				    <ContentsMenu></ContentsMenu>
    		  </div>
      </div>
    </div>
  );
}