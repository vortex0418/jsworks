//indexOf() 사용
while(true){
    let input = prompt("단어를 입력해 주세요.");

    if(input.indexOf("안녕") >= 0){
        alert("안녕하세요");
    }
    else if(input.indexOf("시") >= 0 || input.indexOf("분") >= 0){
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        alert("현재 시각은 " + hours + "시" + minutes + "분 입니다.");
    }
    else if(input.indexOf("잘 가") >= 0 || input.indexOf("잘 있어") >= 0){
        alert("안녕히 가세요");
        break;
    }
    else{
        alert("모르는 단어입니다.");
    }
}