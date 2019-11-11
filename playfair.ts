
class node {
  str: string;
  row: number;
  column: number;
  select: boolean;
  constructor() {
    this.str = '';
    this.column = 0;
    this.row = 0;
    this.select = true;
  }
}

let arr: node[] = [
  {"str":  'ا', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ب', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'پ', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ت', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ٹ', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ث', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ج', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'چ', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ح', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'خ', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'د', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ڈ', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ذ', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ر', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ڑ', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ز', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ژ', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'س', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ش', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ص', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ض', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ط', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ظ', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ع', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'غ', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ف', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ق', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ک', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'گ', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ل', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'م', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ن', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ں', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'و', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ہ', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ھ', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ء', "column" : 0 ,"row" : 0, "select" : true}, // Least used char at index 36
  {"str":  'ی', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  'ے', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  '0', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  '1', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  '2', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  '3', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  '4', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  '5', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  '6', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  '7', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  '8', "column" : 0 ,"row" : 0, "select" : true},
  {"str":  '9', "column" : 0 ,"row" : 0, "select" : true}
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

for(let i=0;i<msgBreak.length;i = i + 2) {
  if(arr[parseInt(msgBreak[i])].column == arr[parseInt(msgBreak[i+1])].column) {
    encoMsg = encoMsg + ' ' +arr2d[(arr[parseInt(msgBreak[i])].row+1)%7][arr[parseInt(msgBreak[i])].column].str;
    encoMsg = encoMsg + ' ' +arr2d[(arr[parseInt(msgBreak[i+1])].row+1)%7][arr[parseInt(msgBreak[i])].column].str;
    encoMsg = encoMsg + ' ';
  }
  else if(arr[parseInt(msgBreak[i])].row == arr[parseInt(msgBreak[i+1])].row) {
    // console.log('Same row ', arr[parseInt(msgBreak[i])].str , arr[parseInt(msgBreak[i+1])].str);
    // console.log('Ecno msg', arr2d[arr[i].row][(arr[i].column+1)%7].str, arr2d[arr[i+1].row][(arr[i+1].column+1)%7].str)
    encoMsg = encoMsg + ' ' + arr2d[arr[parseInt(msgBreak[i])].row][(arr[parseInt(msgBreak[i])].column+1)%7].str;
    encoMsg = encoMsg + ' ' + arr2d[arr[parseInt(msgBreak[i+1])].row][(arr[parseInt(msgBreak[i+1])].column+1)%7].str;
    encoMsg = encoMsg + ' ';
  }
  else {
    // console.log((arr[parseInt(msgBreak[i+1])].column))
    // console.log((arr[parseInt(msgBreak[i])].column))
    encoMsg = encoMsg + ' ' + arr2d[arr[parseInt(msgBreak[i])].row][(arr[parseInt(msgBreak[i+1])].column)%7].str;
    encoMsg = encoMsg + ' ' + arr2d[arr[parseInt(msgBreak[i+1])].row][(arr[parseInt(msgBreak[i])].column)%7].str;
    encoMsg = encoMsg + ' ';
  }
}
console.log('------------------------------------');
console.log('Encoded Message :')

console.log(encoMsg)