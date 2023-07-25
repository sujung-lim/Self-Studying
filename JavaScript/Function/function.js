// 기본적인 함수

// 1. 함수 선언문(Function declaration)
// 함수 네이밍할 때 verb의 형태로 만들기 (동작하는 것이기 때문에)
function printHello() {
    console.log('hello');
}
printHello();

//괄호 안에 들어가는 message를 매개변수(parameter)
function log(message) {
    console.log(message);
}
//괄호 안에 들어가는 것을 인수(argument)
log('안녕하시오');

    // 1-1. Default parameter(기본값 매개변수)
    function showMessage(message, from) {
        console.log(`${message} by ${from}`);
    }
    showMessage('Hi');//Hi by undefined

    function showMessage2(message, from = '원하는 default 값') {
       console.log(`${message} by ${from}`);
    }
    showMessage2('Hi');//Hi by 원하는 default 값

    // 1-2. Rest parameter(나머지 매개변수)
    function printAll(...args) {
        for (let i = 0; i < args.length; i++) {
            console.log(args[i]);
        }

        //for loop 대신 간단하게 출력하는 법
        for (const arg of args) {
            console.log(arg);
        }

        //더 간단하게 array method 사용해서 출력하는 법
        args.forEach((arg) => console.log(arg));
        //더 자세한 내용은 배열에서 다시 다룰 예정
    }

    printAll('sujung', 'the', 'web developer');

    // 1-3. Local scope(지역 스코프)
    //지역 스코프를 쉽게 말하면 밖에서는 안이 보이지 않지만 안에서는 밖을 볼 수 있는 썬팅된 창문과 같다
    let globalMessage = 'global'; // global variable 
    function printMessage() {
        let message = 'hello';
        console.log(message); // local variable
        console.log(globalMessage);
        // function printAnother() {
        //     console.log(message);
        //     let childMessage = 'hello';
        // }
        // console.log(childMessage); // ReferenceError
    }

    printMessage();

    // 1-4. Return a value
    function sum(a, b) {
        return a + b;
    }
    const result = sum(1, 2); // 3
    console.log(`sum: ${sum(1, 2)}`); // sum: 3

    // return 타입이 없는 함수들은 
    // return undefined; 이 default로 들어가 있음 (생략 가능)


    // 1-5. Early return, early exit
    // bad
    function upgradeUser(user) {
        if (user.point > 10) {
            // long upgrade logic....
        }
    }

    // good
    function upgradeUser(user) {
        if (user.point <= 10) {
            return;
        }
        // long upgrade logic....
    }

    //if 와 else 를 번갈아가며 쓰는 것보다는 
    //조건이 맞지 않을 때는 빨리 return 을 뱉어내고 함수를 종료하고
    //조건이 맞을 때만 필요한 로직들을 실행하는 것이 더 좋음

// 2. 함수 표현식

// 3. 생성자 함수
// 4. 화살표 함수


