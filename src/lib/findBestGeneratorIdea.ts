import type { GeneratorIdea } from '@/types/generator'

export function findBestGeneratorIdea(
  ideas: GeneratorIdea[],
  params: { amount: string; goal: string; time: string; mode: string },
): GeneratorIdea | undefined {
  let maxMatches = 0
  let bestIdea: GeneratorIdea | undefined = undefined

  for (const idea of ideas) {
    let matches = 0
    if (idea.matches.teamSize.includes(params.amount)) matches++
    if (idea.matches.category.includes(params.goal)) matches++
    if (idea.matches.duration.includes(params.time)) matches++
    if (idea.matches.format.includes(params.mode)) matches++
    if (matches > maxMatches) {
      maxMatches = matches
      bestIdea = idea
    }
  }
  return bestIdea
}
