function experience(exp) {
    if (exp<skills.exp_nextlevel) {
        skills.exp_nextlevel= skills.exp_nextlevel-exp;
        document.getElementById("skillexp_left").innerHTML = skills.exp_nextlevel;
    }
    else if (exp>=skills.exp_nextlevel) {
        exp = exp-skills.exp_nextlevel;
        skills.level +=1;
        if (skills.level==1) {
            modalskilllevel.style.display = "block";
        }
        skills.skillpoints +=2;
        skills.exp_nextlevel= skillexperience[skills.level];
        skills.exp_nextlevel= skills.exp_nextlevel-exp;
        document.getElementById("skilllevel").innerHTML = skills.level;
        document.getElementById("skillexp_left").innerHTML = skills.exp_nextlevel;
        document.getElementById("skillpoints").innerHTML = skills.skillpoints;
        document.getElementById("skillpoints_mobile").innerHTML = skills.skillpoints;
        document.getElementById("skillpoints_mobilexs").innerHTML = skills.skillpoints;
        fetchunlocks();
        
        //modalmilestone.style.display = "block";
        
        Snackbar("<img src='Images/skill_white.svg' width='20' height='20'>&nbsp;You reached skill level&nbsp;"+ skills.level +".", "snackbar_skillstone", 6000, "snackbar_skillstone show6s");
    }
}

function learn_treestyles1() {
    if (skills.treestyles1==0) {
        if (equipment.tools1==1) {
            if (equipment.book_styles1==1) {
                skills.treestyles1=1;
                fetchvalues();
                fetchunlocks();
                $(document).ready(function(){
                    $("#menu_style").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option>");
                    $("#menu_style_mobile").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option>");
                });
                tutorial_function();
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need book: Bonsai styles #1 first", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need 'Beginner bonsai tools' first", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_treestyles2() {
    if (skills.treestyles2==0) {
        if (equipment.book_styles2==1) {
            skills.treestyles2=1;
            fetchvalues();
            fetchunlocks();
            $(document).ready(function(){
                $("#menu_style").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option></option><option value='4'>Han-Kengai - Semi-cascade Style</option></option><option value='5'>Sokan - Double Trunk Style</option></option><option value='6'>Kengai - Full Cascade Style</option></option><option value='7'>Kabudachi - Multi-Trunk Style</option>");
                $("#menu_style_mobile").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option><option value='4'>Han-Kengai - Semi-cascade Style</option></option><option value='5'>Sokan - Double Trunk Style</option></option><option value='6'>Kengai - Full Cascade Style</option></option><option value='7'>Kabudachi - Multi-Trunk Style</option>");
            });
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need book: Bonsai styles #2 first", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_robot1() {
    if (skills.robot1==0) {
        if (skills.level>=0) {
            if (equipment.book_robot1==1) {
                skills.robot1=1;
                fetchvalues();
                fetchunlocks();
                tutorial_function ();
            }
            else {}
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Skill level not high enough", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_compost1() {
    if (skills.compost1==0) {
        if (resources.wood>=5) {
            if (skills.skillpoints>=1) {
                skills.skillpoints-=1;
                resources.wood-=5;
                skills.compost1=1;
                fetchvalues();
                fetchunlocks();
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough wood", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_fertilizer1() {
    if (skills.fertilizer1==0) {
        if (equipment.labkit==1) {
            if (skills.skillpoints>=1) {
                skills.skillpoints-=1;
                skills.fertilizer1=1;
                fetchvalues();
                fetchunlocks();
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need lab kit first", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_growing() {
    if (skills.growing<=8) {
        if (skills.skillpoints>=1) {
            if (equipment.book_growing1==1) {
                skills.skillpoints-=1;
                learn_growing2 ();
                fetchvalues();
                fetchunlocks();
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need book: Growing #1 first", "snackbar_attention", 3000, "snackbar_attention show3s");
            }    
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else if (skills.growing>8 && skills.growing<10) {
        if (skills.skillpoints>=1) {
            if (equipment.book_growing1==1) {
                skills.skillpoints-=1;
                learn_growing2 ();
                fetchvalues();
                fetchunlocks();
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need book: Growing #1 first", "snackbar_attention", 3000, "snackbar_attention show3s");
            }    
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else if (skills.growing>9 && skills.growing<=18) {
        
    }  
}

function learn_growing2 () {
    skills.growing +=1;
    learn_growshape (bonsai001);
    learn_growshape (bonsai002);
    learn_growshape (bonsai003);
    learn_growshape (bonsai004);
    learn_growshape (bonsai005);
    learn_growshape (bonsai006);
    learn_growshape (bonsai007);
    learn_growshape (bonsai008);
    learn_growshape (bonsai009);
    learn_growshape (bonsai010);
    learn_growshape (bonsai011);
    learn_growshape (bonsai012);
    learn_growshape (bonsai013);
    learn_growshape (bonsai014);
    learn_growshape (bonsai015);
    learn_growshape (bonsai016);
    learn_growshape (bonsai017);
    learn_growshape (bonsai018);
    learn_growshape (bonsai019);
    learn_growshape (bonsai020);
}

function learn_growshape (bonsaixx) {
    if (bonsaixx.growing==0) {
        bonsaixx.foliage_lp=0;
        bonsaixx.branches_lp=0;
        bonsaixx.trunk_lp=0;
        bonsaixx.roots_lp=0;
        if (bonsaixx.treequality==1) {
            cpdistribution(bonsaixx, level_cp_tq1);
            cpdistributionaftercare(bonsaixx)
        }
        if (bonsaixx.treequality==2) {
            cpdistribution(bonsaixx, level_cp_tq2);
            cpdistributionaftercare(bonsaixx)
        }
        if (bonsaixx.treequality==3) {
            cpdistribution(bonsaixx, level_cp_tq3);
            cpdistributionaftercare(bonsaixx)
        }
    }
}

function learn_shaping() {
    if (skills.shaping<=8) {
        if (skills.skillpoints>=1) {
            if (equipment.book_shaping1==1) {
                if (skills.shaping==0) {
                    $(document).ready(function() {
                        $('#bdcc_r_t13header_show').show();
                        $('#bdcc_r_t13header_hide').hide();
                        $('#bdcc_r_t13f_show').show();
                        $('#bdcc_r_t13f_hide').hide();
                        $('#bdcc_r_t13b_show').show();
                        $('#bdcc_r_t13b_hide').hide();
                        $('#bdcc_r_t13t_show').show();
                        $('#bdcc_r_t13t_hide').hide();
                        $('#bdcc_r_t13r_show').show();
                        $('#bdcc_r_t13r_hide').hide();
                        $('#bdcc_r_r13bottom_show').show();
                    });
                }
                skills.skillpoints-=1;
                learn_shaping2 ();
                fetchvalues();
                fetchunlocks();
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need book: Shaping #1 first", "snackbar_attention", 3000, "snackbar_attention show3s");
            }    
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else if (skills.shaping>8 && skills.shaping<10) {
        if (skills.skillpoints>=1) {
            if (equipment.book_shaping1==1) {
                skills.skillpoints-=1;
                learn_shaping2 ();
                fetchvalues();
                fetchunlocks();
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need book: Shaping #1 first", "snackbar_attention", 3000, "snackbar_attention show3s");
            }    
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else if (skills.shaping>9 && skills.shaping<=18) {
    }  
}

function learn_shaping2 () {
    skills.shaping +=1;
    learn_growshape (bonsai001);
    learn_growshape (bonsai002);
    learn_growshape (bonsai003);
    learn_growshape (bonsai004);
    learn_growshape (bonsai005);
    learn_growshape (bonsai006);
    learn_growshape (bonsai007);
    learn_growshape (bonsai008);
    learn_growshape (bonsai009);
    learn_growshape (bonsai010);
    learn_growshape (bonsai011);
    learn_growshape (bonsai012);
    learn_growshape (bonsai013);
    learn_growshape (bonsai014);
    learn_growshape (bonsai015);
    learn_growshape (bonsai016);
    learn_growshape (bonsai017);
    learn_growshape (bonsai018);
    learn_growshape (bonsai019);
    learn_growshape (bonsai020);
}

function learn_patience() {
    if (skills.patience==0) {
        if (skills.skillpoints>=1) {
            if (equipment.book_of_patience1==1 && equipment.memory_chips1==1) {
                skills.patience=1;
                fetchvalues();
                fetchunlocks();
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need book: Patience and memory chips first", "snackbar_attention", 3000, "snackbar_attention show3s");
            } 
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_greenhouse1() {
    if (skills.greenhouse1==0) {
        if (skills.skillpoints>=1) {
            if (equipment.buildingtools==1) {
                skills.skillpoints-=1;
                skills.greenhouse1=1;
                fetchvalues();
                fetchunlocks();
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need 'Building tools' first", "snackbar_attention", 3000, "snackbar_attention show3s");
            }    
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_storage1() {
    if (skills.storage1==0) {
        if (skills.skillpoints>=1) {
            if (equipment.buildingtools==1) {
                skills.skillpoints-=1;
                skills.storage1=1;
                fetchvalues();
                fetchunlocks();
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Need 'Building tools' first", "snackbar_attention", 3000, "snackbar_attention show3s");
            }    
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_care1() {
    if (skills.care==1) {
        if (skills.skillpoints>=1) {
            skills.skillpoints-=1;
            skills.care=2;
            fetchvalues();
            fetchunlocks(); 
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_area1up1() {
    if (skills.area1up==0) {
        if (skills.skillpoints>=1) {
            if (exp_area01.count>=25) {
                skills.skillpoints-=1;
                skills.area1up=1;
                fetchvalues();
                fetchunlocks(); 
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Go on more expeditions", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_area2up1() {
    if (skills.area2up==0) {
        if (skills.skillpoints>=1) {
            if (exp_area02.count>=25) {
                skills.skillpoints-=1;
                skills.area2up=1;
                fetchvalues();
                fetchunlocks(); 
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Go on more expeditions", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_areares1up1() {
    if (skills.areares1up==0) {
        if (skills.skillpoints>=1) {
            if (expres_area01.count>=10) {
                skills.skillpoints-=1;
                skills.areares1up=1;
                fetchvalues();
                fetchunlocks(); 
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Go on more expeditions", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}

function learn_areares2up1() {
    if (skills.areares2up==0) {
        if (skills.skillpoints>=1) {
            if (expres_area02.count>=10) {
                skills.skillpoints-=1;
                skills.areares2up=1;
                fetchvalues();
                fetchunlocks(); 
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Go on more expeditions", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough skill points", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {}
}