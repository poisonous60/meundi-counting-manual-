let g1 = 0; // 고스트 일반
let g2 = 0; // 고스트 레어
let g3 = 0; // 고스트 고대
let g4 = 0; // 고스트 유물
let g5 = 0; // 고스트 서사
let g6 = 0; // 고스트 전설
let g7 = 0; // 고스트 에픽
let g8 = 0; // 고스트 신화
let g9 = 0; // 고스트 태초
let g10 = 0; // 고스트 업그레이드

let g_arr = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];

let d1 = 0; // 드라군 일반
let d2 = 0; // 드라군 레어
let d3 = 0; // 드라군 고대
let d4 = 0; // 드라군 유물
let d5 = 0; // 드라군 서사
let d6 = 0; // 드라군 전설
let d7 = 0; // 드라군 에픽
let d8 = 0; // 드라군 신화
let d9 = 0; // 드라군 태초
let d10 = 0; // 드라군 업그레이드

let d_arr = [d1, d2, d3, d4, d5, d6, d7, d8, d9, d10];

let h1 = 0; // 히드라 일반
let h2 = 0; // 히드라 레어
let h3 = 0; // 히드라 고대
let h4 = 0; // 히드라 유물
let h5 = 0; // 히드라 서사
let h6 = 0; // 히드라 전설
let h7 = 0; // 히드라 에픽
let h8 = 0; // 히드라 신화
let h9 = 0; // 히드라 태초
let h10 = 0; // 히드라 업그레이드

let h_arr = [h1, h2, h3, h4, h5, h6, h7, h8, h9, h10];

$("document").ready(function() {
    for(let i = 1; i <= 10; i++) {
        let label = "g" + i;
        $("#" + label).click(function() {
            g_arr[i - 1]++;
            $("#" + label + "-span").text(g_arr[i - 1]);
        });
        $("#" + label + "m").click(function() {
            g_arr[i - 1]--;
            $("#" + label + "-span").text(g_arr[i - 1]);
        });
    }
    for(let i = 1; i <= 10; i++) {
        let label = "d" + i;
        $("#" + label).click(function() {
            d_arr[i - 1]++;
            $("#" + label + "-span").text(d_arr[i - 1]);
        });
        $("#" + label + "m").click(function() {
            d_arr[i - 1]--;
            $("#" + label + "-span").text(d_arr[i - 1]);
        });
    }
    for(let i = 1; i <= 10; i++) {
        let label = "h" + i;
        $("#" + label).click(function() {
            h_arr[i - 1]++;
            $("#" + label + "-span").text(h_arr[i - 1]);
        });
        $("#" + label + "m").click(function() {
            h_arr[i - 1]--;
            $("#" + label + "-span").text(h_arr[i - 1]);
        });
    }
    
    $("#g10t").click(function() {
        g_arr[9] += 5;
        $("#g10-span").text(g_arr[9]);
    });
    $("#d10t").click(function() {
        d_arr[9] += 5;
        $("#d10-span").text(d_arr[9]);
    });
    $("#h10t").click(function() {
        h_arr[9] += 5;
        $("#h10-span").text(h_arr[9]);
    });


    $("#save").click(function() {
        // download txt file as form
        // g1,d1,h1,
        // g2,d2,h2,
        // g3,d3,h3,
        // g4,d4,h4,
        // g5,d5,h5,
        // g6,d6,h6,
        // g7,d7,h7,
        // g8,d8,h8,
        // g9,d9,h9,
        let filename = $("#filename").val();
        let text = "";
        for(let i = 0; i < 10; i++) {
            text += g_arr[i] + "," + d_arr[i] + "," + h_arr[i] + "\r";
        }
        let blob = new Blob([text], {type: "text/plain;charset=utf-8"});
        saveAs(blob, filename + ".txt");
    });
});
