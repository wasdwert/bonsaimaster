var shop_chemical_sell = document.getElementById("shop_chemical_sell_1");
var shop_chemical_buy = document.getElementById("shop_chemical_buy_1");
var shop_glass_sell = document.getElementById("shop_glass_sell_1");
var shop_glass_buy = document.getElementById("shop_glass_buy_1");
var shop_bolt_sell = document.getElementById("shop_bolt_sell_1");
var shop_bolt_buy = document.getElementById("shop_bolt_buy_1");
var shop_metal_sell = document.getElementById("shop_metal_sell_1");
var shop_metal_buy = document.getElementById("shop_metal_buy_1");
var shop_wire_sell = document.getElementById("shop_wire_sell_1");
var shop_wire_buy = document.getElementById("shop_wire_buy_1");
var shop_board_sell = document.getElementById("shop_board_sell_1");
var shop_board_buy = document.getElementById("shop_board_buy_1");

shop_chemical_sell.onclick = function() {
    if (resources.chemical>=1) {
        resources.money +=1;
        resources.chemical -=1;
        fetchvalues();
        fetchunlocks();
        }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;You don't have any chemicals left", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_chemical_buy.onclick = function() {
    if (resources.money>=2) {
        if (resources.chemical+1<=storage.chemical) {
            resources.money -=2;
            resources.chemical +=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
             Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can't buy! Storage for&nbsp;<img src='Images/chemical_white.svg' width='20' height='20'>&nbsp;full", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_glass_sell.onclick = function() {
    if (resources.glass>=1) {
        if (resources.wood==storage.wood) {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can't sell! Storage for&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>&nbsp;full", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
        else {
            if (resources.wood+2>storage.wood) {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can't sell! Storage for&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>&nbsp;to be full", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
            else {
            resources.wood +=2;
            resources.glass -=1;
            fetchvalues();
            fetchunlocks();
            }
            
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;You don't have any glass left", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_glass_buy.onclick = function() {
    if (resources.wood>=3) {
        if (resources.glass+1<=storage.glass) {
            resources.wood -=3;
            resources.glass +=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
             Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can't buy! Storage for&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;full", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough wood", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_bolt_sell.onclick = function() {
    if (resources.bolt>=1) {
        if (resources.glass==storage.glass) {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can't sell! Storage for&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;full", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
        else {
            if (resources.glass+2>storage.glass) {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can't sell! Storage for&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;to be full", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
            else {
                resources.glass +=2;
                resources.bolt -=1;
                fetchvalues();
                fetchunlocks();
            }
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;You don't have any bolts left", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_bolt_buy.onclick = function() {
    if (resources.glass>=3) {
        if (resources.bolt+1<=storage.bolt) {
            resources.glass -=3;
            resources.bolt +=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
             Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can't buy! Storage for&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;full", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough glass", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_metal_sell.onclick = function() {
    if (resources.metal>=1) {
        if (resources.bolt==storage.bolt) {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can't sell! Storage for&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;full", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
        else {
            resources.bolt +=1;
            resources.metal -=1;
            fetchvalues();
            fetchunlocks();
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;You don't have any metal left", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_metal_buy.onclick = function() {
    if (resources.bolt>=2) {
        if (resources.metal+1<=storage.metal) {
            resources.bolt -=2;
            resources.metal +=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
             Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can't buy! Storage for&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;full", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough bolts", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_wire_sell.onclick = function() {
    if (resources.wire>=1) {
        if (resources.metal==storage.metal) {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can't sell! Storage for&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;full", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
        else {
            resources.metal +=1;
            resources.wire -=1;
            fetchvalues();
            fetchunlocks();
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;You don't have any wires left", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_wire_buy.onclick = function() {
    if (resources.metal>=2) {
        if (resources.wire+1<=storage.wire) {
            resources.metal -=2;
            resources.wire +=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
             Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can't buy! Storage for&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;full", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough metal", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_board_sell.onclick = function() {
    if (resources.board>=1) {
        resources.money +=2;
        resources.board -=1;
        fetchvalues();
        fetchunlocks();
        }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;You don't have any electronic boards left", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

shop_board_buy.onclick = function() {
    if (resources.money>=4) {
        if (resources.board+1<=storage.board) {
            resources.money -=4;
            resources.board +=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
             Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can't buy! Storage for&nbsp;<img src='Images/board_white.svg' width='20' height='20'>&nbsp;full", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

function SellBonsai(sbonsai) {
    if (x_shop==1) {
        if (sbonsai==1) {
            SellBonsaiExecution(bonsai001);
        }
        else if (sbonsai==2) {
            SellBonsaiExecution(bonsai002);
        }
        else if (sbonsai==3) {
            SellBonsaiExecution(bonsai003);
        }
        else if (sbonsai==4) {
            SellBonsaiExecution(bonsai004);
        }
        else if (sbonsai==5) {
            SellBonsaiExecution(bonsai005);
        }
        else if (sbonsai==6) {
            SellBonsaiExecution(bonsai006);
        }
        else if (sbonsai==7) {
            SellBonsaiExecution(bonsai007);
        }
        else if (sbonsai==8) {
            SellBonsaiExecution(bonsai008);
        }
        else if (sbonsai==9) {
            SellBonsaiExecution(bonsai009);
        }
        else if (sbonsai==10) {
            SellBonsaiExecution(bonsai010);
        }
    }else if (x_shop==11) {
        if (sbonsai==1) {
            SellBonsaiExecution(bonsai011);
        }
        else if (sbonsai==2) {
            SellBonsaiExecution(bonsai012);
        }
        else if (sbonsai==3) {
            SellBonsaiExecution(bonsai013);
        }
        else if (sbonsai==4) {
            SellBonsaiExecution(bonsai014);
        }
        else if (sbonsai==5) {
            SellBonsaiExecution(bonsai015);
        }
        else if (sbonsai==6) {
            SellBonsaiExecution(bonsai016);
        }
        else if (sbonsai==7) {
            SellBonsaiExecution(bonsai017);
        }
        else if (sbonsai==8) {
            SellBonsaiExecution(bonsai018);
        }
        else if (sbonsai==9) {
            SellBonsaiExecution(bonsai019);
        }
        else if (sbonsai==10) {
            SellBonsaiExecution(bonsai020);
        }
    }
}

function SellBonsaiExecution(bonsaixx) {
    if (bonsaixx.treetype>0) {
        if (bonsaixx.growing==0) {
            resources.money +=bonsaixx.price;
            bonsaixx.name="-";
            bonsaixx.id=0;
            bonsaixx.idstring="-";
            bonsaixx.treetype=0;
            bonsaixx.treetypegroup=0;
            bonsaixx.styletype=0;
            bonsaixx.treequality=0;
            bonsaixx.newpotentialfoliage=0;
            bonsaixx.newpotentialbranches=0;
            bonsaixx.newpotentialtrunk=0;
            bonsaixx.newpotentialroots=0;
            bonsaixx.inheritedpotentialfoliage=0;
            bonsaixx.inheritedpotentialbranches=0;
            bonsaixx.inheritedpotentialtrunk=0;
            bonsaixx.inheritedpotentialroots=0;
            bonsaixx.obtainedpotentialfoliage=0;
            bonsaixx.obtainedpotentialbranches=0;
            bonsaixx.obtainedpotentialtrunk=0;
            bonsaixx.obtainedpotentialroots=0;
            bonsaixx.basebeauty=0;
            bonsaixx.shiny=0;
            bonsaixx.nature=0;
            bonsaixx.level=0;
            bonsaixx.foliage=0;
            bonsaixx.branches=0;
            bonsaixx.trunk=0;
            bonsaixx.roots=0;
            bonsaixx.growing=0;
            bonsaixx.growing_zeit=0;
            bonsaixx.level_new=0;
            bonsaixx.foliage_new=0;
            bonsaixx.branches_new=0;
            bonsaixx.trunk_new=0;
            bonsaixx.roots_new=0;
            bonsaixx.leftpoints=0;
            bonsaixx.level_lp=0;
            bonsaixx.foliage_lp=0;
            bonsaixx.branches_lp=0;
            bonsaixx.trunk_lp=0;
            bonsaixx.roots_lp=0;
            bonsaixx.rank=1;
            bonsaixx.rank_lvl=1;
            bonsaixx.rank_tq=1;
            bonsaixx.rank_ap=1;
            bonsaixx.rank_pot=1;
            bonsaixx.rank_pre=1;
            bonsaixx.rank_look=1;
            bonsaixx.price=0;
            
            menu_change();
            menu_shop_change();
            menu_contests_change();
            menu_changeA_change();
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can not sell a growing bonsai", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
}

function SellSeedling(seedlingx) {
    if (seedlingx.treetype>0) {
        resources.money +=seedlingx.price;
        seedlingx.treetype=0;
        seedlingx.treetypegroup=0;
        seedlingx.styletype=0;
        seedlingx.treequality=0;
        seedlingx.shiny=0;
        seedlingx.price=0;
        state.seedlings -=1;
        state.seedlings_ontheway -=1;
        $(document).ready(function(){
            $('#menu_style2').hide();
            $('#menu_style2_mobile').hide();
           
            $('#menu_style').val(seedlingx.styletype);
            $('#menu_style').trigger('change');
           
            $('#menu_style_mobile').val(seedlingx.styletype);
            $('#menu_style_mobile').trigger('change');
        });
        document.getElementById("seedling_detail_type").innerHTML = '<img src="Images/pot.svg" width="100" height="100">';
        document.getElementById("seedling_detail_type_mobile").innerHTML = '<img src="Images/pot.svg" width="100" height="100">';        
        if (seedlingx==seedling1) {
            fetchimage_seedling ("a", seedling1);
            document.getElementById("seedlinga_center").style.cursor= "auto"; 
            seedlinga_center.className = "";
        }
        if (seedlingx==seedling2) {
            fetchimage_seedling ("b", seedling2);
            document.getElementById("seedlingb_center").style.cursor= "auto"; 
            seedlingb_center.className = "";
        }
        if (seedlingx==seedling3) {
            fetchimage_seedling ("c", seedling3);
            document.getElementById("seedlingc_center").style.cursor= "auto"; 
            seedlingc_center.className = "";
        }
        if (seedlingx==seedling4) {
            fetchimage_seedling ("d", seedling4);
            document.getElementById("seedlingd_center").style.cursor= "auto"; 
            seedlingd_center.className = "";
        }
        if (seedlingx==seedling5) {
            fetchimage_seedling ("e", seedling5);
            document.getElementById("seedlinge_center").style.cursor= "auto"; 
            seedlinge_center.className = "";
        }
        if (seedlingx==seedling6) {
            fetchimage_seedling ("f", seedling6);
            document.getElementById("seedlingf_center").style.cursor= "auto"; 
            seedlingf_center.className = "";
        }
        PlantSeedlingReset();
        fetchvalues();
        fetchunlocks();
    }
}

function SellSeedlingAll() {
    SellSeedling(seedling1);
    SellSeedling(seedling2);
    SellSeedling(seedling3);
    SellSeedling(seedling4);
    SellSeedling(seedling5);
    SellSeedling(seedling6);
}

function BuyBackpack() {
    if (equipment.backpack==0) {
        if (resources.money>=5) {
            resources.money -=5;
            equipment.backpack=1;
            tasks.tracker008=2;
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else {}
}

function BuyLabkit() {
    if (skills.level>=3) {
    if (equipment.labkit==0) {
        if (resources.money>=20) {
            resources.money -=20;
            equipment.labkit=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else {}
    }
}

function BuyMapAreares02() {
    if (skills.level>=5) {
    if (equipment.map_areares2==0) {
        if (resources.money>=10) {
            resources.money -=10;
            equipment.map_areares2=1;
            tasks.tracker010=2;
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else {}
    }
}

function BuyMapArea02() {
    if (skills.level>=10) {
    if (equipment.map_area02==0) {
        if (resources.money>=20) {
            resources.money -=20;
            equipment.map_area02=1;
            tasks.tracker011=2;
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else {}
    }
}

function BuyBookStyles2() {
    if (skills.level>=8) {
    if (equipment.book_styles2==0) {
        if (resources.money>=25) {
            resources.money -=25;
            equipment.book_styles2=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else {}
    }
}

function BuyBookofPatience() {
    if (skills.level>=3) {
    if (equipment.book_of_patience1==0) {
        if (resources.money>=25) {
            resources.money -=25;
            equipment.book_of_patience1=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else {}
    }
}

function BuyMemoryChips() {
    if (skills.level>=3) {
    if (equipment.memory_chips1==0) {
        if (resources.money>=40) {
            resources.money -=40;
            equipment.memory_chips1=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else {}
    }
}

function BuyBookRobot1() {
    if (equipment.book_robot1==0) {
        if (resources.money>=5) {
            resources.money -=5;
            equipment.book_robot1=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else {}
}

function BuyBookGrowing1() {
    if (skills.level>=2) {
    if (equipment.book_growing1==0) {
        if (resources.money>=5) {
            resources.money -=5;
            equipment.book_growing1=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else {}
    }
}

function BuyBookShaping1() {
    if (skills.level>=4) {
    if (equipment.book_shaping1==0) {
        if (resources.money>=5) {
            resources.money -=5;
            equipment.book_shaping1=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else {}
    }
}

function BuyBuildingTools() {
    if (skills.level>=5) {
    if (equipment.buildingtools==0) {
        if (resources.money>=15) {
            resources.money -=15;
            equipment.buildingtools=1;
            fetchvalues();
            fetchunlocks();
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money", "snackbar_attention", 3000, "snackbar_attention show3s");
        } 
    }
    else {}
    }
}