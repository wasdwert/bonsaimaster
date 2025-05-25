function clicker(worker) {
    if (worker.growing>0) {
        if (worker.growing==1) {
            clicker_bonsai(bonsai001);            
        }
        else if (worker.growing==2) {
            clicker_bonsai(bonsai002);
        }
        else if (worker.growing==3) {
            clicker_bonsai(bonsai003);
        }
        else if (worker.growing==4) {
            clicker_bonsai(bonsai004);
        }
        else if (worker.growing==5) {
            clicker_bonsai(bonsai005);
        }
        else if (worker.growing==6) {
            clicker_bonsai(bonsai006);
        }
        else if (worker.growing==7) {
            clicker_bonsai(bonsai007);
        }
        else if (worker.growing==8) {
            clicker_bonsai(bonsai008);
        }
        else if (worker.growing==9) {
            clicker_bonsai(bonsai009);
        }
        else if (worker.growing==10) {
            clicker_bonsai(bonsai010);
        }
        else if (worker.growing==11) {
            clicker_bonsai(bonsai011);
        }
        else if (worker.growing==12) {
            clicker_bonsai(bonsai012);
        }
        else if (worker.growing==13) {
            clicker_bonsai(bonsai013);
        }
        else if (worker.growing==14) {
            clicker_bonsai(bonsai014);
        }
        else if (worker.growing==15) {
            clicker_bonsai(bonsai015);
        }
        else if (worker.growing==16) {
            clicker_bonsai(bonsai016);
        }
        else if (worker.growing==17) {
            clicker_bonsai(bonsai017);
        }
        else if (worker.growing==18) {
            clicker_bonsai(bonsai018);
        }
        else if (worker.growing==19) {
            clicker_bonsai(bonsai019);
        }
        else if (worker.growing==20) {
            clicker_bonsai(bonsai020);
        }
    }
    if (worker.expedition>0) {
        if (worker.expedition_zeit>0) {
            if (worker==worker01) {
                if (worker01.expedition_zeit>=skills.care) {
                    worker01.expedition_zeit-=skills.care;
                }
                else {
                    worker01.expedition_zeit=0;
                }
                document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker01.expedition_zeit)+"&nbsp;left)";  
                if (worker01.expedition<10) {
                    seedling_countdown(worker01);
                }
                else {
                    resource_countdown(worker01);
                }
                if (worker01.expedition==0) {
                    document.getElementById("zeit_worker01").innerHTML = "";  
                    document.getElementById("worker1_task_img").innerHTML = '<img src="Images/idle.svg" width="20" height="20">'; 
                    document.getElementById("worker1_task").innerHTML = 'Ready for new task'; 
                    $(document).ready(function(){
                        $('#worker1_task_none').show();
                        $('#worker1_task_clicker').hide();
                    });
                    document.getElementById("worker1_task_mobile").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready';
                    document.getElementById("worker1_task_mobilexs").innerHTML = '<img src="Images/idle.svg" width="20" height="20">';   
                }
            }
            if (worker==worker02) {
                if (worker02.expedition_zeit>=skills.care) {
                    worker02.expedition_zeit-=skills.care;
                }
                else {
                    worker02.expedition_zeit=0;
                }
                document.getElementById("zeit_worker02").innerHTML = "("+timetracker(worker02.expedition_zeit)+"&nbsp;left)";  
                if (worker02.expedition<10) {
                    seedling_countdown(worker02);
                }
                else {
                    resource_countdown(worker02);
                }
                if (worker02.expedition==0) {
                    document.getElementById("zeit_worker02").innerHTML = "";  
                    document.getElementById("worker2_task_img").innerHTML = '<img src="Images/idle.svg" width="20" height="20">'; 
                    document.getElementById("worker2_task").innerHTML = 'Ready for new task'; 
                    $(document).ready(function(){
                        $('#worker2_task_none').show();
                        $('#worker2_task_clicker').hide();
                    });
                    document.getElementById("worker2_task_mobile").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready';
                    document.getElementById("worker2_task_mobilexs").innerHTML = '<img src="Images/idle.svg" width="20" height="20">'; 
                }
            }
            if (worker==worker03) {
                if (worker03.expedition_zeit>=skills.care) {
                    worker03.expedition_zeit-=skills.care;
                }
                else {
                    worker03.expedition_zeit=0;
                }
                document.getElementById("zeit_worker03").innerHTML = "("+timetracker(worker03.expedition_zeit)+"&nbsp;left)";  
                if (worker03.expedition<10) {
                    seedling_countdown(worker03);
                }
                else {
                    resource_countdown(worker03);
                }
                if (worker03.expedition==0) {
                    document.getElementById("zeit_worker03").innerHTML = "";  
                    document.getElementById("worker3_task_img").innerHTML = '<img src="Images/idle.svg" width="20" height="20">'; 
                    document.getElementById("worker3_task").innerHTML = 'Ready for new task'; 
                    $(document).ready(function(){
                        $('#worker3_task_none').show();
                        $('#worker3_task_clicker').hide();
                    });
                    document.getElementById("worker3_task_mobile").innerHTML = '<img src="Images/idle.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Ready';
                    document.getElementById("worker3_task_mobilexs").innerHTML = '<img src="Images/idle.svg" width="20" height="20">';  
                }
            }
        }
    }
    if (worker.crafting!=0) {
        crafting_countdown_clicker(worker);
    }
    fetchvalues();
}

function clicker_bonsai(bonsai) {
    if (bonsai.growing_zeit>=skills.care) {
        bonsai.growing_zeit-=skills.care;
    }
    else {
        bonsai.growing_zeit=0;
    }
    Bonsai_Growing_Intervall(bonsai);
    menu_change();
    menu_shop_change();
    menu_contests_change();
    menu_changeA_change();
}

function crafting_countdown_clicker(worker) {
    if (worker.crafting == "Compost" || worker.crafting == "Fertilizer") {
        if (worker.crafting_zeit>=skills.care) {
            worker.crafting_zeit-=skills.care;
        }
        else {
            worker.crafting_zeit=0;
        }
        if (worker.crafting_zeitone>=skills.care) {
            worker.crafting_zeitone-=skills.care;
        }
        else {
            crafting_countdown_leftover=skills.care;
            crafting_countdown_leftover-=worker.crafting_zeitone;
            worker.crafting_zeitone=0;
        }    
    }
    if (worker.crafting == "Robot" || worker.crafting == "Greenhouse" || worker.crafting == "Storage1" || worker.crafting == "Storage2" || worker.crafting == "Storage3" || worker.crafting == "Storage4" || worker.crafting == "Storage5" || worker.crafting == "Storage6" || worker.crafting == "Storage7" || worker.crafting == "Storage8" || worker.crafting == "Storage9" || worker.crafting == "Storage10" || worker.crafting == "Storage11" || worker.crafting == "Storage12" || worker.crafting == "Storage13" || worker.crafting == "Storage14" || worker.crafting == "Storage15" || worker.crafting == "Storage16" || worker.crafting == "Storage17") {
        if (worker.crafting_zeit>=skills.care) {
            worker.crafting_zeit-=skills.care;
        }
        else {
            worker.crafting_zeit=0;
        }
    }
    crafting_countdown2(worker);
}