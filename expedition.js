function expedition(place) {
    if (state.workers_available>0) {
        if (worker01.busy==0) {
            expedition_worker (place, worker01, "worker01", "worker1")
        } 
        else if (worker02.busy==0) {
            expedition_worker (place, worker02, "worker02", "worker2")
        }
        else if (worker03.busy==0) {
            expedition_worker (place, worker03, "worker03", "worker3")
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;No workers available", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

function exp_resource(place) {
    if (state.workers_available>0) {
        if (worker01.busy==0) {
            exp_resource_worker (place, worker01, "worker01", "worker1")
        } 
        else if (worker02.busy==0) {
            exp_resource_worker (place, worker02, "worker02", "worker2")
        }
        else if (worker03.busy==0) {
            exp_resource_worker (place, worker03, "worker03", "worker3")
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;No workers available", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

function expedition_worker (place, worker, worker2, worker3) {
    if (state.seedlings_ontheway<6) {
        state.workers_available -=1;
        worker.busy =1;
        worker.expedition=place;
        if (worker.expedition==1) {
            worker.expedition_zeit=document.getElementById("area01_time").value;
            worker.expedition_time=document.getElementById("area01_time").value;
            document.getElementById("zeit_"+worker2).innerHTML = "("+timetracker(worker.expedition_zeit)+"&nbsp;left)";
            document.getElementById(worker3+"_task_img").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">';
            document.getElementById(worker3+"_task").innerHTML = 'Expedition';
            $(document).ready(function(){
                $('#'+worker3+'_task_none').hide();
                $('#'+worker3+'_task_clicker').show();
            });
            document.getElementById(worker3+"_task_mobile").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition';
            document.getElementById(worker3+"_task_mobilexs").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">';
            state.seedlings_ontheway +=1;
        }
        else if (worker.expedition==2) {
            worker.expedition_zeit=document.getElementById("area02_time").value;
            worker.expedition_time=document.getElementById("area02_time").value;                    
            document.getElementById("zeit_"+worker2).innerHTML = "("+timetracker(worker.expedition_zeit)+"&nbsp;left)";
            document.getElementById(worker3+"_task_img").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">';
            document.getElementById(worker3+"_task").innerHTML = 'Expedition';
            $(document).ready(function(){
                $('#'+worker3+'_task_none').hide();
                $('#'+worker3+'_task_clicker').show();
            });
            document.getElementById(worker3+"_task_mobile").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition';
            document.getElementById(worker3+"_task_mobilexs").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">';
            state.seedlings_ontheway +=1;
        }
    }
    else {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Seedlings full/about to be", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
}

function exp_resource_worker (place, worker, worker2, worker3) {
    if (place==11) {
        if (expres_area01.busy==0) {
            state.workers_available -=1;
            worker.busy =1;
            expres_area01.busy =1;
            worker.expedition=place;
            worker.expedition_zeit=document.getElementById("areares01_time").value;
            worker.expedition_time=document.getElementById("areares01_time").value;
            document.getElementById("zeit_"+worker2).innerHTML = "("+timetracker(worker.expedition_zeit)+"&nbsp;left)";
            document.getElementById(worker3+"_task_img").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">';
            document.getElementById(worker3+"_task").innerHTML = 'Expedition';
            $(document).ready(function(){
                $('#'+worker3+'_task_none').hide();
                $('#'+worker3+'_task_clicker').show();
            });
            document.getElementById(worker3+"_task_mobile").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition';
            document.getElementById(worker3+"_task_mobilexs").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">';
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Expedition in this area already on the way", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
    else if (place==12) {
        if (expres_area02.busy==0) {
            state.workers_available -=1;
            worker.busy =1;
            expres_area02.busy =1;
            worker.expedition=place;
            worker.expedition_zeit=document.getElementById("areares02_time").value;
            worker.expedition_time=document.getElementById("areares02_time").value;                    
            document.getElementById("zeit_"+worker2).innerHTML = "("+timetracker(worker.expedition_zeit)+"&nbsp;left)";
            document.getElementById(worker3+"_task_img").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">';
            document.getElementById(worker3+"_task").innerHTML = 'Expedition';
            $(document).ready(function(){
                $('#'+worker3+'_task_none').hide();
                $('#'+worker3+'_task_clicker').show();
            });
            document.getElementById(worker3+"_task_mobile").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">&nbsp;&nbsp;&nbsp;Expedition';
            document.getElementById(worker3+"_task_mobilexs").innerHTML = '<img src="Images/expedition.svg" width="20" height="20">';
        }
        else {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Expedition in this area already on the way", "snackbar_attention", 3000, "snackbar_attention show3s");
        }
    }
}

function seedling_countdown(worker) {
    if (worker.expedition_zeit==0) {
        if (seedling1.treetype<1) {
            randommaschine (seedling1, worker);
            fetchimage_seedling ("a", seedling1);
            document.getElementById("seedlinga_center").style.cursor= "pointer";
            seedlinga_center.className = "darker_grey";
            document.getElementById("seedlinga_center_mobile").style.cursor= "pointer";
            seedlinga_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling1, worker);
            bondex_check(seedling1);
            if (seedling1.shiny==2) {
                statistics.bloomingseedlings_total+=1;
            }
        }
        else if (seedling2.treetype<1) {
            randommaschine (seedling2, worker);
            fetchimage_seedling ("b", seedling2);
            document.getElementById("seedlingb_center").style.cursor= "pointer";
            seedlingb_center.className = "darker_grey";
            document.getElementById("seedlingb_center_mobile").style.cursor= "pointer";
            seedlingb_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling2, worker);
            bondex_check(seedling2);
            if (seedling2.shiny==2) {
                statistics.bloomingseedlings_total+=1;
            }
        }
        else if (seedling3.treetype<1) {
            randommaschine (seedling3, worker);
            fetchimage_seedling ("c", seedling3);
            document.getElementById("seedlingc_center").style.cursor= "pointer";
            seedlingc_center.className = "darker_grey";
            document.getElementById("seedlingc_center_mobile").style.cursor= "pointer";
            seedlingc_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling3, worker);
            bondex_check(seedling3);
            if (seedling3.shiny==2) {
                statistics.bloomingseedlings_total+=1;
            }
        }
        else if (seedling4.treetype<1) {
            randommaschine (seedling4, worker);
            fetchimage_seedling ("d", seedling4);
            document.getElementById("seedlingd_center").style.cursor= "pointer";
            seedlingd_center.className = "darker_grey";
            document.getElementById("seedlingd_center_mobile").style.cursor= "pointer";
            seedlingd_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling4, worker);
            bondex_check(seedling4);
            if (seedling4.shiny==2) {
                statistics.bloomingseedlings_total+=1;
            }
        }
        else if (seedling5.treetype<1) {
            randommaschine (seedling5, worker);
            fetchimage_seedling ("e", seedling5);
            document.getElementById("seedlinge_center").style.cursor= "pointer";
            seedlinge_center.className = "darker_grey";
            document.getElementById("seedlinge_center_mobile").style.cursor= "pointer";
            seedlinge_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling5, worker);
            bondex_check(seedling5);
            if (seedling5.shiny==2) {
                statistics.bloomingseedlings_total+=1;
            }
        }
        else if (seedling6.treetype<1) {
            randommaschine (seedling6, worker);
            fetchimage_seedling ("f", seedling6);
            document.getElementById("seedlingf_center").style.cursor= "pointer";
            seedlingf_center.className = "darker_grey";
            document.getElementById("seedlingf_center_mobile").style.cursor= "pointer";
            seedlingf_center_mobile.className = "darker_grey";
            area_bonsais_found(seedling6, worker);
            bondex_check(seedling6);
            if (seedling6.shiny==2) {
                statistics.bloomingseedlings_total+=1;
            }
        }
        if (worker.expedition==1) {
            exp_area01.count +=1;
        }
        else if (worker.expedition==2) {
            exp_area02.count +=1;
        }
        worker.expedition = 0;
        worker.busy = 0;
        state.workers_available +=1;
        state.seedlings +=1;
        statistics.seedlings_total +=1;
        
        tutorial_function();
        fetchvalues();
        fetchunlocks();
        taskstones();
    
        document.getElementById("seedling_number").innerText = state.seedlings.toLocaleString('en', {minimumFractionDigits: 0});  
    }
}

function resource_countdown(worker) {
    if (worker.expedition_zeit==0) {
        if (worker.expedition==11) {
            if (worker.expedition_time==120) {
                for (let step=1; step<2; step++) { // Runs 1 time, with value of step 1.
                    state.random=Math.random();
                    if (state.random>=0.7) {
                        expres.money +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.75) {
                        expres.wood +=1;
                    }
                }
                experience(1);
                resource_countdown_finishup(worker);
            }
            else if (worker.expedition_time==240) {
                for (let step=1; step<3; step++) { // Runs 2 times, with values of step 1 through 2.
                    state.random=Math.random();
                    if (state.random>=0.67) {
                        expres.money +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.72) {
                        expres.wood +=1;
                    }
                }
                experience(2);
                resource_countdown_finishup(worker);
            }
            else if (worker.expedition_time==360) {
                for (let step=1; step<4; step++) { // Runs 3 times, with values of step 1 through 3.
                    state.random=Math.random();
                    if (state.random>=0.64) {
                        expres.money +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.69) {
                        expres.wood +=1;
                    }
                }
                experience(3);
                resource_countdown_finishup(worker);
            }
            else if (worker.expedition_time==480) {
                for (let step=1; step<5; step++) { // Runs 4 times, with values of step 1 through 4.
                    state.random=Math.random();
                    if (state.random>=0.61) {
                        expres.money +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.66) {
                        expres.wood +=1;
                    }
                }
                experience(4);
                resource_countdown_finishup(worker);
            }
            else if (worker.expedition_time==600) {
                for (let step=1; step<6; step++) { // Runs 5 times, with values of step 1 through 5.
                    state.random=Math.random();
                    if (state.random>=0.58) {
                        expres.money +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.63) {
                        expres.wood +=1;
                    }
                }
                experience(5);
                resource_countdown_finishup(worker);
            }
            else if (worker.expedition_time==720) {
                for (let step=1; step<7; step++) { // Runs 6 times, with values of step 1 through 6.
                    state.random=Math.random();
                    if (state.random>=0.55) {
                        expres.money +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.60) {
                        expres.wood +=1;
                    }
                }
                experience(6);
                resource_countdown_finishup(worker);
            }
            worker.expedition = 0;
            worker.busy = 0;
            expres_area01.busy =0;
            expres_area01.count +=1;
            state.workers_available +=1;
            fetchvalues();
            fetchunlocks();
        }
        if (worker.expedition==12) {
            if (worker.expedition_time==300) {
                for (let step=1; step<2; step++) { // Runs 1 time, with value of step 1.
                    state.random=Math.random();
                    if (state.random>=0.7) {
                        expres.money +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.7) {
                        expres.wood +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.8) {
                        expres.glass +=1;
                    }
                }
                experience(1);
                resource_countdown_finishup(worker);
            }
            else if (worker.expedition_time==600) {
                for (let step=1; step<3; step++) { // Runs 2 times, with values of step 1 through 2.
                    state.random=Math.random();
                    if (state.random>=0.64) {
                        expres.money +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.64) {
                        expres.wood +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.74) {
                        expres.glass +=1;
                    }
                }
                experience(2);
                resource_countdown_finishup(worker);
            }
            else if (worker.expedition_time==900) {
                for (let step=1; step<4; step++) { // Runs 3 times, with values of step 1 through 3.
                    state.random=Math.random();
                    if (state.random>=0.58) {
                        expres.money +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.58) {
                        expres.wood +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.68) {
                        expres.glass +=1;
                    }
                }
                experience(3);
                resource_countdown_finishup(worker);
            }
            else if (worker.expedition_time==1200) {
                for (let step=1; step<5; step++) { // Runs 4 times, with values of step 1 through 4.
                    state.random=Math.random();
                    if (state.random>=0.52) {
                        expres.money +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.52) {
                        expres.wood +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.62) {
                        expres.glass +=1;
                    }
                }
                experience(4);
                resource_countdown_finishup(worker);
            }
            else if (worker.expedition_time==1500) {
                for (let step=1; step<6; step++) { // Runs 5 times, with values of step 1 through 5.
                    state.random=Math.random();
                    if (state.random>=0.46) {
                        expres.money +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.46) {
                        expres.wood +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.56) {
                        expres.glass +=1;
                    }
                }
                experience(5);
                resource_countdown_finishup(worker);
            }
            else if (worker.expedition_time==1800) {
                for (let step=1; step<7; step++) { // Runs 6 times, with values of step 1 through 6.
                    state.random=Math.random();
                    if (state.random>=0.4) {
                        expres.money +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.4) {
                        expres.wood +=1;
                    }
                    state.random=Math.random();
                    if (state.random>=0.5) {
                        expres.glass +=1;
                    }
                }
                experience(6);
                resource_countdown_finishup(worker);
            }
            worker.expedition = 0;
            worker.busy = 0;
            expres_area02.busy =0;
            expres_area02.count +=1;
            state.workers_available +=1;
            fetchvalues();
            fetchunlocks();
        }
    }
}

function resource_countdown_finishup(worker) {
    area_resources_found(worker);
    resources.money +=expres.money;
    if (resources.wood+expres.wood>storage.wood) {
        resources.wood=storage.wood;
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Storage for&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>&nbsp;full", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    else {
        resources.wood +=expres.wood;
    }
    if (resources.glass+expres.glass>storage.glass) {
        resources.glass=storage.glass;
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Storage for&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;full", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    else {
        resources.glass +=expres.glass;
    }
    if (resources.bolt+expres.bolt>storage.bolt) {
        resources.bolt=storage.bolt;
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Storage for&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;full", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    else {
        resources.bolt +=expres.bolt;
    }
    if (resources.metal+expres.metal>storage.metal) {
        resources.metal=storage.metal;
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Storage for&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;full", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    else {
        resources.metal +=expres.metal;
    }
    if (resources.wire+expres.wire>storage.wire) {
        resources.wire=storage.wire;
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Storage for&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;full", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    else {
        resources.wire +=expres.wire;
    }
    
    if (expres.money>0 && expres.wood>0 && expres.glass>0 && expres.bolt>0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>,&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    
    if (expres.money>0 && expres.wood>0 && expres.glass>0 && expres.bolt>0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood>0 && expres.glass>0 && expres.bolt>0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood>0 && expres.glass>0 && expres.bolt==0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>,&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood>0 && expres.glass==0 && expres.bolt>0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>,&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood==0 && expres.glass>0 && expres.bolt>0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>,&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood>0 && expres.glass>0 && expres.bolt>0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>,&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    
    if (expres.money>0 && expres.wood>0 && expres.glass>0 && expres.bolt>0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood>0 && expres.glass>0 && expres.bolt==0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood>0 && expres.glass==0 && expres.bolt>0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood==0 && expres.glass>0 && expres.bolt>0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood>0 && expres.glass>0 && expres.bolt>0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood>0 && expres.glass>0 && expres.bolt==0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood>0 && expres.glass==0 && expres.bolt>0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood==0 && expres.glass>0 && expres.bolt>0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood>0 && expres.glass>0 && expres.bolt>0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood>0 && expres.glass==0 && expres.bolt==0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood==0 && expres.glass>0 && expres.bolt==0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>,&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood>0 && expres.glass>0 && expres.bolt==0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>,&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood==0 && expres.glass==0 && expres.bolt>0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>,&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood>0 && expres.glass==0 && expres.bolt>0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>,&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood==0 && expres.glass>0 && expres.bolt>0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>,&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    
    if (expres.money>0 && expres.wood>0 && expres.glass>0 && expres.bolt==0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood>0 && expres.glass==0 && expres.bolt>0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood>0 && expres.glass==0 && expres.bolt==0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood>0 && expres.glass==0 && expres.bolt==0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood==0 && expres.glass>0 && expres.bolt>0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood==0 && expres.glass>0 && expres.bolt==0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }    
    if (expres.money>0 && expres.wood==0 && expres.glass==0 && expres.bolt>0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood==0 && expres.glass==0 && expres.bolt>0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood>0 && expres.glass>0 && expres.bolt>0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood>0 && expres.glass>0 && expres.bolt==0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }  
    if (expres.money==0 && expres.wood>0 && expres.glass==0 && expres.bolt>0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }  
    if (expres.money==0 && expres.wood==0 && expres.glass>0 && expres.bolt>0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }    
    if (expres.money>0 && expres.wood==0 && expres.glass>0 && expres.bolt==0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood>0 && expres.glass>0 && expres.bolt==0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood>0 && expres.glass==0 && expres.bolt>0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood==0 && expres.glass>0 && expres.bolt>0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>,&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood==0 && expres.glass==0 && expres.bolt==0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>,&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood>0 && expres.glass==0 && expres.bolt==0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>,&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood==0 && expres.glass>0 && expres.bolt==0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>,&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood==0 && expres.glass==0 && expres.bolt>0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>,&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    
    if (expres.money>0 && expres.wood>0 && expres.glass==0 && expres.bolt==0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood==0 && expres.glass>0 && expres.bolt==0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood==0 && expres.glass==0 && expres.bolt>0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood==0 && expres.glass==0 && expres.bolt==0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money>0 && expres.wood==0 && expres.glass==0 && expres.bolt==0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood>0 && expres.glass>0 && expres.bolt==0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood>0 && expres.glass==0 && expres.bolt>0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood>0 && expres.glass==0 && expres.bolt==0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood>0 && expres.glass==0 && expres.bolt==0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood==0 && expres.glass>0 && expres.bolt>0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood==0 && expres.glass>0 && expres.bolt==0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood==0 && expres.glass>0 && expres.bolt==0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood==0 && expres.glass==0 && expres.bolt>0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood==0 && expres.glass==0 && expres.bolt>0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood==0 && expres.glass==0 && expres.bolt==0 && expres.metal>0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;&&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    
    if (expres.money>0 && expres.wood==0 && expres.glass==0 && expres.bolt==0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.money+"&nbsp;<img src='Images/currency_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood>0 && expres.glass==0 && expres.bolt==0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wood+"&nbsp;<img src='Images/wood_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood==0 && expres.glass>0 && expres.bolt==0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.glass+"&nbsp;<img src='Images/glass_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood==0 && expres.glass==0 && expres.bolt>0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.bolt+"&nbsp;<img src='Images/bolt_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood==0 && expres.glass==0 && expres.bolt==0 && expres.metal>0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.metal+"&nbsp;<img src='Images/metal_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    if (expres.money==0 && expres.wood==0 && expres.glass==0 && expres.bolt==0 && expres.metal==0 && expres.wire>0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished:&nbsp;"+expres.wire+"&nbsp;<img src='Images/wire_white.svg' width='20' height='20'>&nbsp;found", "snackbar_information", 3000, "snackbar_information show3s");
    }

    if (expres.money==0 && expres.wood==0 && expres.glass==0 && expres.bolt==0 && expres.metal==0 && expres.wire==0) {
        Snackbar("<img src='Images/information_white.svg' width='30' height='30'>&nbsp;Expedition finished: No resources found", "snackbar_information", 3000, "snackbar_information show3s");
    }
    expres.money=0;
    expres.wood=0;
    expres.glass=0;
    expres.bolt=0;
    expres.metal=0;
    expres.wire=0;
}

function seedlingprice(seedlingx) {
    if (seedlingx.treetype==1 || seedlingx.treetype==4 || seedlingx.treetype==7 || seedlingx.treetype==10 || seedlingx.treetype==13 || seedlingx.treetype==14 || seedlingx.treetype==18 || seedlingx.treetype==19 || seedlingx.treetype==23 || seedlingx.treetype==24) {
        return Math.ceil(1*(seedlingx.treequality/5)*seedlingx.shiny);
    }
    else if (seedlingx.treetype==2 || seedlingx.treetype==5 || seedlingx.treetype==8 || seedlingx.treetype==11 || seedlingx.treetype==15 || seedlingx.treetype==20 || seedlingx.treetype==25 || seedlingx.treetype==28) {
        return Math.ceil(2*(seedlingx.treequality/5)*seedlingx.shiny);
    }
    else if (seedlingx.treetype==3 || seedlingx.treetype==6 || seedlingx.treetype==9 || seedlingx.treetype==16 || seedlingx.treetype==21 || seedlingx.treetype==26 || seedlingx.treetype==29 || seedlingx.treetype==30) {
        return Math.ceil(3*(seedlingx.treequality/5)*seedlingx.shiny);
    }
    else if (seedlingx.treetype==12 || seedlingx.treetype==17 || seedlingx.treetype==22) {
        return Math.ceil(4*(seedlingx.treequality/5)*seedlingx.shiny);
    }
    else if (seedlingx.treetype==27 || seedlingx.treetype==31 || seedlingx.treetype==32) {
        return Math.ceil(5*(seedlingx.treequality/5)*seedlingx.shiny);
    }
    else if (seedlingx.treetype==33 || seedlingx.treetype==34 || seedlingx.treetype==35) {
        return Math.ceil(6*(seedlingx.treequality/5)*seedlingx.shiny);
    }
}

function randommaschine(seedlingx, worker) {
    if (statistics.seedlings_total==0) {
        seedlingx.treetype=1;
        seedlingx.treetypegroup=1;
        seedlingx.treequality=1;
        seedlingx.shiny=1;
        seedlingx.newpotentialfoliage =Math.random(); //Random number between 0 and 1
        seedlingx.newpotentialbranches =Math.random();
        seedlingx.newpotentialtrunk =Math.random();
        seedlingx.newpotentialroots =Math.random();
        state.newpotentialtotal=seedlingx.newpotentialfoliage+seedlingx.newpotentialbranches+seedlingx.newpotentialtrunk+seedlingx.newpotentialroots;
        seedlingx.newpotentialfoliage = Math.round((seedlingx.newpotentialfoliage/state.newpotentialtotal)*100)/100;
        seedlingx.newpotentialbranches = Math.round((seedlingx.newpotentialbranches/state.newpotentialtotal)*100)/100;
        seedlingx.newpotentialtrunk = Math.round((seedlingx.newpotentialtrunk/state.newpotentialtotal)*100)/100;
        seedlingx.newpotentialroots = Math.round((seedlingx.newpotentialroots/state.newpotentialtotal)*100)/100;
        seedlingx.price= seedlingprice(seedlingx);
        experience(1);
    }
    else if (statistics.seedlings_total==1) {
        seedlingx.treetype=2;
        seedlingx.treetypegroup=1;
        seedlingx.treequality=1;
        seedlingx.shiny=1;
        seedlingx.newpotentialfoliage =Math.random(); //Random number between 0 and 1
        seedlingx.newpotentialbranches =Math.random();
        seedlingx.newpotentialtrunk =Math.random();
        seedlingx.newpotentialroots =Math.random();
        state.newpotentialtotal=seedlingx.newpotentialfoliage+seedlingx.newpotentialbranches+seedlingx.newpotentialtrunk+seedlingx.newpotentialroots;
        seedlingx.newpotentialfoliage = Math.round((seedlingx.newpotentialfoliage/state.newpotentialtotal)*100)/100;
        seedlingx.newpotentialbranches = Math.round((seedlingx.newpotentialbranches/state.newpotentialtotal)*100)/100;
        seedlingx.newpotentialtrunk = Math.round((seedlingx.newpotentialtrunk/state.newpotentialtotal)*100)/100;
        seedlingx.newpotentialroots = Math.round((seedlingx.newpotentialroots/state.newpotentialtotal)*100)/100;
        seedlingx.price= seedlingprice(seedlingx);
        experience(1);
    }
    else {
    state.random_treetype =Math.random(); //Random number between 0 and 1
    state.random_treequality =Math.random();
    state.random_shiny =Math.random();
    seedlingx.newpotentialfoliage =Math.random(); //Random number between 0 and 1
    seedlingx.newpotentialbranches =Math.random();
    seedlingx.newpotentialtrunk =Math.random();
    seedlingx.newpotentialroots =Math.random();
    state.newpotentialtotal=seedlingx.newpotentialfoliage+seedlingx.newpotentialbranches+seedlingx.newpotentialtrunk+seedlingx.newpotentialroots;
    seedlingx.newpotentialfoliage = Math.round((seedlingx.newpotentialfoliage/state.newpotentialtotal)*100)/100;
    seedlingx.newpotentialbranches = Math.round((seedlingx.newpotentialbranches/state.newpotentialtotal)*100)/100;
    seedlingx.newpotentialtrunk = Math.round((seedlingx.newpotentialtrunk/state.newpotentialtotal)*100)/100;
    seedlingx.newpotentialroots = Math.round((seedlingx.newpotentialroots/state.newpotentialtotal)*100)/100;
    if (worker.expedition==1) {
        if (state.random_treetype>=0.76) { //Random for treetype
            seedlingx.treetype=1;
            seedlingx.treetypegroup=1;
        }
        else if (state.random_treetype>=0.66) {
            seedlingx.treetype=2;
            seedlingx.treetypegroup=1;
        }
        else if (state.random_treetype>=0.43) {
            seedlingx.treetype=4;
            seedlingx.treetypegroup=2;
        }
        else if (state.random_treetype>=0.33) {
            seedlingx.treetype=5;
            seedlingx.treetypegroup=2;
        }
        else if (state.random_treetype>=0.10) {
            seedlingx.treetype=7;
            seedlingx.treetypegroup=3;
        }
        else {
            seedlingx.treetype=8;
            seedlingx.treetypegroup=3;
        }
        if (tasks.tracker009>0) {
            if (state.random_shiny>=0.975) { //Random for shiny
                seedlingx.shiny=2;
            }
            else {
                seedlingx.shiny=1;
            }
        }
        else {
            seedlingx.shiny=1;
        }
        if (worker.expedition_time==6) { //Random for treequality
            seedlingx.treequality=1;
        }
        else if (worker.expedition_time==30) {
            if (state.random_treequality>=0.88) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        else if (worker.expedition_time==180) {
            if (state.random_treequality>=0.98) {
                seedlingx.treequality=3;
            }
            else if (state.random_treequality>=0.78) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        else if (worker.expedition_time==1200) {
            if (state.random_treequality>=0.988) {
                seedlingx.treequality=4;
            }
            else if (state.random_treequality>=0.915) {
                seedlingx.treequality=3;
            }
            else if (state.random_treequality>=0.665) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        else if (worker.expedition_time==3600) {
            if (state.random_treequality>=0.995) {
                seedlingx.treequality=5;
            }
            else if (state.random_treequality>=0.96) {
                seedlingx.treequality=4;
            }
            else if (state.random_treequality>=0.845) {
                seedlingx.treequality=3;
            }
            else if (state.random_treequality>=0.565) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        else if (worker.expedition_time==7200) {
            if (state.random_treequality>=0.998) {
                seedlingx.treequality=6;
            }
            else if (state.random_treequality>=0.984) {
                seedlingx.treequality=5;
            }
            else if (state.random_treequality>=0.924) {
                seedlingx.treequality=4;
            }
            else if (state.random_treequality>=0.774) {
                seedlingx.treequality=3;
            }
            else if (state.random_treequality>=0.48) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        seedlingx.price= seedlingprice(seedlingx);
        experience(1);
    }
    else if (worker.expedition==2) {
        if (state.random_treetype>=0.80)  { //Random for treetype
            seedlingx.treetype=1;
            seedlingx.treetypegroup=1;
        }
        else if (state.random_treetype>=0.76) {
            seedlingx.treetype=3;
            seedlingx.treetypegroup=1;
        }
        else if (state.random_treetype>=0.56) {
            seedlingx.treetype=4;
            seedlingx.treetypegroup=2;
        }
        else if (state.random_treetype>=0.52) {
            seedlingx.treetype=6;
            seedlingx.treetypegroup=2;
        }
        else if (state.random_treetype>=0.48) {
            seedlingx.treetype=9;
            seedlingx.treetypegroup=3;
        }
        else if (state.random_treetype>=0.28) {
            seedlingx.treetype=10;
            seedlingx.treetypegroup=4;
        }
        else if (state.random_treetype>=0.20) {
            seedlingx.treetype=11;
            seedlingx.treetypegroup=4;
        }
        else if (state.random_treetype>=0.12) {
            seedlingx.treetype=13;
            seedlingx.treetypegroup=5;
        }
        else {
            seedlingx.treetype=14;
            seedlingx.treetypegroup=5;
        }
        if (state.random_shiny>=0.975) { //Random for shiny
            seedlingx.shiny=2;
        }
        else {
            seedlingx.shiny=1;
        }
        if (worker.expedition_time==30) { //Random for treequality
            if (state.random_treequality>=0.88) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        else if (worker.expedition_time==180) {
            if (state.random_treequality>=0.98) {
                seedlingx.treequality=3;
            }
            else if (state.random_treequality>=0.78) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        else if (worker.expedition_time==1200) {
            if (state.random_treequality>=0.988) {
                seedlingx.treequality=4;
            }
            else if (state.random_treequality>=0.915) {
                seedlingx.treequality=3;
            }
            else if (state.random_treequality>=0.665) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        else if (worker.expedition_time==3600) {
            if (state.random_treequality>=0.995) {
                seedlingx.treequality=5;
            }
            else if (state.random_treequality>=0.96) {
                seedlingx.treequality=4;
            }
            else if (state.random_treequality>=0.845) {
                seedlingx.treequality=3;
            }
            else if (state.random_treequality>=0.565) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        else if (worker.expedition_time==7200) {
            if (state.random_treequality>=0.998) {
                seedlingx.treequality=6;
            }
            else if (state.random_treequality>=0.984) {
                seedlingx.treequality=5;
            }
            else if (state.random_treequality>=0.924) {
                seedlingx.treequality=4;
            }
            else if (state.random_treequality>=0.774) {
                seedlingx.treequality=3;
            }
            else if (state.random_treequality>=0.48) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        else if (worker.expedition_time==14400) {
            if (state.random_treequality>=0.999) {
                seedlingx.treequality=7;
            }
            else if (state.random_treequality>=0.9915) {
                seedlingx.treequality=6;
            }
            else if (state.random_treequality>=0.9665) {
                seedlingx.treequality=5;
            }
            else if (state.random_treequality>=0.884) {
                seedlingx.treequality=4;
            }
            else if (state.random_treequality>=0.7065) {
                seedlingx.treequality=3;
            }
            else if (state.random_treequality>=0.405) {
                seedlingx.treequality=2;
            }
            else {
                seedlingx.treequality=1;
            }
        }
        seedlingx.price= seedlingprice(seedlingx);
        experience(2);
    }
    }
}

function area_bonsais_found(seedlingx, worker) {
    if (worker.expedition==1) {
        if (exp_area01.alltreetype==1) {    
        }
        else {
            if (seedlingx.treetype==1) {
                exp_area01.treetype01=1;
                document.getElementById("area01_tt01").innerHTML = '<img src="Images/bonsai01_stamp.svg" width="35" height="35">';
                if (statistics.bondex_bonsai01_discovered==0) {
                    statistics.bondex_bonsai01_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                }                
            }
            else if (seedlingx.treetype==2) {
                exp_area01.treetype02=1;
                document.getElementById("area01_tt02").innerHTML = '<img src="Images/bonsai02_stamp.svg" width="35" height="35">';
                if (statistics.bondex_bonsai02_discovered==0) {
                    statistics.bondex_bonsai02_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==4) {
                exp_area01.treetype04=1;
                document.getElementById("area01_tt04").innerHTML = '<img src="Images/bonsai04_stamp.svg" width="35" height="35">';
                if (statistics.bondex_bonsai04_discovered==0) {
                    statistics.bondex_bonsai04_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==5) {
                exp_area01.treetype05=1;
                document.getElementById("area01_tt05").innerHTML = '<img src="Images/bonsai05_stamp.svg" width="35" height="35">';
                if (statistics.bondex_bonsai05_discovered==0) {
                    statistics.bondex_bonsai05_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==7) {
                exp_area01.treetype07=1;
                document.getElementById("area01_tt07").innerHTML = '<img src="Images/bonsai07_stamp.svg" width="35" height="35">';
                if (statistics.bondex_bonsai07_discovered==0) {
                    statistics.bondex_bonsai07_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==8) {
                exp_area01.treetype08=1;
                document.getElementById("area01_tt08").innerHTML = '<img src="Images/bonsai08_stamp.svg" width="35" height="35">';
                if (statistics.bondex_bonsai08_discovered==0) {
                    statistics.bondex_bonsai08_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            if (exp_area01.treetype01+exp_area01.treetype02+exp_area01.treetype04+exp_area01.treetype05+exp_area01.treetype07+exp_area01.treetype08==6) {
                exp_area01.alltreetype=1;
            }
        }
        if (exp_area01.alltreequality==1) {
        }
        else {
            if (seedlingx.treequality==1) {
                exp_area01.treequality01=1;
                document.getElementById("area01_tq01").innerHTML = '<img src="Images/one_stamp.svg" width="35" height="35">';   
            }
            else if (seedlingx.treequality==2) {
                exp_area01.treequality02=1;
                document.getElementById("area01_tq02").innerHTML = '<img src="Images/two_stamp.svg" width="35" height="35">'; 
            }
            else if (seedlingx.treequality==3) {
                exp_area01.treequality03=1;
                document.getElementById("area01_tq03").innerHTML = '<img src="Images/three_stamp.svg" width="35" height="35">';
            }
            else if (seedlingx.treequality==4) {
                exp_area01.treequality04=1;
                document.getElementById("area01_tq04").innerHTML = '<img src="Images/four_stamp.svg" width="35" height="35">'; 
            }
            else if (seedlingx.treequality==5) {
                exp_area01.treequality05=1;
                document.getElementById("area01_tq05").innerHTML = '<img src="Images/five_stamp.svg" width="35" height="35">'; 
            }
            else if (seedlingx.treequality==6) {
                exp_area01.treequality06=1;
                document.getElementById("area01_tq06").innerHTML = '<img src="Images/six_stamp.svg" width="35" height="35">';
                 
            }
            if (exp_area01.treequality01+exp_area01.treequality02+exp_area01.treequality03+exp_area01.treequality04+exp_area01.treequality05+exp_area01.treequality06==6) {
                exp_area01.alltreequality=1;
            } 
        }  
    }
    else if (worker.expedition==2) {
        if (exp_area02.alltreetype==1) {    
        }
        else {
            if (seedlingx.treetype==1) {
                exp_area02.treetype01=1;
                document.getElementById("area02_tt01").innerHTML = '<img src="Images/bonsai01_stamp.svg" width="35" height="35">';
                if (statistics.bondex_bonsai01_discovered==0) {
                    statistics.bondex_bonsai01_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==3) {
                exp_area02.treetype03=1;
                document.getElementById("area02_tt03").innerHTML = '<img src="Images/bonsai03_stamp.svg" width="35" height="35">';
                if (statistics.bondex_bonsai03_discovered==0) {
                    statistics.bondex_bonsai03_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==4) {
                exp_area02.treetype04=1;
                document.getElementById("area02_tt04").innerHTML = '<img src="Images/bonsai04_stamp.svg" width="35" height="35">';
                if (statistics.bondex_bonsai04_discovered==0) {
                    statistics.bondex_bonsai04_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==6) {
                exp_area02.treetype06=1;
                document.getElementById("area02_tt06").innerHTML = '<img src="Images/bonsai06_stamp.svg" width="35" height="35">';
                if (statistics.bondex_bonsai06_discovered==0) {
                    statistics.bondex_bonsai06_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==9) {
                exp_area02.treetype09=1;
                document.getElementById("area02_tt09").innerHTML = '<img src="Images/bonsai09_stamp.svg" width="35" height="35">';
                if (statistics.bondex_bonsai09_discovered==0) {
                    statistics.bondex_bonsai09_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==10) {
                exp_area02.treetype10=1;
                document.getElementById("area02_tt10").innerHTML = '<img src="Images/bonsai10_stamp.svg" width="35" height="35">';
                if (statistics.bondex_bonsai10_discovered==0) {
                    statistics.bondex_bonsai10_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==11) {
                exp_area02.treetype11=1;
                document.getElementById("area02_tt11").innerHTML = '<img src="Images/bonsai11_stamp.svg" width="35" height="35">';
                if (statistics.bondex_bonsai11_discovered==0) {
                    statistics.bondex_bonsai11_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==13) {
                exp_area02.treetype13=1;
                document.getElementById("area02_tt13").innerHTML = '<img src="Images/bonsai13_stamp.svg" width="35" height="35">';
                if (statistics.bondex_bonsai13_discovered==0) {
                    statistics.bondex_bonsai13_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    taskstones();
                } 
            }
            else if (seedlingx.treetype==14) {
                exp_area02.treetype14=1;
                document.getElementById("area02_tt14").innerHTML = '<img src="Images/bonsai14_stamp.svg" width="35" height="35">';
                if (statistics.bondex_bonsai14_discovered==0) {
                    console.log(statistics.bondex_treetype_discovered, "H");
                    statistics.bondex_bonsai14_discovered=1;
                    statistics.bondex_treetype_discovered+=1;
                    console.log(statistics.bondex_treetype_discovered, "H");
                    taskstones();
                } 
            }
            if (exp_area02.treetype01+exp_area02.treetype03+exp_area02.treetype04+exp_area02.treetype06+exp_area02.treetype09+exp_area02.treetype10+exp_area02.treetype11+exp_area02.treetype13+exp_area02.treetype14==9) {
                exp_area02.alltreetype=1;
            }
        }
        if (exp_area02.alltreequality==1) {  
        }
        else {
            if (seedlingx.treequality==1) {
                exp_area02.treequality01=1;
                document.getElementById("area02_tq01").innerHTML = '<img src="Images/one_stamp.svg" width="35" height="35">';   
            }
            else if (seedlingx.treequality==2) {
                exp_area02.treequality02=1;
                document.getElementById("area02_tq02").innerHTML = '<img src="Images/two_stamp.svg" width="35" height="35">';
            }
            else if (seedlingx.treequality==3) {
                exp_area02.treequality03=1;
                document.getElementById("area02_tq03").innerHTML = '<img src="Images/three_stamp.svg" width="35" height="35">';
            }
            else if (seedlingx.treequality==4) {
                exp_area02.treequality04=1;
                document.getElementById("area02_tq04").innerHTML = '<img src="Images/four_stamp.svg" width="35" height="35">';
            }
            else if (seedlingx.treequality==5) {
                exp_area02.treequality05=1;
                document.getElementById("area02_tq05").innerHTML = '<img src="Images/five_stamp.svg" width="35" height="35">';
            }
            else if (seedlingx.treequality==6) {
                exp_area02.treequality06=1;
                document.getElementById("area02_tq06").innerHTML = '<img src="Images/six_stamp.svg" width="35" height="35">';
            }
            else if (seedlingx.treequality==7) {
                exp_area02.treequality07=1;
                document.getElementById("area02_tq07").innerHTML = '<img src="Images/seven_stamp.svg" width="35" height="35">';
            }
            if (exp_area02.treequality01+exp_area02.treequality02+exp_area02.treequality03+exp_area02.treequality04+exp_area02.treequality05+exp_area02.treequality06+exp_area02.treequality07==7) {
                exp_area02.alltreequality=1;
            } 
        }
    }
}

function area_resources_found(worker) {
    if (worker.expedition==11) {
        if (expres_area01.allresource==1) {
        }
        else {
            if (expres.money>=1) {
                expres_area01.money=1;
                document.getElementById("area1res1").innerHTML = '<img src="Images/currency_stamp.svg" width="35" height="35">';
                }    
            if (expres.wood>=1) {
                expres_area01.wood=1;
                document.getElementById("area1res2").innerHTML = '<img src="Images/wood_stamp.svg" width="35" height="35">';
                }  
            if (expres_area01.money+expres_area01.wood==2) {
                expres_area01.allresource=1;
            }
        }
    }
    else if (worker.expedition==12) {
        if (expres_area02.allresource==1) {
        }
        else {
            if (expres.money>=1) {
                expres_area02.money=1;
                document.getElementById("area2res1").innerHTML = '<img src="Images/currency_stamp.svg" width="35" height="35">';
                }    
            if (expres.wood>=1) {
                expres_area02.wood=1;
                document.getElementById("area2res2").innerHTML = '<img src="Images/wood_stamp.svg" width="35" height="35">';
                }    
            if (expres.glass>=1) {
                expres_area02.glass=1;
                document.getElementById("area2res3").innerHTML = '<img src="Images/glass_stamp.svg" width="35" height="35">';
                } 
            if (expres_area02.money+expres_area02.wood+expres_area02.glass==3) {
                expres_area02.allresource=1;
            }
        }
    }
}

function area01_time_change() {
    area01_time = document.getElementById("area01_time").value;
    document.getElementById("area01time").innerHTML = timetracker(area01_time);
    if (area01_time==6) {
        $(document).ready(function() {
            $('#area1_tq01').show();
            $('#area1_tq02').hide();
            $('#area1_tq03').hide();
            $('#area1_tq04').hide();
            $('#area1_tq05').hide();
            $('#area1_tq06').hide();
        });
    }
    if (area01_time==30) {
        $(document).ready(function() {
            $('#area1_tq01').show();
            $('#area1_tq02').show();
            $('#area1_tq03').hide();
            $('#area1_tq04').hide();
            $('#area1_tq05').hide();
            $('#area1_tq06').hide();
        });
    }
    if (area01_time==180) {
        $(document).ready(function() {
            $('#area1_tq01').show();
            $('#area1_tq02').show();
            $('#area1_tq03').show();
            $('#area1_tq04').hide();
            $('#area1_tq05').hide();
            $('#area1_tq06').hide();
        });
    } 
    if (area01_time==1200) {
        $(document).ready(function() {
            $('#area1_tq01').show();
            $('#area1_tq02').show();
            $('#area1_tq03').show();
            $('#area1_tq04').show();
            $('#area1_tq05').hide();
            $('#area1_tq06').hide();
        });
    } 
    if (area01_time==3600) {
        $(document).ready(function() {
            $('#area1_tq01').show();
            $('#area1_tq02').show();
            $('#area1_tq03').show();
            $('#area1_tq04').show();
            $('#area1_tq05').show();
            $('#area1_tq06').hide();
        });
    } 
    if (area01_time==7200) {
        $(document).ready(function() {
            $('#area1_tq01').show();
            $('#area1_tq02').show();
            $('#area1_tq03').show();
            $('#area1_tq04').show();
            $('#area1_tq05').show();
            $('#area1_tq06').show();
        });
    }    
}

function area02_time_change() {
    area02_time = document.getElementById("area02_time").value;
    document.getElementById("area02time").innerHTML = timetracker(area02_time);
    if (area02_time==30) {
        $(document).ready(function() {
            $('#area2_tq01').show();
            $('#area2_tq02').show();
            $('#area2_tq03').hide();
            $('#area2_tq04').hide();
            $('#area2_tq05').hide();
            $('#area2_tq06').hide();
            $('#area2_tq07').hide();
        });
    }
    if (area02_time==180) {
        $(document).ready(function() {
            $('#area2_tq01').show();
            $('#area2_tq02').show();
            $('#area2_tq03').show();
            $('#area2_tq04').hide();
            $('#area2_tq05').hide();
            $('#area2_tq06').hide();
            $('#area2_tq07').hide();
        });
    }
    if (area02_time==1200) {
        $(document).ready(function() {
            $('#area2_tq01').show();
            $('#area2_tq02').show();
            $('#area2_tq03').show();
            $('#area2_tq04').show();
            $('#area2_tq05').hide();
            $('#area2_tq06').hide();
            $('#area2_tq07').hide();
        });
    }
    if (area02_time==3600) {
        $(document).ready(function() {
            $('#area2_tq01').show();
            $('#area2_tq02').show();
            $('#area2_tq03').show();
            $('#area2_tq04').show();
            $('#area2_tq05').show();
            $('#area2_tq06').hide();
            $('#area2_tq07').hide();
        });
    }  
    if (area02_time==7200) {
        $(document).ready(function() {
            $('#area2_tq01').show();
            $('#area2_tq02').show();
            $('#area2_tq03').show();
            $('#area2_tq04').show();
            $('#area2_tq05').show();
            $('#area2_tq06').show();
            $('#area2_tq07').hide();
        });
    }  
    if (area02_time==14400) {
        $(document).ready(function() {
            $('#area2_tq01').show();
            $('#area2_tq02').show();
            $('#area2_tq03').show();
            $('#area2_tq04').show();
            $('#area2_tq05').show();
            $('#area2_tq06').show();
            $('#area2_tq07').show();
        });
    }    
}

function areares01_time_change() {
    areares01_time = document.getElementById("areares01_time").value;
    document.getElementById("areares01time").innerHTML = timetracker(areares01_time);
    if (areares01_time==120) {
        document.getElementById("tparea1res1").innerHTML = '30% odds<br>per chance';
        document.getElementById("tparea1res2").innerHTML = '25% odds<br>per chance';
        document.getElementById("area1res1").style.backgroundImage = "url('Images/30_stamp.svg')";
        document.getElementById("area1res2").style.backgroundImage = "url('Images/25_stamp.svg')";
    }
    if (areares01_time==240) {
        document.getElementById("tparea1res1").innerHTML = '33% odds<br>per chance';
        document.getElementById("tparea1res2").innerHTML = '28% odds<br>per chance';
        document.getElementById("area1res1").style.backgroundImage = "url('Images/33_stamp.svg')";
        document.getElementById("area1res2").style.backgroundImage = "url('Images/28_stamp.svg')";
    }
    if (areares01_time==360) {
        document.getElementById("tparea1res1").innerHTML = '36% odds<br>per chance';
        document.getElementById("tparea1res2").innerHTML = '31% odds<br>per chance';
        document.getElementById("area1res1").style.backgroundImage = "url('Images/36_stamp.svg')";
        document.getElementById("area1res2").style.backgroundImage = "url('Images/31_stamp.svg')";
    }
    if (areares01_time==480) {
        document.getElementById("tparea1res1").innerHTML = '39% odds<br>per chance';
        document.getElementById("tparea1res2").innerHTML = '34% odds<br>per chance';
        document.getElementById("area1res1").style.backgroundImage = "url('Images/39_stamp.svg')";
        document.getElementById("area1res2").style.backgroundImage = "url('Images/34_stamp.svg')";
    }
    if (areares01_time==600) {
        document.getElementById("tparea1res1").innerHTML = '42% odds<br>per chance';
        document.getElementById("tparea1res2").innerHTML = '37% odds<br>per chance';
        document.getElementById("area1res1").style.backgroundImage = "url('Images/42_stamp.svg')";
        document.getElementById("area1res2").style.backgroundImage = "url('Images/37_stamp.svg')";
    }
    if (areares01_time==720) {
        document.getElementById("tparea1res1").innerHTML = '45% odds<br>per chance';
        document.getElementById("tparea1res2").innerHTML = '40% odds<br>per chance';
        document.getElementById("area1res1").style.backgroundImage = "url('Images/45_stamp.svg')";
        document.getElementById("area1res2").style.backgroundImage = "url('Images/40_stamp.svg')";
    }
}

function areares02_time_change() {
    areares02_time = document.getElementById("areares02_time").value;
    document.getElementById("areares02time").innerHTML = timetracker(areares02_time);
    if (areares02_time==300) {
        document.getElementById("tparea2res1").innerHTML = '30% odds<br>per chance';
        document.getElementById("tparea2res2").innerHTML = '30% odds<br>per chance';
        document.getElementById("tparea2res3").innerHTML = '20% odds<br>per chance';
        document.getElementById("area2res1").style.backgroundImage = "url('Images/30_stamp.svg')";
        document.getElementById("area2res2").style.backgroundImage = "url('Images/30_stamp.svg')";
        document.getElementById("area2res3").style.backgroundImage = "url('Images/20_stamp.svg')";
    }
    if (areares02_time==600) {
        document.getElementById("tparea2res1").innerHTML = '36% odds<br>per chance';
        document.getElementById("tparea2res2").innerHTML = '36% odds<br>per chance';
        document.getElementById("tparea2res3").innerHTML = '26% odds<br>per chance';
        document.getElementById("area2res1").style.backgroundImage = "url('Images/36_stamp.svg')";
        document.getElementById("area2res2").style.backgroundImage = "url('Images/36_stamp.svg')";
        document.getElementById("area2res3").style.backgroundImage = "url('Images/26_stamp.svg')";
    }
    if (areares02_time==900) {
        document.getElementById("tparea2res1").innerHTML = '42% odds<br>per chance';
        document.getElementById("tparea2res2").innerHTML = '42% odds<br>per chance';
        document.getElementById("tparea2res3").innerHTML = '32% odds<br>per chance';
        document.getElementById("area2res1").style.backgroundImage = "url('Images/42_stamp.svg')";
        document.getElementById("area2res2").style.backgroundImage = "url('Images/42_stamp.svg')";
        document.getElementById("area2res3").style.backgroundImage = "url('Images/32_stamp.svg')";
    }
    if (areares02_time==1200) {
        document.getElementById("tparea2res1").innerHTML = '48% odds<br>per chance';
        document.getElementById("tparea2res2").innerHTML = '48% odds<br>per chance';
        document.getElementById("tparea2res3").innerHTML = '38% odds<br>per chance';
        document.getElementById("area2res1").style.backgroundImage = "url('Images/48_stamp.svg')";
        document.getElementById("area2res2").style.backgroundImage = "url('Images/48_stamp.svg')";
        document.getElementById("area2res3").style.backgroundImage = "url('Images/38_stamp.svg')";
    }
    if (areares02_time==1500) {
        document.getElementById("tparea2res1").innerHTML = '54% odds<br>per chance';
        document.getElementById("tparea2res2").innerHTML = '54% odds<br>per chance';
        document.getElementById("tparea2res3").innerHTML = '44% odds<br>per chance';
        document.getElementById("area2res1").style.backgroundImage = "url('Images/54_stamp.svg')";
        document.getElementById("area2res2").style.backgroundImage = "url('Images/54_stamp.svg')";
        document.getElementById("area2res3").style.backgroundImage = "url('Images/44_stamp.svg')";
    }
    if (areares02_time==1800) {
        document.getElementById("tparea2res1").innerHTML = '60% odds<br>per chance';
        document.getElementById("tparea2res2").innerHTML = '60% odds<br>per chance';
        document.getElementById("tparea2res3").innerHTML = '50% odds<br>per chance';
        document.getElementById("area2res1").style.backgroundImage = "url('Images/60_stamp.svg')";
        document.getElementById("area2res2").style.backgroundImage = "url('Images/60_stamp.svg')";
        document.getElementById("area2res3").style.backgroundImage = "url('Images/50_stamp.svg')";
    }
}