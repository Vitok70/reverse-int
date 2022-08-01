module.exports = function reverse (n) {
  let str = '';
  let rez;
  let a = (n < 0) ? n *(- 1) : n;
  str = a.toString(10).split('').reverse().join('');

  for (i=0; i < str.length; i++){
     if (str.indexOf('0') == 0){
         str = str.slice(1);
     }
  }
 rez = Number(str);
  return rez;
}
