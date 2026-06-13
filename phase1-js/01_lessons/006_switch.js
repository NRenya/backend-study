const day = "月曜日" ;

switch(day){
    case"月曜日":
    console.log("週の始まりです")
    break;
    
    case"金曜日":
    console.log("もうすぐ休みです")
    break;
    
    case"土曜日":
    console.log("休日です")
    break;

    case"日曜日":
    console.log("休日です")
    break;
    
    default:
    console.log("平日です")
}

//switchは引数の形によって戻り値を最初から確定させているものだね