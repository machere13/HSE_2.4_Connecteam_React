import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { getTests } from '@/api/getTests'
import A_TestQuestionRadio from '@/components/atoms/A_TestQuestionRadio/A_TestQuestionRadio'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'

import type { Test, TestResult } from '@/types/test'
import type { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const tests = await getTests()
  const paths = tests.map(test => ({ params: { slug: test.slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ test: Test }> = async ({ params }) => {
  const tests = await getTests()
  const test = tests.find(t => t.slug === params?.slug)

  if (!test) return { notFound: true }

  return { props: { test }, revalidate: 10 }
}

export default function TestPage({ test }: { test: Test }) {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])

  if (router.isFallback) return <div>Загрузка...</div>

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[questionIndex] = answerIndex
    setSelectedAnswers(newSelectedAnswers)
  }

  const handleNextQuestion = () => {
    const currentQuestion = test.content.questions[currentQuestionIndex]
    const selectedAnswer = currentQuestion.answers[selectedAnswers[currentQuestionIndex]]

    if (selectedAnswer?.isCorrect) {
      setScore(prev => prev + 1)
    }

    if (currentQuestionIndex < test.content.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const getResult = (): TestResult => {
    return test.content.results.find(result => result.score === score) || test.content.results[0]
  }

  return (
    <div>
      <SO_Header />
      <div className='max-w-2xl mx-auto p-6'>
        <h1 className='text-3xl font-bold mb-6'>{test.title}</h1>
        <p className='text-gray-600 mb-8'>{test.description}</p>

        {showResults ? (
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h2 className='text-2xl font-semibold mb-4'>Результаты теста</h2>
            <div className='bg-gray-50 rounded-lg p-6 mb-6'>
              <h3 className='text-xl font-semibold mb-4'>{getResult().title}</h3>
              <p className='text-gray-700 mb-6'>{getResult().description}</p>
              <p className='text-lg font-medium'>
                Результат {score} из {test.content.questions.length}
              </p>
            </div>
            <div className='flex gap-4'>
              <button
                onClick={() => {
                  setCurrentQuestionIndex(0)
                  setScore(0)
                  setShowResults(false)
                  setSelectedAnswers([])
                }}
                className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition'
              >
                Пройти тест заново
              </button>
              <Link
                href='/interactives'
                className='bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition'
              >
                Вернуться к тестам
              </Link>
            </div>
          </div>
        ) : (
          <div className='space-y-6'>
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <div className='mb-4'>
                <span className='text-gray-600'>
                  Вопрос {currentQuestionIndex + 1} из {test.content.questions.length}
                </span>
              </div>
              <h3 className='text-xl font-semibold mb-6'>
                {test.content.questions[currentQuestionIndex].title}
              </h3>
              <div className='space-y-3'>
                {test.content.questions[currentQuestionIndex].answers.map((answer, index) => (
                  <A_TestQuestionRadio
                    key={index}
                    title={answer.title}
                    isSelected={selectedAnswers[currentQuestionIndex] === index}
                    onChange={() => handleAnswerSelect(currentQuestionIndex, index)}
                  />
                ))}
              </div>
            </div>
            <div className='flex justify-between'>
              <Link
                href='/interactives'
                className='bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition'
              >
                Вернуться назад
              </Link>
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswers[currentQuestionIndex] === undefined}
                className={`px-6 py-2 rounded transition ${
                  selectedAnswers[currentQuestionIndex] !== undefined
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {currentQuestionIndex === test.content.questions.length - 1
                  ? 'Завершить тест'
                  : 'Следующий вопрос'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
