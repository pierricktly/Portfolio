export const useCurrentSection = () => useState<string>('currentSection', () => 'Home')
export const useCurrentPageIndex = () => useState<number>('currentPageIndex', () => 0)
