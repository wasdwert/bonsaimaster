function fetchbonsaiselect() {
    if (state.bonsaislots==10) {
        $(document).ready(function(){
            $("#menu").html("<option value='1'>Bonsai #01-#10</option>");
            $("#menu_changeA").html("<option value='1'>Bonsai #01-#10</option>");
            $("#menu_changeB").html("<option value='1'>Bonsai #01-#10</option>");
            $('#menushow').hide();
        })
    }
    else if (state.bonsaislots==12) {
        $(document).ready(function(){
            $("#menu").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#12</option>");
            $("#menu_changeA").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#12</option>");
            $("#menu_changeB").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#12</option>");
            $('#menushow').show();
        })
    }
    else if (state.bonsaislots==14) {
        $(document).ready(function(){
            $("#menu").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#14</option>");
            $("#menu_changeA").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#14</option>");
            $("#menu_changeB").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#14</option>");
            $('#menushow').show();
        })        
    }
    else if (state.bonsaislots==15) {
        $(document).ready(function(){
            $("#menu").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#15</option>");
            $("#menu_changeA").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#15</option>");
            $("#menu_changeB").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#15</option>");
            $('#menushow').show();
        })
    }
    else if (state.bonsaislots==16) {
        $(document).ready(function(){
            $("#menu").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#16</option>");
            $("#menu_changeA").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#16</option>");
            $("#menu_changeB").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#16</option>");
            $('#menushow').show();
        })
    }
    else if (state.bonsaislots==17) {
        $(document).ready(function(){
            $("#menu").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#17</option>");
            $("#menu_changeA").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#17</option>");
            $("#menu_changeB").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#17</option>");
            $('#menushow').show();
        })
    }
    else if (state.bonsaislots==18) {
        $(document).ready(function(){
            $("#menu").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#18</option>");
            $("#menu_changeA").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#18</option>");
            $("#menu_changeB").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#18</option>");
            $('#menushow').show();
        })
    }
    else if (state.bonsaislots==19) {
        $(document).ready(function(){
            $("#menu").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#19</option>");
            $("#menu_changeA").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#19</option>");
            $("#menu_changeB").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#19</option>");
            $('#menushow').show();
        })
    }
    else if (state.bonsaislots==20) {
        $(document).ready(function(){
            $("#menu").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#20</option>");
            $("#menu_changeA").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#20</option>");
            $("#menu_changeB").html("<option value='1'>Bonsai #01-#10</option><option value='11'>Bonsai #11-#20</option>");
            $('#menushow').show();
        })
    }
}

function showbonsaipots(number) {
    if (state.bonsaislots>=number) {
        $(document).ready(function(){
            $('#ButtonBonsaiA').show();
            $('#ButtonBonsaiB').show();
            $('#ButtonBonsaiC').show();
            $('#ButtonBonsaiD').show();
            $('#ButtonBonsaiE').show();
            $('#ButtonBonsaiF').show();
            $('#ButtonBonsaiG').show();
            $('#ButtonBonsaiH').show();
            $('#ButtonBonsaiI').show();
            $('#ButtonBonsaiJ').show();
        });
    }
    else if (state.bonsaislots>=number-1) {
        $(document).ready(function(){
            $('#ButtonBonsaiA').show();
            $('#ButtonBonsaiB').show();
            $('#ButtonBonsaiC').show();
            $('#ButtonBonsaiD').show();
            $('#ButtonBonsaiE').show();
            $('#ButtonBonsaiF').show();
            $('#ButtonBonsaiG').show();
            $('#ButtonBonsaiH').show();
            $('#ButtonBonsaiI').show();
            $('#ButtonBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-2) {
        $(document).ready(function(){
            $('#ButtonBonsaiA').show();
            $('#ButtonBonsaiB').show();
            $('#ButtonBonsaiC').show();
            $('#ButtonBonsaiD').show();
            $('#ButtonBonsaiE').show();
            $('#ButtonBonsaiF').show();
            $('#ButtonBonsaiG').show();
            $('#ButtonBonsaiH').show();
            $('#ButtonBonsaiI').hide();
            $('#ButtonBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-3) {
        $(document).ready(function(){
            $('#ButtonBonsaiA').show();
            $('#ButtonBonsaiB').show();
            $('#ButtonBonsaiC').show();
            $('#ButtonBonsaiD').show();
            $('#ButtonBonsaiE').show();
            $('#ButtonBonsaiF').show();
            $('#ButtonBonsaiG').show();
            $('#ButtonBonsaiH').hide();
            $('#ButtonBonsaiI').hide();
            $('#ButtonBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-4) {
        $(document).ready(function(){
            $('#ButtonBonsaiA').show();
            $('#ButtonBonsaiB').show();
            $('#ButtonBonsaiC').show();
            $('#ButtonBonsaiD').show();
            $('#ButtonBonsaiE').show();
            $('#ButtonBonsaiF').show();
            $('#ButtonBonsaiG').hide();
            $('#ButtonBonsaiH').hide();
            $('#ButtonBonsaiI').hide();
            $('#ButtonBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-5) {
        $(document).ready(function(){
            $('#ButtonBonsaiA').show();
            $('#ButtonBonsaiB').show();
            $('#ButtonBonsaiC').show();
            $('#ButtonBonsaiD').show();
            $('#ButtonBonsaiE').show();
            $('#ButtonBonsaiF').hide();
            $('#ButtonBonsaiG').hide();
            $('#ButtonBonsaiH').hide();
            $('#ButtonBonsaiI').hide();
            $('#ButtonBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-6) {
        $(document).ready(function(){
            $('#ButtonBonsaiA').show();
            $('#ButtonBonsaiB').show();
            $('#ButtonBonsaiC').show();
            $('#ButtonBonsaiD').show();
            $('#ButtonBonsaiE').hide();
            $('#ButtonBonsaiF').hide();
            $('#ButtonBonsaiG').hide();
            $('#ButtonBonsaiH').hide();
            $('#ButtonBonsaiI').hide();
            $('#ButtonBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-7) {
        $(document).ready(function(){
            $('#ButtonBonsaiA').show();
            $('#ButtonBonsaiB').show();
            $('#ButtonBonsaiC').show();
            $('#ButtonBonsaiD').hide();
            $('#ButtonBonsaiE').hide();
            $('#ButtonBonsaiF').hide();
            $('#ButtonBonsaiG').hide();
            $('#ButtonBonsaiH').hide();
            $('#ButtonBonsaiI').hide();
            $('#ButtonBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-8) {
        $(document).ready(function(){
            $('#ButtonBonsaiA').show();
            $('#ButtonBonsaiB').show();
            $('#ButtonBonsaiC').hide();
            $('#ButtonBonsaiD').hide();
            $('#ButtonBonsaiE').hide();
            $('#ButtonBonsaiF').hide();
            $('#ButtonBonsaiG').hide();
            $('#ButtonBonsaiH').hide();
            $('#ButtonBonsaiI').hide();
            $('#ButtonBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-9) {
        $(document).ready(function(){
            $('#ButtonBonsaiA').show();
            $('#ButtonBonsaiB').hide();
            $('#ButtonBonsaiC').hide();
            $('#ButtonBonsaiD').hide();
            $('#ButtonBonsaiE').hide();
            $('#ButtonBonsaiF').hide();
            $('#ButtonBonsaiG').hide();
            $('#ButtonBonsaiH').hide();
            $('#ButtonBonsaiI').hide();
            $('#ButtonBonsaiJ').hide();
        });
    }
}

function showbonsaipots_changeA(number) {
    if (state.bonsaislots>=number) {
        $(document).ready(function(){
            $('#ChangeABonsaiA').show();
            $('#ChangeABonsaiB').show();
            $('#ChangeABonsaiC').show();
            $('#ChangeABonsaiD').show();
            $('#ChangeABonsaiE').show();
            $('#ChangeABonsaiF').show();
            $('#ChangeABonsaiG').show();
            $('#ChangeABonsaiH').show();
            $('#ChangeABonsaiI').show();
            $('#ChangeABonsaiJ').show();
        });
    }
    else if (state.bonsaislots>=number-1) {
        $(document).ready(function(){
            $('#ChangeABonsaiA').show();
            $('#ChangeABonsaiB').show();
            $('#ChangeABonsaiC').show();
            $('#ChangeABonsaiD').show();
            $('#ChangeABonsaiE').show();
            $('#ChangeABonsaiF').show();
            $('#ChangeABonsaiG').show();
            $('#ChangeABonsaiH').show();
            $('#ChangeABonsaiI').show();
            $('#ChangeABonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-2) {
        $(document).ready(function(){
            $('#ChangeABonsaiA').show();
            $('#ChangeABonsaiB').show();
            $('#ChangeABonsaiC').show();
            $('#ChangeABonsaiD').show();
            $('#ChangeABonsaiE').show();
            $('#ChangeABonsaiF').show();
            $('#ChangeABonsaiG').show();
            $('#ChangeABonsaiH').show();
            $('#ChangeABonsaiI').hide();
            $('#ChangeABonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-3) {
        $(document).ready(function(){
            $('#ChangeABonsaiA').show();
            $('#ChangeABonsaiB').show();
            $('#ChangeABonsaiC').show();
            $('#ChangeABonsaiD').show();
            $('#ChangeABonsaiE').show();
            $('#ChangeABonsaiF').show();
            $('#ChangeABonsaiG').show();
            $('#ChangeABonsaiH').hide();
            $('#ChangeABonsaiI').hide();
            $('#ChangeABonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-4) {
        $(document).ready(function(){
            $('#ChangeABonsaiA').show();
            $('#ChangeABonsaiB').show();
            $('#ChangeABonsaiC').show();
            $('#ChangeABonsaiD').show();
            $('#ChangeABonsaiE').show();
            $('#ChangeABonsaiF').show();
            $('#ChangeABonsaiG').hide();
            $('#ChangeABonsaiH').hide();
            $('#ChangeABonsaiI').hide();
            $('#ChangeABonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-5) {
        $(document).ready(function(){
            $('#ChangeABonsaiA').show();
            $('#ChangeABonsaiB').show();
            $('#ChangeABonsaiC').show();
            $('#ChangeABonsaiD').show();
            $('#ChangeABonsaiE').show();
            $('#ChangeABonsaiF').hide();
            $('#ChangeABonsaiG').hide();
            $('#ChangeABonsaiH').hide();
            $('#ChangeABonsaiI').hide();
            $('#ChangeABonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-6) {
        $(document).ready(function(){
            $('#ChangeABonsaiA').show();
            $('#ChangeABonsaiB').show();
            $('#ChangeABonsaiC').show();
            $('#ChangeABonsaiD').show();
            $('#ChangeABonsaiE').hide();
            $('#ChangeABonsaiF').hide();
            $('#ChangeABonsaiG').hide();
            $('#ChangeABonsaiH').hide();
            $('#ChangeABonsaiI').hide();
            $('#ChangeABonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-7) {
        $(document).ready(function(){
            $('#ChangeABonsaiA').show();
            $('#ChangeABonsaiB').show();
            $('#ChangeABonsaiC').show();
            $('#ChangeABonsaiD').hide();
            $('#ChangeABonsaiE').hide();
            $('#ChangeABonsaiF').hide();
            $('#ChangeABonsaiG').hide();
            $('#ChangeABonsaiH').hide();
            $('#ChangeABonsaiI').hide();
            $('#ChangeABonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-8) {
        $(document).ready(function(){
            $('#ChangeABonsaiA').show();
            $('#ChangeABonsaiB').show();
            $('#ChangeABonsaiC').hide();
            $('#ChangeABonsaiD').hide();
            $('#ChangeABonsaiE').hide();
            $('#ChangeABonsaiF').hide();
            $('#ChangeABonsaiG').hide();
            $('#ChangeABonsaiH').hide();
            $('#ChangeABonsaiI').hide();
            $('#ChangeABonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-9) {
        $(document).ready(function(){
            $('#ChangeABonsaiA').show();
            $('#ChangeABonsaiB').hide();
            $('#ChangeABonsaiC').hide();
            $('#ChangeABonsaiD').hide();
            $('#ChangeABonsaiE').hide();
            $('#ChangeABonsaiF').hide();
            $('#ChangeABonsaiG').hide();
            $('#ChangeABonsaiH').hide();
            $('#ChangeABonsaiI').hide();
            $('#ChangeABonsaiJ').hide();
        });
    }
}

function showbonsaipots_changeB(number) {
    if (state.bonsaislots>=number) {
        $(document).ready(function(){
            $('#ChangeBBonsaiA').show();
            $('#ChangeBBonsaiB').show();
            $('#ChangeBBonsaiC').show();
            $('#ChangeBBonsaiD').show();
            $('#ChangeBBonsaiE').show();
            $('#ChangeBBonsaiF').show();
            $('#ChangeBBonsaiG').show();
            $('#ChangeBBonsaiH').show();
            $('#ChangeBBonsaiI').show();
            $('#ChangeBBonsaiJ').show();
        });
    }
    else if (state.bonsaislots>=number-1) {
        $(document).ready(function(){
            $('#ChangeBBonsaiA').show();
            $('#ChangeBBonsaiB').show();
            $('#ChangeBBonsaiC').show();
            $('#ChangeBBonsaiD').show();
            $('#ChangeBBonsaiE').show();
            $('#ChangeBBonsaiF').show();
            $('#ChangeBBonsaiG').show();
            $('#ChangeBBonsaiH').show();
            $('#ChangeBBonsaiI').show();
            $('#ChangeBBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-2) {
        $(document).ready(function(){
            $('#ChangeBBonsaiA').show();
            $('#ChangeBBonsaiB').show();
            $('#ChangeBBonsaiC').show();
            $('#ChangeBBonsaiD').show();
            $('#ChangeBBonsaiE').show();
            $('#ChangeBBonsaiF').show();
            $('#ChangeBBonsaiG').show();
            $('#ChangeBBonsaiH').show();
            $('#ChangeBBonsaiI').hide();
            $('#ChangeBBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-3) {
        $(document).ready(function(){
            $('#ChangeBBonsaiA').show();
            $('#ChangeBBonsaiB').show();
            $('#ChangeBBonsaiC').show();
            $('#ChangeBBonsaiD').show();
            $('#ChangeBBonsaiE').show();
            $('#ChangeBBonsaiF').show();
            $('#ChangeBBonsaiG').show();
            $('#ChangeBBonsaiH').hide();
            $('#ChangeBBonsaiI').hide();
            $('#ChangeBBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-4) {
        $(document).ready(function(){
            $('#ChangeBBonsaiA').show();
            $('#ChangeBBonsaiB').show();
            $('#ChangeBBonsaiC').show();
            $('#ChangeBBonsaiD').show();
            $('#ChangeBBonsaiE').show();
            $('#ChangeBBonsaiF').show();
            $('#ChangeBBonsaiG').hide();
            $('#ChangeBBonsaiH').hide();
            $('#ChangeBBonsaiI').hide();
            $('#ChangeBBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-5) {
        $(document).ready(function(){
            $('#ChangeBBonsaiA').show();
            $('#ChangeBBonsaiB').show();
            $('#ChangeBBonsaiC').show();
            $('#ChangeBBonsaiD').show();
            $('#ChangeBBonsaiE').show();
            $('#ChangeBBonsaiF').hide();
            $('#ChangeBBonsaiG').hide();
            $('#ChangeBBonsaiH').hide();
            $('#ChangeBBonsaiI').hide();
            $('#ChangeBBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-6) {
        $(document).ready(function(){
            $('#ChangeBBonsaiA').show();
            $('#ChangeBBonsaiB').show();
            $('#ChangeBBonsaiC').show();
            $('#ChangeBBonsaiD').show();
            $('#ChangeBBonsaiE').hide();
            $('#ChangeBBonsaiF').hide();
            $('#ChangeBBonsaiG').hide();
            $('#ChangeBBonsaiH').hide();
            $('#ChangeBBonsaiI').hide();
            $('#ChangeBBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-7) {
        $(document).ready(function(){
            $('#ChangeBBonsaiA').show();
            $('#ChangeBBonsaiB').show();
            $('#ChangeBBonsaiC').show();
            $('#ChangeBBonsaiD').hide();
            $('#ChangeBBonsaiE').hide();
            $('#ChangeBBonsaiF').hide();
            $('#ChangeBBonsaiG').hide();
            $('#ChangeBBonsaiH').hide();
            $('#ChangeBBonsaiI').hide();
            $('#ChangeBBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-8) {
        $(document).ready(function(){
            $('#ChangeBBonsaiA').show();
            $('#ChangeBBonsaiB').show();
            $('#ChangeBBonsaiC').hide();
            $('#ChangeBBonsaiD').hide();
            $('#ChangeBBonsaiE').hide();
            $('#ChangeBBonsaiF').hide();
            $('#ChangeBBonsaiG').hide();
            $('#ChangeBBonsaiH').hide();
            $('#ChangeBBonsaiI').hide();
            $('#ChangeBBonsaiJ').hide();
        });
    }
    else if (state.bonsaislots>=number-9) {
        $(document).ready(function(){
            $('#ChangeBBonsaiA').show();
            $('#ChangeBBonsaiB').hide();
            $('#ChangeBBonsaiC').hide();
            $('#ChangeBBonsaiD').hide();
            $('#ChangeBBonsaiE').hide();
            $('#ChangeBBonsaiF').hide();
            $('#ChangeBBonsaiG').hide();
            $('#ChangeBBonsaiH').hide();
            $('#ChangeBBonsaiI').hide();
            $('#ChangeBBonsaiJ').hide();
        });
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    exchange_or=ev.currentTarget.id;
}

function drop(ev) {
    ev.preventDefault();
    exchange_to=ev.currentTarget.id;
    exchange(exchange_or, exchange_to);
}

function exchange(Original, Target) {
    if (Original==Target) {
    }
    else {
        if (Original=="ChangeABonsaiA" || Original=="ChangeABonsaiB" || Original=="ChangeABonsaiC" || Original=="ChangeABonsaiD" || Original=="ChangeABonsaiE" || Original=="ChangeABonsaiF" || Original=="ChangeABonsaiG" || Original=="ChangeABonsaiH" || Original=="ChangeABonsaiI" || Original=="ChangeABonsaiJ") {
            exchange_placeholder=searchbonsaichange_return(x_changeA, Original, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
            if (Target=="ChangeABonsaiA" || Target=="ChangeABonsaiB" || Target=="ChangeABonsaiC" || Target=="ChangeABonsaiD" || Target=="ChangeABonsaiE" || Target=="ChangeABonsaiF" || Target=="ChangeABonsaiG" || Target=="ChangeABonsaiH" || Target=="ChangeABonsaiI" || Target=="ChangeABonsaiJ") {
                searchbonsaichange_A(x_changeA, Original, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ", Target)
                searchbonsaichange_Placeholder(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ", exchange_placeholder)
                exchange_placeholder=0;
            }
            else if (Target=="ChangeBBonsaiA" || Target=="ChangeBBonsaiB" || Target=="ChangeBBonsaiC" || Target=="ChangeBBonsaiD" || Target=="ChangeBBonsaiE" || Target=="ChangeBBonsaiF" || Target=="ChangeBBonsaiG" || Target=="ChangeBBonsaiH" || Target=="ChangeBBonsaiI" || Target=="ChangeBBonsaiJ") {
                searchbonsaichange_B(x_changeA, Original, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ", Target)
                searchbonsaichange_Placeholder(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ", exchange_placeholder)
                exchange_placeholder=0;
            }
        }
        else if (Original=="ChangeBBonsaiA" || Original=="ChangeBBonsaiB" || Original=="ChangeBBonsaiC" || Original=="ChangeBBonsaiD" || Original=="ChangeBBonsaiE" || Original=="ChangeBBonsaiF" || Original=="ChangeBBonsaiG" || Original=="ChangeBBonsaiH" || Original=="ChangeBBonsaiI" || Original=="ChangeBBonsaiJ") {
            exchange_placeholder=searchbonsaichange_return(x_changeB, Original, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ")
            if (Target=="ChangeABonsaiA" || Target=="ChangeABonsaiB" || Target=="ChangeABonsaiC" || Target=="ChangeABonsaiD" || Target=="ChangeABonsaiE" || Target=="ChangeABonsaiF" || Target=="ChangeABonsaiG" || Target=="ChangeABonsaiH" || Target=="ChangeABonsaiI" || Target=="ChangeABonsaiJ") {
                searchbonsaichange_A(x_changeB, Original, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ", Target)
                searchbonsaichange_Placeholder(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ", exchange_placeholder)
                exchange_placeholder=0;

            }
            else if (Target=="ChangeBBonsaiA" || Target=="ChangeBBonsaiB" || Target=="ChangeBBonsaiC" || Target=="ChangeBBonsaiD" || Target=="ChangeBBonsaiE" || Target=="ChangeBBonsaiF" || Target=="ChangeBBonsaiG" || Target=="ChangeBBonsaiH" || Target=="ChangeBBonsaiI" || Target=="ChangeBBonsaiJ") {
                searchbonsaichange_B(x_changeB, Original, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ", Target)
                searchbonsaichange_Placeholder(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ", exchange_placeholder)
                exchange_placeholder=0;
            }
        }
        if (exchange_growingA>0) {
            if (exchange_growingB>0) {
                if (exchange_growingA==1 && exchange_growingB==2) {
                    changeworkergrowing(worker01, worker02);
                }
                else if (exchange_growingA==1 && exchange_growingB==3) {
                    changeworkergrowing(worker01, worker03);                    
                }
                else if (exchange_growingA==2 && exchange_growingB==3) {
                    changeworkergrowing(worker02, worker03);                    
                }
            }
            else {
                if (exchange_growingA==1) {
                    worker01.growing=exchange_growbonsaiB;
                }
                else if (exchange_growingA==2) {
                    worker02.growing=exchange_growbonsaiB;                    
                }
                else if (exchange_growingA==3) {
                    worker03.growing=exchange_growbonsaiB;                   
                }
            }
        }
        else if (exchange_growingB>0) {
            if (exchange_growingB==1) {
                    worker01.growing=exchange_growbonsaiA;
                }
                else if (exchange_growingB==2) {
                    worker02.growing=exchange_growbonsaiA;                    
                }
                else if (exchange_growingB==3) {
                    worker03.growing=exchange_growbonsaiA;                   
                }
        }
        
        exchange_growing=0;
        exchange_growingA=0;
        exchange_growingB=0;
        exchange_growbonsaiA=0;
        exchange_growbonsaiB=0;
    }
    menu_change();
    menu_shop_change();
    menu_contests_change();
    menu_changeA_change();
}

function changeworkergrowing(workerA, workerB) {
    exchange_growing=workerA.growing;
    workerA.growing=workerB.growing;
    workerB.growing=exchange_growing;
}

function searchworkergrowingA(bonsai, test) {
    if (bonsai.growing==1) {
        if (worker01.growing==test) {
            exchange_growingA=1
        }
        else if (worker02.growing==test) {
            exchange_growingA=2
        }
        else if (worker03.growing==test) {
            exchange_growingA=3
        }
    }
}
function searchworkergrowingB(bonsai, test) {
    if (bonsai.growing==1) {
        if (worker01.growing==test) {
            exchange_growingB=1
        }
        else if (worker02.growing==test) {
            exchange_growingB=2
        }
        else if (worker03.growing==test) {
            exchange_growingB=3
        }
    }
}

function searchbonsaichange_return(x, exchange, ChangeBonsaiA, ChangeBonsaiB, ChangeBonsaiC, ChangeBonsaiD, ChangeBonsaiE, ChangeBonsaiF, ChangeBonsaiG, ChangeBonsaiH, ChangeBonsaiI, ChangeBonsaiJ) {
    if (x==1) {
        if (exchange==ChangeBonsaiA) {
            searchworkergrowingA(bonsai001, 1);
            exchange_growbonsaiA=1;
            return bonsai001;
        }
        else if (exchange==ChangeBonsaiB) {
            searchworkergrowingA(bonsai002, 2);
            exchange_growbonsaiA=2;
            return bonsai002;
        }
        else if (exchange==ChangeBonsaiC) {
            searchworkergrowingA(bonsai003, 3);
            exchange_growbonsaiA=3;
            return bonsai003;
        }
        else if (exchange==ChangeBonsaiD) {
            searchworkergrowingA(bonsai004, 4);
            exchange_growbonsaiA=4;
            return bonsai004;
        }
        else if (exchange==ChangeBonsaiE) {
            searchworkergrowingA(bonsai005, 5);
            exchange_growbonsaiA=5;
            return bonsai005;
        }
        else if (exchange==ChangeBonsaiF) {
            searchworkergrowingA(bonsai006, 6);
            exchange_growbonsaiA=6;
            return bonsai006;
        }
        else if (exchange==ChangeBonsaiG) {
            searchworkergrowingA(bonsai007, 7);
            exchange_growbonsaiA=7;
            return bonsai007;
        }
        else if (exchange==ChangeBonsaiH) {
            searchworkergrowingA(bonsai008, 8);
            exchange_growbonsaiA=8;
            return bonsai008;
        }
        else if (exchange==ChangeBonsaiI) {
            searchworkergrowingA(bonsai009, 9);
            exchange_growbonsaiA=9;
            return bonsai009;
        }
        else if (exchange==ChangeBonsaiJ) {
            searchworkergrowingA(bonsai010, 10);
            exchange_growbonsaiA=10;
            return bonsai010;
        }
    }
    else if (x==11) {
        if (exchange==ChangeBonsaiA) {
            searchworkergrowingA(bonsai011, 11);
            exchange_growbonsaiA=11;
            return bonsai011;
        }
        else if (exchange==ChangeBonsaiB) {
            searchworkergrowingA(bonsai012, 12);
            exchange_growbonsaiA=12;
            return bonsai012;
        }
        else if (exchange==ChangeBonsaiC) {
            searchworkergrowingA(bonsai013, 13);
            exchange_growbonsaiA=13;
            return bonsai013;
        }
        else if (exchange==ChangeBonsaiD) {
            searchworkergrowingA(bonsai014, 14);
            exchange_growbonsaiA=14;
            return bonsai014;
        }
        else if (exchange==ChangeBonsaiE) {
            searchworkergrowingA(bonsai015, 15);
            exchange_growbonsaiA=15;
            return bonsai015;
        }
        else if (exchange==ChangeBonsaiF) {
            searchworkergrowingA(bonsai016, 16);
            exchange_growbonsaiA=16;
            return bonsai016;
        }
        else if (exchange==ChangeBonsaiG) {
            searchworkergrowingA(bonsai017, 17);
            exchange_growbonsaiA=17;
            return bonsai017;
        }
        else if (exchange==ChangeBonsaiH) {
            searchworkergrowingA(bonsai018, 18);
            exchange_growbonsaiA=18;
            return bonsai018;
        }
        else if (exchange==ChangeBonsaiI) {
            searchworkergrowingA(bonsai019, 19);
            exchange_growbonsaiA=19;
            return bonsai019;
        }
        else if (exchange==ChangeBonsaiJ) {
            searchworkergrowingA(bonsai020, 20);
            exchange_growbonsaiA=20;
            return bonsai020;
        }
    }
}

function searchbonsaichange_return2(x, exchange, ChangeBonsaiA, ChangeBonsaiB, ChangeBonsaiC, ChangeBonsaiD, ChangeBonsaiE, ChangeBonsaiF, ChangeBonsaiG, ChangeBonsaiH, ChangeBonsaiI, ChangeBonsaiJ) {
    if (x==1) {
        if (exchange==ChangeBonsaiA) {
            return bonsai001;
        }
        else if (exchange==ChangeBonsaiB) {
            return bonsai002;
        }
        else if (exchange==ChangeBonsaiC) {
            return bonsai003;
        }
        else if (exchange==ChangeBonsaiD) {
            return bonsai004;
        }
        else if (exchange==ChangeBonsaiE) {
            return bonsai005;
        }
        else if (exchange==ChangeBonsaiF) {
            return bonsai006;
        }
        else if (exchange==ChangeBonsaiG) {
            return bonsai007;
        }
        else if (exchange==ChangeBonsaiH) {
            return bonsai008;
        }
        else if (exchange==ChangeBonsaiI) {
            return bonsai009;
        }
        else if (exchange==ChangeBonsaiJ) {
            return bonsai010;
        }
    }
    else if (x==11) {
        if (exchange==ChangeBonsaiA) {
            return bonsai011;
        }
        else if (exchange==ChangeBonsaiB) {
            return bonsai012;
        }
        else if (exchange==ChangeBonsaiC) {
            return bonsai013;
        }
        else if (exchange==ChangeBonsaiD) {
            return bonsai014;
        }
        else if (exchange==ChangeBonsaiE) {
            return bonsai015;
        }
        else if (exchange==ChangeBonsaiF) {
            return bonsai016;
        }
        else if (exchange==ChangeBonsaiG) {
            return bonsai017;
        }
        else if (exchange==ChangeBonsaiH) {
            return bonsai018;
        }
        else if (exchange==ChangeBonsaiI) {
            return bonsai019;
        }
        else if (exchange==ChangeBonsaiJ) {
            return bonsai020;
        }
    }
}

function searchbonsaichange_A(x, exchange, ChangeBonsaiA, ChangeBonsaiB, ChangeBonsaiC, ChangeBonsaiD, ChangeBonsaiE, ChangeBonsaiF, ChangeBonsaiG, ChangeBonsaiH, ChangeBonsaiI, ChangeBonsaiJ, Target) {
    if (x==1) {
        if (exchange==ChangeBonsaiA) {
            bonsai001=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiB) {
            bonsai002=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiC) {
            bonsai003=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiD) {
            bonsai004=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiE) {
            bonsai005=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiF) {
            bonsai006=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiG) {
            bonsai007=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiH) {
            bonsai008=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiI) {
            bonsai009=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiJ) {
            bonsai010=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
    }
    else if (x==11) {
        if (exchange==ChangeBonsaiA) {
            bonsai011=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiB) {
            bonsai012=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiC) {
            bonsai013=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiD) {
            bonsai014=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiE) {
            bonsai015=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiF) {
            bonsai016=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiG) {
            bonsai017=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiH) {
            bonsai018=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiI) {
            bonsai019=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
        else if (exchange==ChangeBonsaiJ) {
            bonsai020=searchbonsaichange_return2(x_changeA, Target, "ChangeABonsaiA", "ChangeABonsaiB", "ChangeABonsaiC", "ChangeABonsaiD", "ChangeABonsaiE", "ChangeABonsaiF", "ChangeABonsaiG", "ChangeABonsaiH", "ChangeABonsaiI", "ChangeABonsaiJ");
        }
    }
}

function searchbonsaichange_B(x, exchange, ChangeBonsaiA, ChangeBonsaiB, ChangeBonsaiC, ChangeBonsaiD, ChangeBonsaiE, ChangeBonsaiF, ChangeBonsaiG, ChangeBonsaiH, ChangeBonsaiI, ChangeBonsaiJ, Target) {
    if (x==1) {
        if (exchange==ChangeBonsaiA) {
            bonsai001=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiB) {
            bonsai002=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiC) {
            bonsai003=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiD) {
            bonsai004=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiE) {
            bonsai005=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiF) {
            bonsai006=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiG) {
            bonsai007=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiH) {
            bonsai008=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiI) {
            bonsai009=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiJ) {
            bonsai010=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
    }
    else if (x==11) {
        if (exchange==ChangeBonsaiA) {
            bonsai011=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiB) {
            bonsai012=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiC) {
            bonsai013=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiD) {
            bonsai014=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiE) {
            bonsai015=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiF) {
            bonsai016=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiG) {
            bonsai017=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiH) {
            bonsai018=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiI) {
            bonsai019=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
        else if (exchange==ChangeBonsaiJ) {
            bonsai020=searchbonsaichange_return2(x_changeB, Target, "ChangeBBonsaiA", "ChangeBBonsaiB", "ChangeBBonsaiC", "ChangeBBonsaiD", "ChangeBBonsaiE", "ChangeBBonsaiF", "ChangeBBonsaiG", "ChangeBBonsaiH", "ChangeBBonsaiI", "ChangeBBonsaiJ");
        }
    }
}

function searchbonsaichange_Placeholder(x, exchange, ChangeBonsaiA, ChangeBonsaiB, ChangeBonsaiC, ChangeBonsaiD, ChangeBonsaiE, ChangeBonsaiF, ChangeBonsaiG, ChangeBonsaiH, ChangeBonsaiI, ChangeBonsaiJ, Placeholder) {
    if (x==1) {
        if (exchange==ChangeBonsaiA) {
            searchworkergrowingB(bonsai001, 1);
            exchange_growbonsaiB=1;
            bonsai001=Placeholder;
        }
        else if (exchange==ChangeBonsaiB) {
            searchworkergrowingB(bonsai002, 2);
            exchange_growbonsaiB=2;
            bonsai002=Placeholder;
        }
        else if (exchange==ChangeBonsaiC) {
            searchworkergrowingB(bonsai003, 3);
            exchange_growbonsaiB=3;
            bonsai003=Placeholder;
        }
        else if (exchange==ChangeBonsaiD) {
            searchworkergrowingB(bonsai004, 4);
            exchange_growbonsaiB=4;
            bonsai004=Placeholder;
        }
        else if (exchange==ChangeBonsaiE) {
            searchworkergrowingB(bonsai005, 5);
            exchange_growbonsaiB=5;
            bonsai005=Placeholder;
        }
        else if (exchange==ChangeBonsaiF) {
            searchworkergrowingB(bonsai006, 6);
            exchange_growbonsaiB=6;
            bonsai006=Placeholder;
        }
        else if (exchange==ChangeBonsaiG) {
            searchworkergrowingB(bonsai007, 7);
            exchange_growbonsaiB=7;
            bonsai007=Placeholder;
        }
        else if (exchange==ChangeBonsaiH) {
            searchworkergrowingB(bonsai008, 8);
            exchange_growbonsaiB=8;
            bonsai008=Placeholder;
        }
        else if (exchange==ChangeBonsaiI) {
            searchworkergrowingB(bonsai009, 9);
            exchange_growbonsaiB=9;
            bonsai009=Placeholder;
        }
        else if (exchange==ChangeBonsaiJ) {
            searchworkergrowingB(bonsai010, 10);
            exchange_growbonsaiB=10;
            bonsai010=Placeholder;
        }
    }
    else if (x==11) {
        if (exchange==ChangeBonsaiA) {
            searchworkergrowingB(bonsai011, 11);
            exchange_growbonsaiB=11;
            bonsai011=Placeholder;
        }
        else if (exchange==ChangeBonsaiB) {
            searchworkergrowingB(bonsai012, 12);
            exchange_growbonsaiB=12;
            bonsai012=Placeholder;
        }
        else if (exchange==ChangeBonsaiC) {
            searchworkergrowingB(bonsai013, 13);
            exchange_growbonsaiB=13;
            bonsai013=Placeholder;
        }
        else if (exchange==ChangeBonsaiD) {
            searchworkergrowingB(bonsai014, 14);
            exchange_growbonsaiB=14;
            bonsai014=Placeholder;
        }
        else if (exchange==ChangeBonsaiE) {
            searchworkergrowingB(bonsai015, 15);
            exchange_growbonsaiB=15;
            bonsai015=Placeholder;
        }
        else if (exchange==ChangeBonsaiF) {
            searchworkergrowingB(bonsai016, 16);
            exchange_growbonsaiB=16;
            bonsai016=Placeholder;
        }
        else if (exchange==ChangeBonsaiG) {
            searchworkergrowingB(bonsai017, 17);
            exchange_growbonsaiB=17;
            bonsai017=Placeholder;
        }
        else if (exchange==ChangeBonsaiH) {
            searchworkergrowingB(bonsai018, 18);
            exchange_growbonsaiB=18;
            bonsai018=Placeholder;
        }
        else if (exchange==ChangeBonsaiI) {
            searchworkergrowingB(bonsai019, 19);
            exchange_growbonsaiB=19;
            bonsai019=Placeholder;
        }
        else if (exchange==ChangeBonsaiJ) {
            searchworkergrowingB(bonsai020, 20);
            exchange_growbonsaiB=20;
            bonsai020=Placeholder;
        }
    }
}