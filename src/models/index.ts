export type Level = string;
export type Category = string;

export type DisplayMode = 'list' | 'matrix' | 'none';

export type CompetencyId = string;

export type Competency = {
    id: CompetencyId;
    name: string;
    category: Category;
    levels: Level[];
    originLevel: Level;
}

export type State = {
    categories: Set<Category>;
    levels: Set<Level>;
    competencies: Record<CompetencyId, Competency>;
    
    hiddenLevels: Set<Level>;
    displayMode: DisplayMode;
} 