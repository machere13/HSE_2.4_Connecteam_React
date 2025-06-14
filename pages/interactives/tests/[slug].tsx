import { useState } from 'react'

import { useRouter } from 'next/router'

import { getTests } from '@/api/getTests'
import O_Footer from '@/components/organisms/O_Footer/O_Footer'
import Q_Grid from '@/components/quarks/Q_Grid/Q_Grid'
import SO_Header from '@/components/super-organisms/SO_Header/SO_Header'
import W_TestQuestionContent from '@/components/wrappers/W_TestQuestionContent/W_TestQuestionContent'
import W_TestResults from '@/components/wrappers/W_TestResults/W_TestResults'

import type { TestData, TestResult } from '@/types/test'
import type { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const tests = await getTests()
  const paths = tests.map(test => ({ params: { slug: test.slug } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ test: TestData }> = async ({ params }) => {
  const tests = await getTests()
  const test = tests.find(t => t.slug === params?.slug)

  if (!test) return { notFound: true }

  return { props: { test }, revalidate: 10 }
}

export default function TestPage({ test }: { test: TestData }) {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | undefined)[]>([])

  if (router.isFallback) return <div>Загрузка...</div>

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[questionIndex] = answerIndex
    setSelectedAnswers(newSelectedAnswers)
  }

  const handleNextQuestion = () => {
    const currentQuestion = test.content.questions[currentQuestionIndex]
    const selectedAnswerIndex = selectedAnswers[currentQuestionIndex]
    const selectedAnswer =
      selectedAnswerIndex !== undefined ? currentQuestion.answers[selectedAnswerIndex] : undefined

    if (selectedAnswer?.isCorrect) {
      setScore(prev => prev + 1)
    }

    if (currentQuestionIndex < test.content.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
      const newSelectedAnswers = [...selectedAnswers]
      newSelectedAnswers[currentQuestionIndex - 1] = undefined
      setSelectedAnswers(newSelectedAnswers)
    } else {
      router.push('/interactives')
    }
  }

  const getResult = (): TestResult => {
    return test.content.results.find(result => result.score === score) || test.content.results[0]
  }

  return (
    <div className='page'>
      <div className='header_tests_content_gap'>
        <SO_Header />
        <div className='height_100'>
          {showResults ? (
            <W_TestResults
              result={getResult()}
              score={score}
              totalQuestions={test.content.questions.length}
              onRestart={() => {
                setCurrentQuestionIndex(0)
                setScore(0)
                setShowResults(false)
                setSelectedAnswers([])
              }}
            />
          ) : (
            <W_TestQuestionContent
              currentNumber={currentQuestionIndex + 1}
              totalQuestions={test.content.questions.length}
              title={test.content.questions[currentQuestionIndex].title}
              answers={test.content.questions[currentQuestionIndex].answers}
              selectedAnswerIndex={selectedAnswers[currentQuestionIndex]}
              isLastQuestion={currentQuestionIndex === test.content.questions.length - 1}
              onAnswerSelect={answerIndex => handleAnswerSelect(currentQuestionIndex, answerIndex)}
              onNext={handleNextQuestion}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
      <Q_Grid variant='gray' />
      <O_Footer />
    </div>
  )
}
