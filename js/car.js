window.onload = function () {
    //console.log(document.frm1.opt1);

    // [0] 하나하나 선택시 방법
    // document.frm1.opt1.onclick = sumTotal;
    // document.frm1.opt2.onclick = sumTotal;
    // document.frm1.opt3.onclick = sumTotal;

    // [1] 클래스로 class=opt 모두 선택해주는 방법. (두 방법 모두 사용 가능!)
    let selAll = document.querySelectorAll(".opt");
    //let selAll = document.getElementsByClassName("opt");

    //클릭 이벤트 연결하기.
    //일반 for문 
    for (let i = 0; i < selAll.length; i++) {
        selAll[i].onclick = calcTotal;
        //세개의 옵션을 모두 확인해서 체크된 금액을 차량 기초가액에 더하기!
    }

    //for in (index)
    for (let i in selAll) {
        selAll[i].onclick = calcTotal;
    }

    //for of (value)
    for (let opt of selAll) {
        opt.onclick = calcTotal;
    }

    //개선된 for문
    selAll.forEach(function (opt) {
        opt.onclick = calcTotal;
    });

};

function calcTotal() {
    console.log(">> opt 클릭!!");
    console.log(this);
    let total = document.frm2.total;
    let intTotal = parseInt(total.value);

    if (this.checked) {
        intTotal += parseInt(this.value);
    } else {
        intTotal -= parseInt(this.value);
    }
    //합계 콘솔에 표시해주기
    console.log("합계 : " + intTotal);

    total.value = intTotal;
}
