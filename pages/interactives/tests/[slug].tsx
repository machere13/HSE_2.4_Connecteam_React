import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { getTests } from '@/api/getTests'
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
      <div>
        {showResults ? (
          <div>
            <h2>Результаты теста</h2>
            <div>
              <h3>{getResult().title}</h3>
              <p>{getResult().description}</p>
              <p>
                Результат {score} из {test.content.questions.length}
              </p>
            </div>
            <div>
              <button>Поделитьcя результатом</button>
              <Link href='/interactives'>Вернуться к тестам</Link>
            </div>
          </div>
        ) : (
          <>
            <div>
              <div>
                <span>
                  Вопрос {currentQuestionIndex + 1} из {test.content.questions.length}
                </span>
              </div>
              <h3>{test.content.questions[currentQuestionIndex].title}</h3>
              <div>
                {test.content.questions[currentQuestionIndex].answers.map((answer, index) => (
                  <label key={index}>
                    <input
                      type='radio'
                      name={`question-${currentQuestionIndex}`}
                      checked={selectedAnswers[currentQuestionIndex] === index}
                      onChange={() => handleAnswerSelect(currentQuestionIndex, index)}
                    />
                    <span>{answer.title}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <Link href='/interactives'>Вернуться назад</Link>
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswers[currentQuestionIndex] === undefined}
              >
                {currentQuestionIndex === test.content.questions.length - 1
                  ? 'Завершить тест'
                  : 'Следующий вопрос'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
