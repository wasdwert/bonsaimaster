/* Header menu functions */
function ViewBonDex() {
    $(document).ready(function(){
        $('.bondex').show();
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.competitions').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}
function ViewTasks() {
    if (tutorial>=6) {
    tutorialid=4
    $(document).ready(function(){
        $('.bondex').hide();
        $('.tasks').show();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.competitions').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
    tutorial_function();
    }
}
function ViewExpedition() {
    $(document).ready(function(){
        $('.bondex').hide();
        $('.tasks').hide();
        $('.expedition').show();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.competitions').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}
function ViewCrafting() {
    if (tutorial>=12) {
    $(document).ready(function(){
        $('.bondex').hide();
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').show();
        $('.learning').hide();
        $('.shopping').hide();
        $('.competitions').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
    }
}
function ViewLearning() {
    $(document).ready(function(){
        $('.bondex').hide();
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').show();
        $('.shopping').hide();
        $('.competitions').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
}
function ViewShopping() {
    if (tutorial>=10) {
    tutorialid=6
    $(document).ready(function(){
        $('.bondex').hide();
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').show();
        $('.competitions').hide();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
    tutorial_function();
    }
}
function ViewCompetitions() {
    if (tutorial>=13) {
    tutorialid=7
    $(document).ready(function(){
        $('.bondex').hide();
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.competitions').show();
        $('.bonsai_details').hide();
        $('.bonsai_details_seedling').hide();
    });
    tutorial_function();
    }
}

/* Expedition Menu functions */
function ViewExp_Seedlings1() {
    tutorialid=1;
    $(document).ready(function(){
        $('#exp_bonsais1').show();
        $('#neighborhood_mobile').show();
        $('#exp_bonsais2').hide();
        $('#cityboundaries_mobile').hide();
        $('#exp_resources1').hide();
        $('#exp_resources2').hide();
    });
    tutorial_function();
}
function ViewExp_Seedlings2() {
    $(document).ready(function(){
        $('#exp_bonsais1').hide();
        $('#neighborhood_mobile').hide();
        $('#exp_bonsais2').show();
        $('#cityboundaries_mobile').show();
        $('#exp_resources1').hide();
        $('#exp_resources2').hide();
    });
}
function ViewExp_Resources1() {
    $(document).ready(function(){
        $('#exp_bonsais1').hide();
        $('#neighborhood_mobile').hide();
        $('#exp_bonsais2').hide();
        $('#cityboundaries_mobile').hide();
        $('#exp_resources1').show();
        $('#exp_resources2').hide();
    });
}
function ViewExp_Resources2() {
    $(document).ready(function(){
        $('#exp_bonsais1').hide();
        $('#neighborhood_mobile').hide();
        $('#exp_bonsais2').hide();
        $('#cityboundaries_mobile').hide();
        $('#exp_resources1').hide();
        $('#exp_resources2').show();
    });
}

/* Bonsai Detail View */
function ViewBonsai_Details(z) {
    if (x==1) {
        if (z==1) {
            ViewBonsai_Details2(bonsai001, 1) 
        }
        else if (z==2) {
            ViewBonsai_Details2(bonsai002, 2) 
        }
        else if (z==3) {
            ViewBonsai_Details2(bonsai003, 3)
        }
        else if (z==4) {
            ViewBonsai_Details2(bonsai004, 4)
        }
        else if (z==5) {
            ViewBonsai_Details2(bonsai005, 5)
        }
        else if (z==6) {
            ViewBonsai_Details2(bonsai006, 6)
        }
        else if (z==7) {
            ViewBonsai_Details2(bonsai007, 7)
        }
        else if (z==8) {
            ViewBonsai_Details2(bonsai008, 8)
        }
        else if (z==9) {
            ViewBonsai_Details2(bonsai009, 9)
        }
        else if (z==10) {
            ViewBonsai_Details2(bonsai010, 10)
        }
    } 
    else if (x==11) {
        if (z==1) {
            ViewBonsai_Details2(bonsai011, 11)
        }
        else if (z==2) {
            ViewBonsai_Details2(bonsai012, 12)
        }
        else if (z==3) {
            ViewBonsai_Details2(bonsai013, 13)
        }
        else if (z==4) {
            ViewBonsai_Details2(bonsai014, 14)
        }
        else if (z==5) {
            ViewBonsai_Details2(bonsai015, 15)
        }
        else if (z==6) {
            ViewBonsai_Details2(bonsai016, 16)
        } 
        else if (z==7) {
            ViewBonsai_Details2(bonsai017, 17)
        } 
        else if (z==8) {
            ViewBonsai_Details2(bonsai018, 18)
        } 
        else if (z==9) {
            ViewBonsai_Details2(bonsai019, 19)
        } 
        else if (z==10) {
            ViewBonsai_Details2(bonsai020, 20)
        } 
    }
}

function ViewBonsai_Details2(x, y) {
    tutorialid=3;
    if (x.treetype==0) {
        $(document).ready(function(){
            $('.bondex').hide();
            $('.tasks').hide();
            $('.expedition').hide();
            $('.crafting').hide();
            $('.learning').hide();
            $('.shopping').hide();
            $('.competitions').hide();
            $('.bonsai_details').hide();
            $('.bonsai_details_seedling').show();
        });
        state.bonsai_showing=y;
    }
    else {
        state.bonsai_showing=y;
        Bonsai_Details(x);
    }
    tutorial_function();
}

/* Bonsai Detail Loadout */
function Bonsai_Details(bonsaixxx) {
    $(document).ready(function(){
        $('.bondex').hide();
        $('.tasks').hide();
        $('.expedition').hide();
        $('.crafting').hide();
        $('.learning').hide();
        $('.shopping').hide();
        $('.competitions').hide();
        $('.bonsai_details').show();
        $('.bonsai_details_seedling').hide();
        });
    Bonsai_Growing(bonsaixxx);
    PositionChangeBox();
    $(document).ready(function() {
        $("#positionn_batch").html("<option value='1000'>Select box</option><option value='1001'>Bonsai #01-#10</option><option value='1011'>Bonsai #11-#20</option>");
        $("#positionn_place").html("<option value='00'>Select box first</option>");
        $('#positionn_place2').hide();
    });
}

/* Bonsai Menu Change */
function menu_change(a) {
    if (a==1) {
        x = document.getElementById("menu").value;
        $('#menu').on('select2:select', function (e) {
            $('#menu_mobile').val(x);
            $('#menu_mobilexs').val(x);
            $('#menu_mobile').trigger('change');
            $('#menu_mobilexs').trigger('change');
        });
    }
    else if (a==2) {
        x = document.getElementById("menu_mobile").value;
        $('#menu_mobile').on('select2:select', function (e) {
            $('#menu').val(x);
            $('#menu_mobilexs').val(x);
            $('#menu').trigger('change');
            $('#menu_mobilexs').trigger('change');
        });
    }
    else if (a==3) {
        x = document.getElementById("menu_mobilexs").value;
        $('#menu_mobilexs').on('select2:select', function (e) {
            $('#menu').val(x);
            $('#menu_mobile').val(x);
            $('#menu').trigger('change');
            $('#menu_mobile').trigger('change');
        });
    }
    console.log("here"+x)
    if (x==1) {
        fetchbonsaimenu("00", "01", bonsai001, bonsai002, bonsai003, bonsai004, bonsai005, bonsai006, bonsai007, bonsai008, bonsai009, bonsai010);
        showbonsaipots(10);
        fetchbonsaimenu_mobile("00", "01", bonsai001, bonsai002, bonsai003, bonsai004, bonsai005, bonsai006, bonsai007, bonsai008, bonsai009, bonsai010)
        fetchbonsaimenu_mobilexs("00", "01", bonsai001, bonsai002, bonsai003, bonsai004, bonsai005, bonsai006, bonsai007, bonsai008, bonsai009, bonsai010)
    }
    else if (x==11) {
        fetchbonsaimenu("01", "02", bonsai011, bonsai012, bonsai013, bonsai014, bonsai015, bonsai016, bonsai017, bonsai018, bonsai019, bonsai020);
        showbonsaipots(20);
        fetchbonsaimenu_mobile("01", "02", bonsai011, bonsai012, bonsai013, bonsai014, bonsai015, bonsai016, bonsai017, bonsai018, bonsai019, bonsai020)
        fetchbonsaimenu_mobilexs("01", "02", bonsai011, bonsai012, bonsai013, bonsai014, bonsai015, bonsai016, bonsai017, bonsai018, bonsai019, bonsai020)
    }
}

function menu_contests_change() {
    x_contests = document.getElementById("menu_contests").value;
    if (x_contests==1) {
        fetchbonsaimenu_contests("00", "01", bonsai001, bonsai002, bonsai003, bonsai004, bonsai005, bonsai006, bonsai007, bonsai008, bonsai009, bonsai010)
    }
    else if (x_contests==11) {
        fetchbonsaimenu_contests("01", "02", bonsai011, bonsai012, bonsai013, bonsai014, bonsai015, bonsai016, bonsai017, bonsai018, bonsai019, bonsai020)
    }
    contests_bonsaiunavailable();
}

function menu_shop_change(a) {
    if (a==1) {
        x_shop = document.getElementById("menu_shopping").value;
        $('#menu_shopping').on('select2:select', function (e) {
            $('#menu_shopping_mobile').val(x_shop);
            $('#menu_shopping_mobile').trigger('change');
        });
    }
    else if (a==2) {
        x_shop = document.getElementById("menu_shopping_mobile").value;
        $('#menu_shopping_mobile').on('select2:select', function (e) {
            $('#menu_shopping').val(x_shop);
            $('#menu_shopping').trigger('change');
        });
    }
    if (x_shop==1) {
        fetchbonsaimenu_shop("00", "01", bonsai001, bonsai002, bonsai003, bonsai004, bonsai005, bonsai006, bonsai007, bonsai008, bonsai009, bonsai010)
    }
    else if (x_shop==11) {
        fetchbonsaimenu_shop("01", "02", bonsai011, bonsai012, bonsai013, bonsai014, bonsai015, bonsai016, bonsai017, bonsai018, bonsai019, bonsai020)
    }
}

function menu_changeA_change(a) {
    x_changeA = document.getElementById("menu_changeA").value;
    if (x_changeA==1) {
        fetchbonsaimenu_changeA("00", "01", bonsai001, bonsai002, bonsai003, bonsai004, bonsai005, bonsai006, bonsai007, bonsai008, bonsai009, bonsai010)
        showbonsaipots_changeA(10);
    }
    else if (x_changeA==11) {
        fetchbonsaimenu_changeA("01", "02", bonsai011, bonsai012, bonsai013, bonsai014, bonsai015, bonsai016, bonsai017, bonsai018, bonsai019, bonsai020)
        showbonsaipots_changeA(20);
    }
    x_changeB = document.getElementById("menu_changeB").value;
    if (x_changeB==1) {
        fetchbonsaimenu_changeB("00", "01", bonsai001, bonsai002, bonsai003, bonsai004, bonsai005, bonsai006, bonsai007, bonsai008, bonsai009, bonsai010)
        showbonsaipots_changeB(10);
    }
    else if (x_changeB==11) {
        fetchbonsaimenu_changeB("01", "02", bonsai011, bonsai012, bonsai013, bonsai014, bonsai015, bonsai016, bonsai017, bonsai018, bonsai019, bonsai020)
        showbonsaipots_changeB(20);
    }
}

function ViewBonsaiSort() {
    modalbonsaisort.style.display = "block";
}

/* Crafting Menu functions */
function ViewCrCompost1() {
    $(document).ready(function(){
        $('#cr_compost1').show();
        $('#cr_compost1_mobile').show();
        $('#cr_fertilizer1').hide();
        $('#cr_robot1').hide();
        $('#cr_robot1_mobile').hide();
        $('#cr_greenhouse1').hide();
        $('#cr_storage').hide();
    });
}
function ViewCrFertilizer1() {
    $(document).ready(function(){
        $('#cr_compost1').hide();
        $('#cr_compost1_mobile').hide();
        $('#cr_fertilizer1').show();
        $('#cr_robot1').hide();
        $('#cr_robot1_mobile').hide();
        $('#cr_greenhouse1').hide();
        $('#cr_storage').hide();
    });
}
function ViewCrRobot1() {
    $(document).ready(function(){
        $('#cr_compost1').hide();
        $('#cr_compost1_mobile').hide();
        $('#cr_fertilizer1').hide();
        $('#cr_robot1').show();
        $('#cr_robot1_mobile').show();
        $('#cr_greenhouse1').hide();
        $('#cr_storage').hide();
    });
}
function ViewCrGreenhouse1() {
    $(document).ready(function(){
        $('#cr_compost1').hide();
        $('#cr_compost1_mobile').hide();
        $('#cr_fertilizer1').hide();
        $('#cr_robot1').hide();
        $('#cr_robot1_mobile').hide();
        $('#cr_greenhouse1').show();
        $('#cr_storage').hide();
    });
}
function ViewCrStorage() {
    $(document).ready(function(){
        $('#cr_compost1').hide();
        $('#cr_compost1_mobile').hide();
        $('#cr_fertilizer1').hide();
        $('#cr_robot1').hide();
        $('#cr_robot1_mobile').hide();
        $('#cr_greenhouse1').hide();
        $('#cr_storage').show();
    });
}

/* Shopping Menu functions */
function ViewShopEquipment() {
    $(document).ready(function(){
        $('#shop_equipment').show();
        $('#shop_resources').hide();
        $('#shop_seedlings').hide();
        $('#shop_bonsais').hide();
        $('#shop_equipment_mobile').show();
        $('#shop_resources_mobile').hide();
        $('#shop_seedlings_mobile').hide();
        $('#shop_bonsais_mobile').hide();
    });
}
function ViewShopResources() {
    $(document).ready(function(){
        $('#shop_equipment').hide();
        $('#shop_resources').show();
        $('#shop_seedlings').hide();
        $('#shop_bonsais').hide();
        $('#shop_equipment_mobile').hide();
        $('#shop_resources_mobile').show();
        $('#shop_seedlings_mobile').hide();
        $('#shop_bonsais_mobile').hide();
    });
}
function ViewShopSeedlings() {
    $(document).ready(function(){
        $('#shop_equipment').hide();
        $('#shop_resources').hide();
        $('#shop_seedlings').show();
        $('#shop_bonsais').hide();
        $('#shop_equipment_mobile').hide();
        $('#shop_resources_mobile').hide();
        $('#shop_seedlings_mobile').show();
        $('#shop_bonsais_mobile').hide();
    });
}
function ViewShopBonsais() {
    $(document).ready(function(){
        $('#shop_equipment').hide();
        $('#shop_resources').hide();
        $('#shop_seedlings').hide();
        $('#shop_bonsais').show();
        $('#shop_equipment_mobile').hide();
        $('#shop_resources_mobile').hide();
        $('#shop_seedlings_mobile').hide();
        $('#shop_bonsais_mobile').show();
    });
}

/* You Menu functions */
function ViewStats() {
    $(document).ready(function(){
        $('#stats').show();
        $('#skill_treestyle1').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_fertilizer1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
        $('#skill_greenhouse1').hide();
        $('#skill_storage1').hide();
        $('#skill_care1').hide();
        $('#skill_area1up1').hide();
        $('#skill_area2up1').hide();
        $('#skill_areares1up1').hide();
        $('#skill_areares2up1').hide();
    });
}
function ViewSkillTreestyles1() {
    if (tutorial>=2) {
    tutorialid=2;
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').show();
        $('#skill_treestyle2').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_fertilizer1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
        $('#skill_greenhouse1').hide();
        $('#skill_storage1').hide();
        $('#skill_care1').hide();
        $('#skill_area1up1').hide();
        $('#skill_area2up1').hide();
        $('#skill_areares1up1').hide();
        $('#skill_areares2up1').hide();
    });  
    tutorial_function();
    }
}
function ViewSkillTreestyles2() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_treestyle2').show();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_fertilizer1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
        $('#skill_greenhouse1').hide();
        $('#skill_storage1').hide();
        $('#skill_care1').hide();
        $('#skill_area1up1').hide();
        $('#skill_area2up1').hide();
        $('#skill_areares1up1').hide();
        $('#skill_areares2up1').hide();
    });
}
function ViewSkillRobot1() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_treestyle2').hide();
        $('#skill_robot1').show();
        $('#skill_compost1').hide();
        $('#skill_fertilizer1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
        $('#skill_greenhouse1').hide();
        $('#skill_storage1').hide();
        $('#skill_care1').hide();
        $('#skill_area1up1').hide();
        $('#skill_area2up1').hide();
        $('#skill_areares1up1').hide();
        $('#skill_areares2up1').hide();
    });
}
function ViewSkillCompost1() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_treestyle2').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').show();
        $('#skill_fertilizer1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
        $('#skill_greenhouse1').hide();
        $('#skill_storage1').hide();
        $('#skill_care1').hide();
        $('#skill_area1up1').hide();
        $('#skill_area2up1').hide();
        $('#skill_areares1up1').hide();
        $('#skill_areares2up1').hide();
    });
}
function ViewSkillFertilizer1() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_treestyle2').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_fertilizer1').show();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
        $('#skill_greenhouse1').hide();
        $('#skill_storage1').hide();
        $('#skill_care1').hide();
        $('#skill_area1up1').hide();
        $('#skill_area2up1').hide();
        $('#skill_areares1up1').hide();
        $('#skill_areares2up1').hide();
    });
}
function ViewSkillGrowing() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_treestyle2').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_fertilizer1').hide();
        $('#skill_growing').show();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
        $('#skill_greenhouse1').hide();
        $('#skill_storage1').hide();
        $('#skill_care1').hide();
        $('#skill_area1up1').hide();
        $('#skill_area2up1').hide();
        $('#skill_areares1up1').hide();
        $('#skill_areares2up1').hide();
    });
}
function ViewSkillShaping() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_treestyle2').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_fertilizer1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').show();
        $('#skill_patience').hide();
        $('#skill_greenhouse1').hide();
        $('#skill_storage1').hide();
        $('#skill_care1').hide();
        $('#skill_area1up1').hide();
        $('#skill_area2up1').hide();
        $('#skill_areares1up1').hide();
        $('#skill_areares2up1').hide();
    });
}
function ViewSkillPatience() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_treestyle2').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_fertilizer1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').show();
        $('#skill_greenhouse1').hide();
        $('#skill_storage1').hide();
        $('#skill_care1').hide();
        $('#skill_area1up1').hide();
        $('#skill_area2up1').hide();
        $('#skill_areares1up1').hide();
        $('#skill_areares2up1').hide();
    });
}

function ViewSkillGreenhouse1() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_treestyle2').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_fertilizer1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
        $('#skill_greenhouse1').show();
        $('#skill_storage1').hide();
        $('#skill_care1').hide();
        $('#skill_area1up1').hide();
        $('#skill_area2up1').hide();
        $('#skill_areares1up1').hide();
        $('#skill_areares2up1').hide();
    });
}

function ViewSkillStorage1() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_treestyle2').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_fertilizer1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
        $('#skill_greenhouse1').hide();
        $('#skill_storage1').show();
        $('#skill_care1').hide();
        $('#skill_area1up1').hide();
        $('#skill_area2up1').hide();
        $('#skill_areares1up1').hide();
        $('#skill_areares2up1').hide();
    });
}

function ViewSkillCare1() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_treestyle2').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_fertilizer1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
        $('#skill_greenhouse1').hide();
        $('#skill_storage1').hide();
        $('#skill_care1').show();
        $('#skill_area1up1').hide();
        $('#skill_area2up1').hide();
        $('#skill_areares1up1').hide();
        $('#skill_areares2up1').hide();
    });
}

function ViewSkillArea1Up1() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_treestyle2').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_fertilizer1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
        $('#skill_greenhouse1').hide();
        $('#skill_storage1').hide();
        $('#skill_care1').hide();
        $('#skill_area1up1').show();
        $('#skill_area2up1').hide();
        $('#skill_areares1up1').hide();
        $('#skill_areares2up1').hide();
    });
}

function ViewSkillArea2Up1() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_treestyle2').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_fertilizer1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
        $('#skill_greenhouse1').hide();
        $('#skill_storage1').hide();
        $('#skill_care1').hide();
        $('#skill_area1up1').hide();
        $('#skill_area2up1').show();
        $('#skill_areares1up1').hide();
        $('#skill_areares2up1').hide();
    });
}

function ViewSkillAreares1Up1() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_treestyle2').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_fertilizer1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
        $('#skill_greenhouse1').hide();
        $('#skill_storage1').hide();
        $('#skill_care1').hide();
        $('#skill_area1up1').hide();
        $('#skill_area2up1').hide();
        $('#skill_areares1up1').show();
        $('#skill_areares2up1').hide();
    });
}

function ViewSkillAreares2Up1() {
    $(document).ready(function(){
        $('#stats').hide();
        $('#skill_treestyle1').hide();
        $('#skill_treestyle2').hide();
        $('#skill_robot1').hide();
        $('#skill_compost1').hide();
        $('#skill_fertilizer1').hide();
        $('#skill_growing').hide();
        $('#skill_shaping').hide();
        $('#skill_patience').hide();
        $('#skill_greenhouse1').hide();
        $('#skill_storage1').hide();
        $('#skill_care1').hide();
        $('#skill_area1up1').hide();
        $('#skill_area2up1').hide();
        $('#skill_areares1up1').hide();
        $('#skill_areares2up1').show();
    });
}

/* Contests Menu functions */
function ViewClub_TTG01 () {
    $(document).ready(function(){
        $('#Club_TTG01').show();
        $('#Club_TTG02').hide();
        $('#Club_TTG03').hide();
        $('#Club_ST01').hide();
        $('#Club_ST02').hide();
        $('#Club_ST03').hide();
        $('#League_Area01').hide();
    });
}
function ViewClub_TTG02 () {
    $(document).ready(function(){
        $('#Club_TTG01').hide();
        $('#Club_TTG02').show();
        $('#Club_TTG03').hide();
        $('#Club_ST01').hide();
        $('#Club_ST02').hide();
        $('#Club_ST03').hide();
        $('#League_Area01').hide();
    });
}
function ViewClub_TTG03 () {
    $(document).ready(function(){
        $('#Club_TTG01').hide();
        $('#Club_TTG02').hide();
        $('#Club_TTG03').show();
        $('#Club_ST01').hide();
        $('#Club_ST02').hide();
        $('#Club_ST03').hide();
        $('#League_Area01').hide();
    });
}
function ViewClub_ST01 () {
    $(document).ready(function(){
        $('#Club_TTG01').hide();
        $('#Club_TTG02').hide();
        $('#Club_TTG03').hide();
        $('#Club_ST01').show();
        $('#Club_ST02').hide();
        $('#Club_ST03').hide();
        $('#League_Area01').hide();
    });
}
function ViewClub_ST02 () {
    $(document).ready(function(){
        $('#Club_TTG01').hide();
        $('#Club_TTG02').hide();
        $('#Club_TTG03').hide();
        $('#Club_ST01').hide();
        $('#Club_ST02').show();
        $('#Club_ST03').hide();
        $('#League_Area01').hide();
    });
}
function ViewClub_ST03 () {
    $(document).ready(function(){
        $('#Club_TTG01').hide();
        $('#Club_TTG02').hide();
        $('#Club_TTG03').hide();
        $('#Club_ST01').hide();
        $('#Club_ST02').hide();
        $('#Club_ST03').show();
        $('#League_Area01').hide();
    });
}
function ViewLeague_Area01 () {
    $(document).ready(function(){
        $('#Club_TTG01').hide();
        $('#Club_TTG02').hide();
        $('#Club_TTG03').hide();
        $('#Club_ST01').hide();
        $('#Club_ST02').hide();
        $('#Club_ST03').hide();
        $('#League_Area01').show();
    });
}

//BonDex View Functions
function ViewBonsai01 () {
    $(document).ready(function(){
        $('#BonDex_01_show').show();
        $('#BonDex_02_show').hide();
        $('#BonDex_03_show').hide();
        $('#BonDex_04_show').hide();
        $('#BonDex_05_show').hide();
        $('#BonDex_06_show').hide();
        $('#BonDex_07_show').hide();
        $('#BonDex_08_show').hide();
        $('#BonDex_09_show').hide();
        $('#BonDex_10_show').hide();
        $('#BonDex_11_show').hide();
        $('#BonDex_12_show').hide();
        $('#BonDex_13_show').hide();
        $('#BonDex_14_show').hide();
    });
}
function ViewBonsai02 () {
    $(document).ready(function(){
        $('#BonDex_01_show').hide();
        $('#BonDex_02_show').show();
        $('#BonDex_03_show').hide();
        $('#BonDex_04_show').hide();
        $('#BonDex_05_show').hide();
        $('#BonDex_06_show').hide();
        $('#BonDex_07_show').hide();
        $('#BonDex_08_show').hide();
        $('#BonDex_09_show').hide();
        $('#BonDex_10_show').hide();
        $('#BonDex_11_show').hide();
        $('#BonDex_12_show').hide();
        $('#BonDex_13_show').hide();
        $('#BonDex_14_show').hide();
    });
}
function ViewBonsai03 () {
    $(document).ready(function(){
        $('#BonDex_01_show').hide();
        $('#BonDex_02_show').hide();
        $('#BonDex_03_show').show();
        $('#BonDex_04_show').hide();
        $('#BonDex_05_show').hide();
        $('#BonDex_06_show').hide();
        $('#BonDex_07_show').hide();
        $('#BonDex_08_show').hide();
        $('#BonDex_09_show').hide();
        $('#BonDex_10_show').hide();
        $('#BonDex_11_show').hide();
        $('#BonDex_12_show').hide();
        $('#BonDex_13_show').hide();
        $('#BonDex_14_show').hide();
    });
}
function ViewBonsai04 () {
    $(document).ready(function(){
        $('#BonDex_01_show').hide();
        $('#BonDex_02_show').hide();
        $('#BonDex_03_show').hide();
        $('#BonDex_04_show').show();
        $('#BonDex_05_show').hide();
        $('#BonDex_06_show').hide();
        $('#BonDex_07_show').hide();
        $('#BonDex_08_show').hide();
        $('#BonDex_09_show').hide();
        $('#BonDex_10_show').hide();
        $('#BonDex_11_show').hide();
        $('#BonDex_12_show').hide();
        $('#BonDex_13_show').hide();
        $('#BonDex_14_show').hide();
    });
}
function ViewBonsai05 () {
    $(document).ready(function(){
        $('#BonDex_01_show').hide();
        $('#BonDex_02_show').hide();
        $('#BonDex_03_show').hide();
        $('#BonDex_04_show').hide();
        $('#BonDex_05_show').show();
        $('#BonDex_06_show').hide();
        $('#BonDex_07_show').hide();
        $('#BonDex_08_show').hide();
        $('#BonDex_09_show').hide();
        $('#BonDex_10_show').hide();
        $('#BonDex_11_show').hide();
        $('#BonDex_12_show').hide();
        $('#BonDex_13_show').hide();
        $('#BonDex_14_show').hide();
    });
}
function ViewBonsai06 () {
    $(document).ready(function(){
        $('#BonDex_01_show').hide();
        $('#BonDex_02_show').hide();
        $('#BonDex_03_show').hide();
        $('#BonDex_04_show').hide();
        $('#BonDex_05_show').hide();
        $('#BonDex_06_show').show();
        $('#BonDex_07_show').hide();
        $('#BonDex_08_show').hide();
        $('#BonDex_09_show').hide();
        $('#BonDex_10_show').hide();
        $('#BonDex_11_show').hide();
        $('#BonDex_12_show').hide();
        $('#BonDex_13_show').hide();
        $('#BonDex_14_show').hide();
    });
}
function ViewBonsai07 () {
    $(document).ready(function(){
        $('#BonDex_01_show').hide();
        $('#BonDex_02_show').hide();
        $('#BonDex_03_show').hide();
        $('#BonDex_04_show').hide();
        $('#BonDex_05_show').hide();
        $('#BonDex_06_show').hide();
        $('#BonDex_07_show').show();
        $('#BonDex_08_show').hide();
        $('#BonDex_09_show').hide();
        $('#BonDex_10_show').hide();
        $('#BonDex_11_show').hide();
        $('#BonDex_12_show').hide();
        $('#BonDex_13_show').hide();
        $('#BonDex_14_show').hide();
    });
}
function ViewBonsai08 () {
    $(document).ready(function(){
        $('#BonDex_01_show').hide();
        $('#BonDex_02_show').hide();
        $('#BonDex_03_show').hide();
        $('#BonDex_04_show').hide();
        $('#BonDex_05_show').hide();
        $('#BonDex_06_show').hide();
        $('#BonDex_07_show').hide();
        $('#BonDex_08_show').show();
        $('#BonDex_09_show').hide();
        $('#BonDex_10_show').hide();
        $('#BonDex_11_show').hide();
        $('#BonDex_12_show').hide();
        $('#BonDex_13_show').hide();
        $('#BonDex_14_show').hide();
    });
}
function ViewBonsai09 () {
    $(document).ready(function(){
        $('#BonDex_01_show').hide();
        $('#BonDex_02_show').hide();
        $('#BonDex_03_show').hide();
        $('#BonDex_04_show').hide();
        $('#BonDex_05_show').hide();
        $('#BonDex_06_show').hide();
        $('#BonDex_07_show').hide();
        $('#BonDex_08_show').hide();
        $('#BonDex_09_show').show();
        $('#BonDex_10_show').hide();
        $('#BonDex_11_show').hide();
        $('#BonDex_12_show').hide();
        $('#BonDex_13_show').hide();
        $('#BonDex_14_show').hide();
    });
}
function ViewBonsai10 () {
    $(document).ready(function(){
        $('#BonDex_01_show').hide();
        $('#BonDex_02_show').hide();
        $('#BonDex_03_show').hide();
        $('#BonDex_04_show').hide();
        $('#BonDex_05_show').hide();
        $('#BonDex_06_show').hide();
        $('#BonDex_07_show').hide();
        $('#BonDex_08_show').hide();
        $('#BonDex_09_show').hide();
        $('#BonDex_10_show').show();
        $('#BonDex_11_show').hide();
        $('#BonDex_12_show').hide();
        $('#BonDex_13_show').hide();
        $('#BonDex_14_show').hide();
    });
}
function ViewBonsai11 () {
    $(document).ready(function(){
        $('#BonDex_01_show').hide();
        $('#BonDex_02_show').hide();
        $('#BonDex_03_show').hide();
        $('#BonDex_04_show').hide();
        $('#BonDex_05_show').hide();
        $('#BonDex_06_show').hide();
        $('#BonDex_07_show').hide();
        $('#BonDex_08_show').hide();
        $('#BonDex_09_show').hide();
        $('#BonDex_10_show').hide();
        $('#BonDex_11_show').show();
        $('#BonDex_12_show').hide();
        $('#BonDex_13_show').hide();
        $('#BonDex_14_show').hide();
    });
}
function ViewBonsai12 () {
    $(document).ready(function(){
        $('#BonDex_01_show').hide();
        $('#BonDex_02_show').hide();
        $('#BonDex_03_show').hide();
        $('#BonDex_04_show').hide();
        $('#BonDex_05_show').hide();
        $('#BonDex_06_show').hide();
        $('#BonDex_07_show').hide();
        $('#BonDex_08_show').hide();
        $('#BonDex_09_show').hide();
        $('#BonDex_10_show').hide();
        $('#BonDex_11_show').hide();
        $('#BonDex_12_show').show();
        $('#BonDex_13_show').hide();
        $('#BonDex_14_show').hide();
    });
}
function ViewBonsai13 () {
    $(document).ready(function(){
        $('#BonDex_01_show').hide();
        $('#BonDex_02_show').hide();
        $('#BonDex_03_show').hide();
        $('#BonDex_04_show').hide();
        $('#BonDex_05_show').hide();
        $('#BonDex_06_show').hide();
        $('#BonDex_07_show').hide();
        $('#BonDex_08_show').hide();
        $('#BonDex_09_show').hide();
        $('#BonDex_10_show').hide();
        $('#BonDex_11_show').hide();
        $('#BonDex_12_show').hide();
        $('#BonDex_13_show').show();
        $('#BonDex_14_show').hide();
    });
}
function ViewBonsai14 () {
    $(document).ready(function(){
        $('#BonDex_01_show').hide();
        $('#BonDex_02_show').hide();
        $('#BonDex_03_show').hide();
        $('#BonDex_04_show').hide();
        $('#BonDex_05_show').hide();
        $('#BonDex_06_show').hide();
        $('#BonDex_07_show').hide();
        $('#BonDex_08_show').hide();
        $('#BonDex_09_show').hide();
        $('#BonDex_10_show').hide();
        $('#BonDex_11_show').hide();
        $('#BonDex_12_show').hide();
        $('#BonDex_13_show').hide();
        $('#BonDex_14_show').show();
    });
}

//Goals View Functions
function ViewMilestones () {
    $(document).ready(function(){
        $('#milestones').show();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT000() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').show();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT001() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').show();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT002() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').show();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT003() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').show();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT004() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').show();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT004A() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').show();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT005() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').show();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT006() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').show();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT007() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').show();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT008() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').show();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT009() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').show();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT010() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').show();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT011() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').show();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT012() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').show();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT101() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').show();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT102() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').show();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT103() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').show();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT201() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').show();
        $('#t202').hide();
        $('#t203').hide();
    });
}
function ViewT202() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').show();
        $('#t203').hide();
    });
}
function ViewT203() {
    $(document).ready(function(){
        $('#milestones').hide();
        $('#t000').hide();
        $('#t001').hide();
        $('#t002').hide();
        $('#t003').hide();
        $('#t004').hide();
        $('#t004a').hide();
        $('#t005').hide();
        $('#t006').hide();
        $('#t007').hide();
        $('#t008').hide();
        $('#t009').hide();
        $('#t010').hide();
        $('#t011').hide();
        $('#t012').hide();
        $('#t101').hide();
        $('#t102').hide();
        $('#t103').hide();
        $('#t201').hide();
        $('#t202').hide();
        $('#t203').show();
    });
}

/* Collapsible Menus - Main menu: Opened at start*/
function toggleCollapsibleSectionWithAnimation() {
	this.classList.toggle("active");
	var buttonId = this.id;
	var sectionId = buttonId.replace("button","section");
	var content = document.getElementById(sectionId);
    var mHeight = window.getComputedStyle(content).maxHeight;
	if (mHeight !== "0px"){
        content.style.maxHeight = "0px";
    } 
    else {
        content.style.maxHeight = "100%";
	}
}

/* Collapsible Menus - Main menu: Closed at start*/
function toggleCollapsibleSectionWithAnimation2() {
	this.classList.toggle("active2");
	var buttonId = this.id;
	var sectionId = buttonId.replace("button","section");
	var content = document.getElementById(sectionId);
    var mHeight = window.getComputedStyle(content).maxHeight;
	if (mHeight !== "100%"){
        content.style.maxHeight = "100%";
    } 
    else {
        content.style.maxHeight = "0px";
	}
}
