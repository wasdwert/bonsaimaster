function contests_comcalc () {
    contests_comcalc_level();
    contests_comcalc_treequality();
    contests_comcalc_ttt();
    contests_comcalc_st();
    contests_comcalc_shiny();
    contests_comcalc_nature();
    contests_comcalc_growing();
    contests_comcalc_shaping();
    contests_comcalc_pot(); 
    contests_comcalc_distribution();
    
    contests_comcalc_cp(contests_bonsai_c1, contests_bonsai_c1);
    contests_comcalc_cp(contests_bonsai_c2, contests_bonsai_c2);
    contests_comcalc_cp(contests_bonsai_c3, contests_bonsai_c3);
    contests_comcalc_cp(contests_bonsai_c4, contests_bonsai_c4);
    contests_comcalc_cp(contests_bonsai_c5, contests_bonsai_c5);
    contests_comcalc_cp(contests_bonsai_c6, contests_bonsai_c6);
    contests_comcalc_cp(contests_bonsai_c7, contests_bonsai_c7);
    contests_comcalc_cp(contests_bonsai_c8, contests_bonsai_c8);
    contests_comcalc_cp(contests_bonsai_c9, contests_bonsai_c9);
    
    contests_comcalc_bb(); 
}

//Level
function contests_comcalc_level () {
    if (contests.id=="TTG01_C1") {
        contests_bonsai_c1.level=Math.round(Math.random()*25);
        contests_comcalc_level25 (contests_bonsai_c1);
        contests_bonsai_c2.level=Math.round(Math.random()*25);
        contests_comcalc_level25 (contests_bonsai_c2);
        contests_bonsai_c3.level=Math.round(Math.random()*25);
        contests_comcalc_level25 (contests_bonsai_c3);
    }
    else if (contests.id=="TTG01_C2") {
        contests_bonsai_c1.level=Math.round(Math.random()*25);
        contests_comcalc_level25 (contests_bonsai_c1);
        contests_bonsai_c1.level +=15;
        contests_bonsai_c2.level=Math.round(Math.random()*25);
        contests_comcalc_level25 (contests_bonsai_c2);
        contests_bonsai_c2.level +=15;
        contests_bonsai_c3.level=Math.round(Math.random()*25);
        contests_comcalc_level25 (contests_bonsai_c3);
        contests_bonsai_c3.level +=15;
        contests_bonsai_c4.level=Math.round(Math.random()*25);
        contests_comcalc_level25 (contests_bonsai_c4);
        contests_bonsai_c4.level +=15;
        contests_bonsai_c5.level=Math.round(Math.random()*25);
        contests_comcalc_level25 (contests_bonsai_c5);
        contests_bonsai_c5.level +=15;
    }
    else if (contests.id=="TTG01_C3") {
        contests_bonsai_c1.level=Math.round(Math.random()*25);
        contests_comcalc_level25 (contests_bonsai_c1);
        contests_bonsai_c1.level +=30;
        contests_bonsai_c2.level=Math.round(Math.random()*25);
        contests_comcalc_level25 (contests_bonsai_c2);
        contests_bonsai_c2.level +=30;
        contests_bonsai_c3.level=Math.round(Math.random()*25);
        contests_comcalc_level25 (contests_bonsai_c3);
        contests_bonsai_c3.level +=30;
        contests_bonsai_c4.level=Math.round(Math.random()*25);
        contests_comcalc_level25 (contests_bonsai_c4);
        contests_bonsai_c4.level +=30;
        contests_bonsai_c5.level=Math.round(Math.random()*25);
        contests_comcalc_level25 (contests_bonsai_c5);
        contests_bonsai_c5.level +=30;
        contests_bonsai_c6.level=Math.round(Math.random()*25);
        contests_comcalc_level25 (contests_bonsai_c6);
        contests_bonsai_c6.level +=30;
        contests_bonsai_c7.level=Math.round(Math.random()*25);
        contests_comcalc_level25 (contests_bonsai_c7);
        contests_bonsai_c7.level +=30;
    }
    else if (contests.id=="Area01_C1") {
        contests_bonsai_c1.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c1);
        contests_bonsai_c1.level +=20;
        contests_bonsai_c2.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c2);
        contests_bonsai_c2.level +=20;
        contests_bonsai_c3.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c3);
        contests_bonsai_c3.level +=20;
        contests_bonsai_c4.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c4);
        contests_bonsai_c4.level +=20;
        contests_bonsai_c5.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c5);
        contests_bonsai_c5.level +=20;
        contests_bonsai_c6.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c6);
        contests_bonsai_c6.level +=20;
        contests_bonsai_c7.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c7);
        contests_bonsai_c7.level +=20;
        contests_bonsai_c8.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c8);
        contests_bonsai_c8.level +=20;
        contests_bonsai_c9.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c9);
        contests_bonsai_c9.level +=20;
    }
    
    else if (contests.id=="Area01_C2") {
        contests_bonsai_c1.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c1);
        contests_bonsai_c1.level +=40;
        contests_bonsai_c2.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c2);
        contests_bonsai_c2.level +=40;
        contests_bonsai_c3.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c3);
        contests_bonsai_c3.level +=40;
        contests_bonsai_c4.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c4);
        contests_bonsai_c4.level +=40;
        contests_bonsai_c5.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c5);
        contests_bonsai_c5.level +=40;
        contests_bonsai_c6.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c6);
        contests_bonsai_c6.level +=40;
        contests_bonsai_c7.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c7);
        contests_bonsai_c7.level +=40;
        contests_bonsai_c8.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c8);
        contests_bonsai_c8.level +=40;
        contests_bonsai_c9.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c9);
        contests_bonsai_c9.level +=40;
    }
    
    else if (contests.id=="Area01_C3") {
        contests_bonsai_c1.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c1);
        contests_bonsai_c1.level +=60;
        contests_bonsai_c2.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c2);
        contests_bonsai_c2.level +=60;
        contests_bonsai_c3.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c3);
        contests_bonsai_c3.level +=60;
        contests_bonsai_c4.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c4);
        contests_bonsai_c4.level +=60;
        contests_bonsai_c5.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c5);
        contests_bonsai_c5.level +=60;
        contests_bonsai_c6.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c6);
        contests_bonsai_c6.level +=60;
        contests_bonsai_c7.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c7);
        contests_bonsai_c7.level +=60;
        contests_bonsai_c8.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c8);
        contests_bonsai_c8.level +=60;
        contests_bonsai_c9.level=Math.round(Math.random()*20);
        contests_comcalc_level20 (contests_bonsai_c9);
        contests_bonsai_c9.level +=60;
    }
}

function contests_comcalc_level25 (a) {
    if (a.level>=20) {
    }
    else if (a.level>=16) {
        a.level +=1;
    }
    else if (a.level>=12) {
        a.level +=2;
    }
    else if (a.level>=8) {
        a.level +=3;
    }
    else if (a.level>=4) {
        a.level +=4;
    }
    else if (a.level>=0) {
        a.level +=5;
    }
}

function contests_comcalc_level20 (a) {
    if (a.level>=16) {
    }
    else if (a.level>=12) {
        a.level +=1;
    }
    else if (a.level>=8) {
        a.level +=2;
    }
    else if (a.level>=4) {
        a.level +=3;
    }
    else if (a.level>=0) {
        a.level +=4;
    }
}

//Treequality
function contests_comcalc_treequality () {
    if (contests.id=="TTG01_C1" || contests.id=="TTG01_C2" || contests.id=="TTG01_C3" || contests.id=="Area01_C1" || contests.id=="Area01_C2" || contests.id=="Area01_C3") {
        contests_comcalc_treequality_area1(contests_bonsai_c1);
        contests_comcalc_treequality_area1(contests_bonsai_c2);
        contests_comcalc_treequality_area1(contests_bonsai_c3);
        contests_comcalc_treequality_area1(contests_bonsai_c4);
        contests_comcalc_treequality_area1(contests_bonsai_c5);
        contests_comcalc_treequality_area1(contests_bonsai_c6);
        contests_comcalc_treequality_area1(contests_bonsai_c7);
        contests_comcalc_treequality_area1(contests_bonsai_c8);
        contests_comcalc_treequality_area1(contests_bonsai_c9);
    }
}

function contests_comcalc_treequality_area1 (a) {
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.random_contests>=0.98) {
        a.treequality=3;
    }
    else if (state.random_contests>=0.78) {
        a.treequality=2;
    }
    else {
        a.treequality=1;
    }
}

//Treetype group & Treetype
function contests_comcalc_ttt() {
    if (contests.id=="TTG01_C1") {
        checkfocus ();
        contests.ttg1= 0.666; //Should be 0.7 (30%), but not executed due to it being less than 0.666 (33,3%)
        contests.ttg2= 0.333;
        contests.ttg3= 0;
        contests_comcalc_ttt2(contests_bonsai_c1);
        contests_comcalc_ttt2(contests_bonsai_c2);
        contests_comcalc_ttt2(contests_bonsai_c3);
        
        contests_comcalc_ttt_tt(contests_bonsai_c1);
        contests_comcalc_ttt_tt(contests_bonsai_c2);
        contests_comcalc_ttt_tt(contests_bonsai_c3);
        resetchange ();
    }
    else if (contests.id=="TTG01_C2") {
        checkfocus ();
        contests.ttg1= 0.4; //60%
        contests.ttg2= 0.2;
        contests.ttg3= 0;
        contests_comcalc_ttt2(contests_bonsai_c1);
        contests_comcalc_ttt2(contests_bonsai_c2);
        contests_comcalc_ttt2(contests_bonsai_c3);
        contests_comcalc_ttt2(contests_bonsai_c4);
        contests_comcalc_ttt2(contests_bonsai_c5);
        
        contests_comcalc_ttt_tt(contests_bonsai_c1);
        contests_comcalc_ttt_tt(contests_bonsai_c2);
        contests_comcalc_ttt_tt(contests_bonsai_c3);
        contests_comcalc_ttt_tt(contests_bonsai_c4);
        contests_comcalc_ttt_tt(contests_bonsai_c5);
        resetchange ();
    }
    else if (contests.id=="TTG01_C3") {
        checkfocus ();
        contests.ttg1= 0.1; //90%
        contests.ttg2= 0.05;
        contests.ttg3= 0;
        contests_comcalc_ttt2(contests_bonsai_c1);
        contests_comcalc_ttt2(contests_bonsai_c2);
        contests_comcalc_ttt2(contests_bonsai_c3);
        contests_comcalc_ttt2(contests_bonsai_c4);
        contests_comcalc_ttt2(contests_bonsai_c5);
        contests_comcalc_ttt2(contests_bonsai_c6);
        contests_comcalc_ttt2(contests_bonsai_c7);
        
        contests_comcalc_ttt_tt(contests_bonsai_c1);
        contests_comcalc_ttt_tt(contests_bonsai_c2);
        contests_comcalc_ttt_tt(contests_bonsai_c3);
        contests_comcalc_ttt_tt(contests_bonsai_c4);
        contests_comcalc_ttt_tt(contests_bonsai_c5);
        contests_comcalc_ttt_tt(contests_bonsai_c6);
        contests_comcalc_ttt_tt(contests_bonsai_c7);
        resetchange ();
    }
    else if (contests.id=="Area01_C1") {
        checkfocus ();
        if (contests.focus_ttgst<=9) {
            contests.ttg1= 0.666; //Should be 0.8 (20%), but not executed due to it being less than 0.666 (33,3%)
            contests.ttg2= 0.333;
            contests.ttg3= 0;
        }
        else {
            contests.ttg1= 0.666;
            contests.ttg2= 0.333;
            contests.ttg3= 0;
        }
        contests_comcalc_ttt2(contests_bonsai_c1);
        contests_comcalc_ttt2(contests_bonsai_c2);
        contests_comcalc_ttt2(contests_bonsai_c3);
        contests_comcalc_ttt2(contests_bonsai_c4);
        contests_comcalc_ttt2(contests_bonsai_c5);
        contests_comcalc_ttt2(contests_bonsai_c6);
        contests_comcalc_ttt2(contests_bonsai_c7);
        contests_comcalc_ttt2(contests_bonsai_c8);
        contests_comcalc_ttt2(contests_bonsai_c9);
        
        contests_comcalc_ttt_tt(contests_bonsai_c1);
        contests_comcalc_ttt_tt(contests_bonsai_c2);
        contests_comcalc_ttt_tt(contests_bonsai_c3);
        contests_comcalc_ttt_tt(contests_bonsai_c4);
        contests_comcalc_ttt_tt(contests_bonsai_c5);
        contests_comcalc_ttt_tt(contests_bonsai_c6);
        contests_comcalc_ttt_tt(contests_bonsai_c7);
        contests_comcalc_ttt_tt(contests_bonsai_c8);
        contests_comcalc_ttt_tt(contests_bonsai_c9);
        resetchange ();
    }
    
    else if (contests.id=="Area01_C2") {
        checkfocus ();
        if (contests.focus_ttgst<=9) {
            contests.ttg1= 0.666; //Should be 0.7 (30%), but not executed due to it being less than 0.666 (33,3%)
            contests.ttg2= 0.333;
            contests.ttg3= 0;
        }
        else {
            contests.ttg1= 0.666;
            contests.ttg2= 0.333;
            contests.ttg3= 0;
        }
        contests_comcalc_ttt2(contests_bonsai_c1);
        contests_comcalc_ttt2(contests_bonsai_c2);
        contests_comcalc_ttt2(contests_bonsai_c3);
        contests_comcalc_ttt2(contests_bonsai_c4);
        contests_comcalc_ttt2(contests_bonsai_c5);
        contests_comcalc_ttt2(contests_bonsai_c6);
        contests_comcalc_ttt2(contests_bonsai_c7);
        contests_comcalc_ttt2(contests_bonsai_c8);
        contests_comcalc_ttt2(contests_bonsai_c9);
        
        contests_comcalc_ttt_tt(contests_bonsai_c1);
        contests_comcalc_ttt_tt(contests_bonsai_c2);
        contests_comcalc_ttt_tt(contests_bonsai_c3);
        contests_comcalc_ttt_tt(contests_bonsai_c4);
        contests_comcalc_ttt_tt(contests_bonsai_c5);
        contests_comcalc_ttt_tt(contests_bonsai_c6);
        contests_comcalc_ttt_tt(contests_bonsai_c7);
        contests_comcalc_ttt_tt(contests_bonsai_c8);
        contests_comcalc_ttt_tt(contests_bonsai_c9);
        resetchange ();
    }
    
    else if (contests.id=="Area01_C3") {
        checkfocus ();
        if (contests.focus_ttgst<=9) {
            contests.ttg1= 0.5; //50%
            contests.ttg2= 0.25;
            contests.ttg3= 0;
        }
        else {
            contests.ttg1= 0.666;
            contests.ttg2= 0.333;
            contests.ttg3= 0;
        }
        contests_comcalc_ttt2(contests_bonsai_c1);
        contests_comcalc_ttt2(contests_bonsai_c2);
        contests_comcalc_ttt2(contests_bonsai_c3);
        contests_comcalc_ttt2(contests_bonsai_c4);
        contests_comcalc_ttt2(contests_bonsai_c5);
        contests_comcalc_ttt2(contests_bonsai_c6);
        contests_comcalc_ttt2(contests_bonsai_c7);
        contests_comcalc_ttt2(contests_bonsai_c8);
        contests_comcalc_ttt2(contests_bonsai_c9);
        
        contests_comcalc_ttt_tt(contests_bonsai_c1);
        contests_comcalc_ttt_tt(contests_bonsai_c2);
        contests_comcalc_ttt_tt(contests_bonsai_c3);
        contests_comcalc_ttt_tt(contests_bonsai_c4);
        contests_comcalc_ttt_tt(contests_bonsai_c5);
        contests_comcalc_ttt_tt(contests_bonsai_c6);
        contests_comcalc_ttt_tt(contests_bonsai_c7);
        contests_comcalc_ttt_tt(contests_bonsai_c8);
        contests_comcalc_ttt_tt(contests_bonsai_c9);
        resetchange ();
    }
}

function contests_comcalc_ttt2(a) {
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.random_contests>=contests.ttg1) {
        a.treetypegroup=changeorder.ttg1;
    }
    else if (state.random_contests>=contests.ttg2) {
        a.treetypegroup=changeorder.ttg2;
    }
    else if (state.random_contests>=contests.ttg3) {
        a.treetypegroup=changeorder.ttg3;
    }
    else if (state.random_contests>=contests.ttg4) {
        a.treetypegroup=changeorder.ttg4;
    }
    else if (state.random_contests>=contests.ttg5) {
        a.treetypegroup=changeorder.ttg5;
    }
    else if (state.random_contests>=contests.ttg6) {
        a.treetypegroup=changeorder.ttg6;
    }
    else if (state.random_contests>=contests.ttg7) {
        a.treetypegroup=changeorder.ttg7;
    }
    else if (state.random_contests>=contests.ttg8) {
        a.treetypegroup=changeorder.ttg8;
    }
    else if (state.random_contests>=contests.ttg9) {
        a.treetypegroup=changeorder.ttg9;
    }
}

function contests_comcalc_ttt_tt(a) {
    if (a.treetypegroup==1) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.9016) {
            a.treetype=3;
        }
        else if (state.random_contests>=0.6557) {
            a.treetype=2;
        }
        else {
            a.treetype=1;
        }
    }
    else if (a.treetypegroup==2) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.9016) {
            a.treetype=6;
        }
        else if (state.random_contests>=0.6557) {
            a.treetype=5;
        }
        else {
            a.treetype=4;
        }
    }
    else if (a.treetypegroup==3) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.9016) {
            a.treetype=9;
        }
        else if (state.random_contests>=0.6557) {
            a.treetype=8;
        }
        else {
            a.treetype=7;
        }
    }
}

//Styletpe
function contests_comcalc_st() {
    if (contests.id=="TTG01_C1" || contests.id=="TTG01_C2" || contests.id=="TTG01_C3") {
        checkfocus ();
        contests.st1= 0.666;
        contests.st2= 0.333;
        contests.st3= 0;
        contests_comcalc_st2(contests_bonsai_c1);
        contests_comcalc_st2(contests_bonsai_c2);
        contests_comcalc_st2(contests_bonsai_c3);
        contests_comcalc_st2(contests_bonsai_c4);
        contests_comcalc_st2(contests_bonsai_c5);
        contests_comcalc_st2(contests_bonsai_c6);
        contests_comcalc_st2(contests_bonsai_c7);
        resetchange ();
    }
    else if (contests.id=="Area01_C1") {
        checkfocus ();
        if (contests.focus_ttgst>9) {
            contests.st1= 0.666; //Should be 0.8 (20%), but not executed due to it being less than 0.666 (33,3%)
            contests.st2= 0.333;
            contests.st3= 0;
        }
        else {
            contests.st1= 0.666;
            contests.st2= 0.333;
            contests.st3= 0;
        }
        contests_comcalc_st2(contests_bonsai_c1);
        contests_comcalc_st2(contests_bonsai_c2);
        contests_comcalc_st2(contests_bonsai_c3);
        contests_comcalc_st2(contests_bonsai_c4);
        contests_comcalc_st2(contests_bonsai_c5);
        contests_comcalc_st2(contests_bonsai_c6);
        contests_comcalc_st2(contests_bonsai_c7);
        contests_comcalc_st2(contests_bonsai_c8);
        contests_comcalc_st2(contests_bonsai_c9);
        resetchange ();
    }
    else if (contests.id=="Area01_C2") {
        checkfocus ();
        if (contests.focus_ttgst>9) {
            contests.st1= 0.666; //Should be 0.8 (30%), but not executed due to it being less than 0.666 (33,3%)
            contests.st2= 0.333;
            contests.st3= 0;
        }
        else {
            contests.st1= 0.666;
            contests.st2= 0.333;
            contests.st3= 0;
        }
        contests_comcalc_st2(contests_bonsai_c1);
        contests_comcalc_st2(contests_bonsai_c2);
        contests_comcalc_st2(contests_bonsai_c3);
        contests_comcalc_st2(contests_bonsai_c4);
        contests_comcalc_st2(contests_bonsai_c5);
        contests_comcalc_st2(contests_bonsai_c6);
        contests_comcalc_st2(contests_bonsai_c7);
        contests_comcalc_st2(contests_bonsai_c8);
        contests_comcalc_st2(contests_bonsai_c9);
        resetchange ();
    }
    else if (contests.id=="Area01_C3") {
        checkfocus ();
        if (contests.focus_ttgst>9) {
            contests.st1= 0.5; // 50%
            contests.st2= 0.25;
            contests.st3= 0;
        }
        else {
            contests.st1= 0.666;
            contests.st2= 0.333;
            contests.st3= 0;
        }
        contests_comcalc_st2(contests_bonsai_c1);
        contests_comcalc_st2(contests_bonsai_c2);
        contests_comcalc_st2(contests_bonsai_c3);
        contests_comcalc_st2(contests_bonsai_c4);
        contests_comcalc_st2(contests_bonsai_c5);
        contests_comcalc_st2(contests_bonsai_c6);
        contests_comcalc_st2(contests_bonsai_c7);
        contests_comcalc_st2(contests_bonsai_c8);
        contests_comcalc_st2(contests_bonsai_c9);
        resetchange ();
    }
}

function contests_comcalc_st2(a) {
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.random_contests>=contests.st1) {
        a.styletype=changeorder.st1;
    }
    else if (state.random_contests>=contests.st2) {
        a.styletype=changeorder.st2;
    }
    else if (state.random_contests>=contests.st3) {
        a.styletype=changeorder.st3;
    }
    else if (state.random_contests>=contests.st4) {
        a.styletype=changeorder.st4;
    }
    else if (state.random_contests>=contests.st5) {
        a.styletype=changeorder.st5;
    }
    else if (state.random_contests>=contests.st6) {
        a.styletype=changeorder.st6;
    }
    else if (state.random_contests>=contests.st7) {
        a.styletype=changeorder.st7;
    }
    else if (state.random_contests>=contests.st8) {
        a.styletype=changeorder.st8;
    }
    else if (state.random_contests>=contests.st9) {
        a.styletype=changeorder.st9;
    }
    else if (state.random_contests>=contests.st10) {
        a.styletype=changeorder.st10;
    }
    else if (state.random_contests>=contests.st11) {
        a.styletype=changeorder.st11;
    }
    else if (state.random_contests>=contests.st12) {
        a.styletype=changeorder.st12;
    }
    else if (state.random_contests>=contests.st13) {
        a.styletype=changeorder.st13;
    }
    else if (state.random_contests>=contests.st14) {
        a.styletype=changeorder.st14;
    }
    else if (state.random_contests>=contests.st15) {
        a.styletype=changeorder.st15;
    }
    else if (state.random_contests>=contests.st16) {
        a.styletype=changeorder.st16;
    }
}

var changeorder = {
    ttg1: 1,
    ttg2: 2,
    ttg3: 3,
    ttg4: 4,
    ttg5: 5,
    ttg6: 6,
    ttg7: 7,
    ttg8: 8,
    ttg9: 9,
    st1: 1,
    st2: 2,
    st3: 3,
    st4: 4,
    st5: 5,
    st6: 6,
    st7: 7,
    st8: 8,
    st9: 9,
    st10: 10,
    st11: 11,
    st12: 12,
    st13: 13,
    st14: 14,
    st15: 15,
    st16: 16,
}

function checkfocus () {
    if (contests.focus_ttgst==1) {
    }
    else if (contests.focus_ttgst==2) {
        changeorder.ttg1=2;
        changeorder.ttg2=1;
    }
    else if (contests.focus_ttgst==3) {
        changeorder.ttg1=3;
        changeorder.ttg3=1;
    }
    else if (contests.focus_ttgst==4) {
        changeorder.ttg1=4;
        changeorder.ttg4=1;
    }
    else if (contests.focus_ttgst==5) {
        changeorder.ttg1=5;
        changeorder.ttg5=1;
    }
    else if (contests.focus_ttgst==6) {
        changeorder.ttg1=6;
        changeorder.ttg6=1;
    }
    else if (contests.focus_ttgst==7) {
        changeorder.ttg1=7;
        changeorder.ttg7=1;
    }
    else if (contests.focus_ttgst==8) {
        changeorder.ttg1=8;
        changeorder.ttg8=1;
    }
    else if (contests.focus_ttgst==9) {
        changeorder.ttg1=9;
        changeorder.ttg9=1;
    }
    else if (contests.focus_ttgst==10) {
    }
    else if (contests.focus_ttgst==11) {
        changeorder.st1=2;
        changeorder.st2=1;
    }
    else if (contests.focus_ttgst==12) {
        changeorder.st1=3;
        changeorder.st3=1;
    }
    else if (contests.focus_ttgst==13) {
        changeorder.st1=4;
        changeorder.st4=1;
    }
    else if (contests.focus_ttgst==14) {
        changeorder.st1=5;
        changeorder.st5=1;
    }
    else if (contests.focus_ttgst==15) {
        changeorder.st1=6;
        changeorder.st6=1;
    }
    else if (contests.focus_ttgst==16) {
        changeorder.st1=7;
        changeorder.st7=1;
    }
    else if (contests.focus_ttgst==17) {
        changeorder.st1=8;
        changeorder.st8=1;
    }
    else if (contests.focus_ttgst==18) {
        changeorder.st1=9;
        changeorder.st9=1;
    }
    else if (contests.focus_ttgst==19) {
        changeorder.st1=10;
        changeorder.st10=1;
    }
    else if (contests.focus_ttgst==20) {
        changeorder.st1=11;
        changeorder.st11=1;
    }
    else if (contests.focus_ttgst==21) {
        changeorder.st1=12;
        changeorder.st12=1;
    }
    else if (contests.focus_ttgst==22) {
        changeorder.st1=13;
        changeorder.st13=1;
    }
    else if (contests.focus_ttgst==23) {
        changeorder.st1=14;
        changeorder.st14=1;
    }
    else if (contests.focus_ttgst==24) {
        changeorder.st1=15;
        changeorder.st15=1;
    }
    else if (contests.focus_ttgst==25) {
        changeorder.st1=16;
        changeorder.st16=1;
    }
}

function resetchange () {
    changeorder.ttg1=1;
    changeorder.ttg2=2;
    changeorder.ttg3=3;
    changeorder.ttg4=4;
    changeorder.ttg5=5;
    changeorder.ttg6=6;
    changeorder.ttg7=7;
    changeorder.ttg8=8;
    changeorder.ttg9=9;
    changeorder.st1=1;
    changeorder.st2=2;
    changeorder.st3=3;
    changeorder.st4=4;
    changeorder.st5=5;
    changeorder.st6=6;
    changeorder.st7=7;
    changeorder.st8=8;
    changeorder.st9=9;
    changeorder.st10=10;
    changeorder.st11=11;
    changeorder.st12=12;
    changeorder.st13=13;
    changeorder.st14=14;
    changeorder.st15=15;
    changeorder.st16=16;
}

//Shiny
function contests_comcalc_shiny() {
    if (contests.id=="TTG01_C1" || contests.id=="TTG01_C2" || contests.id=="TTG01_C3" || contests.id=="Area01_C1" || contests.id=="Area01_C2" || contests.id=="Area01_C3") {
        contests_bonsai_c1.shiny=1;
        contests_bonsai_c2.shiny=1;
        contests_bonsai_c3.shiny=1;
        contests_bonsai_c4.shiny=1;
        contests_bonsai_c5.shiny=1;
        contests_bonsai_c6.shiny=1;
        contests_bonsai_c7.shiny=1;
        contests_bonsai_c8.shiny=1;
        contests_bonsai_c9.shiny=1;
    }
}

//Nature
function contests_comcalc_nature() {
    contests_bonsai_c1.nature=naturerandom();
    contests_bonsai_c2.nature=naturerandom();
    contests_bonsai_c3.nature=naturerandom();
    contests_bonsai_c4.nature=naturerandom();
    contests_bonsai_c5.nature=naturerandom();
    contests_bonsai_c6.nature=naturerandom();
    contests_bonsai_c7.nature=naturerandom();
    contests_bonsai_c8.nature=naturerandom();
    contests_bonsai_c9.nature=naturerandom();
}

//Growing
function contests_comcalc_growing() {
    if (contests.id=="TTG01_C1" || contests.id=="TTG01_C2" || contests.id=="TTG01_C3" || contests.id=="Area01_C1" || contests.id=="Area01_C2" || contests.id=="Area01_C3") {
        contests_bonsai_c1.growing=Math.round(Math.random()*6);
        contests_bonsai_c2.growing=Math.round(Math.random()*6);
        contests_bonsai_c3.growing=Math.round(Math.random()*6);
        contests_bonsai_c4.growing=Math.round(Math.random()*6);
        contests_bonsai_c5.growing=Math.round(Math.random()*6);
        contests_bonsai_c6.growing=Math.round(Math.random()*6);
        contests_bonsai_c7.growing=Math.round(Math.random()*6);
        contests_bonsai_c8.growing=Math.round(Math.random()*6);
        contests_bonsai_c9.growing=Math.round(Math.random()*6);
    }
}

//Shaping
function contests_comcalc_shaping() {
    if (contests.id=="TTG01_C1" || contests.id=="TTG01_C2" || contests.id=="TTG01_C3" || contests.id=="Area01_C1" || contests.id=="Area01_C2" || contests.id=="Area01_C3") {
        contests_bonsai_c1.shaping=Math.round(Math.random()*4);
        contests_bonsai_c2.shaping=Math.round(Math.random()*4);
        contests_bonsai_c3.shaping=Math.round(Math.random()*4);
        contests_bonsai_c4.shaping=Math.round(Math.random()*4);
        contests_bonsai_c5.shaping=Math.round(Math.random()*4);
        contests_bonsai_c6.shaping=Math.round(Math.random()*4);
        contests_bonsai_c7.shaping=Math.round(Math.random()*4);
        contests_bonsai_c8.shaping=Math.round(Math.random()*4);
        contests_bonsai_c9.shaping=Math.round(Math.random()*4);
    }
}

//Distribution type
function contests_comcalc_distribution() {
    contests_comcalc_distribution2(contests_bonsai_c1);
    contests_comcalc_distribution2(contests_bonsai_c2);
    contests_comcalc_distribution2(contests_bonsai_c3);
    contests_comcalc_distribution2(contests_bonsai_c4);
    contests_comcalc_distribution2(contests_bonsai_c5);
    contests_comcalc_distribution2(contests_bonsai_c6);
    contests_comcalc_distribution2(contests_bonsai_c7);
    contests_comcalc_distribution2(contests_bonsai_c8);
    contests_comcalc_distribution2(contests_bonsai_c9);
}

function contests_comcalc_distribution2(a) {
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (contests.id=="TTG01_C1" || contests.id=="TTG01_C2" || contests.id=="TTG01_C3" || contests.id=="Area01_C1" || contests.id=="Area01_C2" || contests.id=="Area01_C3") { //Area 1 Clubs and League
        if (state.random_contests>1) {
            a.distributiontype=1;
        }
        else if (state.random_contests>1) {
            a.distributiontype=2;
        }
        else if (state.random_contests>0.8) {
            a.distributiontype=3;
        }
        else if (state.random_contests>0.6) {
            a.distributiontype=4;
        }
        else if (state.random_contests>0.4) {
            a.distributiontype=5;
        }
        else if (state.random_contests>0.3) {
            a.distributiontype=6;
        }
        else if (state.random_contests>0.2) {
            a.distributiontype=7;
        }
        else if (state.random_contests>0.1) {
            a.distributiontype=8;
        }
        else {
            a.distributiontype=9;
        }
    }
    else if (a) { //Area 2 Clubs and League
        if (state.random_contests>0.9) {
            a.distributiontype=1;
        }
        else if (state.random_contests>0.8) {
            a.distributiontype=2;
        }
        else if (state.random_contests>0.64) {
            a.distributiontype=3;
        }
        else if (state.random_contests>0.48) {
            a.distributiontype=4;
        }
        else if (state.random_contests>0.32) {
            a.distributiontype=5;
        }
        else if (state.random_contests>0.24) {
            a.distributiontype=6;
        }
        else if (state.random_contests>0.16) {
            a.distributiontype=7;
        }
        else if (state.random_contests>0.08) {
            a.distributiontype=8;
        }
        else {
            a.distributiontype=9;
        }
    }
    else if (a) { //Area 10 Clubs and League
        if (state.random_contests>0.3) {
            a.distributiontype=1;
        }
        else if (state.random_contests>0.1) {
            a.distributiontype=2;
        }
        else if (state.random_contests>0.08) {
            a.distributiontype=3;
        }
        else if (state.random_contests>0.06) {
            a.distributiontype=4;
        }
        else if (state.random_contests>0.04) {
            a.distributiontype=5;
        }
        else if (state.random_contests>0.03) {
            a.distributiontype=6;
        }
        else if (state.random_contests>0.02) {
            a.distributiontype=7;
        }
        else if (state.random_contests>0.01) {
            a.distributiontype=8;
        }
        else {
            a.distributiontype=9;
        }
    }
}

//CP calculation
function contests_comcalc_cp(a, b) {
    a.foliage=0;
    a.branches=0;
    a.trunk=0;    
    a.roots=0;
    a.leftpointstotal=0;
    if (a.treequality==1) {
        cpdistribution_com(a, b, level_cp_tq1);
    }
    else if (a.treequality==2) {
        cpdistribution_com(a, b, level_cp_tq2);
    }
    else if (a.treequality==3) {
        cpdistribution_com(a, b, level_cp_tq3);
    }
    a.foliage_new=0;
    a.branches_new=0;
    a.trunk_new=0;
    a.roots_new=0;
    a.leftpoints=0;
}

function cpdistribution_com(a, b, level_cp_tq) {
    if (a.level>90) {
        cpdistribution2_com(a, b, level_cp_tq, 9);
    }
    else if (a.level>80) {
        cpdistribution2_com(a, b, level_cp_tq, 8);
    }
    else if (a.level>70) {
        cpdistribution2_com(a, b, level_cp_tq, 7);
    }
    else if (a.level>60) {
        cpdistribution2_com(a, b, level_cp_tq, 6);
    }
    else if (a.level>50) {
        cpdistribution2_com(a, b, level_cp_tq, 5);
    }
    else if (a.level>40) {
        cpdistribution2_com(a, b, level_cp_tq, 4);
    }
    else if (a.level>30) {
        cpdistribution2_com(a, b, level_cp_tq, 3);
    }
    else if (a.level>20) {
        cpdistribution2_com(a, b, level_cp_tq, 2);
    }
    else if (a.level>10) {
        cpdistribution2_com(a, b, level_cp_tq, 1);
    }
    else {
        if (level_cp_tq[0]==2) {
            a.foliage = Math.round((((0.5)*naturedistribution(a, 1))*a.level)* 10) / 10;
            a.branches = Math.round((((0.5)*naturedistribution(a, 2))*a.level)* 10) / 10;
            a.trunk = Math.round((((0.5)*naturedistribution(a, 3))*a.level)* 10) / 10;
            a.roots = Math.round((((0.5)*naturedistribution(a, 4))*a.level)* 10) / 10;
        }
        else {
            cpdistribution2_com(a, b, level_cp_tq, 0);
        }
    }
}

function cpdistribution2_com(a, b, level_cp_tq, level_index) {
    if (level_index==0) {
        cpdistribution3a_com (a, b, level_cp_tq, level_index, 0)
    }
    else {
        cpdistribution3b_com (a, b, level_cp_tq, 0)
        if (level_index==1) {
            cpdistribution3a_com (a, b, level_cp_tq, level_index, 10)
        }
        else {
            cpdistribution3b_com (a, b, level_cp_tq, 1)
            if (level_index==2) {
                cpdistribution3a_com (a, b, level_cp_tq, level_index, 20)
            }
            else {
                cpdistribution3b_com (a, b, level_cp_tq, 2)
                if (level_index==3) {
                    cpdistribution3a_com (a, b, level_cp_tq, level_index, 30)
                }
                else {
                    cpdistribution3b_com (a, b, level_cp_tq, 3)
                    if (level_index==4) {
                        cpdistribution3a_com (a, b, level_cp_tq, level_index, 40)
                    }
                    else {
                        cpdistribution3b_com (a, b, level_cp_tq, 4)
                        if (level_index==5) {
                            cpdistribution3a_com (a, b, level_cp_tq, level_index, 50)
                        }
                        else {
                            cpdistribution3b_com (a, b, level_cp_tq, 5)
                            if (level_index==6) {
                                cpdistribution3a_com (a, b, level_cp_tq, level_index, 60)
                            }
                            else {
                                cpdistribution3b_com (a, b, level_cp_tq, 6)
                                if (level_index==7) {
                                    cpdistribution3a_com (a, b, level_cp_tq, level_index, 70)
                                }
                                else {
                                    cpdistribution3b_com (a, b, level_cp_tq, 7)
                                    if (level_index==8) {
                                        cpdistribution3a_com (a, b, level_cp_tq, level_index, 80)
                                    }
                                    else {
                                        cpdistribution3b_com (a, b, level_cp_tq, 8)
                                        if (level_index==9) {
                                            cpdistribution3a_com (a, b, level_cp_tq, level_index, 90)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } 
    if (a.distributiontype==1) { //one_focus
        cpcom_lp_one_focus(a);
    }
    else if (a.distributiontype==2) { //one_potential
        cpcom_lp_one_potential(a);
    }
    else if (a.distributiontype==3) { //one_str_equal
        cpcom_lp_one_str_equal(a);
    }  
    else if (a.distributiontype==4) { //one_str_random
        cpcom_lp_one_str_random(a);
    }
    else if (a.distributiontype==5) { //equalingout
        cpcom_lp_equalingout(a);
    }
    else if (a.distributiontype==6) { //equalalways
        cpcom_lp_equalalways(a);
    }
    else if (a.distributiontype==7) { //one_weak_equal
        cpcom_lp_one_weak_equal(a);
    }
    else if (a.distributiontype==8) { //one_weak_random
        cpcom_lp_one_weak_random(a);
    }
    else if (a.distributiontype==9) { //one_random
        cpcom_lp_onerandom(a);
    }
}

function cpdistribution3a_com (a, b, level_cp_tq, level_index, z) {
    if ((level_cp_tq[level_index]/10)*2<2) {
        naturepoints=2;
        leftpoints=level_cp_tq[level_index]-naturepoints;
    }
    else {
        naturepoints=(level_cp_tq[level_index]/10)*2;
        leftpoints=level_cp_tq[level_index]-naturepoints;
    }
    cpdistribution3_com (a, b, level_cp_tq, level_index);
    a.foliage +=a.foliage_new*(a.level-z);
    a.branches +=a.branches_new*(a.level-z);
    a.trunk +=a.trunk_new*(a.level-z);
    a.roots +=a.roots_new*(a.level-z);
    a.leftpointstotal +=a.leftpoints*(a.level-z);
    a.foliage_new=0;
    a.branches_new=0;
    a.trunk_new=0;
    a.roots_new=0;
    a.leftpoints=0;
}

function cpdistribution3b_com (a, b, level_cp_tq, level_index) {
    if ((level_cp_tq[level_index]/10)*2<2) {
        naturepoints=2;
        leftpoints=level_cp_tq[level_index]-naturepoints;
    }
    else {
        naturepoints=(level_cp_tq[level_index]/10)*2;
        leftpoints=level_cp_tq[level_index]-naturepoints;
    }
    cpdistribution3_com (a, b, level_cp_tq, level_index);
    a.foliage +=a.foliage_new*10;
    a.branches +=a.branches_new*10;
    a.trunk +=a.trunk_new*10;
    a.roots +=a.roots_new*10;
    a.leftpointstotal +=a.leftpoints*10;
    a.foliage_new=0;
    a.branches_new=0;
    a.trunk_new=0;
    a.roots_new=0;
    a.leftpoints=0;
}

function cpdistribution3_com (a, b, level_cp_tq, level_index) {
    if (a.treetypegroup<=4) {
        cpdistribution_growing(a, level_cp_tq, level_index, 25, b);
    }
    else if (a.treetypegroup<=6) {
        cpdistribution_growing(a, level_cp_tq, level_index, 32, b);
    }
    else if (a.treetypegroup<=8) {
        cpdistribution_growing(a, level_cp_tq, level_index, 40, b);
    }
    else {
        cpdistribution_growing(a, level_cp_tq, level_index, 50, b);
    }
}

function cpcom_lp_one_focus(a) {
    if (contests.focus_attribute==1) {
        a.foliage +=a.leftpointstotal;
    }
    else if (contests.focus_attribute==2) {
        a.branches +=a.leftpointstotal;
    }
    else if (contests.focus_attribute==3) {
        a.trunk +=a.leftpointstotal;
    }
    else if (contests.focus_attribute==4) {
        a.roots +=a.leftpointstotal;
    }
}

function cpcom_lp_one_potential (a) {
    if ((a.inheritedpotentialfoliage+a.obtainedpotentialfoliage)>(a.inheritedpotentialbranches+a.obtainedpotentialbranches)) {
        if ((a.inheritedpotentialfoliage+a.obtainedpotentialfoliage)>(a.inheritedpotentialtrunk+a.obtainedpotentialtrunk)) {
            if ((a.inheritedpotentialfoliage+a.obtainedpotentialfoliage)>(a.inheritedpotentialroots+a.obtainedpotentialroots)) {
                a.foliage +=a.leftpointstotal;
            }
            else {
                a.roots +=a.leftpointstotal;
            }
        }
        else if ((a.inheritedpotentialtrunk+a.obtainedpotentialtrunk)>(a.inheritedpotentialroots+a.obtainedpotentialroots)) {
            a.trunk +=a.leftpointstotal;
        }
        else {
            a.roots +=a.leftpointstotal;
        }
    }
    else if ((a.inheritedpotentialbranches+a.obtainedpotentialbranches)>(a.inheritedpotentialtrunk+a.obtainedpotentialtrunk)) {
        if ((a.inheritedpotentialbranches+a.obtainedpotentialbranches)>(a.inheritedpotentialroots+a.obtainedpotentialroots)) {
            a.branches +=a.leftpointstotal;
        }
        else {
            a.roots +=a.leftpointstotal;
        }
    }
    else if ((a.inheritedpotentialtrunk+a.obtainedpotentialtrunk)>(a.inheritedpotentialroots+a.obtainedpotentialroots)) {
        a.trunk +=a.leftpointstotal;  
    }
    else {
        a.roots +=a.leftpointstotal;
    }
}

function cpcom_lp_equal_potential (a) {
    a.foliage_new=0;
    a.branches_new=0;
    a.trunk_new=0;
    a.roots_new=0; 
    a.foliage_new +=Math.round((a.leftpointstotal*((a.inheritedpotentialfoliage+a.obtainedpotentialfoliage)/(a.inheritedpotentialfoliage+a.obtainedpotentialfoliage+a.inheritedpotentialbranches+a.obtainedpotentialbranches+a.inheritedpotentialtrunk+a.obtainedpotentialtrunk+a.inheritedpotentialroots+a.obtainedpotentialroots)))*10)/10;
    a.branches_new +=Math.round((a.leftpointstotal*((a.inheritedpotentialbranches+a.obtainedpotentialbranches)/(a.inheritedpotentialfoliage+a.obtainedpotentialfoliage+a.inheritedpotentialbranches+a.obtainedpotentialbranches+a.inheritedpotentialtrunk+a.obtainedpotentialtrunk+a.inheritedpotentialroots+a.obtainedpotentialroots)))*10)/10;
    a.trunk_new +=Math.round((a.leftpointstotal*((a.inheritedpotentialtrunk+a.obtainedpotentialtrunk)/(a.inheritedpotentialfoliage+a.obtainedpotentialfoliage+a.inheritedpotentialbranches+a.obtainedpotentialbranches+a.inheritedpotentialtrunk+a.obtainedpotentialtrunk+a.inheritedpotentialroots+a.obtainedpotentialroots)))*10)/10;
    a.roots_new +=Math.round((a.leftpointstotal*((a.inheritedpotentialroots+a.obtainedpotentialroots)/(a.inheritedpotentialfoliage+a.obtainedpotentialfoliage+a.inheritedpotentialbranches+a.obtainedpotentialbranches+a.inheritedpotentialtrunk+a.obtainedpotentialtrunk+a.inheritedpotentialroots+a.obtainedpotentialroots)))*10)/10;
    a.leftpointstotal -=(a.foliage_new+a.branches_new+a.trunk_new+a.roots_new);
    if (a.leftpointstotal>0) {
        if (a.foliage_new>a.branches_new) {
            if (a.foliage_new>a.trunk_new) {
                if (a.foliage_new>a.roots_new) {
                    a.foliage_new +=a.leftpointstotal;
                }
                else {
                    a.roots_new +=a.leftpointstotal;
                }
            }
            else if (a.trunk_new>a.roots_new) {
                a.trunk_new +=a.leftpointstotal;
            }
            else {
                a.roots_new +=a.leftpointstotal;
            }
        }
        else if (a.branches_new>a.trunk_new) {
            if (a.branches_new>a.roots_new) {
                a.branches_new +=a.leftpointstotal;
            }
            else {
                a.roots_new +=a.leftpointstotal;
            }
        }
        else if (a.trunk_new>a.roots_new) {
            a.trunk_new +=a.leftpointstotal;
        }
        else {
            a.roots_new +=a.leftpointstotal;
        }
    }
    else if (a.leftpointstotal<0) {
        if (a.foliage_new<a.branches_new) {
            if (a.foliage_new<a.trunk_new) {
                if (a.foliage_new<a.roots_new) {
                    a.foliage_new -=a.leftpointstotal;
                }
                else {
                    a.roots_new -=a.leftpointstotal;
                }
            }
            else if (a.trunk_new<a.roots_new) {
                a.trunk_new -=a.leftpointstotal;
            }
            else {
                a.roots_new -=a.leftpointstotal;
            }
        }
        else if (a.branches_new<a.trunk_new) {
            if (a.branches_new<a.roots_new) {
                a.branches_new -=a.leftpointstotal;
            }
            else {
                a.roots_new -=a.leftpointstotal;
            }
        }
        else if (a.trunk_new<a.roots_new) {
            a.trunk_new -=a.leftpointstotal;
        }
        else {
            a.roots_new -=a.leftpointstotal;
        }
    }
    a.foliage +=a.foliage_new;
    a.branches +=a.branches_new;
    a.trunk +=a.trunk_new;
    a.roots +=a.roots_new;
}

function cpcom_lp_equalalways(a) {
    a.foliage +=a.leftpointstotal/4;
    a.branches +=a.leftpointstotal/4;
    a.trunk +=a.leftpointstotal/4;
    a.roots +=a.leftpointstotal/4;
}

function cpcom_lp_equalingout (a) {
    if (a.foliage==0) {
        if (a.branches==a.trunk) {
            cpcom_lp_equalingout2 (a, a.roots);
            a.foliage +=a.roots_new;
            a.trunk +=a.branches_new;
            a.branches +=a.trunk_new;
            a.roots +=a.foliage_new;
        }
        else if (a.branches==a.roots) {
            cpcom_lp_equalingout2 (a, a.trunk);
            a.foliage +=a.roots_new;
            a.branches +=a.branches_new;
            a.roots +=a.trunk_new;
            a.trunk +=a.foliage_new;
        }
        else {
            cpcom_lp_equalingout2 (a, a.branches);
            a.foliage +=a.roots_new;
            a.trunk +=a.branches_new;
            a.roots +=a.trunk_new;
            a.branches +=a.foliage_new;
        }
    }
    else if (a.branches==0) {
        if (a.foliage==a.trunk) {
            cpcom_lp_equalingout2 (a, a.roots);
            a.branches +=a.roots_new;
            a.trunk +=a.branches_new;
            a.foliage +=a.trunk_new;
            a.roots +=a.foliage_new;
        }
        else if (a.foliage==a.roots) {
            cpcom_lp_equalingout2 (a, a.trunk);
            a.branches +=a.roots_new;
            a.foliage +=a.branches_new;
            a.roots +=a.trunk_new;
            a.trunk +=a.foliage_new;
        }
        else {
            cpcom_lp_equalingout2 (a, a.foliage);
            a.branches +=a.roots_new;
            a.trunk +=a.branches_new;
            a.roots +=a.trunk_new;
            a.foliage +=a.foliage_new;
        }
    }
    else if (a.trunk==0) {
        if (a.foliage==a.branches) {
            cpcom_lp_equalingout2 (a, a.roots);
            a.trunk +=a.roots_new;
            a.branches +=a.branches_new;
            a.foliage +=a.trunk_new;
            a.roots +=a.foliage_new;
        }
        else if (a.foliage==a.roots) {
            cpcom_lp_equalingout2 (a, a.branches);
            a.trunk +=a.roots_new;
            a.roots +=a.branches_new;
            a.foliage +=a.trunk_new;
            a.branches +=a.foliage_new;
        }
        else {
            cpcom_lp_equalingout2 (a, a.foliage);
            a.trunk +=a.roots_new;
            a.branches +=a.branches_new;
            a.roots +=a.trunk_new;
            a.foliage +=a.foliage_new;
        }
    }
    else if (a.roots==0) {
        if (a.foliage==a.branches) {
            cpcom_lp_equalingout2 (a, a.trunk);
            a.roots +=a.roots_new;
            a.branches +=a.branches_new;
            a.foliage +=a.trunk_new;
            a.trunk +=a.foliage_new;
        }
        else if (a.foliage==a.trunk) {
            cpcom_lp_equalingout2 (a, a.branches);
            a.roots +=a.roots_new;
            a.foliage +=a.branches_new;
            a.trunk +=a.trunk_new;
            a.branches +=a.foliage_new;
        }
        else {
            cpcom_lp_equalingout2 (a, a.foliage);
            a.roots +=a.roots_new;
            a.branches +=a.branches_new;
            a.trunk +=a.trunk_new;
            a.foliage +=a.foliage_new;
        }
    }
    else {
        a.foliage +=a.leftpoints/4;
        a.branches +=a.leftpoints/4;
        a.trunk +=a.leftpoints/4;
        a.roots +=a.leftpoints/4;
    } 
    a.foliage_new=0;
    a.branches_new=0;
    a.trunk_new=0;
    a.roots_new=0;  
    a.leftpoints=0;
    leftpoints=0;
}

function cpcom_lp_equalingout2 (a, b) {
    a.leftpoints=0;
    a.leftpoints=b;
    leftpoints=0;
    if (a.leftpointstotal>a.leftpoints*2) {
        leftpoints=1;
        cpcom_lp_equalingout3 (a)
    }
    else {
        if (a.leftpointstotal>a.leftpoints/2) {
            leftpoints=2;
            cpcom_lp_equalingout3 (a)
        }
        else {
            leftpoints=3;
            cpcom_lp_equalingout3 (a)
        }
    }
}

function cpcom_lp_equalingout3 (a) {
    a.foliage_new=0;
    a.branches_new=0;
    a.trunk_new=0;
    a.roots_new=0; 
    if (leftpoints==3) {
        a.roots_new=a.leftpointstotal;
    }
    else if (leftpoints==2) {
        a.roots_new=(a.leftpoints/2);
        a.leftpointstotal=(a.leftpointstotal-(a.leftpoints/2));
        a.leftpoints=Math.round((a.leftpointstotal/3)*10)/10;
        a.roots_new +=a.leftpoints;
        a.branches_new +=a.leftpoints;
        a.trunk_new +=a.leftpoints;
        a.leftpointstotal=(a.leftpointstotal-(a.leftpoints*3));
        a.roots_new +=a.leftpointstotal;
    }
    else if (leftpoints==1) {
        a.roots_new=a.leftpoints;
        a.branches_new +=(a.leftpoints/2);
        a.trunk_new +=(a.leftpoints/2);
        a.leftpointstotal=(a.leftpointstotal-(a.leftpoints*2));
        a.leftpoints=(a.leftpointstotal/4);
        a.roots_new +=a.leftpoints;
        a.foliage_new +=a.leftpoints;
        a.branches_new +=a.leftpoints;
        a.trunk_new +=a.leftpoints;
    }
}

function cpcom_lp_one_str_equal (a) {
    if (a.nature==2 || a.nature==6 || a.nature==10) {
        a.foliage +=a.leftpointstotal;
    }
    else if (a.nature==3 || a.nature==7 || a.nature==14) {
        a.branches +=a.leftpointstotal;
    }
    else if (a.nature==4 || a.nature==11 || a.nature==15) {
        a.trunk +=a.leftpointstotal;
    }
    else if (a.nature==8 || a.nature==12 || a.nature==16) {
        a.roots +=a.leftpointstotal;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        a.foliage +=a.leftpointstotal/4;
        a.branches +=a.leftpointstotal/4;
        a.trunk +=a.leftpointstotal/4;
        a.roots +=a.leftpointstotal/4;
    }
}

function cpcom_lp_one_str_random (a) {
    if (a.nature==2 || a.nature==6 || a.nature==10) {
        a.foliage +=a.leftpointstotal;
    }
    else if (a.nature==3 || a.nature==7 || a.nature==14) {
        a.branches +=a.leftpointstotal;
    }
    else if (a.nature==4 || a.nature==11 || a.nature==15) {
        a.trunk +=a.leftpointstotal;
    }
    else if (a.nature==8 || a.nature==12 || a.nature==16) {
        a.roots +=a.leftpointstotal;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.75) {
            a.foliage +=a.leftpointstotal;
        }
        else if (state.random_contests>=0.50) {
            a.branches +=a.leftpointstotal;
        }
        else if (state.random_contests>=0.25) {
            a.trunk +=a.leftpointstotal;
        }
        else {
            a.roots +=a.leftpointstotal;
        }
    }
}

function cpcom_lp_one_weak_equal (a) {
    if (a.nature==14 || a.nature==15 || a.nature==16) {
        a.foliage +=a.leftpointstotal;
    }
    else if (a.nature==10 || a.nature==11 || a.nature==12) {
        a.branches +=a.leftpointstotal;
    }
    else if (a.nature==6 || a.nature==7 || a.nature==8) {
        a.trunk +=a.leftpointstotal;
    }
    else if (a.nature==2 || a.nature==3 || a.nature==4) {
        a.roots +=a.leftpointstotal;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        a.foliage +=a.leftpointstotal/4;
        a.branches +=a.leftpointstotal/4;
        a.trunk +=a.leftpointstotal/4;
        a.roots +=a.leftpointstotal/4;
    }
}

function cpcom_lp_one_weak_random (a) {
    if (a.nature==14 || a.nature==15 || a.nature==16) {
        a.foliage +=a.leftpointstotal;
    }
    else if (a.nature==10 || a.nature==11 || a.nature==12) {
        a.branches +=a.leftpointstotal;
    }
    else if (a.nature==6 || a.nature==7 || a.nature==8) {
        a.trunk +=a.leftpointstotal;
    }
    else if (a.nature==2 || a.nature==3 || a.nature==4) {
        a.roots +=a.leftpointstotal;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.75) {
            a.foliage +=a.leftpointstotal;
        }
        else if (state.random_contests>=0.50) {
            a.branches +=a.leftpointstotal;
        }
        else if (state.random_contests>=0.25) {
            a.trunk +=a.leftpointstotal;
        }
        else {
            a.roots +=a.leftpointstotal;
        }
    }
}

function cpcom_lp_onerandom(a) {
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.random_contests>=0.75) {
        a.foliage +=a.leftpointstotal;
    }
    else if (state.random_contests>=0.50) {
        a.branches +=a.leftpointstotal;
    }
    else if (state.random_contests>=0.25) {
        a.trunk +=a.leftpointstotal;
    }
    else {
        a.roots +=a.leftpointstotal;
    }
}

function cpcom_lp_two_str_equal (a) {
    if (a.nature==2 || a.nature==6 || a.nature==10) {
        a.foliage +=a.leftpointstotal/2;
    }
    else if (a.nature==3 || a.nature==7 || a.nature==14) {
        a.branches +=a.leftpointstotal/2;
    }
    else if (a.nature==4 || a.nature==11 || a.nature==15) {
        a.trunk +=a.leftpointstotal/2;
    }
    else if (a.nature==8 || a.nature==12 || a.nature==16) {
        a.roots +=a.leftpointstotal/2;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        a.foliage +=Math.floor(a.leftpointstotal/8*10)/10;
        a.branches +=Math.floor(a.leftpointstotal/8*10)/10;
        a.trunk +=Math.floor(a.leftpointstotal/8*10)/10;
        a.roots +=Math.floor(a.leftpointstotal/8*10)/10;
        if (Math.floor(a.leftpointstotal/8*10)/10<a.leftpointstotal/8) {
            state.random_contests =Math.random(); //Random number between 0 and 1
            if (state.random_contests>=0.833333) {
                a.foliage +=0.1;
                a.branches +=0.1;
            }
            else if (state.random_contests>=0.666666) {
                a.foliage +=0.1;
                a.trunk +=0.1;
            }
            else if (state.random_contests>=0.500000) {
                a.foliage +=0.1;
                a.roots +=0.1;
            }
            else if (state.random_contests>=0.333333) {
                a.branches +=0.1;
                a.trunk +=0.1;
            }
            else if (state.random_contests>=0.166666) {
                a.branches +=0.1;
                a.roots +=0.1;
            }
            else {
                a.trunk +=0.1;
                a.roots +=0.1;
            }
        }
    }
    a.foliage +=Math.floor(a.leftpointstotal/8*10)/10;
    a.branches +=Math.floor(a.leftpointstotal/8*10)/10;
    a.trunk +=Math.floor(a.leftpointstotal/8*10)/10;
    a.roots +=Math.floor(a.leftpointstotal/8*10)/10;
    if (Math.floor(a.leftpointstotal/8*10)/10<a.leftpointstotal/8) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.833333) {
            a.foliage +=0.1;
            a.branches +=0.1;
        }
        else if (state.random_contests>=0.666666) {
            a.foliage +=0.1;
            a.trunk +=0.1;
        }
        else if (state.random_contests>=0.500000) {
            a.foliage +=0.1;
            a.roots +=0.1;
        }
        else if (state.random_contests>=0.333333) {
            a.branches +=0.1;
            a.trunk +=0.1;
        }
        else if (state.random_contests>=0.166666) {
            a.branches +=0.1;
            a.roots +=0.1;
        }
        else {
            a.trunk +=0.1;
            a.roots +=0.1;
        }
    }
}

function cpcom_lp_two_str_random (a) {
    if (a.nature==2 || a.nature==6 || a.nature==10) {
        a.foliage +=a.leftpointstotal/2;
    }
    else if (a.nature==3 || a.nature==7 || a.nature==14) {
        a.branches +=a.leftpointstotal/2;
    }
    else if (a.nature==4 || a.nature==11 || a.nature==15) {
        a.trunk +=a.leftpointstotal/2;
    }
    else if (a.nature==8 || a.nature==12 || a.nature==16) {
        a.roots +=a.leftpointstotal/2;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.75) {
            a.foliage +=a.leftpointstotal/2;
        }
        else if (state.random_contests>=0.50) {
            a.branches +=a.leftpointstotal/2;
        }
        else if (state.random_contests>=0.25) {
            a.trunk +=a.leftpointstotal/2;
        }
        else {
            a.roots +=a.leftpointstotal/2;
        }
    }
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.random_contests>=0.75) {
        a.foliage +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.50) {
        a.branches +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.25) {
        a.trunk +=a.leftpointstotal/2;
    }
    else {
        a.roots +=a.leftpointstotal/2;
    }
}

function cpcom_lp_two_weak_equal (a) {
    if (a.nature==14 || a.nature==15 || a.nature==16) {
        a.foliage +=a.leftpointstotal/2;
    }
    else if (a.nature==10 || a.nature==11 || a.nature==12) {
        a.branches +=a.leftpointstotal/2;
    }
    else if (a.nature==6 || a.nature==7 || a.nature==8) {
        a.trunk +=a.leftpointstotal/2;
    }
    else if (a.nature==2 || a.nature==3 || a.nature==4) {
        a.roots +=a.leftpointstotal/2;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        a.foliage +=Math.floor(a.leftpointstotal/8*10)/10;
        a.branches +=Math.floor(a.leftpointstotal/8*10)/10;
        a.trunk +=Math.floor(a.leftpointstotal/8*10)/10;
        a.roots +=Math.floor(a.leftpointstotal/8*10)/10;
        if (Math.floor(a.leftpointstotal/8*10)/10<a.leftpointstotal/8) {
            state.random_contests =Math.random(); //Random number between 0 and 1
            if (state.random_contests>=0.833333) {
                a.foliage +=0.1;
                a.branches +=0.1;
            }
            else if (state.random_contests>=0.666666) {
                a.foliage +=0.1;
                a.trunk +=0.1;
            }
            else if (state.random_contests>=0.500000) {
                a.foliage +=0.1;
                a.roots +=0.1;
            }
            else if (state.random_contests>=0.333333) {
                a.branches +=0.1;
                a.trunk +=0.1;
            }
            else if (state.random_contests>=0.166666) {
                a.branches +=0.1;
                a.roots +=0.1;
            }
            else {
                a.trunk +=0.1;
                a.roots +=0.1;
            }
        }
    }
    a.foliage +=Math.floor(a.leftpointstotal/8*10)/10;
    a.branches +=Math.floor(a.leftpointstotal/8*10)/10;
    a.trunk +=Math.floor(a.leftpointstotal/8*10)/10;
    a.roots +=Math.floor(a.leftpointstotal/8*10)/10;
    if (Math.floor(a.leftpointstotal/8*10)/10<a.leftpointstotal/8) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.833333) {
            a.foliage +=0.1;
            a.branches +=0.1;
        }
        else if (state.random_contests>=0.666666) {
            a.foliage +=0.1;
            a.trunk +=0.1;
        }
        else if (state.random_contests>=0.500000) {
            a.foliage +=0.1;
            a.roots +=0.1;
        }
        else if (state.random_contests>=0.333333) {
            a.branches +=0.1;
            a.trunk +=0.1;
        }
        else if (state.random_contests>=0.166666) {
            a.branches +=0.1;
            a.roots +=0.1;
        }
        else {
            a.trunk +=0.1;
            a.roots +=0.1;
        }
    }
}

function cpcom_lp_two_weak_random (a) {
    if (a.nature==14 || a.nature==15 || a.nature==16) {
        a.foliage +=a.leftpointstotal/2;
    }
    else if (a.nature==10 || a.nature==11 || a.nature==12) {
        a.branches +=a.leftpointstotal/2;
    }
    else if (a.nature==6 || a.nature==7 || a.nature==8) {
        a.trunk +=a.leftpointstotal/2;
    }
    else if (a.nature==2 || a.nature==3 || a.nature==4) {
        a.roots +=a.leftpointstotal/2;
    }
    else if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
        state.random_contests =Math.random(); //Random number between 0 and 1
        if (state.random_contests>=0.75) {
            a.foliage +=a.leftpointstotal/2;
        }
        else if (state.random_contests>=0.50) {
            a.branches +=a.leftpointstotal/2;
        }
        else if (state.random_contests>=0.25) {
            a.trunk +=a.leftpointstotal/2;
        }
        else {
            a.roots +=a.leftpointstotal/2;
        }
    }
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.random_contests>=0.75) {
        a.foliage +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.50) {
        a.branches +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.25) {
        a.trunk +=a.leftpointstotal/2;
    }
    else {
        a.roots +=a.leftpointstotal/2;
    }
}

function cpcom_lp_tworandom(a) {
    state.random_contests =Math.random(); //Random number between 0 and 1
    if (state.random_contests>=0.833333) {
        a.foliage +=a.leftpointstotal/2;
        a.branches +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.666666) {
        a.foliage +=a.leftpointstotal/2;
        a.trunk +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.500000) {
        a.foliage +=a.leftpointstotal/2;
        a.roots +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.333333) {
        a.branches +=a.leftpointstotal/2;
        a.trunk +=a.leftpointstotal/2;
    }
    else if (state.random_contests>=0.166666) {
        a.branches +=a.leftpointstotal/2;
        a.roots +=a.leftpointstotal/2;
    }
    else {
        a.trunk +=a.leftpointstotal/2;
        a.roots +=a.leftpointstotal/2;
    }
}

function contests_comcalc_pot() {
    if (contests.id=="TTG01_C1") {
        state.inheritedpotentialbase = 1;
        state.inheritedpotentialfactor = 0.15;
        state.obtainedpotentialbase = 0;
        state.obtainedpotentialfactor = 0.05;
        state.obtainedpotentialpre = 0;
        contests_comcalc_pot2 (contests_bonsai_c1);
        contests_comcalc_pot2 (contests_bonsai_c2);
        contests_comcalc_pot2 (contests_bonsai_c3);
    }
    else if (contests.id=="TTG01_C2") {
        state.inheritedpotentialbase = 1;
        state.inheritedpotentialfactor = 0.15;
        state.obtainedpotentialbase = 0;
        state.obtainedpotentialfactor = 0.05;
        state.obtainedpotentialpre = 0;
        contests_comcalc_pot2 (contests_bonsai_c1);
        contests_comcalc_pot2 (contests_bonsai_c2);
        contests_comcalc_pot2 (contests_bonsai_c3);
        contests_comcalc_pot2 (contests_bonsai_c4);        
        contests_comcalc_pot2 (contests_bonsai_c5);
    }
    else if (contests.id=="TTG01_C3") {
        state.inheritedpotentialbase = 1;
        state.inheritedpotentialfactor = 0.15;
        state.obtainedpotentialbase = 0;
        state.obtainedpotentialfactor = 0.05;
        state.obtainedpotentialpre = 0;
        contests_comcalc_pot2 (contests_bonsai_c1);
        contests_comcalc_pot2 (contests_bonsai_c2);
        contests_comcalc_pot2 (contests_bonsai_c3);
        contests_comcalc_pot2 (contests_bonsai_c4);        
        contests_comcalc_pot2 (contests_bonsai_c5);       
        contests_comcalc_pot2 (contests_bonsai_c6);       
        contests_comcalc_pot2 (contests_bonsai_c7);
    }
    else if (contests.id=="Area01_C1" || contests.id=="Area01_C2" || contests.id=="Area01_C3") {
        state.inheritedpotentialbase = 1;
        state.inheritedpotentialfactor = 0.15;
        state.obtainedpotentialbase = 0;
        state.obtainedpotentialfactor = 0.05;
        state.obtainedpotentialpre = 0;
        contests_comcalc_pot2 (contests_bonsai_c1);
        contests_comcalc_pot2 (contests_bonsai_c2);
        contests_comcalc_pot2 (contests_bonsai_c3);
        contests_comcalc_pot2 (contests_bonsai_c4);        
        contests_comcalc_pot2 (contests_bonsai_c5);       
        contests_comcalc_pot2 (contests_bonsai_c6);       
        contests_comcalc_pot2 (contests_bonsai_c7);       
        contests_comcalc_pot2 (contests_bonsai_c8);       
        contests_comcalc_pot2 (contests_bonsai_c9);
    }
    
}

function contests_comcalc_pot2 (contests_bonsai_cx) {
    contests_comcalc_pot2a ();
    contests_bonsai_cx.inheritedpotentialfoliage = Math.round((state.potentialfoliage*state.inheritedpotentialbase)*100)/100;
    contests_bonsai_cx.inheritedpotentialbranches = Math.round((state.potentialbranches*state.inheritedpotentialbase)*100)/100;
    contests_bonsai_cx.inheritedpotentialtrunk = Math.round((state.potentialtrunk*state.inheritedpotentialbase)*100)/100;
    contests_bonsai_cx.inheritedpotentialroots = Math.round((state.potentialroots*state.inheritedpotentialbase)*100)/100;
    contests_comcalc_pot2a ();
    state.potentialfoliage = Math.round((state.potentialfoliage*(Math.random()*state.inheritedpotentialfactor))*100)/100;
    state.potentialbranches = Math.round((state.potentialbranches*(Math.random()*state.inheritedpotentialfactor))*100)/100;
    state.potentialtrunk = Math.round((state.potentialtrunk*(Math.random()*state.inheritedpotentialfactor))*100)/100;
    state.potentialroots = Math.round((state.potentialroots*(Math.random()*state.inheritedpotentialfactor))*100)/100;
    contests_bonsai_cx.inheritedpotentialfoliage += state.potentialfoliage;
    contests_bonsai_cx.inheritedpotentialbranches += state.potentialbranches;
    contests_bonsai_cx.inheritedpotentialtrunk += state.potentialtrunk;
    contests_bonsai_cx.inheritedpotentialroots += state.potentialroots;
    contests_comcalc_pot2b (contests_bonsai_cx);
    contests_comcalc_pot2b (contests_bonsai_cx);
    
    contests_bonsai_cx.obtainedpotentialfoliage = 0;
    contests_bonsai_cx.obtainedpotentialbranches = 0;
    contests_bonsai_cx.obtainedpotentialtrunk = 0;
    contests_bonsai_cx.obtainedpotentialroots = 0;
    if (contests.focus_attribute==0) {
        state.obtainedpotentialbase +=state.obtainedpotentialpre;
    }
    else if (contests.focus_attribute==1) {
        contests_bonsai_cx.obtainedpotentialfoliage +=state.obtainedpotentialpre;
    }
    else if (contests.focus_attribute==2) {
        contests_bonsai_cx.obtainedpotentialbranches +=state.obtainedpotentialpre;
    }
    else if (contests.focus_attribute==3) {
        contests_bonsai_cx.obtainedpotentialtrunk +=state.obtainedpotentialpre;
    }
    else if (contests.focus_attribute==4) {
        contests_bonsai_cx.obtainedpotentialroots +=state.obtainedpotentialpre;
    }
    contests_comcalc_pot2a ();
    contests_bonsai_cx.obtainedpotentialfoliage += Math.round((state.potentialfoliage*state.obtainedpotentialbase)*100)/100;
    contests_bonsai_cx.obtainedpotentialbranches += Math.round((state.potentialbranches*state.obtainedpotentialbase)*100)/100;
    contests_bonsai_cx.obtainedpotentialtrunk += Math.round((state.potentialtrunk*state.obtainedpotentialbase)*100)/100;
    contests_bonsai_cx.obtainedpotentialroots += Math.round((state.potentialroots*state.obtainedpotentialbase)*100)/100;
    contests_comcalc_pot2a ();
    state.potentialfoliage = Math.round((state.potentialfoliage*(Math.random()*state.obtainedpotentialfactor))*100)/100;
    state.potentialbranches = Math.round((state.potentialbranches*(Math.random()*state.obtainedpotentialfactor))*100)/100;
    state.potentialtrunk = Math.round((state.potentialtrunk*(Math.random()*state.obtainedpotentialfactor))*100)/100;
    state.potentialroots = Math.round((state.potentialroots*(Math.random()*state.obtainedpotentialfactor))*100)/100;
    contests_bonsai_cx.obtainedpotentialfoliage += state.potentialfoliage;
    contests_bonsai_cx.obtainedpotentialbranches += state.potentialbranches;
    contests_bonsai_cx.obtainedpotentialtrunk += state.potentialtrunk;
    contests_bonsai_cx.obtainedpotentialroots += state.potentialroots;
}

function contests_comcalc_pot2a () {
    state.potentialfoliage =Math.random(); //Random number between 0 and 1
    state.potentialbranches =Math.random();
    state.potentialtrunk =Math.random();
    state.potentialroots =Math.random();
    state.newpotentialtotal = state.potentialfoliage+state.potentialbranches+state.potentialtrunk+state.potentialroots;
    state.potentialfoliage = Math.round((state.potentialfoliage/state.newpotentialtotal)*100)/100;
    state.potentialbranches = Math.round((state.potentialbranches/state.newpotentialtotal)*100)/100;
    state.potentialtrunk = Math.round((state.potentialtrunk/state.newpotentialtotal)*100)/100;
    state.potentialroots = Math.round((state.potentialroots/state.newpotentialtotal)*100)/100;
}

function contests_comcalc_pot2b (contests_bonsai_cx) {
    if (contests_bonsai_cx.inheritedpotentialfoliage>1) {
        contests_bonsai_cx.inheritedpotentialfoliage -= 1;
        contests_bonsai_cx.inheritedpotentialbranches += contests_bonsai_cx.inheritedpotentialfoliage;
        contests_bonsai_cx.inheritedpotentialfoliage = 1;
    }
    if (contests_bonsai_cx.inheritedpotentialbranches>1) {
        contests_bonsai_cx.inheritedpotentialbranches -= 1;
        contests_bonsai_cx.inheritedpotentialtrunk += contests_bonsai_cx.inheritedpotentialbranches;
        contests_bonsai_cx.inheritedpotentialbranches = 1;
    }
    if (contests_bonsai_cx.inheritedpotentialtrunk>1) {
        contests_bonsai_cx.inheritedpotentialtrunk -= 1;
        contests_bonsai_cx.inheritedpotentialroots += contests_bonsai_cx.inheritedpotentialtrunk;
        contests_bonsai_cx.inheritedpotentialtrunk = 1;
    }
    if (contests_bonsai_cx.inheritedpotentialroots>1) {
        contests_bonsai_cx.inheritedpotentialroots -= 1;
        contests_bonsai_cx.inheritedpotentialfoliage += contests_bonsai_cx.inheritedpotentialroots;
        contests_bonsai_cx.inheritedpotentialroots = 1;
    } 
}

function contests_comcalc_bb() {
    contests_comcalc_bb2 (contests_bonsai_c1);
    contests_comcalc_bb2 (contests_bonsai_c2);
    contests_comcalc_bb2 (contests_bonsai_c3);
    contests_comcalc_bb2 (contests_bonsai_c4);        
    contests_comcalc_bb2 (contests_bonsai_c5);       
    contests_comcalc_bb2 (contests_bonsai_c6);       
    contests_comcalc_bb2 (contests_bonsai_c7);       
    contests_comcalc_bb2 (contests_bonsai_c8);       
    contests_comcalc_bb2 (contests_bonsai_c9);    
}    
    
function contests_comcalc_bb2 (contests_bonsai_cx) {
    contests_bonsai_cx.basebeauty=(Math.round((((contests_bonsai_cx.inheritedpotentialfoliage+contests_bonsai_cx.obtainedpotentialfoliage)*contests_bonsai_cx.foliage)+((contests_bonsai_cx.inheritedpotentialbranches+contests_bonsai_cx.obtainedpotentialbranches)*contests_bonsai_cx.branches)+((contests_bonsai_cx.inheritedpotentialtrunk+contests_bonsai_cx.obtainedpotentialtrunk)*contests_bonsai_cx.trunk)+((contests_bonsai_cx.inheritedpotentialroots+contests_bonsai_cx.obtainedpotentialroots)*contests_bonsai_cx.roots))*10)/10); 
}