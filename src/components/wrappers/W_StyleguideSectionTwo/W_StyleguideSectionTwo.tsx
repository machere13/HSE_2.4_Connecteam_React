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
          description='Пример использования полной версии логотипа'
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
        </div>
        <div className={styles.block_wrapper}>
          <h3>Метафора</h3>
          <div className={styles.text_wrapper}>
            <p className='text_body_2'>
              В&nbsp;основе метафоры лежит идея воссоздания коллективного непрерывного рабочего
              процесса. Это передаёт основной посыл сервиса: эффективное общение&nbsp;&mdash; это
              не&nbsp;конечный результат, а&nbsp;постоянный процесс, который требует вовлечённости
              всех участников и&nbsp;открытости к&nbsp;новым подходам.
            </p>
          </div>
        </div>
        <M_StyleguideImageBlock
          images={[
            {
              url: 'https://res.cloudinary.com/dkmaxwe8e/image/upload/v1750669977/StyleguideImage_01_bvmqie.jpg',
              alt: 'Логотип Connecteam на здании',
              objectFit: 'cover',
            },
          ]}
          description='Пример использования полной версии логотипа'
          height={409}
        />
        <div className={styles.text_wrapper}>
          <p className='text_body_2'>
            Медиа-сервис представляет собой рабочее пространство, где каждый элемент&nbsp;&mdash;
            это новая идея или шаг в&nbsp;проекте, что отражает организацию рабочего процесса
            и&nbsp;его постоянное развитие. Сочетание ярких элементов и&nbsp;покосившихся блоков
            визуализируют незавершённость и&nbsp;живое взаимодействие, как будто команда обсуждает
            идеи, оставляет заметки и&nbsp;ведёт совместную работу в&nbsp;реальном времени. Всё это
            подчёркивает гибкость и&nbsp;креативность, свойственные IT-командам.
          </p>
        </div>
        <div className={styles.block_wrapper}>
          <h3>Tone of voice</h3>
          <div className={styles.text_wrapper}>
            <p className='text_body_2'>
              В&nbsp;основе метафоры лежит идея воссоздания коллективного непрерывного рабочего
              процесса. Это передаёт основной посыл сервиса: эффективное общение&nbsp;&mdash; это
              не&nbsp;конечный результат, а&nbsp;постоянный процесс, который требует вовлечённости
              всех участников и&nbsp;открытости к&nbsp;новым подходам.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
