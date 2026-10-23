export class Batter { 
    batorder: number; 
    name: string; 
    position: string 

    constructor(name: string, position: string, batorder: number) {
        this.batorder = batorder;
        this.name = name;
        this.position = position;
    }
}

export class Pitcher {
    name: string;
    position: string;

    constructor(name: string, position: string) {
        this.name = name;
        this.position = position;
    }
}