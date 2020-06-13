function countEvens(arr) {
    var count = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] % 2 == 0) {
            count++;
        }
    }
    return count;
}

function countHi(str) {
    var count = 0;
    for(var i=0; i<str.length; i++){
        if(str[i]=="h" && str[i+1]=="i"){
            count++;
        }
    }
    return count;
}

function no14(arr) {
    var one = 0;
    var four = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == 1) {
            one++;
        }
        if(arr[i] == 4) {
            four++;
        }
    }
    if(one>0 && four>0) {
        return false;
    }
    return true;
}

function either24(arr) {
    var countX = 0;
    var countY = 0;
    for(var i=0; i<arr.length; i++){
        if (arr[i]==4 && arr[i+1]==4) countY++;
    }
    return !(countX == countY);
}

function makeChocolate(small, big, goal) {
    var x = goal-big*5;
    var y = 1;
    while(x<0) {
        x=goal-(big-y)*5;
        y++;
    }
    if(x>small) {
        return -1;
    }
    if(x>=0) {
        return x;
    }
}

function luckySum(a,b,c) {
    if(a==13) return 0;
    if(b==13) return a;
    if(c==13) return a+b;
    return a+b+c
}
function maxBlock(str) {
    var count = 1;
    var i = 0;
    var count2 = 1;
    if(str.length == 0){
        return 0;
    }
    while(i < str.length-1){
        if(str.charAt(i) == str.charAt(i+1)){
            count ++;
            if(count > count2){
                count2=count;
            }
        }else{
            count = 1;
        }
        i++;
    }
    return count2;
}

function linearIn(inner, outer) {
    var x = 0;
    var y = 0;
    for(var i=0; i<outer.length; i++) {
        x = outer[i];
        for(var j=0; j<inner.length; j++) {
            if(x == inner[j]) {
                y++;
                break;
            }
        }
    }
    if(y == outer.length) {
        return true;
    }
    return false;
}

function countTriple(str) {
    var count = 0;
    for(var i=0; i<str.length; i++){
        if(str[i] == str[i+1] && str[i+1] == str[i+2]) count++;
    }
    return count;
}

function sameEnds(x) {
    var first = "";
    var last = "";
    if(x.length%2 == 0) {
        first = x.substring(0, x.length/2);
        last = x.substring(x.length/2, x.length);
    }else{
        first = x.substring(0, x.length/2+.5);
        last = x.substring(x.length/2+.5, x.length);
    }
    var y = 0;
    for(var i=0; i<last.length; i++) {
        if(last.substring(i, i+1) == first.substring(0, 1)) {
            y = 0;
            for(var j=i; j<last.length; j++) {
                if(last.substring(j, j+1) == first.substring(y, y+1)) {

                }else{
                    break;
                }
                y++;
                if(j == last.length-1) {
                    return first.substring(0, y);
                }
            }
        }
    }
    return "";
}

function tester() {
    document.getElementById("output").innerHTML += countEvens([6, 4, 3]);
    document.getElementById("output").innerHTML += countHi("hi what up");
    document.getElementById("output").innerHTML += no14([7, 4, 9]);
    document.getElementById("output").innerHTML += either24([2, 3, 1]);
    document.getElementById("output").innerHTML += makeChocolate(7, 6, 10);
    document.getElementById("output").innerHTML += luckySum([8, 2, 13]);
    document.getElementById("output").innerHTML += maxBlock("goofeee");
    document.getElementById("output").innerHTML += linearIn([2, 4, 6, 8], [4, 6]);
    document.getElementById("output").innerHTML += countTriple("yoooho");
    document.getElementById("output").innerHTML += sameEnds("okyesok");
}