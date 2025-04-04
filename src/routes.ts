export const ROUTES = {
    MAIN: '/',
    INTERACTIVES: {
        INDEX: '/interactives', 
        IT_BUNKER: '/interactives/itbunker',
        IT_MAFIA: '/interactives/itmafia',
        GENERATOR: '/interactives/generator',
        TESTS: {
        bySlug: (slug: string) => `/interactives/tests/${slug}`
        }
    },
    ARTICLES: {
        INDEX: '/articles',
        bySlug: (slug: string) => `/articles/${slug}`
    },
    CASES: {
        INDEX: '/cases',
        bySlug: (slug: string) => `/cases/${slug}`
    },
    ABOUT: '/about'
} as const;