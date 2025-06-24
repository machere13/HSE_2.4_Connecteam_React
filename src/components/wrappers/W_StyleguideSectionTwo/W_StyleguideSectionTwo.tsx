import React from 'react'

import M_StyleguideImageBlock from '@/components/molecules/M_StyleguideImageBlock/M_StyleguideImageBlock'

import styles from './W_StyleguideSectionTwo.module.css'

export default function W_StyleguideSectionTwo() {
  return (
    <section className={styles.wrapper}>
      <h2>Логотип</h2>
      <div className={styles.content}>
        <div className={styles.text_wrapper}>
          <p className='text_body_2'>
            Логотип объединяет в&nbsp;себе начертания как моно шрифта, так и&nbsp;гротеска Inter
            Tight, что подчёркивает взаимосвязь и&nbsp;сплочённость членов команды.
          </p>
        </div>
        <M_StyleguideImageBlock
          images={[
            {
              url: 'https://res.cloudinary.com/dkmaxwe8e/image/upload/v1750681833/StyleguideImage_02_scafcp.webp',
              alt: 'Полная версия логотипа',
              objectFit: 'cover',
            },
          ]}
          description='Пример использования полной версии логотипа'
          height={409}
        />
        <div className={styles.text_wrapper}>
          <p className='text_body_2'>
            Логотип состоит из&nbsp;двух элементов, один из&nbsp;которых интегрирован в&nbsp;другой:
            буква &laquo; o&raquo; будто разделена пополам и&nbsp;напоминает звено. Данный знак
            определяет сплочённость всех членов команды перед рабочими задачами.
          </p>
          <p className='text_body_2'>
            Допустим только данный вид использования полной версии логотипа. Различные изменения
            и&nbsp;деформации знака не&nbsp;допускаются.
          </p>
        </div>
        <M_StyleguideImageBlock
          images={[
            {
              url: 'https://res.cloudinary.com/dkmaxwe8e/image/upload/v1750686190/StyleguideImage_03_f0nkwr.svg',
              alt: 'Логотип Connecteam',
              objectFit: 'contain',
            },
          ]}
          height={180}
          maxWidth='fit-content'
        />
        <div className={styles.block_wrapper}>
          <h3>Пространство</h3>
          <div className={styles.text_wrapper}>
            <p className='text_body_2'>
              При применении нашего логотипа крайне важно, чтобы ему было предоставлено достаточно
              места от&nbsp;полей и&nbsp;других элементов на&nbsp;странице. Были разработаны
              пробелы, размер которых меняется в&nbsp;зависимости от&nbsp;размера знака.
            </p>
          </div>
          <M_StyleguideImageBlock
            images={[
              {
                url: 'https://res.cloudinary.com/dkmaxwe8e/image/upload/v1750746631/StyleguideImage_04_igffwi.svg',
                alt: 'Логотип Connecteam',
                objectFit: 'contain',
              },
            ]}
            height={241}
            maxWidth='fit-content'
          />
        </div>
        <div className={styles.block_wrapper}>
          <div className={styles.text_wrapper}>
            <p className='text_body_2'>
              Для веб-сайтов и&nbsp;планшетов минимальное пространство над и&nbsp;под логотипом
              должно быть высотой в&nbsp;30&nbsp;пикселей, отступ слева равен 50&nbsp;пикселям. Это
              всегда должно совпадать с&nbsp;полями страницы.
            </p>
          </div>
          <M_StyleguideImageBlock
            images={[
              {
                url: 'https://res.cloudinary.com/dkmaxwe8e/image/upload/v1750751826/StyleguideImage_05_fitwpj.svg',
                alt: 'Пример полной версии логотипа в веб-версии',
                objectFit: 'cover',
              },
            ]}
            description='Пример полной версии логотипа в веб-версии'
            height={409}
          />
        </div>
        <div className={styles.block_wrapper}>
          <h3>Знак</h3>
          <div className={styles.text_wrapper}>
            <p className='text_body_2'>
              Краткая версия логотипа используется в&nbsp;айдентике как альтернатива полной версии.
              Работает как самостоятельный знак. Применяется, если не&nbsp;хватает пространства для
              полной версии или из&nbsp;эстетических соображений.
            </p>
          </div>
          <M_StyleguideImageBlock
            images={[
              {
                url: 'https://res.cloudinary.com/dkmaxwe8e/image/upload/v1750751826/StyleguideImage_06_kyc3g1.svg',
                alt: 'Пример полной версии логотипа в веб-версии',
                objectFit: 'contain',
              },
            ]}
            height={180}
          />
        </div>
      </div>
    </section>
  )
}
