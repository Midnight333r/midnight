let a = prompt("Введите коэфицент А");
let b = prompt("Введите коэфицент B");
let c = prompt("Введите коэфицент C");

if (a == 0 || b == 0 || c == 0) {
    alert("Один из коэфицентов равен 0!");
} else {
    let D = b*b-4*a*c;

    if (D > 0) {
        alert("Дискриминант равен "+ D);

        let x1 = (-b+Math.sqrt(D))/(2*a);
        let x2 = (-b-Math.sqrt(D))/(2*a);

        alert("Первый корень " + x1 + ", Второй корень " + x2);
    }
    if (D == 0) {
        alert("Дискриминант равен "+ D);

        let x = -b/(2*a);

        alert("Единственный корень " + x);
    } 
    if (D < 0) {
        D = D*(-1);
        alert("Дискриминант равен "+ D + "i^2");

        D = Math.sqrt(D);
        let x1 = (-b)/(2*a);
        D = D/(2*a);
        D.toString();
        x1.toString();
        x1 += '+' + D + 'i';
        let x2 = (-b)/(2*a);
        x2.toString();
        x2 += '-' + D + 'i';
        
        alert("Первый корень " + x1 + ", Второй корень " + x2);
    }
}