//피보나치 구현함수
 function getFibonacci(num) { //피보나치 수열(1,2,3,5,8....)
    let i = 0;
    let value1 = 0;
    let value2 = 1;
    let result = [];
    while (i < num) {
        let newValue = value1 + value2;

        result.push(newValue);

        value1 = value2;
        value2 = newValue;
        i++;
    }
    return result.toString();
}

function getPrimeNum() {
    let results = [];
    //1~1000 사이의 소수를 구하는 조건(아래)
    for(let i=1; i<=1000; i++) {
        let isPrimeNumber = true;
        // 1과 자기 자신을 제외한 정수 중에 나눠지는 정수가 있는 지 체크(소수인지 유효성 확인)
        for(let j=2;j<i; i++) {
            if(i%j===0) {
                isPrimeNumber = false;
            }
        }
        //소수면 결과 값에 출력
        if(isPrimeNumber) {
            results.push(i);
        }
    }
    return results;
}
