import { useMemo } from 'react';

import logo from './assets/icons/Logo-03 1.png'
import pharmacy from './assets/icons/444-04 1.png'
import calendar from './assets/icons/Group 7.png'
import question from './assets/icons/OBJECTS (1).png'
import pcLogo from './assets/icons/_Ð¨Ð°Ñ€_1.png'
import inst from './assets/icons/Instagram_logo_2016-01 1.png'
import fb from './assets/icons/Facebook_f_logo_(2019)-01 1.png'
import tt from './assets/icons/tik tok 1.png'
import linkedIn from './assets/icons/LinkedIn_icon 1.png'
import calendar1 from './assets/images/calendar/image copy 2.png'
import calendar2 from './assets/images/calendar/image copy 3.png'
import calendar3 from './assets/images/calendar/image copy.png'
import calendar4 from './assets/images/calendar/image.png'
import lastImage from './assets/images/image copy 14.png';

import images from "./data/images";
import presentImages from './data/presentImages'
import mingGameImages from './data/mindGame'
import mafiaImages from './data/mafia';
import footballImages from './data/football'
import filmsImages from './data/films'

import CustomSlider from "./components/custom.slider";

import './App.css';

function App() {

  const welcomeText = `Якщо Ви читаєте це, то Ви зробили правильний вибір, приєднавшись до нашої компанії.
  «Подорожник» — лідер можливостей. Наша компанія постійно розвивається, відкривається все більше аптек та офісів. Ми весь час запускаємо нові напрямки діяльності й завжди потребуємо цілеспрямованих, охочих здобувати нові знання працівників.`

  const x880 = useMemo(()=>
    window.screen.width <= 880
  ,[window.screen.width]) 

  return (
    <div>
      <div className="header border-bottom">
        <div className='header__background border-bottom'>
        <div className='header__content'>
          <img src={logo} alt='logo' className='logo'/>
          <div className='header__title'>Гід для нових співробітників</div>
          <div className='header__text'>На цій сторінці ви знайдете відповіді на всі найпоширеніші питання наших нових працівників та корисну інформацію про роботу в Центральному офісі.</div>
        </div>
        </div>
      </div>

      <div className='welcome'>
        <div className='welcome__info-section'>
          <div className='welcome__text-container'>
            <div className='welcome__title'>Вітаємо в Подорожнику!</div>
            <div className='welcome__text'>{welcomeText}</div>
          </div>
          <div>
            <img className='welcome__logo' src={pharmacy} alt='pharmacy'/>
          </div>
        </div>
        <div className='welcome__slider'>
          <CustomSlider isButtonOutside>
          {images.map((image, index) => {
            console.log(image,index,'kjfdkjdfjkdf')
            return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
          })}
        </CustomSlider>
        </div>
      </div>

      <div className='first-day'>
          <div className='first-day__text-container'>
            <div className='first-day__title'>Перший робочий день</div>
            <div className='first-day__text'>
              <div>У перший робочий день Вас зустріне фахівець HR відділу і буде супроводжувати протягом дня.</div>
              <div style={{marginTop:'0.5rem'}}>Вас чекає:</div>
              <ol>
                <li>Знайомство та спілкування з директором безпеки;</li>
                <li>Оформлення у відділі кадрів</li>
                <li>Зустріч з HRPP (презентація компанії, підписання офферу, обговорення організаційних моментів);</li>
                <li>Зустріч з системним адміністратором для видачі всієї необхідної техніки;</li>
                <li>Знайомство з керіником та колегами.</li>
              </ol>

            </div>
           

          </div>
          <img className='first-day__logo' src={calendar} alt='calendar'/>
      </div>

      <div className='questions'>
        <div className='questions__green-section'>
          <div className='questions__green-section-title'>
          Найчастіші питання нового працівника
          </div>
          <div className='questions__green-section-container'>
          <div className='questions__green-section-container-column1'>
            <div className='questions__green-section-container-text'>
              <div className='questions__green-section-container-text-title'>
              Який графік роботи?
              </div>
              <div className='questions__green-section-container-text-content'>
              Працівники офісу працюють 5\2 з 09:00 до 18:00, обід з 13:00 до 14:00.
              </div>
            </div>
            <div className='questions__green-section-container-text'>
            <div className='questions__green-section-container-text-title'>
            Де можна пообідати?
              </div>
              <div className='questions__green-section-container-text-content'>
              В офісі є кухня, де є необхідне обладнання, щоб розігріти та зберігати Вашу їжу. Якщо Ви захочете випити чай або каву на кожному поверсі є кавові машини. 
Локації де можна пообідати за межами офісу: 1708 Pizza di Napoli; «Інтемпо»; Гараж.
              </div>
            </div>
            <div className='questions__green-section-container-text'>
            <div className='questions__green-section-container-text-title'>
            Як і коли нараховується
заробітна плата?
              </div>
              <div className='questions__green-section-container-text-content'>
              Всі питання, які у вас виникають щодо заробітної плати ви обговорюєте з своїм керівником
              </div>
            </div>
          </div>
          <div className='questions__green-section-container-column2'>
            <div className='questions__green-section-container-text'>
            <div className='questions__green-section-container-text-title'
           
            >
            Коли можна йти у відпустку?
              </div>
              <div className='questions__green-section-container-text-content'>
              На рік надається 24 календарні дні оплачуваної відпуски. Перший раз можна йти у відпустку після 6 місяців роботи. Відпустка за власний рахунок надається за погодженням керівника.
              </div>
            </div>
            <div className='questions__green-section-container-button'
             onClick={()=>{
              window.open('https://docs.google.com/document/d/1mGjacYZ0AD7rn-9ej8fwBtI8RkD4UDQx-iO1cHY5v84/edit?usp=sharing')
            }}
            >Як оформити відпустку?</div>
            <div className='questions__green-section-container-text'>
              <div className='questions__green-section-container-text-title'>
              Не працює комп’ютерна 
техніка, інтернет, 1С і т.д.?
              </div>
              <div className='questions__green-section-container-text-content'>
              По всіх технічних питаннях, які пов’язані з роботою корпоративних пристроїв та програм - звертайтесь у відділ технічної підтримки до системного адміністратора. Також Ви можете залишити заявку за допомогою розділу сапорт в нашому корпоративному порталі.
              </div>
            </div>
          </div>
          <div className='questions__green-section-container-column3'>
            <div className='question__logo'>
            <img src={question} alt='logo' className='questions__green-section-container-logo'/>

            </div>
            <div className='questions__green-section-container-text'>
            <div className='questions__green-section-container-text-title'>
            Як оформити відрядження?
              </div>
              <div className='questions__green-section-container-text-content'>
              Відрядження оформляється працівником за погодженням керівника. Пацівник який їде у відрядження сам бронює готель та замовляє квитки. Більш детальна інформація міститься у пам’ятці по відрядженні.
              </div>
            </div>
            <div className='questions__green-section-container-button'
             onClick={()=>{
              window.open('https://bitrix24.podorozhnyk.net/company/personal/user/260/blog/3479/')
            }}
            >Пам’ятка по відрядженню</div>
          </div>
          </div>
        </div>
        <div className='questions__white-section'>
        <div className='questions__white-section-column1'>
        <div className='questions__green-section-container-text'>
              <div className='questions__green-section-container-text-title' style={{color:'#1D2939'}}>
              Як замовити додаткові 
            матеріали, необхідні 
            для роботи?
              </div>
              <div className='questions__green-section-container-text-content' style={{color:'#1D2939', fontWeight:"500"}}>
              Якщо вам потрібен монітор, робочий телефон, додаткові меблі потрібно звернутись до свого керівника.
              </div>
            </div>
            <div className='pcLogo'>
            <img src={pcLogo} alt='logo' className='pcLogo__logo'/>
            </div>
        </div>
        <div className='questions__white-section-column2'>
        <div className='questions__green-section-container-text'>
        <div className='questions__green-section-container-text-title' style={{color:'#1D2939'}}>
              Як замовити канцтовари?
              </div>
              <div className='questions__green-section-container-text-content' style={{color:'#1D2939', fontWeight:"500"}}>
              1. Заповніть шаблон по замовленню необхідних товарів. <br/>
2. Напишіть офіс-менеджеру в нашому корпоративному порталі та надішліть заповнений шаблон.
              </div>
            </div>
            <div className='questions__white-section-button'
              onClick={()=>{
                window.open('https://bitrix24.podorozhnyk.net/form-crm-entity/form/index.php?ELEMENT_ID=45/?user=user_6092')
              }}
            >Шаблон замовлення</div>
            </div>
            <div className='questions__white-section-column3'>
        <div className='questions__green-section-container-text'>
        <div className='questions__green-section-container-text-title' style={{color:'#1D2939'}}>
        Що робити якщо захворів?
              </div>
              <div className='questions__green-section-container-text-content' style={{color:'#1D2939', fontWeight:"500"}}>
              Для початку попередьте свого керівника. Якщо потрібно відкрити лікарняний зверніться до лікаря. Електронний лікарняний лікар надішле у відділ кадрів.
              </div>
            </div>
            <div className='questions__green-section-container-text'>
        <div className='questions__green-section-container-text-title' style={{color:'#1D2939'}}>
        Як відправити документи?
              </div>
              <div className='questions__green-section-container-text-content' style={{color:'#1D2939', fontWeight:"500"}}>
              Всі працівники центрального офісу мають можливість отримувати та відправляти документи чи інші посилки в робочих цілях з офісу для оптимізації часу та роботи. Як це зробити перейдіть за посиланням.
              </div>
            </div>
            <div className='questions__white-section-button'
             onClick={()=>{
              window.open('https://bitrix24.podorozhnyk.net/company/personal/user/12717/blog/12661/')
            }}
            >Тицьни тут</div>

        </div>
        </div>
       
        </div>

        <div className='program'>
            <div className='program__content'>
              <div className='program__content-title'>
              Програма лояльності
              </div>
              <div className='program__content-text'>
                <div className='program__content-text-span'>Завдяки програмі лояльності ви отримуєте такі переваги:</div>
                <div className='program__content-text-span'>Скористатись бонусами команди Подорожник ви можете не лише при купівлі в аптеці у роздріб, але й через Подорожник Bot і на сайті. </div>
                <div className='program__content-text-span'>Контролюйте онлайн усі свої накопичення і розпоряджайтесь ними як і коли захочете. 
Це швидко і доступно.</div>
              </div>
            </div>
            <div className='program__buttons'>
              <div className='program__button'>
                <span className='program__button-bold'>8%</span>
                <span className='program__button-text'>кешбеку в
аптеках "Подорожник"</span>
              </div>
              <div className='program__button'>
                <span className='program__button-bold'>5%</span>
                <span className='program__button-text'>кешбеку у мережі “БАМ”</span>
              </div>
              <div className='program__button'>
                <span className='program__button-bold'>5000
                <span className='program__button-text'>грн </span>
                </span>
                <span className='program__button-text'>ліміт на покупку 
на місяць </span>
              </div>
            </div>
        </div>

        <div className='social'>
          <div className='social__text'>
            <div className='social__text-title'>
            Соціальні мережі
            </div>
            <div className='social__text-text'>
            Запрошуємо Вас приєднатись до наших груп у соціальних мережах! Дізнавайся про події першим!
            </div>
          </div>
          <div className='social__icons'>
            <div className='social__icon'>
              <img src={inst} className='social__icon-img' alt='inst'
                onClick={()=>{
                  window.open('https://www.instagram.com/aptekapodorozhnyk?igsh=MzRlODBiNWFlZA')
                }}
              ></img>
              <div className='social__icon-text'>@aptekapodorozhnyk</div>
            </div>
            <div className='social__icon'>
              <img src={fb} className='social__icon-img' alt='fb'
               onClick={()=>{
                window.open('https://www.facebook.com/podoroshnyk')
              }}
              ></img>
              <div className='social__icon-text'>@podoroshnyk <br/>
@podorozhnykstart</div>
            </div>
            <div className='social__icon'>
              <img src={tt} className='social__icon-img' alt='tt'
               onClick={()=>{
                window.open('https://www.tiktok.com/@podorozhnyk.apteka?_t=8mssbLvtuB4&_r=1')
              }}
              ></img>
              <div className='social__icon-text'>@aptekapodorozhnyk</div>
            </div>
            <div className='social__icon'>
              <img src={linkedIn} className='social__icon-img' alt='linkedIn'
              onClick={()=>{
                window.open('https://www.linkedin.com/company/podorozhnyk/')
              }}
              ></img>
              <div className='social__icon-text'>@podorozhnyk</div>
            </div>
          </div>
        </div>

        <div className='presents'>
          <div className='presents__text'>
              <div className='presents__text-title'>
              Корпоративні подарунки
              </div>
              <div className='presents__text-content'>
              Кожен день приносить нові виклики та досягнення, надзвичайно важливо створювати позитивну атмосферу у колективі. Подорожник дарує працівникам корпоративні подарунками на закінчення випробувального терміну, день народження працівників, та до дня св. Миколая.
              </div>
          </div>
          <div className='presents__slider'>
            <CustomSlider radius1={!x880}>
            {presentImages.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </CustomSlider>
          </div>
        </div>

        <div className='calendar'>
          <div className='calendar__text'>
            <div className='calendar__text-title'>Корпоративний календар</div>
            <div className='calendar__text-content'>
              <div className='calendar__text-content-section' style={{marginTop:0}}>
                <div className='calendar__text-content-section-title'>
                Таємний Санта
                </div>
                <div className='calendar__text-content-section-date'>
                19 грудня
                </div>
              </div>
              <div className='calendar__text-content-section'>
                <div className='calendar__text-content-section-title'>
                День вишиванки
                </div>
                <div className='calendar__text-content-section-date'>
                16 травня
                </div>
              </div>
              <div className='calendar__text-content-section'>
                <div className='calendar__text-content-section-title'>
                День народження компанії
                </div>
                <div className='calendar__text-content-section-date'>
                1 вересня
                </div>
              </div>
              <div className='calendar__text-content-section'>
                <div className='calendar__text-content-section-title'>
                День Фармацевта
                </div>
                <div className='calendar__text-content-section-date'>
                16 вересня
                </div>
              </div>
            </div>
          </div>
          <div className='calendar__images'>
            <div className='calendar__images-colomn1'>
              <img src={calendar1} alt='img' className='calendar__images-colomn1-1'/>
              <img src={calendar2} alt='img' className='calendar__images-colomn1-2'/>
            </div>
            <div className='calendar__images-colomn2'>
              <img src={calendar3} alt='img' className='calendar__images-colomn2-1'/>
              <img src={calendar4} alt='img' className='calendar__images-colomn2-2'/>
            </div>
          </div>
        </div>

        <div className='events'>
        <div className='presents'>
          <div className='presents__text'>
              <div className='presents__text-title'>
              Корпоративні заходи
              </div>
              <div className='events__MindGame'>Mind Game</div>
              <div className='presents__text-content' style={{marginTop:'0.5rem'}}>
              Mind Game створений для того, щоб активно та цікаво провести час в колі колег, проявити себе, навчитися злагодженої командної роботи та відчути азарт.
Тому, пропонуємо Вам провести час приємно та корисно. Приймати участь у веселій інтелектуально-розважальнуій грі, яка складається з цікавих запитань різноманітного характеру з усіх можливих галузей знань.
              </div>
          </div>
          <div className='presents__slider'>
            <CustomSlider radius1={!x880}>
            {mingGameImages.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </CustomSlider>
          </div>
        </div>
        <div className='white-section'>
          <div className='presents__slider'>
            <CustomSlider radius2={!x880}>
            {mafiaImages.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </CustomSlider>
          </div>
          <div className='white-section-text'>
            <div className='white-section-text-title'>Мафія</div>
            <div className='white-section-text-content'>
            «Мафія» - це цікава, захоплююча та інтелектуальна командна рольова гра з детективним сюжетом, яка заснована на живому спілкуванні. Проводимо кілька разів в місяць в офісі після робочого дня. <br/><br/>
Ми гарантуємо, що на грі ви будете:<br/>- Сміятися.<br/>- Знайомитись.<br/>- Навчатися новому.<br/>- Ділитися досвідом.<br/><br/>
Це гарна можливість ближче познайомитись з колегами інших підрозділів.
            </div>

          </div>

        </div>

        <div className='presents' style={{marginTop:'0'}}>
          <div className='presents__text'>
              <div className='presents__text-title'>
              Футбол
              </div>
              <div className='presents__text-content'>
              Для нас футбол - це активний відпочинок і крута командна атмосфера. Гравці та вболівальники Подорожника беруть участь у футбольних турнірах. Якщо ви любите активний відпочинок у крутій компанії, приєднуйтесь до футбольної команди "Подорожник". Відмінний настрій вам забезпечений.
              </div>
          </div>
          <div className='presents__slider'>
            <CustomSlider radius1={!x880}>
            {footballImages.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </CustomSlider>
          </div>
        </div>

        <div className='white-section'>
          <div className='presents__slider'>
            <CustomSlider radius2={!x880}>
            {filmsImages.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </CustomSlider>
          </div>
          <div className='white-section-text'>
            <div className='white-section-text-title'>Перегляд українського кінематографа</div>
            <div className='white-section-text-content'>
            Як можна підтримати український кінематограф? Відповідь проста:<br/> ходити й дивитися українське кіно.  Подорожник запрошує на перегляд фільмів у Forum Lviv.
            </div>

          </div>

        </div>

        </div>

          <div className='last'>
            <div className='last-title'>Якщо у Вас виникнуть питання і на них не буде відповіді, Ви завжди можете звернутись до Вашого HR</div>
            <img src={lastImage} alt='img' className='last-image'/>
          </div>

        
    </div>

  );
}

export default App;
