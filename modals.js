/*Snackbar*/
function Snackbar(text, barclass, time, timeclass) {
    var el = document.createElement("div");
    el.className = barclass;
    var y = document.getElementById("snackbar-container");
    el.innerHTML = text;
    y.append(el);
    el.className = timeclass;
    setTimeout(function(){ el.className = el.className.replace(timeclass, "snackbar none"); }, time);
}

/* NewGame, Pick avatar and name Modal*/
// Get the modal
var modalnewname = document.getElementById("m_newname");

// Get the button that opens the modal
var btnnewname = document.getElementById("NewGame");

// Get the <span> element that closes the modal
var spannewname_finish = document.getElementById("Button_Modal_NewName_Finished");

// When the user clicks on the button, open the modal
btnnewname.onclick = function() {
    modalnewname.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spannewname_finish.onclick = function() {
    nname = document.getElementById("aname");
    newname = nname.value;
    document.getElementById("aname").innerText = newname;
    nname = newname.length;
    if (state.youravatar>0 & state.yoursensei>0 & nname>0) {
        state.yourname=newname;
        modalnewname2.style.display = "block";  
        if (state.yoursensei==21) {
            document.getElementById("senseiskilllevel").src = "Images/avatars/avatar-21.svg"; 
            document.getElementById("sensei0").src = "Images/avatars/avatar-21.svg";  
            document.getElementById("sensei1").src = "Images/avatars/avatar-21.svg";  
            document.getElementById("sensei2").src = "Images/avatars/avatar-21.svg";  
            document.getElementById("sensei3").src = "Images/avatars/avatar-21.svg";  
            document.getElementById("sensei4").src = "Images/avatars/avatar-21.svg";  
            document.getElementById("sensei5").src = "Images/avatars/avatar-21.svg";  
            document.getElementById("sensei6").src = "Images/avatars/avatar-21.svg";  
            document.getElementById("sensei7").src = "Images/avatars/avatar-21.svg";  
            document.getElementById("sensei8").src = "Images/avatars/avatar-21.svg";  
            document.getElementById("sensei10").src = "Images/avatars/avatar-21.svg";  
            document.getElementById("sensei11").src = "Images/avatars/avatar-21.svg";  
            document.getElementById("sensei12").src = "Images/avatars/avatar-21.svg";  
            document.getElementById("sensei13").src = "Images/avatars/avatar-21.svg"; 
            document.getElementById("sensei14").src = "Images/avatars/avatar-21.svg";  
            document.getElementById("sensei15").src = "Images/avatars/avatar-21.svg";  
        }
        else {
            document.getElementById("senseiskilllevel").src = "Images/avatars/avatar-22.svg"; 
            document.getElementById("sensei0").src = "Images/avatars/avatar-22.svg"; 
            document.getElementById("sensei1").src = "Images/avatars/avatar-22.svg";  
            document.getElementById("sensei2").src = "Images/avatars/avatar-22.svg";  
            document.getElementById("sensei3").src = "Images/avatars/avatar-22.svg";  
            document.getElementById("sensei4").src = "Images/avatars/avatar-22.svg";  
            document.getElementById("sensei5").src = "Images/avatars/avatar-22.svg";  
            document.getElementById("sensei6").src = "Images/avatars/avatar-22.svg";  
            document.getElementById("sensei7").src = "Images/avatars/avatar-22.svg";  
            document.getElementById("sensei8").src = "Images/avatars/avatar-22.svg";  
            document.getElementById("sensei10").src = "Images/avatars/avatar-22.svg";  
            document.getElementById("sensei11").src = "Images/avatars/avatar-22.svg";  
            document.getElementById("sensei12").src = "Images/avatars/avatar-22.svg";  
            document.getElementById("sensei13").src = "Images/avatars/avatar-22.svg"; 
            document.getElementById("sensei14").src = "Images/avatars/avatar-22.svg";  
            document.getElementById("sensei15").src = "Images/avatars/avatar-22.svg";  
        }
    }
    else {
        if (nname==0) {
            document.getElementById("PickName").innerHTML = '<img src="Images/attention.svg" width="25" height="25">&nbsp;Choose your name:';
        }
        else {
            document.getElementById("PickName").innerHTML = 'Choose your name:';
        }
        if (state.youravatar==0) {
            document.getElementById("PickAvatar").innerHTML = '<img src="Images/attention.svg" width="25" height="25">&nbsp;Choose your avatar:';
        }
        else {
            document.getElementById("PickAvatar").innerHTML = 'Choose your avatar:';
        }
        if (state.yoursensei==0) {
            document.getElementById("PickSensei").innerHTML = "<img src='Images/attention.svg' width='25' height='25'>&nbsp;Choose your 'sensei' (teacher):"; 
        }
        else {
            document.getElementById("PickSensei").innerHTML = "Choose your 'sensei' (teacher):"; 
        }
    }
}

/* NewGame, name & avatar correct? Modal*/
// Get the modal
var modalnewname2 = document.getElementById("m_newname2");

// Get the button that opens the modal
//var btntutorial = document.getElementById("NewGame");

// Get the <span> element that closes the modal
var spannewname2_yes = document.getElementById("Button_Modal_NewName2_Yes");
var spannewname2_no = document.getElementById("Button_Modal_NewName2_No");

// When the user clicks on <span> (x), close the modal
spannewname2_yes.onclick = function() {
    $(document).ready(function(){
        $('.startscreen').hide();
        $('.game').show();
    }); 
    startup();
    modalnewname.style.display = "none";
    modalnewname2.style.display = "none";
    modalintro0.style.display = "block";
}

spannewname2_no.onclick = function() {
    modalnewname2.style.display = "none";
}

/* New Game, Sure? Modal*/
// Get the modal
var modalnewgame = document.getElementById("m_newgame");

// Get the button that opens the modal
var btnnewgame = document.getElementById("NewGame2");

// Get the <span> element that closes the modal
var spannewgame_no = document.getElementById("Button_Modal_NewGame_No");
var spannewgame_yes = document.getElementById("Button_Modal_NewGame_Yes");

// When the user clicks on the button, open the modal
btnnewgame.onclick = function() {
    modalnewgame.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spannewgame_no.onclick = function() {
    modalnewgame.style.display = "none";
}

spannewgame_yes.onclick = function() {
    modalnewgame.style.display = "none";
    localStorage.clear(); //LocalStorage cleared
    modalnewname.style.display = "block";
}


/* Skill level Modal*/
// Get the modal
var modalskilllevel = document.getElementById("m_skilllevel");

// Get the <span> element that closes the modal
var spanskilllevel = document.getElementById("Button_Modal_Skilllevel");


// When the user clicks on <span> (x), close the modal
spanskilllevel.onclick = function() {
    modalskilllevel.style.display = "none";
}

/* Intro_0_Start Modal*/
// Get the modal
var modalintro0 = document.getElementById("m_intro0");

// Get the <span> element that closes the modal
var spanintro0 = document.getElementById("Button_Modal_Intro0");


// When the user clicks on <span> (x), close the modal
spanintro0.onclick = function() {
    modalintro0.style.display = "none";
}

/* Intro_1_Expedition_tab Modal*/
// Get the modal
var modalintro1 = document.getElementById("m_intro1");

// Get the <span> element that closes the modal
var spanintro1 = document.getElementById("Button_Modal_Intro1");


// When the user clicks on <span> (x), close the modal
spanintro1.onclick = function() {
    modalintro1.style.display = "none";
}

/* Intro_2_Seedling_found Modal*/
// Get the modal
var modalintro2 = document.getElementById("m_intro2");

// Get the <span> element that closes the modal
var spanintro2 = document.getElementById("Button_Modal_Intro2");


// When the user clicks on <span> (x), close the modal
spanintro2.onclick = function() {
    modalintro2.style.display = "none";
}

/* Intro_3_You_tab Modal*/
// Get the modal
var modalintro3 = document.getElementById("m_intro3");

// Get the <span> element that closes the modal
var spanintro3 = document.getElementById("Button_Modal_Intro3");


// When the user clicks on <span> (x), close the modal
spanintro3.onclick = function() {
    modalintro3.style.display = "none";
    $(document).ready(function(){
        $('#T002').show();
    });
    tasks.tracker002=1;
    equipment.tools1=1;
    equipment.book_styles1=1;
    fetchvalues();
    fetchunlocks();
}

/* Intro_4_Tree_Styles_learned Modal*/
// Get the modal
var modalintro4 = document.getElementById("m_intro4");

// Get the <span> element that closes the modal
var spanintro4 = document.getElementById("Button_Modal_Intro4");


// When the user clicks on <span> (x), close the modal
spanintro4.onclick = function() {
    modalintro4.style.display = "none";
}

/* Intro_5_Bonsais_tab Modal*/
// Get the modal
var modalintro5 = document.getElementById("m_intro5");

// Get the <span> element that closes the modal
var spanintro5 = document.getElementById("Button_Modal_Intro5");


// When the user clicks on <span> (x), close the modal
spanintro5.onclick = function() {
    modalintro5.style.display = "none";
    $(document).ready(function(){
        $('#T003').show();
    });
    tasks.tracker003=1;
}

/* Intro_6_Grown_bonsai Modal*/
// Get the modal
var modalintro6 = document.getElementById("m_intro6");

// Get the <span> element that closes the modal
var spanintro6 = document.getElementById("Button_Modal_Intro6");


// When the user clicks on <span> (x), close the modal
spanintro6.onclick = function() {
    modalintro6.style.display = "none";
}

/* Intro_7_Goals_tab Modal*/
// Get the modal
var modalintro7 = document.getElementById("m_intro7");

// Get the <span> element that closes the modal
var spanintro7 = document.getElementById("Button_Modal_Intro7");

// When the user clicks on <span> (x), close the modal
spanintro7.onclick = function() {
    modalintro7.style.display = "none";
    $(document).ready(function(){
        $('#T004').show();
        $('#T004a').show();
    });
    if (tasks.tracker004==0) {
        tasks.tracker004=1;
    }
    if (tasks.tracker004a==0) {
        tasks.tracker004a=1;
    }
    tutorial=7;
    tutorial_function ();
}

/* Intro_8a_More_bonsais_grown Modal*/
// Get the modal
var modalintro8a = document.getElementById("m_intro8a");

// Get the <span> element that closes the modal
var spanintro8a = document.getElementById("Button_Modal_Intro8a");

// When the user clicks on <span> (x), close the modal
spanintro8a.onclick = function() {
    modalintro8a.style.display = "none";
    $(document).ready(function(){
        $('#T005').show();
    });
    tasks.tracker005=1;
}

/* Intro_10_Shopping_tab Modal*/
// Get the modal
var modalintro10 = document.getElementById("m_intro10");

// Get the <span> element that closes the modal
var spanintro10 = document.getElementById("Button_Modal_Intro10");

// When the user clicks on <span> (x), close the modal
spanintro10.onclick = function() {
    modalintro10.style.display = "none";
    $(document).ready(function(){
        $('#T008').show();
    });
    tasks.tracker008=1;
}

/* Intro_11_Learned skill crafting robot Modal*/
// Get the modal
var modalintro11 = document.getElementById("m_intro11");

// Get the <span> element that closes the modal
var spanintro11 = document.getElementById("Button_Modal_Intro11");

// When the user clicks on <span> (x), close the modal
spanintro11.onclick = function() {
    modalintro11.style.display = "none";
    $(document).ready(function(){
        $('#T006').show();
    });
    tasks.tracker006=1;
}

/* Intro_12_Robot crafted Modal*/
// Get the modal
var modalintro12 = document.getElementById("m_intro12");

// Get the <span> element that closes the modal
var spanintro12 = document.getElementById("Button_Modal_Intro12");

// When the user clicks on <span> (x), close the modal
spanintro12.onclick = function() {
    modalintro12.style.display = "none";
}

/* Intro_13_Contests tab Modal*/
// Get the modal
var modalintro13 = document.getElementById("m_intro13");

// Get the <span> element that closes the modal
var spanintro13 = document.getElementById("Button_Modal_Intro13");

// When the user clicks on <span> (x), close the modal
spanintro13.onclick = function() {
    modalintro13.style.display = "none";
    $(document).ready(function(){
        $('#T007').show();
    });
    tasks.tracker007=1;
}

/* Intro_14_Participated in contest Modal*/
// Get the modal
var modalintro14 = document.getElementById("m_intro14");

// Get the <span> element that closes the modal
var spanintro14 = document.getElementById("Button_Modal_Intro14");

// When the user clicks on <span> (x), close the modal
spanintro14.onclick = function() {
    modalintro14.style.display = "none";
}

/* Intro_15_Tutorial finished Modal*/
// Get the modal
var modalintro15 = document.getElementById("m_intro15");

// Get the <span> element that closes the modal
var spanintro15 = document.getElementById("Button_Modal_Intro15");

// When the user clicks on <span> (x), close the modal
spanintro15.onclick = function() {
    modalintro15.style.display = "none";
}

/* Intro_1_Expedition_tab Modal*/
// Get the modal
var modalbonsaisort = document.getElementById("m_bonsaisort");

// Get the <span> element that closes the modal
var spanbonsaisort = document.getElementById("Button_Modal_Bonsaisort");


// When the user clicks on <span> (x), close the modal
spanbonsaisort.onclick = function() {
    modalbonsaisort.style.display = "none";
}

/* Edit Name Modal*/
// Get the modal
var modalname = document.getElementById("m_name");

// Get the button that opens the modal
var btnname = document.getElementById("EditName");

// Get the <span> element that closes the modal
var spanname_cancel = document.getElementById("Button_Modal_Name_Cancel");
var spanname_change = document.getElementById("Button_Modal_Name_Change");

// When the user clicks on the button, open the modal
btnname.onclick = function() {
    modalname.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanname_cancel.onclick = function() {
    modalname.style.display = "none";
}

spanname_change.onclick = function() {
    ChangeName();
    modalname.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == modalname) {
        modalname.style.display = "none";
    }
}) 

/* Change Position Modal*/
// Get the modal
var modalchange = document.getElementById("m_position");

// Get the button that opens the modal
var btnchange = document.getElementById("ChangePosition");

// Get the <span> element that closes the modal
var spanchange_cancel = document.getElementById("Button_Modal_Position_Close");
var spanchange_change = document.getElementById("Button_Modal_Position_Change");

// When the user clicks on the button, open the modal
btnchange.onclick = function() {
    if (SearchBonsaiShowing().growing==1) {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Changing position of a growing bonsai isn't possible", "snackbar_attention", 3000, "snackbar_attention show3s");  
    }
    else {
        if (document.getElementById("positionn_place").value==00 || document.getElementById("positionn_place").value==0) {
            Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Choose a position first", "snackbar_attention", 3000, "snackbar_attention show3s"); 
        }
        else {
            if (SearchBonsaiReplacement().growing==1) {
                Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Can not switch with a growing bonsai", "snackbar_attention", 3000, "snackbar_attention show3s"); 
            }
            else {
                document.getElementById("bonsaiold_nr").innerText = "#"+state.bonsai_showing;
                document.getElementById("bonsaiold_name").innerText = SearchBonsaiShowing().name.toLocaleString('en', {minimumFractionDigits: 0});
                document.getElementById("bonsaiold_type").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, SearchBonsaiShowing(), "50", "50");
                document.getElementById("BonsaiOld").style.backgroundImage= fetchbonsairanktq(SearchBonsaiShowing());
                document.getElementById("bonsaiold_level").innerText = SearchBonsaiShowing().level.toLocaleString('en', {minimumFractionDigits: 0});
                document.getElementById("bonsaiold_cp").innerHTML = SearchBonsaiShowing().foliage+SearchBonsaiShowing().branches+SearchBonsaiShowing().trunk+SearchBonsaiShowing().roots;
                
                document.getElementById("bonsainew_nr").innerText = "#"+document.getElementById("positionn_place").value;
                document.getElementById("bonsainew_name").innerText = SearchBonsaiReplacement().name.toLocaleString('en', {minimumFractionDigits: 0});
                document.getElementById("bonsainew_type").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, SearchBonsaiReplacement(), "50", "50");
                document.getElementById("BonsaiNew").style.backgroundImage= fetchbonsairanktq(SearchBonsaiReplacement());
                document.getElementById("bonsainew_level").innerText = SearchBonsaiReplacement().level.toLocaleString('en', {minimumFractionDigits: 0});
                document.getElementById("bonsainew_cp").innerHTML = SearchBonsaiReplacement().foliage+SearchBonsaiReplacement().branches+SearchBonsaiReplacement().trunk+SearchBonsaiReplacement().roots;
                
                modalchange.style.display = "block";
            }
        }
    }
}
    
// When the user clicks on <span> (x), close the modal
spanchange_cancel.onclick = function() {
    modalchange.style.display = "none";
}

spanchange_change.onclick = function() {
    ChangePosition();
    modalchange.style.display = "none";
}

/* Contests Modal*/
// Get the modal
var modalcontests = document.getElementById("m_contests");

// Get the button that opens the modal
//var btncontests = document.getElementById("XXX");

// Get the <span> element that closes the modal
var spancontestsenter = document.getElementById("Button_Modal_Contests_Enter");
var spancontestscancel = document.getElementById("Button_Modal_Contests_Cancel");
var spancontestsbonsaia = document.getElementById("Button_Modal_Contests_BonsaiA");
var spancontestsbonsaib = document.getElementById("Button_Modal_Contests_BonsaiB");
var spancontestsbonsaic = document.getElementById("Button_Modal_Contests_BonsaiC");
var spancontestsbonsaid = document.getElementById("Button_Modal_Contests_BonsaiD");
var spancontestsbonsaie = document.getElementById("Button_Modal_Contests_BonsaiE");
var spancontestsbonsaif = document.getElementById("Button_Modal_Contests_BonsaiF");
var spancontestsbonsaig = document.getElementById("Button_Modal_Contests_BonsaiG");
var spancontestsbonsaih = document.getElementById("Button_Modal_Contests_BonsaiH");
var spancontestsbonsaii = document.getElementById("Button_Modal_Contests_BonsaiI");
var spancontestsbonsaij = document.getElementById("Button_Modal_Contests_BonsaiJ");

// When the user clicks on the button, open the modal
//btncontests.onclick = function() {
//    modalcontests.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal
spancontestsenter.onclick = function() {
    if (contests.bonsaichoosen==0) {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Choose a bonsai first!", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    else if (resources.money<contests.entryprice) {
        Snackbar("<img src='Images/attention_white.svg' width='30' height='30'>&nbsp;Not enough money for entry fee", "snackbar_attention", 3000, "snackbar_attention show3s");
    }
    else {
        resources.money -=contests.entryprice;
        document.getElementById("money").innerHTML = resources.money;
        document.getElementById("money_mobile").innerHTML = resources.money;
        document.getElementById("money_mobilexs").innerHTML = resources.money;
        modalcontests.style.display = "none";
        contests_result();
        modalcontests_r.style.display = "block";
        document.getElementById('modal_contests_result_competition').scrollTop =0;
        x_contests = 1;
        contests.visible=0;
        document.getElementById("menu_contests").value=x_contests; 
        $('#menu_contests').trigger('change');
    }
}

spancontestscancel.onclick = function() {
    modalcontests.style.display = "none";
    contests.bonsaichoosen=0;
    contests.bonsaichoosenx=0;
    x_contests = 1;
    contests.visible=0;
    document.getElementById("menu_contests").value=x_contests;       
    $('#menu_contests').trigger('change');
    $(document).ready(function(){
        $('#judges').hide();
        $('#judge2').hide();
        $('#judge3').hide();
    }); 
}

spancontestsbonsaia.onclick = function() {
    contests_choosebonsai(contests.z=1);
}
spancontestsbonsaib.onclick = function() {
    contests_choosebonsai(contests.z=2);   
}
spancontestsbonsaic.onclick = function() {
    contests_choosebonsai(contests.z=3);  
}
spancontestsbonsaid.onclick = function() {
    contests_choosebonsai(contests.z=4);   
}
spancontestsbonsaie.onclick = function() {
    contests_choosebonsai(contests.z=5);  
}
spancontestsbonsaif.onclick = function() {
    contests_choosebonsai(contests.z=6);   
}
spancontestsbonsaig.onclick = function() {
    contests_choosebonsai(contests.z=7);   
}
spancontestsbonsaih.onclick = function() {
    contests_choosebonsai(contests.z=8);   
}
spancontestsbonsaii.onclick = function() {
    contests_choosebonsai(contests.z=9);  
}
spancontestsbonsaij.onclick = function() {
    contests_choosebonsai(contests.z=10);      
}

/* Contests Modal*/
// Get the modal
var modalcontests_r = document.getElementById("m_contests_result");

// Get the button that opens the modal
//var btncontests = document.getElementById("XXX");

// Get the <span> element that closes the modal
var spancontests_rresult = document.getElementById("Button_Modal_Contests_Result");

// When the user clicks on the button, open the modal
//btncontests_r.onclick = function() {
//    modalcontests_r.style.display = "block";
//}

// When the user clicks on <span> (x), close the modal

spancontests_rresult.onclick = function() {
    modalcontests_r.style.display = "none";
    contests.bonsaichoosen=0;
    contests.bonsaichoosenx=0;
    reset_tables ("1st");
    reset_tables ("2nd");
    reset_tables ("3rd");
    reset_tables ("4th");
    reset_tables ("5th");
    reset_tables ("6th");
    reset_tables ("7th");
    reset_tables ("8th");
    reset_tables ("9th");
    reset_tables ("10th");
    tutorial_function();
}

function reset_tables (place) {
    document.getElementById("TTGtable_"+place+"_y1").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_y2").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_y3").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_y4").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_y5").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_y6").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_y7").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_y8").style.backgroundColor = "#555";    
    document.getElementById("TTGtable_"+place+"_y9").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_o1").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_o2").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_o3").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_o4").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_o5").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_o6").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_o7").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_o8").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_o9").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_11").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_12").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_13").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_14").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_15").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_16").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_17").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_18").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_19").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_21").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_22").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_23").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_24").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_25").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_26").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_27").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_28").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_29").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_31").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_32").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_33").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_34").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_35").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_36").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_37").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_38").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_39").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_41").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_42").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_43").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_44").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_45").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_46").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_47").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_48").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_49").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_51").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_52").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_53").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_54").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_55").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_56").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_57").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_58").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_59").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_61").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_62").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_63").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_64").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_65").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_66").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_67").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_68").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_69").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_71").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_72").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_73").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_74").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_75").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_76").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_77").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_78").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_79").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_81").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_82").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_83").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_84").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_85").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_86").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_87").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_88").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_89").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_91").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_92").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_93").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_94").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_95").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_96").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_97").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_98").style.backgroundColor = "#555";
    document.getElementById("TTGtable_"+place+"_99").style.backgroundColor = "#555";
    
    document.getElementById("STtable_"+place+"_y01").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_y02").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_y03").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_y04").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_y05").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_y06").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_y07").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_y08").style.backgroundColor = "#555";    
    document.getElementById("STtable_"+place+"_y09").style.backgroundColor = "#555";   
    document.getElementById("STtable_"+place+"_y10").style.backgroundColor = "#555";   
    document.getElementById("STtable_"+place+"_y11").style.backgroundColor = "#555";   
    document.getElementById("STtable_"+place+"_y12").style.backgroundColor = "#555";   
    document.getElementById("STtable_"+place+"_y13").style.backgroundColor = "#555";   
    document.getElementById("STtable_"+place+"_y14").style.backgroundColor = "#555";   
    document.getElementById("STtable_"+place+"_y15").style.backgroundColor = "#555";   
    document.getElementById("STtable_"+place+"_y16").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_o01").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_o02").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_o03").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_o04").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_o05").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_o06").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_o07").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_o08").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_o09").style.backgroundColor = "#555";   
    document.getElementById("STtable_"+place+"_o10").style.backgroundColor = "#555";   
    document.getElementById("STtable_"+place+"_o11").style.backgroundColor = "#555";   
    document.getElementById("STtable_"+place+"_o12").style.backgroundColor = "#555";   
    document.getElementById("STtable_"+place+"_o13").style.backgroundColor = "#555";   
    document.getElementById("STtable_"+place+"_o14").style.backgroundColor = "#555";   
    document.getElementById("STtable_"+place+"_o15").style.backgroundColor = "#555";   
    document.getElementById("STtable_"+place+"_o16").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0101").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0102").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0103").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0104").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0105").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0106").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0107").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0108").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0109").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0110").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0111").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0112").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0113").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0114").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0115").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0116").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0201").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0202").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0203").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0204").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0205").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0206").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0207").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0208").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0209").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0210").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0211").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0212").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0213").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0214").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0215").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0216").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0301").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0302").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0303").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0304").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0305").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0306").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0307").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0308").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0309").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0310").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0311").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0312").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0313").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0314").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0315").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0316").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0401").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0402").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0403").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0404").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0405").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0406").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0407").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0408").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0409").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0410").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0411").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0412").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0413").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0414").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0415").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0416").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0501").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0502").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0503").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0504").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0505").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0506").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0507").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0508").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0509").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0510").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0511").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0512").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0513").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0514").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0515").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0516").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0601").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0602").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0603").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0604").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0605").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0606").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0607").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0608").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0609").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0610").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0611").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0612").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0613").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0614").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0615").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0616").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0701").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0702").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0703").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0704").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0705").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0706").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0707").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0708").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0709").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0710").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0711").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0712").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0713").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0714").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0715").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0716").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0801").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0802").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0803").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0804").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0805").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0806").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0807").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0808").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0809").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0810").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0811").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0812").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0813").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0814").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0815").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0816").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0901").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0902").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0903").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0904").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0905").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0906").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0907").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0908").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0909").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0910").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0911").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0912").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0913").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0914").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0915").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_0916").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1001").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1002").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1003").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1004").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1005").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1006").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1007").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1008").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1009").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1010").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1011").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1012").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1013").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1014").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1015").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1016").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1101").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1102").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1103").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1104").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1105").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1106").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1107").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1108").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1109").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1110").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1111").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1112").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1113").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1114").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1115").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1116").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1201").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1202").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1203").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1204").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1205").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1206").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1207").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1208").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1209").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1210").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1211").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1212").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1213").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1214").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1215").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1216").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1301").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1302").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1303").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1304").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1305").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1306").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1307").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1308").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1309").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1310").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1311").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1312").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1313").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1314").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1315").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1316").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1401").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1402").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1403").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1404").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1405").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1406").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1407").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1408").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1409").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1410").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1411").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1412").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1413").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1414").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1415").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1416").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1501").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1502").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1503").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1504").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1505").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1506").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1507").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1508").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1509").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1510").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1511").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1512").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1513").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1514").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1515").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1516").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1601").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1602").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1603").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1604").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1605").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1606").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1607").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1608").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1609").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1610").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1611").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1612").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1613").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1614").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1615").style.backgroundColor = "#555";
    document.getElementById("STtable_"+place+"_1616").style.backgroundColor = "#555";
}