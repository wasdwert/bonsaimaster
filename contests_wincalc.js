function contests_wincalc (own) {
    if (contests.difficulty>=1) {
        contests_wincalc_advcalc (contests_bonsai_c2, contests_bonsai_c3);
        contests_wincalc_advcalc (contests_bonsai_c1, contests_bonsai_c3);
        contests_wincalc_advcalc (contests_bonsai_c1, contests_bonsai_c2);
        contests_wincalc_advcalc (own, contests_bonsai_c3);
        contests_wincalc_advcalc (own, contests_bonsai_c2);
        contests_wincalc_advcalc (own, contests_bonsai_c1);
    }
    if (contests.difficulty>=2) {
        contests_wincalc_advcalc (contests_bonsai_c4, contests_bonsai_c5);
        contests_wincalc_advcalc (contests_bonsai_c3, contests_bonsai_c5);
        contests_wincalc_advcalc (contests_bonsai_c3, contests_bonsai_c4);
        contests_wincalc_advcalc (contests_bonsai_c2, contests_bonsai_c5);
        contests_wincalc_advcalc (contests_bonsai_c2, contests_bonsai_c4);
        contests_wincalc_advcalc (contests_bonsai_c1, contests_bonsai_c5);
        contests_wincalc_advcalc (contests_bonsai_c1, contests_bonsai_c4);
        contests_wincalc_advcalc (own, contests_bonsai_c5);
        contests_wincalc_advcalc (own, contests_bonsai_c4);
    }
    if (contests.difficulty>=3) {
        contests_wincalc_advcalc (contests_bonsai_c6, contests_bonsai_c7);
        contests_wincalc_advcalc (contests_bonsai_c5, contests_bonsai_c7);
        contests_wincalc_advcalc (contests_bonsai_c5, contests_bonsai_c6);
        contests_wincalc_advcalc (contests_bonsai_c4, contests_bonsai_c7);
        contests_wincalc_advcalc (contests_bonsai_c4, contests_bonsai_c6);
        contests_wincalc_advcalc (contests_bonsai_c3, contests_bonsai_c7);
        contests_wincalc_advcalc (contests_bonsai_c3, contests_bonsai_c6);
        contests_wincalc_advcalc (contests_bonsai_c2, contests_bonsai_c7);
        contests_wincalc_advcalc (contests_bonsai_c2, contests_bonsai_c6);
        contests_wincalc_advcalc (contests_bonsai_c1, contests_bonsai_c7);
        contests_wincalc_advcalc (contests_bonsai_c1, contests_bonsai_c6);
        contests_wincalc_advcalc (own, contests_bonsai_c7);
        contests_wincalc_advcalc (own, contests_bonsai_c6);
    }
    if (contests.difficulty==4) {
        contests_wincalc_advcalc (contests_bonsai_c8, contests_bonsai_c9);
        contests_wincalc_advcalc (contests_bonsai_c7, contests_bonsai_c9);
        contests_wincalc_advcalc (contests_bonsai_c7, contests_bonsai_c8);
        contests_wincalc_advcalc (contests_bonsai_c6, contests_bonsai_c9);
        contests_wincalc_advcalc (contests_bonsai_c6, contests_bonsai_c8);
        contests_wincalc_advcalc (contests_bonsai_c5, contests_bonsai_c9);
        contests_wincalc_advcalc (contests_bonsai_c5, contests_bonsai_c8);
        contests_wincalc_advcalc (contests_bonsai_c4, contests_bonsai_c9);
        contests_wincalc_advcalc (contests_bonsai_c4, contests_bonsai_c8);
        contests_wincalc_advcalc (contests_bonsai_c3, contests_bonsai_c9);
        contests_wincalc_advcalc (contests_bonsai_c3, contests_bonsai_c8);
        contests_wincalc_advcalc (contests_bonsai_c2, contests_bonsai_c9);
        contests_wincalc_advcalc (contests_bonsai_c2, contests_bonsai_c8);
        contests_wincalc_advcalc (contests_bonsai_c1, contests_bonsai_c9);
        contests_wincalc_advcalc (contests_bonsai_c1, contests_bonsai_c8);
        contests_wincalc_advcalc (own, contests_bonsai_c9);
        contests_wincalc_advcalc (own, contests_bonsai_c8);
        
        contests_judges_results (own, contests.judge1_preference, contests.judge1_dislike);
        own.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (own, contests.judge2_preference, contests.judge2_dislike);
        own.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (own, contests.judge3_preference, contests.judge3_dislike);
        own.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c1, contests.judge1_preference, contests.judge1_dislike);
        contests_bonsai_c1.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c1, contests.judge2_preference, contests.judge2_dislike);
        contests_bonsai_c1.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c1, contests.judge3_preference, contests.judge3_dislike);
        contests_bonsai_c1.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c2, contests.judge1_preference, contests.judge1_dislike);
        contests_bonsai_c2.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c2, contests.judge2_preference, contests.judge2_dislike);
        contests_bonsai_c2.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c2, contests.judge3_preference, contests.judge3_dislike);
        contests_bonsai_c2.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c3, contests.judge1_preference, contests.judge1_dislike);
        contests_bonsai_c3.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c3, contests.judge2_preference, contests.judge2_dislike);
        contests_bonsai_c3.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c3, contests.judge3_preference, contests.judge3_dislike);
        contests_bonsai_c3.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c4, contests.judge1_preference, contests.judge1_dislike);
        contests_bonsai_c4.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c4, contests.judge2_preference, contests.judge2_dislike);
        contests_bonsai_c4.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c4, contests.judge3_preference, contests.judge3_dislike);
        contests_bonsai_c4.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c5, contests.judge1_preference, contests.judge1_dislike);
        contests_bonsai_c5.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c5, contests.judge2_preference, contests.judge2_dislike);
        contests_bonsai_c5.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c5, contests.judge3_preference, contests.judge3_dislike);
        contests_bonsai_c5.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c6, contests.judge1_preference, contests.judge1_dislike);
        contests_bonsai_c6.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c6, contests.judge2_preference, contests.judge2_dislike);
        contests_bonsai_c6.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c6, contests.judge3_preference, contests.judge3_dislike);
        contests_bonsai_c6.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c7, contests.judge1_preference, contests.judge1_dislike);
        contests_bonsai_c7.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c7, contests.judge2_preference, contests.judge2_dislike);
        contests_bonsai_c7.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c7, contests.judge3_preference, contests.judge3_dislike);
        contests_bonsai_c7.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c8, contests.judge1_preference, contests.judge1_dislike);
        contests_bonsai_c8.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c8, contests.judge2_preference, contests.judge2_dislike);
        contests_bonsai_c8.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c8, contests.judge3_preference, contests.judge3_dislike);
        contests_bonsai_c8.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c9, contests.judge1_preference, contests.judge1_dislike);
        contests_bonsai_c9.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c9, contests.judge2_preference, contests.judge2_dislike);
        contests_bonsai_c9.score_judges+=ajudge;
        ajudge=0;
        contests_judges_results (contests_bonsai_c9, contests.judge3_preference, contests.judge3_dislike);
        contests_bonsai_c9.score_judges+=ajudge;
        ajudge=0;
        
        contests.judge1_preference="-";
        contests.judge1_dislike="-";
        contests.judge1_avatar=0;
        contests.judge2_preference="-";
        contests.judge2_dislike="-";
        contests.judge2_avatar=0;
        contests.judge3_preference="-";
        contests.judge3_dislike="-";
        contests.judge3_avatar=0;
    } 
    if (contests.id=="TTG01_C2") {
        focus.attribute_cttg01c2=0;
    }
    else if (contests.id=="TTG01_C3") { 
        focus.attribute_cttg01c3=0; 
    }
    else if (contests.id=="Area01_J1") {
        judges.a01j1_j1_ava=0;
    }
    else if (contests.id=="Area01_J2") {
        judges.a01j2_j1_ava=0;
        judges.a01j2_j2_ava=0;
    }
    else if (contests.id=="Area01_J3") {
        judges.a01j3_j1_ava=0;
        judges.a01j3_j2_ava=0;
        judges.a01j3_j3_ava=0;
    }
    else if (contests.id=="Area01_C1") {
        judges.a01c1_j1_pre="-";
        judges.a01c1_j1_dis="-";
        judges.a01c1_j1_ava=0;
        judges.a01c1_j2_pre="-";
        judges.a01c1_j2_dis="-";
        judges.a01c1_j2_ava=0;
        judges.a01c1_j3_pre="-";
        judges.a01c1_j3_dis="-";
        judges.a01c1_j3_ava=0;
        focus.ttgst_a01c1=0;
        focus.attribute_a01c1=0;
    }
    else if (contests.id=="Area01_C2") {
        judges.a01c2_j1_pre="-";
        judges.a01c2_j1_dis="-";
        judges.a01c2_j1_ava=0;
        judges.a01c2_j2_pre="-";
        judges.a01c2_j2_dis="-";
        judges.a01c2_j2_ava=0;
        judges.a01c2_j3_pre="-";
        judges.a01c2_j3_dis="-";
        judges.a01c2_j3_ava=0;
        focus.ttgst_a01c2=0;
        focus.attribute_a01c2=0;
    }
    else if (contests.id=="Area01_C3") {
        judges.a01c3_j1_pre="-";
        judges.a01c3_j1_dis="-";
        judges.a01c3_j1_ava=0;
        judges.a01c3_j2_pre="-";
        judges.a01c3_j2_dis="-";
        judges.a01c3_j2_ava=0;
        judges.a01c3_j3_pre="-";
        judges.a01c3_j3_dis="-";
        judges.a01c3_j3_ava=0;
        focus.ttgst_a01c3=0;
        focus.attribute_a01c3=0;
    }
    
    contests_contest (own);
    contests_contest (contests_bonsai_c1);
    contests_contest (contests_bonsai_c2);
    contests_contest (contests_bonsai_c3);
    contests_contest (contests_bonsai_c4);
    contests_contest (contests_bonsai_c5);
    contests_contest (contests_bonsai_c6);
    contests_contest (contests_bonsai_c7);
    contests_contest (contests_bonsai_c8);
    contests_contest (contests_bonsai_c9);
        
    own.score_competitors=Math.round((own.advantages*(own.basebeauty*0.075))*10)/10;
    contests_bonsai_c1.score_competitors=Math.round((contests_bonsai_c1.advantages*(contests_bonsai_c1.basebeauty*0.075))*10)/10;
    contests_bonsai_c2.score_competitors=Math.round((contests_bonsai_c2.advantages*(contests_bonsai_c2.basebeauty*0.075))*10)/10;
    contests_bonsai_c3.score_competitors=Math.round((contests_bonsai_c3.advantages*(contests_bonsai_c3.basebeauty*0.075))*10)/10;
    contests_bonsai_c4.score_competitors=Math.round((contests_bonsai_c4.advantages*(contests_bonsai_c4.basebeauty*0.075))*10)/10;
    contests_bonsai_c5.score_competitors=Math.round((contests_bonsai_c5.advantages*(contests_bonsai_c5.basebeauty*0.075))*10)/10;
    contests_bonsai_c6.score_competitors=Math.round((contests_bonsai_c6.advantages*(contests_bonsai_c6.basebeauty*0.075))*10)/10;
    contests_bonsai_c7.score_competitors=Math.round((contests_bonsai_c7.advantages*(contests_bonsai_c7.basebeauty*0.075))*10)/10;
    contests_bonsai_c8.score_competitors=Math.round((contests_bonsai_c8.advantages*(contests_bonsai_c8.basebeauty*0.075))*10)/10;
    contests_bonsai_c9.score_competitors=Math.round((contests_bonsai_c9.advantages*(contests_bonsai_c9.basebeauty*0.075))*10)/10;
    
    contests_look (own);
    contests_look (contests_bonsai_c1);
    contests_look (contests_bonsai_c2);
    contests_look (contests_bonsai_c3);
    contests_look (contests_bonsai_c4);
    contests_look (contests_bonsai_c5);
    contests_look (contests_bonsai_c6);
    contests_look (contests_bonsai_c7);
    contests_look (contests_bonsai_c8);
    contests_look (contests_bonsai_c9);
    
    own.score=Math.round((own.basebeauty+own.score_contest+own.score_judges+own.score_competitors+own.score_look)*10)/10;
    contests_bonsai_c1.score= Math.round((contests_bonsai_c1.basebeauty+contests_bonsai_c1.score_contest+contests_bonsai_c1.score_judges+contests_bonsai_c1.score_competitors+contests_bonsai_c1.score_look)*10)/10;
    contests_bonsai_c2.score= Math.round((contests_bonsai_c2.basebeauty+contests_bonsai_c2.score_contest+contests_bonsai_c2.score_judges+contests_bonsai_c2.score_competitors+contests_bonsai_c2.score_look)*10)/10;
    contests_bonsai_c3.score= Math.round((contests_bonsai_c3.basebeauty+contests_bonsai_c3.score_contest+contests_bonsai_c3.score_judges+contests_bonsai_c3.score_competitors+contests_bonsai_c3.score_look)*10)/10;
    contests_bonsai_c4.score= Math.round((contests_bonsai_c4.basebeauty+contests_bonsai_c4.score_contest+contests_bonsai_c4.score_judges+contests_bonsai_c4.score_competitors+contests_bonsai_c4.score_look)*10)/10;
    contests_bonsai_c5.score= Math.round((contests_bonsai_c5.basebeauty+contests_bonsai_c5.score_contest+contests_bonsai_c5.score_judges+contests_bonsai_c5.score_competitors+contests_bonsai_c5.score_look)*10)/10;
    contests_bonsai_c6.score= Math.round((contests_bonsai_c6.basebeauty+contests_bonsai_c6.score_contest+contests_bonsai_c6.score_judges+contests_bonsai_c6.score_competitors+contests_bonsai_c6.score_look)*10)/10;
    contests_bonsai_c7.score= Math.round((contests_bonsai_c7.basebeauty+contests_bonsai_c7.score_contest+contests_bonsai_c7.score_judges+contests_bonsai_c7.score_competitors+contests_bonsai_c7.score_look)*10)/10;
    contests_bonsai_c8.score= Math.round((contests_bonsai_c8.basebeauty+contests_bonsai_c8.score_contest+contests_bonsai_c8.score_judges+contests_bonsai_c8.score_competitors+contests_bonsai_c8.score_look)*10)/10;
    contests_bonsai_c9.score= Math.round((contests_bonsai_c9.basebeauty+contests_bonsai_c9.score_contest+contests_bonsai_c9.score_judges+contests_bonsai_c9.score_competitors+contests_bonsai_c9.score_look)*10)/10;
    
    if (contests.difficulty>=1) {
        $(document).ready(function(){
            $('#modal_contests_result_competition_scores3').show();
            $('#modal_contests_result_competition_scores5').hide();
            $('#modal_contests_result_competition_scores7').hide();
            $('#modal_contests_result_competition_scores9').hide();
        });
        contests_placing (own, contests_bonsai_c1);
        contests_placing (own, contests_bonsai_c2);
        contests_placing (own, contests_bonsai_c3);
        contests_placing (contests_bonsai_c1, contests_bonsai_c2);
        contests_placing (contests_bonsai_c1, contests_bonsai_c3);
        contests_placing (contests_bonsai_c2, contests_bonsai_c3);
    }
    if (contests.difficulty>=2) {
        $(document).ready(function(){
            $('#modal_contests_result_competition_scores3').show();
            $('#modal_contests_result_competition_scores5').show();
            $('#modal_contests_result_competition_scores7').hide();
            $('#modal_contests_result_competition_scores9').hide();
        });
        contests_placing (own, contests_bonsai_c4);
        contests_placing (own, contests_bonsai_c5);
        contests_placing (contests_bonsai_c1, contests_bonsai_c4);
        contests_placing (contests_bonsai_c1, contests_bonsai_c5);
        contests_placing (contests_bonsai_c2, contests_bonsai_c4);
        contests_placing (contests_bonsai_c2, contests_bonsai_c5);
        contests_placing (contests_bonsai_c3, contests_bonsai_c4);
        contests_placing (contests_bonsai_c3, contests_bonsai_c5);
        contests_placing (contests_bonsai_c4, contests_bonsai_c5);
    }
    if (contests.difficulty>=3) {
        $(document).ready(function(){
            $('#modal_contests_result_competition_scores3').show();
            $('#modal_contests_result_competition_scores5').show();
            $('#modal_contests_result_competition_scores7').show();
            $('#modal_contests_result_competition_scores9').hide();
        });
        contests_placing (own, contests_bonsai_c6);
        contests_placing (own, contests_bonsai_c7);
        contests_placing (contests_bonsai_c1, contests_bonsai_c6);
        contests_placing (contests_bonsai_c1, contests_bonsai_c7);
        contests_placing (contests_bonsai_c2, contests_bonsai_c6);
        contests_placing (contests_bonsai_c2, contests_bonsai_c7);
        contests_placing (contests_bonsai_c3, contests_bonsai_c6);
        contests_placing (contests_bonsai_c3, contests_bonsai_c7);
        contests_placing (contests_bonsai_c4, contests_bonsai_c6);
        contests_placing (contests_bonsai_c4, contests_bonsai_c7);
        contests_placing (contests_bonsai_c5, contests_bonsai_c6);
        contests_placing (contests_bonsai_c5, contests_bonsai_c7);
        contests_placing (contests_bonsai_c6, contests_bonsai_c7);
    }
    if (contests.difficulty==4) {
        $(document).ready(function(){
            $('#modal_contests_result_competition_scores3').show();
            $('#modal_contests_result_competition_scores5').show();
            $('#modal_contests_result_competition_scores7').show();
            $('#modal_contests_result_competition_scores9').show();
        });
        contests_placing (own, contests_bonsai_c8);
        contests_placing (own, contests_bonsai_c9);
        contests_placing (contests_bonsai_c1, contests_bonsai_c8);
        contests_placing (contests_bonsai_c1, contests_bonsai_c9);
        contests_placing (contests_bonsai_c2, contests_bonsai_c8);
        contests_placing (contests_bonsai_c2, contests_bonsai_c9);
        contests_placing (contests_bonsai_c3, contests_bonsai_c8);
        contests_placing (contests_bonsai_c3, contests_bonsai_c9);
        contests_placing (contests_bonsai_c4, contests_bonsai_c8);
        contests_placing (contests_bonsai_c4, contests_bonsai_c9);
        contests_placing (contests_bonsai_c5, contests_bonsai_c8);
        contests_placing (contests_bonsai_c5, contests_bonsai_c9);
        contests_placing (contests_bonsai_c6, contests_bonsai_c8);
        contests_placing (contests_bonsai_c6, contests_bonsai_c9);
        contests_placing (contests_bonsai_c7, contests_bonsai_c8);
        contests_placing (contests_bonsai_c7, contests_bonsai_c9);
        contests_placing (contests_bonsai_c8, contests_bonsai_c9);
    }
    
    if (contests.difficulty>=1) {
        contests_place (own, "You", own);
        contests_place (contests_bonsai_c1, "Competitor 1", own);
        contests_place (contests_bonsai_c2, "Competitor 2", own);
        contests_place (contests_bonsai_c3, "Competitor 3", own);
    }
    if (contests.difficulty>=2) {
        contests_place (contests_bonsai_c4, "Competitor 4", own);
        contests_place (contests_bonsai_c5, "Competitor 5", own);
    }
    if (contests.difficulty>=3) {
        contests_place (contests_bonsai_c6, "Competitor 6", own);
        contests_place (contests_bonsai_c7, "Competitor 7", own);
    }
    if (contests.difficulty>=4) {
        contests_place (contests_bonsai_c8, "Competitor 8", own);
        contests_place (contests_bonsai_c9, "Competitor 9", own);
    }
    
    tablevalues("1st");
    tablevalues("2nd");
    tablevalues("3rd");
    tablevalues("4th");
    tablevalues("5th");
    tablevalues("6th");
    tablevalues("7th");
    tablevalues("8th");
    tablevalues("9th");
    tablevalues("10th");
    
    contests.own_place=own.place;
    own.place=1;
    contests_bonsai_c1.place=1;
    contests_bonsai_c2.place=1;
    contests_bonsai_c3.place=1;
    contests_bonsai_c4.place=1;
    contests_bonsai_c5.place=1;
    contests_bonsai_c6.place=1;
    contests_bonsai_c7.place=1;
    contests_bonsai_c8.place=1;
    contests_bonsai_c9.place=1;
    
    own.score=0;
    own.score_contest=0,
    own.score_judges=0;
    own.score_competitors=0;
    own.score_look=0;
    own.advantages=0;
    contests_bonsai_c1.score=0;
    contests_bonsai_c1.score_contest=0,
    contests_bonsai_c1.score_judges=0;
    contests_bonsai_c1.score_competitors=0;
    contests_bonsai_c1.score_look=0;
    contests_bonsai_c1.advantages=0;
    contests_bonsai_c2.score=0;
    contests_bonsai_c2.score_contest=0,
    contests_bonsai_c2.score_judges=0;
    contests_bonsai_c2.score_competitors=0;
    contests_bonsai_c2.score_look=0;
    contests_bonsai_c2.advantages=0;
    contests_bonsai_c3.score=0;
    contests_bonsai_c3.score_contest=0,
    contests_bonsai_c3.score_judges=0;
    contests_bonsai_c3.score_competitors=0;
    contests_bonsai_c3.score_look=0;
    contests_bonsai_c3.advantages=0;
    contests_bonsai_c4.score=0;
    contests_bonsai_c4.score_contest=0,
    contests_bonsai_c4.score_judges=0;
    contests_bonsai_c4.score_competitors=0;
    contests_bonsai_c4.score_look=0;
    contests_bonsai_c4.advantages=0;
    contests_bonsai_c5.score=0;
    contests_bonsai_c5.score_contest=0,
    contests_bonsai_c5.score_judges=0;
    contests_bonsai_c5.score_competitors=0;
    contests_bonsai_c5.score_look=0;
    contests_bonsai_c5.advantages=0;
    contests_bonsai_c6.score=0;
    contests_bonsai_c6.score_contest=0,
    contests_bonsai_c6.score_judges=0;
    contests_bonsai_c6.score_competitors=0;
    contests_bonsai_c6.score_look=0;
    contests_bonsai_c6.advantages=0;
    contests_bonsai_c7.score=0;
    contests_bonsai_c7.score_contest=0,
    contests_bonsai_c7.score_judges=0;
    contests_bonsai_c7.score_competitors=0;
    contests_bonsai_c7.score_look=0;
    contests_bonsai_c7.advantages=0;
    contests_bonsai_c8.score=0;
    contests_bonsai_c8.score_contest=0,
    contests_bonsai_c8.score_judges=0;
    contests_bonsai_c8.score_competitors=0;
    contests_bonsai_c8.score_look=0;
    contests_bonsai_c8.advantages=0;
    contests_bonsai_c9.score=0;
    contests_bonsai_c9.score_contest=0,
    contests_bonsai_c9.score_judges=0;
    contests_bonsai_c9.score_competitors=0;
    contests_bonsai_c9.score_look=0;
    contests_bonsai_c9.advantages=0;  
    
    contests.focus_attribute=0;
    contests.attributetext=0;
    contests.focus_ttgst=0;
    contests.ttgsttext=0;
    tutorial_function ();
}

function contests_wincalc_advcalc (a, b) {
    //Styletype
    if (a.styletype==1) {
        if (b.styletype==1) {
        }
        else if (b.styletype==2) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==3) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==4) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==5) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==6) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==7) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==8) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==9) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==10) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==11) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==12) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==13) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==14) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==15) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==16) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
    }
    else if (a.styletype==2) {
        if (b.styletype==1) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==2) {
        }
        else if (b.styletype==3) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==4) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==5) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==6) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==7) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==8) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==9) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==10) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==11) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==12) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==13) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==14) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==15) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==16) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
    }
    else if (a.styletype==3) {
        if (b.styletype==1) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==2) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==3) {
        }
        else if (b.styletype==4) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==5) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==6) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==7) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==8) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==9) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==10) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==11) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==12) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==13) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==14) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==15) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==16) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
    }
    else if (a.styletype==4) {
        if (b.styletype==1) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==2) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==3) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==4) {
        }
        else if (b.styletype==5) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==6) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==7) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==8) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==9) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==10) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==11) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==12) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==13) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==14) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==15) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==16) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
    }
    else if (a.styletype==5) {
        if (b.styletype==1) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==2) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==3) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==4) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==5) {
        }
        else if (b.styletype==6) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==7) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==8) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==9) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==10) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==11) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==12) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==13) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==14) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==15) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==16) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
    }
    else if (a.styletype==6) {
        if (b.styletype==1) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==2) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==3) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==4) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==5) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==6) {
        }
        else if (b.styletype==7) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==8) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==9) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==10) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==11) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==12) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==13) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==14) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==15) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==16) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
    }
    else if (a.styletype==7) {
        if (b.styletype==1) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==2) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==3) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==4) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==5) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==6) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==7) {
        }
        else if (b.styletype==8) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==9) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==10) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==11) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==12) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==13) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==14) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.styletype==15) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.styletype==16) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
    }
    else if (a.styletype==8) {
        if (b.styletype==1) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==2) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==3) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==4) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==5) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==6) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==7) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==8) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==9) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==10) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==11) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==12) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==13) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==14) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==15) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==16) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
    }
    else if (a.styletype==9) {
        if (b.styletype==1) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==2) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==3) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==4) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==5) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==6) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==7) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==8) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==9) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==10) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==11) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==12) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==13) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==14) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==15) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==16) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
    }
    else if (a.styletype==10) {
        if (b.styletype==1) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==2) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==3) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==4) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==5) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==6) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==7) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==8) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==9) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==10) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==11) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==12) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==13) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==14) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==15) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==16) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
    }
    else if (a.styletype==11) {
        if (b.styletype==1) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==2) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==3) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==4) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==5) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==6) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==7) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==8) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==9) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==10) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==11) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==12) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==13) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==14) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==15) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==16) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
    }
    else if (a.styletype==12) {
        if (b.styletype==1) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==2) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==3) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==4) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==5) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==6) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==7) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==8) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==9) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==10) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==11) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==12) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==13) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==14) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==15) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==16) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
    }
    else if (a.styletype==13) {
        if (b.styletype==1) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==2) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==3) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==4) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==5) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==6) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==7) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==8) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==9) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==10) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==11) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==12) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==13) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==14) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==15) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==16) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
    }
    else if (a.styletype==14) {
        if (b.styletype==1) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==2) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==3) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==4) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==5) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==6) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==7) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==8) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==9) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==10) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==11) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==12) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==13) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==14) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==15) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==16) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
    }
    else if (a.styletype==15) {
        if (b.styletype==1) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==2) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==3) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==4) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==5) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==6) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==7) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==8) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==9) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==10) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==11) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==12) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==13) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==14) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==15) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==16) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
    }
    else if (a.styletype==16) {
        if (b.styletype==1) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==2) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==3) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==4) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==5) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==6) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==7) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==8) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==9) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==10) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==11) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==12) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==13) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==14) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==15) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
        else if (b.styletype==16) {
            contests.a_advantages +=0;
            contests.b_advantages +=0;
        }
    }
    
    //Treetype group
    if (a.treetypegroup==1) {
        if (b.treetypegroup==1) {
        }
        else if (b.treetypegroup==2) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==3) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==4) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==5) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==6) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==7) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==8) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==9) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
    }
    else if (a.treetypegroup==2) {
        if (b.treetypegroup==1) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==2) {
        }
        else if (b.treetypegroup==3) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==4) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==5) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==6) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==7) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==8) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==9) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
    }
    else if (a.treetypegroup==3) {
        if (b.treetypegroup==1) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==2) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==3) {
        }
        else if (b.treetypegroup==4) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==5) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==6) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==7) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==8) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==9) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
    }
    else if (a.treetypegroup==4) {
        if (b.treetypegroup==1) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==2) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==3) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==4) {
        }
        else if (b.treetypegroup==5) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==6) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==7) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==8) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==9) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
    }
    else if (a.treetypegroup==5) {
        if (b.treetypegroup==1) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==2) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==3) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==4) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==5) {
        }
        else if (b.treetypegroup==6) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==7) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==8) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==9) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
    }
    else if (a.treetypegroup==6) {
        if (b.treetypegroup==1) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==2) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==3) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==4) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==5) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==6) {
        }
        else if (b.treetypegroup==7) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==8) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==9) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
    }
    else if (a.treetypegroup==7) {
        if (b.treetypegroup==1) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==2) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==3) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==4) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==5) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==6) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==7) {
        }
        else if (b.treetypegroup==8) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==9) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
    }
    else if (a.treetypegroup==8) {
        if (b.treetypegroup==1) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==2) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==3) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==4) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==5) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==6) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==7) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==8) {
        }
        else if (b.treetypegroup==9) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
    }
    else if (a.treetypegroup==9) {
        if (b.treetypegroup==1) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==2) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==3) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==4) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==5) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==6) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==7) {
            contests.a_advantages -=1;
            contests.b_advantages +=1;
        }
        else if (b.treetypegroup==8) {
            contests.a_advantages +=1;
            contests.b_advantages -=1;
        }
        else if (b.treetypegroup==9) {
        }
    }
    
    a.advantages += contests.a_advantages;
    b.advantages += contests.b_advantages;
    contests.a_advantages=0;
    contests.b_advantages=0;
}

function contests_judges_results (a, judge_preference, judge_dislike) {
    if (judge_dislike=="Nature Cluster 5") {
        if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
            ajudge -=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_dislike=="Nature Cluster 4") {
        if (a.nature==8 || a.nature==12 || a.nature==16) {
            ajudge -=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_dislike=="Nature Cluster 3") {
        if (a.nature==4 || a.nature==11 || a.nature==15) {
            ajudge -=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_dislike=="Nature Cluster 2") {
        if (a.nature==3 || a.nature==7 || a.nature==14) {
            ajudge -=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_dislike=="Nature Cluster 1") {
        if (a.nature==2 || a.nature==6 || a.nature==10) {
            ajudge -=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_dislike=="TT Cluster 4") {
        if (a.treetypegroup==9) {
            ajudge -=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_dislike=="TT Cluster 3") {
        if (a.treetypegroup==8 || a.treetypegroup==7) {
            ajudge -=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_dislike=="TT Cluster 2") {
        if (a.treetypegroup==6 || a.treetypegroup==5) {
            ajudge -=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_dislike=="TT Cluster 1") {
        if (a.treetypegroup==4 || a.treetypegroup==3 || a.treetypegroup==2 || a.treetypegroup==1) {
            ajudge -=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_dislike=="ST Cluster 5") {
        if (a.styletype==16 || a.styletype==15) {
            ajudge -=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_dislike=="ST Cluster 4") {
        if (a.styletype==14 || a.styletype==13) {
            ajudge -=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_dislike=="ST Cluster 3") {
        if (a.styletype==12 || a.styletype==11 || a.styletype==10) {
            ajudge -=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_dislike=="ST Cluster 2") {
        if (a.styletype==9 || a.styletype==8 || a.styletype==7 || a.styletype==6) {
            ajudge -=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_dislike=="ST Cluster 1") {
        if (a.styletype==5 || a.styletype==4 || a.styletype==3 || a.styletype==2 || a.styletype==1) {
            ajudge -=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    
    if (judge_preference=="Nature Cluster 5") {
        if (a.nature==1 || a.nature==5 || a.nature==9 || a.nature==13) {
            ajudge +=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_preference=="Nature Cluster 4") {
        if (a.nature==8 || a.nature==12 || a.nature==16) {
            ajudge +=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_preference=="Nature Cluster 3") {
        if (a.nature==4 || a.nature==11 || a.nature==15) {
            ajudge +=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_preference=="Nature Cluster 2") {
        if (a.nature==3 || a.nature==7 || a.nature==14) {
            ajudge +=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_preference=="Nature Cluster 1") {
        if (a.nature==2 || a.nature==6 || a.nature==10) {
            ajudge +=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_preference=="TT Cluster 4") {
        if (a.treetypegroup==9) {
            ajudge +=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_preference=="TT Cluster 3") {
        if (a.treetypegroup==8 || a.treetypegroup==7) {
            ajudge +=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_preference=="TT Cluster 2") {
        if (a.treetypegroup==6 || a.treetypegroup==5) {
            ajudge +=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_preference=="TT Cluster 1") {
        if (a.treetypegroup==4 || a.treetypegroup==3 || a.treetypegroup==2 || a.treetypegroup==1) {
            ajudge +=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_preference=="ST Cluster 5") {
        if (a.styletype==16 || a.styletype==15) {
            ajudge +=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_preference=="ST Cluster 4") {
        if (a.styletype==14 || a.styletype==13) {
            ajudge +=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_preference=="ST Cluster 3") {
        if (a.styletype==12 || a.styletype==11 || a.styletype==10) {
            ajudge +=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_preference=="ST Cluster 2") {
        if (a.styletype==9 || a.styletype==8 || a.styletype==7 || a.styletype==6) {
            ajudge +=Math.round((a.basebeauty/4)*10)/10;
        }
    }
    else if (judge_preference=="ST Cluster 1") {
        if (a.styletype==5 || a.styletype==4 || a.styletype==3 || a.styletype==2 || a.styletype==1) {
            ajudge +=Math.round((a.basebeauty/4)*10)/10;
        }
    }
}

function contests_contest (a) {
    if (contests.focus_ttgst==1 & a.treetypegroup==1) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==2 & a.treetypegroup==2) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==3 & a.treetypegroup==3) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==4 & a.treetypegroup==4) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==5 & a.treetypegroup==5) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==6 & a.treetypegroup==6) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==7 & a.treetypegroup==7) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==8 & a.treetypegroup==8) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==9 & a.treetypegroup==9) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==10 & a.styletype==1) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==11 & a.styletype==2) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==12 & a.styletype==3) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==13 & a.styletype==4) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==14 & a.styletype==5) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==15 & a.styletype==6) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==16 & a.styletype==7) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==17 & a.styletype==8) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==18 & a.styletype==9) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==19 & a.styletype==10) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==20 & a.styletype==11) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==21 & a.styletype==12) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==22 & a.styletype==13) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==23 & a.styletype==14) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==24 & a.styletype==15) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    else if (contests.focus_ttgst==25 & a.styletype==16) {
        a.score_contest=Math.round(a.basebeauty*3)/10;
    }
    
    if (a.newpotentialfoliage==undefined) {
        a.newpotentialfoliage=0;
        a.newpotentialbranches=0;
        a.newpotentialtrunk=0;
        a.newpotentialroots=0;
    }
    if (contests.focus_attribute==1) {
        a.score_contest+=Math.round(((a.newpotentialfoliage+a.inheritedpotentialfoliage+a.obtainedpotentialfoliage)*a.foliage)*3)/10;
    }
    else if (contests.focus_attribute==2) {
        a.score_contest+=Math.round(((a.newpotentialbranches+a.inheritedpotentialbranches+a.obtainedpotentialbranches)*a.branches)*3)/10;
    }
    else if (contests.focus_attribute==3) {
        a.score_contest+=Math.round(((a.newpotentialtrunk+a.inheritedpotentialtrunk+a.obtainedpotentialtrunk)*a.trunk)*3)/10;
    }
    else if (contests.focus_attribute==4) {
        a.score_contest+=Math.round(((a.newpotentialroots+a.inheritedpotentialroots+a.obtainedpotentialroots)*a.roots)*3)/10;
    }
}  

function contests_look (a) {
    if (a.shiny==4) {
        a.score_look=Math.round(contests_bonsai_c1.basebeauty*3)/10;
    }
    else if (a.shiny==3) {
        a.score_look=Math.round(contests_bonsai_c1.basebeauty*1.5)/10;
    }
    else if (a.shiny==2) {
        a.score_look=Math.round(contests_bonsai_c1.basebeauty*0.75)/10;
    }
    else {
    }
}

function contests_placing (contestanta, contestantb) {
    if (contestanta.score==contestantb.score) {
        if (contestanta.basebeauty<contestantb.basebeauty) {
            contestanta.place+=1;
        }
        else {
            contestantb.place+=1;
        }
    }
    else if (contestanta.score<contestantb.score) {
        contestanta.place+=1;
    }
    else {
        contestantb.place+=1;
    }
}

function contests_place (contestant, name, own) {
    if (contestant.place==1) {
        document.getElementById("bonsai1st_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, contestant, "43.75", "43.75");
        document.getElementById("comp3_1st_name").innerHTML = name;
        document.getElementById("comp3_1st_score").innerHTML = contestant.score.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_1st_bb").innerHTML = contestant.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_1st_cont").innerHTML = contestant.score_contest.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_1st_judg").innerHTML = contestant.score_judges.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_1st_comp").innerHTML = contestant.score_competitors.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_1st_look").innerHTML = contestant.score_look.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("comp3_1st_rank_lvl").innerHTML = rank_lvl(contestant, "comp3_1st_rank_lvltext");
        document.getElementById("comp3_1st_rank_tq").innerHTML = rank_tq(contestant, "comp3_1st_rank_tqtext");
        document.getElementById("comp3_1st_rank_cp").innerHTML = rank_cp(contestant, "comp3_1st_rank_cptext");
        document.getElementById("comp3_1st_rank_pot").innerHTML = rank_pot(contestant, "comp3_1st_rank_pottext");
        document.getElementById("comp3_1st_rank_pres").innerHTML = rank_pres(contestant, "comp3_1st_rank_prestext");        
        document.getElementById("comp3_1st_rank_look").innerHTML = rank_look(contestant, "comp3_1st_rank_looktext");
        document.getElementById("comp3_1st_rank").innerHTML = rank_calculation(contestant);
        document.getElementById("ButtonBonsai1st_contests").style.backgroundImage= fetchbonsairanktq_small(contestant);
        
        document.getElementById("comp3_1st_lvl").innerHTML = contestant.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_1st_ttg").innerHTML = treetypegroupname[contestant.treetypegroup];
        document.getElementById("comp3_1st_st").innerText = styletypename[contestant.styletype];
        document.getElementById("comp3_1st_f").innerHTML = contestant.foliage.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_1st_f_pot").innerHTML = potentiallabel(contestant.newpotentialfoliage, contestant.inheritedpotentialfoliage, contestant.obtainedpotentialfoliage);
        document.getElementById("comp3_1st_b").innerHTML = contestant.branches.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_1st_b_pot").innerHTML = potentiallabel(contestant.newpotentialbranches, contestant.inheritedpotentialbranches, contestant.obtainedpotentialbranches);
        document.getElementById("comp3_1st_t").innerHTML = contestant.trunk.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_1st_t_pot").innerHTML = potentiallabel(contestant.newpotentialtrunk, contestant.inheritedpotentialtrunk, contestant.obtainedpotentialtrunk);
        document.getElementById("comp3_1st_r").innerHTML = contestant.roots.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_1st_r_pot").innerHTML = potentiallabel(contestant.newpotentialroots, contestant.inheritedpotentialroots, contestant.obtainedpotentialroots);
        contests_place_tables (contestant, own, "1st");
        contests_place_avatar (contestant, own, "1st");
    }
    else if (contestant.place==2) {
        document.getElementById("bonsai2nd_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, contestant, "43.75", "43.75");
        document.getElementById("comp3_2nd_name").innerHTML = name;
        document.getElementById("comp3_2nd_score").innerHTML = contestant.score.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_2nd_bb").innerHTML = contestant.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_2nd_cont").innerHTML = contestant.score_contest.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_2nd_judg").innerHTML = contestant.score_judges.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_2nd_comp").innerHTML = contestant.score_competitors.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_2nd_look").innerHTML = contestant.score_look.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("comp3_2nd_rank_lvl").innerHTML = rank_lvl(contestant, "comp3_2nd_rank_lvltext");
        document.getElementById("comp3_2nd_rank_tq").innerHTML = rank_tq(contestant, "comp3_2nd_rank_tqtext");
        document.getElementById("comp3_2nd_rank_cp").innerHTML = rank_cp(contestant, "comp3_2nd_rank_cptext");
        document.getElementById("comp3_2nd_rank_pot").innerHTML = rank_pot(contestant, "comp3_2nd_rank_pottext");
        document.getElementById("comp3_2nd_rank_pres").innerHTML = rank_pres(contestant, "comp3_2nd_rank_prestext");        
        document.getElementById("comp3_2nd_rank_look").innerHTML = rank_look(contestant, "comp3_2nd_rank_looktext");
        document.getElementById("comp3_2nd_rank").innerHTML = rank_calculation(contestant);
        document.getElementById("ButtonBonsai2nd_contests").style.backgroundImage= fetchbonsairanktq_small(contestant);
        
        document.getElementById("comp3_2nd_lvl").innerHTML = contestant.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_2nd_ttg").innerHTML = treetypegroupname[contestant.treetypegroup];
        document.getElementById("comp3_2nd_st").innerText = styletypename[contestant.styletype];
        document.getElementById("comp3_2nd_f").innerHTML = contestant.foliage.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_2nd_f_pot").innerHTML = potentiallabel(contestant.newpotentialfoliage, contestant.inheritedpotentialfoliage, contestant.obtainedpotentialfoliage);
        document.getElementById("comp3_2nd_b").innerHTML = contestant.branches.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_2nd_b_pot").innerHTML = potentiallabel(contestant.newpotentialbranches, contestant.inheritedpotentialbranches, contestant.obtainedpotentialbranches);
        document.getElementById("comp3_2nd_t").innerHTML = contestant.trunk.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_2nd_t_pot").innerHTML = potentiallabel(contestant.newpotentialtrunk, contestant.inheritedpotentialtrunk, contestant.obtainedpotentialtrunk);
        document.getElementById("comp3_2nd_r").innerHTML = contestant.roots.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_2nd_r_pot").innerHTML = potentiallabel(contestant.newpotentialroots, contestant.inheritedpotentialroots, contestant.obtainedpotentialroots);
        contests_place_tables (contestant, own, "2nd");
        contests_place_avatar (contestant, own, "2nd");
    }
    else if (contestant.place==3) {
        document.getElementById("bonsai3rd_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, contestant, "43.75", "43.75");
        document.getElementById("comp3_3rd_name").innerHTML = name;
        document.getElementById("comp3_3rd_score").innerHTML = contestant.score.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_3rd_bb").innerHTML = contestant.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_3rd_cont").innerHTML = contestant.score_contest.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_3rd_judg").innerHTML = contestant.score_judges.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_3rd_comp").innerHTML = contestant.score_competitors.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_3rd_look").innerHTML = contestant.score_look.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("comp3_3rd_rank_lvl").innerHTML = rank_lvl(contestant, "comp3_3rd_rank_lvltext");
        document.getElementById("comp3_3rd_rank_tq").innerHTML = rank_tq(contestant, "comp3_3rd_rank_tqtext");
        document.getElementById("comp3_3rd_rank_cp").innerHTML = rank_cp(contestant, "comp3_3rd_rank_cptext");
        document.getElementById("comp3_3rd_rank_pot").innerHTML = rank_pot(contestant, "comp3_3rd_rank_pottext");
        document.getElementById("comp3_3rd_rank_pres").innerHTML = rank_pres(contestant, "comp3_3rd_rank_prestext");        
        document.getElementById("comp3_3rd_rank_look").innerHTML = rank_look(contestant, "comp3_3rd_rank_looktext");
        document.getElementById("comp3_3rd_rank").innerHTML = rank_calculation(contestant);
        document.getElementById("ButtonBonsai3rd_contests").style.backgroundImage= fetchbonsairanktq_small(contestant);

        document.getElementById("comp3_3rd_lvl").innerHTML = contestant.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_3rd_ttg").innerHTML = treetypegroupname[contestant.treetypegroup];
        document.getElementById("comp3_3rd_st").innerText = styletypename[contestant.styletype];
        document.getElementById("comp3_3rd_f").innerHTML = contestant.foliage.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_3rd_f_pot").innerHTML = potentiallabel(contestant.newpotentialfoliage, contestant.inheritedpotentialfoliage, contestant.obtainedpotentialfoliage);
        document.getElementById("comp3_3rd_b").innerHTML = contestant.branches.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_3rd_b_pot").innerHTML = potentiallabel(contestant.newpotentialbranches, contestant.inheritedpotentialbranches, contestant.obtainedpotentialbranches);
        document.getElementById("comp3_3rd_t").innerHTML = contestant.trunk.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_3rd_t_pot").innerHTML = potentiallabel(contestant.newpotentialtrunk, contestant.inheritedpotentialtrunk, contestant.obtainedpotentialtrunk);
        document.getElementById("comp3_3rd_r").innerHTML = contestant.roots.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_3rd_r_pot").innerHTML = potentiallabel(contestant.newpotentialroots, contestant.inheritedpotentialroots, contestant.obtainedpotentialroots);
        contests_place_tables (contestant, own, "3rd");
        contests_place_avatar (contestant, own, "3rd");

    }
    else if (contestant.place==4) {
        document.getElementById("bonsai4th_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, contestant, "43.75", "43.75");
        document.getElementById("comp3_4th_name").innerHTML = name;
        document.getElementById("comp3_4th_score").innerHTML = contestant.score.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_4th_bb").innerHTML = contestant.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_4th_cont").innerHTML = contestant.score_contest.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_4th_judg").innerHTML = contestant.score_judges.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_4th_comp").innerHTML = contestant.score_competitors.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_4th_look").innerHTML = contestant.score_look.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("comp3_4th_rank_lvl").innerHTML = rank_lvl(contestant, "comp3_4th_rank_lvltext");
        document.getElementById("comp3_4th_rank_tq").innerHTML = rank_tq(contestant, "comp3_4th_rank_tqtext");
        document.getElementById("comp3_4th_rank_cp").innerHTML = rank_cp(contestant, "comp3_4th_rank_cptext");
        document.getElementById("comp3_4th_rank_pot").innerHTML = rank_pot(contestant, "comp3_4th_rank_pottext");
        document.getElementById("comp3_4th_rank_pres").innerHTML = rank_pres(contestant, "comp3_4th_rank_prestext");        
        document.getElementById("comp3_4th_rank_look").innerHTML = rank_look(contestant, "comp3_4th_rank_looktext");
        document.getElementById("comp3_4th_rank").innerHTML = rank_calculation(contestant);
        document.getElementById("ButtonBonsai4th_contests").style.backgroundImage= fetchbonsairanktq_small(contestant);

        document.getElementById("comp3_4th_lvl").innerHTML = contestant.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_4th_ttg").innerHTML = treetypegroupname[contestant.treetypegroup];
        document.getElementById("comp3_4th_st").innerText = styletypename[contestant.styletype];
        document.getElementById("comp3_4th_f").innerHTML = contestant.foliage.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_4th_f_pot").innerHTML = potentiallabel(contestant.newpotentialfoliage, contestant.inheritedpotentialfoliage, contestant.obtainedpotentialfoliage);
        document.getElementById("comp3_4th_b").innerHTML = contestant.branches.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_4th_b_pot").innerHTML = potentiallabel(contestant.newpotentialbranches, contestant.inheritedpotentialbranches, contestant.obtainedpotentialbranches);
        document.getElementById("comp3_4th_t").innerHTML = contestant.trunk.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_4th_t_pot").innerHTML = potentiallabel(contestant.newpotentialtrunk, contestant.inheritedpotentialtrunk, contestant.obtainedpotentialtrunk);
        document.getElementById("comp3_4th_r").innerHTML = contestant.roots.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_4th_r_pot").innerHTML = potentiallabel(contestant.newpotentialroots, contestant.inheritedpotentialroots, contestant.obtainedpotentialroots);
        contests_place_tables (contestant, own, "4th");
        contests_place_avatar (contestant, own, "4th");
    }
    else if (contestant.place==5) {
        document.getElementById("bonsai5th_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, contestant, "43.75", "43.75");
        document.getElementById("comp3_5th_name").innerHTML = name;
        document.getElementById("comp3_5th_score").innerHTML = contestant.score.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_5th_bb").innerHTML = contestant.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_5th_cont").innerHTML = contestant.score_contest.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_5th_judg").innerHTML = contestant.score_judges.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_5th_comp").innerHTML = contestant.score_competitors.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_5th_look").innerHTML = contestant.score_look.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("comp3_5th_rank_lvl").innerHTML = rank_lvl(contestant, "comp3_5th_rank_lvltext");
        document.getElementById("comp3_5th_rank_tq").innerHTML = rank_tq(contestant, "comp3_5th_rank_tqtext");
        document.getElementById("comp3_5th_rank_cp").innerHTML = rank_cp(contestant, "comp3_5th_rank_cptext");
        document.getElementById("comp3_5th_rank_pot").innerHTML = rank_pot(contestant, "comp3_5th_rank_pottext");
        document.getElementById("comp3_5th_rank_pres").innerHTML = rank_pres(contestant, "comp3_5th_rank_prestext");        
        document.getElementById("comp3_5th_rank_look").innerHTML = rank_look(contestant, "comp3_5th_rank_looktext");
        document.getElementById("comp3_5th_rank").innerHTML = rank_calculation(contestant);
        document.getElementById("ButtonBonsai5th_contests").style.backgroundImage= fetchbonsairanktq_small(contestant);

        document.getElementById("comp3_5th_lvl").innerHTML = contestant.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_5th_ttg").innerHTML = treetypegroupname[contestant.treetypegroup];
        document.getElementById("comp3_5th_st").innerText = styletypename[contestant.styletype];
        document.getElementById("comp3_5th_f").innerHTML = contestant.foliage.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_5th_f_pot").innerHTML = potentiallabel(contestant.newpotentialfoliage, contestant.inheritedpotentialfoliage, contestant.obtainedpotentialfoliage);
        document.getElementById("comp3_5th_b").innerHTML = contestant.branches.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_5th_b_pot").innerHTML = potentiallabel(contestant.newpotentialbranches, contestant.inheritedpotentialbranches, contestant.obtainedpotentialbranches);
        document.getElementById("comp3_5th_t").innerHTML = contestant.trunk.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_5th_t_pot").innerHTML = potentiallabel(contestant.newpotentialtrunk, contestant.inheritedpotentialtrunk, contestant.obtainedpotentialtrunk);
        document.getElementById("comp3_5th_r").innerHTML = contestant.roots.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_5th_r_pot").innerHTML = potentiallabel(contestant.newpotentialroots, contestant.inheritedpotentialroots, contestant.obtainedpotentialroots);
        contests_place_tables (contestant, own, "5th");
        contests_place_avatar (contestant, own, "5th");
    }
    else if (contestant.place==6) {
        document.getElementById("bonsai6th_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, contestant, "43.75", "43.75");
        document.getElementById("comp3_6th_name").innerHTML = name;
        document.getElementById("comp3_6th_score").innerHTML = contestant.score.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_6th_bb").innerHTML = contestant.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_6th_cont").innerHTML = contestant.score_contest.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_6th_judg").innerHTML = contestant.score_judges.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_6th_comp").innerHTML = contestant.score_competitors.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_6th_look").innerHTML = contestant.score_look.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("comp3_6th_rank_lvl").innerHTML = rank_lvl(contestant, "comp3_6th_rank_lvltext");
        document.getElementById("comp3_6th_rank_tq").innerHTML = rank_tq(contestant, "comp3_6th_rank_tqtext");
        document.getElementById("comp3_6th_rank_cp").innerHTML = rank_cp(contestant, "comp3_6th_rank_cptext");
        document.getElementById("comp3_6th_rank_pot").innerHTML = rank_pot(contestant, "comp3_6th_rank_pottext");
        document.getElementById("comp3_6th_rank_pres").innerHTML = rank_pres(contestant, "comp3_6th_rank_prestext");        
        document.getElementById("comp3_6th_rank_look").innerHTML = rank_look(contestant, "comp3_6th_rank_looktext");
        document.getElementById("comp3_6th_rank").innerHTML = rank_calculation(contestant);
        document.getElementById("ButtonBonsai6th_contests").style.backgroundImage= fetchbonsairanktq_small(contestant);

        document.getElementById("comp3_6th_lvl").innerHTML = contestant.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_6th_ttg").innerHTML = treetypegroupname[contestant.treetypegroup];
        document.getElementById("comp3_6th_st").innerText = styletypename[contestant.styletype];
        document.getElementById("comp3_6th_f").innerHTML = contestant.foliage.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_6th_f_pot").innerHTML = potentiallabel(contestant.newpotentialfoliage, contestant.inheritedpotentialfoliage, contestant.obtainedpotentialfoliage);
        document.getElementById("comp3_6th_b").innerHTML = contestant.branches.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_6th_b_pot").innerHTML = potentiallabel(contestant.newpotentialbranches, contestant.inheritedpotentialbranches, contestant.obtainedpotentialbranches);
        document.getElementById("comp3_6th_t").innerHTML = contestant.trunk.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_6th_t_pot").innerHTML = potentiallabel(contestant.newpotentialtrunk, contestant.inheritedpotentialtrunk, contestant.obtainedpotentialtrunk);
        document.getElementById("comp3_6th_r").innerHTML = contestant.roots.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_6th_r_pot").innerHTML = potentiallabel(contestant.newpotentialroots, contestant.inheritedpotentialroots, contestant.obtainedpotentialroots);
        contests_place_tables (contestant, own, "6th");
        contests_place_avatar (contestant, own, "6th");
    }
    else if (contestant.place==7) {
        document.getElementById("bonsai7th_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, contestant, "43.75", "43.75");
        document.getElementById("comp3_7th_name").innerHTML = name;
        document.getElementById("comp3_7th_score").innerHTML = contestant.score.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_7th_bb").innerHTML = contestant.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_7th_cont").innerHTML = contestant.score_contest.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_7th_judg").innerHTML = contestant.score_judges.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_7th_comp").innerHTML = contestant.score_competitors.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_7th_look").innerHTML = contestant.score_look.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("comp3_7th_rank_lvl").innerHTML = rank_lvl(contestant, "comp3_7th_rank_lvltext");
        document.getElementById("comp3_7th_rank_tq").innerHTML = rank_tq(contestant, "comp3_7th_rank_tqtext");
        document.getElementById("comp3_7th_rank_cp").innerHTML = rank_cp(contestant, "comp3_7th_rank_cptext");
        document.getElementById("comp3_7th_rank_pot").innerHTML = rank_pot(contestant, "comp3_7th_rank_pottext");
        document.getElementById("comp3_7th_rank_pres").innerHTML = rank_pres(contestant, "comp3_7th_rank_prestext");        
        document.getElementById("comp3_7th_rank_look").innerHTML = rank_look(contestant, "comp3_7th_rank_looktext");
        document.getElementById("comp3_7th_rank").innerHTML = rank_calculation(contestant);
        document.getElementById("ButtonBonsai7th_contests").style.backgroundImage= fetchbonsairanktq_small(contestant);

        document.getElementById("comp3_7th_lvl").innerHTML = contestant.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_7th_ttg").innerHTML = treetypegroupname[contestant.treetypegroup];
        document.getElementById("comp3_7th_st").innerText = styletypename[contestant.styletype];
        document.getElementById("comp3_7th_f").innerHTML = contestant.foliage.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_7th_f_pot").innerHTML = potentiallabel(contestant.newpotentialfoliage, contestant.inheritedpotentialfoliage, contestant.obtainedpotentialfoliage);
        document.getElementById("comp3_7th_b").innerHTML = contestant.branches.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_7th_b_pot").innerHTML = potentiallabel(contestant.newpotentialbranches, contestant.inheritedpotentialbranches, contestant.obtainedpotentialbranches);
        document.getElementById("comp3_7th_t").innerHTML = contestant.trunk.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_7th_t_pot").innerHTML = potentiallabel(contestant.newpotentialtrunk, contestant.inheritedpotentialtrunk, contestant.obtainedpotentialtrunk);
        document.getElementById("comp3_7th_r").innerHTML = contestant.roots.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_7th_r_pot").innerHTML = potentiallabel(contestant.newpotentialroots, contestant.inheritedpotentialroots, contestant.obtainedpotentialroots);
        contests_place_tables (contestant, own, "7th");
        contests_place_avatar (contestant, own, "7th");
    }
    else if (contestant.place==8) {
        document.getElementById("bonsai8th_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, contestant, "43.75", "43.75");
        document.getElementById("comp3_8th_name").innerHTML = name;
        document.getElementById("comp3_8th_score").innerHTML = contestant.score.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_8th_bb").innerHTML = contestant.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_8th_cont").innerHTML = contestant.score_contest.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_8th_judg").innerHTML = contestant.score_judges.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_8th_comp").innerHTML = contestant.score_competitors.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_8th_look").innerHTML = contestant.score_look.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("comp3_8th_rank_lvl").innerHTML = rank_lvl(contestant, "comp3_8th_rank_lvltext");
        document.getElementById("comp3_8th_rank_tq").innerHTML = rank_tq(contestant, "comp3_8th_rank_tqtext");
        document.getElementById("comp3_8th_rank_cp").innerHTML = rank_cp(contestant, "comp3_8th_rank_cptext");
        document.getElementById("comp3_8th_rank_pot").innerHTML = rank_pot(contestant, "comp3_8th_rank_pottext");
        document.getElementById("comp3_8th_rank_pres").innerHTML = rank_pres(contestant, "comp3_8th_rank_prestext");        
        document.getElementById("comp3_8th_rank_look").innerHTML = rank_look(contestant, "comp3_8th_rank_looktext");
        document.getElementById("comp3_8th_rank").innerHTML = rank_calculation(contestant);
        document.getElementById("ButtonBonsai8th_contests").style.backgroundImage= fetchbonsairanktq_small(contestant);

        document.getElementById("comp3_8th_lvl").innerHTML = contestant.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_8th_ttg").innerHTML = treetypegroupname[contestant.treetypegroup];
        document.getElementById("comp3_8th_st").innerText = styletypename[contestant.styletype];
        document.getElementById("comp3_8th_f").innerHTML = contestant.foliage.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_8th_f_pot").innerHTML = potentiallabel(contestant.newpotentialfoliage, contestant.inheritedpotentialfoliage, contestant.obtainedpotentialfoliage);
        document.getElementById("comp3_8th_b").innerHTML = contestant.branches.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_8th_b_pot").innerHTML = potentiallabel(contestant.newpotentialbranches, contestant.inheritedpotentialbranches, contestant.obtainedpotentialbranches);
        document.getElementById("comp3_8th_t").innerHTML = contestant.trunk.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_8th_t_pot").innerHTML = potentiallabel(contestant.newpotentialtrunk, contestant.inheritedpotentialtrunk, contestant.obtainedpotentialtrunk);
        document.getElementById("comp3_8th_r").innerHTML = contestant.roots.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_8th_r_pot").innerHTML = potentiallabel(contestant.newpotentialroots, contestant.inheritedpotentialroots, contestant.obtainedpotentialroots);
        contests_place_tables (contestant, own, "8th");
        contests_place_avatar (contestant, own, "8th");
    }
    else if (contestant.place==9) {
        document.getElementById("bonsai9th_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, contestant, "43.75", "43.75");
        document.getElementById("comp3_9th_name").innerHTML = name;
        document.getElementById("comp3_9th_score").innerHTML = contestant.score.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_9th_bb").innerHTML = contestant.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_9th_cont").innerHTML = contestant.score_contest.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_9th_judg").innerHTML = contestant.score_judges.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_9th_comp").innerHTML = contestant.score_competitors.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_9th_look").innerHTML = contestant.score_look.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("comp3_9th_rank_lvl").innerHTML = rank_lvl(contestant, "comp3_9th_rank_lvltext");
        document.getElementById("comp3_9th_rank_tq").innerHTML = rank_tq(contestant, "comp3_9th_rank_tqtext");
        document.getElementById("comp3_9th_rank_cp").innerHTML = rank_cp(contestant, "comp3_9th_rank_cptext");
        document.getElementById("comp3_9th_rank_pot").innerHTML = rank_pot(contestant, "comp3_9th_rank_pottext");
        document.getElementById("comp3_9th_rank_pres").innerHTML = rank_pres(contestant, "comp3_9th_rank_prestext");        
        document.getElementById("comp3_9th_rank_look").innerHTML = rank_look(contestant, "comp3_9th_rank_looktext");
        document.getElementById("comp3_9th_rank").innerHTML = rank_calculation(contestant);
        document.getElementById("ButtonBonsai9th_contests").style.backgroundImage= fetchbonsairanktq_small(contestant);

        document.getElementById("comp3_9th_lvl").innerHTML = contestant.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_9th_ttg").innerHTML = treetypegroupname[contestant.treetypegroup];
        document.getElementById("comp3_9th_st").innerText = styletypename[contestant.styletype];
        document.getElementById("comp3_9th_f").innerHTML = contestant.foliage.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_9th_f_pot").innerHTML = potentiallabel(contestant.newpotentialfoliage, contestant.inheritedpotentialfoliage, contestant.obtainedpotentialfoliage);
        document.getElementById("comp3_9th_b").innerHTML = contestant.branches.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_9th_b_pot").innerHTML = potentiallabel(contestant.newpotentialbranches, contestant.inheritedpotentialbranches, contestant.obtainedpotentialbranches);
        document.getElementById("comp3_9th_t").innerHTML = contestant.trunk.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_9th_t_pot").innerHTML = potentiallabel(contestant.newpotentialtrunk, contestant.inheritedpotentialtrunk, contestant.obtainedpotentialtrunk);
        document.getElementById("comp3_9th_r").innerHTML = contestant.roots.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_9th_r_pot").innerHTML = potentiallabel(contestant.newpotentialroots, contestant.inheritedpotentialroots, contestant.obtainedpotentialroots);
        contests_place_tables (contestant, own, "9th");
        contests_place_avatar (contestant, own, "9th");
    }
    else if (contestant.place==10) {
        document.getElementById("bonsai10th_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, contestant, "43.75", "43.75");
        document.getElementById("comp3_10th_name").innerHTML = name;
        document.getElementById("comp3_10th_score").innerHTML = contestant.score.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_10th_bb").innerHTML = contestant.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_10th_cont").innerHTML = contestant.score_contest.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_10th_judg").innerHTML = contestant.score_judges.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_10th_comp").innerHTML = contestant.score_competitors.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("comp3_10th_look").innerHTML = contestant.score_look.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("comp3_10th_rank_lvl").innerHTML = rank_lvl(contestant, "comp3_10th_rank_lvltext");
        document.getElementById("comp3_10th_rank_tq").innerHTML = rank_tq(contestant, "comp3_10th_rank_tqtext");
        document.getElementById("comp3_10th_rank_cp").innerHTML = rank_cp(contestant, "comp3_10th_rank_cptext");
        document.getElementById("comp3_10th_rank_pot").innerHTML = rank_pot(contestant, "comp3_10th_rank_pottext");
        document.getElementById("comp3_10th_rank_pres").innerHTML = rank_pres(contestant, "comp3_10th_rank_prestext");        
        document.getElementById("comp3_10th_rank_look").innerHTML = rank_look(contestant, "comp3_10th_rank_looktext");
        document.getElementById("comp3_10th_rank").innerHTML = rank_calculation(contestant);
        document.getElementById("ButtonBonsai10th_contests").style.backgroundImage= fetchbonsairanktq_small(contestant);

        document.getElementById("comp3_10th_lvl").innerHTML = contestant.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_10th_ttg").innerHTML = treetypegroupname[contestant.treetypegroup];
        document.getElementById("comp3_10th_st").innerText = styletypename[contestant.styletype];
        document.getElementById("comp3_10th_f").innerHTML = contestant.foliage.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_10th_f_pot").innerHTML = potentiallabel(contestant.newpotentialfoliage, contestant.inheritedpotentialfoliage, contestant.obtainedpotentialfoliage);
        document.getElementById("comp3_10th_b").innerHTML = contestant.branches.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_10th_b_pot").innerHTML = potentiallabel(contestant.newpotentialbranches, contestant.inheritedpotentialbranches, contestant.obtainedpotentialbranches);
        document.getElementById("comp3_10th_t").innerHTML = contestant.trunk.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_10th_t_pot").innerHTML = potentiallabel(contestant.newpotentialtrunk, contestant.inheritedpotentialtrunk, contestant.obtainedpotentialtrunk);
        document.getElementById("comp3_10th_r").innerHTML = contestant.roots.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("comp3_10th_r_pot").innerHTML = potentiallabel(contestant.newpotentialroots, contestant.inheritedpotentialroots, contestant.obtainedpotentialroots);
        contests_place_tables (contestant, own, "10th");
        contests_place_avatar (contestant, own, "10th");
    }
}

function contests_place_avatar (contestant, own, place) {
    if (contestant.name==own.name) {
        document.getElementById("comp3_"+place+"_name").innerHTML = state.yourname+'&nbsp;(You)';
        document.getElementById("comp3_"+place+"_avatar").innerHTML = '<img src="Images/avatars/avatar-'+state.youravatar+'.svg" width="30" height="30">';
    }
    else {
        document.getElementById("comp3_"+place+"_avatar").innerHTML = '<img src="Images/avatars/avatar-'+contestant.avatar+'.svg" width="30" height="30">';
        name_generator(contestant, place);
    }
}

function name_generator (contestant, place) {
    if (contestant.avatar<=7) {
        state.random_contests =Math.floor((Math.random()*100)); //Random number between 0 and 1
        document.getElementById("comp3_"+place+"_name").innerHTML = names_male[state.random_contests];
    }
    else if (contestant.avatar<=9) {
        state.random_contests =Math.floor((Math.random()*40)); //Random number between 0 and 1
        document.getElementById("comp3_"+place+"_name").innerHTML = names_nb[state.random_contests]
    }
    else {
        state.random_contests =Math.floor((Math.random()*100)); //Random number between 0 and 1
        document.getElementById("comp3_"+place+"_name").innerHTML = names_female[state.random_contests]
    }
}

function contests_place_tables (contestant, own, place) {
    if (own.treetypegroup==1) {
        if (contestant.treetypegroup==1) {
            document.getElementById("TTGtable_"+place+"_y1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_11").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_y1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_o1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_11").innerHTML = "o";
            table_ttg._y1 = "Raundo";
            table_ttg._o1 = "Raundo";
            table_ttg._11 = "o";
        }
        else if (contestant.treetypegroup==2) {
            document.getElementById("TTGtable_"+place+"_y1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_12").style.backgroundColor = "green";   
            document.getElementById("TTGtable_"+place+"_y1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_o2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_12").innerHTML = "+";
            table_ttg._y1 = "Raundo";
            table_ttg._o2 = "Erementaru";
            table_ttg._12 = "+";         
        }
        else if (contestant.treetypegroup==3) {
            document.getElementById("TTGtable_"+place+"_y1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_13").style.backgroundColor = "red";
            document.getElementById("TTGtable_"+place+"_y1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_o3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_13").innerHTML = "-";
            table_ttg._y1 = "Raundo";
            table_ttg._o3 = "Roku-men";
            table_ttg._13 = "-";            
        }
        else if (contestant.treetypegroup==4) {
            document.getElementById("TTGtable_"+place+"_y1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_14").style.backgroundColor = "red";
            document.getElementById("TTGtable_"+place+"_y1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_o4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_14").innerHTML = "-";
            table_ttg._y1 = "Raundo";
            table_ttg._o4 = "Seikatsu";
            table_ttg._14 = "-";            
        }
        else if (contestant.treetypegroup==5) {
            document.getElementById("TTGtable_"+place+"_y1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_15").style.backgroundColor = "green";
            document.getElementById("TTGtable_"+place+"_y1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_o5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_15").innerHTML = "+";
            table_ttg._y1 = "Raundo";
            table_ttg._o5 = "Sanmen";
            table_ttg._15 = "+";            
        }
        else if (contestant.treetypegroup==6) {
            document.getElementById("TTGtable_"+place+"_y1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_16").style.backgroundColor = "red";
            document.getElementById("TTGtable_"+place+"_y1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_o6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_16").innerHTML = "-";
            table_ttg._y1 = "Raundo";
            table_ttg._o6 = "Shihen";
            table_ttg._16 = "-";            
        }
        else if (contestant.treetypegroup==7) {
            document.getElementById("TTGtable_"+place+"_y1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_17").style.backgroundColor = "green";
            document.getElementById("TTGtable_"+place+"_y1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_o7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_17").innerHTML = "+";
            table_ttg._y1 = "Raundo";
            table_ttg._o7 = "Jinkō-teki";
            table_ttg._17 = "+";            
        }
        else if (contestant.treetypegroup==8) {
            document.getElementById("TTGtable_"+place+"_y1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_18").style.backgroundColor = "red";
            document.getElementById("TTGtable_"+place+"_y1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_o8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_18").innerHTML = "-";
            table_ttg._y1 = "Raundo";
            table_ttg._o8 = "Sora";
            table_ttg._18 = "-";            
        }
        else if (contestant.treetypegroup==9) {
            document.getElementById("TTGtable_"+place+"_y1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_19").style.backgroundColor = "red";
            document.getElementById("TTGtable_"+place+"_y1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_o9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_19").innerHTML = "-";
            table_ttg._y1 = "Raundo";
            table_ttg._o9 = "Shizen";
            table_ttg._19 = "-";            
        }
    }
    else if (own.treetypegroup==2) {
        if (contestant.treetypegroup==1) {
            document.getElementById("TTGtable_"+place+"_y2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_21").style.backgroundColor = "red";
            document.getElementById("TTGtable_"+place+"_y2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_o1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_21").innerHTML = "-";
            table_ttg._y2 = "Erementaru";
            table_ttg._o1 = "Raundo";
            table_ttg._21 = "-";   
        }
        else if (contestant.treetypegroup==2) {
            document.getElementById("TTGtable_"+place+"_y2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_22").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_y2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_o2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_22").innerHTML = "o";
            table_ttg._y2 = "Erementaru";
            table_ttg._o2 = "Erementaru";
            table_ttg._22 = "o";            
        }
        else if (contestant.treetypegroup==3) {
            document.getElementById("TTGtable_"+place+"_y2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_23").style.backgroundColor = "green";
            document.getElementById("TTGtable_"+place+"_y2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_o3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_23").innerHTML = "+";
            table_ttg._y2 = "Erementaru";
            table_ttg._o3 = "Roku-men";
            table_ttg._23 = "+";               
        }
        else if (contestant.treetypegroup==4) {
            document.getElementById("TTGtable_"+place+"_y2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_24").style.backgroundColor = "green"; 
            document.getElementById("TTGtable_"+place+"_y2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_o4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_24").innerHTML = "+";
            table_ttg._y2 = "Erementaru";
            table_ttg._o4 = "Seikatsu";
            table_ttg._24 = "+";              
        }
        else if (contestant.treetypegroup==5) {
            document.getElementById("TTGtable_"+place+"_y2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_25").style.backgroundColor = "red"; 
            document.getElementById("TTGtable_"+place+"_y2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_o5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_25").innerHTML = "-";
            table_ttg._y2 = "Erementaru";
            table_ttg._o5 = "Sanmen";
            table_ttg._25 = "-";              
        }
        else if (contestant.treetypegroup==6) {
            document.getElementById("TTGtable_"+place+"_y2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_26").style.backgroundColor = "red"; 
            document.getElementById("TTGtable_"+place+"_y2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_o6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_26").innerHTML = "-";
            table_ttg._y2 = "Erementaru";
            table_ttg._o6 = "Shihen";
            table_ttg._26 = "-";              
        }
        else if (contestant.treetypegroup==7) {
            document.getElementById("TTGtable_"+place+"_y2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_27").style.backgroundColor = "green"; 
            document.getElementById("TTGtable_"+place+"_y2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_o7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_27").innerHTML = "+";
            table_ttg._y2 = "Erementaru";
            table_ttg._o7 = "Jinkō-teki";
            table_ttg._27 = "+";              
        }
        else if (contestant.treetypegroup==8) {
            document.getElementById("TTGtable_"+place+"_y2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_28").style.backgroundColor = "red"; 
            document.getElementById("TTGtable_"+place+"_y2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_o8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_28").innerHTML = "-";
            table_ttg._y2 = "Erementaru";
            table_ttg._o8 = "Sora";
            table_ttg._28 = "-";              
        }
        else if (contestant.treetypegroup==9) {
            document.getElementById("TTGtable_"+place+"_y2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_29").style.backgroundColor = "red";
            document.getElementById("TTGtable_"+place+"_y2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_o9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_29").innerHTML = "-";
            table_ttg._y2 = "Erementaru";
            table_ttg._o9 = "Shizen";
            table_ttg._29 = "-";               
        }
    }
    else if (own.treetypegroup==3) {
        if (contestant.treetypegroup==1) {
            document.getElementById("TTGtable_"+place+"_y3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_31").style.backgroundColor = "green";
            document.getElementById("TTGtable_"+place+"_y3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_o1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_31").innerHTML = "+";
            table_ttg._y3 = "Roku-men";
            table_ttg._o1 = "Raundo";
            table_ttg._31 = "+";  
        }
        else if (contestant.treetypegroup==2) {
            document.getElementById("TTGtable_"+place+"_y3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_32").style.backgroundColor = "red";
            document.getElementById("TTGtable_"+place+"_y3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_o2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_32").innerHTML = "-";
            table_ttg._y3 = "Roku-men";
            table_ttg._o2 = "Erementaru";
            table_ttg._32 = "-";              
        }
        else if (contestant.treetypegroup==3) {
            document.getElementById("TTGtable_"+place+"_y3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_33").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_y3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_o3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_33").innerHTML = "o";
            table_ttg._y3 = "Roku-men";
            table_ttg._o3 = "Roku-men";
            table_ttg._33 = "o";                 
        }
        else if (contestant.treetypegroup==4) {
            document.getElementById("TTGtable_"+place+"_y3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_34").style.backgroundColor = "green"; 
            document.getElementById("TTGtable_"+place+"_y3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_o4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_34").innerHTML = "+";
            table_ttg._y3 = "Roku-men";
            table_ttg._o4 = "Seikatsu";
            table_ttg._34 = "+";             
        }
        else if (contestant.treetypegroup==5) {
            document.getElementById("TTGtable_"+place+"_y3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_35").style.backgroundColor = "red"; 
            document.getElementById("TTGtable_"+place+"_y3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_o5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_35").innerHTML = "-";
            table_ttg._y3 = "Roku-men";
            table_ttg._o5 = "Sanmen";
            table_ttg._35 = "-";             
        }
        else if (contestant.treetypegroup==6) {
            document.getElementById("TTGtable_"+place+"_y3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_36").style.backgroundColor = "green"; 
            document.getElementById("TTGtable_"+place+"_y3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_o6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_36").innerHTML = "+";
            table_ttg._y3 = "Roku-men";
            table_ttg._o6 = "Shihen";
            table_ttg._36 = "+";             
        }
        else if (contestant.treetypegroup==7) {
            document.getElementById("TTGtable_"+place+"_y3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_37").style.backgroundColor = "red";   
            document.getElementById("TTGtable_"+place+"_y3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_o7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_37").innerHTML = "-";
            table_ttg._y3 = "Roku-men";
            table_ttg._o7 = "Jinkō-teki";
            table_ttg._37 = "-";           
        }
        else if (contestant.treetypegroup==8) {
            document.getElementById("TTGtable_"+place+"_y3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_38").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_o8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_38").innerHTML = "-";
            table_ttg._y3 = "Roku-men";
            table_ttg._o8 = "Sora";
            table_ttg._38 = "-";            
        }
        else if (contestant.treetypegroup==9) {
            document.getElementById("TTGtable_"+place+"_y3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_39").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_o9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_39").innerHTML = "-";
            table_ttg._y3 = "Roku-men";
            table_ttg._o9 = "Shizen";
            table_ttg._39 = "-";            
        }
    }
    else if (own.treetypegroup==4) {
        if (contestant.treetypegroup==1) {
            document.getElementById("TTGtable_"+place+"_y4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_41").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_o1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_41").innerHTML = "+";
            table_ttg._y4 = "Seikatsu";
            table_ttg._o1 = "Raundo";
            table_ttg._41 = "+"; 
        }
        else if (contestant.treetypegroup==2) {
            document.getElementById("TTGtable_"+place+"_y4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_42").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_o2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_42").innerHTML = "-";
            table_ttg._y4 = "Seikatsu";
            table_ttg._o2 = "Erementaru";
            table_ttg._42 = "-";             
        }
        else if (contestant.treetypegroup==3) {
            document.getElementById("TTGtable_"+place+"_y4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_43").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_o3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_43").innerHTML = "-";
            table_ttg._y4 = "Seikatsu";
            table_ttg._o3 = "Roku-men";
            table_ttg._43 = "-";             
        }
        else if (contestant.treetypegroup==4) {
            document.getElementById("TTGtable_"+place+"_y4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_44").style.backgroundColor = "grey";  
            document.getElementById("TTGtable_"+place+"_y4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_o4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_44").innerHTML = "o";
            table_ttg._y4 = "Seikatsu";
            table_ttg._o4 = "Seikatsu";
            table_ttg._44 = "o";            
        }
        else if (contestant.treetypegroup==5) {
            document.getElementById("TTGtable_"+place+"_y4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_45").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_o5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_45").innerHTML = "+";
            table_ttg._y4 = "Seikatsu";
            table_ttg._o5 = "Sanmen";
            table_ttg._45 = "+";             
        }
        else if (contestant.treetypegroup==6) {
            document.getElementById("TTGtable_"+place+"_y4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_46").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_o6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_46").innerHTML = "+";
            table_ttg._y4 = "Seikatsu";
            table_ttg._o6 = "Shihen";
            table_ttg._46 = "+";             
        }
        else if (contestant.treetypegroup==7) {
            document.getElementById("TTGtable_"+place+"_y4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_47").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_o7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_47").innerHTML = "-";
            table_ttg._y4 = "Seikatsu";
            table_ttg._o7 = "Jinkō-teki";
            table_ttg._47 = "-";             
        }
        else if (contestant.treetypegroup==8) {
            document.getElementById("TTGtable_"+place+"_y4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_48").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_o8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_48").innerHTML = "-";
            table_ttg._y4 = "Seikatsu";
            table_ttg._o8 = "Sora";
            table_ttg._48 = "-";             
        }
        else if (contestant.treetypegroup==9) {
            document.getElementById("TTGtable_"+place+"_y4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_49").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_o9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_49").innerHTML = "-";
            table_ttg._y4 = "Seikatsu";
            table_ttg._o9 = "Shizen";
            table_ttg._49 = "-";             
        }
    }
    else if (own.treetypegroup==5) {
        if (contestant.treetypegroup==1) {
            document.getElementById("TTGtable_"+place+"_y5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_51").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_o1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_51").innerHTML = "-";
            table_ttg._y5 = "Sanmen";
            table_ttg._o1 = "Raundo";
            table_ttg._51 = "-";  
        }
        else if (contestant.treetypegroup==2) {
            document.getElementById("TTGtable_"+place+"_y5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_52").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_o2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_52").innerHTML = "+";
            table_ttg._y5 = "Sanmen";
            table_ttg._o2 = "Erementaru";
            table_ttg._52 = "+";              
        }
        else if (contestant.treetypegroup==3) {
            document.getElementById("TTGtable_"+place+"_y5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_53").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_o3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_53").innerHTML = "+";
            table_ttg._y5 = "Sanmen";
            table_ttg._o3 = "Roku-men";
            table_ttg._53 = "+";              
        }
        else if (contestant.treetypegroup==4) {
            document.getElementById("TTGtable_"+place+"_y5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_54").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_o4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_54").innerHTML = "-";
            table_ttg._y5 = "Sanmen";
            table_ttg._o4 = "Seikatsu";
            table_ttg._54 = "-";              
        }
        else if (contestant.treetypegroup==5) {
            document.getElementById("TTGtable_"+place+"_y5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_55").style.backgroundColor = "grey";  
            document.getElementById("TTGtable_"+place+"_y5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_o5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_55").innerHTML = "o";
            table_ttg._y5 = "Sanmen";
            table_ttg._o5 = "Sanmen";
            table_ttg._55 = "o";            
        }
        else if (contestant.treetypegroup==6) {
            document.getElementById("TTGtable_"+place+"_y5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_56").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_o6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_56").innerHTML = "+";
            table_ttg._y5 = "Sanmen";
            table_ttg._o6 = "Shihen";
            table_ttg._56 = "+";              
        }
        else if (contestant.treetypegroup==7) {
            document.getElementById("TTGtable_"+place+"_y5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_57").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_o7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_57").innerHTML = "-";
            table_ttg._y5 = "Sanmen";
            table_ttg._o7 = "Jinkō-teki";
            table_ttg._57 = "-";              
        }
        else if (contestant.treetypegroup==8) {
            document.getElementById("TTGtable_"+place+"_y5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_58").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_o8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_58").innerHTML = "-";
            table_ttg._y5 = "Sanmen";
            table_ttg._o8 = "Sora";
            table_ttg._58 = "-";              
        }
        else if (contestant.treetypegroup==9) {
            document.getElementById("TTGtable_"+place+"_y5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_59").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_o9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_59").innerHTML = "+";
            table_ttg._y5 = "Sanmen";
            table_ttg._o9 = "Shizen";
            table_ttg._59 = "+";              
        }
    }
    else if (own.treetypegroup==6) {
        if (contestant.treetypegroup==1) {
            document.getElementById("TTGtable_"+place+"_y6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_61").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_o1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_61").innerHTML = "+";
            table_ttg._y6 = "Shihen";
            table_ttg._o1 = "Raundo";
            table_ttg._61 = "+"; 
        }
        else if (contestant.treetypegroup==2) {
            document.getElementById("TTGtable_"+place+"_y6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_62").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_o2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_62").innerHTML = "+";
            table_ttg._y6 = "Shihen";
            table_ttg._o2 = "Erementaru";
            table_ttg._62 = "+";             
        }
        else if (contestant.treetypegroup==3) {
            document.getElementById("TTGtable_"+place+"_y6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_63").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_o3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_63").innerHTML = "-";
            table_ttg._y6 = "Shihen";
            table_ttg._o3 = "Roku-men";
            table_ttg._63 = "-";             
        }
        else if (contestant.treetypegroup==4) {
            document.getElementById("TTGtable_"+place+"_y6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_64").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_o4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_64").innerHTML = "-";
            table_ttg._y6 = "Shihen";
            table_ttg._o4 = "Seikatsu";
            table_ttg._64 = "-";             
        }
        else if (contestant.treetypegroup==5) {
            document.getElementById("TTGtable_"+place+"_y6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_65").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_o5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_65").innerHTML = "-";
            table_ttg._y6 = "Shihen";
            table_ttg._o5 = "Sanmen";
            table_ttg._65 = "-";             
        }
        else if (contestant.treetypegroup==6) {
            document.getElementById("TTGtable_"+place+"_y6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_66").style.backgroundColor = "grey";  
            document.getElementById("TTGtable_"+place+"_y6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_o6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_66").innerHTML = "o";
            table_ttg._y6 = "Shihen";
            table_ttg._o6 = "Shihen";
            table_ttg._66 = "o";            
        }
        else if (contestant.treetypegroup==7) {
            document.getElementById("TTGtable_"+place+"_y6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_67").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_o7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_67").innerHTML = "+";
            table_ttg._y6 = "Shihen";
            table_ttg._o7 = "Jinkō-teki";
            table_ttg._67 = "+";             
        }
        else if (contestant.treetypegroup==8) {
            document.getElementById("TTGtable_"+place+"_y6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_68").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_o8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_68").innerHTML = "+";
            table_ttg._y6 = "Shihen";
            table_ttg._o8 = "Sora";
            table_ttg._68 = "+";             
        }
        else if (contestant.treetypegroup==9) {
            document.getElementById("TTGtable_"+place+"_y6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_69").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_o9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_69").innerHTML = "-";
            table_ttg._y6 = "Shihen";
            table_ttg._o9 = "Shizen";
            table_ttg._69 = "-";             
        }
    }
    else if (own.treetypegroup==7) {
        if (contestant.treetypegroup==1) {
            document.getElementById("TTGtable_"+place+"_y7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_71").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_o1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_71").innerHTML = "o";
            table_ttg._y7 = "Jinkō-teki";
            table_ttg._o1 = "Raundo";
            table_ttg._71 = "o"; 
        }
        else if (contestant.treetypegroup==2) {
            document.getElementById("TTGtable_"+place+"_y7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_72").style.backgroundColor = "red";   
            document.getElementById("TTGtable_"+place+"_y7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_o2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_72").innerHTML = "-";
            table_ttg._y7 = "Jinkō-teki";
            table_ttg._o2 = "Erementaru";
            table_ttg._72 = "-";            
        }
        else if (contestant.treetypegroup==3) {
            document.getElementById("TTGtable_"+place+"_y7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_73").style.backgroundColor = "green";   
            document.getElementById("TTGtable_"+place+"_y7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_o3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_73").innerHTML = "+";
            table_ttg._y7 = "Jinkō-teki";
            table_ttg._o3 = "Roku-men";
            table_ttg._73 = "+";            
        }
        else if (contestant.treetypegroup==4) {
            document.getElementById("TTGtable_"+place+"_y7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_74").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_o4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_74").innerHTML = "+";
            table_ttg._y7 = "Jinkō-teki";
            table_ttg._o4 = "Seikatsu";
            table_ttg._74 = "+";             
        }
        else if (contestant.treetypegroup==5) {
            document.getElementById("TTGtable_"+place+"_y7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_75").style.backgroundColor = "green";   
            document.getElementById("TTGtable_"+place+"_y7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_o5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_75").innerHTML = "+";
            table_ttg._y7 = "Jinkō-teki";
            table_ttg._o5 = "Sanmen";
            table_ttg._75 = "+";            
        }
        else if (contestant.treetypegroup==6) {
            document.getElementById("TTGtable_"+place+"_y7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_76").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_o6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_76").innerHTML = "-";
            table_ttg._y7 = "Jinkō-teki";
            table_ttg._o6 = "Shihen";
            table_ttg._76 = "-";             
        }
        else if (contestant.treetypegroup==7) {
            document.getElementById("TTGtable_"+place+"_y7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_77").style.backgroundColor = "grey";  
            document.getElementById("TTGtable_"+place+"_y7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_o7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_77").innerHTML = "o";
            table_ttg._y7 = "Jinkō-teki";
            table_ttg._o7 = "Jinkō-teki";
            table_ttg._77 = "o";            
        }
        else if (contestant.treetypegroup==8) {
            document.getElementById("TTGtable_"+place+"_y7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_78").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_o8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_78").innerHTML = "+";
            table_ttg._y7 = "Jinkō-teki";
            table_ttg._o8 = "Sora";
            table_ttg._78 = "+";             
        }
        else if (contestant.treetypegroup==9) {
            document.getElementById("TTGtable_"+place+"_y7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_79").style.backgroundColor = "green";   
            document.getElementById("TTGtable_"+place+"_y7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_o9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_79").innerHTML = "+";
            table_ttg._y7 = "Jinkō-teki";
            table_ttg._o9 = "Shizen";
            table_ttg._79 = "+";            
        }
    }
    else if (own.treetypegroup==8) {
        if (contestant.treetypegroup==1) {
            document.getElementById("TTGtable_"+place+"_y8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_81").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_o1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_81").innerHTML = "+";
            table_ttg._y8 = "Sora";
            table_ttg._o1 = "Raundo";
            table_ttg._81 = "+";
        }
        else if (contestant.treetypegroup==2) {
            document.getElementById("TTGtable_"+place+"_y8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_82").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_o2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_82").innerHTML = "+";
            table_ttg._y8 = "Sora";
            table_ttg._o2 = "Erementaru";
            table_ttg._82 = "+";            
        }
        else if (contestant.treetypegroup==3) {
            document.getElementById("TTGtable_"+place+"_y8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_83").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_o3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_83").innerHTML = "+";
            table_ttg._y8 = "Sora";
            table_ttg._o3 = "Roku-men";
            table_ttg._83 = "+";            
        }
        else if (contestant.treetypegroup==4) {
            document.getElementById("TTGtable_"+place+"_y8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_84").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_o4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_84").innerHTML = "+";
            table_ttg._y8 = "Sora";
            table_ttg._o4 = "Seikatsu";
            table_ttg._84 = "+";            
        }
        else if (contestant.treetypegroup==5) {
            document.getElementById("TTGtable_"+place+"_y8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_85").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_o5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_85").innerHTML = "+";
            table_ttg._y8 = "Sora";
            table_ttg._o5 = "Sanmen";
            table_ttg._85 = "+";            
        }
        else if (contestant.treetypegroup==6) {
            document.getElementById("TTGtable_"+place+"_y8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_86").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_o6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_86").innerHTML = "-";
            table_ttg._y8 = "Sora";
            table_ttg._o6 = "Shihen";
            table_ttg._86 = "-";            
        }
        else if (contestant.treetypegroup==7) {
            document.getElementById("TTGtable_"+place+"_y8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_87").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_o7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_87").innerHTML = "-";
            table_ttg._y8 = "Sora";
            table_ttg._o7 = "Jinkō-teki";
            table_ttg._87 = "-";            
        }
        else if (contestant.treetypegroup==8) {
            document.getElementById("TTGtable_"+place+"_y8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_88").style.backgroundColor = "grey";  
            document.getElementById("TTGtable_"+place+"_y8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_o8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_88").innerHTML = "o";
            table_ttg._y8 = "Sora";
            table_ttg._o8 = "Sora";
            table_ttg._88 = "o";            
        }
        else if (contestant.treetypegroup==9) {
            document.getElementById("TTGtable_"+place+"_y8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_89").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_o9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_89").innerHTML = "-";
            table_ttg._y8 = "Sora";
            table_ttg._o9 = "Shizen";
            table_ttg._89 = "-";            
        }
    }
    else if (own.treetypegroup==9) {
        if (contestant.treetypegroup==1) {
            document.getElementById("TTGtable_"+place+"_y9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o1").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_91").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_o1").innerHTML = "Raundo";
            document.getElementById("TTGtable_"+place+"_91").innerHTML = "+";
            table_ttg._y9 = "Shizen";
            table_ttg._o1 = "Raundo";
            table_ttg._91 = "+";   
        }
        else if (contestant.treetypegroup==2) {
            document.getElementById("TTGtable_"+place+"_y9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o2").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_92").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_o2").innerHTML = "Erementaru";
            document.getElementById("TTGtable_"+place+"_92").innerHTML = "+";
            table_ttg._y9 = "Shizen";
            table_ttg._o2 = "Erementaru";
            table_ttg._92 = "+";               
        }
        else if (contestant.treetypegroup==3) {
            document.getElementById("TTGtable_"+place+"_y9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o3").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_93").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_o3").innerHTML = "Roku-men";
            document.getElementById("TTGtable_"+place+"_93").innerHTML = "+";
            table_ttg._y9 = "Shizen";
            table_ttg._o3 = "Roku-men";
            table_ttg._93 = "+";              
        }
        else if (contestant.treetypegroup==4) {
            document.getElementById("TTGtable_"+place+"_y9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o4").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_94").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_o4").innerHTML = "Seikatsu";
            document.getElementById("TTGtable_"+place+"_94").innerHTML = "+";
            table_ttg._y9 = "Shizen";
            table_ttg._o4 = "Seikatsu";
            table_ttg._94 = "+";               
        }
        else if (contestant.treetypegroup==5) {
            document.getElementById("TTGtable_"+place+"_y9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o5").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_95").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_o5").innerHTML = "Sanmen";
            document.getElementById("TTGtable_"+place+"_95").innerHTML = "-";
            table_ttg._y9 = "Shizen";
            table_ttg._o5 = "Sanmen";
            table_ttg._95 = "-";               
        }
        else if (contestant.treetypegroup==6) {
            document.getElementById("TTGtable_"+place+"_y9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o6").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_96").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_o6").innerHTML = "Shihen";
            document.getElementById("TTGtable_"+place+"_96").innerHTML = "+";
            table_ttg._y9 = "Shizen";
            table_ttg._o6 = "Shihen";
            table_ttg._96 = "+";               
        }
        else if (contestant.treetypegroup==7) {
            document.getElementById("TTGtable_"+place+"_y9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o7").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_97").style.backgroundColor = "red";  
            document.getElementById("TTGtable_"+place+"_y9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_o7").innerHTML = "Jinkō-teki";
            document.getElementById("TTGtable_"+place+"_97").innerHTML = "-";
            table_ttg._y9 = "Shizen";
            table_ttg._o7 = "Jinkō-teki";
            table_ttg._97 = "-";               
        }
        else if (contestant.treetypegroup==8) {
            document.getElementById("TTGtable_"+place+"_y9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o8").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_98").style.backgroundColor = "green";  
            document.getElementById("TTGtable_"+place+"_y9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_o8").innerHTML = "Sora";
            document.getElementById("TTGtable_"+place+"_98").innerHTML = "+";
            table_ttg._y9 = "Shizen";
            table_ttg._o8 = "Sora";
            table_ttg._98 = "+";               
        }
        else if (contestant.treetypegroup==9) {
            document.getElementById("TTGtable_"+place+"_y9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_o9").style.backgroundColor = "grey";
            document.getElementById("TTGtable_"+place+"_99").style.backgroundColor = "grey";  
            document.getElementById("TTGtable_"+place+"_y9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_o9").innerHTML = "Shizen";
            document.getElementById("TTGtable_"+place+"_99").innerHTML = "o";
            table_ttg._y9 = "Shizen";
            table_ttg._o9 = "Shizen";
            table_ttg._99 = "o";            
        }
    }
    if (own.styletype==1) {
        if (skills.treestyles6==1) {
            document.getElementById("table_"+place+"_st").style.marginLeft = "-204.855px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0101").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_0101").innerHTML = "o";
            table_st._y01 = "Chokan";
            table_st._o01 = "Chokan";
            table_st._0101 = "o";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0102").style.backgroundColor = "green";   
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_0102").innerHTML = "+";
            table_st._y01 = "Chokan";
            table_st._o02 = "Moyogi";
            table_st._0102 = "+";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0103").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_0103").innerHTML = "-";
            table_st._y01 = "Chokan";
            table_st._o03 = "Shakan";
            table_st._0103 = "-";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0104").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_0104").innerHTML = "-";
            table_st._y01 = "Chokan";
            table_st._o04 = "Han-Kengai";
            table_st._0104 = "-";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0105").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_0105").innerHTML = "+";
            table_st._y01 = "Chokan";
            table_st._o05 = "Sokan";
            table_st._0105 = "+";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0106").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_0106").innerHTML = "-";
            table_st._y01 = "Chokan";
            table_st._o06 = "Kengai";
            table_st._0106 = "-";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0107").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_0107").innerHTML = "+";
            table_st._y01 = "Chokan";
            table_st._o07 = "Kabudachi";
            table_st._0107 = "+";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0108").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_0108").innerHTML = "+";
            table_st._y01 = "Chokan";
            table_st._o08 = "Hokidachi";
            table_st._0108 = "+";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0109").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_0109").innerHTML = "+";
            table_st._y01 = "Chokan";
            table_st._o09 = "Bunjin";
            table_st._0109 = "+";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0110").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_0110").innerHTML = "-";
            table_st._y01 = "Chokan";
            table_st._o10 = "Fukinagashi";
            table_st._0110 = "-";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0111").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_0111").innerHTML = "-";
            table_st._y01 = "Chokan";
            table_st._o11 = "Ikadabuki";
            table_st._0111 = "-";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0112").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_0112").innerHTML = "+";
            table_st._y01 = "Chokan";
            table_st._o12 = "Neagari";
            table_st._0112 = "+";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0113").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_0113").innerHTML = "-";
            table_st._y01 = "Chokan";
            table_st._o13 = "Sharimiki";
            table_st._0113 = "-";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0114").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_0114").innerHTML = "-";
            table_st._y01 = "Chokan";
            table_st._o14 = "Ishizuki";
            table_st._0114 = "-";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0115").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_0115").innerHTML = "-";
            table_st._y01 = "Chokan";
            table_st._o15 = "Sabamiki";
            table_st._0115 = "-";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0116").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_0116").innerHTML = "+";
            table_st._y01 = "Chokan";
            table_st._o16 = "Seki-joju";
            table_st._0116 = "+";            
        }
    }
    else if (own.styletype==2) {
        if (skills.treestyles6==1) {
        document.getElementById("table_"+place+"_st").style.marginLeft = "-203.18px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0201").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_0201").innerHTML = "-";
            table_st._y02 = "Moyogi";
            table_st._o01 = "Chokan";
            table_st._0201 = "-";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0202").style.backgroundColor = "grey";   
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_0202").innerHTML = "o";
            table_st._y02 = "Moyogi";
            table_st._o02 = "Moyogi";
            table_st._0202 = "o";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0203").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_0203").innerHTML = "+";
            table_st._y02 = "Moyogi";
            table_st._o03 = "Shakan";
            table_st._0203 = "+";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0204").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_0204").innerHTML = "-";
            table_st._y02 = "Moyogi";
            table_st._o04 = "Han-Kengai";
            table_st._0204 = "-";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0205").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_0205").innerHTML = "-";
            table_st._y02 = "Moyogi";
            table_st._o05 = "Sokan";
            table_st._0205 = "-";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0206").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_0206").innerHTML = "+";
            table_st._y02 = "Moyogi";
            table_st._o06 = "Kengai";
            table_st._0206 = "+";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0207").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_0207").innerHTML = "+";
            table_st._y02 = "Moyogi";
            table_st._o07 = "Kabudachi";
            table_st._0207 = "+";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0208").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_0208").innerHTML = "-";
            table_st._y02 = "Moyogi";
            table_st._o08 = "Hokidachi";
            table_st._0208 = "-";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0209").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_0209").innerHTML = "-";
            table_st._y02 = "Moyogi";
            table_st._o09 = "Bunjin";
            table_st._0209 = "-";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0210").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_0210").innerHTML = "+";
            table_st._y02 = "Moyogi";
            table_st._o10 = "Fukinagashi";
            table_st._0210 = "+";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0211").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_0211").innerHTML = "+";
            table_st._y02 = "Moyogi";
            table_st._o11 = "Ikadabuki";
            table_st._0211 = "+";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0212").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_0212").innerHTML = "-";
            table_st._y02 = "Moyogi";
            table_st._o12 = "Neagari";
            table_st._0212 = "-";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0213").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_0213").innerHTML = "-";
            table_st._y02 = "Moyogi";
            table_st._o13 = "Sharimiki";
            table_st._0213 = "-";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0214").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_0214").innerHTML = "-";
            table_st._y02 = "Moyogi";
            table_st._o14 = "Ishizuki";
            table_st._0214 = "-";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0215").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_0215").innerHTML = "+";
            table_st._y02 = "Moyogi";
            table_st._o15 = "Sabamiki";
            table_st._0215 = "+";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0216").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_0216").innerHTML = "-";
            table_st._y02 = "Moyogi";
            table_st._o16 = "Seki-joju";
            table_st._0216 = "-";            
        }
    }
    else if (own.styletype==3) {
        if (skills.treestyles6==1) {
            document.getElementById("table_"+place+"_st").style.marginLeft = "-204.44px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0301").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_0301").innerHTML = "+";
            table_st._y03 = "Shakan";
            table_st._o01 = "Chokan";
            table_st._0301 = "+";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0302").style.backgroundColor = "red";   
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_0302").innerHTML = "-";
            table_st._y03 = "Shakan";
            table_st._o02 = "Moyogi";
            table_st._0302 = "-";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0303").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_0303").innerHTML = "o";
            table_st._y03 = "Shakan";
            table_st._o03 = "Shakan";
            table_st._0303 = "o";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0304").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_0304").innerHTML = "+";
            table_st._y03 = "Shakan";
            table_st._o04 = "Han-Kengai";
            table_st._0304 = "+";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0305").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_0305").innerHTML = "-";
            table_st._y03 = "Shakan";
            table_st._o05 = "Sokan";
            table_st._0305 = "-";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0306").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_0306").innerHTML = "+";
            table_st._y03 = "Shakan";
            table_st._o06 = "Kengai";
            table_st._0306 = "+";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0307").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_0307").innerHTML = "-";
            table_st._y03 = "Shakan";
            table_st._o07 = "Kabudachi";
            table_st._0307 = "-";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0308").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_0308").innerHTML = "+";
            table_st._y03 = "Shakan";
            table_st._o08 = "Hokidachi";
            table_st._0308 = "+";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0309").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_0309").innerHTML = "-";
            table_st._y03 = "Shakan";
            table_st._o09 = "Bunjin";
            table_st._0309 = "-";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0310").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_0310").innerHTML = "-";
            table_st._y03 = "Shakan";
            table_st._o10 = "Fukinagashi";
            table_st._0310 = "-";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0311").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_0311").innerHTML = "-";
            table_st._y03 = "Shakan";
            table_st._o11 = "Ikadabuki";
            table_st._0311 = "-";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0312").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_0312").innerHTML = "+";
            table_st._y03 = "Shakan";
            table_st._o12 = "Neagari";
            table_st._0312 = "+";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0313").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_0313").innerHTML = "-";
            table_st._y03 = "Shakan";
            table_st._o13 = "Sharimiki";
            table_st._0313 = "-";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0314").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_0314").innerHTML = "-";
            table_st._y03 = "Shakan";
            table_st._o14 = "Ishizuki";
            table_st._0314 = "-";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0315").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_0315").innerHTML = "-";
            table_st._y03 = "Shakan";
            table_st._o15 = "Sabamiki";
            table_st._0315 = "-";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0316").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_0316").innerHTML = "+";
            table_st._y03 = "Shakan";
            table_st._o16 = "Seki-joju";
            table_st._0316 = "+";            
        }
    }  
    else if (own.styletype==4) {
        if (skills.treestyles6==1) {
            document.getElementById("table_"+place+"_st").style.marginLeft = "-218.61px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0401").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_0401").innerHTML = "+";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o01 = "Chokan";
            table_ttg._0401 = "+";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0402").style.backgroundColor = "green";   
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_0402").innerHTML = "+";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o02 = "Moyogi";
            table_ttg._0402 = "+";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0403").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_0403").innerHTML = "-";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o03 = "Shakan";
            table_ttg._0403 = "-";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0404").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_0404").innerHTML = "o";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o04 = "Han-Kengai";
            table_ttg._0404 = "o";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0405").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_0405").innerHTML = "-";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o05 = "Sokan";
            table_ttg._0405 = "-";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0406").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_0406").innerHTML = "-";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o06 = "Kengai";
            table_ttg._0406 = "-";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0407").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_0407").innerHTML = "+";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o07 = "Kabudachi";
            table_ttg._0407 = "+";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0408").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_0408").innerHTML = "+";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o08 = "Hokidachi";
            table_ttg._0408 = "+";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0409").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_0409").innerHTML = "-";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o09 = "Bunjin";
            table_ttg._0409 = "-";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0410").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_0410").innerHTML = "-";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o10 = "Fukinagashi";
            table_ttg._0410 = "-";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0411").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_0411").innerHTML = "+";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o11 = "Ikadabuki";
            table_ttg._0411 = "+";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0412").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_0412").innerHTML = "-";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o12 = "Neagari";
            table_ttg._0412 = "-";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0413").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_0413").innerHTML = "+";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o13 = "Sharimiki";
            table_ttg._0413 = "+";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0414").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_0414").innerHTML = "-";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o14 = "Ishizuki";
            table_ttg._0414 = "-";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0415").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_0415").innerHTML = "-";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o15 = "Sabamiki";
            table_ttg._0415 = "-";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0416").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_0416").innerHTML = "-";
            table_ttg._y04 = "Han-Kengai";
            table_ttg._o16 = "Seki-joju";
            table_ttg._0416 = "-";            
        }
    }  
    else if (own.styletype==5) {
        if (skills.treestyles6==1) {
            document.getElementById("table_"+place+"_st").style.marginLeft = "-200.27px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0501").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_0501").innerHTML = "-";
            table_ttg._y05 = "Sokan";
            table_ttg._o01 = "Chokan";
            table_ttg._0501 = "-";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0502").style.backgroundColor = "green";   
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_0502").innerHTML = "+";
            table_ttg._y05 = "Sokan";
            table_ttg._o02 = "Moyogi";
            table_ttg._0502 = "+";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0503").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_0503").innerHTML = "+";
            table_ttg._y05 = "Sokan";
            table_ttg._o03 = "Shakan";
            table_ttg._0503 = "+";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0504").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_0504").innerHTML = "+";
            table_ttg._y05 = "Sokan";
            table_ttg._o04 = "Han-Kengai";
            table_ttg._0504 = "+";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0505").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_0505").innerHTML = "o";
            table_ttg._y05 = "Sokan";
            table_ttg._o05 = "Sokan";
            table_ttg._0505 = "o";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0506").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_0506").innerHTML = "-";
            table_ttg._y05 = "Sokan";
            table_ttg._o06 = "Kengai";
            table_ttg._0506 = "-";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0507").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_0507").innerHTML = "-";
            table_ttg._y05 = "Sokan";
            table_ttg._o07 = "Kabudachi";
            table_ttg._0507 = "-";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0508").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_0508").innerHTML = "-";
            table_ttg._y05 = "Sokan";
            table_ttg._o08 = "Hokidachi";
            table_ttg._0508 = "-";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0509").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_0509").innerHTML = "-";
            table_ttg._y05 = "Sokan";
            table_ttg._o09 = "Bunjin";
            table_ttg._0509 = "-";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0510").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_0510").innerHTML = "+";
            table_ttg._y05 = "Sokan";
            table_ttg._o10 = "Fukinagashi";
            table_ttg._0510 = "+";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0511").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_0511").innerHTML = "-";
            table_ttg._y05 = "Sokan";
            table_ttg._o11 = "Ikadabuki";
            table_ttg._0511 = "-";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0512").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_0512").innerHTML = "+";
            table_ttg._y05 = "Sokan";
            table_ttg._o12 = "Neagari";
            table_ttg._0512 = "+";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0513").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_0513").innerHTML = "-";
            table_ttg._y05 = "Sokan";
            table_ttg._o13 = "Sharimiki";
            table_ttg._0513 = "-";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0514").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_0514").innerHTML = "+";
            table_ttg._y05 = "Sokan";
            table_ttg._o14 = "Ishizuki";
            table_ttg._0514 = "+";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0515").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_0515").innerHTML = "-";
            table_ttg._y05 = "Sokan";
            table_ttg._o15 = "Sabamiki";
            table_ttg._0515 = "-";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0516").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_0516").innerHTML = "-";
            table_ttg._y05 = "Sokan";
            table_ttg._o16 = "Seki-joju";
            table_ttg._0516 = "-";            
        }
    }  
    else if (own.styletype==6) {
        if (skills.treestyles6==1) {
            document.getElementById("table_"+place+"_st").style.marginLeft = "-202.355px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0601").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_0601").innerHTML = "+";
            table_ttg._y06 = "Kengai";
            table_ttg._o01 = "Chokan";
            table_ttg._0601 = "+";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0602").style.backgroundColor = "red";   
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_0602").innerHTML = "-";
            table_ttg._y06 = "Kengai";
            table_ttg._o02 = "Moyogi";
            table_ttg._0602 = "-";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0603").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_0603").innerHTML = "-";
            table_ttg._y06 = "Kengai";
            table_ttg._o03 = "Shakan";
            table_ttg._0603 = "-";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0604").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_0604").innerHTML = "+";
            table_ttg._y06 = "Kengai";
            table_ttg._o04 = "Han-Kengai";
            table_ttg._0604 = "+";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0605").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_0605").innerHTML = "+";
            table_ttg._y06 = "Kengai";
            table_ttg._o05 = "Sokan";
            table_ttg._0605 = "+";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0606").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_0606").innerHTML = "o";
            table_ttg._y06 = "Kengai";
            table_ttg._o06 = "Kengai";
            table_ttg._0606 = "o";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0607").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_0607").innerHTML = "-";
            table_ttg._y06 = "Kengai";
            table_ttg._o07 = "Kabudachi";
            table_ttg._0607 = "-";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0608").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_0608").innerHTML = "+";
            table_ttg._y06 = "Kengai";
            table_ttg._o08 = "Hokidachi";
            table_ttg._0608 = "+";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0609").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_0609").innerHTML = "+";
            table_ttg._y06 = "Kengai";
            table_ttg._o09 = "Bunjin";
            table_ttg._0609 = "+";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0610").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_0610").innerHTML = "-";
            table_ttg._y06 = "Kengai";
            table_ttg._o10 = "Fukinagashi";
            table_ttg._0610 = "-";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0611").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_0611").innerHTML = "-";
            table_ttg._y06 = "Kengai";
            table_ttg._o11 = "Ikadabuki";
            table_ttg._0611 = "-";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0612").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_0612").innerHTML = "-";
            table_ttg._y06 = "Kengai";
            table_ttg._o12 = "Neagari";
            table_ttg._0612 = "-";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0613").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_0613").innerHTML = "+";
            table_ttg._y06 = "Kengai";
            table_ttg._o13 = "Sharimiki";
            table_ttg._0613 = "+";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0614").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_0614").innerHTML = "-";
            table_ttg._y06 = "Kengai";
            table_ttg._o14 = "Ishizuki";
            table_ttg._0614 = "-";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0615").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_0615").innerHTML = "+";
            table_ttg._y06 = "Kengai";
            table_ttg._o15 = "Sabamiki";
            table_ttg._0615 = "+";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0616").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_0616").innerHTML = "-";
            table_ttg._y06 = "Kengai";
            table_ttg._o16 = "Seki-joju";
            table_ttg._0616 = "-";            
        }
    }   
    else if (own.styletype==7) {
        if (skills.treestyles6==1) {
            document.getElementById("table_"+place+"_st").style.marginLeft = "214.45px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0701").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_0701").innerHTML = "-";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o01 = "Chokan";
            table_ttg._0701 = "-";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0702").style.backgroundColor = "red";   
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_0702").innerHTML = "-";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o02 = "Moyogi";
            table_ttg._0702 = "-";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0703").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_0703").innerHTML = "+";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o03 = "Shakan";
            table_ttg._0703 = "+";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0704").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_0704").innerHTML = "-";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o04 = "Han-Kengai";
            table_ttg._0704 = "-";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0705").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_0705").innerHTML = "+";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o05 = "Sokan";
            table_ttg._0705 = "+";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0706").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_0706").innerHTML = "+";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o06 = "Kengai";
            table_ttg._0706 = "+";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0707").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_0707").innerHTML = "o";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o07 = "Kabudachi";
            table_ttg._0707 = "o";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0708").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_0708").innerHTML = "-";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o08 = "Hokidachi";
            table_ttg._0708 = "-";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0709").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_0709").innerHTML = "+";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o09 = "Bunjin";
            table_ttg._0709 = "+";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0710").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_0710").innerHTML = "+";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o10 = "Fukinagashi";
            table_ttg._0710 = "+";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0711").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_0711").innerHTML = "-";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o11 = "Ikadabuki";
            table_ttg._0711 = "-";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0712").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_0712").innerHTML = "-";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o12 = "Neagari";
            table_ttg._0712 = "-";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0713").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_0713").innerHTML = "-";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o13 = "Sharimiki";
            table_ttg._0713 = "-";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0714").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_0714").innerHTML = "+";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o14 = "Ishizuki";
            table_ttg._0714 = "+";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0715").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_0715").innerHTML = "-";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o15 = "Sabamiki";
            table_ttg._0715 = "-";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0716").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_0716").innerHTML = "+";
            table_ttg._y07 = "Kabudachi";
            table_ttg._o16 = "Seki-joju";
            table_ttg._0716 = "+";            
        }
    }   
    else if (own.styletype==8) {
        if (skills.treestyles6==1) {
            document.getElementById("table_"+place+"_st").style.marginLeft = "-211.94px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0801").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_0801").innerHTML = "+";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o01 = "Chokan";
            table_ttg._0801 = "+";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0802").style.backgroundColor = "green";   
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_0802").innerHTML = "+";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o02 = "Moyogi";
            table_ttg._0802 = "+";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0803").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_0803").innerHTML = "-";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o03 = "Shakan";
            table_ttg._0803 = "-";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0804").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_0804").innerHTML = "-";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o04 = "Han-Kengai";
            table_ttg._0804 = "-";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0805").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_0805").innerHTML = "+";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o05 = "Sokan";
            table_ttg._0805 = "+";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0806").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_0806").innerHTML = "-";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o06 = "Kengai";
            table_ttg._0806 = "-";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0807").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_0807").innerHTML = "+";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o07 = "Kabudachi";
            table_ttg._0807 = "+";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0808").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_0808").innerHTML = "o";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o08 = "Hokidachi";
            table_ttg._0808 = "o";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0809").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_0809").innerHTML = "+";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o09 = "Bunjin";
            table_ttg._0809 = "+";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0810").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_0810").innerHTML = "-";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o10 = "Fukinagashi";
            table_ttg._0810 = "-";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0811").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_0811").innerHTML = "+";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o11 = "Ikadabuki";
            table_ttg._0811 = "+";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0812").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_0812").innerHTML = "-";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o12 = "Neagari";
            table_ttg._0812 = "-";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0813").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_0813").innerHTML = "+";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o13 = "Sharimiki";
            table_ttg._0813 = "+";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0814").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_0814").innerHTML = "-";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o14 = "Ishizuki";
            table_ttg._0814 = "-";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0815").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_0815").innerHTML = "-";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o15 = "Sabamiki";
            table_ttg._0815 = "-";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0816").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_0816").innerHTML = "-";
            table_ttg._y08 = "Hokidachi";
            table_ttg._o16 = "Seki-joju";
            table_ttg._0816 = "-";            
        }
    }   
    else if (own.styletype==9) {
        if (skills.treestyles6==1) {
            document.getElementById("table_"+place+"_st").style.marginLeft = "-199.85px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0901").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_0901").innerHTML = "-";
            table_ttg._y09 = "Bunjin";
            table_ttg._o01 = "Chokan";
            table_ttg._0901 = "-";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0902").style.backgroundColor = "green";   
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_0902").innerHTML = "+";
            table_ttg._y09 = "Bunjin";
            table_ttg._o02 = "Moyogi";
            table_ttg._0902 = "+";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0903").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_0903").innerHTML = "+";
            table_ttg._y09 = "Bunjin";
            table_ttg._o03 = "Shakan";
            table_ttg._0903 = "+";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0904").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_0904").innerHTML = "+";
            table_ttg._y09 = "Bunjin";
            table_ttg._o04 = "Han-Kengai";
            table_ttg._0904 = "+";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0905").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_0905").innerHTML = "+";
            table_ttg._y09 = "Bunjin";
            table_ttg._o05 = "Sokan";
            table_ttg._0905 = "+";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0906").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_0906").innerHTML = "-";
            table_ttg._y09 = "Bunjin";
            table_ttg._o06 = "Kengai";
            table_ttg._0906 = "-";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0907").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_0907").innerHTML = "-";
            table_ttg._y09 = "Bunjin";
            table_ttg._o07 = "Kabudachi";
            table_ttg._0907 = "-";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0908").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_0908").innerHTML = "-";
            table_ttg._y09 = "Bunjin";
            table_ttg._o08 = "Hokidachi";
            table_ttg._0908 = "-";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0909").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_0909").innerHTML = "o";
            table_ttg._y09 = "Bunjin";
            table_ttg._o09 = "Bunjin";
            table_ttg._0909 = "o";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0910").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_0910").innerHTML = "+";
            table_ttg._y09 = "Bunjin";
            table_ttg._o10 = "Fukinagashi";
            table_ttg._0910 = "+";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0911").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_0911").innerHTML = "-";
            table_ttg._y09 = "Bunjin";
            table_ttg._o11 = "Ikadabuki";
            table_ttg._0911 = "-";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0912").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_0912").innerHTML = "+";
            table_ttg._y09 = "Bunjin";
            table_ttg._o12 = "Neagari";
            table_ttg._0912 = "+";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0913").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_0913").innerHTML = "-";
            table_ttg._y09 = "Bunjin";
            table_ttg._o13 = "Sharimiki";
            table_ttg._0913 = "-";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0914").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_0914").innerHTML = "+";
            table_ttg._y09 = "Bunjin";
            table_ttg._o14 = "Ishizuki";
            table_ttg._0914 = "+";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0915").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_0915").innerHTML = "-";
            table_ttg._y09 = "Bunjin";
            table_ttg._o15 = "Sabamiki";
            table_ttg._0915 = "-";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_0916").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_0916").innerHTML = "-";
            table_ttg._y09 = "Bunjin";
            table_ttg._o16 = "Seki-joju";
            table_ttg._0916 = "-";            
        }
    }   
    else if (own.styletype==10) {
        if (skills.treestyles6==1) {
            document.getElementById("table_"+place+"_st").style.marginLeft = "-219.445px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1001").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_1001").innerHTML = "+";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o01 = "Chokan";
            table_ttg._1001 = "+";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1002").style.backgroundColor = "red";   
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_1002").innerHTML = "-";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o02 = "Moyogi";
            table_ttg._1002 = "-";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1003").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_1003").innerHTML = "+";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o03 = "Shakan";
            table_ttg._1003 = "+";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1004").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_1004").innerHTML = "+";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o04 = "Han-Kengai";
            table_ttg._1004 = "+";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1005").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_1005").innerHTML = "-";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o05 = "Sokan";
            table_ttg._1005 = "-";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1006").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_1006").innerHTML = "+";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o06 = "Kengai";
            table_ttg._1006 = "+";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1007").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_1007").innerHTML = "-";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o07 = "Kabudachi";
            table_ttg._1007 = "-";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1008").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_1008").innerHTML = "+";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o08 = "Hokidachi";
            table_ttg._1008 = "+";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1009").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_1009").innerHTML = "-";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o09 = "Bunjin";
            table_ttg._1009 = "-";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1010").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_1010").innerHTML = "o";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o10 = "Fukinagashi";
            table_ttg._1010 = "o";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1011").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_1011").innerHTML = "+";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o11 = "Ikadabuki";
            table_ttg._1011 = "+";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1012").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_1012").innerHTML = "-";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o12 = "Neagari";
            table_ttg._1012 = "-";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1013").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_1013").innerHTML = "+";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o13 = "Sharimiki";
            table_ttg._1013 = "+";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1014").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_1014").innerHTML = "-";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o14 = "Ishizuki";
            table_ttg._1014 = "-";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1015").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_1015").innerHTML = "+";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o15 = "Sabamiki";
            table_ttg._1015 = "+";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1016").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_1016").innerHTML = "-";
            table_ttg._y10 = "Fukinagashi";
            table_ttg._o16 = "Seki-joju";
            table_ttg._1016 = "-";            
        }
    }   
    else if (own.styletype==11) {
        if (skills.treestyles6==1) {
            document.getElementById("table_"+place+"_st").style.marginLeft = "-211.105px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1101").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_1101").innerHTML = "+";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o01 = "Chokan";
            table_ttg._1101 = "+";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1102").style.backgroundColor = "red";   
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_1102").innerHTML = "-";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o02 = "Moyogi";
            table_ttg._1102 = "-";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1103").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_1103").innerHTML = "+";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o03 = "Shakan";
            table_ttg._1103 = "+";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1104").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_1104").innerHTML = "-";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o04 = "Han-Kengai";
            table_ttg._1104 = "-";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1105").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_1105").innerHTML = "+";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o05 = "Sokan";
            table_ttg._1105 = "+";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1106").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_1106").innerHTML = "+";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o06 = "Kengai";
            table_ttg._1106 = "+";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1107").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_1107").innerHTML = "+";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o07 = "Kabudachi";
            table_ttg._1107 = "+";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1108").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_1108").innerHTML = "-";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o08 = "Hokidachi";
            table_ttg._1108 = "-";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1109").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_1109").innerHTML = "+";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o09 = "Bunjin";
            table_ttg._1109 = "+";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1110").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_1110").innerHTML = "-";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o10 = "Fukinagashi";
            table_ttg._1110 = "-";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1111").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_1111").innerHTML = "o";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o11 = "Ikadabuki";
            table_ttg._1111 = "o";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1112").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_1112").innerHTML = "-";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o12 = "Neagari";
            table_ttg._1112 = "-";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1113").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_1113").innerHTML = "-";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o13 = "Sharimiki";
            table_ttg._1113 = "-";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1114").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_1114").innerHTML = "+";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o14 = "Ishizuki";
            table_ttg._1114 = "+";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1115").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_1115").innerHTML = "-";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o15 = "Sabamiki";
            table_ttg._1115 = "-";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1116").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_1116").innerHTML = "+";
            table_ttg._y11 = "Ikadabuki";
            table_ttg._o16 = "Seki-joju";
            table_ttg._1116 = "+";            
        }
    }   
    else if (own.styletype==12) {
        if (skills.treestyles6==1) {
            document.getElementById("table_"+place+"_st").style.marginLeft = "-205.27px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1201").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_1201").innerHTML = "-";
            table_ttg._y12 = "Neagari";
            table_ttg._o01 = "Chokan";
            table_ttg._1201 = "-";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1202").style.backgroundColor = "green";   
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_1202").innerHTML = "+";
            table_ttg._y12 = "Neagari";
            table_ttg._o02 = "Moyogi";
            table_ttg._1202 = "+";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1203").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_1203").innerHTML = "-";
            table_ttg._y12 = "Neagari";
            table_ttg._o03 = "Shakan";
            table_ttg._1203 = "-";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1204").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_1204").innerHTML = "+";
            table_ttg._y12 = "Neagari";
            table_ttg._o04 = "Han-Kengai";
            table_ttg._1204 = "+";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1205").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_1205").innerHTML = "-";
            table_ttg._y12 = "Neagari";
            table_ttg._o05 = "Sokan";
            table_ttg._1205 = "-";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1206").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_1206").innerHTML = "+";
            table_ttg._y12 = "Neagari";
            table_ttg._o06 = "Kengai";
            table_ttg._1206 = "+";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1207").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_1207").innerHTML = "+";
            table_ttg._y12 = "Neagari";
            table_ttg._o07 = "Kabudachi";
            table_ttg._1207 = "+";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1208").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_1208").innerHTML = "+";
            table_ttg._y12 = "Neagari";
            table_ttg._o08 = "Hokidachi";
            table_ttg._1208 = "+";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1209").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_1209").innerHTML = "-";
            table_ttg._y12 = "Neagari";
            table_ttg._o09 = "Bunjin";
            table_ttg._1209 = "-";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1210").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_1210").innerHTML = "+";
            table_ttg._y12 = "Neagari";
            table_ttg._o10 = "Fukinagashi";
            table_ttg._1210 = "+";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1211").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_1211").innerHTML = "+";
            table_ttg._y12 = "Neagari";
            table_ttg._o11 = "Ikadabuki";
            table_ttg._1211 = "+";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1212").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_1212").innerHTML = "o";
            table_ttg._y12 = "Neagari";
            table_ttg._o12 = "Neagari";
            table_ttg._1212 = "o";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1213").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_1213").innerHTML = "+";
            table_ttg._y12 = "Neagari";
            table_ttg._o13 = "Sharimiki";
            table_ttg._1213 = "+";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1214").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_1214").innerHTML = "-";
            table_ttg._y12 = "Neagari";
            table_ttg._o14 = "Ishizuki";
            table_ttg._1214 = "-";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1215").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_1215").innerHTML = "-";
            table_ttg._y12 = "Neagari";
            table_ttg._o15 = "Sabamiki";
            table_ttg._1215 = "-";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1216").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_1216").innerHTML = "-";
            table_ttg._y12 = "Neagari";
            table_ttg._o16 = "Seki-joju";
            table_ttg._1216 = "-";            
        }
    }   
    else if (own.styletype==13) {
        if (skills.treestyles6==1) {
            document.getElementById("table_"+place+"_st").style.marginLeft = "-209.845px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1301").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_1301").innerHTML = "+";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o01 = "Chokan";
            table_ttg._1301 = "+";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1302").style.backgroundColor = "green";   
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_1302").innerHTML = "+";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o02 = "Moyogi";
            table_ttg._1302 = "+";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1303").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_1303").innerHTML = "+";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o03 = "Shakan";
            table_ttg._1303 = "+";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1304").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_1304").innerHTML = "-";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o04 = "Han-Kengai";
            table_ttg._1304 = "-";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1305").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_1305").innerHTML = "+";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o05 = "Sokan";
            table_ttg._1305 = "+";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1306").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_1306").innerHTML = "-";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o06 = "Kengai";
            table_ttg._1306 = "-";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1307").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_1307").innerHTML = "+";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o07 = "Kabudachi";
            table_ttg._1307 = "+";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1308").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_1308").innerHTML = "-";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o08 = "Hokidachi";
            table_ttg._1308 = "-";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1309").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_1309").innerHTML = "+";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o09 = "Bunjin";
            table_ttg._1309 = "+";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1310").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_1310").innerHTML = "-";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o10 = "Fukinagashi";
            table_ttg._1310 = "-";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1311").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_1311").innerHTML = "+";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o11 = "Ikadabuki";
            table_ttg._1311 = "+";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1312").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_1312").innerHTML = "-";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o12 = "Neagari";
            table_ttg._1312 = "-";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1313").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_1313").innerHTML = "o";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o13 = "Sharimiki";
            table_ttg._1313 = "o";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1314").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_1314").innerHTML = "+";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o14 = "Ishizuki";
            table_ttg._1314 = "+";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1315").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_1315").innerHTML = "+";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o15 = "Sabamiki";
            table_ttg._1315 = "+";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1316").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_1316").innerHTML = "-";
            table_ttg._y13 = "Sharimiki";
            table_ttg._o16 = "Seki-joju";
            table_ttg._1316 = "-";            
        }
    }   
    else if (own.styletype==14) {
        if (skills.treestyles6==1) {
            document.getElementById("table_"+place+"_st").style.marginLeft = "-204.015px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1401").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_1401").innerHTML = "+";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o01 = "Chokan";
            table_ttg._1401 = "+";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1402").style.backgroundColor = "green";   
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_1402").innerHTML = "+";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o02 = "Moyogi";
            table_ttg._1402 = "+";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1403").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_1403").innerHTML = "+";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o03 = "Shakan";
            table_ttg._1403 = "+";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1404").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_1404").innerHTML = "+";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o04 = "Han-Kengai";
            table_ttg._1404 = "+";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1405").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_1405").innerHTML = "-";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o05 = "Sokan";
            table_ttg._1405 = "-";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1406").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_1406").innerHTML = "+";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o06 = "Kengai";
            table_ttg._1406 = "+";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1407").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_1407").innerHTML = "-";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o07 = "Kabudachi";
            table_ttg._1407 = "-";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1408").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_1408").innerHTML = "+";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o08 = "Hokidachi";
            table_ttg._1408 = "+";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1409").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_1409").innerHTML = "-";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o09 = "Bunjin";
            table_ttg._1409 = "-";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1410").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_1410").innerHTML = "+";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o10 = "Fukinagashi";
            table_ttg._1410 = "+";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1411").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_1411").innerHTML = "-";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o11 = "Ikadabuki";
            table_ttg._1411 = "-";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1412").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_1412").innerHTML = "+";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o12 = "Neagari";
            table_ttg._1412 = "+";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1413").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_1413").innerHTML = "-";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o13 = "Sharimiki";
            table_ttg._1413 = "-";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1414").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_1414").innerHTML = "o";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o14 = "Ishizuki";
            table_ttg._1414 = "o";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1415").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_1415").innerHTML = "-";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o15 = "Sabamiki";
            table_ttg._1415 = "-";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1416").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_1416").innerHTML = "+";
            table_ttg._y14 = "Ishizuki";
            table_ttg._o16 = "Seki-joju";
            table_ttg._1416 = "+";            
        }
    }   
    else if (own.styletype==15) {
        if (skills.treestyles6==1) {
            document.getElementById("table_"+place+"_st").style.marginLeft = "-209.85px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1501").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_1501").innerHTML = "+";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o01 = "Chokan";
            table_ttg._1501 = "+";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1502").style.backgroundColor = "red";   
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_1502").innerHTML = "-";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o02 = "Moyogi";
            table_ttg._1502 = "-";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1503").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_1503").innerHTML = "+";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o03 = "Shakan";
            table_ttg._1503 = "+";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1504").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_1504").innerHTML = "+";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o04 = "Han-Kengai";
            table_ttg._1504 = "+";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1505").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_1505").innerHTML = "+";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o05 = "Sokan";
            table_ttg._1505 = "+";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1506").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_1506").innerHTML = "-";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o06 = "Kengai";
            table_ttg._1506 = "-";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1507").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_1507").innerHTML = "+";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o07 = "Kabudachi";
            table_ttg._1507 = "+";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1508").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_1508").innerHTML = "+";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o08 = "Hokidachi";
            table_ttg._1508 = "+";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1509").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_1509").innerHTML = "+";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o09 = "Bunjin";
            table_ttg._1509 = "+";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1510").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_1510").innerHTML = "-";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o10 = "Fukinagashi";
            table_ttg._1510 = "-";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1511").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_1511").innerHTML = "+";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o11 = "Ikadabuki";
            table_ttg._1511 = "+";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1512").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_1512").innerHTML = "+";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o12 = "Neagari";
            table_ttg._1512 = "+";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1513").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_1513").innerHTML = "-";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o13 = "Sharimiki";
            table_ttg._1513 = "-";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1514").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_1514").innerHTML = "+";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o14 = "Ishizuki";
            table_ttg._1514 = "+";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1515").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_1515").innerHTML = "o";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o15 = "Sabamiki";
            table_ttg._1515 = "o";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1516").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_1516").innerHTML = "-";
            table_ttg._y15 = "Sabamiki";
            table_ttg._o16 = "Seki-joju";
            table_ttg._1516 = "-";            
        }
    }   
    else if (own.styletype==16) {
        if (skills.treestyles6==1) {
            document.getElementById("table_"+place+"_st").style.marginLeft = "-207.765px";
        }
        if (contestant.styletype==1) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1601").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o01").innerHTML = "Chokan";
            document.getElementById("STtable_"+place+"_1601").innerHTML = "-";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o01 = "Chokan";
            table_ttg._1601 = "-";
        }
        else if (contestant.styletype==2) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1602").style.backgroundColor = "green";   
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o02").innerHTML = "Moyogi";
            document.getElementById("STtable_"+place+"_1602").innerHTML = "+";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o02 = "Moyogi";
            table_ttg._1602 = "+";         
        }
        else if (contestant.styletype==3) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1603").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o03").innerHTML = "Shakan";
            document.getElementById("STtable_"+place+"_1603").innerHTML = "-";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o03 = "Shakan";
            table_ttg._1603 = "-";            
        }
        else if (contestant.styletype==4) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1604").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o04").innerHTML = "Han-Kengai";
            document.getElementById("STtable_"+place+"_1604").innerHTML = "+";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o04 = "Han-Kengai";
            table_ttg._1604 = "+";            
        }
        else if (contestant.styletype==5) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1605").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o05").innerHTML = "Sokan";
            document.getElementById("STtable_"+place+"_1605").innerHTML = "+";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o05 = "Sokan";
            table_ttg._1605 = "+";            
        }
        else if (contestant.styletype==6) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1606").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o06").innerHTML = "Kengai";
            document.getElementById("STtable_"+place+"_1606").innerHTML = "+";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o06 = "Kengai";
            table_ttg._1606 = "+";            
        }
        else if (contestant.styletype==7) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1607").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o07").innerHTML = "Kabudachi";
            document.getElementById("STtable_"+place+"_1607").innerHTML = "-";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o07 = "Kabudachi";
            table_ttg._1607 = "-";            
        }
        else if (contestant.styletype==8) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1608").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o08").innerHTML = "Hokidachi";
            document.getElementById("STtable_"+place+"_1608").innerHTML = "+";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o08 = "Hokidachi";
            table_ttg._1608 = "+";            
        }
        else if (contestant.styletype==9) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1609").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o09").innerHTML = "Bunjin";
            document.getElementById("STtable_"+place+"_1609").innerHTML = "+";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o09 = "Bunjin";
            table_ttg._1609 = "+";            
        }
        else if (contestant.styletype==10) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1610").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o10").innerHTML = "Fukinagashi";
            document.getElementById("STtable_"+place+"_1610").innerHTML = "+";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o10 = "Fukinagashi";
            table_ttg._1610 = "+";            
        }
        else if (contestant.styletype==11) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1611").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o11").innerHTML = "Ikadabuki";
            document.getElementById("STtable_"+place+"_1611").innerHTML = "-";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o11 = "Ikadabuki";
            table_ttg._1611 = "-";            
        }
        else if (contestant.styletype==12) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1612").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o12").innerHTML = "Neagari";
            document.getElementById("STtable_"+place+"_1612").innerHTML = "+";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o12 = "Neagari";
            table_ttg._1612 = "+";            
        }
        else if (contestant.styletype==13) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1613").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o13").innerHTML = "Sharimiki";
            document.getElementById("STtable_"+place+"_1613").innerHTML = "+";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o13 = "Sharimiki";
            table_ttg._1613 = "+";            
        }
        else if (contestant.styletype==14) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1614").style.backgroundColor = "red";
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o14").innerHTML = "Ishizuki";
            document.getElementById("STtable_"+place+"_1614").innerHTML = "-";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o14 = "Ishizuki";
            table_ttg._1614 = "-";            
        }
        else if (contestant.styletype==15) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1615").style.backgroundColor = "green";
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o15").innerHTML = "Sabamiki";
            document.getElementById("STtable_"+place+"_1615").innerHTML = "+";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o15 = "Sabamiki";
            table_ttg._1615 = "+";            
        }
        else if (contestant.styletype==16) {
            document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_1616").style.backgroundColor = "grey";
            document.getElementById("STtable_"+place+"_y16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_o16").innerHTML = "Seki-joju";
            document.getElementById("STtable_"+place+"_1616").innerHTML = "o";
            table_ttg._y16 = "Seki-joju";
            table_ttg._o16 = "Seki-joju";
            table_ttg._1616 = "o";            
        }
    }    
}