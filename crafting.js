function crafting_countdown(worker) {
    if (worker.crafting == "Compost" || worker.crafting == "Fertilizer") {
        worker.crafting_zeit -= 1;
        worker.crafting_zeitone -=1;        
    }
    if (worker.crafting == "Robot" || worker.crafting == "Greenhouse" || worker.crafting == "Storage1" || worker.crafting == "Storage2" || worker.crafting == "Storage3" || worker.crafting == "Storage4" || worker.crafting == "Storage5" || worker.crafting == "Storage6" || worker.crafting == "Storage7" || worker.crafting == "Storage8" || worker.crafting == "Storage9" || worker.crafting == "Storage10" || worker.crafting == "Storage11" || worker.crafting == "Storage12" || worker.crafting == "Storage13" || worker.crafting == "Storage14" || worker.crafting == "Storage15" || worker.crafting == "Storage16" || worker.crafting == "Storage17") {
        worker.crafting_zeit -= 1;
    }
    crafting_countdown2(worker);
}

function crafting_countdown2(worker) {
    if (worker.crafting == "Compost") {
        if (worker==worker01) {
            document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)"; 
            document.getElementById("worker1_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
            document.getElementById("worker1_task").innerHTML = 'Crafting';
            $(document).ready(function(){
                $('#worker1_task_none').hide();
                $('#worker1_task_clicker').show();
            });
        }
        if (worker==worker02) {
            document.getElementById("zeit_worker02").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)";
            document.getElementById("worker2_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
            document.getElementById("worker2_task").innerHTML = 'Crafting';
            $(document).ready(function(){
                $('#worker2_task_none').hide();
                $('#worker2_task_clicker').show();
            });
        }  
        if (worker==worker03) {
            document.getElementById("zeit_worker03").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)";
            document.getElementById("worker3_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
            document.getElementById("worker3_task").innerHTML = 'Crafting';
            $(document).ready(function(){
                $('#worker3_task_none').hide();
                $('#worker3_task_clicker').show();
            });  
        } 
        if (worker.crafting_zeitone==0) {
            resources.compost1 +=1;
            document.getElementById("compost1").innerText = resources.compost1.toLocaleString('en', {minimumFractionDigits: 0}); 
            cr_compost1.producing -=1;
            if (cr_compost1.producing>0) {
                worker.crafting_zeitone = cr_compost1.time_original;
                worker.crafting_zeitone -= crafting_countdown_leftover;
                crafting_countdown_leftover=0;
            }
            //task007trigger();
        }
        if (worker.crafting_zeit==0) {
            worker.crafting = 0;
            worker.busy = 0;
            state.workers_available +=1;
            cr_compost1.producing = 0;
            cr_compost1.ongoing = 0;
            
        }
    }
    if (worker.crafting == "Fertilizer") {
        if (worker==worker01) {
            document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)"; 
            document.getElementById("worker1_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
            document.getElementById("worker1_task").innerHTML = 'Crafting';
            $(document).ready(function(){
                $('#worker1_task_none').hide();
                $('#worker1_task_clicker').show();
            });
        }
        if (worker==worker02) {
            document.getElementById("zeit_worker02").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)";
            document.getElementById("worker2_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
            document.getElementById("worker2_task").innerHTML = 'Crafting';
            $(document).ready(function(){
                $('#worker2_task_none').hide();
                $('#worker2_task_clicker').show();
            });
        }  
        if (worker==worker03) {
            document.getElementById("zeit_worker03").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)";
            document.getElementById("worker3_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
            document.getElementById("worker3_task").innerHTML = 'Crafting';
            $(document).ready(function(){
                $('#worker3_task_none').hide();
                $('#worker3_task_clicker').show();
            });  
        } 
        if (worker.crafting_zeitone==0) {
            resources.fertilizer1 +=1;
            document.getElementById("fertilizer1").innerText = resources.fertilizer1.toLocaleString('en', {minimumFractionDigits: 0}); 
            cr_fertilizer1.producing -=1;
            if (cr_fertilizer1.producing>0) {
                worker.crafting_zeitone = cr_fertilizer1.time_original;
                worker.crafting_zeitone -= crafting_countdown_leftover;
                crafting_countdown_leftover=0;
            }
            //task007trigger();
        }
        if (worker.crafting_zeit==0) {
            worker.crafting = 0;
            worker.busy = 0;
            state.workers_available +=1;
            cr_fertilizer1.producing = 0;
            cr_fertilizer1.ongoing = 0;
            
        }
    }
    if (worker.crafting == "Robot") {
        if (worker==worker01) {
            document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)";
            document.getElementById("worker1_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
            document.getElementById("worker1_task").innerHTML = 'Crafting';
            $(document).ready(function(){
                $('#worker1_task_none').hide();
                $('#worker1_task_clicker').show();
            });  
        }
        if (worker==worker02) {
            document.getElementById("zeit_worker02").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)";
            document.getElementById("worker2_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
            document.getElementById("worker2_task").innerHTML = 'Crafting';
            $(document).ready(function(){
                $('#worker2_task_none').hide();
                $('#worker2_task_clicker').show();
            });  
        }
        if (worker==worker03) {
            document.getElementById("zeit_worker03").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)";
            document.getElementById("worker3_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
            document.getElementById("worker3_task").innerHTML = 'Crafting';
            $(document).ready(function(){
                $('#worker3_task_none').hide();
                $('#worker3_task_clicker').show();
            });  
        }
        if (worker.crafting_zeit==0) {
            worker.crafting = 0;
            worker.busy = 0;
            state.workers_available +=2;
            state.workers_total +=1;
            if (state.workers_total==2) {
                worker02.busy=0;
                $(document).ready(function() {
                    $('#worker02div').show();
                });
                tutorial_function ();
            }
            if (state.workers_total==3) {
                worker03.busy=0;
                $(document).ready(function() {
                    $('#worker03div').show();
                });
            }
            cr_robot1.producing = 0;
            cr_robot1.ongoing = 0;
            
            //task005trigger();
            //task011trigger();
        }
    }
    if (worker.crafting == "Greenhouse") {
        if (worker==worker01) {
            document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)";
            document.getElementById("worker1_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
            document.getElementById("worker1_task").innerHTML = 'Crafting';
            $(document).ready(function(){
                $('#worker1_task_none').hide();
                $('#worker1_task_clicker').show();
            });  
        }
        if (worker==worker02) {
            document.getElementById("zeit_worker02").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)";
            document.getElementById("worker2_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
            document.getElementById("worker2_task").innerHTML = 'Crafting';
            $(document).ready(function(){
                $('#worker2_task_none').hide();
                $('#worker2_task_clicker').show();
            });  
        }
        if (worker==worker03) {
            document.getElementById("zeit_worker03").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)";
            document.getElementById("worker3_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
            document.getElementById("worker3_task").innerHTML = 'Crafting';
            $(document).ready(function(){
                $('#worker3_task_none').hide();
                $('#worker3_task_clicker').show();
            });  
        }
        if (worker.crafting_zeit==0) {
            worker.crafting = 0;
            worker.busy = 0;
            state.workers_available +=1;
            state.bonsaislots +=2;
            fetchbonsaiselect();
            cr_greenhouse1.producing = 0;
            cr_greenhouse1.ongoing = 0;
            
            //task005trigger();
            //task011trigger();
        }
    }
    if (worker.crafting == "Storage1" || worker.crafting == "Storage2" || worker.crafting == "Storage3" || worker.crafting == "Storage4" || worker.crafting == "Storage5" || worker.crafting == "Storage6" || worker.crafting == "Storage7" || worker.crafting == "Storage8" || worker.crafting == "Storage9" || worker.crafting == "Storage10" || worker.crafting == "Storage11" || worker.crafting == "Storage12" || worker.crafting == "Storage13" || worker.crafting == "Storage14" || worker.crafting == "Storage15" || worker.crafting == "Storage16" || worker.crafting == "Storage17") {
        if (worker==worker01) {
            document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)";
            document.getElementById("worker1_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
            document.getElementById("worker1_task").innerHTML = 'Crafting';
            $(document).ready(function(){
                $('#worker1_task_none').hide();
                $('#worker1_task_clicker').show();
            });  
        }
        if (worker==worker02) {
            document.getElementById("zeit_worker02").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)";
            document.getElementById("worker2_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
            document.getElementById("worker2_task").innerHTML = 'Crafting';
            $(document).ready(function(){
                $('#worker2_task_none').hide();
                $('#worker2_task_clicker').show();
            });  
        }
        if (worker==worker03) {
            document.getElementById("zeit_worker03").innerHTML = "("+timetracker(worker.crafting_zeit)+"&nbsp;left)";
            document.getElementById("worker3_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
            document.getElementById("worker3_task").innerHTML = 'Crafting';
            $(document).ready(function(){
                $('#worker3_task_none').hide();
                $('#worker3_task_clicker').show();
            });  
        }
        if (worker.crafting_zeit==0) {
            if (worker.crafting == "Storage1") {
                if (storage.wood==25) {
                    storage.wood=50;
                }
                else if (storage.wood==50) {
                    storage.wood=100;
                }
                else if (storage.wood==100) {
                    storage.wood=250;
                }
                storage.wood_upgrading=0;
            }
            if (worker.crafting == "Storage2") {
                if (storage.glass==25) {
                    storage.glass=50;
                }
                else if (storage.glass==50) {
                    storage.glass=100;
                }
                else if (storage.glass==100) {
                    storage.glass=250;
                }
                storage.glass_upgrading=0;
            }
            if (worker.crafting == "Storage3") {
                if (storage.bolt==25) {
                    storage.bolt=50;
                }
                else if (storage.bolt==50) {
                    storage.bolt=100;
                }
                else if (storage.bolt==100) {
                    storage.bolt=250;
                }
                storage.bolt_upgrading=0;
            }
            if (worker.crafting == "Storage4") {
                if (storage.metal==25) {
                    storage.metal=50;
                }
                else if (storage.metal==50) {
                    storage.metal=100;
                }
                else if (storage.metal==100) {
                    storage.metal=250;
                }
                storage.metal_upgrading=0;
            }
            if (worker.crafting == "Storage5") {
                if (storage.wire==25) {
                    storage.wire=50;
                }
                else if (storage.wire==50) {
                    storage.wire=100;
                }
                else if (storage.wire==100) {
                    storage.wire=250;
                }
                storage.wire_upgrading=0;
            }
            if (worker.crafting == "Storage6") {
                if (storage.organic_waste==25) {
                    storage.organic_waste=50;
                }
                else if (storage.organic_waste==50) {
                    storage.organic_waste=100;
                }
                else if (storage.organic_waste==100) {
                    storage.organic_waste=250;
                }
                storage.organic_waste_upgrading=0;
            }
            if (worker.crafting == "Storage7") {
                if (storage.compost1==25) {
                    storage.compost1=50;
                }
                else if (storage.compost1==50) {
                    storage.compost1=100;
                }
                else if (storage.compost1==100) {
                    storage.compost1=250;
                }
                storage.compost1_upgrading=0;
            }
            if (worker.crafting == "Storage11") {
                if (storage.board==25) {
                    storage.board=50;
                }
                else if (storage.board==50) {
                    storage.board=100;
                }
                else if (storage.board==100) {
                    storage.board=250;
                }
                storage.board_upgrading=0;
            }
            if (worker.crafting == "Storage14") {
                if (storage.chemical==25) {
                    storage.chemical=50;
                }
                else if (storage.chemical==50) {
                    storage.chemical=100;
                }
                else if (storage.chemical==100) {
                    storage.chemical=250;
                }
                storage.chemical_upgrading=0;
            }
            if (worker.crafting == "Storage15") {
                if (storage.fertilizer1==25) {
                    storage.fertilizer1=50;
                }
                else if (storage.fertilizer1==50) {
                    storage.fertilizer1=100;
                }
                else if (storage.fertilizer1==100) {
                    storage.fertilizer1=250;
                }
                storage.fertilizer1_upgrading=0;
            }
            fetchvalues();
            fetchunlocks();
            worker.crafting = 0;
            worker.busy = 0;
            state.workers_available +=1;
        }
    }
    if (worker01.crafting==0 & worker01.busy==0) {
        document.getElementById("zeit_worker01").innerHTML = "";
        document.getElementById("worker1_task_img").innerHTML = '<img src="Images/idle.svg" width="20" height="20">'; 
        document.getElementById("worker1_task").innerHTML = 'Ready for new task'; 
        $(document).ready(function(){
            $('#worker1_task_none').show();
            $('#worker1_task_clicker').hide();
        });  
    }
    if (worker02.crafting==0 & worker02.busy==0) {
        document.getElementById("zeit_worker02").innerHTML = "";
        document.getElementById("worker2_task_img").innerHTML = '<img src="Images/idle.svg" width="20" height="20">'; 
        document.getElementById("worker2_task").innerHTML = 'Ready for new task'; 
        $(document).ready(function(){
            $('#worker2_task_none').show();
            $('#worker2_task_clicker').hide();
        });  
    }
    if (worker03.crafting==0 & worker03.busy==0) {
        document.getElementById("zeit_worker03").innerHTML = "";  
        document.getElementById("worker3_task_img").innerHTML = '<img src="Images/idle.svg" width="20" height="20">'; 
        document.getElementById("worker3_task").innerHTML = 'Ready for new task'; 
        $(document).ready(function(){
            $('#worker3_task_none').show();
            $('#worker3_task_clicker').hide();
        });  
    }
}

var cr_compost1 = {
    q: 1,
    ow: 1,
    ow_original: 1,
    time: 5,
    time_original: 5,
    ongoing: 0,
    producing: 0,
}
var cr_fertilizer1 = {
    q: 1,
    ow: 2,
    ow_original: 2,
    chemical: 1,
    chemical_original: 1,
    time: 30,
    time_original: 30,
    ongoing: 0,
    producing: 0,
}
var cr_robot1 = {
    ongoing: 0,
    producing: 0,
}

var cr_greenhouse1 = {
    ongoing: 0,
    producing: 0,
}

function craft_compost1() {
    if (cr_compost1.q==0) {}
    else {
    if (state.workers_available>0) {
        if (cr_compost1.ongoing==0) {
            if (worker01.busy==0) {
                if (resources.organic_waste>=cr_compost1.ow) {
                    if (cr_compost1.q+resources.compost1<=storage.compost1) {
                        cr_compost1.ongoing=1;
                        state.workers_available -=1;
                        worker01.busy =1;
                        worker01.crafting = "Compost";
                        resources.organic_waste = resources.organic_waste-cr_compost1.ow;
                        document.getElementById("organic_waste").innerHTML = resources.organic_waste;
                        cr_compost1.producing = cr_compost1.q;
                        worker01.crafting_zeit = cr_compost1.time;
                        worker01.crafting_zeitone = cr_compost1.time_original;
                        document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker01.crafting_zeit)+"&nbsp;left)";
                        document.getElementById("worker1_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
                        document.getElementById("worker1_task").innerHTML = 'Crafting';
                        $(document).ready(function(){
                            $('#worker1_task_none').hide();
                            $('#worker1_task_clicker').show();
                        });
                    
                        cr_compost1.q =1;
                        document.getElementById("cr_compost1_q").innerHTML= cr_compost1.q;
                        cr_compost1.ow = cr_compost1.q*cr_compost1.ow_original;
                        document.getElementById("cr_compost1_ow").innerHTML= cr_compost1.ow;
                        cr_compost1.time = cr_compost1.q*cr_compost1.time_original;
                        document.getElementById("cr_compost1_time").innerHTML= timetracker(cr_compost1.time);
                    }
                    else {
                        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough storage capacity to craft", "snackbar_attention", 3000, "snackbar_attention show3s");
                    }
                }
                else {
                    Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough resources", "snackbar_attention", 3000, "snackbar_attention show3s");
                }
            }
            else if (worker02.busy==0) {
                if (resources.organic_waste>=cr_compost1.ow) {
                    if (cr_compost1.q+resources.compost1<=storage.compost1) {
                        cr_compost1.ongoing=1;
                        state.workers_available -=1;
                        worker02.busy =1;
                        worker02.crafting = "Compost";
                        resources.organic_waste = resources.organic_waste-cr_compost1.ow;
                        document.getElementById("organic_waste").innerHTML = resources.organic_waste;
                        cr_compost1.producing = cr_compost1.q;
                        worker02.crafting_zeit = cr_compost1.time;
                        worker02.crafting_zeitone = cr_compost1.time_original;
                        document.getElementById("zeit_worker02").innerHTML = "("+timetracker(worker02.crafting_zeit)+"&nbsp;left)";
                        document.getElementById("worker2_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
                        document.getElementById("worker2_task").innerHTML = 'Crafting';
                        $(document).ready(function(){
                            $('#worker2_task_none').hide();
                            $('#worker2_task_clicker').show();
                        });
                    
                        cr_compost1.q =1;
                        document.getElementById("cr_compost1_q").innerHTML= cr_compost1.q;
                        cr_compost1.ow = cr_compost1.q*cr_compost1.ow_original;
                        document.getElementById("cr_compost1_ow").innerHTML= cr_compost1.ow;
                        cr_compost1.time = cr_compost1.q*cr_compost1.time_original;
                        document.getElementById("cr_compost1_time").innerHTML= timetracker(cr_compost1.time);
                    }
                    else {
                        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough storage capacity to craft", "snackbar_attention", 3000, "snackbar_attention show3s");
                    }
                }
                else {
                    Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough resources", "snackbar_attention", 3000, "snackbar_attention show3s");
                }
            }
            else if (worker03.busy==0) {
                if (resources.organic_waste>=cr_compost1.ow) {
                    if (cr_compost1.q+resources.compost1<=storage.compost1) {
                        cr_compost1.ongoing=1;
                        state.workers_available -=1;
                        worker03.busy =1;
                        worker03.crafting = "Compost";
                        resources.organic_waste = resources.organic_waste-cr_compost1.ow;
                        document.getElementById("organic_waste").innerHTML = resources.organic_waste;
                        cr_compost1.producing = cr_compost1.q;
                        worker03.crafting_zeit = cr_compost1.time;
                        worker03.crafting_zeitone = cr_compost1.time_original;
                        document.getElementById("zeit_worker03").innerHTML = "("+timetracker(worker03.crafting_zeit)+"&nbsp;left)";
                        document.getElementById("worker3_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
                        document.getElementById("worker3_task").innerHTML = 'Crafting';
                        $(document).ready(function(){
                            $('#worker3_task_none').hide();
                            $('#worker3_task_clicker').show();
                        });
                    
                        cr_compost1.q =1;
                        document.getElementById("cr_compost1_q").innerHTML= cr_compost1.q;
                        cr_compost1.ow = cr_compost1.q*cr_compost1.ow_original;
                        document.getElementById("cr_compost1_ow").innerHTML= cr_compost1.ow;
                        cr_compost1.time = cr_compost1.q*cr_compost1.time_original;
                        document.getElementById("cr_compost1_time").innerHTML= timetracker(cr_compost1.time);
                    }
                    else {
                        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough storage capacity to craft", "snackbar_attention", 3000, "snackbar_attention show3s");
                    }
                }
                else {
                    Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough resources", "snackbar_attention", 3000, "snackbar_attention show3s");
                }
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Crafting compost already on the way", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;No workers available", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    }
}

function craft_fertilizer1() {
    if (cr_fertilizer1.q==0) {}
    else {
    if (state.workers_available>0) {
        if (cr_fertilizer1.ongoing==0) {
            if (worker01.busy==0) {
                if (resources.organic_waste>=cr_fertilizer1.ow && resources.chemical>=cr_fertilizer1.chemical) {
                    if (cr_fertilizer1.q+resources.fertilizer1<=storage.fertilizer1) {
                        cr_fertilizer1.ongoing=1;
                        state.workers_available -=1;
                        worker01.busy =1;
                        worker01.crafting = "Fertilizer";
                        resources.organic_waste = resources.organic_waste-cr_fertilizer1.ow;
                        resources.chemical = resources.chemical-cr_fertilizer1.chemical;
                        document.getElementById("organic_waste").innerHTML = resources.organic_waste;
                        document.getElementById("chemical").innerHTML = resources.chemical;
                        cr_fertilizer1.producing = cr_fertilizer1.q;
                        worker01.crafting_zeit = cr_fertilizer1.time;
                        worker01.crafting_zeitone = cr_fertilizer1.time_original;
                        document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker01.crafting_zeit)+"&nbsp;left)";
                        document.getElementById("worker1_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
                        document.getElementById("worker1_task").innerHTML = 'Crafting';
                        $(document).ready(function(){
                            $('#worker1_task_none').hide();
                            $('#worker1_task_clicker').show();
                        });
                    
                        cr_fertilizer1.q =1;
                        document.getElementById("cr_fertilizer1_q").innerHTML= cr_fertilizer1.q;
                        cr_fertilizer1.ow = cr_fertilizer1.q*cr_fertilizer1.ow_original;
                        document.getElementById("cr_fertilizer1_ow").innerHTML= cr_fertilizer1.ow;
                        cr_fertilizer1.chemical = cr_fertilizer1.q*cr_fertilizer1.chemical_original;
                        document.getElementById("cr_fertilizer1_chemical").innerHTML= cr_fertilizer1.chemical;
                        cr_fertilizer1.time = cr_fertilizer1.q*cr_fertilizer1.time_original;
                        document.getElementById("cr_fertilizer1_time").innerHTML= timetracker(cr_fertilizer1.time);
                    }
                    else {
                        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough storage capacity to craft", "snackbar_attention", 3000, "snackbar_attention show3s");
                    }
                }
                else {
                    Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough resources", "snackbar_attention", 3000, "snackbar_attention show3s");
                }
            }
            else if (worker02.busy==0) {
                if (resources.organic_waste>=cr_fertilizer1.ow && resources.chemical>=cr_fertilizer1.chemical) {
                    if (cr_fertilizer1.q+resources.fertilizer1<=storage.fertilizer1) {
                        cr_fertilizer1.ongoing=1;
                        state.workers_available -=1;
                        worker02.busy =1;
                        worker02.crafting = "Fertilizer";
                        resources.organic_waste = resources.organic_waste-cr_fertilizer1.ow;
                        resources.chemical = resources.chemical-cr_fertilizer1.chemical;
                        document.getElementById("organic_waste").innerHTML = resources.organic_waste;
                        document.getElementById("chemical").innerHTML = resources.chemical;
                        cr_fertilizer1.producing = cr_fertilizer1.q;
                        worker02.crafting_zeit = cr_fertilizer1.time;
                        worker02.crafting_zeitone = cr_fertilizer1.time_original;
                        document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker01.crafting_zeit)+"&nbsp;left)";
                        document.getElementById("worker2_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
                        document.getElementById("worker2_task").innerHTML = 'Crafting';
                        $(document).ready(function(){
                            $('#worker2_task_none').hide();
                            $('#worker2_task_clicker').show();
                        });
                    
                        cr_fertilizer1.q =1;
                        document.getElementById("cr_fertilizer1_q").innerHTML= cr_fertilizer1.q;
                        cr_fertilizer1.ow = cr_fertilizer1.q*cr_fertilizer1.ow_original;
                        document.getElementById("cr_fertilizer1_ow").innerHTML= cr_fertilizer1.ow;
                        cr_fertilizer1.chemical = cr_fertilizer1.q*cr_fertilizer1.chemical_original;
                        document.getElementById("cr_fertilizer1_chemical").innerHTML= cr_fertilizer1.chemical;
                        cr_fertilizer1.time = cr_fertilizer1.q*cr_fertilizer1.time_original;
                        document.getElementById("cr_fertilizer1_time").innerHTML= timetracker(cr_fertilizer1.time);
                    }
                    else {
                        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough storage capacity to craft", "snackbar_attention", 3000, "snackbar_attention show3s");
                    }
                }
                else {
                    Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough resources", "snackbar_attention", 3000, "snackbar_attention show3s");
                }
            }
            else if (worker03.busy==0) {
                if (resources.organic_waste>=cr_fertilizer1.ow && resources.chemical>=cr_fertilizer1.chemical) {
                    if (cr_fertilizer1.q+resources.fertilizer1<=storage.fertilizer1) {
                        cr_fertilizer1.ongoing=1;
                        state.workers_available -=1;
                        worker03.busy =1;
                        worker03.crafting = "Fertilizer";
                        resources.organic_waste = resources.organic_waste-cr_fertilizer1.ow;
                        resources.chemical = resources.chemical-cr_fertilizer1.chemical;
                        document.getElementById("organic_waste").innerHTML = resources.organic_waste;
                        document.getElementById("chemical").innerHTML = resources.chemical;
                        cr_fertilizer1.producing = cr_fertilizer1.q;
                        worker03.crafting_zeit = cr_fertilizer1.time;
                        worker03.crafting_zeitone = cr_fertilizer1.time_original;
                        document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker01.crafting_zeit)+"&nbsp;left)";
                        document.getElementById("worker3_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
                        document.getElementById("worker3_task").innerHTML = 'Crafting';
                        $(document).ready(function(){
                            $('#worker3_task_none').hide();
                            $('#worker3_task_clicker').show();
                        });
                    
                        cr_fertilizer1.q =1;
                        document.getElementById("cr_fertilizer1_q").innerHTML= cr_fertilizer1.q;
                        cr_fertilizer1.ow = cr_fertilizer1.q*cr_fertilizer1.ow_original;
                        document.getElementById("cr_fertilizer1_ow").innerHTML= cr_fertilizer1.ow;
                        cr_fertilizer1.chemical = cr_fertilizer1.q*cr_fertilizer1.chemical_original;
                        document.getElementById("cr_fertilizer1_chemical").innerHTML= cr_fertilizer1.chemical;
                        cr_fertilizer1.time = cr_fertilizer1.q*cr_fertilizer1.time_original;
                        document.getElementById("cr_fertilizer1_time").innerHTML= timetracker(cr_fertilizer1.time);
                    }
                    else {
                        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough storage capacity to craft", "snackbar_attention", 3000, "snackbar_attention show3s");
                    }
                }
                else {
                    Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough resources", "snackbar_attention", 3000, "snackbar_attention show3s");
                }
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Crafting compost already on the way", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;No workers available", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    }
}

function worker_picking() {
    if (worker01.busy==0) {
        worker_picked="worker1";
        worker_picked2="worker01";
    }
    else if (worker02.busy==0) {
        worker_picked="worker2";
        worker_picked2="worker02";
    }
    else if (worker03.busy==0) {
        worker_picked="worker3";
        worker_picked2="worker03";
    }
}
function worker_picked_return() {
    if (worker_picked=="worker1") {
        return worker01;
    }
    else if (worker_picked=="worker2") {
        return worker02;
    }
    else if (worker_picked=="worker3") {
        return worker03;
    }
}


function craft_robot1() {
    if (state.workers_total<3) { //For later electricity check, for now just a limiter
        if (state.workers_available>0) {
            if (cr_robot1.ongoing==0) {
                if (resources.bolt>=5 & resources.metal>=3 & resources.wire>=2 & resources.board>=1) {
                    worker_picking();
                    cr_robot1.ongoing=1;
                    state.workers_available -=1;
                    worker_picked_return().busy =1;
                    worker_picked_return().crafting = "Robot";
                    resources.bolt = resources.bolt-5;
                    document.getElementById("bolt").innerHTML = resources.bolt;
                    document.getElementById("shop_bolt").innerText = resources.bolt;
                    resources.metal = resources.metal-3;
                    document.getElementById("metal").innerHTML = resources.metal;
                    document.getElementById("shop_metal").innerText = resources.metal;
                    resources.wire = resources.wire-2;
                    document.getElementById("wire").innerHTML = resources.wire;
                    document.getElementById("shop_wire").innerText = resources.wire;
                    resources.board = resources.board-1;
                    document.getElementById("board").innerHTML = resources.board;
                    document.getElementById("shop_board").innerText = resources.board;
                    cr_robot1.producing = 1;
                    worker_picked_return().crafting_zeit = 180;
                    document.getElementById("zeit_"+worker_picked2+"").innerHTML = "("+timetracker(worker_picked_return().crafting_zeit)+"&nbsp;left)";
                    document.getElementById(""+worker_picked+"_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
                    document.getElementById(""+worker_picked+"_task").innerHTML = 'Crafting';
                    $(document).ready(function(){
                        $('#'+worker_picked+'_task_none').hide();
                        $('#'+worker_picked+'_task_clicker').show();
                    });
                    worker_picked="";
                    worker_picked2="";
                }
                else {
                    Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough resources", "snackbar_attention", 3000, "snackbar_attention show3s");
                }
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Crafting robot already on the way", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;No workers available", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Worker limit reached", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

function craft_greenhouse1() {
    if (state.workers_available>0) {
        if (cr_greenhouse1.ongoing==0) {
                if (worker01.busy==0) {
                    if (resources.wood>=5 & resources.glass>=5 & resources.bolt>=2 & resources.metal>=2) {
                        cr_greenhouse1.ongoing=1;
                        state.workers_available -=1;
                        worker01.busy =1;
                        worker01.crafting = "Greenhouse";
                        resources.wood = resources.wood-5;
                        document.getElementById("wood").innerHTML = resources.wood;
                        resources.glass = resources.glass-5;
                        document.getElementById("glass").innerHTML = resources.glass;
                        document.getElementById("shop_glass").innerText = resources.glass;
                        resources.bolt = resources.bolt-2;
                        document.getElementById("bolt").innerHTML = resources.bolt;
                        document.getElementById("shop_bolt").innerText = resources.bolt;
                        resources.metal = resources.metal-2;
                        document.getElementById("metal").innerHTML = resources.metal;
                        document.getElementById("shop_metal").innerText = resources.metal;
                        cr_greenhouse1.producing = 1;
                        worker01.crafting_zeit = 90;
                        document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker01.crafting_zeit)+"&nbsp;left)";
                        document.getElementById("worker1_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
                        document.getElementById("worker1_task").innerHTML = 'Crafting';
                        $(document).ready(function(){
                            $('#worker1_task_none').hide();
                            $('#worker1_task_clicker').show();
                        });
                    }
                    else {
                        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough resources", "snackbar_attention", 3000, "snackbar_attention show3s");
                    }
                }
                else if (worker02.busy==0) {
                    if (resources.bolt>=5 & resources.metal>=3 & resources.wire>=2 & resources.board>=1) {
                        cr_robot1.ongoing=1;
                        state.workers_available -=1;
                        worker02.busy =1;
                        worker02.crafting = "Robot";
                        resources.bolt = resources.bolt-5;
                        document.getElementById("bolt").innerHTML = resources.bolt;
                        document.getElementById("shop_bolt").innerText = resources.bolt;
                        resources.metal = resources.metal-3;
                        document.getElementById("metal").innerHTML = resources.metal;
                        document.getElementById("shop_metal").innerText = resources.metal;
                        resources.wire = resources.wire-2;
                        document.getElementById("wire").innerHTML = resources.wire;
                        document.getElementById("shop_wire").innerText = resources.wire;
                        resources.board = resources.board-1;
                        document.getElementById("board").innerHTML = resources.board;
                        document.getElementById("shop_board").innerText = resources.board;
                        cr_robot1.producing = 1;
                        worker02.crafting_zeit = 180;
                        document.getElementById("zeit_worker02").innerHTML = "("+timetracker(worker02.crafting_zeit)+"&nbsp;left)";
                        document.getElementById("worker2_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
                        document.getElementById("worker2_task").innerHTML = 'Crafting';
                        $(document).ready(function(){
                            $('#worker2_task_none').hide();
                            $('#worker2_task_clicker').show();
                        });
                    }
                    else {
                        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough resources", "snackbar_attention", 3000, "snackbar_attention show3s");
                    }
                }
                else if (worker03.busy==0) {
                    if (resources.bolt>=5 & resources.metal>=3 & resources.wire>=2 & resources.board>=1) {
                        cr_robot1.ongoing=1;
                        state.workers_available -=1;
                        worker03.busy =1;
                        worker03.crafting = "Robot";
                        resources.bolt = resources.bolt-5;
                        document.getElementById("bolt").innerHTML = resources.bolt;
                        document.getElementById("shop_bolt").innerText = resources.bolt;
                        resources.metal = resources.metal-3;
                        document.getElementById("metal").innerHTML = resources.metal;
                        document.getElementById("shop_metal").innerText = resources.metal;
                        resources.wire = resources.wire-2;
                        document.getElementById("wire").innerHTML = resources.wire;
                        document.getElementById("shop_wire").innerText = resources.wire;
                        resources.board = resources.board-1;
                        document.getElementById("board").innerHTML = resources.board;
                        document.getElementById("shop_board").innerText = resources.board;
                        cr_robot1.producing = 1;
                        worker03.crafting_zeit = 180;
                        document.getElementById("zeit_worker03").innerHTML = "("+timetracker(worker03.crafting_zeit)+"&nbsp;left)";
                        document.getElementById("worker3_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
                        document.getElementById("worker3_task").innerHTML = 'Crafting';
                        $(document).ready(function(){
                            $('#worker3_task_none').hide();
                            $('#worker3_task_clicker').show();
                        });
                    }
                    else {
                        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough resources", "snackbar_attention", 3000, "snackbar_attention show3s");
                    }
                } 
            }
            else {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Crafting greenhouse already on the way", "snackbar_attention", 3000, "snackbar_attention show3s");
            }
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;No workers available", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
}

function craft_storage() {
    if (storage_resource_selected==1) {
        if (storage.wood==25) {
            craft_storage2(storage.wood, storage.wood_upgrading, 10, 5, 0, skills.storage1)
        }
        else if (storage.wood==50) {
            craft_storage2(storage.wood, storage.wood_upgrading, 20, 10, 5, skills.storage2)
        }
        else if (storage.wood==100) {
            craft_storage2(storage.wood, storage.wood_upgrading, 40, 20, 10, skills.storage3)
        }
    }
    else if (storage_resource_selected==2) {
        if (storage.glass==25) {
            craft_storage2(storage.glass, storage.glass_upgrading, 10, 5, 0, skills.storage1)
        }
        else if (storage.glass==50) {
            craft_storage2(storage.glass, storage.glass_upgrading, 20, 10, 5, skills.storage2)
        }
        else if (storage.glass==100) {
            craft_storage2(storage.glass, storage.glass_upgrading, 40, 20, 10, skills.storage3)
        }
    }
    else if (storage_resource_selected==3) {
        if (storage.bolt==25) {
            craft_storage2(storage.bolt, storage.bolt_upgrading, 10, 5, 0, skills.storage1)
        }
        else if (storage.glass==50) {
            craft_storage2(storage.bolt, storage.bolt_upgrading, 20, 10, 5, skills.storage2)
        }
        else if (storage.glass==100) {
            craft_storage2(storage.bolt, storage.bolt_upgrading, 40, 20, 10, skills.storage3)
        }
    }
    else if (storage_resource_selected==4) {
        if (storage.metal==25) {
            craft_storage2(storage.metal, storage.metal_upgrading, 10, 5, 0, skills.storage1)
        }
        else if (storage.glass==50) {
            craft_storage2(storage.metal, storage.metal_upgrading, 20, 10, 5, skills.storage2)
        }
        else if (storage.glass==100) {
            craft_storage2(storage.metal, storage.metal_upgrading, 40, 20, 10, skills.storage3)
        }
    }
    else if (storage_resource_selected==5) {
        if (storage.wire==25) {
            craft_storage2(storage.wire, storage.wire_upgrading, 10, 5, 0, skills.storage1)
        }
        else if (storage.glass==50) {
            craft_storage2(storage.wire, storage.wire_upgrading, 20, 10, 5, skills.storage2)
        }
        else if (storage.glass==100) {
            craft_storage2(storage.wire, storage.wire_upgrading, 40, 20, 10, skills.storage3)
        }
    }
    else if (storage_resource_selected==6) {
        if (storage.organic_waste==25) {
            craft_storage2(storage.organic_waste, storage.organic_waste_upgrading, 10, 5, 0, skills.storage1)
        }
        else if (storage.organic_waste==50) {
            craft_storage2(storage.organic_waste, storage.organic_waste_upgrading, 20, 10, 5, skills.storage2)
        }
        else if (storage.organic_waste==100) {
            craft_storage2(storage.organic_waste, storage.organic_waste_upgrading, 40, 20, 10, skills.storage3)
        }
    }
    else if (storage_resource_selected==7) {
        if (storage.compost1==25) {
            craft_storage2(storage.compost1, storage.compost1_upgrading, 10, 5, 0, skills.storage1)
        }
        else if (storage.compost1==50) {
            craft_storage2(storage.compost1, storage.compost1_upgrading, 20, 10, 5, skills.storage2)
        }
        else if (storage.compost1==100) {
            craft_storage2(storage.compost1, storage.compost1_upgrading, 40, 20, 10, skills.storage3)
        }
    }
    else if (storage_resource_selected==11) {
        if (storage.board==25) {
            craft_storage2(storage.board, storage.board_upgrading, 10, 5, 0, skills.storage1)
        }
        else if (storage.compost1==50) {
            craft_storage2(storage.board, storage.board_upgrading, 20, 10, 5, skills.storage2)
        }
        else if (storage.compost1==100) {
            craft_storage2(storage.board, storage.board_upgrading, 40, 20, 10, skills.storage3)
        }
    }
    else if (storage_resource_selected==14) {
        if (storage.chemical==25) {
            craft_storage2(storage.chemical, storage.chemical_upgrading, 10, 5, 0, skills.storage1)
        }
        else if (storage.compost1==50) {
            craft_storage2(storage.chemical, storage.chemical_upgrading, 20, 10, 5, skills.storage2)
        }
        else if (storage.compost1==100) {
            craft_storage2(storage.chemical, storage.chemical_upgrading, 40, 20, 10, skills.storage3)
        }
    }
    else if (storage_resource_selected==15) {
        if (storage.fertilizer1==25) {
            craft_storage2(storage.fertilizer1, storage.fertilizer1_upgrading, 10, 5, 0, skills.storage1)
        }
        else if (storage.compost1==50) {
            craft_storage2(storage.fertilizer1, storage.fertilizer1_upgrading, 20, 10, 5, skills.storage2)
        }
        else if (storage.compost1==100) {
            craft_storage2(storage.fertilizer1, storage.fertilizer1_upgrading, 40, 20, 10, skills.storage3)
        }
    }
}

function craft_storage2(storage, storageupgrade, wood, bolt, cement, skill) {
    if (skill==1) {
    if (state.workers_available>0) {
        if (storageupgrade==0) {
            if (worker01.busy==0) {
                if (resources.wood>=wood && resources.bolt>=bolt && resources.cement>=cement) {
                    craft_storage3();
                    state.workers_available -=1;
                    worker01.busy =1;
                    worker01.crafting = "Storage"+storage_resource_selected+"";
                    resources.wood = resources.wood-wood;
                    resources.bolt = resources.bolt-bolt;
                    resources.cement = resources.cement-cement;
                    document.getElementById("wood").innerHTML = resources.wood;
                    document.getElementById("bolt").innerHTML = resources.bolt;
                    document.getElementById("cement").innerHTML = resources.cement;
                    if (storage==25) {
                        worker01.crafting_zeit = 180;
                    }
                    else if (storage==50) {
                        worker01.crafting_zeit = 360;
                    }
                    else if (storage==100) {
                        worker01.crafting_zeit = 1080;
                    }
                    document.getElementById("zeit_worker01").innerHTML = "("+timetracker(worker01.crafting_zeit)+"&nbsp;left)";
                    document.getElementById("worker1_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
                    document.getElementById("worker1_task").innerHTML = 'Crafting';
                    $(document).ready(function(){
                        $('#worker1_task_none').hide();
                        $('#worker1_task_clicker').show();
                    });
                    storage_change();
                }
                else {
                    Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough resources", "snackbar_attention", 3000, "snackbar_attention show3s");
                }
            }
            else if (worker02.busy==0) {
                if (resources.wood>=wood && resources.bolt>=bolt && resources.cement>=cement) {
                    craft_storage3();
                    state.workers_available -=1;
                    worker02.busy =1;
                    worker02.crafting = "Storage"+storage_resource_selected+"";
                    resources.wood = resources.wood-wood;
                    resources.bolt = resources.bolt-bolt;
                    resources.cement = resources.cement-cement;
                    document.getElementById("wood").innerHTML = resources.wood;
                    document.getElementById("bolt").innerHTML = resources.bolt;
                    document.getElementById("cement").innerHTML = resources.cement;
                    if (storage==25) {
                        worker02.crafting_zeit = 180;
                    }
                    else if (storage==50) {
                        worker02.crafting_zeit = 360;
                    }
                    else if (storage==100) {
                        worker02.crafting_zeit = 1080;
                    }
                    document.getElementById("zeit_worker02").innerHTML = "("+timetracker(worker01.crafting_zeit)+"&nbsp;left)";
                    document.getElementById("worker2_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
                    document.getElementById("worker2_task").innerHTML = 'Crafting';
                    $(document).ready(function(){
                        $('#worker2_task_none').hide();
                        $('#worker2_task_clicker').show();
                    });
                    storage_change();
                }
                else {
                    Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough resources", "snackbar_attention", 3000, "snackbar_attention show3s");
                }
            }
            else if (worker03.busy==0) {
                if (resources.wood>=wood && resources.bolt>=bolt && resources.cement>=cement) {
                    craft_storage3();
                    state.workers_available -=1;
                    worker03.busy =1;
                    worker03.crafting = "Storage"+storage_resource_selected+"";
                    resources.wood = resources.wood-wood;
                    resources.bolt = resources.bolt-bolt;
                    resources.cement = resources.cement-cement;
                    document.getElementById("wood").innerHTML = resources.wood;
                    document.getElementById("bolt").innerHTML = resources.bolt;
                    document.getElementById("cement").innerHTML = resources.cement;
                    if (storage==25) {
                        worker03.crafting_zeit = 180;
                    }
                    else if (storage==50) {
                        worker03.crafting_zeit = 360;
                    }
                    else if (storage==100) {
                        worker03.crafting_zeit = 1080;
                    }
                    document.getElementById("zeit_worker03").innerHTML = "("+timetracker(worker01.crafting_zeit)+"&nbsp;left)";
                    document.getElementById("worker3_task_img").innerHTML = '<img src="Images/crafting.svg" width="20" height="20">';
                    document.getElementById("worker3_task").innerHTML = 'Crafting';
                    $(document).ready(function(){
                        $('#worker3_task_none').hide();
                        $('#worker3_task_clicker').show();
                    });
                    storage_change();
                }
                else {
                    Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough resources", "snackbar_attention", 3000, "snackbar_attention show3s");
                }
            }  
        }
        else {
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;No workers available", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    }
}

function craft_storage3() {
    if (storage_resource_selected==1) {
        storage.wood_upgrading=1
    }
    else if (storage_resource_selected==2) {
        storage.glass_upgrading=1
    }
    else if (storage_resource_selected==3) {
        storage.bolt_upgrading=1
    }
    else if (storage_resource_selected==4) {
        storage.metal_upgrading=1
    }
    else if (storage_resource_selected==5) {
        storage.wire_upgrading=1
    }
    else if (storage_resource_selected==6) {
        storage.organic_waste_upgrading=1
    }
    else if (storage_resource_selected==7) {
        storage.compost1_upgrading=1
    }
    else if (storage_resource_selected==11) {
        storage.board_upgrading=1
    }
    else if (storage_resource_selected==14) {
        storage.chemical_upgrading=1
    }
    else if (storage_resource_selected==15) {
        storage.fertilizer1_upgrading=1
    }
}

var cr_compost1_m = document.getElementById("cr_compost1_m");
var cr_compost1_p = document.getElementById("cr_compost1_p");
var cr_compost1_min = document.getElementById("cr_compost1_min");
var cr_compost1_max = document.getElementById("cr_compost1_max");
var cr_fertilizer1_m = document.getElementById("cr_fertilizer1_m");
var cr_fertilizer1_p = document.getElementById("cr_fertilizer1_p");
var cr_fertilizer1_min = document.getElementById("cr_fertilizer1_min");
var cr_fertilizer1_max = document.getElementById("cr_fertilizer1_max");

cr_compost1_m.onclick = function() {
    if (cr_compost1.q>1) {
        cr_compost1.q -=1;
        document.getElementById("cr_compost1_q").innerHTML= cr_compost1.q;
        cr_compost1.ow = cr_compost1.q*cr_compost1.ow_original;
        document.getElementById("cr_compost1_ow").innerHTML= cr_compost1.ow;
        cr_compost1.time = cr_compost1.q*cr_compost1.time_original;
        document.getElementById("cr_compost1_time").innerHTML= timetracker(cr_compost1.time);
    }
}
cr_compost1_p.onclick = function() {
    if (cr_compost1.q<storage.compost1-resources.compost1) {
        if (cr_compost1.q<resources.organic_waste) {
            cr_compost1.q +=1;
            document.getElementById("cr_compost1_q").innerHTML= cr_compost1.q;
            cr_compost1.ow = cr_compost1.q*cr_compost1.ow_original;
            document.getElementById("cr_compost1_ow").innerHTML= cr_compost1.ow;
            cr_compost1.time = cr_compost1.q*cr_compost1.time_original;
            document.getElementById("cr_compost1_time").innerHTML= timetracker(cr_compost1.time);
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough organic waste", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
}
cr_compost1_min.onclick = function() {
    cr_compost1.q =1;
    document.getElementById("cr_compost1_q").innerHTML= cr_compost1.q;
    cr_compost1.ow = cr_compost1.q*cr_compost1.ow_original;
    document.getElementById("cr_compost1_ow").innerHTML= cr_compost1.ow;
    cr_compost1.time = cr_compost1.q*cr_compost1.time_original;
    document.getElementById("cr_compost1_time").innerHTML= timetracker(cr_compost1.time);
}
cr_compost1_max.onclick = function() {
    if (resources.organic_waste<=storage.compost1-resources.compost1) {
        cr_compost1.q =resources.organic_waste;
    }
    else {
        if (storage.compost1-resources.compost1==0) {
            cr_compost1.q =1;
        }
        else {
            cr_compost1.q =storage.compost1-resources.compost1;
        }
    }
    document.getElementById("cr_compost1_q").innerHTML= cr_compost1.q;
    cr_compost1.ow = cr_compost1.q*cr_compost1.ow_original;
    document.getElementById("cr_compost1_ow").innerHTML= cr_compost1.ow;
    cr_compost1.time = cr_compost1.q*cr_compost1.time_original;
    document.getElementById("cr_compost1_time").innerHTML= timetracker(cr_compost1.time);
}

cr_fertilizer1_m.onclick = function() {
    if (cr_fertilizer1.q>1) {
        cr_fertilizer1.q -=1;
        document.getElementById("cr_fertilizer1_q").innerHTML= cr_fertilizer1.q;
        cr_fertilizer1.ow = cr_fertilizer1.q*cr_fertilizer1.ow_original;
        document.getElementById("cr_fertilizer1_ow").innerHTML= cr_fertilizer1.ow;
        cr_fertilizer1.chemical = cr_fertilizer1.q*cr_fertilizer1.chemical_original;
        document.getElementById("cr_fertilizer1_chemical").innerHTML= cr_fertilizer1.chemical;
        cr_fertilizer1.time = cr_fertilizer1.q*cr_fertilizer1.time_original;
        document.getElementById("cr_fertilizer1_time").innerHTML= timetracker(cr_fertilizer1.time);
    }
}
cr_fertilizer1_p.onclick = function() {
    if (cr_fertilizer1.q<=storage.fertilizer1-resources.fertilizer1) {
        if (cr_fertilizer1.q*2+1<resources.organic_waste && cr_fertilizer1.q<resources.chemical) {
            cr_fertilizer1.q +=1;
            document.getElementById("cr_fertilizer1_q").innerHTML= cr_fertilizer1.q;
            cr_fertilizer1.ow = cr_fertilizer1.q*cr_fertilizer1.ow_original;
            document.getElementById("cr_fertilizer1_ow").innerHTML= cr_fertilizer1.ow;
            cr_fertilizer1.chemical = cr_fertilizer1.q*cr_fertilizer1.chemical_original;
            document.getElementById("cr_fertilizer1_chemical").innerHTML= cr_fertilizer1.chemical;
            cr_fertilizer1.time = cr_fertilizer1.q*cr_fertilizer1.time_original;
            document.getElementById("cr_fertilizer1_time").innerHTML= timetracker(cr_fertilizer1.time);
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough resources", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
}
cr_fertilizer1_min.onclick = function() {
    cr_fertilizer1.q =1;
    document.getElementById("cr_fertilizer1_q").innerHTML= cr_fertilizer1.q;
    cr_fertilizer1.ow = cr_fertilizer1.q*cr_fertilizer1.ow_original;
    document.getElementById("cr_fertilizer1_ow").innerHTML= cr_fertilizer1.ow;
    cr_fertilizer1.chemical = cr_fertilizer1.q*cr_fertilizer1.chemical_original;
    document.getElementById("cr_fertilizer1_chemical").innerHTML= cr_fertilizer1.chemical;
    cr_fertilizer1.time = cr_fertilizer1.q*cr_fertilizer1.time_original;
    document.getElementById("cr_fertilizer1_time").innerHTML= timetracker(cr_fertilizer1.time);
}
cr_fertilizer1_max.onclick = function() {
    if (resources.organic_waste>resources.chemical*2) {
        if (resources.chemical<storage.fertilizer1-resources.fertilizer1) {
            if (resources.chemical==0) {
                cr_fertilizer1.q =1;             
            }
            else {
                cr_fertilizer1.q =resources.chemical;
            }
        }
        else {
            cr_fertilizer1.q =storage.fertilizer1-resources.fertilizer1;
        }
    }
    else {
        if (Math.floor(resources.organic_waste/2)<storage.fertilizer1-resources.fertilizer1) {
            cr_fertilizer1.q =Math.floor(resources.organic_waste/2);
        }
        else {
            if (storage.fertilizer1-resources.fertilizer1==0) {
                cr_fertilizer1.q =1;
            }
            else {
                cr_fertilizer1.q =storage.fertilizer1-resources.fertilizer1;
            }
        }
    }
    document.getElementById("cr_fertilizer1_q").innerHTML= cr_fertilizer1.q;
    cr_fertilizer1.ow = cr_fertilizer1.q*cr_fertilizer1.ow_original;
    document.getElementById("cr_fertilizer1_ow").innerHTML= cr_fertilizer1.ow;
    cr_fertilizer1.chemical = cr_fertilizer1.q*cr_fertilizer1.chemical_original;
    document.getElementById("cr_fertilizer1_chemical").innerHTML= cr_fertilizer1.chemical;
    cr_fertilizer1.time = cr_fertilizer1.q*cr_fertilizer1.time_original;
    document.getElementById("cr_fertilizer1_time").innerHTML= timetracker(cr_fertilizer1.time);
}

function storage_change() {
    storage_resource_selected = document.getElementById("storage").value;
    if (storage_resource_selected==1) {
        storage_change2(storage.wood, storage.wood_upgrading, "wood");
    }
    else if (storage_resource_selected==2) {
        storage_change2(storage.glass, storage.glass_upgrading, "glass");
    }
    else if (storage_resource_selected==3) {
        storage_change2(storage.bolt, storage.bolt_upgrading, "bolt");
    }
    else if (storage_resource_selected==4) {
        storage_change2(storage.metal, storage.metal_upgrading, "metal");
    }
    else if (storage_resource_selected==5) {
        storage_change2(storage.wire, storage.wire_upgrading, "wire");
    }
    else if (storage_resource_selected==6) {
        storage_change2(storage.organic_waste, storage.organic_waste_upgrading, "organic_waste");
    }
    else if (storage_resource_selected==7) {
        storage_change2(storage.compost1, storage.compost1_upgrading, "compost");
    }
    else if (storage_resource_selected==11) {
        storage_change2(storage.board, storage.board_upgrading, "board");
    }
    else if (storage_resource_selected==14) {
        storage_change2(storage.chemical, storage.chemical_upgrading, "chemical");
    }
    else if (storage_resource_selected==15) {
        storage_change2(storage.fertilizer1, storage.fertilizer1_upgrading, "fertilizer");
    }
}

function storage_change2(storage, storageupgrading, image) {
    if (storage==25 && storageupgrading==0) {
        document.getElementById("storage_description1").innerHTML= '50x&nbsp;<img src="Images/'+image+'.svg" width="20" height="20">';
        document.getElementById("storage_description2").innerHTML= '<img src="Images/wood.svg" width="20" height="20">&nbsp;10x&nbsp;&nbsp;&nbsp;<img src="Images/bolt.svg" width="20" height="20">&nbsp;10x';
        document.getElementById("storage_description3").innerHTML= 'Craft (30:00 minutes)';
        document.getElementById("Button_Storage").style.cursor = "pointer";
        Button_Storage.className = "grey";
    }
    else if (skills.storage2==0) {
        document.getElementById("storage_description1").innerHTML= 'Current maximum storage reached';
        document.getElementById("storage_description2").innerHTML= '<span style="line-height: 20px">&nbsp;</span>';
        document.getElementById("storage_description3").innerHTML= '';
        document.getElementById("Button_Storage").style.cursor = "auto";
        Button_Storage.className = "";
    }
    else if (storage==50 && storageupgrading==0) {
        document.getElementById("storage_description1").innerHTML= '100x&nbsp;<img src="Images/'+image+'.svg" width="20" height="20">';
        document.getElementById("storage_description2").innerHTML= '<img src="Images/wood.svg" width="20" height="20">&nbsp;20x&nbsp;&nbsp;&nbsp;<img src="Images/bolt.svg" width="20" height="20">&nbsp;20x&nbsp;&nbsp;&nbsp;<img src="Images/cement.svg" width="20" height="20">&nbsp;5x';
        document.getElementById("storage_description3").innerHTML= 'Craft (1:00 hour)';
        document.getElementById("Button_Storage").style.cursor = "pointer";
        Button_Storage.className = "grey";
    }
    else if (skills.storage3==0) {
        document.getElementById("storage_description1").innerHTML= 'Current maximum storage reached';
        document.getElementById("storage_description2").innerHTML= '<span style="line-height: 20px">&nbsp;</span>';
        document.getElementById("storage_description3").innerHTML= '';
        document.getElementById("Button_Storage").style.cursor = "auto";
        Button_Storage.className = "";
    }
    else if (storage==100 && storageupgrading==0) {
        document.getElementById("storage_description1").innerHTML= '100x&nbsp;<img src="Images/'+image+'.svg" width="20" height="20">';
        document.getElementById("storage_description2").innerHTML= '<img src="Images/wood.svg" width="20" height="20">&nbsp;20x&nbsp;&nbsp;&nbsp;<img src="Images/bolt.svg" width="20" height="20">&nbsp;20x&nbsp;&nbsp;&nbsp;<img src="Images/cement.svg" width="20" height="20">&nbsp;5x';
        document.getElementById("storage_description3").innerHTML= 'Craft (3:00 hours)';
        document.getElementById("Button_Storage").style.cursor = "pointer";
        Button_Storage.className = "grey";
    }
    else {
        document.getElementById("storage_description1").innerHTML= 'Maximum storage reached';
        document.getElementById("storage_description2").innerHTML= '<span style="line-height: 20px">&nbsp;</span>';
        document.getElementById("storage_description3").innerHTML= '';
        document.getElementById("Button_Storage").style.cursor = "auto";
        Button_Storage.className = "";
    }
}