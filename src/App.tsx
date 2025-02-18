import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useEffect, useState } from 'react';
import basket from './assets/basket.png';
import coin from './assets/coin.png';
import direction from './assets/direction.png';
import face from './assets/face.png';
import family from './assets/family.png';
import flag from './assets/flag.png';
import hb from './assets/hb.png';
import light from './assets/light.png';
import pie from './assets/pie.png';
import ring from './assets/ring.png';
import sub from './assets/sub.png';
import wallet from './assets/wallet.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout, ThxSpinner } from './thx/ThxLayout';
import { sendDataToGA } from './utils/events';

const data = [
  {
    title: 'Кэшбэк 5% в категории Продукты',
    subtitle: 'Дополнительная категория в октябре',
    img: basket,
  },
  {
    title: '+1 попытка крутить барабан суперкэшбэка',
    subtitle: 'Выше шанс выиграть до 100% в случайной категории',
    img: pie,
  },
  {
    title: 'Эксклюзивный кэшбэк от партнёров',
    subtitle: 'Доступ к особой подборке',
    img: light,
  },
  {
    title: 'Увеличенный лимит кэшбэка',
    subtitle: '7000 ₽ в месяц вместо 5000 ₽ за покупки в категориях',
    img: wallet,
  },
  {
    title: '+3% годовых',
    subtitle: 'По накопительному Альфа-Счёту на ежедневный остаток',
    img: coin,
  },
  {
    title: 'Бесплатные уведомления',
    subtitle: 'Пуши и смс об операциях по всем дебетовым картам',
    img: ring,
  },
  {
    title: 'Бесплатные переводы',
    subtitle: 'В любые банки без комиссий',
    img: direction,
  },
  {
    title: 'Увеличенный лимит на снятие наличных',
    subtitle: 'Без комиссии в банкоматах любых банков России',
    img: flag,
  },
];

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [added, setAdd] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    window.gtag('event', 'activate_4385_var6');
    setLoading(true);

    sendDataToGA({
      id: LS.getItem(LSKeys.UserId, null) ?? 0,
      add: added ? 1 : 0,
    }).then(() => {
      LS.setItem(LSKeys.ShowThx, true);
      if (!added) {
        window.location.replace('https://alfa.me/ght');
      } else {
        setThx(true);
        setLoading(false);
      }
    });
  };

  if (LS.getItem(LSKeys.ShowThx, false)) {
    return <ThxSpinner />;
  }

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={hb} width="100%" height={240} style={{ objectFit: 'cover' }} />
          <Typography.TitleResponsive
            style={{ marginTop: '1rem', maxWidth: '260px' }}
            tag="h1"
            view="medium"
            font="system"
            weight="semibold"
          >
            Альфа-Смарт
          </Typography.TitleResponsive>
          <Typography.Text style={{ margin: '.5rem 0 2rem', maxWidth: '260px' }} view="primary-medium">
            Первый месяц — бесплатно. Далее от 299 ₽ в месяц
          </Typography.Text>
        </div>

        <div className={appSt.row}>
          <img src={face} width={24} height={24} alt="face" />
          <Typography.Text view="primary-medium">
            Подписка стоит 299 ₽, если тратите с карты 20 000 ₽ в месяц. Если тратите меньше — 399 ₽
          </Typography.Text>
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h3" view="small" font="system" weight="bold">
          В вашей подписке
        </Typography.TitleResponsive>

        {data.map(item => (
          <div className={appSt.boxRow} key={item.title}>
            <div>
              <Typography.Text tag="p" defaultMargins={false} view="primary-medium" style={{ fontWeight: 600 }}>
                {item.title}
              </Typography.Text>
              <Typography.Text view="secondary-large" color="secondary">
                {item.subtitle}
              </Typography.Text>
            </div>
            <img src={item.img} width={96} height={96} alt="item" />
          </div>
        ))}

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h3" view="small" font="system" weight="bold">
          Семейный доступ
        </Typography.TitleResponsive>

        <div className={appSt.boxRow}>
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-medium" style={{ fontWeight: 600 }}>
              Все преимущества доступны близким
            </Typography.Text>
            <Typography.Text view="secondary-large" color="secondary">
              Делитесь бесплатно до конца марта
            </Typography.Text>
          </div>
          <img src={family} width={96} height={96} alt="family" />
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h3" view="small" font="system" weight="bold">
          Добавьте к своей подписке
        </Typography.TitleResponsive>

        <div className={appSt.boxRow2}>
          <div className={appSt.boxRow2text}>
            <Typography.TitleResponsive tag="h2" defaultMargins={false} view="medium" font="system" weight="bold">
              AI подписка
            </Typography.TitleResponsive>
            <img src={sub} width={106} height={97} alt="sub" style={{ marginTop: '-16px', marginRight: '-16px' }} />
          </div>

          <div style={{ marginTop: '-38px' }}>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
              Ассистент по анализу рынка
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              ИИ анализирует рынок и подсказывает, как действовать
            </Typography.Text>
          </div>

          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
              Анализ изменения стоимости портфеля
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              ИИ найдёт причины и объяснит, почему меняется доходность
            </Typography.Text>
          </div>

          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
              Балансировка портфеля
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              ИИ оценивает активы и даёт рекомендации по улучшению
            </Typography.Text>
          </div>

          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
              Прогнозы по активу
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              ИИ сформирует прогноз на основе мнений инвесторов и аналитиков
            </Typography.Text>
          </div>
          <ButtonMobile
            block
            size={32}
            view="secondary"
            onClick={() => {
              window.gtag('event', 'add_4385_var6');
              setAdd(!added);
            }}
          >
            {added ? 'Удалить' : 'Добавить за 349 ₽'}
          </ButtonMobile>
        </div>

        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h3" view="small" font="system" weight="bold">
          Дополнительно
        </Typography.TitleResponsive>

        <div>
          <div className={appSt.rowText} onClick={() => window.gtag('event', 'FAQ_4385_var6')}>
            <CDNIcon name="glyph_question-circle_m" />
            <Typography.Text view="primary-medium">Частые вопросы</Typography.Text>
          </div>
          <div className={appSt.rowText} onClick={() => window.gtag('event', 'more_4385_var6')}>
            <CDNIcon name="glyph_document-lines_m" />
            <Typography.Text view="primary-medium">Подробные условия</Typography.Text>
          </div>
        </div>

        <Typography.Text view="primary-small" color="secondary">
          Нажимая «К подключению», вы соглашаетесь с{' '}
          <span style={{ textDecoration: 'underline' }}>новыми условиями обслуживания</span>
        </Typography.Text>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          К подключению
        </ButtonMobile>
      </div>
    </>
  );
};
