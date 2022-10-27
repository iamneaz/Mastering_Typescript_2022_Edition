const activeUsers: string[] = ["neaz"];
activeUsers.push("zoro");

const agelist: number[] = [45, 56, 13];

//////////////////////////////////////////////////////////////////////////////////////////
/*
 **  More Array Syntax
 */
const bools: Array<boolean> = [];

type Point = {
  x: number;
  y: number;
};

const coordinates: Array<Point> = [{ x: 4, y: 5 }];
//////////////////////////////////////////////////////////////////////////////////////////
/*
 **  Multidimensonal Arrays
 */
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

// Three dimentional
const demo: number[][][] = [[[1]]];
