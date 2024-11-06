export enum StructureType {
    Resource,
    Army,
    Defensive,
    Trap,
    Heroe,
}

export interface Structure {
    name: string;
    maxLevel: number;
    costs: number[];

    /** 
     * - e &rarr; elixir  
     * - c &rarr; coin 
     * - d &rarr; dark elixir 
     * obs: multiples can choosed at the same time 
     * eg: "ec" means that it can be bought with elixir and coins
    */
    payment: string; 

    type: StructureType;

    canAugment: boolean;
    minLevelAugmet: number;
    augmentCost: number;
}

export interface Townhall extends Structure {
    payment: 'c' // define that is allways coin
    unlocks: string[];
    maxLevelBuilds: {build: string, level: number}[][];
} 

