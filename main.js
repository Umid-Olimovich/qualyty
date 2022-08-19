function wear(){

    const USD_TO_UZS = 9433.34;
    const EURO_TO_UZS = 10354.03;
    
    let borishKelishBilet = document.getElementById("BiletSum").value -0;
    let mehmonxonaTolovi = document.getElementById("MexSum").value -0;
    let kongilocharJoylarYEvroda = document.getElementById("QoshSum").value -0;
    let ToplanganSumma = document.getElementById("summa").value - 0;
    let resultYevroToUSD = kongilocharJoylarYEvroda * EURO_TO_UZS ;
    let result = borishKelishBilet * USD_TO_UZS;
    let result1 = mehmonxonaTolovi * USD_TO_UZS;
    let harajatlar = resultYevroToUSD + result + result1;


    if(borishKelishBilet != 0 && mehmonxonaTolovi != 0 && kongilocharJoylarYEvroda != 0 && ToplanganSumma != 0){
        if( ToplanganSumma < harajatlar){
            document.getElementById("doc").innerHTML = " “Alisher, ozgina sabr qilish kerak bo’lar ekan.” ";
        }
        else{
            document.getElementById("doc").innerHTML = " “Oq yo’l, Alisher!” ";
            
        }
        let newCClass = document.getElementById("doc");
        newCClass.classList.add("animate__fadeInUpBig");
    }
    else{
        document.getElementById("doc").innerHTML = "Formani to'ldiring !";
        let rang = document.getElementById("doc");
        rang.style.color = "red";

    }

}


