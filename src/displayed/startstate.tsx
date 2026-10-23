import { Batter, Pitcher } from "./player"

export let scores: number[][] = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]


const b1 = new Batter("XXX", "B", 1);
const b2 = new Batter("XXX", "B", 2);
const b3 = new Batter("XXX", "B", 3);
const b4 = new Batter("XXX", "B", 4);
const b5 = new Batter("XXX", "B", 5);
const b6 = new Batter("XXX", "B", 6);
const b7 = new Batter("XXX", "B", 7);
const b8 = new Batter("XXX", "B", 8);
const b9 = new Batter("XXX", "B", 9);
const p = new Pitcher("OOO", "P");

export let batters = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
export let batter = b1;
export let pitcher = p;