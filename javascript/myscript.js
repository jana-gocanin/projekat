function check2(){
    const x = document.forms["kontakt_forma"];
    let text = "Napravili ste nalog  sa email-om i lozinkom: \n ";
    for (let i = 0; i < x.length-2 ;i++) {
        text += x.elements[i].value + '\n';
    }
    if(confirm("Da li ste uneli ispravan email i lozinku?")==1){
        if(x.elements[1].value == x.elements[2].value){
        alert(text);
        } else{
            alert("Lozinke se ne poklapaju, probajte ponovo.")
        }
    }
    
}

function check3(){
    
    let text =document.getElementById("comment").value ;

    if(text != ""){
        document.getElementById("com").innerHTML = "Vaš komentar:<br>" + text;
    }
    
}