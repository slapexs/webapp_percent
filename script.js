// Input part
let subject = document.querySelector('#subject');
let studentCount = document.querySelector('#studentCount');
let studentPass = document.querySelector('#studentPass');
let calBtn = document.querySelector('#calBtn');

// Answer part
let ansSection = document.querySelector('#ansSection');
let resSubject = document.querySelector('#resSubject');
let resAllStudent = document.querySelector('#resAllStudent');
let resPassStudent = document.querySelector('#resPassStudent');
let result = document.querySelector('#result');



// function
function calResult(){
    var valSubject = subject.value;
    var valstudentCount = studentCount.value;
    var valstudentPass = studentPass.value;

    if(parseInt(valstudentPass) > parseInt(valstudentCount)){
        alert('จำนวนนักเรียนที่สอบผ่านต้องน้อยกว่า หรือ เท่ากับนักเรียนทั้งหมด');
    }else{
        var percentPass = (parseInt(valstudentPass) / parseInt(valstudentCount)) * 100;
        showAnsSection(true,percentPass)
    }
}

function showAnsSection(action,percentPass){
    if(action){
        ansSection.style.display = 'block';
        resSubject.innerHTML = subject.value;
        resAllStudent.innerHTML = studentCount.value;
        resPassStudent.innerHTML = studentPass.value;
        result.innerHTML = `${percentPass.toFixed(2)}%`;
        calBtn.classList.add('disabled');
    }else{
        ansSection.style.display = 'none';
        calBtn.classList.remove('disabled');
    }
}

function resetFrom(){
    showAnsSection(false);
}

function run(){
    showAnsSection();
} 

run();