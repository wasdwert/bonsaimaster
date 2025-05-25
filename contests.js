function club_ttg01_request1() {
    if (tasks.tracker101<3) {
        contests.visible=1;
        contests.id="TTG01_R1";
        contests.entryprice=0;
        document.getElementById('entryprice').innerHTML = 'Free';
        menu_contests_change();
    
        document.getElementById("modal_contests_title").innerText = "Club Raundo - First Request";
        document.getElementById("modal_contests_explanation").innerHTML = "The clubs first request is the following:<br>- A bonsai that comes for the treetype group 'Raundo'.";
    
        //Show or hide judges
    
        modalcontests.style.display = "block";
        document.getElementById('modal_contests_overflow').scrollTop =0;
    }
}

function club_ttg01_request2() {
    if (tasks.tracker102<3) {
        contests.visible=1;
        contests.id="TTG01_R2";
        contests.entryprice=0;
        document.getElementById('entryprice').innerHTML = 'Free';
        menu_contests_change();
    
        document.getElementById("modal_contests_title").innerText = "Club Raundo - Second Request";
        document.getElementById("modal_contests_explanation").innerHTML = "The clubs second request is as follows:<br>- A bonsai that comes for the treetype group 'Raundo'.<br>- The bonsais combined points (CP) must be at least 10.";
    
        modalcontests.style.display = "block";
        document.getElementById('modal_contests_overflow').scrollTop =0;
    }
}

function club_ttg01_request3() {
    if (tasks.tracker103<3) {
        contests.visible=1;
        contests.id="TTG01_R3";
        contests.entryprice=0;
        document.getElementById('entryprice').innerHTML = 'Free';
        menu_contests_change();
        
        document.getElementById("modal_contests_title").innerText = "Club Raundo - Third Request";
        document.getElementById("modal_contests_explanation").innerHTML = "The clubs third and last request is:<br>- A bonsai that comes for the treetype group 'Raundo'.<br>- The nature isn't allowed to prefer any subcategorie.<br>- A foliage of at least 10.";
    
        modalcontests.style.display = "block";
        document.getElementById('modal_contests_overflow').scrollTop =0;
    }
}

function club_ttg01_competition1() {
    if (clubs_leagues.ttg01c1==0) {
        contests.visible=1;
        contests.id="TTG01_C1";
        contests.entryprice=3;
        
        contests_avatare_part2();
        contests.focus_ttgst=1;
        
        document.getElementById('entryprice').innerHTML = '3&nbsp;<img src="Images/currency_white.svg" width="15" height="15">';
        menu_contests_change();
        
        document.getElementById("modal_contests_title").innerText = "Club Raundo - Competition: Beginner";
        ttgst_attribute_text();
        document.getElementById("modal_contests_explanation").innerHTML = "Competiton focus:&nbsp;"+contests.ttgsttext+"<br>Max Level: 35";
    
        modalcontests.style.display = "block";
        document.getElementById('modal_contests_overflow').scrollTop =0;
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Next competition hasn't begun yet", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

function club_ttg01_competition2() {
    if (clubs_leagues.ttg01c2==0) {
        contests.visible=1;
        contests.id="TTG01_C2";
        contests.entryprice=5;
        
        contests_avatare_part2();
        contests.focus_ttgst=1;
        focus_roll_attribute (); //Contest focus roll tree attribute.
        
        document.getElementById('entryprice').innerHTML = '5&nbsp;<img src="Images/currency_white.svg" width="15" height="15">';
        menu_contests_change();
    
        document.getElementById("modal_contests_title").innerText = "Club Raundo - Competition: Advanced";
        ttgst_attribute_text();
        document.getElementById("modal_contests_explanation").innerHTML = "Competiton focus:&nbsp;"+contests.ttgsttext+"&nbsp;&&nbsp;"+contests.attributetext+"<br>Max Level: 50";
    
        modalcontests.style.display = "block";
        document.getElementById('modal_contests_overflow').scrollTop =0;
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Next competition hasn't begun yet", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

function club_ttg01_competition3() {
    if (clubs_leagues.ttg01c3==0) {
        contests.visible=1;
        contests.id="TTG01_C3";
        contests.entryprice=10;
        
        contests_avatare_part2();
        contests.focus_ttgst=1;
        focus_roll_attribute (); //Contest focus roll tree attribute
        
        document.getElementById('entryprice').innerHTML = '10&nbsp;<img src="Images/currency_white.svg" width="15" height="15">';
        menu_contests_change();
        
        document.getElementById("modal_contests_title").innerText = "Club Raundo - Competition: Expert";
        ttgst_attribute_text();
        document.getElementById("modal_contests_explanation").innerHTML = "Competiton focus:&nbsp;"+contests.ttgsttext+"&nbsp;&&nbsp;"+contests.attributetext+"<br>Max Level: 65";
    
        modalcontests.style.display = "block";
        document.getElementById('modal_contests_overflow').scrollTop =0;
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Next competition hasn't begun yet", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

function league_area01_judging1() {
    if (tasks.tracker201<3) {
    if (clubs_leagues.lea01j1==0) {
        contests.visible=1;
        contests.id="Area01_J1";
        contests.entryprice=0;
        
        contests_avatare_part1();
        contests_avatare_save();
        contests_avatare_part2();
        contests.judge1_preference="Nature Cluster 3";
        contests.judge1_dislike="Nature Cluster 4";
        document.getElementById("judge1pre_text").innerHTML = "Likes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
        document.getElementById("judge1dis_text").innerHTML = "Dislikes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
    

        $(document).ready(function(){
            $('#judges').show();
        });
        
        document.getElementById('entryprice').innerHTML = 'Free';
        menu_contests_change();
    
        document.getElementById("modal_contests_title").innerText = "League Area 01 - First Judging";
        ttgst_attribute_text();
        document.getElementById("modal_contests_explanation").innerHTML = "Competiton focus:&nbsp;"+contests.ttgsttext+"&nbsp;&&nbsp;"+contests.attributetext+"<br>Max Level: 50";
    
        modalcontests.style.display = "block";
        document.getElementById('modal_contests_overflow').scrollTop =0;
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Wait to enter new bonsai", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    }
}

function league_area01_judging2() {
    if (tasks.tracker202<3) {
    if (clubs_leagues.lea01j2==0) {
        contests.visible=1;
        contests.id="Area01_J2";
        contests.entryprice=0;
        
        contests_avatare_part1();
        contests_avatare_save();
        contests_avatare_part2();
        contests.judge1_preference="Nature Cluster 3";
        contests.judge1_dislike="Nature Cluster 4";
        document.getElementById("judge1pre_text").innerHTML = "Likes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
        document.getElementById("judge1dis_text").innerHTML = "Dislikes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
        contests.judge2_preference="Nature Cluster 3";
        contests.judge2_dislike="Nature Cluster 4";
        document.getElementById("judge2pre_text").innerHTML = "Likes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
        document.getElementById("judge2dis_text").innerHTML = "Dislikes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";

        $(document).ready(function(){
            $('#judges').show();
            $('#judge2').show();
        });
        
        document.getElementById('entryprice').innerHTML = 'Free';
        menu_contests_change();
    
        document.getElementById("modal_contests_title").innerText = "League Area 01 - Second Judging";
        ttgst_attribute_text();
        document.getElementById("modal_contests_explanation").innerHTML = "Competiton focus:&nbsp;"+contests.ttgsttext+"&nbsp;&&nbsp;"+contests.attributetext+"<br>Max Level: 50";
    
        modalcontests.style.display = "block";
        document.getElementById('modal_contests_overflow').scrollTop =0;
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Wait to enter new bonsai", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    }
}

function league_area01_judging3() {
    if (tasks.tracker203<3) {
    if (clubs_leagues.lea01j3==0) {
        contests.visible=1;
        contests.id="Area01_J3";
        contests.entryprice=0;
        
        contests_avatare_part1();
        contests_avatare_save();
        contests_avatare_part2();
        contests.judge1_preference="Nature Cluster 3";
        contests.judge1_dislike="Nature Cluster 4";
        document.getElementById("judge1pre_text").innerHTML = "Likes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
        document.getElementById("judge1dis_text").innerHTML = "Dislikes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
        contests.judge2_preference="Nature Cluster 3";
        contests.judge2_dislike="Nature Cluster 4";
        document.getElementById("judge2pre_text").innerHTML = "Likes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
        document.getElementById("judge2dis_text").innerHTML = "Dislikes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
        contests.judge3_preference="Nature Cluster 3";
        contests.judge3_dislike="Nature Cluster 4";
        document.getElementById("judge3pre_text").innerHTML = "Likes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
        document.getElementById("judge3dis_text").innerHTML = "Dislikes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";

        $(document).ready(function(){
            $('#judges').show();
            $('#judge2').show();
            $('#judge3').show();
        });
        
        document.getElementById('entryprice').innerHTML = 'Free';
        menu_contests_change();
    
        document.getElementById("modal_contests_title").innerText = "League Area 01 - Third Judging";
        ttgst_attribute_text();
        document.getElementById("modal_contests_explanation").innerHTML = "Competiton focus:&nbsp;"+contests.ttgsttext+"&nbsp;&&nbsp;"+contests.attributetext+"<br>Max Level: 50";
    
        modalcontests.style.display = "block";
        document.getElementById('modal_contests_overflow').scrollTop =0;
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Wait to enter new bonsai", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    }
}

function league_area01_exhibition1() {
    if (clubs_leagues.lea01c1==0) {
        contests.visible=1;
        contests.id="Area01_C1";
        contests.entryprice=3;
        
        contests_avatare_part1();
        contests_avatare_save();
        contests_avatare_part2();
        focus_roll_ttgst (); //Contest focus roll ttg/st
        focus_roll_attribute (); //Contest focus roll tree attribute
        contests_judges ();//Calculation of judges likes and dislikes
        $(document).ready(function(){
            $('#judges').show();
            $('#judge2').show();
            $('#judge3').show();
        });
        
        document.getElementById('entryprice').innerHTML = '3&nbsp;<img src="Images/currency_white.svg" width="15" height="15">';
        menu_contests_change();
    
        document.getElementById("modal_contests_title").innerText = "League Area 01 - Exhibition: Beginner";
        ttgst_attribute_text();
        document.getElementById("modal_contests_explanation").innerHTML = "Competiton focus:&nbsp;"+contests.ttgsttext+"&nbsp;&&nbsp;"+contests.attributetext+"<br>Max Level: 50";
    
        modalcontests.style.display = "block";
        document.getElementById('modal_contests_overflow').scrollTop =0;
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Next competition hasn't begun yet", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

function league_area01_exhibition2() {
    if (clubs_leagues.lea01c2==0) {
        contests.visible=1;
        contests.id="Area01_C2";
        contests.entryprice=5;
        
        contests_avatare_part1();
        contests_avatare_save();
        contests_avatare_part2();
        focus_roll_ttgst (); //Contest focus roll ttg/st
        focus_roll_attribute (); //Contest focus roll tree attribute
        contests_judges ();//Calculation of judges likes and dislikes
        $(document).ready(function(){
            $('#judges').show();
            $('#judge2').show();
            $('#judge3').show();
        });
        
        document.getElementById('entryprice').innerHTML = '5&nbsp;<img src="Images/currency_white.svg" width="15" height="15">';
        menu_contests_change();
    
        document.getElementById("modal_contests_title").innerText = "League Area 01 - Exhibition: Advanced";
        ttgst_attribute_text();
        document.getElementById("modal_contests_explanation").innerHTML = "Competiton focus:&nbsp;"+contests.ttgsttext+"&nbsp;&&nbsp;"+contests.attributetext+"<br>Max Level: 70";
    
        modalcontests.style.display = "block";
        document.getElementById('modal_contests_overflow').scrollTop =0;
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Next competition hasn't begun yet", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

function league_area01_exhibition3() {
    if (clubs_leagues.lea01c3==0) {
        contests.visible=1;
        contests.id="Area01_C3";
        contests.entryprice=10;
        
        contests_avatare_part1();
        contests_avatare_save();
        contests_avatare_part2();
        focus_roll_ttgst (); //Contest focus roll ttg/st
        focus_roll_attribute (); //Contest focus roll tree attribute
        contests_judges ();//Calculation of judges likes and dislikes
        $(document).ready(function(){
            $('#judges').show();
            $('#judge2').show();
            $('#judge3').show();
        });
        
        document.getElementById('entryprice').innerHTML = '10&nbsp;<img src="Images/currency_white.svg" width="15" height="15">';
        menu_contests_change();
    
        document.getElementById("modal_contests_title").innerText = "League Area 01 - Exhibition: Expert";
        ttgst_attribute_text();
        document.getElementById("modal_contests_explanation").innerHTML = "Competiton focus:&nbsp;"+contests.ttgsttext+"&nbsp;&&nbsp;"+contests.attributetext+"<br>Max Level: 90";
    
        modalcontests.style.display = "block";
        document.getElementById('modal_contests_overflow').scrollTop =0;
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Next competition hasn't begun yet", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

function contests_bonsaiunavailable() {
    if (x_contests==1) {
        contests_bonsaiunavailable2(bonsai001, Button_Modal_Contests_BonsaiA, "Button_Modal_Contests_BonsaiA", contests.z=1);
        contests_bonsaiunavailable2(bonsai002, Button_Modal_Contests_BonsaiB, "Button_Modal_Contests_BonsaiB", contests.z=2);
        contests_bonsaiunavailable2(bonsai003, Button_Modal_Contests_BonsaiC, "Button_Modal_Contests_BonsaiC", contests.z=3);
        contests_bonsaiunavailable2(bonsai004, Button_Modal_Contests_BonsaiD, "Button_Modal_Contests_BonsaiD", contests.z=4);
        contests_bonsaiunavailable2(bonsai005, Button_Modal_Contests_BonsaiE, "Button_Modal_Contests_BonsaiE", contests.z=5);
        contests_bonsaiunavailable2(bonsai006, Button_Modal_Contests_BonsaiF, "Button_Modal_Contests_BonsaiF", contests.z=6);
        contests_bonsaiunavailable2(bonsai007, Button_Modal_Contests_BonsaiG, "Button_Modal_Contests_BonsaiG", contests.z=7);
        contests_bonsaiunavailable2(bonsai008, Button_Modal_Contests_BonsaiH, "Button_Modal_Contests_BonsaiH", contests.z=8);
        contests_bonsaiunavailable2(bonsai009, Button_Modal_Contests_BonsaiI, "Button_Modal_Contests_BonsaiI", contests.z=9);
        contests_bonsaiunavailable2(bonsai010, Button_Modal_Contests_BonsaiJ, "Button_Modal_Contests_BonsaiJ", contests.z=10);
    }
    else if (x_contests==11) {
        contests_bonsaiunavailable2(bonsai011, Button_Modal_Contests_BonsaiA, "Button_Modal_Contests_BonsaiA", contests.z=1);
        contests_bonsaiunavailable2(bonsai012, Button_Modal_Contests_BonsaiB, "Button_Modal_Contests_BonsaiB", contests.z=2);
        contests_bonsaiunavailable2(bonsai013, Button_Modal_Contests_BonsaiC, "Button_Modal_Contests_BonsaiC", contests.z=3);
        contests_bonsaiunavailable2(bonsai014, Button_Modal_Contests_BonsaiD, "Button_Modal_Contests_BonsaiD", contests.z=4);
        contests_bonsaiunavailable2(bonsai015, Button_Modal_Contests_BonsaiE, "Button_Modal_Contests_BonsaiE", contests.z=5);
        contests_bonsaiunavailable2(bonsai016, Button_Modal_Contests_BonsaiF, "Button_Modal_Contests_BonsaiF", contests.z=6);
        contests_bonsaiunavailable2(bonsai017, Button_Modal_Contests_BonsaiG, "Button_Modal_Contests_BonsaiG", contests.z=7);
        contests_bonsaiunavailable2(bonsai018, Button_Modal_Contests_BonsaiH, "Button_Modal_Contests_BonsaiH", contests.z=8);
        contests_bonsaiunavailable2(bonsai019, Button_Modal_Contests_BonsaiI, "Button_Modal_Contests_BonsaiI", contests.z=9);
        contests_bonsaiunavailable2(bonsai020, Button_Modal_Contests_BonsaiJ, "Button_Modal_Contests_BonsaiJ", contests.z=10);
    }
}

function contests_bonsaiunavailable2(bonsaixx, a, b, contestsz) {
    if (contests.bonsaichoosen==contests.z) {
        if (contests.bonsaichoosenx==x_contests) {}
        else {
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
            if (bonsaixx.id==0) {
                a.className = "Button_Modal_Contests_Unavailable";
                document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Empty</span>";
                contests_bonsaiunavailable3(bonsaixx, a, b);
            }
            else if (bonsaixx.growing==1) {
                a.className = "Button_Modal_Contests_Unavailable";
                document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Growing</span>";
                contests_bonsaiunavailable3(bonsaixx, a, b);
            }
            else {
                a.className = "Button_Modal_Position_Class";
                document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Choose</span>";
                contests_bonsaiunavailable3(bonsaixx, a, b);
            } 
        }
    }
    else if (bonsaixx.id==0) {
        a.className = "Button_Modal_Contests_Unavailable";
        document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Empty</span>";
        contests_bonsaiunavailable3(bonsaixx, a, b);
    }
    else if (bonsaixx.growing==1) {
        a.className = "Button_Modal_Contests_Unavailable";
        document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Growing</span>";
        contests_bonsaiunavailable3(bonsaixx, a, b);
    }
    else {
        a.className = "Button_Modal_Position_Class";
        document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Choose</span>";
        contests_bonsaiunavailable3(bonsaixx, a, b);
    }    
}

function contests_bonsaiunavailable3(bonsaixx, a, b) {
    if (contests.id=="TTG01_R1") {
        if (bonsaixx.id==0) {}
        else if (bonsaixx.treetypegroup!==1) {
            a.className = "Button_Modal_Contests_Unavailable";
            document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Unfit</span>";
        }
    }
    else if (contests.id=="TTG01_R2") {
        if (bonsaixx.id==0) {}
        else if (bonsaixx.treetypegroup!==1 || bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots<10) {
            a.className = "Button_Modal_Contests_Unavailable";
            document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Unfit</span>";
        }
    }
    else if (contests.id=="TTG01_R3") {
        if (bonsaixx.id==0) {}
        else if (bonsaixx.treetypegroup!==1 || bonsaixx.nature==2 || bonsaixx.nature==3 || bonsaixx.nature==4 || bonsaixx.nature==6 || bonsaixx.nature==7 || bonsaixx.nature==8 || bonsaixx.nature==10 || bonsaixx.nature==11 || bonsaixx.nature==12 || bonsaixx.nature==14 || bonsaixx.nature==15 || bonsaixx.nature==16 || bonsaixx.foliage<10) {
            a.className = "Button_Modal_Contests_Unavailable";
            document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Unfit</span>";
        }
    }
    else if (contests.id=="TTG01_C1") {
        if (bonsaixx.id==0) {}
        else if (bonsaixx.level>35) {
            a.className = "Button_Modal_Contests_Unavailable";
            document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Unfit</span>";
        }
    }
    
    else if (contests.id=="TTG01_C2") {
        if (bonsaixx.id==0) {}
        else if (bonsaixx.level>50) {
            a.className = "Button_Modal_Contests_Unavailable";
            document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Unfit</span>";
        }
    }
    
    else if (contests.id=="TTG01_C3") {
        if (bonsaixx.id==0) {}
        else if (bonsaixx.level>65) {
            a.className = "Button_Modal_Contests_Unavailable";
            document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Unfit</span>";
        }
    }
    else if (contests.id=="Area01_C1") {
        if (bonsaixx.id==0) {}
        else if (bonsaixx.level>50) {
            a.className = "Button_Modal_Contests_Unavailable";
            document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Unfit</span>";
        }
    }
    else if (contests.id=="Area01_C2") {
        if (bonsaixx.id==0) {}
        else if (bonsaixx.level>70) {
            a.className = "Button_Modal_Contests_Unavailable";
            document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Unfit</span>";
        }
    }
    else if (contests.id=="Area01_C3") {
        if (bonsaixx.id==0) {}
        else if (bonsaixx.level>90) {
            a.className = "Button_Modal_Contests_Unavailable";
            document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Unfit</span>";
        }
    }
} 

function contests_choosebonsai(contestsz) {
    if (x_contests==1) {
        if (contests.z==1) {
            contests_choosebonsai2(bonsai001, contests.z);
        }
        else if (contests.z==2) {
            contests_choosebonsai2(bonsai002, contests.z);
        }
        else if (contests.z==3) {
            contests_choosebonsai2(bonsai003, contests.z);
        }
        else if (contests.z==4) {
            contests_choosebonsai2(bonsai004, contests.z);
        }
        else if (contests.z==5) {
            contests_choosebonsai2(bonsai005, contests.z);
        }
        else if (contests.z==6) {
            contests_choosebonsai2(bonsai006, contests.z);
        }
        else if (contests.z==7) {
            contests_choosebonsai2(bonsai007, contests.z);
        }
        else if (contests.z==8) {
            contests_choosebonsai2(bonsai008, contests.z);
        }
        else if (contests.z==9) {
            contests_choosebonsai2(bonsai009, contests.z);
        }
        else if (contests.z==10) {
            contests_choosebonsai2(bonsai010, contests.z);
        }
    }
    else if (x_contests==11) {
        if (contests.z==1) {
            contests_choosebonsai2(bonsai011, contests.z);            
        }
        else if (contests.z==2) {
            contests_choosebonsai2(bonsai012, contests.z);
        }
        else if (contests.z==3) {
            contests_choosebonsai2(bonsai013, contests.z);
        }
        else if (contests.z==4) {
            contests_choosebonsai2(bonsai014, contests.z);
        }
        else if (contests.z==5) {
            contests_choosebonsai2(bonsai015, contests.z);
        }
        else if (contests.z==6) {
            contests_choosebonsai2(bonsai016, contests.z);
        }
        else if (contests.z==7) {
            contests_choosebonsai2(bonsai017, contests.z);
        }
        else if (contests.z==8) {
            contests_choosebonsai2(bonsai018, contests.z);
        }
        else if (contests.z==9) {
            contests_choosebonsai2(bonsai019, contests.z);
        }
        else if (contests.z==10) {
            contests_choosebonsai2(bonsai020, contests.z);
        }
    }
}
        
function contests_choosebonsai2(bonsaixx, contestsz) {
    if (contests.id=="TTG01_R1") {
        if (bonsaixx.id==0 || bonsaixx.growing==1 || bonsaixx.treetypegroup!==1) {}
        else {
            contests_choosebonsai3();
        }
    }
    else if (contests.id=="TTG01_R2") {
        if (bonsaixx.id==0 || bonsaixx.growing==1 || bonsaixx.treetypegroup!==1 || bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots<10) {}
        else {
            contests_choosebonsai3();
        }
    }
    else if (contests.id=="TTG01_R3") {
        if (bonsaixx.id==0 || bonsaixx.growing==1 || bonsaixx.treetypegroup!==1 || bonsaixx.nature==2 || bonsaixx.nature==3 || bonsaixx.nature==4 || bonsaixx.nature==6 || bonsaixx.nature==7 || bonsaixx.nature==8 || bonsaixx.nature==10 || bonsaixx.nature==11 || bonsaixx.nature==12 || bonsaixx.nature==14 || bonsaixx.nature==15 || bonsaixx.nature==16 || bonsaixx.foliage<10) {}
        else {
            contests_choosebonsai3();
        }
    }
    else {
        if (bonsaixx.id==0 || bonsaixx.growing==1) {}
        else {
            contests_choosebonsai3();
        }
    }
}

function contests_choosebonsai3() {
    if (contests.bonsaichoosen==0) {
        contests.bonsaichoosen=contests.z;
        contests.bonsaichoosenx=x_contests;
        if (contests.bonsaichoosen==1) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiA, "Button_Modal_Contests_BonsaiA");
        }
        if (contests.bonsaichoosen==2) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiB, "Button_Modal_Contests_BonsaiB"); 
        }
        if (contests.bonsaichoosen==3) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiC, "Button_Modal_Contests_BonsaiC"); 
        }
        if (contests.bonsaichoosen==4) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiD, "Button_Modal_Contests_BonsaiD"); 
        }
        if (contests.bonsaichoosen==5) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiE, "Button_Modal_Contests_BonsaiE");
        }
        if (contests.bonsaichoosen==6) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiF, "Button_Modal_Contests_BonsaiF");
        }
        if (contests.bonsaichoosen==7) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiG, "Button_Modal_Contests_BonsaiG");
        }
        if (contests.bonsaichoosen==8) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiH, "Button_Modal_Contests_BonsaiH");
        }
        if (contests.bonsaichoosen==9) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiI, "Button_Modal_Contests_BonsaiI");
        }
        if (contests.bonsaichoosen==10) {
            contests_choosebonsai3a(Button_Modal_Contests_BonsaiJ, "Button_Modal_Contests_BonsaiJ");
        }
    }
    else {
        if (contests.bonsaichoosen==contests.z) {
            if (contests.z==1) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiA, "Button_Modal_Contests_BonsaiA");
            }
            if (contests.z==2) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiB, "Button_Modal_Contests_BonsaiB");
            }
            if (contests.z==3) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiC, "Button_Modal_Contests_BonsaiC");
            }
            if (contests.z==4) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiD, "Button_Modal_Contests_BonsaiD");
            }
            if (contests.z==5) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiE, "Button_Modal_Contests_BonsaiE");
            }
            if (contests.z==6) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiF, "Button_Modal_Contests_BonsaiF");
            }
            if (contests.z==7) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiG, "Button_Modal_Contests_BonsaiG");
            }
            if (contests.z==8) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiH, "Button_Modal_Contests_BonsaiH");
            }
            if (contests.z==9) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiI, "Button_Modal_Contests_BonsaiI");
            }
            if (contests.z==10) {
                contests_choosebonsai3b(Button_Modal_Contests_BonsaiJ, "Button_Modal_Contests_BonsaiJ");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can only choose one bonsai", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
} 

function contests_choosebonsai3a(a, b) {
    a.className = "Button_Modal_Contests_Choosen";
    document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Choosen</span>";
}

function contests_choosebonsai3b(a, b) {
    a.className = "Button_Modal_Position_Class";
    document.getElementById(b).innerHTML = "<span style='transform: rotate(45deg)'>Choose</span>";
    contests.bonsaichoosen=0;
    contests.bonsaichoosenx=0;
}

function contests_result_request() {
    if (contests.bonsaichoosenx==1) {
        if (contests.bonsaichoosen==1) {
            contests_result_bonsaixa(bonsai001);
        }
        else if (contests.bonsaichoosen==2) {
            contests_result_bonsaixa(bonsai002);
        }
        else if (contests.bonsaichoosen==3) {
            contests_result_bonsaixa(bonsai003);
        }
        else if (contests.bonsaichoosen==4) {
            contests_result_bonsaixa(bonsai004);
        }
        else if (contests.bonsaichoosen==5) {
            contests_result_bonsaixa(bonsai005);
        }
        else if (contests.bonsaichoosen==6) {
            contests_result_bonsaixa(bonsai006);
        }
        else if (contests.bonsaichoosen==7) {
            contests_result_bonsaixa(bonsai007);
        }
        else if (contests.bonsaichoosen==8) {
            contests_result_bonsaixa(bonsai008);
        }
        else if (contests.bonsaichoosen==9) {
            contests_result_bonsaixa(bonsai009);
        }
        else if (contests.bonsaichoosen==10) {
            contests_result_bonsaixa(bonsai010);
        }
    }
    else if (contests.bonsaichoosenx==11) {
        if (contests.bonsaichoosen==1) {
            contests_result_bonsaixa(bonsai011);
        }
        else if (contests.bonsaichoosen==2) {
            contests_result_bonsaixa(bonsai012);
        }
        else if (contests.bonsaichoosen==3) {
            contests_result_bonsaixa(bonsai013);
        }
        else if (contests.bonsaichoosen==4) {
            contests_result_bonsaixa(bonsai014);
        }
        else if (contests.bonsaichoosen==5) {
            contests_result_bonsaixa(bonsai015);
        }
        else if (contests.bonsaichoosen==6) {
            contests_result_bonsaixa(bonsai016);
        }
        else if (contests.bonsaichoosen==7) {
            contests_result_bonsaixa(bonsai017);
        }
        else if (contests.bonsaichoosen==8) {
            contests_result_bonsaixa(bonsai018);
        }
        else if (contests.bonsaichoosen==9) {
            contests_result_bonsaixa(bonsai019);
        }
        else if (contests.bonsaichoosen==10) {
            contests_result_bonsaixa(bonsai020);
        }
    }
}
function contests_result_bonsaixa(bonsaixx) {
    document.getElementById("bonsaixa_name_contests").innerText = bonsaixx.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaixa_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, bonsaixx, "50", "50");
    document.getElementById("ButtonBonsaiXA_contests").style.backgroundImage= fetchbonsairanktq(bonsaixx);
    document.getElementById("bonsaixa_bb_contests").innerHTML = bonsaixx.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaixa_rank_contests").innerHTML = rank_calculation(bonsaixx);        
    document.getElementById("bonsaixa_level_contests").innerText = bonsaixx.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaixa_ttg_contests").innerText = treetypegroupname[bonsaixx.treetypegroup];
    document.getElementById("bonsaixa_st_contests").innerText = styletypename[bonsaixx.styletype];
    document.getElementById("bonsaixa_nature_contests").innerText = natures[bonsaixx.nature];
    document.getElementById("bonsaixa_f_contests").innerHTML = bonsaixx.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaixa_b_contests").innerHTML = bonsaixx.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaixa_t_contests").innerHTML = bonsaixx.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaixa_r_contests").innerHTML = bonsaixx.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaixa_idstring_contests").innerText = bonsaixx.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaixa_rank_lvl").innerHTML = rank_lvl(bonsaixx, "bonsaixa_rank_lvltext");
    document.getElementById("bonsaixa_rank_tq").innerHTML = rank_tq(bonsaixx, "bonsaixa_rank_tqtext");
    document.getElementById("bonsaixa_rank_cp").innerHTML = rank_cp(bonsaixx, "bonsaixa_rank_cptext");
    document.getElementById("bonsaixa_rank_pot").innerHTML = rank_pot(bonsaixx, "bonsaixa_rank_pottext");
    document.getElementById("bonsaixa_rank_pres").innerHTML = rank_pres(bonsaixx, "bonsaixa_rank_prestext");        
    document.getElementById("bonsaixa_rank_look").innerHTML = rank_look(bonsaixx, "bonsaixa_rank_looktext");
    document.getElementById("bonsaixa_f_pot").innerHTML = potentiallabel(bonsaixx.newpotentialfoliage, bonsaixx.inheritedpotentialfoliage, bonsaixx.obtainedpotentialfoliage);
    document.getElementById("bonsaixa_b_pot").innerHTML = potentiallabel(bonsaixx.newpotentialbranches, bonsaixx.inheritedpotentialbranches, bonsaixx.obtainedpotentialbranches);
    document.getElementById("bonsaixa_t_pot").innerHTML = potentiallabel(bonsaixx.newpotentialtrunk, bonsaixx.inheritedpotentialtrunk, bonsaixx.obtainedpotentialtrunk);
    document.getElementById("bonsaixa_r_pot").innerHTML = potentiallabel(bonsaixx.newpotentialroots, bonsaixx.inheritedpotentialroots, bonsaixx.obtainedpotentialroots);
        
    
    if (contests.id=="Area01_J1" || contests.id=="Area01_J2" || contests.id=="Area01_J3") {
        contests_results_judging(bonsaixx);
    }
}

function contests_results_judging(bonsaixx) {
    $(document).ready(function(){
        $('#bonsaixa_scoretext').show();
        $('#bonsaixa_score').show();
        $('#bonsaixa_bbtext').hide();
        $('#bonsaixa_bb').hide();
    });
    if (contests.id=="Area01_J1") {
        contests_judges_results (bonsaixx, contests.judge1_preference, contests.judge1_dislike);
        bonsaixx.score_judges+=ajudge;
        ajudge=0;
        contests_look (bonsaixx);
        bonsaixx.score=Math.round((bonsaixx.basebeauty+bonsaixx.score_judges+bonsaixx.score_look)*10)/10;
        document.getElementById("bonsaixa_score_contests").innerHTML = bonsaixx.score.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsaixa_score_bb").innerHTML = bonsaixx.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsaixa_score_judg").innerHTML = bonsaixx.score_judges.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsaixa_score_look").innerHTML = bonsaixx.score_look.toLocaleString('en', {minimumFractionDigits: 1});
        if (bonsaixx.score>=1) {
            document.getElementById("modal_contests_result_request_result").innerHTML = "Congratulations your bonsai placed first and you won the exhibition! You can now enter the advanced exhibition of this league.";
            $(document).ready(function(){
                $('#T201').hide();
                $('#T202').show();
                $('#T201C').show();
            }); 
            tasks.tracker201=3;
            tasks.tracker202=1;
            document.getElementById("modal_contests_result_request_reward").innerHTML = "3 XP";
            experience(3);
            fetchvalues();
        }
        else {
            document.getElementById("modal_contests_result_request_result").innerHTML = "The score of your bonsai wasn't high enough. Try again please.";
            document.getElementById("modal_contests_result_request_reward").innerText = "1 XP";
            clubs_leagues.lea01j1=6; //600
            experience(1);
            fetchvalues();
        }
        bonsaixx.score=0;
        bonsaixx.score_judges=0;
        bonsaixx.score_look=0;
    }
    else if (contests.id=="Area01_J2") {
        contests_judges_results (bonsaixx, contests.judge1_preference, contests.judge1_dislike);
        bonsaixx.score_judges+=ajudge;
        contests_judges_results (bonsaixx, contests.judge2_preference, contests.judge2_dislike);
        bonsaixx.score_judges+=ajudge;
        ajudge=0;
        contests_look (bonsaixx);
        bonsaixx.score=Math.round((bonsaixx.basebeauty+bonsaixx.score_judges+bonsaixx.score_look)*10)/10;
        document.getElementById("bonsaixa_score_contests").innerHTML = bonsaixx.score.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsaixa_score_bb").innerHTML = bonsaixx.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsaixa_score_judg").innerHTML = bonsaixx.score_judges.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsaixa_score_look").innerHTML = bonsaixx.score_look.toLocaleString('en', {minimumFractionDigits: 1});
        if (bonsaixx.score>=2) {
            document.getElementById("modal_contests_result_request_result").innerHTML = "Congratulations your bonsai placed first and you won the exhibition! You can now enter the advanced exhibition of this league.";
            $(document).ready(function(){
                $('#T202').hide();
                $('#T203').show();
                $('#T202C').show();
            }); 
            tasks.tracker202=3;
            tasks.tracker203=1;
            document.getElementById("modal_contests_result_request_reward").innerHTML = "5 XP";
            experience(5);
            fetchvalues();
        }
        else {
            document.getElementById("modal_contests_result_request_result").innerHTML = "The score of your bonsai wasn't high enough. Try again please.";
            document.getElementById("modal_contests_result_request_reward").innerText = "1 XP";
            clubs_leagues.lea01j2=6; //600
            experience(1);
            fetchvalues();
        }
        bonsaixx.score=0;
        bonsaixx.score_judges=0;
        bonsaixx.score_look=0;
    }
    else if (contests.id=="Area01_J3") {
        contests_judges_results (bonsaixx, contests.judge1_preference, contests.judge1_dislike);
        bonsaixx.score_judges+=ajudge;
        contests_judges_results (bonsaixx, contests.judge2_preference, contests.judge2_dislike);
        bonsaixx.score_judges+=ajudge;
        contests_judges_results (bonsaixx, contests.judge3_preference, contests.judge3_dislike);
        bonsaixx.score_judges+=ajudge;
        ajudge=0;
        contests_look (bonsaixx);
        bonsaixx.score=Math.round((bonsaixx.basebeauty+bonsaixx.score_judges+bonsaixx.score_look)*10)/10;
        document.getElementById("bonsaixa_score_contests").innerHTML = bonsaixx.score.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsaixa_score_bb").innerHTML = bonsaixx.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsaixa_score_judg").innerHTML = bonsaixx.score_judges.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsaixa_score_look").innerHTML = bonsaixx.score_look.toLocaleString('en', {minimumFractionDigits: 1});
        if (bonsaixx.score>=3) {
            document.getElementById("modal_contests_result_request_result").innerHTML = "Congratulations your bonsai placed first and you won the exhibition! You can now enter the advanced exhibition of this league.";
            $(document).ready(function(){
                $('#T203').hide();
                $('#T203C').show();
            }); 
            tasks.tracker203=3;
            document.getElementById("modal_contests_result_request_reward").innerHTML = "10 XP";
            experience(10);
            fetchvalues();
        }
        else {
            document.getElementById("modal_contests_result_request_result").innerHTML = "The score of your bonsai wasn't high enough. Try again please.";
            document.getElementById("modal_contests_result_request_reward").innerText = "1 XP";
            clubs_leagues.lea01j3=6; //600
            experience(1);
            fetchvalues();
        }
        bonsaixx.score=0;
        bonsaixx.score_judges=0;
        bonsaixx.score_look=0;
    }
}

function contests_result_competition () {
    if (contests.bonsaichoosenx==1) {
        if (contests.bonsaichoosen==1) {
            contests_result_bonsaixb(bonsai001);
        }
        else if (contests.bonsaichoosen==2) {
            contests_result_bonsaixb(bonsai002);
        }
        else if (contests.bonsaichoosen==3) {
            contests_result_bonsaixb(bonsai003);
        }
        else if (contests.bonsaichoosen==4) {
            contests_result_bonsaixb(bonsai004);
        }
        else if (contests.bonsaichoosen==5) {
            contests_result_bonsaixb(bonsai005);
        }
        else if (contests.bonsaichoosen==6) {
            contests_result_bonsaixb(bonsai006);
        }
        else if (contests.bonsaichoosen==7) {
            contests_result_bonsaixb(bonsai007);
        }
        else if (contests.bonsaichoosen==8) {
            contests_result_bonsaixb(bonsai008);
        }
        else if (contests.bonsaichoosen==9) {
            contests_result_bonsaixb(bonsai009);
        }
        else if (contests.bonsaichoosen==10) {
            contests_result_bonsaixb(bonsai010);
        }
    }
    else if (contests.bonsaichoosenx==11) {
        if (contests.bonsaichoosen==1) {
            contests_result_bonsaixb(bonsai011);
        }
        else if (contests.bonsaichoosen==2) {
            contests_result_bonsaixb(bonsai012);
        }
        else if (contests.bonsaichoosen==3) {
            contests_result_bonsaixb(bonsai013);
        }
        else if (contests.bonsaichoosen==4) {
            contests_result_bonsaixb(bonsai014);
        }
        else if (contests.bonsaichoosen==5) {
            contests_result_bonsaixb(bonsai015);
        }
        else if (contests.bonsaichoosen==6) {
            contests_result_bonsaixb(bonsai016);
        }
        else if (contests.bonsaichoosen==7) {
            contests_result_bonsaixb(bonsai017);
        }
        else if (contests.bonsaichoosen==8) {
            contests_result_bonsaixb(bonsai018);
        }
        else if (contests.bonsaichoosen==9) {
            contests_result_bonsaixb(bonsai019);
        }
        else if (contests.bonsaichoosen==10) {
            contests_result_bonsaixb(bonsai020);
        }
    }      
}
function contests_result_bonsaixb(bonsaixx) {
    contests_wincalc (bonsaixx);
}

function contests_avatare_part1() {
    contests.judge1_avatar=contests_avatare2();
    contests.judge1_avatar=contests_avatare3(contests.judge1_avatar, state.youravatar);
    
    contests.judge2_avatar=contests_avatare2();
    contests.judge2_avatar=contests_avatare3(contests.judge2_avatar, state.youravatar);
    contests.judge2_avatar=contests_avatare3(contests.judge2_avatar, contests.judge1_avatar);
    contests.judge2_avatar=contests_avatare3(contests.judge2_avatar, state.youravatar);
    
    contests.judge3_avatar=contests_avatare2();
    contests.judge3_avatar=contests_avatare3(contests.judge3_avatar, state.youravatar);
    contests.judge3_avatar=contests_avatare3(contests.judge3_avatar, contests.judge1_avatar);
    contests.judge3_avatar=contests_avatare3(contests.judge3_avatar, state.youravatar);
    contests.judge3_avatar=contests_avatare3(contests.judge3_avatar, contests.judge2_avatar);
    contests.judge3_avatar=contests_avatare3(contests.judge3_avatar, state.youravatar);
    contests.judge3_avatar=contests_avatare3(contests.judge3_avatar, contests.judge1_avatar);
}

function contests_avatare_part2() {
    contests_bonsai_c1.avatar=contests_avatare2();
    contests_bonsai_c1.avatar=contests_avatare3(contests_bonsai_c1.avatar, state.youravatar);
    contests_bonsai_c1.avatar=contests_avatare3(contests_bonsai_c1.avatar, contests.judge1_avatar);
    contests_bonsai_c1.avatar=contests_avatare3(contests_bonsai_c1.avatar, state.youravatar);
    contests_bonsai_c1.avatar=contests_avatare3(contests_bonsai_c1.avatar, contests.judge2_avatar);
    contests_bonsai_c1.avatar=contests_avatare3(contests_bonsai_c1.avatar, state.youravatar);
    contests_bonsai_c1.avatar=contests_avatare3(contests_bonsai_c1.avatar, contests.judge1_avatar);
    contests_bonsai_c1.avatar=contests_avatare3(contests_bonsai_c1.avatar, contests.judge3_avatar);
    contests_bonsai_c1.avatar=contests_avatare3(contests_bonsai_c1.avatar, state.youravatar);
    contests_bonsai_c1.avatar=contests_avatare3(contests_bonsai_c1.avatar, contests.judge1_avatar);
    contests_bonsai_c1.avatar=contests_avatare3(contests_bonsai_c1.avatar, contests.judge2_avatar);
    
    contests_bonsai_c2.avatar=contests_avatare2();
    contests_bonsai_c2.avatar=contests_avatare3(contests_bonsai_c2.avatar, state.youravatar);
    contests_bonsai_c2.avatar=contests_avatare3(contests_bonsai_c2.avatar, contests.judge1_avatar);
    contests_bonsai_c2.avatar=contests_avatare3(contests_bonsai_c2.avatar, state.youravatar);
    contests_bonsai_c2.avatar=contests_avatare3(contests_bonsai_c2.avatar, contests.judge2_avatar);
    contests_bonsai_c2.avatar=contests_avatare3(contests_bonsai_c2.avatar, state.youravatar);
    contests_bonsai_c2.avatar=contests_avatare3(contests_bonsai_c2.avatar, contests.judge1_avatar);
    contests_bonsai_c2.avatar=contests_avatare3(contests_bonsai_c2.avatar, contests.judge3_avatar);
    contests_bonsai_c2.avatar=contests_avatare3(contests_bonsai_c2.avatar, state.youravatar);
    contests_bonsai_c2.avatar=contests_avatare3(contests_bonsai_c2.avatar, contests.judge1_avatar);
    contests_bonsai_c2.avatar=contests_avatare3(contests_bonsai_c2.avatar, contests.judge2_avatar);
    contests_bonsai_c2.avatar=contests_avatare3(contests_bonsai_c2.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c2.avatar=contests_avatare3(contests_bonsai_c2.avatar, state.youravatar);
    contests_bonsai_c2.avatar=contests_avatare3(contests_bonsai_c2.avatar, contests.judge1_avatar);
    contests_bonsai_c2.avatar=contests_avatare3(contests_bonsai_c2.avatar, contests.judge2_avatar);
    contests_bonsai_c2.avatar=contests_avatare3(contests_bonsai_c2.avatar, contests.judge3_avatar);
    
    contests_bonsai_c3.avatar=contests_avatare2();
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, state.youravatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, contests.judge1_avatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, state.youravatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, contests.judge2_avatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, state.youravatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, contests.judge1_avatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, contests.judge3_avatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, state.youravatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, contests.judge1_avatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, contests.judge2_avatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, state.youravatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, contests.judge1_avatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, contests.judge2_avatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, contests.judge3_avatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, state.youravatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, contests.judge1_avatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, contests.judge2_avatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, contests.judge3_avatar);
    contests_bonsai_c3.avatar=contests_avatare3(contests_bonsai_c3.avatar, contests_bonsai_c1.avatar);
    
    contests_bonsai_c4.avatar=contests_avatare2();
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, state.youravatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests.judge1_avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, state.youravatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests.judge2_avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, state.youravatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests.judge1_avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests.judge3_avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, state.youravatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests.judge1_avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests.judge2_avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, state.youravatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests.judge1_avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests.judge2_avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests.judge3_avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, state.youravatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests.judge1_avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests.judge2_avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests.judge3_avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, state.youravatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests.judge1_avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests.judge2_avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests.judge3_avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c4.avatar=contests_avatare3(contests_bonsai_c4.avatar, contests_bonsai_c2.avatar);
    
    contests_bonsai_c5.avatar=contests_avatare2();
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, state.youravatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge1_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, state.youravatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge2_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, state.youravatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge1_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge3_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, state.youravatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge1_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge2_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, state.youravatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge1_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge2_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge3_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, state.youravatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge1_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge2_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge3_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, state.youravatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge1_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge2_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge3_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests_bonsai_c4.avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, state.youravatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge1_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge2_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests.judge3_avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c5.avatar=contests_avatare3(contests_bonsai_c5.avatar, contests_bonsai_c3.avatar);
    
    contests_bonsai_c6.avatar=contests_avatare2();
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, state.youravatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge1_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, state.youravatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge2_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, state.youravatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge1_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge3_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, state.youravatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge1_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge2_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, state.youravatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge1_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge2_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge3_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, state.youravatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge1_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge2_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge3_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, state.youravatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge1_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge2_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge3_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests_bonsai_c4.avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, state.youravatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge1_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge2_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge3_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests_bonsai_c5.avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, state.youravatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge1_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge2_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests.judge3_avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c6.avatar=contests_avatare3(contests_bonsai_c6.avatar, contests_bonsai_c4.avatar);
    
    contests_bonsai_c7.avatar=contests_avatare2();
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, state.youravatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge1_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, state.youravatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge2_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, state.youravatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge1_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge3_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, state.youravatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge1_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge2_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, state.youravatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge1_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge2_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge3_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, state.youravatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge1_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge2_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge3_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, state.youravatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge1_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge2_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge3_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c4.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, state.youravatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge1_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge2_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge3_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c5.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, state.youravatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge1_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge2_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge3_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c4.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c6.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, state.youravatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge1_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge2_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests.judge3_avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c4.avatar);
    contests_bonsai_c7.avatar=contests_avatare3(contests_bonsai_c7.avatar, contests_bonsai_c5.avatar);
    
    contests_bonsai_c8.avatar=contests_avatare2();
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, state.youravatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge1_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, state.youravatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge2_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, state.youravatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge1_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge3_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, state.youravatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge1_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge2_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, state.youravatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge1_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge2_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge3_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, state.youravatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge1_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge2_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge3_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, state.youravatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge1_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge2_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge3_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c4.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, state.youravatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge1_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge2_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge3_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c5.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, state.youravatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge1_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge2_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge3_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c4.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c6.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, state.youravatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge1_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge2_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge3_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c4.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c5.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c7.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, state.youravatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge1_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge2_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests.judge3_avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c4.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c5.avatar);
    contests_bonsai_c8.avatar=contests_avatare3(contests_bonsai_c8.avatar, contests_bonsai_c6.avatar);
    
    contests_bonsai_c9.avatar=contests_avatare2();
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, state.youravatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge1_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, state.youravatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge2_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, state.youravatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge1_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge3_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, state.youravatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge1_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge2_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, state.youravatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge1_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge2_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge3_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, state.youravatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge1_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge2_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge3_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, state.youravatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge1_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge2_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge3_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c4.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, state.youravatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge1_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge2_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge3_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c5.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, state.youravatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge1_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge2_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge3_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c4.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c6.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, state.youravatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge1_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge2_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge3_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c4.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c5.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c7.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, state.youravatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge1_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge2_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge3_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c4.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c5.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c6.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c8.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, state.youravatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge1_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge2_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests.judge3_avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c1.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c2.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c3.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c4.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c5.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c6.avatar);
    contests_bonsai_c9.avatar=contests_avatare3(contests_bonsai_c9.avatar, contests_bonsai_c7.avatar);
}

function contests_avatare2() {
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.random_contests>=0.95) {
        return 1;
    }
    else if (state.random_contests>=0.9) {
        return 2;
    }
    else if (state.random_contests>=0.85) {
        return 3;
    }
    else if (state.random_contests>=0.8) {
        return 4;
    }
    else if (state.random_contests>=0.75) {
        return 5;
    }
    else if (state.random_contests>=0.7) {
        return 6;
    }
    else if (state.random_contests>=0.65) {
        return 7;
    }
    else if (state.random_contests>=0.6) {
        return 8;
    }
    else if (state.random_contests>=0.55) {
        return 9;
    }
    else if (state.random_contests>=0.5) {
        return 10;
    }
    else if (state.random_contests>=0.45) {
        return 11;
    }
    else if (state.random_contests>=0.4) {
        return 12;
    }
    else if (state.random_contests>=0.35) {
        return 13;
    }
    else if (state.random_contests>=0.3) {
        return 14;
    }
    else if (state.random_contests>=0.25) {
        return 15;
    }
    else if (state.random_contests>=0.2) {
        return 16;
    }
    else if (state.random_contests>=0.15) {
        return 17;
    }
    else if (state.random_contests>=0.1) {
        return 18;
    }
    else if (state.random_contests>=0.05) {
        return 19;
    }
    else if (state.random_contests>=0) {
        return 20;
    }
}

function contests_avatare3(a, b) {
    if (a==b) {
        if (a<=19) {
            state.random_contests=a+1;
            return state.random_contests;
        }
        else {
            state.random_contests=1;
            return state.random_contests;
        }
    }
    else {
        return a;
    }
}

function contests_avatare_save() {
    if (contests.id=="Area01_J1") {
        if (judges.a01j1_j1_ava==0) {
            judges.a01j1_j1_ava=contests.judge1_avatar;
            
        }
        else {
            contests.judge1_avatar=judges.a01j1_j1_ava;
        }
        document.getElementById("judge1_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contests.judge1_avatar+'.svg" width="60" height="60">';
    }
    else if (contests.id=="Area01_J2") {
        if (judges.a01j2_j1_ava==0) {
            judges.a01j2_j1_ava=contests.judge1_avatar;
            judges.a01j2_j2_ava=contests.judge2_avatar;
        }
        else {
            contests.judge1_avatar=judges.a01j2_j1_ava;
            contests.judge2_avatar=judges.a01j2_j2_ava;
        }
        document.getElementById("judge1_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contests.judge1_avatar+'.svg" width="60" height="60">';
        document.getElementById("judge2_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contests.judge2_avatar+'.svg" width="60" height="60">';
    }
    else if (contests.id=="Area01_J3") {
        if (judges.a01j3_j1_ava==0) {
            judges.a01j3_j1_ava=contests.judge1_avatar;
            judges.a01j3_j2_ava=contests.judge2_avatar;
            judges.a01j3_j3_ava=contests.judge3_avatar;
        }
        else {
            contests.judge1_avatar=judges.a01j3_j1_ava;
            contests.judge2_avatar=judges.a01j3_j2_ava;
            contests.judge3_avatar=judges.a01j3_j3_ava;
        }
        document.getElementById("judge1_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contests.judge1_avatar+'.svg" width="60" height="60">';
        document.getElementById("judge2_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contests.judge2_avatar+'.svg" width="60" height="60">';
        document.getElementById("judge3_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contests.judge3_avatar+'.svg" width="60" height="60">';
    }
    else if (contests.id=="Area01_C1") {
        if (judges.a01c1_j1_ava==0) {
            judges.a01c1_j1_ava=contests.judge1_avatar;
            judges.a01c1_j2_ava=contests.judge2_avatar;
            judges.a01c1_j3_ava=contests.judge3_avatar;
        }
        else {
            contests.judge1_avatar=judges.a01c1_j1_ava;
            contests.judge2_avatar=judges.a01c1_j2_ava;
            contests.judge3_avatar=judges.a01c1_j3_ava;
        }
        document.getElementById("judge1_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contests.judge1_avatar+'.svg" width="60" height="60">';
        document.getElementById("judge2_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contests.judge2_avatar+'.svg" width="60" height="60">';
        document.getElementById("judge3_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contests.judge3_avatar+'.svg" width="60" height="60">';
    }
    else if (contests.id=="Area01_C2") {
        if (judges.a01c2_j1_ava==0) {
            judges.a01c2_j1_ava=contests.judge1_avatar;
            judges.a01c2_j2_ava=contests.judge2_avatar;
            judges.a01c2_j3_ava=contests.judge3_avatar;
        }
        else {
            contests.judge1_avatar=judges.a01c2_j1_ava;
            contests.judge2_avatar=judges.a01c2_j2_ava;
            contests.judge3_avatar=judges.a01c2_j3_ava;
        }
        document.getElementById("judge1_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contests.judge1_avatar+'.svg" width="60" height="60">';
        document.getElementById("judge2_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contests.judge2_avatar+'.svg" width="60" height="60">';
        document.getElementById("judge3_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contests.judge3_avatar+'.svg" width="60" height="60">';
    }
    else if (contests.id=="Area01_C3") {
        if (judges.a01c3_j1_ava==0) {
            judges.a01c3_j1_ava=contests.judge1_avatar;
            judges.a01c3_j2_ava=contests.judge2_avatar;
            judges.a01c3_j3_ava=contests.judge3_avatar;
        }
        else {
            contests.judge1_avatar=judges.a01c3_j1_ava;
            contests.judge2_avatar=judges.a01c3_j2_ava;
            contests.judge3_avatar=judges.a01c3_j3_ava;
        }
        document.getElementById("judge1_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contests.judge1_avatar+'.svg" width="60" height="60">';
        document.getElementById("judge2_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contests.judge2_avatar+'.svg" width="60" height="60">';
        document.getElementById("judge3_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contests.judge3_avatar+'.svg" width="60" height="60">';
    }
}

function contests_judges () {
    if (contests.id=="Area01_C1") {
        if (judges.a01c1_j1_pre=="-") {
            contests_judge_prefdis ("judge1pre_text", "judge1dis_text");
            contests.judge1_preference=judge_preference;
            contests.judge1_dislike=judge_dislike;
            judges.a01c1_j1_pre=judge_preference;
            judges.a01c1_j1_dis=judge_dislike;
            judge_preference="-";
            judge_dislike="-";
            contests_judge_prefdis ("judge2pre_text", "judge2dis_text");
            contests.judge2_preference=judge_preference;
            contests.judge2_dislike=judge_dislike;
            judges.a01c1_j2_pre=judge_preference;
            judges.a01c1_j2_dis=judge_dislike;
            judge_preference="-";
            judge_dislike="-";
            contests_judge_prefdis ("judge3pre_text", "judge3dis_text");
            contests.judge3_preference=judge_preference;
            contests.judge3_dislike=judge_dislike;
            judges.a01c1_j3_pre=judge_preference;
            judges.a01c1_j3_dis=judge_dislike;
            judge_preference="-";
            judge_dislike="-";
        }
        else {
            contests_judge_prefdis2 ("judge1pre_text", "judge1dis_text", judges.a01c1_j1_pre, judges.a01c1_j1_dis);
            contests.judge1_preference=judges.a01c1_j1_pre;
            contests.judge1_dislike=judges.a01c1_j1_dis;
            contests_judge_prefdis2 ("judge2pre_text", "judge2dis_text", judges.a01c1_j2_pre, judges.a01c1_j2_dis);
            contests.judge2_preference=judges.a01c1_j2_pre;
            contests.judge2_dislike=judges.a01c1_j2_dis;
            contests_judge_prefdis2 ("judge3pre_text", "judge3dis_text", judges.a01c1_j3_pre, judges.a01c1_j3_dis);
            contests.judge3_preference=judges.a01c1_j3_pre;
            contests.judge3_dislike=judges.a01c1_j3_dis;
        }
    }
    else if (contests.id=="Area01_C2") {
        if (judges.a01c2_j1_pre=="-") {
            contests_judge_prefdis ("judge1pre_text", "judge1dis_text");
            contests.judge1_preference=judge_preference;
            contests.judge1_dislike=judge_dislike;
            judges.a01c2_j1_pre=judge_preference;
            judges.a01c2_j1_dis=judge_dislike;
            judge_preference="-";
            judge_dislike="-";
            contests_judge_prefdis ("judge2pre_text", "judge2dis_text");
            contests.judge2_preference=judge_preference;
            contests.judge2_dislike=judge_dislike;
            judges.a01c2_j2_pre=judge_preference;
            judges.a01c2_j2_dis=judge_dislike;
            judge_preference="-";
            judge_dislike="-";
            contests_judge_prefdis ("judge3pre_text", "judge3dis_text");
            contests.judge3_preference=judge_preference;
            contests.judge3_dislike=judge_dislike;
            judges.a01c2_j3_pre=judge_preference;
            judges.a01c2_j3_dis=judge_dislike;
            judge_preference="-";
            judge_dislike="-";
        }
        else {
            contests_judge_prefdis2 ("judge1pre_text", "judge1dis_text", judges.a01c2_j1_pre, judges.a01c2_j1_dis);
            contests.judge1_preference=judges.a01c2_j1_pre;
            contests.judge1_dislike=judges.a01c2_j1_dis;
            contests_judge_prefdis2 ("judge2pre_text", "judge2dis_text", judges.a01c2_j2_pre, judges.a01c2_j2_dis);
            contests.judge2_preference=judges.a01c2_j2_pre;
            contests.judge2_dislike=judges.a01c2_j2_dis;
            contests_judge_prefdis2 ("judge3pre_text", "judge3dis_text", judges.a01c2_j3_pre, judges.a01c2_j3_dis);
            contests.judge3_preference=judges.a01c2_j3_pre;
            contests.judge3_dislike=judges.a01c2_j3_dis;
        }
    }
    else if (contests.id=="Area01_C3") {
        if (judges.a01c3_j1_pre=="-") {
            contests_judge_prefdis ("judge1pre_text", "judge1dis_text");
            contests.judge1_preference=judge_preference;
            contests.judge1_dislike=judge_dislike;
            judges.a01c3_j1_pre=judge_preference;
            judges.a01c3_j1_dis=judge_dislike;
            judge_preference="-";
            judge_dislike="-";
            contests_judge_prefdis ("judge2pre_text", "judge2dis_text");
            contests.judge2_preference=judge_preference;
            contests.judge2_dislike=judge_dislike;
            judges.a01c3_j2_pre=judge_preference;
            judges.a01c3_j2_dis=judge_dislike;
            judge_preference="-";
            judge_dislike="-";
            contests_judge_prefdis ("judge3pre_text", "judge3dis_text");
            contests.judge3_preference=judge_preference;
            contests.judge3_dislike=judge_dislike;
            judges.a01c3_j3_pre=judge_preference;
            judges.a01c3_j3_dis=judge_dislike;
            judge_preference="-";
            judge_dislike="-";
        }
        else {
            contests_judge_prefdis2 ("judge1pre_text", "judge1dis_text", judges.a01c3_j1_pre, judges.a01c3_j1_dis);
            contests.judge1_preference=judges.a01c3_j1_pre;
            contests.judge1_dislike=judges.a01c3_j1_dis;
            contests_judge_prefdis2 ("judge2pre_text", "judge2dis_text", judges.a01c3_j2_pre, judges.a01c3_j2_dis);
            contests.judge2_preference=judges.a01c3_j2_pre;
            contests.judge2_dislike=judges.a01c3_j2_dis;
            contests_judge_prefdis2 ("judge3pre_text", "judge3dis_text", judges.a01c3_j3_pre, judges.a01c3_j3_dis);
            contests.judge3_preference=judges.a01c3_j3_pre;
            contests.judge3_dislike=judges.a01c3_j3_dis;
        }
    }
}

function contests_judge_prefdis (a, b) {
    if (state.areasunlocked==1) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.9) {
            judge_preference="Nature Cluster 5";
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Balanced'<br>'Equalised'<br>'Adjusted'<br>'Tempered'";
        }
        else if (state.random_contests>=0.8) {
            judge_preference="Nature Cluster 4";
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
        }
        else if (state.random_contests>=0.7) {
            judge_preference="Nature Cluster 3";
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
        }
        else if (state.random_contests>=0.6) {
            judge_preference="Nature Cluster 2";
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Branched'<br>'Ramified'<br>'Dispersed'";
        }
        else if (state.random_contests>=0.5) {
            judge_preference="Nature Cluster 1";
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Leafed'<br>'Adorned'<br>'Decorated'";
        }
        else if (state.random_contests>=0.25) {
            judge_preference="TT Cluster 1";
            document.getElementById(a).innerHTML = "Likes<br>Tree type groups:<br>'Raundo'<br>'Erementaru'<br>'Roku-men'";
        }
        else {
            judge_preference="ST Cluster 1";
            document.getElementById(a).innerHTML = "Likes<br>Style types:<br>'Chokan'<br>'Moyogi'<br>'Shakan'";
        }
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.8) {
            judge_dislike="Nature Cluster 5";
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Balanced'<br>'Equalised'<br>'Adjusted'<br>'Tempered'";
            if (judge_preference==judge_dislike) {
                judge_dislike="Nature Cluster 4"
                document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
            }
        }
        else if (state.random_contests>=0.6) {
            judge_dislike="Nature Cluster 4";
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
            if (judge_preference==judge_dislike) {
                judge_dislike="Nature Cluster 3"
                document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
            }
        }
        else if (state.random_contests>=0.4) {
            judge_dislike="Nature Cluster 3";
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
            if (judge_preference==judge_dislike) {
                judge_dislike="Nature Cluster 2"
                document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Branched'<br>'Ramified'<br>'Dispersed'";
            }
        }
        else if (state.random_contests>=0.2) {
            judge_dislike="Nature Cluster 2";
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Branched'<br>'Ramified'<br>'Dispersed'";
            if (judge_preference==judge_dislike) {
                judge_dislike="Nature Cluster 1"
                document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Leafed'<br>'Adorned'<br>'Decorated'";
            }
        }
        else {
            judge_dislike="Nature Cluster 1";
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Leafed'<br>'Adorned'<br>'Decorated'";
            if (judge_preference==judge_dislike) {
                judge_dislike="Nature Cluster 5"
                document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Balanced'<br>'Equalised'<br>'Adjusted'<br>'Tempered'";
            }
        }
    }
    else if (state.areasunlocked==2) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.92) {
            judge_preference="Nature Cluster 5";
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Balanced'<br>'Equalised'<br>'Adjusted'<br>'Tempered'";
        }
        else if (state.random_contests>=0.84) {
            judge_preference="Nature Cluster 4";
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
        }
        else if (state.random_contests>=0.76) {
            judge_preference="Nature Cluster 3";
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
        }
        else if (state.random_contests>=0.68) {
            judge_preference="Nature Cluster 2";
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Branched'<br>'Ramified'<br>'Dispersed'";
        }
        else if (state.random_contests>=0.60) {
            judge_preference="Nature Cluster 1";
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Leafed'<br>'Adorned'<br>'Decorated'";
        }
        else if (state.random_contests>=0.40) {
            judge_preference="TT Cluster 1";
            document.getElementById(a).innerHTML = "Likes<br>Tree type groups:<br>'Raundo'<br>'Erementaru'<br>'Roku-men'<br>'Seikatsu'";
        }
        else if (state.random_contests>=0.30) {
            judge_preference="TT Cluster 2";
            document.getElementById(a).innerHTML = "Likes<br>Tree type group:<br>'Sanmen'";
        }
        else if (state.random_contests>=0.10) {
            judge_preference="ST Cluster 1";
            document.getElementById(a).innerHTML = "Likes<br>Style types:<br>'Chokan'<br>'Moyogi'<br>'Shakan'<br>'Han-Kengai'<br>'Sokan'";
        }
        else {
            judge_preference="ST Cluster 2";
            document.getElementById(a).innerHTML = "Likes<br>Style types:<br>'Kengai'<br>'Kabudachi'";
        }
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.82) {
            judge_dislike="Nature Cluster 5";
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Balanced'<br>'Equalised'<br>'Adjusted'<br>'Tempered'";
            if (judge_preference==judge_dislike) {
                judge_dislike="Nature Cluster 4"
                document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
            }
        }
        else if (state.random_contests>=0.64) {
            judge_dislike="Nature Cluster 4";
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
            if (judge_preference==judge_dislike) {
                judge_dislike="Nature Cluster 3"
                document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
            }
        }
        else if (state.random_contests>=0.46) {
            judge_dislike="Nature Cluster 3";
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
            if (judge_preference==judge_dislike) {
                judge_dislike="Nature Cluster 2"
                document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Branched'<br>'Ramified'<br>'Dispersed'";
            }
        }
        else if (state.random_contests>=0.28) {
            judge_dislike="Nature Cluster 2";
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Branched'<br>'Ramified'<br>'Dispersed'";
            if (judge_preference==judge_dislike) {
                judge_dislike="Nature Cluster 1"
                document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Leafed'<br>'Adorned'<br>'Decorated'";
            }
        }
        else if (state.random_contests>=0.10) {
            judge_dislike="Nature Cluster 1";
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Leafed'<br>'Adorned'<br>'Decorated'";
            if (judge_preference==judge_dislike) {
                judge_dislike="TT Cluster 1"
                document.getElementById(b).innerHTML = "Dislikes<br>Tree type groups:<br>'Raundo'<br>'Erementaru'<br>'Roku-men'<br>'Seikatsu'";
            }
        }
        else if (state.random_contests>=0.05) {
            judge_dislike="TT Cluster 1";
            document.getElementById(b).innerHTML = "Dislikes<br>Tree type groups:<br>'Raundo'<br>'Erementaru'<br>'Roku-men'<br>'Seikatsu'";
            if (judge_preference==judge_dislike) {
                judge_dislike="ST Cluster 1"
                document.getElementById(b).innerHTML = "Dislikes<br>Style types:<br>'Chokan'<br>'Moyogi'<br>'Shakan'<br>'Han-Kengai'<br>'Sokan'";
            }
        }
        else {
            judge_dislike="ST Cluster 1";
            document.getElementById(b).innerHTML = "Dislikes<br>Style types:<br>'Chokan'<br>'Moyogi'<br>'Shakan'<br>'Han-Kengai'<br>'Sokan'";
            if (judge_preference==judge_dislike) {
                judge_dislike="Nature Cluster 5"
                document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Balanced'<br>'Equalised'<br>'Adjusted'<br>'Tempered'";
            }
        }
    }
    else if (state.areasunlocked==3) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.94) {
            judge_preference="Nature Cluster 5";
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Balanced'<br>'Equalised'<br>'Adjusted'<br>'Tempered'";
        }
        else if (state.random_contests>=0.88) {
            judge_preference="Nature Cluster 4";
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
        }
        else if (state.random_contests>=0.82) {
            judge_preference="Nature Cluster 3";
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
        }
        else if (state.random_contests>=0.76) {
            judge_preference="Nature Cluster 2";
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Branched'<br>'Ramified'<br>'Dispersed'";
        }
        else if (state.random_contests>=0.70) {
            judge_preference="Nature Cluster 1";
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Leafed'<br>'Adorned'<br>'Decorated'";
        }
        else if (state.random_contests>=0.62) {
            judge_preference="TT Cluster 1";
            document.getElementById(a).innerHTML = "Likes<br>Tree type groups:<br>'Raundo'<br>'Erementaru'<br>'Roku-men'<br>'Seikatsu'";
        }
        else if (state.random_contests>=0.50) {
            judge_preference="TT Cluster 2";
            document.getElementById(a).innerHTML = "Likes<br>Tree type groups:<br>'Sanmen'<br>'Shihen'";
        }
        else if (state.random_contests>=0.35) {
            judge_preference="TT Cluster 3";
            document.getElementById(a).innerHTML = "Likes<br>Tree type group:<br>'Jinkō-teki'";
        }
        else if (state.random_contests>=0.27) {
            judge_preference="ST Cluster 1";
            document.getElementById(a).innerHTML = "Likes<br>Style types:<br>'Chokan'<br>'Moyogi'<br>'Shakan'<br>'Han-Kengai'<br>'Sokan'";
        }
        else if (state.random_contests>=0.15) {
            judge_preference="ST Cluster 2";
            document.getElementById(a).innerHTML = "Likes<br>Style types:<br>'Kengai'<br>'Kabudachi'<br>'Hokidachi'<br>'Bunjingi'";
        }
        else {
            judge_preference="ST Cluster 3";
            document.getElementById(a).innerHTML = "Likes Styletype: 'Fukinagashi'";
        }
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.84) {
            judge_dislike="Nature Cluster 5";
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Balanced'<br>'Equalised'<br>'Adjusted'<br>'Tempered'";
            if (judge_preference==judge_dislike) {
                judge_dislike="Nature Cluster 4"
                document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
            }
        }
        else if (state.random_contests>=0.68) {
            judge_dislike="Nature Cluster 4";
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
            if (judge_preference==judge_dislike) {
                judge_dislike="Nature Cluster 3"
                document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
            }
        }
        else if (state.random_contests>=0.52) {
            judge_dislike="Nature Cluster 3";
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
            if (judge_preference==judge_dislike) {
                judge_dislike="Nature Cluster 2"
                document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Branched'<br>'Ramified'<br>'Dispersed'";
            }
        }
        else if (state.random_contests>=0.36) {
            judge_dislike="Nature Cluster 2";
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Branched'<br>'Ramified'<br>'Dispersed'";
            if (judge_preference==judge_dislike) {
                judge_dislike="Nature Cluster 1"
                document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Leafed'<br>'Adorned'<br>'Decorated'";
            }
        }
        else if (state.random_contests>=0.20) {
            judge_dislike="Nature Cluster 1";
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Leafed'<br>'Adorned'<br>'Decorated'";
            if (judge_preference==judge_dislike) {
                judge_dislike="TT Cluster 1"
                document.getElementById(b).innerHTML = "Dislikes<br>Tree type groups:<br>'Raundo'<br>'Erementaru'<br>'Roku-men'<br>'Seikatsu'";
            }
        }
        else if (state.random_contests>=0.13) {
            judge_dislike="TT Cluster 1";
            document.getElementById(b).innerHTML = "Dislikes<br>Tree type groups:<br>'Raundo'<br>'Erementaru'<br>'Roku-men'<br>'Seikatsu'";
            if (judge_preference==judge_dislike) {
                judge_dislike="TT Cluster 2"
                document.getElementById(b).innerHTML = "Dislikes<br>Tree type groups:<br>'Sanmen'<br>'Shihen'";
            }
        }
        else if (state.random_contests>=0.10) {
            judge_dislike="TT Cluster 2";
            document.getElementById(b).innerHTML = "Dislikes<br>Tree type groups:<br>'Sanmen'<br>'Shihen'";
            if (judge_preference==judge_dislike) {
                judge_dislike="ST Cluster 1"
                document.getElementById(b).innerHTML = "Dislikes<br>Style types:<br>'Chokan'<br>'Moyogi'<br>'Shakan'<br>'Han-Kengai'<br>'Sokan'";
            }
        }
        else if (state.random_contests>=0.03) {
            judge_dislike="ST Cluster 1";
            document.getElementById(b).innerHTML = "Dislikes<br>Style types:<br>'Chokan'<br>'Moyogi'<br>'Shakan'<br>'Han-Kengai'<br>'Sokan'";
            if (judge_preference==judge_dislike) {
                judge_dislike="ST Cluster 2"
                document.getElementById(b).innerHTML = "Dislikes<br>Style types:<br>'Kengai'<br>'Kabudachi'<br>'Hokidachi'<br>'Bunjingi'";
            }
        }
        else {
            judge_dislike="ST Cluster 2";
            document.getElementById(b).innerHTML = "Dislikes<br>Style types:<br>'Kengai'<br>'Kabudachi'<br>'Hokidachi'<br>'Bunjingi'";
            if (judge_preference==judge_dislike) {
                judge_dislike="Nature Cluster 5"
                document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Balanced'<br>'Equalised'<br>'Adjusted'<br>'Tempered'";
            }
        }
    }
    else if (state.areasunlocked==4) {
        
    }
    else if (state.areasunlocked==5) {
        
    }
    else if (state.areasunlocked==6) {
        
    }
    else if (state.areasunlocked==7) {
        
    }
    else if (state.areasunlocked==8) {
        
    }
    else if (state.areasunlocked==9) {
        
    }
    else if (state.areasunlocked==10) {
        
    }
}

function contests_judge_prefdis2 (a, b, judgepref, judgedis) {
    if (state.areasunlocked==1) {
        if (judgepref=="Nature Cluster 5") {
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Balanced'<br>'Equalised'<br>'Adjusted'<br>'Tempered'";
        }
        else if (judgepref=="Nature Cluster 4") {
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
        }
        else if (judgepref=="Nature Cluster 3") {
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
        }
        else if (judgepref=="Nature Cluster 2") {
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Branched'<br>'Ramified'<br>'Dispersed'";
        }
        else if (judgepref=="Nature Cluster 1") {
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Leafed'<br>'Adorned'<br>'Decorated'";
        }
        else if (judgepref=="TT Cluster 1") {
            document.getElementById(a).innerHTML = "Likes<br>Tree type groups:<br>'Raundo'<br>'Erementaru'<br>'Roku-men'";
        }
        else if (judgepref=="ST Cluster 1") {
            document.getElementById(a).innerHTML = "Likes<br>Style types:<br>'Chokan'<br>'Moyogi'<br>'Shakan'";
        }        
        if (judgedis=="Nature Cluster 5") {
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Balanced'<br>'Equalised'<br>'Adjusted'<br>'Tempered'";
        }
        else if (judgedis=="Nature Cluster 4") {
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
        }
        else if (judgedis=="Nature Cluster 3") {
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
        }
        else if (judgedis=="Nature Cluster 2") {
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Branched'<br>'Ramified'<br>'Dispersed'";
        }
        else if (judgedis=="Nature Cluster 1") {
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Leafed'<br>'Adorned'<br>'Decorated'";
        }
    }
    else if (state.areasunlocked==2) {
        if (judgepref=="Nature Cluster 5") {
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Balanced'<br>'Equalised'<br>'Adjusted'<br>'Tempered'";
        }
        else if (judgepref=="Nature Cluster 4") {
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
        }
        else if (judgepref=="Nature Cluster 3") {
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
        }
        else if (judgepref=="Nature Cluster 2") {
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Branched'<br>'Ramified'<br>'Dispersed'";
        }
        else if (judgepref=="Nature Cluster 1") {
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Leafed'<br>'Adorned'<br>'Decorated'";
        }
        else if (judgepref=="TT Cluster 1") {
            document.getElementById(a).innerHTML = "Likes<br>Tree type groups:<br>'Raundo'<br>'Erementaru'<br>'Roku-men'<br>'Seikatsu'";
        }
        else if (judgepref=="TT Cluster 2") {
            document.getElementById(a).innerHTML = "Likes<br>Tree type group:<br>'Sanmen'";
        }
        else if (judgepref=="ST Cluster 1") {
            document.getElementById(a).innerHTML = "Likes<br>Style types:<br>'Chokan'<br>'Moyogi'<br>'Shakan'<br>'Han-Kengai'<br>'Sokan'";
        }
        else if (judgepref=="ST Cluster 2") {
            document.getElementById(a).innerHTML = "Likes<br>Style types:<br>'Kengai'<br>'Kabudachi'";
        }
        if (judgedis=="Nature Cluster 5") {
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Balanced'<br>'Equalised'<br>'Adjusted'<br>'Tempered'";
        }
        else if (judgedis=="Nature Cluster 4") {
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
        }
        else if (judgedis=="Nature Cluster 3") {
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
        }
        else if (judgedis=="Nature Cluster 2") {
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Branched'<br>'Ramified'<br>'Dispersed'";
        }
        else if (judgedis=="Nature Cluster 1") {
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Leafed'<br>'Adorned'<br>'Decorated'";
        }
        else if (judgedis=="TT Cluster 1") {
            document.getElementById(b).innerHTML = "Dislikes<br>Tree type groups:<br>'Raundo'<br>'Erementaru'<br>'Roku-men'<br>'Seikatsu'";
        }
        else if (judgedis=="ST Cluster 1") {
            document.getElementById(b).innerHTML = "Dislikes<br>Style types:<br>'Chokan'<br>'Moyogi'<br>'Shakan'<br>'Han-Kengai'<br>'Sokan'";
        }
    }
    else if (state.areasunlocked==3) {
        if (judgepref=="Nature Cluster 5") {
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Balanced'<br>'Equalised'<br>'Adjusted'<br>'Tempered'";
        }
        else if (judgepref=="Nature Cluster 4") {
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
        }
        else if (judgepref=="Nature Cluster 3") {
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
        }
        else if (judgepref=="Nature Cluster 2") {
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Branched'<br>'Ramified'<br>'Dispersed'";
        }
        else if (judgepref=="Nature Cluster 1") {
            document.getElementById(a).innerHTML = "Likes<br>Natures:<br>'Leafed'<br>'Adorned'<br>'Decorated'";
        }        
        else if (judgepref=="TT Cluster 1") {
            document.getElementById(a).innerHTML = "Likes<br>Tree type groups:<br>'Raundo'<br>'Erementaru'<br>'Roku-men'<br>'Seikatsu'";
        }
        else if (judgepref=="TT Cluster 2") {
            document.getElementById(a).innerHTML = "Likes<br>Tree type groups:<br>'Sanmen'<br>'Shihen'";
        }
        else if (judgepref=="TT Cluster 3") {
            document.getElementById(a).innerHTML = "Likes<br>Tree type group:<br>'Jinkō-teki'";
        }
        else if (judgepref=="ST Cluster 1") {
            document.getElementById(a).innerHTML = "Likes<br>Style types:<br>'Chokan'<br>'Moyogi'<br>'Shakan'<br>'Han-Kengai'<br>'Sokan'";
        }
        else if (judgepref=="ST Cluster 2") {
            document.getElementById(a).innerHTML = "Likes<br>Style types:<br>'Kengai'<br>'Kabudachi'<br>'Hokidachi'<br>'Bunjingi'";
        }
        else if (judgepref=="ST Cluster 3") {
            document.getElementById(a).innerHTML = "Likes Styletype: 'Fukinagashi'";
        }
        if (judgedis=="Nature Cluster 5") {
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Balanced'<br>'Equalised'<br>'Adjusted'<br>'Tempered'";
        }
        else if (judgedis=="Nature Cluster 4") {
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Grounded'<br>'Earthed'<br>'Fixed'";
        }
        else if (judgedis=="Nature Cluster 3") {
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Strengthened'<br>'Fortified'<br>'Consolidated'";
        }
        else if (judgedis=="Nature Cluster 2") {
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Branched'<br>'Ramified'<br>'Dispersed'";
        }
        else if (judgedis=="Nature Cluster 1") {
            document.getElementById(b).innerHTML = "Dislikes<br>Natures:<br>'Leafed'<br>'Adorned'<br>'Decorated'";
        }
        else if (judgedis=="TT Cluster 1") {
            document.getElementById(b).innerHTML = "Dislikes<br>Tree type groups:<br>'Raundo'<br>'Erementaru'<br>'Roku-men'<br>'Seikatsu'";
        }
        else if (judgedis=="TT Cluster 2") {
            document.getElementById(b).innerHTML = "Dislikes<br>Tree type groups:<br>'Sanmen'<br>'Shihen'";
        }
        else if (judgedis=="ST Cluster 1") {
            document.getElementById(b).innerHTML = "Dislikes<br>Style types:<br>'Chokan'<br>'Moyogi'<br>'Shakan'<br>'Han-Kengai'<br>'Sokan'";
        }
        else if (judgedis=="ST Cluster 2") {
            document.getElementById(b).innerHTML = "Dislikes<br>Style types:<br>'Kengai'<br>'Kabudachi'<br>'Hokidachi'<br>'Bunjingi'";
        }
    }
    else if (state.areasunlocked==4) {
        
    }
    else if (state.areasunlocked==5) {
        
    }
    else if (state.areasunlocked==6) {
        
    }
    else if (state.areasunlocked==7) {
        
    }
    else if (state.areasunlocked==8) {
        
    }
    else if (state.areasunlocked==9) {
        
    }
    else if (state.areasunlocked==10) {
        
    }
}


function focus_roll_ttgst () {
    if (contests.id=="Area01_C1") {
        if (focus.ttgst_a01c1==0) {
            focus.ttgst_a01c1=focus_roll_ttgst2();
        }
        else {
            contests.focus_ttgst=focus.ttgst_a01c1;
        }
    }
    else if (contests.id=="Area01_C2") {
        if (focus.ttgst_a01c2==0) {
            focus.ttgst_a01c2=focus_roll_ttgst2();
        }
        else {
            contests.focus_ttgst=focus.ttgst_a01c2;
        }
    }
    else if (contests.id=="Area01_C3") {
        if (focus.ttgst_a01c3==0) {
            focus.ttgst_a01c3=focus_roll_ttgst2();
        }
        else {
            contests.focus_ttgst=focus.ttgst_a01c3;
        }
    }
}

function focus_roll_ttgst2 () {
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.areasunlocked==1) {
        if (state.random_contests>=0.8333) {
            contests.focus_ttgst=1; //TTG1
            return 1;
        }
        else if (state.random_contests>=0.6666) {
            contests.focus_ttgst=2; //TTG2
            return 2;
        }
        else if (state.random_contests>=0.5) {
            contests.focus_ttgst=3; //TTG3
            return 3;
        }
        else if (state.random_contests>=0.3333) {
            contests.focus_ttgst=10; //ST1
            return 10;
        }
        else if (state.random_contests>=0.1666) {
            contests.focus_ttgst=11; //ST2
            return 11;
        }
        else if (state.random_contests>=0) {
            contests.focus_ttgst=12; //ST3
            return 12;
        }
    }
    else if (state.areasunlocked==2) {
        if (state.random_contests>=0.9166) {
            contests.focus_ttgst=1; //TTG1
            return 1;
        }
        else if (state.random_contests>=0.8333) {
            contests.focus_ttgst=2; //TTG2
            return 2;
        }
        else if (state.random_contests>=0.75) {
            contests.focus_ttgst=3; //TTG3
            return 3;
        }
        else if (state.random_contests>=0.6666) {
            contests.focus_ttgst=4; //TTG4
            return 4;
        }
        else if (state.random_contests>=0.5833) {
            contests.focus_ttgst=5; //TTG5
            return 5;
        }
        else if (state.random_contests>=0.5) {
            contests.focus_ttgst=10; //ST1
            return 10;
        }
        else if (state.random_contests>=0.4166) {
            contests.focus_ttgst=11; //ST2
            return 11;
        }
        else if (state.random_contests>=0.3333) {
            contests.focus_ttgst=12; //ST3
            return 12;
        }
        else if (state.random_contests>=0.25) {
            contests.focus_ttgst=13; //ST4
            return 13;
        }
        else if (state.random_contests>=0.1666) {
            contests.focus_ttgst=14; //ST5
            return 14;
        }
        else if (state.random_contests>=0.0833) {
            contests.focus_ttgst=15; //ST6
            return 15;
        }
        else if (state.random_contests>=0) {
            contests.focus_ttgst=16; //ST7
            return 16;
        }
    }
    else if (state.areasunlocked==3) {
        
    }
    else if (state.areasunlocked==4) {
        
    }
    else if (state.areasunlocked==5) {
        
    }
    else if (state.areasunlocked==6) {
        
    }
    else if (state.areasunlocked==7) {
        
    }
    else if (state.areasunlocked>=8) {
        if (state.random_contests>=0.96) {
            contests.focus_ttgst=1; //TTG1
            return 1;
        }
        else if (state.random_contests>=0.92) {
            contests.focus_ttgst=2; //TTG2
            return 2;
        }
        else if (state.random_contests>=0.88) {
            contests.focus_ttgst=3; //TTG3
            return 3;
        }
        else if (state.random_contests>=0.84) {
            contests.focus_ttgst=4; //TTG4
            return 4;
        }
        else if (state.random_contests>=0.80) {
            contests.focus_ttgst=5; //TTG5
            return 5;
        }
        else if (state.random_contests>=0.76) {
            contests.focus_ttgst=6; //TTG6
            return 6;
        }
        else if (state.random_contests>=0.72) {
            contests.focus_ttgst=7; //TTG7
            return 7;
        }
        else if (state.random_contests>=0.68) {
            contests.focus_ttgst=8; //TTG8
            return 8;
        }
        else if (state.random_contests>=0.64) {
            contests.focus_ttgst=9; //TTG9
            return 9;
        }
        else if (state.random_contests>=0.60) {
            contests.focus_ttgst=10; //ST1
            return 10;
        }
        else if (state.random_contests>=0.56) {
            contests.focus_ttgst=11; //ST2
            return 11;
        }
        else if (state.random_contests>=0.52) {
            contests.focus_ttgst=12; //ST3
            return 12;
        }
        else if (state.random_contests>=0.48) {
            contests.focus_ttgst=13; //ST4
            return 13;
        }
        else if (state.random_contests>=0.44) {
            contests.focus_ttgst=14; //ST5
            return 14;
        }
        else if (state.random_contests>=0.40) {
            contests.focus_ttgst=15; //ST6
            return 15;
        }
        else if (state.random_contests>=0.36) {
            contests.focus_ttgst=16; //ST7
            return 16;
        }
        else if (state.random_contests>=0.32) {
            contests.focus_ttgst=17; //ST8
            return 17;
        }
        else if (state.random_contests>=0.28) {
            contests.focus_ttgst=18; //ST9
            return 18;
        }
        else if (state.random_contests>=0.24) {
            contests.focus_ttgst=19; //ST10
            return 19;
        }
        else if (state.random_contests>=0.20) {
            contests.focus_ttgst=20; //ST11
            return 20;
        }
        else if (state.random_contests>=0.16) {
            contests.focus_ttgst=21; //ST12
            return 21;
        }
        else if (state.random_contests>=0.12) {
            contests.focus_ttgst=22; //ST13
            return 22;
        }
        else if (state.random_contests>=0.08) {
            contests.focus_ttgst=23; //ST14
            return 23;
        }
        else if (state.random_contests>=0.04) {
            contests.focus_ttgst=24; //ST15
            return 24;
        }
        else if (state.random_contests>=0) {
            contests.focus_ttgst=25; //ST16
            return 25;
        }
    }
}

function focus_roll_attribute () {
    if (contests.id=="TTG01_C2") {
        if (focus.attribute_cttg01c2==0) {
            focus.attribute_cttg01c2=focus_roll_attribute2();
        }
        else {
            contests.focus_attribute=focus.attribute_cttg01c2;
        } 
    }
    else if (contests.id=="TTG01_C3") {
        if (focus.attribute_cttg01c3==0) {
            focus.attribute_cttg01c3=focus_roll_attribute2();
        }
        else {
            contests.focus_attribute=focus.attribute_cttg01c3;
        } 
    }
    else if (contests.id=="Area01_C1") {
        if (focus.attribute_a01c1==0) {
            focus.attribute_a01c1=focus_roll_attribute2();
        }
        else {
            contests.focus_attribute=focus.attribute_a01c1;
        }
    }
    else if (contests.id=="Area01_C2") {
        if (focus.attribute_a01c2==0) {
            focus.attribute_a01c2=focus_roll_attribute2();
        }
        else {
            contests.focus_attribute=focus.attribute_a01c2;
        }
    }
    else if (contests.id=="Area01_C3") {
        if (focus.attribute_a01c3==0) {
            focus.attribute_a01c3=focus_roll_attribute2();
        }
        else {
            contests.focus_attribute=focus.attribute_a01c3;
        }
    }
}

function focus_roll_attribute2 () {    
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.random_contests>=0.75) {
        contests.focus_attribute=1; //Foliage
        return 1;
    }
    else if (state.random_contests>=0.5) {
        contests.focus_attribute=2; //Branches
        return 2;
    }
    else if (state.random_contests>=0.25) {
        contests.focus_attribute=3; //Trunk
        return 3;
    }
    else if (state.random_contests>=0) {
        contests.focus_attribute=4; //Roots
        return 4;
    }
}

function ttgst_attribute_text() {
    if (contests.focus_attribute==1) {
        contests.attributetext="Foliage";
    } 
    else if (contests.focus_attribute==2) {
        contests.attributetext="Branches";
    }
    else if (contests.focus_attribute==3) {
        contests.attributetext="Trunk";
    } 
    else if (contests.focus_attribute==4) {
        contests.attributetext="Roots";
    }
    if (contests.focus_ttgst==1) {
        contests.ttgsttext="Raundo";
    } 
    else if (contests.focus_ttgst==2) {
        contests.ttgsttext="Erementaru";
    }
    else if (contests.focus_ttgst==3) {
        contests.ttgsttext="Roku-men";
    } 
    else if (contests.focus_ttgst==4) {
        contests.ttgsttext="Seikatsu";
    } 
    else if (contests.focus_ttgst==5) {
        contests.ttgsttext="Sanmen";
    } 
    else if (contests.focus_ttgst==6) {
        contests.ttgsttext="Shihen";
    } 
    else if (contests.focus_ttgst==7) {
        contests.ttgsttext="Jinkō-teki";
    } 
    else if (contests.focus_ttgst==8) {
        contests.ttgsttext="Sora";
    } 
    else if (contests.focus_ttgst==9) {
        contests.ttgsttext="Shizen";
    } 
    else if (contests.focus_ttgst==10) {
        contests.ttgsttext="Chokan";
    } 
    else if (contests.focus_ttgst==11) {
        contests.ttgsttext="Moyogi";
    } 
    else if (contests.focus_ttgst==12) {
        contests.ttgsttext="Shakan";
    } 
    else if (contests.focus_ttgst==13) {
        contests.ttgsttext="Han-Kengai";
    } 
    else if (contests.focus_ttgst==14) {
        contests.ttgsttext="Sokan";
    } 
    else if (contests.focus_ttgst==15) {
        contests.ttgsttext="Kengai";
    } 
    else if (contests.focus_ttgst==16) {
        contests.ttgsttext="Kabudachi";
    } 
    else if (contests.focus_ttgst==17) {
        contests.ttgsttext="Hokidachi";
    } 
    else if (contests.focus_ttgst==18) {
        contests.ttgsttext="Bunjin";
    } 
    else if (contests.focus_ttgst==19) {
        contests.ttgsttext="Fukinagashi";
    } 
    else if (contests.focus_ttgst==20) {
        contests.ttgsttext="Ikadabuki";
    } 
    else if (contests.focus_ttgst==21) {
        contests.ttgsttext="Neagari";
    } 
    else if (contests.focus_ttgst==22) {
        contests.ttgsttext="Sharimiki";
    } 
    else if (contests.focus_ttgst==23) {
        contests.ttgsttext="Ishizuki";
    } 
    else if (contests.focus_ttgst==24) {
        contests.ttgsttext="Sabamiki";
    } 
    else if (contests.focus_ttgst==25) {
        contests.ttgsttext="Seki-joju";
    }
}