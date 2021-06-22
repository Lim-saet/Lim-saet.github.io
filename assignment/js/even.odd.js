//1~10까지의 숫자 중에서 짝수의 합과 홀수의 합
// 변수선언 및 초기화 
var a =10;
var even = 0;
var odd = 0;


for (var i = 1; i <= a; i++) {
    if(i%2 == 0) { //%연산자: 왼쪽의 피연산자를 오른쪽의 피연산자로 나눈 후, 그 나머지를 반환
        even = even + i
        console.log("짝수", i)
    } else {
        odd=odd+i
        console.log("홀수",i)
    };
};

console.log(even,odd);