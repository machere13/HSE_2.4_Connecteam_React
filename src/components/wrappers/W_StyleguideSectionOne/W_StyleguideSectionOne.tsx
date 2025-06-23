import React from 'react'

import C_StyleguideValueCardListItems from '@/components/collections/C_StyleguideValueCardListItems/C_StyleguideValueCardListItems'

import styles from './W_StyleguideSectionOne.module.css'

export default function W_StyleguideSectionOne() {
  return (
    <section className={styles.wrapper}>
      <h2>О нас</h2>
      <div className={styles.content}>
        <div className={styles.text_wrapper}>
          <p className='text_body_2'>
            Connecteam&nbsp;&mdash; база знаний для IT-команд, которая помогает улучшать деловую
            коммуникацию через статьи, разборы кейсов, интерактивы и&nbsp;идеи для тимбилдинга.
          </p>
          <p>
            Миссия медиа&nbsp;&mdash; оптимизировать общение в&nbsp;IT-командах для свободного
            и&nbsp;эффективного развития продукта.
          </p>
        </div>
        <div className={styles.block_wrapper}>
          <h3>Ценности</h3>
          <C_StyleguideValueCardListItems />
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
