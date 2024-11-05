export interface Construction {
    name: string;
    maxLevel: number;
    costs: number[];
    /** 
     * - e &rarr; elixir  
     * - c &rarr; coin 
     * - d &rarr; dark elixir 
     * obs: multiples can choosed at the same time
    */
    payment: string; 
}

export interface AugmentedConstruction extends Construction {
    cost: number;
    minimalLevel: number;
}

export interface Townhall extends Construction {
    payment: 'c' // define that is allways coin
    unlocks: string[];
    maxLevelBuilds: {build: string, level: number}[][];
} 

