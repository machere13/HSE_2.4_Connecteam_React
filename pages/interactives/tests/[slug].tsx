import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { getTests } from '@/api/getTests'
import A_TestQuestionNumberTag from '@/components/atoms/A_TestQuestionNumberTag/A_TestQuestionNumberTag'
import C_TestQuestionRadios from '@/components/collections/C_TestQuestionRadios/C_TestQuestionRadios'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_TestQuestionHeading from '@/components/wrappers/W_TestQuestionHeading/W_TestQuestionHeading'

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
              <button
                onClick={() => {
                  setCurrentQuestionIndex(0)
                  setScore(0)
                  setShowResults(false)
                  setSelectedAnswers([])
                }}
              >
                Пройти тест заново
              </button>
              <Link href='/interactives'>Вернуться к тестам</Link>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <W_TestQuestionHeading
                currentNumber={currentQuestionIndex + 1}
                totalQuestions={test.content.questions.length}
                title={test.content.questions[currentQuestionIndex].title}
              />
              <C_TestQuestionRadios
                answers={test.content.questions[currentQuestionIndex].answers}
                selectedAnswerIndex={selectedAnswers[currentQuestionIndex]}
                onAnswerSelect={answerIndex =>
                  handleAnswerSelect(currentQuestionIndex, answerIndex)
                }
              />
            </div>
            <div>
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswers[currentQuestionIndex] === undefined}
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
