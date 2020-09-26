const calcy = () =>{
    let prog = document.getElementById("programming").value;
    let Maths = document.getElementById("Maths").value;
    let computer = document.getElementById("computer").value;
    let physics = document.getElementById("physics").value;
    
    totalmarks = parseFloat(prog)+parseFloat(Maths)+parseFloat(computer)+parseFloat(physics);
    percantage = (totalmarks/400) * 100;
    console.log(typeof percantage);
    if(percantage <= 100 && percantage > 80){
        grade = 'A';
    }else if(percantage <= 80 && percantage > 60){
        grade = 'B';
    }else if(percantage <= 60 && percantage > 40){
        grade = 'C';
    }else{
        grade = 'F';
    }

    if(grade == "F"){
        final_result = 'Fail'
    }else {
        final_result = 'Pass'
    }
    document.getElementById('result').innerHTML = `Out of 400 your total is ${totalmarks} and percetage is ${percantage} <br> Your grade is ${grade} and you are ${final_result}`

}