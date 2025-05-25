/* Bonsai Detail Growing*/
function Bonsai_Growing(bonsaixx) {
    if (bonsaixx.growing==1) {
        document.getElementById("bonsai_detail_name").innerText = bonsaixx.name; 
        document.getElementById("bonsai_detail_name_mobile").innerText = bonsaixx.name; 
        document.getElementById("bonsai_detail_id").innerText = bonsaixx.id_string; 
        
        document.getElementById("bonsai_detail_rank_lvl").innerHTML = rank_lvl(bonsaixx, "bonsai_detail_rank_lvltext");
        document.getElementById("bonsai_detail_rank_tq").innerHTML = rank_tq(bonsaixx, "bonsai_detail_rank_tqtext");
        document.getElementById("bonsai_detail_rank_cp").innerHTML = rank_cp(bonsaixx, "bonsai_detail_rank_cptext");
        document.getElementById("bonsai_detail_rank_pot").innerHTML = rank_pot(bonsaixx, "bonsai_detail_rank_pottext");
        document.getElementById("bonsai_detail_rank_pres").innerHTML = rank_pres(bonsaixx, "bonsai_detail_rank_prestext");        
        document.getElementById("bonsai_detail_rank_look").innerHTML = rank_look(bonsaixx, "bonsai_detail_rank_looktext");  
        rank_calculation(bonsaixx);
        document.getElementById("bonsai_detail_treequality").style.backgroundImage = fetchbonsairanktq_big(bonsaixx);     
        
        document.getElementById("bonsai_detail_type").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, bonsaixx, "100", "100");
        document.getElementById("bonsai_detail_type_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, bonsaixx, "100", "100");
        document.getElementById("bonsai_detail_treetype").innerText = treetypename[bonsaixx.treetype];
        document.getElementById("bonsai_detail_treetypegroup").innerText = treetypegroupname[bonsaixx.treetypegroup];
        document.getElementById("bonsai_detail_styletype").innerText = styletypename[bonsaixx.styletype];
        document.getElementById("bonsai_detail_nature").innerText = natures[bonsaixx.nature];
        document.getElementById("bonsai_detail_level").innerText = bonsaixx.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_detail_cp").innerHTML = bonsaixx.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_foliage").innerText = potentiallabel(bonsaixx.newpotentialfoliage, bonsaixx.inheritedpotentialfoliage, bonsaixx.obtainedpotentialfoliage);
        document.getElementById("bonsai_detail_foliageper").innerText = potentiallabelpercentage(bonsaixx.newpotentialfoliage, bonsaixx.inheritedpotentialfoliage);
        document.getElementById("bonsai_detail_branches").innerText = potentiallabel(bonsaixx.newpotentialbranches, bonsaixx.inheritedpotentialbranches, bonsaixx.obtainedpotentialbranches);
        document.getElementById("bonsai_detail_branchesper").innerText = potentiallabelpercentage(bonsaixx.newpotentialbranches, bonsaixx.inheritedpotentialbranches);
        document.getElementById("bonsai_detail_trunk").innerText = potentiallabel(bonsaixx.newpotentialtrunk, bonsaixx.inheritedpotentialtrunk, bonsaixx.obtainedpotentialtrunk);
        document.getElementById("bonsai_detail_trunkper").innerText = potentiallabelpercentage(bonsaixx.newpotentialtrunk, bonsaixx.inheritedpotentialtrunk);
        document.getElementById("bonsai_detail_roots").innerText = potentiallabel(bonsaixx.newpotentialroots, bonsaixx.inheritedpotentialroots, bonsaixx.obtainedpotentialroots);
        document.getElementById("bonsai_detail_rootsper").innerText = potentiallabelpercentage(bonsaixx.newpotentialroots, bonsaixx.inheritedpotentialroots);
        
        document.getElementById("bonsai_detail_status").innerHTML = "Growing ("+timetracker(bonsaixx.growing_zeit)+")"; 
        document.getElementById("bonsai_detail_status_mobile").innerHTML = "Growing ("+timetracker(bonsaixx.growing_zeit)+")";
        document.getElementById("bonsai_detail_level2").innerText = bonsaixx.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_detail_cp2").innerHTML = (Math.round((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1}); 
        document.getElementById("bonsai_detail_foliage2").innerText = bonsaixx.foliage.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_branches2").innerText = bonsaixx.branches.toLocaleString('en', {minimumFractionDigits: 1});    
        document.getElementById("bonsai_detail_trunk2").innerText = bonsaixx.trunk.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_roots2").innerText = bonsaixx.roots.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("bonsai_detail_level_new2").innerHTML = bonsaixx.level_new.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((bonsaixx.foliage_new+bonsaixx.branches_new+bonsaixx.trunk_new+bonsaixx.roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_foliage_new2").innerHTML = bonsaixx.foliage_new.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_branches_new2").innerHTML = bonsaixx.branches_new.toLocaleString('en', {minimumFractionDigits: 1});    
        document.getElementById("bonsai_detail_trunk_new2").innerHTML = bonsaixx.trunk_new.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_roots_new2").innerHTML = bonsaixx.roots_new.toLocaleString('en', {minimumFractionDigits: 1}); 
        document.getElementById("bonsai_detail_leftpoints").innerHTML = bonsaixx.leftpoints.toLocaleString('en', {minimumFractionDigits: 1});  

        document.getElementById("bonsai_level_leftpoints").innerHTML = (Math.round((bonsaixx.level_lp+1)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((bonsaixx.foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((bonsaixx.branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((bonsaixx.trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((bonsaixx.roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            
        document.getElementById("bonsai_foliage_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_foliage_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_foliage_plus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_plus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_plus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_plus_10").style.background = "#9f9f9f";
        
        document.getElementById("bonsai_foliage_minus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_foliage_minus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_foliage_minus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_minus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_minus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_minus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_minus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_minus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_minus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_minus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_minus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_minus_10").style.background = "#9f9f9f";
        
        if (resources.fertilizer1>0 & bonsaixx.growing_zeit>600) {
            $(document).ready(function(){
                $('#Growing1').hide();
                $('#Growing2').show();
            });
            if (resources.compost1==0) {
                document.getElementById("Button_Compost").style.cursor= "auto";
                document.getElementById("Button_Compost").className = "";
                document.getElementById("Button_Compost_Text").innerHTML = "";
            }
            else {
                document.getElementById("Button_Compost").style.cursor= "pointer";
                document.getElementById("Button_Compost").className = "grey";
                document.getElementById("Button_Compost_Text").innerHTML = "Give compost (-60 seconds)";
            }
        }
        else if (resources.compost1>0 & bonsaixx.growing_zeit>60) {
            $(document).ready(function(){
                $('#Growing1').show();
                $('#Growing2').hide();
            });
            document.getElementById("Button_Grow").style.cursor= "pointer";
            document.getElementById("Button_Grow").className = "grey";
            document.getElementById("Button_Grow_Text").innerHTML = "Give compost (-60 seconds)";
            document.getElementById("Button_Grow_Zeit").innerHTML = "";
        }
        else {
            $(document).ready(function(){
                $('#Growing1').show();
                $('#Growing2').hide();
            });
            document.getElementById("Button_Grow").style.cursor= "auto";
            document.getElementById("Button_Grow").className = "";
            document.getElementById("Button_Grow_Text").innerHTML = "Growing";
            document.getElementById("Button_Grow_Zeit").innerHTML = "";
        }
        
        document.getElementById("ChangePosition").style.cursor= "auto";
        document.getElementById("ChangePosition").className = "";
    }
    else {
        document.getElementById("bonsai_detail_name").innerText = bonsaixx.name; 
        document.getElementById("bonsai_detail_name_mobile").innerText = bonsaixx.name;
        document.getElementById("bonsai_detail_id").innerText = bonsaixx.id_string; 
        
        document.getElementById("bonsai_detail_rank_lvl").innerHTML = rank_lvl(bonsaixx, "bonsai_detail_rank_lvltext");
        document.getElementById("bonsai_detail_rank_tq").innerHTML = rank_tq(bonsaixx, "bonsai_detail_rank_tqtext");
        document.getElementById("bonsai_detail_rank_cp").innerHTML = rank_cp(bonsaixx, "bonsai_detail_rank_cptext");
        document.getElementById("bonsai_detail_rank_pot").innerHTML = rank_pot(bonsaixx, "bonsai_detail_rank_pottext");
        document.getElementById("bonsai_detail_rank_pres").innerHTML = rank_pres(bonsaixx, "bonsai_detail_rank_prestext");        
        document.getElementById("bonsai_detail_rank_look").innerHTML = rank_look(bonsaixx, "bonsai_detail_rank_looktext");
        rank_calculation(bonsaixx);
        document.getElementById("bonsai_detail_treequality").style.backgroundImage = fetchbonsairanktq_big(bonsaixx);
        
        document.getElementById("bonsai_detail_type").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, bonsaixx, "100", "100");
        document.getElementById("bonsai_detail_type_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, bonsaixx, "100", "100");
        document.getElementById("bonsai_detail_treetype").innerText = treetypename[bonsaixx.treetype];
        document.getElementById("bonsai_detail_treetypegroup").innerText = treetypegroupname[bonsaixx.treetypegroup];
        document.getElementById("bonsai_detail_styletype").innerText = styletypename[bonsaixx.styletype];
        document.getElementById("bonsai_detail_nature").innerText = natures[bonsaixx.nature];
        document.getElementById("bonsai_detail_level").innerText = bonsaixx.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_detail_cp").innerHTML = bonsaixx.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_foliage").innerText = potentiallabel(bonsaixx.newpotentialfoliage, bonsaixx.inheritedpotentialfoliage, bonsaixx.obtainedpotentialfoliage);
        document.getElementById("bonsai_detail_foliageper").innerText = potentiallabelpercentage(bonsaixx.newpotentialfoliage, bonsaixx.inheritedpotentialfoliage);
        document.getElementById("bonsai_detail_branches").innerText = potentiallabel(bonsaixx.newpotentialbranches, bonsaixx.inheritedpotentialbranches, bonsaixx.obtainedpotentialbranches);
        document.getElementById("bonsai_detail_branchesper").innerText = potentiallabelpercentage(bonsaixx.newpotentialbranches, bonsaixx.inheritedpotentialbranches);
        document.getElementById("bonsai_detail_trunk").innerText = potentiallabel(bonsaixx.newpotentialtrunk, bonsaixx.inheritedpotentialtrunk, bonsaixx.obtainedpotentialtrunk);
        document.getElementById("bonsai_detail_trunkper").innerText = potentiallabelpercentage(bonsaixx.newpotentialtrunk, bonsaixx.inheritedpotentialtrunk);
        document.getElementById("bonsai_detail_roots").innerText = potentiallabel(bonsaixx.newpotentialroots, bonsaixx.inheritedpotentialroots, bonsaixx.obtainedpotentialroots);
        document.getElementById("bonsai_detail_rootsper").innerText = potentiallabelpercentage(bonsaixx.newpotentialroots, bonsaixx.inheritedpotentialroots);
        
        document.getElementById("bonsai_detail_status").innerHTML = "Grow bonsai"; 
        document.getElementById("bonsai_detail_status_mobile").innerHTML = "Grow bonsai"; 
        document.getElementById("bonsai_detail_level2").innerText = bonsaixx.level.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_detail_cp2").innerHTML = (Math.round((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1}); 
        document.getElementById("bonsai_detail_foliage2").innerText = bonsaixx.foliage.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_branches2").innerText = bonsaixx.branches.toLocaleString('en', {minimumFractionDigits: 1});    
        document.getElementById("bonsai_detail_trunk2").innerText = bonsaixx.trunk.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_roots2").innerText = bonsaixx.roots.toLocaleString('en', {minimumFractionDigits: 1});
        
        document.getElementById("bonsai_detail_level_new2").innerHTML = bonsaixx.level_new.toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((bonsaixx.foliage_new+bonsaixx.branches_new+bonsaixx.trunk_new+bonsaixx.roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_foliage_new2").innerHTML = bonsaixx.foliage_new.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_branches_new2").innerHTML = bonsaixx.branches_new.toLocaleString('en', {minimumFractionDigits: 1});    
        document.getElementById("bonsai_detail_trunk_new2").innerHTML = bonsaixx.trunk_new.toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_detail_roots_new2").innerHTML = bonsaixx.roots_new.toLocaleString('en', {minimumFractionDigits: 1}); 
        document.getElementById("bonsai_detail_leftpoints").innerHTML = bonsaixx.leftpoints.toLocaleString('en', {minimumFractionDigits: 1});  

        document.getElementById("bonsai_level_leftpoints").innerHTML = (Math.round((bonsaixx.level_lp+1)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 0});
        document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((bonsaixx.foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((bonsaixx.branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((bonsaixx.trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((bonsaixx.roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
        
        if (bonsaixx.leftpoints>0.09) {
            document.getElementById("bonsai_foliage_plus_0").style.background = "#38cc2ba1";
            document.getElementById("bonsai_branches_plus_0").style.background = "#38cc2ba1";
            document.getElementById("bonsai_trunk_plus_0").style.background = "#38cc2ba1";
            document.getElementById("bonsai_roots_plus_0").style.background = "#38cc2ba1";
        }
        else {
            document.getElementById("bonsai_foliage_plus_0").style.background = "#9f9f9f";
            document.getElementById("bonsai_branches_plus_0").style.background = "#9f9f9f";
            document.getElementById("bonsai_trunk_plus_0").style.background = "#9f9f9f";
            document.getElementById("bonsai_roots_plus_0").style.background = "#9f9f9f";
        }
        
        if (bonsaixx.leftpoints>0.99) {
            document.getElementById("bonsai_foliage_plus_1").style.background = "#38cc2ba1";
            document.getElementById("bonsai_branches_plus_1").style.background = "#38cc2ba1";
            document.getElementById("bonsai_trunk_plus_1").style.background = "#38cc2ba1";
            document.getElementById("bonsai_roots_plus_1").style.background = "#38cc2ba1";
        }
        else {
            document.getElementById("bonsai_foliage_plus_1").style.background = "#9f9f9f";
            document.getElementById("bonsai_branches_plus_1").style.background = "#9f9f9f";
            document.getElementById("bonsai_trunk_plus_1").style.background = "#9f9f9f";
            document.getElementById("bonsai_roots_plus_1").style.background = "#9f9f9f";
        }
        
        if (bonsaixx.leftpoints>9.99) {
            document.getElementById("bonsai_foliage_plus_10").style.background = "#38cc2ba1";
            document.getElementById("bonsai_branches_plus_10").style.background = "#38cc2ba1";
            document.getElementById("bonsai_trunk_plus_10").style.background = "#38cc2ba1";
            document.getElementById("bonsai_roots_plus_10").style.background = "#38cc2ba1";
        }
        else {
            document.getElementById("bonsai_foliage_plus_10").style.background = "#9f9f9f";
            document.getElementById("bonsai_branches_plus_10").style.background = "#9f9f9f";
            document.getElementById("bonsai_trunk_plus_10").style.background = "#9f9f9f";
            document.getElementById("bonsai_roots_plus_10").style.background = "#9f9f9f";
        }
        
        if (bonsaixx.foliage_lp>0.09) {
            document.getElementById("bonsai_foliage_minus_0").style.background = "#db3e2ba1";
        }
        else {
            document.getElementById("bonsai_foliage_minus_0").style.background = "#9f9f9f";
        }
        if (bonsaixx.foliage_lp>0.99) {
            document.getElementById("bonsai_foliage_minus_1").style.background = "#db3e2ba1";
        }
        else {
            document.getElementById("bonsai_foliage_minus_1").style.background = "#9f9f9f";
        }
        if (bonsaixx.foliage_lp>9.99) {
            document.getElementById("bonsai_foliage_minus_10").style.background = "#db3e2ba1";
        }
        else {
            document.getElementById("bonsai_foliage_minus_10").style.background = "#9f9f9f";
        }
        if (bonsaixx.branches_lp>0.09) {
            document.getElementById("bonsai_branches_minus_0").style.background = "#db3e2ba1";
        }
        else {
            document.getElementById("bonsai_branches_minus_0").style.background = "#9f9f9f";
        }
        if (bonsaixx.branches_lp>0.99) {
            document.getElementById("bonsai_branches_minus_1").style.background = "#db3e2ba1";
        }
        else {
            document.getElementById("bonsai_branches_minus_1").style.background = "#9f9f9f";
        }
        if (bonsaixx.branches_lp>9.99) {
            document.getElementById("bonsai_branches_minus_10").style.background = "#db3e2ba1";
        }
        else {
            document.getElementById("bonsai_branches_minus_10").style.background = "#9f9f9f";
        }
        if (bonsaixx.trunk_lp>0.09) {
            document.getElementById("bonsai_trunk_minus_0").style.background = "#db3e2ba1";
        }
        else {
            document.getElementById("bonsai_trunk_minus_0").style.background = "#9f9f9f";
        }
        if (bonsaixx.trunk_lp>0.99) {
            document.getElementById("bonsai_trunk_minus_1").style.background = "#db3e2ba1";
        }
        else {
            document.getElementById("bonsai_trunk_minus_1").style.background = "#9f9f9f";
        }
        if (bonsaixx.trunk_lp>9.99) {
            document.getElementById("bonsai_trunk_minus_10").style.background = "#db3e2ba1";
        }
        else {
            document.getElementById("bonsai_trunk_minus_10").style.background = "#9f9f9f";
        }
        if (bonsaixx.roots_lp>0.09) {
            document.getElementById("bonsai_roots_minus_0").style.background = "#db3e2ba1";
        }
        else {
            document.getElementById("bonsai_roots_minus_0").style.background = "#9f9f9f";
        }
        if (bonsaixx.roots_lp>0.99) {
            document.getElementById("bonsai_roots_minus_1").style.background = "#db3e2ba1";
        }
        else {
            document.getElementById("bonsai_roots_minus_1").style.background = "#9f9f9f";
        }
        if (bonsaixx.roots_lp>9.99) {
            document.getElementById("bonsai_roots_minus_10").style.background = "#db3e2ba1";
        }
        else {
            document.getElementById("bonsai_roots_minus_10").style.background = "#9f9f9f";
        }
        
        $(document).ready(function(){
            $('#Growing1').show();
            $('#Growing2').hide();
            $('#Growing3').hide();
        });
        
        if (bonsaixx.level==100) {
            document.getElementById("Button_Grow").style.cursor= "auto";
            document.getElementById("Button_Grow").className = "";
            document.getElementById("Button_Grow_Text").innerHTML = "Maximum level reached";
            document.getElementById("Button_Grow_Zeit").innerHTML = ""; 
        }
        else {
            document.getElementById("Button_Grow").style.cursor= "pointer";
            document.getElementById("Button_Grow").className = "grey";
            document.getElementById("Button_Grow_Text").innerHTML = "Grow&nbsp;";
            document.getElementById("Button_Grow_Zeit").innerHTML = "("+timetracker(bonsaixx.growing_zeit)+")";          
        }
        
        document.getElementById("ChangePosition").style.cursor= "pointer";
        document.getElementById("ChangePosition").className = "grey";
    }
}

function rank_lvl (bonsaixx, a) {
    if (bonsaixx.level<15) {
        bonsaixx.rank_lvl=1;
        document.getElementById(a).innerHTML = "1+";
        return "Rank -";
    }
    else if (bonsaixx.level<30) {
        bonsaixx.rank_lvl=2;
        document.getElementById(a).innerHTML = "15+";
        return "Rank F";
    }
    else if (bonsaixx.level<45) {
        bonsaixx.rank_lvl=3;
        document.getElementById(a).innerHTML = "30+";
        return "Rank E";
    }
    else if (bonsaixx.level<60) {
        bonsaixx.rank_lvl=4;
        document.getElementById(a).innerHTML = "45+";
        return "Rank D";
    }
    else if (bonsaixx.level<70) {
        bonsaixx.rank_lvl=5;
        document.getElementById(a).innerHTML = "60+";
        return "Rank C";
    }
    else if (bonsaixx.level<80) {
        bonsaixx.rank_lvl=6;
        document.getElementById(a).innerHTML = "70+";
        return "Rank B";
    }
    else if (bonsaixx.level<90) {
        bonsaixx.rank_lvl=7;
        document.getElementById(a).innerHTML = "80+";
        return "Rank A";
    }
    else if (bonsaixx.level<95) {
        bonsaixx.rank_lvl=8;
        document.getElementById(a).innerHTML = "90+";
        return "Rank A+";
    }
    else if (bonsaixx.level<98) {
        bonsaixx.rank_lvl=9;
        document.getElementById(a).innerHTML = "95+";
        return "Rank S";
    }
    else if (bonsaixx.level<=100) {
        bonsaixx.rank_lvl=10;
        document.getElementById(a).innerHTML = "98+";
        return "Rank S+";
    }
}

function rank_tq (bonsaixx, a) {
    if (bonsaixx.treequality<=1) {
        document.getElementById(a).innerHTML = "一";
        return "Rank -";
    }
    else if (bonsaixx.treequality==2) {
        document.getElementById(a).innerHTML = "二";
        return "Rank F";
    }
    else if (bonsaixx.treequality==3) {
        document.getElementById(a).innerHTML = "三";
        return "Rank E";
    }
    else if (bonsaixx.treequality==4) {
        document.getElementById(a).innerHTML = "四";
        return "Rank D";
    }
    else if (bonsaixx.treequality==5) {
        document.getElementById(a).innerHTML = "五";
        return "Rank C";
    }
    else if (bonsaixx.treequality==6) {
        document.getElementById(a).innerHTML = "六";
        return "Rank B";
    }
    else if (bonsaixx.treequality==7) {
        document.getElementById(a).innerHTML = "七";
        return "Rank A";
    }
    else if (bonsaixx.treequality==8) {
        document.getElementById(a).innerHTML = "八";
        return "Rank A+";
    }
    else if (bonsaixx.treequality==9) {
        document.getElementById(a).innerHTML = "九";
        return "Rank S";
    }
    else if (bonsaixx.treequality==10) {
        document.getElementById(a).innerHTML = "十";
        return "Rank S+";
    }
}

function rank_cp (bonsaixx, a) {
    if ((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)<100) {
        bonsaixx.rank_cp=1;
        document.getElementById(a).innerHTML = "0+";
        return "Rank -";
    }
    else if ((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)<250) {
        bonsaixx.rank_cp=2;
        document.getElementById(a).innerHTML = "100+";
        return "Rank F";
    }
    else if ((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)<500) {
        bonsaixx.rank_cp=3;
        document.getElementById(a).innerHTML = "250+";
        return "Rank E";
    }
    else if ((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)<1000) {
        bonsaixx.rank_cp=4;
        document.getElementById(a).innerHTML = "500+";
        return "Rank D";
    }
    else if ((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)<1750) {
        bonsaixx.rank_cp=5;
        document.getElementById(a).innerHTML = "1000+";
        return "Rank C";
    }
    else if ((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)<3000) {
        bonsaixx.rank_cp=6;
        document.getElementById(a).innerHTML = "1750+";
        return "Rank B";
    }
    else if ((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)<4750) {
        bonsaixx.rank_cp=7;
        document.getElementById(a).innerHTML = "3000+";
        return "Rank A";
    }
    else if ((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)<7000) {
        bonsaixx.rank_cp=8;
        document.getElementById(a).innerHTML = "4750+";
        return "Rank A+";
    }
    else if ((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)<9750) {
        bonsaixx.rank_cp=9;
        document.getElementById(a).innerHTML = "7000+";
        return "Rank S";
    }
    else if ((bonsaixx.foliage+bonsaixx.branches+bonsaixx.trunk+bonsaixx.roots)<=10000) {
        bonsaixx.rank_cp=10;
        document.getElementById(a).innerHTML = "9750+";
        return "Rank S+";
    }
}

function rank_pot (bonsaixx, a) {
    if ((bonsaixx.newpotentialfoliage+bonsaixx.inheritedpotentialfoliage+bonsaixx.obtainedpotentialfoliage+
        bonsaixx.newpotentialbranches+bonsaixx.inheritedpotentialbranches+bonsaixx.obtainedpotentialbranches+
        bonsaixx.newpotentialtrunk+bonsaixx.inheritedpotentialtrunk+bonsaixx.obtainedpotentialtrunk+
        bonsaixx.newpotentialroots+bonsaixx.inheritedpotentialroots+bonsaixx.obtainedpotentialroots)<120) {
        bonsaixx.rank_pot=1;
        document.getElementById(a).innerHTML = "100+";
        return "Rank -";
    }
    else if ((bonsaixx.newpotentialfoliage+bonsaixx.inheritedpotentialfoliage+bonsaixx.obtainedpotentialfoliage+
        bonsaixx.newpotentialbranches+bonsaixx.inheritedpotentialbranches+bonsaixx.obtainedpotentialbranches+
        bonsaixx.newpotentialtrunk+bonsaixx.inheritedpotentialtrunk+bonsaixx.obtainedpotentialtrunk+
        bonsaixx.newpotentialroots+bonsaixx.inheritedpotentialroots+bonsaixx.obtainedpotentialroots)<140) {
        bonsaixx.rank_pot=2;
        document.getElementById(a).innerHTML = "120+";
        return "Rank F";
    }
    else if ((bonsaixx.newpotentialfoliage+bonsaixx.inheritedpotentialfoliage+bonsaixx.obtainedpotentialfoliage+
        bonsaixx.newpotentialbranches+bonsaixx.inheritedpotentialbranches+bonsaixx.obtainedpotentialbranches+
        bonsaixx.newpotentialtrunk+bonsaixx.inheritedpotentialtrunk+bonsaixx.obtainedpotentialtrunk+
        bonsaixx.newpotentialroots+bonsaixx.inheritedpotentialroots+bonsaixx.obtainedpotentialroots)<190) {
        bonsaixx.rank_pot=3;
        document.getElementById(a).innerHTML = "140+";
        return "Rank E";
    }
    else if ((bonsaixx.newpotentialfoliage+bonsaixx.inheritedpotentialfoliage+bonsaixx.obtainedpotentialfoliage+
        bonsaixx.newpotentialbranches+bonsaixx.inheritedpotentialbranches+bonsaixx.obtainedpotentialbranches+
        bonsaixx.newpotentialtrunk+bonsaixx.inheritedpotentialtrunk+bonsaixx.obtainedpotentialtrunk+
        bonsaixx.newpotentialroots+bonsaixx.inheritedpotentialroots+bonsaixx.obtainedpotentialroots)<240) {
        bonsaixx.rank_pot=4;
        document.getElementById(a).innerHTML = "190+";
        return "Rank D";
    }
    else if ((bonsaixx.newpotentialfoliage+bonsaixx.inheritedpotentialfoliage+bonsaixx.obtainedpotentialfoliage+
        bonsaixx.newpotentialbranches+bonsaixx.inheritedpotentialbranches+bonsaixx.obtainedpotentialbranches+
        bonsaixx.newpotentialtrunk+bonsaixx.inheritedpotentialtrunk+bonsaixx.obtainedpotentialtrunk+
        bonsaixx.newpotentialroots+bonsaixx.inheritedpotentialroots+bonsaixx.obtainedpotentialroots)<290) {
        bonsaixx.rank_pot=5;
        document.getElementById(a).innerHTML = "240+";
        return "Rank C";
    }
    else if ((bonsaixx.newpotentialfoliage+bonsaixx.inheritedpotentialfoliage+bonsaixx.obtainedpotentialfoliage+
        bonsaixx.newpotentialbranches+bonsaixx.inheritedpotentialbranches+bonsaixx.obtainedpotentialbranches+
        bonsaixx.newpotentialtrunk+bonsaixx.inheritedpotentialtrunk+bonsaixx.obtainedpotentialtrunk+
        bonsaixx.newpotentialroots+bonsaixx.inheritedpotentialroots+bonsaixx.obtainedpotentialroots)<340) {
        bonsaixx.rank_pot=6;
        document.getElementById(a).innerHTML = "290+";
        return "Rank B";
    }
    else if ((bonsaixx.newpotentialfoliage+bonsaixx.inheritedpotentialfoliage+bonsaixx.obtainedpotentialfoliage+
        bonsaixx.newpotentialbranches+bonsaixx.inheritedpotentialbranches+bonsaixx.obtainedpotentialbranches+
        bonsaixx.newpotentialtrunk+bonsaixx.inheritedpotentialtrunk+bonsaixx.obtainedpotentialtrunk+
        bonsaixx.newpotentialroots+bonsaixx.inheritedpotentialroots+bonsaixx.obtainedpotentialroots)<390) {
        bonsaixx.rank_pot=7;
        document.getElementById(a).innerHTML = "340+";
        return "Rank A";
    }
    else if ((bonsaixx.newpotentialfoliage+bonsaixx.inheritedpotentialfoliage+bonsaixx.obtainedpotentialfoliage+
        bonsaixx.newpotentialbranches+bonsaixx.inheritedpotentialbranches+bonsaixx.obtainedpotentialbranches+
        bonsaixx.newpotentialtrunk+bonsaixx.inheritedpotentialtrunk+bonsaixx.obtainedpotentialtrunk+
        bonsaixx.newpotentialroots+bonsaixx.inheritedpotentialroots+bonsaixx.obtainedpotentialroots)<440) {
        bonsaixx.rank_pot=8;
        document.getElementById(a).innerHTML = "390+";
        return "Rank A+";
    }
    else if ((bonsaixx.newpotentialfoliage+bonsaixx.inheritedpotentialfoliage+bonsaixx.obtainedpotentialfoliage+
        bonsaixx.newpotentialbranches+bonsaixx.inheritedpotentialbranches+bonsaixx.obtainedpotentialbranches+
        bonsaixx.newpotentialtrunk+bonsaixx.inheritedpotentialtrunk+bonsaixx.obtainedpotentialtrunk+
        bonsaixx.newpotentialroots+bonsaixx.inheritedpotentialroots+bonsaixx.obtainedpotentialroots)<490) {
        bonsaixx.rank_pot=9;
        document.getElementById(a).innerHTML = "440+";
        return "Rank S";
    }
    else if ((bonsaixx.newpotentialfoliage+bonsaixx.inheritedpotentialfoliage+bonsaixx.obtainedpotentialfoliage+
        bonsaixx.newpotentialbranches+bonsaixx.inheritedpotentialbranches+bonsaixx.obtainedpotentialbranches+
        bonsaixx.newpotentialtrunk+bonsaixx.inheritedpotentialtrunk+bonsaixx.obtainedpotentialtrunk+
        bonsaixx.newpotentialroots+bonsaixx.inheritedpotentialroots+bonsaixx.obtainedpotentialroots)<=500) {
        bonsaixx.rank_pot=10;
        document.getElementById(a).innerHTML = "490+";
        return "Rank S+";
    }
}

function rank_pres (bonsaixx, a) {
    if (bonsaixx.prestige<5) {
        bonsaixx.rank_pre=1;
        document.getElementById(a).innerHTML = "0+";
        return "Rank -";
    }
    else if (bonsaixx.prestige<10) {
        bonsaixx.rank_pre=2;
        document.getElementById(a).innerHTML = "5+";
        return "Rank F";
    }
    else if (bonsaixx.prestige<20) {
        bonsaixx.rank_pre=3;
        document.getElementById(a).innerHTML = "10+";
        return "Rank E";
    }
    else if (bonsaixx.prestige<30) {
        bonsaixx.rank_pre=4;
        document.getElementById(a).innerHTML = "20+";
        return "Rank D";
    }
    else if (bonsaixx.prestige<42) {
        bonsaixx.rank_pre=5;
        document.getElementById(a).innerHTML = "30+";
        return "Rank C";
    }
    else if (bonsaixx.prestige<54) {
        bonsaixx.rank_pre=6;
        document.getElementById(a).innerHTML = "42+";
        return "Rank B";
    }
    else if (bonsaixx.prestige<68) {
        bonsaixx.rank_pre=7;
        document.getElementById(a).innerHTML = "54+";
        return "Rank A";
    }
    else if (bonsaixx.prestige<82) {
        bonsaixx.rank_pre=8;
        document.getElementById(a).innerHTML = "68+";
        return "Rank A+";
    }
    else if (bonsaixx.prestige<98) {
        bonsaixx.rank_pre=9;
        document.getElementById(a).innerHTML = "82+";
        return "Rank S";
    }
    else if (bonsaixx.prestige<=100) {
        bonsaixx.rank_pre=10;
        document.getElementById(a).innerHTML = "98+";
        return "Rank S+";
    }
}

function rank_look (bonsaixx, a) {
    if (bonsaixx.shiny<=1) {
        document.getElementById(a).innerHTML = "Normal";
        return "Rank -";
    }
    else if (bonsaixx.shiny==2) {
        document.getElementById(a).innerHTML = "Blooming";
        return "Rank D";
    }
    else if (bonsaixx.shiny==3) {
        document.getElementById(a).innerHTML = "Shiny";
        return "Rank A";
    }
    else if (bonsaixx.shiny==4) {
        document.getElementById(a).innerHTML = "Shinybloom";
        return "Rank S+";
    }
}

function rank_calculation (bonsaixx) {
    if ((bonsaixx.rank_lvl+bonsaixx.rank_tq+bonsaixx.rank_cp+bonsaixx.rank_pot+bonsaixx.rank_pre+bonsaixx.rank_look)<=9) {
        bonsaixx.rank=1;
        return "-";
    }
    else if ((bonsaixx.rank_lvl+bonsaixx.rank_tq+bonsaixx.rank_cp+bonsaixx.rank_pot+bonsaixx.rank_pre+bonsaixx.rank_look)<=13) {
        bonsaixx.rank=2;
        return "F";
    }
    else if ((bonsaixx.rank_lvl+bonsaixx.rank_tq+bonsaixx.rank_cp+bonsaixx.rank_pot+bonsaixx.rank_pre+bonsaixx.rank_look)<=17) {
        bonsaixx.rank=3;
        return "E";
    }
    else if ((bonsaixx.rank_lvl+bonsaixx.rank_tq+bonsaixx.rank_cp+bonsaixx.rank_pot+bonsaixx.rank_pre+bonsaixx.rank_look)<=22) {
        bonsaixx.rank=4;
        return "D";
    }
    else if ((bonsaixx.rank_lvl+bonsaixx.rank_tq+bonsaixx.rank_cp+bonsaixx.rank_pot+bonsaixx.rank_pre+bonsaixx.rank_look)<=27) {
        bonsaixx.rank=5;
        return "C";
    }
    else if ((bonsaixx.rank_lvl+bonsaixx.rank_tq+bonsaixx.rank_cp+bonsaixx.rank_pot+bonsaixx.rank_pre+bonsaixx.rank_look)<=33) {
        bonsaixx.rank=6;
        return "B";
    }
    else if ((bonsaixx.rank_lvl+bonsaixx.rank_tq+bonsaixx.rank_cp+bonsaixx.rank_pot+bonsaixx.rank_pre+bonsaixx.rank_look)<=39) {
        bonsaixx.rank=7;
        return "A";
    }
    else if ((bonsaixx.rank_lvl+bonsaixx.rank_tq+bonsaixx.rank_cp+bonsaixx.rank_pot+bonsaixx.rank_pre+bonsaixx.rank_look)<=46) {
        bonsaixx.rank=8;
        return "A+";
    }
    else if ((bonsaixx.rank_lvl+bonsaixx.rank_tq+bonsaixx.rank_cp+bonsaixx.rank_pot+bonsaixx.rank_pre+bonsaixx.rank_look)<=53) {
        bonsaixx.rank=9;
        return "S";
    }
    else if ((bonsaixx.rank_lvl+bonsaixx.rank_tq+bonsaixx.rank_cp+bonsaixx.rank_pot+bonsaixx.rank_pre+bonsaixx.rank_look)==54) {
        bonsaixx.rank=10;
        return "S+";
    }
}

function potentiallabel (newppotential, inheritedpotential, obtainedpotential) {
    if (newppotential+inheritedpotential==1) {
        if (obtainedpotential>0) {
            return "Best +"+(obtainedpotential*100);
        }
        else {
            return "Best"; 
        }
    }
    else if (newppotential+inheritedpotential>=0.81) {
        if (obtainedpotential>0) {
            return "Great +"+(obtainedpotential*100);
        }
        else {
            return "Great"; 
        }            
    }
    else if (newppotential+inheritedpotential>=0.61) {
        if (obtainedpotential>0) {
            return "Good +"+(obtainedpotential*100);
        }
        else {
            return "Good"; 
        }          
    }
    else if (newppotential+inheritedpotential>=0.41) {
        if (obtainedpotential>0) {
            return "Fine +"+(obtainedpotential*100);
        }
        else {
            return "Fine"; 
        }           
    }
    else if (newppotential+inheritedpotential>=0.21) {
        if (obtainedpotential>0) {
            return "Decent +"+(obtainedpotential*100);
        }
        else {
            return "Decent"; 
        }           
    }
    else {
        if (obtainedpotential>0) {
            return "Little +"+(obtainedpotential*100);
        }
        else {
            return "Little"; 
        }            
    }
}

function potentiallabelpercentage (newppotential, inheritedpotential) {
    if (newppotential+inheritedpotential==1) {
        return "100%";
    }
    else if (newppotential+inheritedpotential>=0.81) {
        return "81-99%";             
    }
    else if (newppotential+inheritedpotential>=0.61) {
        return "61-80%";        
    }
    else if (newppotential+inheritedpotential>=0.41) {
        return "41-60%";          
    }
    else if (newppotential+inheritedpotential>=0.21) {
        return "21-40%";          
    }
    else {
        return "0-20%";           
    }
}

function timetracker(timevariable) {
    if (timevariable==0) {
        return '0 seconds'; 
    }
    else if (timevariable==1) {
        return timevariable+'&nbsp;second';
    }
    else if (timevariable<60) {
        return timevariable+'&nbsp;seconds';
    }
    else if (timevariable>=60 && timevariable<120) {
        state.minutes=Math.floor(timevariable/60);
        state.seconds=Math.floor(timevariable-(state.minutes*60));
        return state.minutes.toString().padStart(1, '0')+':'+state.seconds.toString().padStart(2, '0')+'&nbsp;minute';
    }
    else if (timevariable>=120 && timevariable<3600) {
        state.minutes=Math.floor(timevariable/60);
        state.seconds=Math.floor(timevariable-(state.minutes*60));
        return state.minutes.toString().padStart(1, '0')+':'+state.seconds.toString().padStart(2, '0')+'&nbsp;minutes';
    }
    else if (timevariable>=3600 && timevariable<7200) {
        state.hours=Math.floor(timevariable/60/60);
        state.minutes=Math.floor((timevariable/60)-(state.hours*60));
        state.seconds=Math.floor(timevariable-(state.minutes*60)-(state.hours*60*60));
        return state.hours.toString().padStart(1, '0')+':'+state.minutes.toString().padStart(2, '0')+':'+state.seconds.toString().padStart(2, '0')+'&nbsp;hour';
    }
    else if (timevariable>=7200) {
        state.hours=Math.floor(timevariable/60/60);
        state.minutes=Math.floor((timevariable/60)-(state.hours*60));
        state.seconds=Math.floor(timevariable-(state.minutes*60)-(state.hours*60*60));
        return state.hours.toString().padStart(1, '0')+':'+state.minutes.toString().padStart(2, '0')+':'+state.seconds.toString().padStart(2, '0')+'&nbsp;hours';
    }
}

/* Grow bonsai functions */
function GrowBonsaiWorkerPick(bonsaixx) {
    if (state.workers_available>0) {
        worker_picking();
        state.workers_available -=1;
        GrowBonsaiWorkerPick2 (bonsaixx, worker_picked_return());
        state.workerstandin=1;   
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;No workers available", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

function GrowBonsaiWorkerPick2 (bonsaixx, worker) {
    if (bonsaixx==bonsai001) {
        worker.growing = 1;  
    }
    else if (bonsaixx==bonsai002) {
        worker.growing = 2;   
    }
    else if (bonsaixx==bonsai003) {
        worker.growing = 3;  
    }
    else if (bonsaixx==bonsai004) {
        worker.growing = 4;   
    }
    else if (bonsaixx==bonsai005) {
        worker.growing = 5;  
    }
    else if (bonsaixx==bonsai006) {
        worker.growing = 6;   
    }
    else if (bonsaixx==bonsai007) {
        worker.growing = 7;  
    }
    else if (bonsaixx==bonsai008) {
        worker.growing = 8;   
    }
    else if (bonsaixx==bonsai009) {
        worker.growing = 9;   
    }
    else if (bonsaixx==bonsai010) {
        worker.growing = 10;  
    }
    else if (bonsaixx==bonsai011) {
        worker.growing = 11;  
    }
    else if (bonsaixx==bonsai012) {
        worker.growing = 12;   
    }
    else if (bonsaixx==bonsai013) {
        worker.growing = 13;   
    }
    else if (bonsaixx==bonsai014) {
        worker.growing = 14;   
    }
    else if (bonsaixx==bonsai015) {
        worker.growing = 15;   
    }
    else if (bonsaixx==bonsai016) {
        worker.growing = 16;   
    }
    else if (bonsaixx==bonsai017) {
        worker.growing = 17;   
    }
    else if (bonsaixx==bonsai018) {
        worker.growing = 18;   
    }
    else if (bonsaixx==bonsai019) {
        worker.growing = 19;   
    }
    else if (bonsaixx==bonsai020) {
        worker.growing = 20;   
    }
}

function GrowBonsai() {
    if (SearchBonsaiShowing().level==100) { //Maximum level check
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Maximum level reached", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    else {
        if (SearchBonsaiShowing().leftpoints>=0.1) { //All points distributed check
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Distribute all shape points first.<br>&nbsp;"+ SearchBonsaiShowing().leftpoints.toLocaleString('en', {minimumFractionDigits: 1}) +"&#32; points left.", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
        else {    
            if (SearchBonsaiShowing().growing==0) { //If bonsai is already growing check
                GrowBonsaiWorkerPick(SearchBonsaiShowing());
                if (state.workerstandin>0) {
                    SearchBonsaiShowing().growing = 1;
                    if (state.workerstandin==1) {
                        worker_picked_return().busy = 1;
                        document.getElementById("zeit_"+worker_picked2+"").innerHTML = "("+timetracker(SearchBonsaiShowing().growing_zeit)+"&nbsp;left)";
                        document.getElementById(""+worker_picked+"_task_img").innerHTML = '<img src="Images/growing.svg" width="20" height="20">';
                        document.getElementById(""+worker_picked+"_task").innerHTML = 'Growing';
                        $(document).ready(function(){
                            $('#'+worker_picked+'_task_none').hide();
                            $('#'+worker_picked+'_task_clicker').show();
                        });
                        worker_picked="";
                        worker_picked2="";
                        state.workerstandin = 0;
                    }
    
                    Bonsai_Details(SearchBonsaiShowing());
    
                    menu_change();
                    menu_shop_change();
                    menu_contests_change();
                    menu_changeA_change();
                }
                else {
                }
            }
            else { //If bonsai is already growing, nothing happens
                GiveCompost1();
            }
        }
    }
}

function GiveCompost1() {
    if (resources.compost1>0 & SearchBonsaiShowing().growing_zeit>60) {
        SearchBonsaiShowing().growing_zeit -=60;
        resources.compost1 -=1;
        document.getElementById("compost1").innerText = resources.compost1.toLocaleString('en', {minimumFractionDigits: 0});
        
        Bonsai_Details(SearchBonsaiShowing());
        SearchWorker();
    
        menu_change();
        menu_shop_change();
        menu_contests_change();
    }
    else {
    }
}

function GiveFertilizer1() {
    if (resources.fertilizer1>0 & SearchBonsaiShowing().growing_zeit>600) {
        SearchBonsaiShowing().growing_zeit -=600;
        resources.fertilizer1 -=1;
        document.getElementById("fertilizer1").innerText = resources.fertilizer1.toLocaleString('en', {minimumFractionDigits: 0});
        
        Bonsai_Details(SearchBonsaiShowing());
        SearchWorker();
    
        menu_change();
        menu_shop_change();
        menu_contests_change();
    }
    else {
    }
}

function SearchWorker() {
    if (SearchBonsaiShowing()==bonsai001) {
        SearchWorker2(1);
    }
    if (SearchBonsaiShowing()==bonsai002) {
        SearchWorker2(2);
    }
    if (SearchBonsaiShowing()==bonsai003) {
        SearchWorker2(3);
    }
    if (SearchBonsaiShowing()==bonsai004) {
        SearchWorker2(4);
    }
    if (SearchBonsaiShowing()==bonsai005) {
        SearchWorker2(5);
    }
    if (SearchBonsaiShowing()==bonsai006) {
        SearchWorker2(6);
    }
    if (SearchBonsaiShowing()==bonsai007) {
        SearchWorker2(7);
    }
    if (SearchBonsaiShowing()==bonsai008) {
        SearchWorker2(8);
    }
    if (SearchBonsaiShowing()==bonsai009) {
        SearchWorker2(9);
    }
    if (SearchBonsaiShowing()==bonsai010) {
        SearchWorker2(10);
    }
    if (SearchBonsaiShowing()==bonsai011) {
        SearchWorker2(11);
    }
    if (SearchBonsaiShowing()==bonsai012) {
        SearchWorker2(12);
    }
    if (SearchBonsaiShowing()==bonsai013) {
        SearchWorker2(13);
    }
    if (SearchBonsaiShowing()==bonsai014) {
        SearchWorker2(14);
    }
    if (SearchBonsaiShowing()==bonsai015) {
        SearchWorker2(15);
    }
    if (SearchBonsaiShowing()==bonsai016) {
        SearchWorker2(16);
    }
    if (SearchBonsaiShowing()==bonsai017) {
        SearchWorker2(17);
    }
    if (SearchBonsaiShowing()==bonsai018) {
        SearchWorker2(18);
    }
    if (SearchBonsaiShowing()==bonsai019) {
        SearchWorker2(19);
    }
    if (SearchBonsaiShowing()==bonsai020) {
        SearchWorker2(20);
    }
}

function SearchWorker2(x) {
    if (worker01.growing==x) {
        document.getElementById("zeit_worker01").innerHTML = "("+timetracker(SearchBonsaiShowing().growing_zeit)+"&nbsp;left)";
    }
    else if (worker02.growing==x) {
        document.getElementById("zeit_worker02").innerHTML = "("+timetracker(SearchBonsaiShowing().growing_zeit)+"&nbsp;left)";
    }
    else if (worker03.growing==x) {
        document.getElementById("zeit_worker03").innerHTML = "("+timetracker(SearchBonsaiShowing().growing_zeit)+"&nbsp;left)";
    }
}

/* Bonsai Growing Leftpoints Distribution Buttons*/
var btn_lm1 = document.getElementById("bonsai_level_minus_1");
var btn_lp1 = document.getElementById("bonsai_level_plus_1");
var btn_fm10 = document.getElementById("bonsai_foliage_minus_10");
var btn_fm1 = document.getElementById("bonsai_foliage_minus_1");
var btn_fm0 = document.getElementById("bonsai_foliage_minus_0");
var btn_fp0 = document.getElementById("bonsai_foliage_plus_0");
var btn_fp1 = document.getElementById("bonsai_foliage_plus_1");
var btn_fp10 = document.getElementById("bonsai_foliage_plus_10");
var btn_bm10 = document.getElementById("bonsai_branches_minus_10");
var btn_bm1 = document.getElementById("bonsai_branches_minus_1");
var btn_bm0 = document.getElementById("bonsai_branches_minus_0");
var btn_bp0 = document.getElementById("bonsai_branches_plus_0");
var btn_bp1 = document.getElementById("bonsai_branches_plus_1");
var btn_bp10 = document.getElementById("bonsai_branches_plus_10");
var btn_tm10 = document.getElementById("bonsai_trunk_minus_10");
var btn_tm1 = document.getElementById("bonsai_trunk_minus_1");
var btn_tm0 = document.getElementById("bonsai_trunk_minus_0");
var btn_tp0 = document.getElementById("bonsai_trunk_plus_0");
var btn_tp1 = document.getElementById("bonsai_trunk_plus_1");
var btn_tp10 = document.getElementById("bonsai_trunk_plus_10");
var btn_rm10 = document.getElementById("bonsai_roots_minus_10");
var btn_rm1 = document.getElementById("bonsai_roots_minus_1");
var btn_rm0 = document.getElementById("bonsai_roots_minus_0");
var btn_rp0 = document.getElementById("bonsai_roots_plus_0");
var btn_rp1 = document.getElementById("bonsai_roots_plus_1");
var btn_rp10 = document.getElementById("bonsai_roots_plus_10");

btn_lm1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (skills.patience>=1) {
            if (SearchBonsaiShowing().treequality==1) {
                if ((SearchBonsaiShowing().level+1)<SearchBonsaiShowing().level_new) {
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new-1; i++) {growtime += grow_time_tq1[i]};
                    SearchBonsaiShowing().growing_zeit= growtime;
                    
                    SearchBonsaiShowing().foliage_lp=0;
                    SearchBonsaiShowing().branches_lp=0;
                    SearchBonsaiShowing().trunk_lp=0;
                    SearchBonsaiShowing().roots_lp=0;
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new-1; i++) {
                        SearchBonsaiShowing().foliage_new=0;
                        SearchBonsaiShowing().branches_new=0;
                        SearchBonsaiShowing().trunk_new=0;
                        SearchBonsaiShowing().roots_new=0;
                        SearchBonsaiShowing().leftpoints=0;
                        if (i+1<=10) {
                            if (level_cp_tq1[0]==2) {
                                SearchBonsaiShowing().foliage_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 1)))* 10) / 10;
                                SearchBonsaiShowing().branches_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 2)))* 10) / 10;
                                SearchBonsaiShowing().trunk_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 3)))* 10) / 10;
                                SearchBonsaiShowing().roots_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 4)))* 10) / 10;
                            }
                            else {
                                cpdistribution2(SearchBonsaiShowing(), level_cp_tq1, 0);
                            }
                        }
                        else if (i+1<=20) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq1, 1);
                        }
                        else if (i+1<=30) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq1, 2);
                        }
                        else if (i+1<=40) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq1, 3);
                        }
                        else if (i+1<=50) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq1, 4);
                        }
                        foliage_new +=SearchBonsaiShowing().foliage_new;
                        branches_new +=SearchBonsaiShowing().branches_new;
                        trunk_new +=SearchBonsaiShowing().trunk_new;
                        roots_new +=SearchBonsaiShowing().roots_new;
                        leftpoints_new +=SearchBonsaiShowing().leftpoints;
                    }
                    SearchBonsaiShowing().foliage_new= foliage_new;
                    SearchBonsaiShowing().branches_new= branches_new;
                    SearchBonsaiShowing().trunk_new= trunk_new;
                    SearchBonsaiShowing().roots_new= roots_new;
                    SearchBonsaiShowing().leftpoints= leftpoints_new;
                    
                    cpdistributionaftercare(SearchBonsaiShowing());
                    
                    SearchBonsaiShowing().level_new -=1;
                    SearchBonsaiShowing().level_lp -=1;
                    Bonsai_Growing(SearchBonsaiShowing());
                    growtime=0;
                    foliage_new=0;
                    branches_new=0;
                    trunk_new=0;
                    roots_new=0; 
                    leftpoints_new=0;
                } 
            }
            if (SearchBonsaiShowing().treequality==2) {
                if ((SearchBonsaiShowing().level+1)<SearchBonsaiShowing().level_new) {
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new-1; i++) {growtime += grow_time_tq2[i]};
                    SearchBonsaiShowing().growing_zeit= growtime;
                    
                    SearchBonsaiShowing().foliage_lp=0;
                    SearchBonsaiShowing().branches_lp=0;
                    SearchBonsaiShowing().trunk_lp=0;
                    SearchBonsaiShowing().roots_lp=0;
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new-1; i++) {
                        SearchBonsaiShowing().foliage_new=0;
                        SearchBonsaiShowing().branches_new=0;
                        SearchBonsaiShowing().trunk_new=0;
                        SearchBonsaiShowing().roots_new=0;
                        SearchBonsaiShowing().leftpoints=0;
                        if (i+1<=10) {
                            if (level_cp_tq2[0]==2) {
                                SearchBonsaiShowing().foliage_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 1)))* 10) / 10;
                                SearchBonsaiShowing().branches_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 2)))* 10) / 10;
                                SearchBonsaiShowing().trunk_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 3)))* 10) / 10;
                                SearchBonsaiShowing().roots_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 4)))* 10) / 10;
                            }
                            else {
                                cpdistribution2(SearchBonsaiShowing(), level_cp_tq2, 0);
                            }
                        }
                        else if (i+1<=20) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq2, 1);
                        }
                        else if (i+1<=30) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq2, 2);
                        }
                        else if (i+1<=40) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq2, 3);
                        }
                        else if (i+1<=50) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq2, 4);
                        }
                        foliage_new +=SearchBonsaiShowing().foliage_new;
                        branches_new +=SearchBonsaiShowing().branches_new;
                        trunk_new +=SearchBonsaiShowing().trunk_new;
                        roots_new +=SearchBonsaiShowing().roots_new;
                        leftpoints_new +=SearchBonsaiShowing().leftpoints;
                    }
                    SearchBonsaiShowing().foliage_new= foliage_new;
                    SearchBonsaiShowing().branches_new= branches_new;
                    SearchBonsaiShowing().trunk_new= trunk_new;
                    SearchBonsaiShowing().roots_new= roots_new;
                    SearchBonsaiShowing().leftpoints= leftpoints_new;
                    
                    cpdistributionaftercare(SearchBonsaiShowing());
                    
                    SearchBonsaiShowing().level_new -=1;
                    SearchBonsaiShowing().level_lp -=1;
                    Bonsai_Growing(SearchBonsaiShowing());
                    growtime=0;
                    foliage_new=0;
                    branches_new=0;
                    trunk_new=0;
                    roots_new=0; 
                    leftpoints_new=0;
                } 
            }
            if (SearchBonsaiShowing().treequality==3) {
                if ((SearchBonsaiShowing().level+1)<SearchBonsaiShowing().level_new) {
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new-1; i++) {growtime += grow_time_tq3[i]};
                    SearchBonsaiShowing().growing_zeit= growtime;
                    
                    SearchBonsaiShowing().foliage_lp=0;
                    SearchBonsaiShowing().branches_lp=0;
                    SearchBonsaiShowing().trunk_lp=0;
                    SearchBonsaiShowing().roots_lp=0;
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new-1; i++) {
                        SearchBonsaiShowing().foliage_new=0;
                        SearchBonsaiShowing().branches_new=0;
                        SearchBonsaiShowing().trunk_new=0;
                        SearchBonsaiShowing().roots_new=0;
                        SearchBonsaiShowing().leftpoints=0;
                        if (i+1<=10) {
                            if (level_cp_tq3[0]==2) {
                                SearchBonsaiShowing().foliage_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 1)))* 10) / 10;
                                SearchBonsaiShowing().branches_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 2)))* 10) / 10;
                                SearchBonsaiShowing().trunk_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 3)))* 10) / 10;
                                SearchBonsaiShowing().roots_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 4)))* 10) / 10;
                            }
                            else {
                                cpdistribution2(SearchBonsaiShowing(), level_cp_tq3, 0);
                            }
                        }
                        else if (i+1<=20) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq3, 1);
                        }
                        else if (i+1<=30) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq3, 2);
                        }
                        else if (i+1<=40) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq3, 3);
                        }
                        else if (i+1<=50) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq3, 4);
                        }
                        foliage_new +=SearchBonsaiShowing().foliage_new;
                        branches_new +=SearchBonsaiShowing().branches_new;
                        trunk_new +=SearchBonsaiShowing().trunk_new;
                        roots_new +=SearchBonsaiShowing().roots_new;
                        leftpoints_new +=SearchBonsaiShowing().leftpoints;
                    }
                    SearchBonsaiShowing().foliage_new= foliage_new;
                    SearchBonsaiShowing().branches_new= branches_new;
                    SearchBonsaiShowing().trunk_new= trunk_new;
                    SearchBonsaiShowing().roots_new= roots_new;
                    SearchBonsaiShowing().leftpoints= leftpoints_new;
                    
                    cpdistributionaftercare(SearchBonsaiShowing());
                    
                    SearchBonsaiShowing().level_new -=1;
                    SearchBonsaiShowing().level_lp -=1;
                    Bonsai_Growing(SearchBonsaiShowing());
                    growtime=0;
                    foliage_new=0;
                    branches_new=0;
                    trunk_new=0;
                    roots_new=0; 
                    leftpoints_new=0;
                } 
            }
        }
    }
}

btn_lp1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (skills.patience>=1) {
            if (SearchBonsaiShowing().treequality==1) {
                for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new+1; i++) {growtime += grow_time_tq1[i]};
                if (growtime<3600) {
                    SearchBonsaiShowing().growing_zeit= growtime;
                    
                    SearchBonsaiShowing().foliage_lp=0;
                    SearchBonsaiShowing().branches_lp=0;
                    SearchBonsaiShowing().trunk_lp=0;
                    SearchBonsaiShowing().roots_lp=0;
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new+1; i++) {
                        SearchBonsaiShowing().foliage_new=0;
                        SearchBonsaiShowing().branches_new=0;
                        SearchBonsaiShowing().trunk_new=0;
                        SearchBonsaiShowing().roots_new=0;
                        SearchBonsaiShowing().leftpoints=0;
                        if (i+1<=10) {
                            if (level_cp_tq1[0]==2) {
                                SearchBonsaiShowing().foliage_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 1)))* 10) / 10;
                                SearchBonsaiShowing().branches_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 2)))* 10) / 10;
                                SearchBonsaiShowing().trunk_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 3)))* 10) / 10;
                                SearchBonsaiShowing().roots_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 4)))* 10) / 10;
                            }
                            else {
                                cpdistribution2(SearchBonsaiShowing(), level_cp_tq1, 0);
                            }
                        }
                        else if (i+1<=20) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq1, 1);
                        }
                        else if (i+1<=30) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq1, 2);
                        }
                        else if (i+1<=40) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq1, 3);
                        }
                        else if (i+1<=50) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq1, 4);
                        }
                        foliage_new +=SearchBonsaiShowing().foliage_new;
                        branches_new +=SearchBonsaiShowing().branches_new;
                        trunk_new +=SearchBonsaiShowing().trunk_new;
                        roots_new +=SearchBonsaiShowing().roots_new;
                        leftpoints_new +=SearchBonsaiShowing().leftpoints;
                    }
                    SearchBonsaiShowing().foliage_new= foliage_new;
                    SearchBonsaiShowing().branches_new= branches_new;
                    SearchBonsaiShowing().trunk_new= trunk_new;
                    SearchBonsaiShowing().roots_new= roots_new;
                    SearchBonsaiShowing().leftpoints= leftpoints_new;
                    
                    cpdistributionaftercare(SearchBonsaiShowing());
                    
                    SearchBonsaiShowing().level_new +=1;
                    SearchBonsaiShowing().level_lp +=1;
                    Bonsai_Growing(SearchBonsaiShowing());
                    growtime=0;
                    foliage_new=0;
                    branches_new=0;
                    trunk_new=0;
                    roots_new=0; 
                    leftpoints_new=0;
                }
                else {
                    growtime=0;
                }
            }
            if (SearchBonsaiShowing().treequality==2) {
                for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new+1; i++) {growtime += grow_time_tq2[i]};
                if (growtime<3600) {
                    SearchBonsaiShowing().growing_zeit= growtime;
                    
                    SearchBonsaiShowing().foliage_lp=0;
                    SearchBonsaiShowing().branches_lp=0;
                    SearchBonsaiShowing().trunk_lp=0;
                    SearchBonsaiShowing().roots_lp=0;
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new+1; i++) {
                        SearchBonsaiShowing().foliage_new=0;
                        SearchBonsaiShowing().branches_new=0;
                        SearchBonsaiShowing().trunk_new=0;
                        SearchBonsaiShowing().roots_new=0;
                        SearchBonsaiShowing().leftpoints=0;
                        if (i+1<=10) {
                            if (level_cp_tq2[0]==2) {
                                SearchBonsaiShowing().foliage_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 1)))* 10) / 10;
                                SearchBonsaiShowing().branches_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 2)))* 10) / 10;
                                SearchBonsaiShowing().trunk_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 3)))* 10) / 10;
                                SearchBonsaiShowing().roots_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 4)))* 10) / 10;
                            }
                            else {
                                cpdistribution2(SearchBonsaiShowing(), level_cp_tq2, 0);
                            }
                        }
                        else if (i+1<=20) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq2, 1);
                        }
                        else if (i+1<=30) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq2, 2);
                        }
                        else if (i+1<=40) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq2, 3);
                        }
                        else if (i+1<=50) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq2, 4);
                        }
                        foliage_new +=SearchBonsaiShowing().foliage_new;
                        branches_new +=SearchBonsaiShowing().branches_new;
                        trunk_new +=SearchBonsaiShowing().trunk_new;
                        roots_new +=SearchBonsaiShowing().roots_new;
                        leftpoints_new +=SearchBonsaiShowing().leftpoints;
                    }
                    SearchBonsaiShowing().foliage_new= foliage_new;
                    SearchBonsaiShowing().branches_new= branches_new;
                    SearchBonsaiShowing().trunk_new= trunk_new;
                    SearchBonsaiShowing().roots_new= roots_new;
                    SearchBonsaiShowing().leftpoints= leftpoints_new;
                    
                    cpdistributionaftercare(SearchBonsaiShowing());
                    
                    SearchBonsaiShowing().level_new +=1;
                    SearchBonsaiShowing().level_lp +=1;
                    Bonsai_Growing(SearchBonsaiShowing());
                    growtime=0;
                    foliage_new=0;
                    branches_new=0;
                    trunk_new=0;
                    roots_new=0; 
                    leftpoints_new=0;
                }
                else {
                    growtime=0;
                }
            }
            if (SearchBonsaiShowing().treequality==3) {
                for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new+1; i++) {growtime += grow_time_tq3[i]};
                if (growtime<3600) {
                    SearchBonsaiShowing().growing_zeit= growtime;
                    
                    SearchBonsaiShowing().foliage_lp=0;
                    SearchBonsaiShowing().branches_lp=0;
                    SearchBonsaiShowing().trunk_lp=0;
                    SearchBonsaiShowing().roots_lp=0;
                    for (let i = SearchBonsaiShowing().level; i < SearchBonsaiShowing().level_new+1; i++) {
                        SearchBonsaiShowing().foliage_new=0;
                        SearchBonsaiShowing().branches_new=0;
                        SearchBonsaiShowing().trunk_new=0;
                        SearchBonsaiShowing().roots_new=0;
                        SearchBonsaiShowing().leftpoints=0;
                        if (i+1<=10) {
                            if (level_cp_tq3[0]==2) {
                                SearchBonsaiShowing().foliage_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 1)))* 10) / 10;
                                SearchBonsaiShowing().branches_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 2)))* 10) / 10;
                                SearchBonsaiShowing().trunk_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 3)))* 10) / 10;
                                SearchBonsaiShowing().roots_new = Math.round((((2/4)*naturedistribution(SearchBonsaiShowing(), 4)))* 10) / 10;
                            }
                            else {
                                cpdistribution2(SearchBonsaiShowing(), level_cp_tq3, 0);
                            }
                        }
                        else if (i+1<=20) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq3, 1);
                        }
                        else if (i+1<=30) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq3, 2);
                        }
                        else if (i+1<=40) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq3, 3);
                        }
                        else if (i+1<=50) {
                            cpdistribution2(SearchBonsaiShowing(), level_cp_tq3, 4);
                        }
                        foliage_new +=SearchBonsaiShowing().foliage_new;
                        branches_new +=SearchBonsaiShowing().branches_new;
                        trunk_new +=SearchBonsaiShowing().trunk_new;
                        roots_new +=SearchBonsaiShowing().roots_new;
                        leftpoints_new +=SearchBonsaiShowing().leftpoints;
                    }
                    SearchBonsaiShowing().foliage_new= foliage_new;
                    SearchBonsaiShowing().branches_new= branches_new;
                    SearchBonsaiShowing().trunk_new= trunk_new;
                    SearchBonsaiShowing().roots_new= roots_new;
                    SearchBonsaiShowing().leftpoints= leftpoints_new;
                    
                    cpdistributionaftercare(SearchBonsaiShowing());
                    
                    SearchBonsaiShowing().level_new +=1;
                    SearchBonsaiShowing().level_lp +=1;
                    Bonsai_Growing(SearchBonsaiShowing());
                    growtime=0;
                    foliage_new=0;
                    branches_new=0;
                    trunk_new=0;
                    roots_new=0; 
                    leftpoints_new=0;
                }
                else {
                    growtime=0;
                }
            }

        }
    }
}

/* Distribution Foliage Buttons*/
btn_fm10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().foliage_lp>9.99) {
            SearchBonsaiShowing().leftpoints +=10;
            SearchBonsaiShowing().foliage_new -=10;
            SearchBonsaiShowing().foliage_lp -=10;
            document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_foliage_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_f_buttoncheck_m();
        }
    }
}

btn_fm1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().foliage_lp>0.99) {
            SearchBonsaiShowing().leftpoints +=1;
            SearchBonsaiShowing().foliage_new -=1;
            SearchBonsaiShowing().foliage_lp -=1;
            document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_foliage_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_f_buttoncheck_m();
        }
    }
}

btn_fm0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().foliage_lp>0.09) {
            SearchBonsaiShowing().leftpoints +=0.1;
            SearchBonsaiShowing().foliage_new -=0.1;
            SearchBonsaiShowing().foliage_lp -=0.1;
            document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_foliage_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_f_buttoncheck_m();
        }
    }
}

function leftpoints_f_buttoncheck_m() {
    if (SearchBonsaiShowing().foliage_lp<9.99) {
        document.getElementById("bonsai_foliage_minus_10").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().foliage_lp<0.99) {
        document.getElementById("bonsai_foliage_minus_1").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().foliage_lp<0.09) {
        document.getElementById("bonsai_foliage_minus_0").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().leftpoints>0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.background = "#38cc2ba1";
        document.getElementById("bonsai_branches_plus_0").style.background = "#38cc2ba1";
        document.getElementById("bonsai_trunk_plus_0").style.background = "#38cc2ba1";
        document.getElementById("bonsai_roots_plus_0").style.background = "#38cc2ba1";
    }
    if (SearchBonsaiShowing().leftpoints>0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.background = "#38cc2ba1";
        document.getElementById("bonsai_branches_plus_1").style.background = "#38cc2ba1";
        document.getElementById("bonsai_trunk_plus_1").style.background = "#38cc2ba1";
        document.getElementById("bonsai_roots_plus_1").style.background = "#38cc2ba1";
    }
    if (SearchBonsaiShowing().leftpoints>9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.background = "#38cc2ba1";
        document.getElementById("bonsai_branches_plus_10").style.background = "#38cc2ba1";
        document.getElementById("bonsai_trunk_plus_10").style.background = "#38cc2ba1";
        document.getElementById("bonsai_roots_plus_10").style.background = "#38cc2ba1";
    }
}

btn_fp0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.09) {
            SearchBonsaiShowing().foliage_lp +=0.1;
            SearchBonsaiShowing().foliage_new +=0.1;
            SearchBonsaiShowing().leftpoints -=0.1;
            document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_foliage_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_f_buttoncheck_p();
        }
    }
}

btn_fp1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) {
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.99) {
            SearchBonsaiShowing().foliage_lp +=1;
            SearchBonsaiShowing().foliage_new +=1;
            SearchBonsaiShowing().leftpoints -=1;
            document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_foliage_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_f_buttoncheck_p();
        }
    }
}

btn_fp10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>9.99) {
            SearchBonsaiShowing().foliage_lp +=10;
            SearchBonsaiShowing().foliage_new +=10;
            SearchBonsaiShowing().leftpoints -=10;
            document.getElementById("bonsai_foliage_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().foliage_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_foliage_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_f_buttoncheck_p();
        }
    }
}

function leftpoints_f_buttoncheck_p() {
    if (SearchBonsaiShowing().foliage_lp>9.99) {
        document.getElementById("bonsai_foliage_minus_10").style.background = "#db3e2ba1";
    }
    if (SearchBonsaiShowing().foliage_lp>0.99) {
        document.getElementById("bonsai_foliage_minus_1").style.background = "#db3e2ba1";
    }
    if (SearchBonsaiShowing().foliage_lp>0.09) {
        document.getElementById("bonsai_foliage_minus_0").style.background = "#db3e2ba1";
    }
    if (SearchBonsaiShowing().leftpoints<0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_plus_0").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().leftpoints<0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_plus_1").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().leftpoints<9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_plus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_plus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_plus_10").style.background = "#9f9f9f";
    }
}

/* Distribution Branches Buttons*/
btn_bm10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().branches_lp>9.99) {
            SearchBonsaiShowing().leftpoints +=10;
            SearchBonsaiShowing().branches_new -=10;
            SearchBonsaiShowing().branches_lp -=10;
            document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_branches_new2").innerHTML = (Math.round((SearchBonsaiShowing().branches_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_b_buttoncheck_m();
        }
    }
}

btn_bm1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().branches_lp>0.99) {
            SearchBonsaiShowing().leftpoints +=1;
            SearchBonsaiShowing().branches_new -=1;
            SearchBonsaiShowing().branches_lp -=1;
            document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_branches_new2").innerHTML = (Math.round((SearchBonsaiShowing().branches_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_b_buttoncheck_m();
        }
    }
}

btn_bm0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().branches_lp>0.09) {
            SearchBonsaiShowing().leftpoints +=0.1;
            SearchBonsaiShowing().branches_new -=0.1;
            SearchBonsaiShowing().branches_lp -=0.1;
            document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_branches_new2").innerHTML = (Math.round((SearchBonsaiShowing().branches_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_b_buttoncheck_m();
        }
    }
}

function leftpoints_b_buttoncheck_m() {
    if (SearchBonsaiShowing().branches_lp<9.99) {
        document.getElementById("bonsai_branches_minus_10").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().branches_lp<0.99) {
        document.getElementById("bonsai_branches_minus_1").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().branches_lp<0.09) {
        document.getElementById("bonsai_branches_minus_0").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().leftpoints>0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.background = "#38cc2ba1";
        document.getElementById("bonsai_branches_plus_0").style.background = "#38cc2ba1";
        document.getElementById("bonsai_trunk_plus_0").style.background = "#38cc2ba1";
        document.getElementById("bonsai_roots_plus_0").style.background = "#38cc2ba1";
    }
    if (SearchBonsaiShowing().leftpoints>0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.background = "#38cc2ba1";
        document.getElementById("bonsai_branches_plus_1").style.background = "#38cc2ba1";
        document.getElementById("bonsai_trunk_plus_1").style.background = "#38cc2ba1";
        document.getElementById("bonsai_roots_plus_1").style.background = "#38cc2ba1";
    }
    if (SearchBonsaiShowing().leftpoints>9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.background = "#38cc2ba1";
        document.getElementById("bonsai_branches_plus_10").style.background = "#38cc2ba1";
        document.getElementById("bonsai_trunk_plus_10").style.background = "#38cc2ba1";
        document.getElementById("bonsai_roots_plus_10").style.background = "#38cc2ba1";
    }
}

btn_bp0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.09) {
            SearchBonsaiShowing().branches_lp +=0.1;
            SearchBonsaiShowing().branches_new +=0.1;
            SearchBonsaiShowing().leftpoints -=0.1;
            document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_branches_new2").innerHTML = (Math.round((SearchBonsaiShowing().branches_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_b_buttoncheck_p();
        }
    }
}

btn_bp1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) {
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.99) {
            SearchBonsaiShowing().branches_lp +=1;
            SearchBonsaiShowing().branches_new +=1;
            SearchBonsaiShowing().leftpoints -=1;
            document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_branches_new2").innerHTML = (Math.round((SearchBonsaiShowing().branches_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_b_buttoncheck_p();
        }
    }
}

btn_bp10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>9.99) {
            SearchBonsaiShowing().branches_lp +=10;
            SearchBonsaiShowing().branches_new +=10;
            SearchBonsaiShowing().leftpoints -=10;
            document.getElementById("bonsai_branches_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().branches_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_branches_new2").innerHTML = (Math.round((SearchBonsaiShowing().branches_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_b_buttoncheck_p();
        }
    }
}

function leftpoints_b_buttoncheck_p() {
    if (SearchBonsaiShowing().branches_lp>9.99) {
        document.getElementById("bonsai_branches_minus_10").style.background = "#db3e2ba1";
    }
    if (SearchBonsaiShowing().branches_lp>0.99) {
        document.getElementById("bonsai_branches_minus_1").style.background = "#db3e2ba1";
    }
    if (SearchBonsaiShowing().branches_lp>0.09) {
        document.getElementById("bonsai_branches_minus_0").style.background = "#db3e2ba1";
    }
    if (SearchBonsaiShowing().leftpoints<0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_plus_0").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().leftpoints<0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_plus_1").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().leftpoints<9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_plus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_plus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_plus_10").style.background = "#9f9f9f";
    }
}

/* Distribution Trunk Buttons*/
btn_tm10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().trunk_lp>9.99) {
            SearchBonsaiShowing().leftpoints +=10;
            SearchBonsaiShowing().trunk_new -=10;
            SearchBonsaiShowing().trunk_lp -=10;
            document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_trunk_new2").innerHTML = (Math.round((SearchBonsaiShowing().trunk_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_t_buttoncheck_m();
        }
    }
}

btn_tm1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().trunk_lp>0.99) {
            SearchBonsaiShowing().leftpoints +=1;
            SearchBonsaiShowing().trunk_new -=1;
            SearchBonsaiShowing().trunk_lp -=1;
            document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_trunk_new2").innerHTML = (Math.round((SearchBonsaiShowing().trunk_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_t_buttoncheck_m();
        }
    }
}

btn_tm0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().trunk_lp>0.09) {
            SearchBonsaiShowing().leftpoints +=0.1;
            SearchBonsaiShowing().trunk_new -=0.1;
            SearchBonsaiShowing().trunk_lp -=0.1;
            document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_trunk_new2").innerHTML = (Math.round((SearchBonsaiShowing().trunk_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_t_buttoncheck_m();
        }
    }
}

function leftpoints_t_buttoncheck_m() {
    if (SearchBonsaiShowing().trunk_lp<9.99) {
        document.getElementById("bonsai_trunk_minus_10").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().trunk_lp<0.99) {
        document.getElementById("bonsai_trunk_minus_1").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().trunk_lp<0.09) {
        document.getElementById("bonsai_trunk_minus_0").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().leftpoints>0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.background = "#38cc2ba1";
        document.getElementById("bonsai_branches_plus_0").style.background = "#38cc2ba1";
        document.getElementById("bonsai_trunk_plus_0").style.background = "#38cc2ba1";
        document.getElementById("bonsai_roots_plus_0").style.background = "#38cc2ba1";
    }
    if (SearchBonsaiShowing().leftpoints>0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.background = "#38cc2ba1";
        document.getElementById("bonsai_branches_plus_1").style.background = "#38cc2ba1";
        document.getElementById("bonsai_trunk_plus_1").style.background = "#38cc2ba1";
        document.getElementById("bonsai_roots_plus_1").style.background = "#38cc2ba1";
    }
    if (SearchBonsaiShowing().leftpoints>9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.background = "#38cc2ba1";
        document.getElementById("bonsai_branches_plus_10").style.background = "#38cc2ba1";
        document.getElementById("bonsai_trunk_plus_10").style.background = "#38cc2ba1";
        document.getElementById("bonsai_roots_plus_10").style.background = "#38cc2ba1";
    }
}

btn_tp0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.09) {
            SearchBonsaiShowing().trunk_lp +=0.1;
            SearchBonsaiShowing().trunk_new +=0.1;
            SearchBonsaiShowing().leftpoints -=0.1;
            document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_trunk_new2").innerHTML = (Math.round((SearchBonsaiShowing().trunk_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_t_buttoncheck_p();
        }
    }
}

btn_tp1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) {
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.99) {
            SearchBonsaiShowing().trunk_lp +=1;
            SearchBonsaiShowing().trunk_new +=1;
            SearchBonsaiShowing().leftpoints -=1;
            document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_trunk_new2").innerHTML = (Math.round((SearchBonsaiShowing().trunk_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_t_buttoncheck_p();
        }
    }
}

btn_tp10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>9.99) {
            SearchBonsaiShowing().trunk_lp +=10;
            SearchBonsaiShowing().trunk_new +=10;
            SearchBonsaiShowing().leftpoints -=10;
            document.getElementById("bonsai_trunk_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().trunk_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_trunk_new2").innerHTML = (Math.round((SearchBonsaiShowing().trunk_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_t_buttoncheck_p();
        }
    }
}

function leftpoints_t_buttoncheck_p() {
    if (SearchBonsaiShowing().trunk_lp>9.99) {
        document.getElementById("bonsai_trunk_minus_10").style.background = "#db3e2ba1";
    }
    if (SearchBonsaiShowing().trunk_lp>0.99) {
        document.getElementById("bonsai_trunk_minus_1").style.background = "#db3e2ba1";
    }
    if (SearchBonsaiShowing().trunk_lp>0.09) {
        document.getElementById("bonsai_trunk_minus_0").style.background = "#db3e2ba1";
    }
    if (SearchBonsaiShowing().leftpoints<0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_plus_0").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().leftpoints<0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_plus_1").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().leftpoints<9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_plus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_plus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_plus_10").style.background = "#9f9f9f";
    }
}

/* Distribution Roots Buttons*/
btn_rm10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().roots_lp>9.99) {
            SearchBonsaiShowing().leftpoints +=10;
            SearchBonsaiShowing().roots_new -=10;
            SearchBonsaiShowing().roots_lp -=10;
            document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_roots_new2").innerHTML = (Math.round((SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_r_buttoncheck_m();
        }
    }
}

btn_rm1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().roots_lp>0.99) {
            SearchBonsaiShowing().leftpoints +=1;
            SearchBonsaiShowing().roots_new -=1;
            SearchBonsaiShowing().roots_lp -=1;
            document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_roots_new2").innerHTML = (Math.round((SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_r_buttoncheck_m();
        }
    }
}

btn_rm0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().roots_lp>0.09) {
            SearchBonsaiShowing().leftpoints +=0.1;
            SearchBonsaiShowing().roots_new -=0.1;
            SearchBonsaiShowing().roots_lp -=0.1;
            document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_roots_new2").innerHTML = (Math.round((SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_r_buttoncheck_m();
        }
    }
}

function leftpoints_r_buttoncheck_m() {
    if (SearchBonsaiShowing().roots_lp<9.99) {
        document.getElementById("bonsai_roots_minus_10").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().roots_lp<0.99) {
        document.getElementById("bonsai_roots_minus_1").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().roots_lp<0.09) {
        document.getElementById("bonsai_roots_minus_0").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().leftpoints>0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.background = "#38cc2ba1";
        document.getElementById("bonsai_branches_plus_0").style.background = "#38cc2ba1";
        document.getElementById("bonsai_trunk_plus_0").style.background = "#38cc2ba1";
        document.getElementById("bonsai_roots_plus_0").style.background = "#38cc2ba1";
    }
    if (SearchBonsaiShowing().leftpoints>0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.background = "#38cc2ba1";
        document.getElementById("bonsai_branches_plus_1").style.background = "#38cc2ba1";
        document.getElementById("bonsai_trunk_plus_1").style.background = "#38cc2ba1";
        document.getElementById("bonsai_roots_plus_1").style.background = "#38cc2ba1";
    }
    if (SearchBonsaiShowing().leftpoints>9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.background = "#38cc2ba1";
        document.getElementById("bonsai_branches_plus_10").style.background = "#38cc2ba1";
        document.getElementById("bonsai_trunk_plus_10").style.background = "#38cc2ba1";
        document.getElementById("bonsai_roots_plus_10").style.background = "#38cc2ba1";
    }
}

btn_rp0.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.09) {
            SearchBonsaiShowing().roots_lp +=0.1;
            SearchBonsaiShowing().roots_new +=0.1;
            SearchBonsaiShowing().leftpoints -=0.1;
            document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_roots_new2").innerHTML = (Math.round((SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_r_buttoncheck_p();
        }
    }
}

btn_rp1.onclick = function() {
    if (SearchBonsaiShowing().growing==1) {
    }
    else {
        if (SearchBonsaiShowing().leftpoints>0.99) {
            SearchBonsaiShowing().roots_lp +=1;
            SearchBonsaiShowing().roots_new +=1;
            SearchBonsaiShowing().leftpoints -=1;
            document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_roots_new2").innerHTML = (Math.round((SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_r_buttoncheck_p();
        }
    }
}

btn_rp10.onclick = function() {
    if (SearchBonsaiShowing().growing==1) { 
    }
    else {
        if (SearchBonsaiShowing().leftpoints>9.99) {
            SearchBonsaiShowing().roots_lp +=10;
            SearchBonsaiShowing().roots_new +=10;
            SearchBonsaiShowing().leftpoints -=10;
            document.getElementById("bonsai_roots_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().roots_lp)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_roots_new2").innerHTML = (Math.round((SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});        
            document.getElementById("bonsai_detail_leftpoints").innerHTML = (Math.round((SearchBonsaiShowing().leftpoints)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            document.getElementById("bonsai_detail_cp_new2").innerHTML = (Math.round((SearchBonsaiShowing().foliage_new+SearchBonsaiShowing().branches_new+SearchBonsaiShowing().trunk_new+SearchBonsaiShowing().roots_new)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});
            leftpoints_r_buttoncheck_p();
        }
    }
}

function leftpoints_r_buttoncheck_p() {
    if (SearchBonsaiShowing().roots_lp>9.99) {
        document.getElementById("bonsai_roots_minus_10").style.background = "#db3e2ba1";
    }
    if (SearchBonsaiShowing().roots_lp>0.99) {
        document.getElementById("bonsai_roots_minus_1").style.background = "#db3e2ba1";
    }
    if (SearchBonsaiShowing().roots_lp>0.09) {
        document.getElementById("bonsai_roots_minus_0").style.background = "#db3e2ba1";
    }
    if (SearchBonsaiShowing().leftpoints<0.09) {
        document.getElementById("bonsai_foliage_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_plus_0").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_plus_0").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().leftpoints<0.99) {
        document.getElementById("bonsai_foliage_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_plus_1").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_plus_1").style.background = "#9f9f9f";
    }
    if (SearchBonsaiShowing().leftpoints<9.99) {
        document.getElementById("bonsai_foliage_plus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_branches_plus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_trunk_plus_10").style.background = "#9f9f9f";
        document.getElementById("bonsai_roots_plus_10").style.background = "#9f9f9f";
    }
}
