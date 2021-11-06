import { makeAutoObservable } from 'mobx'
import { getRandom } from '../utils/getRandom'
import { getUniques } from '../utils/getUniques'

type IPhraseBlock = Array<string>

export interface IPhrasesStore {
  phraseBlocks: Array<IPhraseBlock>
  numberOfBlocks: number
  maxNumberOfBlocks: number
  customPhrase: Array<string>
  setNumberOfBlocks(numberOfBlocks: number): void
  generatePhrase(): void
}

export class PhrasesStore implements IPhrasesStore {
  constructor() {
    makeAutoObservable(this)
  }
  customPhrase: Array<string> = []

  phraseBlocks: Array<IPhraseBlock> = [
    [
      'В наличии на нашем складе.',
      'Складская позиция, товар в наличии!',
      'Товар на складе.',
      'Позиция на складе.',
      'У нас - в наличии! На собственном складе!',
      'В наличии на собственном складе отгрузки',
      'В наличии.',
      'Товар в наличии.',
      'Собственный склад отгрузки , товар в наличии!',
    ],
    [
      'В наличии несколько разновидностей.',
      '​Подберем на любую технику !',
      'Подберем и на другие модели !​',
      'Для подбора запчастей - используем оригинальные каталоги.',
      'Грамотная консультация и всегда точный подбор.',
      'Подберем любую разновидность.',
      'Поможем с подбором.',
      'Подберем именно для вашей техники.',
      'Подберем необходимые запчасти именно для вашей модели.',
      'Подберем по размерам или фото.',
    ],
    [
      'Дополнительная схема для сравнения параметров по запросу.',
      'Сравним все параметры.',
      'Сравним размеры и номера.',
      'Сверим тип запчастей.',
      'Сверим все параметры и номера.',
      'Сопоставим все данные для точного и безошибочного определения необходимых запчастей.',
      'Перед отгрузкой сравним все параметры и характеристики.',
    ],
    [
      'Предоставим дополнительные фотографии.',
      'Доп фото по запросу.',
      'Доп фото всей детали по запросу.',
      'Схема и доп фото по запросу.',
      'По запросу предоставим схемы и фотографии.',
      'При необходимости предоставим дополнительные фотографии.',
      'Схема и фото по запросу.',
    ],
    [
      'Заводской аналог.',
      'Высококачественный аналог.',
      'Аналог высочайшего качества.',
      'Отличный аналог - Произведство OEM.',
      'Оригинал!',
      'OEM Аналог.',
      'Заводское качество.',
      'Высочайшее качество!',
    ],
    [
      'Страна изготовитель - Корея.',
      'Несколько производителей на выбор.',
      'Производство - Корея / Китай / Италия.',
      'Произведен в Корее.',
      'Производитель - Корея.',
      'Широкий выбор производителей.',
      'Корейский Аналог.',
      'Сделано в Корее.',
    ],
    [
      'Все запчасти проходят строгий контроль качества.',
      'Мы уверены в своем товаре! Даем гарантию до 1 года.',
      'Гарантия от 6 месяцев.',
      'Гарантия 1 год.',
      'Гарантия от производителя​.',
      'Гapaнтийный cpок с моментa приобpетeния - 12 месяцев.',
      'Срок гарантии 1 год.',
      'Гарантийный срок 12 месяцев.',
    ],
    [
      'На упаковке присутствуют голограммы.',
      'Весь товар в фирменной упаковке.',
      'Вид упаковки - коробка / ящик.',
      'Фирменная заводская упаковка.',
      'Заводская упаковка.',
      'Оригинальная упаковка.',
      'Упаковка с голограммами.',
      'Заводская упаковка с голограммами.',
      'Фирменная упаковка с голограммами.',
      'Оригинальная упаковка с голограммами.',
    ],
    [
      'Закрывающие документы предоставляем.',
      'Предоставляем закрывающие документы.',
      'Документы сопроводительные всегда выдаём.',
      'Всегда выдаём сопроводительные документы.',
      'Все сопроводительные документы предоставим.',
      'Предоставим все сопроводительные документы.',
      'Весь товар отпускаем с документами.',
      'Оригиналы документов вложим в груз или отправим почтой.',
    ],
    [
      'Все формы оплаты.',
      'Принимаем все виды платежей.',
      'Оплатa - наличный, безнaличный рaсчeт.',
      'Любая форма оплаты.',
      'Принимаем любой вид платежей.',
      'Работаем со всеми видами расчета.',
      'Любой вид оплаты.',
      'Любой способ оплаты.',
      'Все виды расчетов.',
    ],
    [
      'При наличии товара на складе гарантируем передачу перевозчику в день заказа.',
      'При наличии товара на складе гарантируем передачу перевозчику в день оплаты.',
      'Отправляем / отгружаем товар в день оплаты.',
      'Работаем по выходным.',
      'Выходные - рабочий день.',
      'Мы отгружаем товар в день поступления платежа.',
      'Отгрузка или выдача товара - в день поступления оплаты.',
      'Мы не тянем время - отправляем товар при поступлении денежных средств.',
      'Отгружаем товар без задержек в день оплаты.',
      'Работаем без выходных.',
    ],
    [
      'Прямые поставки с заводов изготовителей.',
      'Все товары поступают напрямую с заводов.',
      'Работаем напрямую с заводами изготовителями.',
    ],
    [
      'Возможен осмотр на складе.',
      'Перед покупкой / оплатой -  товар возможно осмотреть.',
      'Возможен осмотр и только потом оплата товара.',
      'Приезжайте и убедитесь сами в наличии и качестве товара.',
      'Вы можете приехать и лично убедится в наличии.',
      'Любой товар перед оплатой можно осмотреть.',
      'Любой товар перед покупкой можно посмотреть.',
    ],
    [
      'Скидки при крупном заказе.',
      'Лучшие условия на рынке.',
      'Лучшая цена на рынке.',
      'Гарантия лучших цен.',
      'Скидки от предложений конкурентов.',
      'Система скидок и бонусов.',
      'Гибкая система цен и скидок.',
      'Гибкая система цен и приятная система бонусов​.',
      'Самые лучшие цены в стране!',
    ],
    [
      'Мы сотрудничаем со всеми городами страны.',
      'Отправим в любой уголок России.',
      'Доставка по всей России.',
      'Работаем со всеми городами РФ.',
      'Сотрудничаем с любым регионом страны.',
      'Запчаcти oтправляeм во все регионы.',
      'Отгрузим в любую точку России и СНГ.',
      'Доставляем в любой город.',
    ],
    [
      'Отправим удобной именно для Вас ТК.',
      'Готовы отправить любой удобной именно для Вас ТК.',
      'Сотрудничаем со всеми транспортными компаниями.',
      'Транспортные компании: любая на ваш выбор.',
      'Попутный грузовик. Когда нужно быстро и относительно недорого отправить крупный груз, мы находим попутную машину.',
      'Мелкие срочные грузы можем отправить с попутной легковой машиной или междугородным автобусом.',
      'Отправка любой транспортной или курьерской компанией.',
    ],
    [
      'До транспортной компании доставка товара - БЕСПЛАТНО!',
      'Доставка до терминала ТК - бесплатно.',
      'Доставка по Москве, МО и до терминала транспортной компании бесплатно.',
      'Мы бесплатно доставим товар до терминала ТК.',
      'Бесплатно доставляем до терминалов ТК.',
      'Доставка до терминала ТК - 0 Рублей!',
    ],
    [
      'Звоните или пишите в любое время.',
      'Оператор всегда на связи, звоните в любое время.',
      'Звоните в любое время.',
      'Звоните, спрашивайте, ответим на все вопросы.',
      'Звоните, с радостью проконсультируем.',
      'Звоните, когда Вам удобно!',
      'Звоните, даже в выходные и праздники!',
    ],
    [
      'У нас большое количество запчастей для спецтехники.',
      'Огромное количество запчастей в наличии.',
      'Большое количество запчастей в наличии и на заказ.',
      'В наличии колоссальное количество запасных частей для спецтехники.',
      'На складе более 100000 наименований.',
      'Отличные условия как для торгующих организаций, так и для владельцев техники.',
      'Особые условия для владельцев техники.',
    ],
  ]
  numberOfBlocks = 0
  get maxNumberOfBlocks(): number {
    return this.phraseBlocks.length
  }

  setNumberOfBlocks(numberOfBlocks: number): void {
    this.numberOfBlocks = numberOfBlocks
  }
  generatePhrase(): void {
    const customPhrase: Array<string> = []
    const indexesOfBlocks = getUniques(1, this.maxNumberOfBlocks - 1, this.numberOfBlocks - 1)
    const indexes = [0, ...indexesOfBlocks]
    indexes.forEach((index) => {
      const block = this.phraseBlocks[index]
      const indexOfPhrase = getRandom(0, block.length - 1)
      const phrase = block[indexOfPhrase]
      customPhrase.push(phrase)
    })
    this.customPhrase = customPhrase
  }
}
