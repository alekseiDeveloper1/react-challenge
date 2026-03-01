import styles from './ProductsTable.module.css'
import { Input } from '@/components/ui/Input/Input'
import { Button } from '@/components/ui/Button/Button'
import { Checkbox } from '@/components/ui/Checkbox/Checkbox'
import search from '@/assets/icons/search.svg'
import arrowsClockwise from '@/assets/icons/ArrowsClockwise.svg'
import btn from '@/assets/icons/btn.svg'

type Product = {
  id: string
  name: string
  vendor: string
  sku: string
  category: string
  rating: string
  price: string
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'USB Флешкарта 16GB',
    vendor: 'Samsung',
    sku: 'RCH45Q1A',
    category: 'Аксессуары',
    rating: '4,3/5',
    price: '48 652,00',
  },
  {
    id: '2',
    name: 'Утюг Braun TexStyle 9',
    vendor: 'TexStyle',
    sku: 'DFCHQ1A',
    category: 'Бытовая техника',
    rating: '4,9/5',
    price: '4 233,00',
  },
  {
    id: '3',
    name: 'Смартфон Apple iPhone 17',
    vendor: 'Apple',
    sku: 'GUYHD2-X4',
    category: 'Телефоны',
    rating: '4,7/5',
    price: '88 652,00',
  },
  {
    id: '4',
    name: 'Игровая консоль PlayStation',
    vendor: 'Sony',
    sku: 'HT45Q2I',
    category: 'Игровые приставки',
    rating: '4,1/5',
    price: '56 236,00',
  },
  {
    id: '5',
    name: 'Фен Dyson Supersonic Nural',
    vendor: 'Dyson',
    sku: 'FJHHGF-CR4',
    category: 'Электроника',
    rating: '3,3/5',
    price: '48 652,00',
  },
]

export const ProductsTable = () => {
  return (
    <>
      <header className={styles.header}>
          <h1 className={styles.title}>Товары</h1>
          <div className={styles.searchInputWrapper}>
            <Input
              placeholder="Найти"
              aria-label="Найти товары"
              icon={search}
            />
          </div>
      </header>
      <section >
        <div className={styles.headerActions}>
          <div className={styles.sectionTitle}>Все позиции</div>
          <div className={styles.headerActionsBtn} >
            <Button
              icon={arrowsClockwise}
              variant="transparent"
              className={styles.headerIconButton}
              aria-label="Обновить список товаров"
            />
            <Button className={styles.headerPrimaryButton}>Добавить</Button>
          </div>
        </div>

        <div className={styles.table}>
          <div className={`${styles.row} ${styles.rowHead}`}>
            <div className={styles.cellCheckbox}>
              <Checkbox aria-label="Выбрать все позиции" />
            </div>
            <div className={styles.cellName}>Наименование</div>
            <div className={styles.cellVendor}>Вендор</div>
            <div className={styles.cellSku}>Артикул</div>
            <div className={styles.cellRating}>Оценка</div>
            <div className={styles.cellPrice}>Цена, ₽</div>
            <div className={styles.cellQuantity} />
          </div>

          {PRODUCTS.map((product, index) => (
            <div
              key={product.id}
              className={`${styles.row} ${
                index === 2 ? styles.rowActive : ''
              }`}
            >
              <div className={styles.cellCheckbox}>
                <Checkbox aria-label={`Выбрать товар ${product.name}`} />
              </div>

              <div className={styles.cellName}>
                <div className={styles.cellNamePrimary}>{product.name}</div>
                <div className={styles.cellNameSecondary}>{product.category}</div>
              </div>

              <div className={styles.cellVendor}>{product.vendor}</div>
              <div className={styles.cellSku}>{product.sku}</div>
              <div className={styles.cellRatingValue}>{product.rating}</div>
              <div className={styles.cellPriceValue}>{product.price}</div>
              <div className={styles.btnWrap}>
                <div className={styles.cellQuantity}>
                  <Button
                    variant="small"
                    aria-label={`Добавить единицу товара ${product.name}`}
                  >
                    +
                  </Button>
                </div>

                <div className={styles.cellActions}>
                  <Button
                    variant="small-transparent"
                    aria-label={`Дополнительные действия с товаром ${product.name}`}
                    icon={btn}
                  >
                  </Button>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          Показано 1–20 из 120
        </div>
      </section>
    </>
    
  )
}
