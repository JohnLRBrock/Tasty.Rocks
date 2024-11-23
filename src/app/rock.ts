export interface Rock {
    name: string;
    description: string;
    weight: number; 
    luster: number; // out of 5
    // impurities
    // type: igneous, metamorphic, sedimentary
}

export const getRock = (): Rock => {
    return { 
        name: "Dwayne", 
        description: "Johnson", 
        weight: Math.floor(Math.random() * 5) + 1,
        luster: Math.floor(Math.random() * 5) + 1,
    };
};