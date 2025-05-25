function contests_result() {
    if (tutorial==14) {
        tutorial=15;
        tutorial_function();
    }
    if (contests.id=="TTG01_R1") {
        $(document).ready(function(){
            $('#modal_contests_result_request').show();
            $('#modal_contests_result_competition').hide();
            $('#bonsaixa_scoretext').hide();
            $('#bonsaixa_score').hide();
            $('#bonsaixa_bbtext').show();
            $('#bonsaixa_bb').show();
        });        
        contests_result_request();
        document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - First Request";
        document.getElementById("modal_contests_result_request_result").innerHTML = "The represented bonsai fits the requirements made in our request. Thank you very much.<br>You may proceed with the next request. Two more to go.";
        document.getElementById("modal_contests_result_request_reward").innerText = "3 XP";
        experience(3);
        $(document).ready(function(){
            $('#T101').hide();
            $('#T102').show();
            $('#T101C').show();
        }); 
        tasks.tracker101=3;
        tasks.tracker102=1;
        contests.bonsaichoosen=0;
        contests.bonsaichoosenx=0;
    }
    else if (contests.id=="TTG01_R2") {
        $(document).ready(function(){
            $('#modal_contests_result_request').show();
            $('#modal_contests_result_competition').hide();
            $('#bonsaixa_scoretext').hide();
            $('#bonsaixa_score').hide();
            $('#bonsaixa_bbtext').show();
            $('#bonsaixa_bb').show();
        }); 
        contests_result_request();
        document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - Second Request";
        document.getElementById("modal_contests_result_request_result").innerHTML = "Once again the represented bonsai fits the requirements we made. Thank you very much.<br>You may proceed with the next request. One more to go.";
        document.getElementById("modal_contests_result_request_reward").innerText = "5 XP";
        experience(5);
        $(document).ready(function(){
            $('#T102').hide();
            $('#T103').show();
            $('#T102C').show();
        }); 
        tasks.tracker102=3;
        tasks.tracker103=1;
        contests.bonsaichoosen=0;
        contests.bonsaichoosenx=0;
    }
    else if (contests.id=="TTG01_R3") {
        $(document).ready(function(){
            $('#modal_contests_result_request').show();
            $('#modal_contests_result_competition').hide();
            $('#bonsaixa_scoretext').hide();
            $('#bonsaixa_score').hide();
            $('#bonsaixa_bbtext').show();
            $('#bonsaixa_bb').show();
        });
        contests_result_request();
        document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - Third Request";
        document.getElementById("modal_contests_result_request_result").innerHTML = "Your third represented bonsai, has as usual, fit our requirements. We congratulate you to finishing all our requests.<br>You may proceed now with competing in our competitions.";
        document.getElementById("modal_contests_result_request_reward").innerText = "10 XP";
        experience(10);
        $(document).ready(function(){
            $('#T103').hide();
            $('#T103C').show();
        }); 
        tasks.tracker103=3;
        contests.bonsaichoosen=0;
        contests.bonsaichoosenx=0;
    }
    else if (contests.id=="TTG01_C1") {
        $(document).ready(function(){
            $('#modal_contests_result_request').hide();
            $('#modal_contests_result_competition').show();
        }); 
        contests.difficulty=1;
        contests_comcalc();
        contests_result_competition();
        document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - Competition: Beginner";
        if (contests.own_place==1) {
            if (clubs_leagues.ttg01==0) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the competiton! You can now enter the advanced competition of this club.";
                clubs_leagues.ttg01=1;
                $(document).ready(function(){
                    $('#ButtonTTG01_C1').show();
                    $('#ButtonTTG01_C2').show();
                    $('#ButtonTTG01_C3').hide();
                }); 
            }
            else {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the competition!";
            }
            document.getElementById("modal_contests_result_competition_reward").innerHTML = '10 XP & 10&nbsp;<img src="Images/currency.svg" width="15" height="15">';
            experience(10);
            resources.money +=10;
            fetchvalues();
        }
        if (contests.own_place==2) {
            document.getElementById("modal_contests_result_competition_result").innerHTML = "Well done, your bonsai was second best in the competitionn. A bit more growing and care and it might win the exhibition.";
            document.getElementById("modal_contests_result_competition_reward").innerHTML = '5 XP & 5&nbsp;<img src="Images/currency.svg" width="15" height="15">';
            experience(5);
            resources.money +=5;
            fetchvalues();
        }
        if (contests.own_place==3) {
            document.getElementById("modal_contests_result_competition_result").innerHTML = "Not bad, your bonsai made it into the top three bonsais of the competition.";
            document.getElementById("modal_contests_result_competition_reward").innerHTML = '3 XP & 3&nbsp;<img src="Images/currency.svg" width="15" height="15">';
            experience(3);
            resources.money +=3;
            fetchvalues();
        }
        if (contests.own_place>=4) {
            document.getElementById("modal_contests_result_competition_result").innerHTML = "Unfortunately your bonsai didn't place within the top three spots for the competition. Try again another time.";
            document.getElementById("modal_contests_result_competition_reward").innerText = "1 XP";
            experience(1);
            fetchvalues();
        }
        contests.bonsaichoosen=0;
        contests.bonsaichoosenx=0;
        contests.own_place=1;
        clubs_leagues.ttg01c1=12; //1200
        fetchvalues();
    }
    else if (contests.id=="TTG01_C2") {
        $(document).ready(function(){
            $('#modal_contests_result_request').hide();
            $('#modal_contests_result_competition').show();
        }); 
        contests.difficulty=2;
        contests_comcalc();
        contests_result_competition();
        document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - Competition: Advanced";
        if (contests.own_place==1) {
            if (clubs_leagues.ttg01==1) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the competition! You can now enter the expert competition of this club.";
                clubs_leagues.ttg01=2;
                $(document).ready(function(){
                    $('#ButtonTTG01_C1').show();
                    $('#ButtonTTG01_C2').show();
                    $('#ButtonTTG01_C3').show();
                }); 
            }
            else {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the competition!";
            }
            document.getElementById("modal_contests_result_competition_reward").innerHTML = '10 XP & 10&nbsp;<img src="Images/currency.svg" width="15" height="15">';
            experience(10);
            resources.money +=10;
            fetchvalues();
        }
        if (contests.own_place==2) {
            document.getElementById("modal_contests_result_competition_result").innerHTML = "Well done, your bonsai was second best in the competitionn. A bit more growing and care and it might win the exhibition.";
            document.getElementById("modal_contests_result_competition_reward").innerHTML = '5 XP & 5&nbsp;<img src="Images/currency.svg" width="15" height="15">';
            experience(5);
            resources.money +=5;
            fetchvalues();
        }
        if (contests.own_place==3) {
            document.getElementById("modal_contests_result_competition_result").innerHTML = "Not bad, your bonsai made it into the top three bonsais of the competition.";
            document.getElementById("modal_contests_result_competition_reward").innerHTML = '3 XP & 3&nbsp;<img src="Images/currency.svg" width="15" height="15">';
            experience(3);
            resources.money +=3;
            fetchvalues();
        }
        if (contests.own_place>=4) {
            document.getElementById("modal_contests_result_competition_result").innerHTML = "Unfortunately your bonsai didn't place within the top three spots for the competition. Try again another time.";
            document.getElementById("modal_contests_result_competition_reward").innerText = "1 XP";
            experience(1);
            fetchvalues();
        }
        contests.bonsaichoosen=0;
        contests.bonsaichoosenx=0;
        contests.own_place=1;
        clubs_leagues.ttg01c2=12; //1200
        fetchvalues();
    }
    else if (contests.id=="TTG01_C3") {
        $(document).ready(function(){
            $('#modal_contests_result_request').hide();
            $('#modal_contests_result_competition').show();
        }); 
        contests.difficulty=3;
        contests_comcalc();
        contests_result_competition();
        document.getElementById("modal_contests_result_title").innerText = "Result: Club Raundo - Competition: Expert";
        if (contests.own_place==1) {
            if (clubs_leagues.ttg01==2) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the competition! You can now enter the expert competition of this club.";
                clubs_leagues.ttg01=3;
                $(document).ready(function(){
                    $('#T101').show();
                }); 
                tasks.tracker101=1;
            }
            else {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the competition!";
            }
            document.getElementById("modal_contests_result_competition_reward").innerHTML = '10 XP & 10&nbsp;<img src="Images/currency.svg" width="15" height="15">';
            experience(10);
            resources.money +=10;
            fetchvalues();
        }
        if (contests.own_place==2) {
            document.getElementById("modal_contests_result_competition_result").innerHTML = "Well done, your bonsai was second best in the competitionn. A bit more growing and care and it might win the exhibition.";
            document.getElementById("modal_contests_result_competition_reward").innerHTML = '5 XP & 5&nbsp;<img src="Images/currency.svg" width="15" height="15">';
            experience(5);
            resources.money +=5;
            fetchvalues();
        }
        if (contests.own_place==3) {
            document.getElementById("modal_contests_result_competition_result").innerHTML = "Not bad, your bonsai made it into the top three bonsais of the competition.";
            document.getElementById("modal_contests_result_competition_reward").innerHTML = '3 XP & 3&nbsp;<img src="Images/currency.svg" width="15" height="15">';
            experience(3);
            resources.money +=3;
            fetchvalues();
        }
        if (contests.own_place>=4) {
            document.getElementById("modal_contests_result_competition_result").innerHTML = "Unfortunately your bonsai didn't place within the top three spots for the competition. Try again another time.";
            document.getElementById("modal_contests_result_competition_reward").innerText = "1 XP";
            experience(1);
            fetchvalues();
        }
        contests.bonsaichoosen=0;
        contests.bonsaichoosenx=0;
        contests.own_place=1;
        clubs_leagues.ttg01c3=12; //1200
        fetchvalues();
    }
        else if (contests.id=="Area01_J1") {
            $(document).ready(function(){
                $('#modal_contests_result_request').show();
                $('#modal_contests_result_competition').hide();
                $('#judges').hide();
                $('#judge2').hide();
                $('#judge3').hide();
            });             
            contests_result_request();
            document.getElementById("modal_contests_result_title").innerText = "Result: League Area 01 - First Judging";
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
            fetchvalues();
        }
        else if (contests.id=="Area01_J2") {
            $(document).ready(function(){
                $('#modal_contests_result_request').show();
                $('#modal_contests_result_competition').hide();
                $('#judges').hide();
                $('#judge2').hide();
                $('#judge3').hide();
            });             
            contests_result_request();
            document.getElementById("modal_contests_result_title").innerText = "Result: League Area 01 - Second Judging";
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
            fetchvalues();
        }
        else if (contests.id=="Area01_J3") {
            $(document).ready(function(){
                $('#modal_contests_result_request').show();
                $('#modal_contests_result_competition').hide();
                $('#judges').hide();
                $('#judge2').hide();
                $('#judge3').hide();
            });             
            contests_result_request();
            document.getElementById("modal_contests_result_title").innerText = "Result: League Area 01 - Third Judging";
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
            fetchvalues();
        }
        else if (contests.id=="Area01_C1") {
            $(document).ready(function(){
                $('#modal_contests_result_request').hide();
                $('#modal_contests_result_competition').show();
                $('#judges').hide();
                $('#judge2').hide();
                $('#judge3').hide();
            }); 
            contests.difficulty=4;
            contests_comcalc();
            contests_result_competition();
            document.getElementById("modal_contests_result_title").innerText = "Result: League Area 01 - Exhibition: Beginner";
            if (contests.own_place==1) {
                if (clubs_leagues.lea01==0) {
                    document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the exhibition! You can now enter the advanced exhibition of this league.";
                    clubs_leagues.lea01=1;
                    $(document).ready(function(){
                        $('#ButtonArea01_C1').show();
                        $('#ButtonArea01_C2').show();
                        $('#ButtonArea01_C3').hide();
                    }); 
                }
                else {
                    document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the exhibition!";
                }
                document.getElementById("modal_contests_result_competition_reward").innerHTML = '20 XP & 10&nbsp;<img src="Images/currency.svg" width="15" height="15">';
                experience(20);
                resources.money +=10;
                fetchvalues();
            }
            if (contests.own_place==2) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Well done, your bonsai was second best in the exhibition. A bit more growing and care and it might win the exhibition.";
                document.getElementById("modal_contests_result_competition_reward").innerHTML = '10 XP & 5&nbsp;<img src="Images/currency.svg" width="15" height="15">';
                experience(10);
                resources.money +=5;
                fetchvalues();
            }
            if (contests.own_place==3) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Not bad, your bonsai made it into the top three bonsais of the exhibition.";
                document.getElementById("modal_contests_result_competition_reward").innerHTML = '5 XP & 3&nbsp;<img src="Images/currency.svg" width="15" height="15">';
                experience(5);
                resources.money +=3;
                fetchvalues();
            }
            if (contests.own_place>=4) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Unfortunately your bonsai didn't place within the top three spots for the exhibition. Try again another time.";
                document.getElementById("modal_contests_result_competition_reward").innerText = "3 XP";
                experience(3);
                fetchvalues();
            }
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
            contests.own_place=1;
            clubs_leagues.lea01c1=12; //3600
            fetchvalues();
        }
        else if (contests.id=="Area01_C2") {
            $(document).ready(function(){
                $('#modal_contests_result_request').hide();
                $('#modal_contests_result_competition').show();
                $('#judges').hide();
                $('#judge2').hide();
                $('#judge3').hide();
            }); 
            contests.difficulty=4;
            contests_comcalc();
            contests_result_competition();
            document.getElementById("modal_contests_result_title").innerText = "Result: League Area 01 - Exhibition: Advanced";
            if (contests.own_place==1) {
                if (clubs_leagues.lea01==1) {
                    document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the exhibition! You can now enter the advanced exhibition of this league.";
                    clubs_leagues.lea01=2;
                    $(document).ready(function(){
                        $('#ButtonArea01_C1').show();
                        $('#ButtonArea01_C2').show();
                        $('#ButtonArea01_C3').show();
                    }); 
                }
                else {
                    document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the exhibition!";
                }
                document.getElementById("modal_contests_result_competition_reward").innerHTML = '20 XP & 10&nbsp;<img src="Images/currency.svg" width="15" height="15">';
                experience(20);
                resources.money +=10;
                fetchvalues();
            }
            if (contests.own_place==2) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Well done, your bonsai was second best in the exhibition. A bit more growing and care and it might win the exhibition.";
                document.getElementById("modal_contests_result_competition_reward").innerHTML = '10 XP & 5&nbsp;<img src="Images/currency.svg" width="15" height="15">';
                experience(10);
                resources.money +=5;
                fetchvalues();
            }
            if (contests.own_place==3) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Not bad, your bonsai made it into the top three bonsais of the exhibition.";
                document.getElementById("modal_contests_result_competition_reward").innerHTML = '5 XP & 3&nbsp;<img src="Images/currency.svg" width="15" height="15">';
                experience(5);
                resources.money +=3;
                fetchvalues();
            }
            if (contests.own_place>=4) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Unfortunately your bonsai didn't place within the top three spots for the exhibition. Try again another time.";
                document.getElementById("modal_contests_result_competition_reward").innerText = "3 XP";
                experience(3);
                fetchvalues();
            }
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
            contests.own_place=1;
            clubs_leagues.lea01c2=12; //3600
            fetchvalues();
        }
        else if (contests.id=="Area01_C3") {
            $(document).ready(function(){
                $('#modal_contests_result_request').hide();
                $('#modal_contests_result_competition').show();
                $('#judges').hide();
                $('#judge2').hide();
                $('#judge3').hide();
            }); 
            contests.difficulty=4;
            contests_comcalc();
            contests_result_competition();
            document.getElementById("modal_contests_result_title").innerText = "Result: League Area 01 - Exhibition: Beginner";
            if (contests.own_place==1) {
                if (clubs_leagues.lea01==2) {
                    document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the exhibition! You have won all the exhibition of this league.";
                    clubs_leagues.lea01=3;
                    $(document).ready(function(){
                        $('#T201').show();
                    }); 
                    tasks.tracker201=1;
                }
                else {
                    document.getElementById("modal_contests_result_competition_result").innerHTML = "Congratulations your bonsai placed first and you won the exhibition!";
                }
                document.getElementById("modal_contests_result_competition_reward").innerHTML = '20 XP & 10&nbsp;<img src="Images/currency.svg" width="15" height="15">';
                experience(20);
                resources.money +=10;
                fetchvalues();
            }
            if (contests.own_place==2) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Well done, your bonsai was second best in the exhibition. A bit more growing and care and it might win the exhibition.";
                document.getElementById("modal_contests_result_competition_reward").innerHTML = '10 XP & 5&nbsp;<img src="Images/currency.svg" width="15" height="15">';
                experience(10);
                resources.money +=5;
                fetchvalues();
            }
            if (contests.own_place==3) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Not bad, your bonsai made it into the top three bonsais of the exhibition.";
                document.getElementById("modal_contests_result_competition_reward").innerHTML = '5 XP & 3&nbsp;<img src="Images/currency.svg" width="15" height="15">';
                experience(5);
                resources.money +=3;
                fetchvalues();
            }
            if (contests.own_place>=4) {
                document.getElementById("modal_contests_result_competition_result").innerHTML = "Unfortunately your bonsai didn't place within the top three spots for the exhibition. Try again another time.";
                document.getElementById("modal_contests_result_competition_reward").innerText = "3 XP";
                experience(3);
                fetchvalues();
            }
            contests.bonsaichoosen=0;
            contests.bonsaichoosenx=0;
            contests.own_place=1;
            clubs_leagues.lea01c3=12; //3600
            fetchvalues();
        }
}