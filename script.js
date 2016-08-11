var num = prompt ('select a number', '1-100');
function Fizzbuzz (number) { 
    for(var i = 1; i <= number; i++){


    if (  i % 15 == 0) {
        document.write('Fizz Buzz<br/>');
        console.log('Fizz Buzz');

    }else if (i % 5 == 0) {
        document.write('Buzz<br/>');
        console.log('buzz');

    }else if (i % 3 == 0) {


        document.write('Fizz<br/>');
        console.log('Fizz');


    }else {

        document.write(i + '<br/>');
        console.log(i);
    }



}
}
Fizzbuzz(num);