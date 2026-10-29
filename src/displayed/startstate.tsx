import { Batter, Pitcher } from "./player"

export let scores: number[][] = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]


const b1 = new Batter("1XX", "B", 1);
const b2 = new Batter("2XX", "B", 2);
const b3 = new Batter("3XX", "B", 3);
const b4 = new Batter("4XX", "B", 4);
const b5 = new Batter("5XX", "B", 5);
const b6 = new Batter("6XX", "B", 6);
const b7 = new Batter("7XX", "B", 7);
const b8 = new Batter("8XX", "B", 8);
const b9 = new Batter("9XX", "B", 9);
const p = new Pitcher("OOO", "P");

export let batters = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
export let batter = b1;
export let pitcher = p;