
class node {
  str: string;
  row: number;
  column: number;
  select: boolean;
  num: number;
  constructor() {
    this.str = '';
    this.column = 0;
    this.row = 0;
    this.select = true;
  }
}

let arr: node[] = [
  {"str":  'ا', "column" : 0 ,"row" : 0, "select" : true, num: 0},
  {"str":  'ب', "column" : 0 ,"row" : 0, "select" : true, num: 1},
  {"str":  'پ', "column" : 0 ,"row" : 0, "select" : true, num: 2},
  {"str":  'ت', "column" : 0 ,"row" : 0, "select" : true, num: 3},
  {"str":  'ٹ', "column" : 0 ,"row" : 0, "select" : true, num: 4},
  {"str":  'ث', "column" : 0 ,"row" : 0, "select" : true, num: 5},
  {"str":  'ج', "column" : 0 ,"row" : 0, "select" : true, num: 6},
  {"str":  'چ', "column" : 0 ,"row" : 0, "select" : true, num: 7},
  {"str":  'ح', "column" : 0 ,"row" : 0, "select" : true, num: 8},
  {"str":  'خ', "column" : 0 ,"row" : 0, "select" : true, num: 9},
  {"str":  'د', "column" : 0 ,"row" : 0, "select" : true, num: 10},
  {"str":  'ڈ', "column" : 0 ,"row" : 0, "select" : true, num: 11},
  {"str":  'ذ', "column" : 0 ,"row" : 0, "select" : true, num: 12},
  {"str":  'ر', "column" : 0 ,"row" : 0, "select" : true, num: 13},
  {"str":  'ڑ', "column" : 0 ,"row" : 0, "select" : true, num: 14},
  {"str":  'ز', "column" : 0 ,"row" : 0, "select" : true, num: 15},
  {"str":  'ژ', "column" : 0 ,"row" : 0, "select" : true, num: 16},
  {"str":  'س', "column" : 0 ,"row" : 0, "select" : true, num: 17},
  {"str":  'ش', "column" : 0 ,"row" : 0, "select" : true, num: 18},
  {"str":  'ص', "column" : 0 ,"row" : 0, "select" : true, num: 19},
  {"str":  'ض', "column" : 0 ,"row" : 0, "select" : true, num: 20},
  {"str":  'ط', "column" : 0 ,"row" : 0, "select" : true, num: 21},
  {"str":  'ظ', "column" : 0 ,"row" : 0, "select" : true, num: 22},
  {"str":  'ع', "column" : 0 ,"row" : 0, "select" : true, num: 23},
  {"str":  'غ', "column" : 0 ,"row" : 0, "select" : true, num: 24},
  {"str":  'ف', "column" : 0 ,"row" : 0, "select" : true, num: 25},
  {"str":  'ق', "column" : 0 ,"row" : 0, "select" : true, num: 26},
  {"str":  'ک', "column" : 0 ,"row" : 0, "select" : true, num: 27},
  {"str":  'گ', "column" : 0 ,"row" : 0, "select" : true, num: 28},
  {"str":  'ل', "column" : 0 ,"row" : 0, "select" : true, num: 29},
  {"str":  'م', "column" : 0 ,"row" : 0, "select" : true, num: 30},
  {"str":  'ن', "column" : 0 ,"row" : 0, "select" : true, num: 31},
  {"str":  'ں', "column" : 0 ,"row" : 0, "select" : true, num: 32},
  {"str":  'و', "column" : 0 ,"row" : 0, "select" : true, num: 33},
  {"str":  'ہ', "column" : 0 ,"row" : 0, "select" : true, num: 34},
  {"str":  'ھ', "column" : 0 ,"row" : 0, "select" : true, num: 35},
  {"str":  'ء', "column" : 0 ,"row" : 0, "select" : true, num: 36}, // Least used char at index 36
  {"str":  'ی', "column" : 0 ,"row" : 0, "select" : true, num: 37},
  {"str":  'ے', "column" : 0 ,"row" : 0, "select" : true, num: 38},
  {"str":  '0', "column" : 0 ,"row" : 0, "select" : true, num: 39},
  {"str":  '1', "column" : 0 ,"row" : 0, "select" : true, num: 40},
  {"str":  '2', "column" : 0 ,"row" : 0, "select" : true, num: 41},
  {"str":  '3', "column" : 0 ,"row" : 0, "select" : true, num: 42},
  {"str":  '4', "column" : 0 ,"row" : 0, "select" : true, num: 43},
  {"str":  '5', "column" : 0 ,"row" : 0, "select" : true, num: 44},
  {"str":  '6', "column" : 0 ,"row" : 0, "select" : true, num: 45},
  {"str":  '7', "column" : 0 ,"row" : 0, "select" : true, num: 46},
  {"str":  '8', "column" : 0 ,"row" : 0, "select" : true, num: 47},
  {"str":  '9', "column" : 0 ,"row" : 0, "select" : true, num: 48}
];

let key: string = "12 32 23 11 5 6 45 1 2 6 7 19";
let keyBreak = key.split(" ");

// Making 2D Array of the PlayFair

let arr2d: node[][];

let row: number = 0;
let col: number = 0;

arr2d = [];

for(let i=0;i<7;i++) {
  for(let j=0;j<7;j++) {
    if (!arr2d[i]) arr2d[i] = []
    arr2d[i][j] = new node()
  }
}


// Adding Key to 2D array
for(let i=0;i<keyBreak.length;i++) {
  if(arr[parseInt(keyBreak[i])].select) {
    arr[parseInt(keyBreak[i])].column = col;
    arr[parseInt(keyBreak[i])].row = row;
    arr[parseInt(keyBreak[i])].select = false;
    arr2d[row][col] = arr[parseInt(keyBreak[i])];
    col++;
    if(col === 7) {
      row++;
      col = col%7;
    }
  }
}

// Adding leftover characters to 2D array
for(let i=0;i<arr.length;i++) {
  if(arr[i].select) {
    arr[i].column = col;
    arr[i].row = row;
    arr[i].select = false;
    arr2d[row][col] = arr[i];
    col++;
    if(col === 7) {
      row++;
      col = col%7;
    }
  }
}
console.log('------------------------------------');
console.log('2D Array :');
for(let i=0;i<7;i++) {
  for(let j=0;j<7;j++) {
    // console.log(arr2d[i][j])
    process.stdout.write(arr2d[i][j].str);
    process.stdout.write(" ");
  }
  console.log('');
}
console.log('------------------------------------');

let msg:string = "1 1 5 4 2 12 45 34 16 17 19";
let msgBreak = msg.split(' ');
let tempMsgBreak = [];

console.log('Message to encode :');
for(let i=0;i<msgBreak.length;i++) {
  process.stdout.write(arr[parseInt(msgBreak[i])].str);
  process.stdout.write(" ");
  // console.log(arr[parseInt(msgBreak[i])].str,arr[parseInt(msgBreak[i+1])].str);
}
console.log('');
console.log('------------------------------------');

// Check for if msg to encode according to rules
for(let i = 0;i<msgBreak.length;i = i+2) {
  if(msgBreak[i] != msgBreak[i+1]){
    tempMsgBreak.push(msgBreak[i]);
    tempMsgBreak.push(msgBreak[i+1]);
  }
  else {
    tempMsgBreak.push(msgBreak[i]);
    tempMsgBreak.push('36');
    tempMsgBreak.push(msgBreak[i+1]);
    i++;
  }
}
if(tempMsgBreak.length%2 != 0) {
  tempMsgBreak.push('36');
}

msgBreak = tempMsgBreak ;
// console.log('After edit message ', msgBreak)

let encoMsg:string = '';
console.log('Message to encode after fix :')
for(let i=0;i<msgBreak.length;i=i+2) {
  process.stdout.write(arr[parseInt(msgBreak[i])].str);
  process.stdout.write(" ");
  process.stdout.write(arr[parseInt(msgBreak[i+1])].str);
  process.stdout.write("  ");
  // console.log(arr[parseInt(msgBreak[i])].str,arr[parseInt(msgBreak[i+1])].str);
}
console.log('')


let decoArr = []

// encoding message

for(let i=0;i<msgBreak.length;i = i + 2) {
  if(arr[parseInt(msgBreak[i])].column == arr[parseInt(msgBreak[i+1])].column) {
    encoMsg = encoMsg + ' ' +arr2d[(arr[parseInt(msgBreak[i])].row+1)%7][arr[parseInt(msgBreak[i])].column].str;
    encoMsg = encoMsg + ' ' +arr2d[(arr[parseInt(msgBreak[i+1])].row+1)%7][arr[parseInt(msgBreak[i])].column].str;
    encoMsg = encoMsg + ' ';
    decoArr.push(arr2d[(arr[parseInt(msgBreak[i])].row+1)%7][arr[parseInt(msgBreak[i])].column].num)
    decoArr.push(arr2d[(arr[parseInt(msgBreak[i+1])].row+1)%7][arr[parseInt(msgBreak[i])].column].num)
  }
  else if(arr[parseInt(msgBreak[i])].row == arr[parseInt(msgBreak[i+1])].row) {
    encoMsg = encoMsg + ' ' + arr2d[arr[parseInt(msgBreak[i])].row][(arr[parseInt(msgBreak[i])].column+1)%7].str;   
    encoMsg = encoMsg + ' ' + arr2d[arr[parseInt(msgBreak[i+1])].row][(arr[parseInt(msgBreak[i+1])].column+1)%7].str;
    encoMsg = encoMsg + ' ';
    decoArr.push(arr2d[arr[parseInt(msgBreak[i])].row][(arr[parseInt(msgBreak[i])].column+1)%7].num)
    decoArr.push(arr2d[arr[parseInt(msgBreak[i+1])].row][(arr[parseInt(msgBreak[i+1])].column+1)%7].num)
  }
  else {
    encoMsg = encoMsg + ' ' + arr2d[arr[parseInt(msgBreak[i])].row][(arr[parseInt(msgBreak[i+1])].column)%7].str;
    encoMsg = encoMsg + ' ' + arr2d[arr[parseInt(msgBreak[i+1])].row][(arr[parseInt(msgBreak[i])].column)%7].str;
    encoMsg = encoMsg + ' ';
    decoArr.push(arr2d[arr[parseInt(msgBreak[i])].row][(arr[parseInt(msgBreak[i+1])].column)%7].num)
    decoArr.push(arr2d[arr[parseInt(msgBreak[i+1])].row][(arr[parseInt(msgBreak[i])].column)%7].num)
  }
}
console.log('------------------------------------');
console.log('Encoded Message :')

console.log(encoMsg)

let decoMsg:string ='';

// Decoding message

for(let i=0;i<decoArr.length;i = i + 2) {
  if(arr[parseInt(decoArr[i])].column == arr[parseInt(decoArr[i+1])].column) {

    let temp = (arr[parseInt(decoArr[i])].row-1)%7;
    let temp1 = (arr[parseInt(decoArr[i+1])].row-1)%7
    if( temp < 0) temp = 7 + temp;
    if( temp1 < 0) temp1 = 7 + temp1;

    decoMsg = decoMsg + ' ' +arr2d[(arr[parseInt(decoArr[i])].row-1)%7][arr[parseInt(decoArr[i])].column].str;
    decoMsg = decoMsg + ' ' +arr2d[(arr[parseInt(decoArr[i+1])].row-1)%7][arr[parseInt(decoArr[i])].column].str;
    decoMsg = decoMsg + ' ';
    
  }
  else if(arr[parseInt(decoArr[i])].row == arr[parseInt(decoArr[i+1])].row) {
    // console.log('Same row ', arr[parseInt(msgBreak[i])].str , arr[parseInt(msgBreak[i+1])].str);
    let temp = (arr[parseInt(decoArr[i])].column-1)%7
    let temp1 = (arr[parseInt(decoArr[i+1])].column-1)%7
    if( temp < 0) temp = 7 + temp;
    if( temp1 < 0) temp1 = 7 + temp1;

    // console.log(12%7)
    // console.log('Ecno msg', arr[parseInt(decoArr[i+1])].row,temp1)
    decoMsg = decoMsg + ' ' + arr2d[arr[parseInt(decoArr[i])].row][temp].str;   
    decoMsg = decoMsg + ' ' + arr2d[arr[parseInt(decoArr[i+1])].row][temp1].str;
    decoMsg = decoMsg + ' ';
    
  }
  else {
    // console.log((arr[parseInt(msgBreak[i+1])].column))
    // console.log((arr[parseInt(msgBreak[i])].column))
    decoMsg = decoMsg + ' ' + arr2d[arr[parseInt(decoArr[i])].row][(arr[parseInt(decoArr[i+1])].column)%7].str;
    decoMsg = decoMsg + ' ' + arr2d[arr[parseInt(decoArr[i+1])].row][(arr[parseInt(decoArr[i])].column)%7].str;
    decoMsg = decoMsg + ' ';
    
  }
}

console.log('------------------------------------');
console.log('Decoded Message :')

console.log(decoMsg);