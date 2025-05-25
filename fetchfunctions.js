function fetchbonsaimenu(number1, number2, a, b, c, d, e, f, g, h, i, j) {
    document.getElementById("bonsaia_nr").innerText = "#"+number1+"1";
    document.getElementById("bonsaia_name").innerText = a.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, a, "50", "50");
    document.getElementById("ButtonBonsaiA").style.backgroundImage= fetchbonsairanktq(a);
    document.getElementById("bonsaia_level").innerText = a.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_cp").innerHTML = a.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        
    document.getElementById("bonsaib_nr").innerText = "#"+number1+"2";
    document.getElementById("bonsaib_name").innerText = b.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, b, "50", "50");
    document.getElementById("ButtonBonsaiB").style.backgroundImage= fetchbonsairanktq(b);
    document.getElementById("bonsaib_level").innerText = b.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_cp").innerHTML = b.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        
    document.getElementById("bonsaic_nr").innerText = "#"+number1+"3";
    document.getElementById("bonsaic_name").innerText = c.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c, "50", "50");
    document.getElementById("ButtonBonsaiC").style.backgroundImage= fetchbonsairanktq(c);
    document.getElementById("bonsaic_level").innerText = c.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_cp").innerHTML = c.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        
    document.getElementById("bonsaid_nr").innerText = "#"+number1+"4";
    document.getElementById("bonsaid_name").innerText = d.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, d, "50", "50");
    document.getElementById("ButtonBonsaiD").style.backgroundImage= fetchbonsairanktq(d);
    document.getElementById("bonsaid_level").innerText = d.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_cp").innerHTML = d.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        
    document.getElementById("bonsaie_nr").innerText = "#"+number1+"5";
    document.getElementById("bonsaie_name").innerText = e.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, e, "50", "50");
    document.getElementById("ButtonBonsaiE").style.backgroundImage= fetchbonsairanktq(e);
    document.getElementById("bonsaie_level").innerText = e.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_cp").innerHTML = e.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        
    document.getElementById("bonsaif_nr").innerText = "#"+number1+"6";
    document.getElementById("bonsaif_name").innerText = f.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, f, "50", "50");
    document.getElementById("ButtonBonsaiF").style.backgroundImage= fetchbonsairanktq(f);
    document.getElementById("bonsaif_level").innerText = f.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_cp").innerHTML = f.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("bonsaig_nr").innerText = "#"+number1+"7";
    document.getElementById("bonsaig_name").innerText = g.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, g, "50", "50");
    document.getElementById("ButtonBonsaiG").style.backgroundImage= fetchbonsairanktq(g);
    document.getElementById("bonsaig_level").innerText = g.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_cp").innerHTML = g.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("bonsaih_nr").innerText = "#"+number1+"8";
    document.getElementById("bonsaih_name").innerText = h.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, h, "50", "50");
    document.getElementById("ButtonBonsaiH").style.backgroundImage= fetchbonsairanktq(h);
    document.getElementById("bonsaih_level").innerText = h.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_cp").innerHTML = h.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("bonsaii_nr").innerText = "#"+number1+"9";
    document.getElementById("bonsaii_name").innerText = i.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, i, "50", "50");
    document.getElementById("ButtonBonsaiI").style.backgroundImage= fetchbonsairanktq(i);
    document.getElementById("bonsaii_level").innerText = i.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_cp").innerHTML = i.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("bonsaij_nr").innerText = "#"+number2+"0";
    document.getElementById("bonsaij_name").innerText = j.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, j, "50", "50");
    document.getElementById("ButtonBonsaiJ").style.backgroundImage= fetchbonsairanktq(j);
    document.getElementById("bonsaij_level").innerText = j.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_cp").innerHTML = j.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
}

function fetchbonsaimenu_mobile(number1, number2, a, b, c, d, e, f, g, h, i, j) {
    document.getElementById("bonsaia_nr_mobile").innerText = "#"+number1+"1";
    document.getElementById("bonsaia_name_mobile").innerText = a.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, a, "30", "30");
    document.getElementById("ButtonBonsaiA_mobile").style.backgroundImage= fetchbonsaitreequality_small(a);
       
    document.getElementById("bonsaib_nr_mobile").innerText = "#"+number1+"2";
    document.getElementById("bonsaib_name_mobile").innerText = b.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, b, "30", "30");
    document.getElementById("ButtonBonsaiB_mobile").style.backgroundImage= fetchbonsaitreequality_small(b);
          
    document.getElementById("bonsaic_nr_mobile").innerText = "#"+number1+"3";
    document.getElementById("bonsaic_name_mobile").innerText = c.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c, "30", "30");
    document.getElementById("ButtonBonsaiC_mobile").style.backgroundImage= fetchbonsaitreequality_small(c);
        
    document.getElementById("bonsaid_nr_mobile").innerText = "#"+number1+"4";
    document.getElementById("bonsaid_name_mobile").innerText = d.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, d, "30", "30");
    document.getElementById("ButtonBonsaiD_mobile").style.backgroundImage= fetchbonsaitreequality_small(d);
         
    document.getElementById("bonsaie_nr_mobile").innerText = "#"+number1+"5";
    document.getElementById("bonsaie_name_mobile").innerText = e.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, e, "30", "30");
    document.getElementById("ButtonBonsaiE_mobile").style.backgroundImage= fetchbonsaitreequality_small(e);
         
    document.getElementById("bonsaif_nr_mobile").innerText = "#"+number1+"6";
    document.getElementById("bonsaif_name_mobile").innerText = f.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, f, "30", "30");
    document.getElementById("ButtonBonsaiF_mobile").style.backgroundImage= fetchbonsaitreequality_small(f);
    
    document.getElementById("bonsaig_nr_mobile").innerText = "#"+number1+"7";
    document.getElementById("bonsaig_name_mobile").innerText = g.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, g, "30", "30");
    document.getElementById("ButtonBonsaiG_mobile").style.backgroundImage= fetchbonsaitreequality_small(g);
    
    document.getElementById("bonsaih_nr_mobile").innerText = "#"+number1+"8";
    document.getElementById("bonsaih_name_mobile").innerText = h.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, h, "30", "30");
    document.getElementById("ButtonBonsaiH_mobile").style.backgroundImage= fetchbonsaitreequality_small(h);
     
    document.getElementById("bonsaii_nr_mobile").innerText = "#"+number1+"9";
    document.getElementById("bonsaii_name_mobile").innerText = i.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, i, "30", "30");
    document.getElementById("ButtonBonsaiI_mobile").style.backgroundImage= fetchbonsaitreequality_small(i);
     
    document.getElementById("bonsaij_nr_mobile").innerText = "#"+number2+"0";
    document.getElementById("bonsaij_name_mobile").innerText = j.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_types_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, j, "30", "30");
    document.getElementById("ButtonBonsaiJ_mobile").style.backgroundImage= fetchbonsaitreequality_small(j);
}

function fetchbonsaimenu_mobilexs(number1, number2, a, b, c, d, e, f, g, h, i, j) {
    document.getElementById("bonsaia_nr_mobilexs").innerText = "#"+number1+"1";
    document.getElementById("bonsaia_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, a, "25", "25");
    document.getElementById("ButtonBonsaiA_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(a);
         
    document.getElementById("bonsaib_nr_mobilexs").innerText = "#"+number1+"2";
    document.getElementById("bonsaib_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, b, "25", "25");
    document.getElementById("ButtonBonsaiB_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(b);
        
    document.getElementById("bonsaic_nr_mobilexs").innerText = "#"+number1+"3";
    document.getElementById("bonsaic_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c, "25", "25");
    document.getElementById("ButtonBonsaiC_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(c);
        
    document.getElementById("bonsaid_nr_mobilexs").innerText = "#"+number1+"4";
    document.getElementById("bonsaid_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, d, "25", "25");
    document.getElementById("ButtonBonsaiD_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(d);
         
    document.getElementById("bonsaie_nr_mobilexs").innerText = "#"+number1+"5";
    document.getElementById("bonsaie_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, e, "25", "25");
    document.getElementById("ButtonBonsaiE_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(e);
         
    document.getElementById("bonsaif_nr_mobilexs").innerText = "#"+number1+"6";
    document.getElementById("bonsaif_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, f, "25", "25");
    document.getElementById("ButtonBonsaiF_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(f);
    
    document.getElementById("bonsaig_nr_mobilexs").innerText = "#"+number1+"7";
    document.getElementById("bonsaig_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, g, "25", "25");
    document.getElementById("ButtonBonsaiG_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(g);
     
    document.getElementById("bonsaih_nr_mobilexs").innerText = "#"+number1+"8";
    document.getElementById("bonsaih_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, h, "25", "25");
    document.getElementById("ButtonBonsaiH_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(h);
    
    document.getElementById("bonsaii_nr_mobilexs").innerText = "#"+number1+"9";
    document.getElementById("bonsaii_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, i, "25", "25");
    document.getElementById("ButtonBonsaiI_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(i);
     
    document.getElementById("bonsaij_nr_mobilexs").innerText = "#"+number2+"0";
    document.getElementById("bonsaij_types_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, j, "25", "25");
    document.getElementById("ButtonBonsaiJ_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(j);
}

function fetchbonsaimenu_contests(number1, number2, a, b, c, d, e, f, g, h, i, j) {
    document.getElementById("bonsaia_name_contests").innerText = a.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, a, "43.75", "43.75");
    document.getElementById("ButtonBonsaiA_contests").style.backgroundImage= fetchbonsairanktq_small(a);
    document.getElementById("bonsaia_level_contests").innerText = a.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_cp_contests").innerHTML = a.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaia_ttg_contests").innerText = treetypegroupname[a.treetypegroup];
    document.getElementById("bonsaia_st_contests").innerText = styletypename[a.styletype];
    document.getElementById("bonsaia_nature_contests").innerText = natures[a.nature];
    document.getElementById("bonsaia_f_contests").innerHTML = a.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaia_b_contests").innerHTML = a.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaia_t_contests").innerHTML = a.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaia_r_contests").innerHTML = a.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaia_nr_contests").innerText = "#"+number1+"1";
    document.getElementById("bonsaia_idstring_contests").innerText = a.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_rank_lvl").innerHTML = rank_lvl(a, "bonsaia_rank_lvltext");
    document.getElementById("bonsaia_rank_tq").innerHTML = rank_tq(a, "bonsaia_rank_tqtext");
    document.getElementById("bonsaia_rank_cp").innerHTML = rank_cp(a, "bonsaia_rank_cptext");
    document.getElementById("bonsaia_rank_pot").innerHTML = rank_pot(a, "bonsaia_rank_pottext");
    document.getElementById("bonsaia_rank_pres").innerHTML = rank_pres(a, "bonsaia_rank_prestext");        
    document.getElementById("bonsaia_rank_look").innerHTML = rank_look(a, "bonsaia_rank_looktext");
    document.getElementById("bonsaia_f_pot").innerHTML = potentiallabel(a.newpotentialfoliage, a.inheritedpotentialfoliage, a.obtainedpotentialfoliage);
    document.getElementById("bonsaia_b_pot").innerHTML = potentiallabel(a.newpotentialbranches, a.inheritedpotentialbranches, a.obtainedpotentialbranches);
    document.getElementById("bonsaia_t_pot").innerHTML = potentiallabel(a.newpotentialtrunk, a.inheritedpotentialtrunk, a.obtainedpotentialtrunk);
    document.getElementById("bonsaia_r_pot").innerHTML = potentiallabel(a.newpotentialroots, a.inheritedpotentialroots, a.obtainedpotentialroots);
    
    document.getElementById("bonsaib_name_contests").innerText = b.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, b, "43.75", "43.75");
    document.getElementById("ButtonBonsaiB_contests").style.backgroundImage= fetchbonsairanktq_small(b);
    document.getElementById("bonsaib_level_contests").innerText = b.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_cp_contests").innerHTML = b.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaib_ttg_contests").innerText = treetypegroupname[b.treetypegroup];
    document.getElementById("bonsaib_st_contests").innerText = styletypename[b.styletype];
    document.getElementById("bonsaib_nature_contests").innerText = natures[b.nature];
    document.getElementById("bonsaib_f_contests").innerHTML = b.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaib_b_contests").innerHTML = b.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaib_t_contests").innerHTML = b.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaib_r_contests").innerHTML = b.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaib_nr_contests").innerText = "#"+number1+"2";
    document.getElementById("bonsaib_idstring_contests").innerText = b.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_rank_lvl").innerHTML = rank_lvl(b, "bonsaib_rank_lvltext");
    document.getElementById("bonsaib_rank_tq").innerHTML = rank_tq(b, "bonsaib_rank_tqtext");
    document.getElementById("bonsaib_rank_cp").innerHTML = rank_cp(b, "bonsaib_rank_cptext");
    document.getElementById("bonsaib_rank_pot").innerHTML = rank_pot(b, "bonsaib_rank_pottext");
    document.getElementById("bonsaib_rank_pres").innerHTML = rank_pres(b, "bonsaib_rank_prestext");        
    document.getElementById("bonsaib_rank_look").innerHTML = rank_look(b, "bonsaib_rank_looktext");
    document.getElementById("bonsaib_f_pot").innerHTML = potentiallabel(b.newpotentialfoliage, b.inheritedpotentialfoliage, b.obtainedpotentialfoliage);
    document.getElementById("bonsaib_b_pot").innerHTML = potentiallabel(b.newpotentialbranches, b.inheritedpotentialbranches, b.obtainedpotentialbranches);
    document.getElementById("bonsaib_t_pot").innerHTML = potentiallabel(b.newpotentialtrunk, b.inheritedpotentialtrunk, b.obtainedpotentialtrunk);
    document.getElementById("bonsaib_r_pot").innerHTML = potentiallabel(b.newpotentialroots, b.inheritedpotentialroots, b.obtainedpotentialroots);
    
    document.getElementById("bonsaic_name_contests").innerText = c.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c, "43.75", "43.75");
    document.getElementById("ButtonBonsaiC_contests").style.backgroundImage= fetchbonsairanktq_small(c);
    document.getElementById("bonsaic_level_contests").innerText = c.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_cp_contests").innerHTML = c.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic_ttg_contests").innerText = treetypegroupname[c.treetypegroup];
    document.getElementById("bonsaic_st_contests").innerText = styletypename[c.styletype];
    document.getElementById("bonsaic_nature_contests").innerText = natures[c.nature];
    document.getElementById("bonsaic_f_contests").innerHTML = c.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic_b_contests").innerHTML = c.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic_t_contests").innerHTML = c.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic_r_contests").innerHTML = c.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaic_nr_contests").innerText = "#"+number1+"3";
    document.getElementById("bonsaic_idstring_contests").innerText = c.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_rank_lvl").innerHTML = rank_lvl(c, "bonsaic_rank_lvltext");
    document.getElementById("bonsaic_rank_tq").innerHTML = rank_tq(c, "bonsaic_rank_tqtext");
    document.getElementById("bonsaic_rank_cp").innerHTML = rank_cp(c, "bonsaic_rank_cptext");
    document.getElementById("bonsaic_rank_pot").innerHTML = rank_pot(c, "bonsaic_rank_pottext");
    document.getElementById("bonsaic_rank_pres").innerHTML = rank_pres(c, "bonsaic_rank_prestext");        
    document.getElementById("bonsaic_rank_look").innerHTML = rank_look(c, "bonsaic_rank_looktext");
    document.getElementById("bonsaic_f_pot").innerHTML = potentiallabel(c.newpotentialfoliage, c.inheritedpotentialfoliage, c.obtainedpotentialfoliage);
    document.getElementById("bonsaic_b_pot").innerHTML = potentiallabel(c.newpotentialbranches, c.inheritedpotentialbranches, c.obtainedpotentialbranches);
    document.getElementById("bonsaic_t_pot").innerHTML = potentiallabel(c.newpotentialtrunk, c.inheritedpotentialtrunk, c.obtainedpotentialtrunk);
    document.getElementById("bonsaic_r_pot").innerHTML = potentiallabel(c.newpotentialroots, c.inheritedpotentialroots, c.obtainedpotentialroots);
    
    document.getElementById("bonsaid_name_contests").innerText = d.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, d, "43.75", "43.75");
    document.getElementById("ButtonBonsaiD_contests").style.backgroundImage= fetchbonsairanktq_small(d);
    document.getElementById("bonsaid_level_contests").innerText = d.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_cp_contests").innerHTML = d.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaid_ttg_contests").innerText = treetypegroupname[d.treetypegroup];
    document.getElementById("bonsaid_st_contests").innerText = styletypename[d.styletype];
    document.getElementById("bonsaid_nature_contests").innerText = natures[d.nature];
    document.getElementById("bonsaid_f_contests").innerHTML = d.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaid_b_contests").innerHTML = d.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaid_t_contests").innerHTML = d.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaid_r_contests").innerHTML = d.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaid_nr_contests").innerText = "#"+number1+"4";
    document.getElementById("bonsaid_idstring_contests").innerText = d.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_rank_lvl").innerHTML = rank_lvl(d, "bonsaid_rank_lvltext");
    document.getElementById("bonsaid_rank_tq").innerHTML = rank_tq(d, "bonsaid_rank_tqtext");
    document.getElementById("bonsaid_rank_cp").innerHTML = rank_cp(d, "bonsaid_rank_cptext");
    document.getElementById("bonsaid_rank_pot").innerHTML = rank_pot(d, "bonsaid_rank_pottext");
    document.getElementById("bonsaid_rank_pres").innerHTML = rank_pres(d, "bonsaid_rank_prestext");        
    document.getElementById("bonsaid_rank_look").innerHTML = rank_look(d, "bonsaid_rank_looktext");
    document.getElementById("bonsaid_f_pot").innerHTML = potentiallabel(d.newpotentialfoliage, d.inheritedpotentialfoliage, d.obtainedpotentialfoliage);
    document.getElementById("bonsaid_b_pot").innerHTML = potentiallabel(d.newpotentialbranches, d.inheritedpotentialbranches, d.obtainedpotentialbranches);
    document.getElementById("bonsaid_t_pot").innerHTML = potentiallabel(d.newpotentialtrunk, d.inheritedpotentialtrunk, d.obtainedpotentialtrunk);
    document.getElementById("bonsaid_r_pot").innerHTML = potentiallabel(d.newpotentialroots, d.inheritedpotentialroots, d.obtainedpotentialroots);
    
    document.getElementById("bonsaie_name_contests").innerText = e.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, e, "43.75", "43.75");
    document.getElementById("ButtonBonsaiE_contests").style.backgroundImage= fetchbonsairanktq_small(e);
    document.getElementById("bonsaie_level_contests").innerText = e.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_cp_contests").innerHTML = e.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaie_ttg_contests").innerText = treetypegroupname[e.treetypegroup];
    document.getElementById("bonsaie_st_contests").innerText = styletypename[e.styletype];
    document.getElementById("bonsaie_nature_contests").innerText = natures[e.nature];
    document.getElementById("bonsaie_f_contests").innerHTML = e.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaie_b_contests").innerHTML = e.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaie_t_contests").innerHTML = e.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaie_r_contests").innerHTML = e.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaie_nr_contests").innerText = "#"+number1+"5";
    document.getElementById("bonsaie_idstring_contests").innerText = e.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_rank_lvl").innerHTML = rank_lvl(e, "bonsaie_rank_lvltext");
    document.getElementById("bonsaie_rank_tq").innerHTML = rank_tq(e, "bonsaie_rank_tqtext");
    document.getElementById("bonsaie_rank_cp").innerHTML = rank_cp(e, "bonsaie_rank_cptext");
    document.getElementById("bonsaie_rank_pot").innerHTML = rank_pot(e, "bonsaie_rank_pottext");
    document.getElementById("bonsaie_rank_pres").innerHTML = rank_pres(e, "bonsaie_rank_prestext");        
    document.getElementById("bonsaie_rank_look").innerHTML = rank_look(e, "bonsaie_rank_looktext");
    document.getElementById("bonsaie_f_pot").innerHTML = potentiallabel(e.newpotentialfoliage, e.inheritedpotentialfoliage, e.obtainedpotentialfoliage);
    document.getElementById("bonsaie_b_pot").innerHTML = potentiallabel(e.newpotentialbranches, e.inheritedpotentialbranches, e.obtainedpotentialbranches);
    document.getElementById("bonsaie_t_pot").innerHTML = potentiallabel(e.newpotentialtrunk, e.inheritedpotentialtrunk, e.obtainedpotentialtrunk);
    document.getElementById("bonsaie_r_pot").innerHTML = potentiallabel(e.newpotentialroots, e.inheritedpotentialroots, e.obtainedpotentialroots);
    
    document.getElementById("bonsaif_name_contests").innerText = f.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, f, "43.75", "43.75");
    document.getElementById("ButtonBonsaiF_contests").style.backgroundImage= fetchbonsairanktq_small(f);
    document.getElementById("bonsaif_level_contests").innerText = f.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_cp_contests").innerHTML = f.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaif_ttg_contests").innerText = treetypegroupname[f.treetypegroup];
    document.getElementById("bonsaif_st_contests").innerText = styletypename[f.styletype];
    document.getElementById("bonsaif_nature_contests").innerText = natures[f.nature];
    document.getElementById("bonsaif_f_contests").innerHTML = f.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaif_b_contests").innerHTML = f.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaif_t_contests").innerHTML = f.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaif_r_contests").innerHTML = f.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaif_nr_contests").innerText = "#"+number1+"6";
    document.getElementById("bonsaif_idstring_contests").innerText = f.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_rank_lvl").innerHTML = rank_lvl(f, "bonsaif_rank_lvltext");
    document.getElementById("bonsaif_rank_tq").innerHTML = rank_tq(f, "bonsaif_rank_tqtext");
    document.getElementById("bonsaif_rank_cp").innerHTML = rank_cp(f, "bonsaif_rank_cptext");
    document.getElementById("bonsaif_rank_pot").innerHTML = rank_pot(f, "bonsaif_rank_pottext");
    document.getElementById("bonsaif_rank_pres").innerHTML = rank_pres(f, "bonsaif_rank_prestext");        
    document.getElementById("bonsaif_rank_look").innerHTML = rank_look(f, "bonsaif_rank_looktext");
    document.getElementById("bonsaif_f_pot").innerHTML = potentiallabel(f.newpotentialfoliage, f.inheritedpotentialfoliage, f.obtainedpotentialfoliage);
    document.getElementById("bonsaif_b_pot").innerHTML = potentiallabel(f.newpotentialbranches, f.inheritedpotentialbranches, f.obtainedpotentialbranches);
    document.getElementById("bonsaif_t_pot").innerHTML = potentiallabel(f.newpotentialtrunk, f.inheritedpotentialtrunk, f.obtainedpotentialtrunk);
    document.getElementById("bonsaif_r_pot").innerHTML = potentiallabel(f.newpotentialroots, f.inheritedpotentialroots, f.obtainedpotentialroots);
    
    document.getElementById("bonsaig_name_contests").innerText = g.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, g, "43.75", "43.75");
    document.getElementById("ButtonBonsaiG_contests").style.backgroundImage= fetchbonsairanktq_small(g);
    document.getElementById("bonsaig_level_contests").innerText = g.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_cp_contests").innerHTML = g.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaig_ttg_contests").innerText = treetypegroupname[g.treetypegroup];
    document.getElementById("bonsaig_st_contests").innerText = styletypename[g.styletype];
    document.getElementById("bonsaig_nature_contests").innerText = natures[g.nature];
    document.getElementById("bonsaig_f_contests").innerHTML = g.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaig_b_contests").innerHTML = g.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaig_t_contests").innerHTML = g.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaig_r_contests").innerHTML = g.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaig_nr_contests").innerText = "#"+number1+"7";
    document.getElementById("bonsaig_idstring_contests").innerText = g.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_rank_lvl").innerHTML = rank_lvl(g, "bonsaig_rank_lvltext");
    document.getElementById("bonsaig_rank_tq").innerHTML = rank_tq(g, "bonsaig_rank_tqtext");
    document.getElementById("bonsaig_rank_cp").innerHTML = rank_cp(g, "bonsaig_rank_cptext");
    document.getElementById("bonsaig_rank_pot").innerHTML = rank_pot(g, "bonsaig_rank_pottext");
    document.getElementById("bonsaig_rank_pres").innerHTML = rank_pres(g, "bonsaig_rank_prestext");        
    document.getElementById("bonsaig_rank_look").innerHTML = rank_look(g, "bonsaig_rank_looktext");
    document.getElementById("bonsaig_f_pot").innerHTML = potentiallabel(g.newpotentialfoliage, g.inheritedpotentialfoliage, g.obtainedpotentialfoliage);
    document.getElementById("bonsaig_b_pot").innerHTML = potentiallabel(g.newpotentialbranches, g.inheritedpotentialbranches, g.obtainedpotentialbranches);
    document.getElementById("bonsaig_t_pot").innerHTML = potentiallabel(g.newpotentialtrunk, g.inheritedpotentialtrunk, g.obtainedpotentialtrunk);
    document.getElementById("bonsaig_r_pot").innerHTML = potentiallabel(g.newpotentialroots, g.inheritedpotentialroots, g.obtainedpotentialroots);
    
    document.getElementById("bonsaih_name_contests").innerText = h.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, h, "43.75", "43.75");
    document.getElementById("ButtonBonsaiH_contests").style.backgroundImage= fetchbonsairanktq_small(h);
    document.getElementById("bonsaih_level_contests").innerText = h.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_cp_contests").innerHTML = h.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaih_ttg_contests").innerText = treetypegroupname[h.treetypegroup];
    document.getElementById("bonsaih_st_contests").innerText = styletypename[h.styletype];
    document.getElementById("bonsaih_nature_contests").innerText = natures[h.nature];
    document.getElementById("bonsaih_f_contests").innerHTML = h.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaih_b_contests").innerHTML = h.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaih_t_contests").innerHTML = h.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaih_r_contests").innerHTML = h.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaih_nr_contests").innerText = "#"+number1+"8";
    document.getElementById("bonsaih_idstring_contests").innerText = h.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_rank_lvl").innerHTML = rank_lvl(h, "bonsaih_rank_lvltext");
    document.getElementById("bonsaih_rank_tq").innerHTML = rank_tq(h, "bonsaih_rank_tqtext");
    document.getElementById("bonsaih_rank_cp").innerHTML = rank_cp(h, "bonsaih_rank_cptext");
    document.getElementById("bonsaih_rank_pot").innerHTML = rank_pot(h, "bonsaih_rank_pottext");
    document.getElementById("bonsaih_rank_pres").innerHTML = rank_pres(h, "bonsaih_rank_prestext");        
    document.getElementById("bonsaih_rank_look").innerHTML = rank_look(h, "bonsaih_rank_looktext");
    document.getElementById("bonsaih_f_pot").innerHTML = potentiallabel(h.newpotentialfoliage, h.inheritedpotentialfoliage, h.obtainedpotentialfoliage);
    document.getElementById("bonsaih_b_pot").innerHTML = potentiallabel(h.newpotentialbranches, h.inheritedpotentialbranches, h.obtainedpotentialbranches);
    document.getElementById("bonsaih_t_pot").innerHTML = potentiallabel(h.newpotentialtrunk, h.inheritedpotentialtrunk, h.obtainedpotentialtrunk);
    document.getElementById("bonsaih_r_pot").innerHTML = potentiallabel(h.newpotentialroots, h.inheritedpotentialroots, h.obtainedpotentialroots);
    
    document.getElementById("bonsaii_name_contests").innerText = i.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, i, "43.75", "43.75");
    document.getElementById("ButtonBonsaiI_contests").style.backgroundImage= fetchbonsairanktq_small(i);
    document.getElementById("bonsaii_level_contests").innerText = i.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_cp_contests").innerHTML = i.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaii_ttg_contests").innerText = treetypegroupname[i.treetypegroup];
    document.getElementById("bonsaii_st_contests").innerText = styletypename[i.styletype];
    document.getElementById("bonsaii_nature_contests").innerText = natures[i.nature];
    document.getElementById("bonsaii_f_contests").innerHTML = i.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaii_b_contests").innerHTML = i.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaii_t_contests").innerHTML = i.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaii_r_contests").innerHTML = i.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaii_nr_contests").innerText = "#"+number1+"9";
    document.getElementById("bonsaii_idstring_contests").innerText = i.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_rank_lvl").innerHTML = rank_lvl(i, "bonsaii_rank_lvltext");
    document.getElementById("bonsaii_rank_tq").innerHTML = rank_tq(i, "bonsaii_rank_tqtext");
    document.getElementById("bonsaii_rank_cp").innerHTML = rank_cp(i, "bonsaii_rank_cptext");
    document.getElementById("bonsaii_rank_pot").innerHTML = rank_pot(i, "bonsaii_rank_pottext");
    document.getElementById("bonsaii_rank_pres").innerHTML = rank_pres(i, "bonsaii_rank_prestext");        
    document.getElementById("bonsaii_rank_look").innerHTML = rank_look(i, "bonsaii_rank_looktext");
    document.getElementById("bonsaii_f_pot").innerHTML = potentiallabel(i.newpotentialfoliage, i.inheritedpotentialfoliage, i.obtainedpotentialfoliage);
    document.getElementById("bonsaii_b_pot").innerHTML = potentiallabel(i.newpotentialbranches, i.inheritedpotentialbranches, i.obtainedpotentialbranches);
    document.getElementById("bonsaii_t_pot").innerHTML = potentiallabel(i.newpotentialtrunk, i.inheritedpotentialtrunk, i.obtainedpotentialtrunk);
    document.getElementById("bonsaii_r_pot").innerHTML = potentiallabel(i.newpotentialroots, i.inheritedpotentialroots, i.obtainedpotentialroots);
    
    document.getElementById("bonsaij_name_contests").innerText = j.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_types_contests").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, j, "43.75", "43.75");
    document.getElementById("ButtonBonsaiJ_contests").style.backgroundImage= fetchbonsairanktq_small(j);
    document.getElementById("bonsaij_level_contests").innerText = j.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_cp_contests").innerHTML = j.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaij_ttg_contests").innerText = treetypegroupname[j.treetypegroup];
    document.getElementById("bonsaij_st_contests").innerText = styletypename[j.styletype];
    document.getElementById("bonsaij_nature_contests").innerText = natures[j.nature];
    document.getElementById("bonsaij_f_contests").innerHTML = j.foliage.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaij_b_contests").innerHTML = j.branches.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaij_t_contests").innerHTML = j.trunk.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaij_r_contests").innerHTML = j.roots.toLocaleString('en', {minimumFractionDigits: 1});
    document.getElementById("bonsaij_nr_contests").innerText = "#"+number2+"0";
    document.getElementById("bonsaij_idstring_contests").innerText = j.id_string.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_rank_lvl").innerHTML = rank_lvl(j, "bonsaij_rank_lvltext");
    document.getElementById("bonsaij_rank_tq").innerHTML = rank_tq(j, "bonsaij_rank_tqtext");
    document.getElementById("bonsaij_rank_cp").innerHTML = rank_cp(j, "bonsaij_rank_cptext");
    document.getElementById("bonsaij_rank_pot").innerHTML = rank_pot(j, "bonsaij_rank_pottext");
    document.getElementById("bonsaij_rank_pres").innerHTML = rank_pres(j, "bonsaij_rank_prestext");        
    document.getElementById("bonsaij_rank_look").innerHTML = rank_look(j, "bonsaij_rank_looktext");
    document.getElementById("bonsaij_f_pot").innerHTML = potentiallabel(j.newpotentialfoliage, j.inheritedpotentialfoliage, j.obtainedpotentialfoliage);
    document.getElementById("bonsaij_b_pot").innerHTML = potentiallabel(j.newpotentialbranches, j.inheritedpotentialbranches, j.obtainedpotentialbranches);
    document.getElementById("bonsaij_t_pot").innerHTML = potentiallabel(j.newpotentialtrunk, j.inheritedpotentialtrunk, j.obtainedpotentialtrunk);
    document.getElementById("bonsaij_r_pot").innerHTML = potentiallabel(j.newpotentialroots, j.inheritedpotentialroots, j.obtainedpotentialroots);
}

function fetchbonsaimenu_shop(number1, number2, a, b, c, d, e, f, g, h, i, j) {
    document.getElementById("bonsaia_price_sell").innerText = a.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_name_sell").innerText = a.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, a, "43.75", "43.75");
    document.getElementById("ButtonBonsaiA_sell").style.backgroundImage= fetchbonsairanktq_small(a);
    document.getElementById("bonsaia_level_sell").innerText = a.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaia_cp_sell").innerHTML = (Math.round((a.foliage+a.branches+a.trunk+a.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaib_price_sell").innerText = b.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_name_sell").innerText = b.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, b, "43.75", "43.75");
    document.getElementById("ButtonBonsaiB_sell").style.backgroundImage= fetchbonsairanktq_small(b);
    document.getElementById("bonsaib_level_sell").innerText = b.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaib_cp_sell").innerHTML = (Math.round((b.foliage+b.branches+b.trunk+b.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaic_price_sell").innerText = c.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_name_sell").innerText = c.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c, "43.75", "43.75");
    document.getElementById("ButtonBonsaiC_sell").style.backgroundImage= fetchbonsairanktq_small(c);
    document.getElementById("bonsaic_level_sell").innerText = c.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaic_cp_sell").innerHTML = (Math.round((c.foliage+c.branches+c.trunk+c.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaid_price_sell").innerText = d.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_name_sell").innerText = d.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, d, "43.75", "43.75");
    document.getElementById("ButtonBonsaiD_sell").style.backgroundImage= fetchbonsairanktq_small(d);
    document.getElementById("bonsaid_level_sell").innerText = d.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaid_cp_sell").innerHTML = (Math.round((d.foliage+d.branches+d.trunk+d.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaie_price_sell").innerText = e.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_name_sell").innerText = e.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, e, "43.75", "43.75");
    document.getElementById("ButtonBonsaiE_sell").style.backgroundImage= fetchbonsairanktq_small(e);
    document.getElementById("bonsaie_level_sell").innerText = e.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaie_cp_sell").innerHTML = (Math.round((e.foliage+e.branches+e.trunk+e.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
        
    document.getElementById("bonsaif_price_sell").innerText = f.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_name_sell").innerText = f.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, f, "43.75", "43.75");
    document.getElementById("ButtonBonsaiF_sell").style.backgroundImage= fetchbonsairanktq_small(f);
    document.getElementById("bonsaif_level_sell").innerText = f.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaif_cp_sell").innerHTML = (Math.round((f.foliage+f.branches+f.trunk+f.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    
    document.getElementById("bonsaig_price_sell").innerText = g.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_name_sell").innerText = g.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, g, "43.75", "43.75");
    document.getElementById("ButtonBonsaiG_sell").style.backgroundImage= fetchbonsairanktq_small(g);
    document.getElementById("bonsaig_level_sell").innerText = g.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaig_cp_sell").innerHTML = (Math.round((g.foliage+g.branches+g.trunk+g.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    
    document.getElementById("bonsaih_price_sell").innerText = h.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_name_sell").innerText = h.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, h, "43.75", "43.75");
    document.getElementById("ButtonBonsaiH_sell").style.backgroundImage= fetchbonsairanktq_small(h);
    document.getElementById("bonsaih_level_sell").innerText = h.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaih_cp_sell").innerHTML = (Math.round((h.foliage+h.branches+h.trunk+h.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    
    document.getElementById("bonsaii_price_sell").innerText = i.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_name_sell").innerText = i.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, i, "43.75", "43.75");
    document.getElementById("ButtonBonsaiI_sell").style.backgroundImage= fetchbonsairanktq_small(i);
    document.getElementById("bonsaii_level_sell").innerText = i.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaii_cp_sell").innerHTML = (Math.round((i.foliage+i.branches+i.trunk+i.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
    
    document.getElementById("bonsaij_price_sell").innerText = j.price.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_name_sell").innerText = j.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_types_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, j, "43.75", "43.75");
    document.getElementById("ButtonBonsaiJ_sell").style.backgroundImage= fetchbonsairanktq_small(j);
    document.getElementById("bonsaij_level_sell").innerText = j.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("bonsaij_cp_sell").innerHTML = (Math.round((j.foliage+j.branches+j.trunk+j.roots)* 10) / 10).toLocaleString('en', {minimumFractionDigits: 1});;
}

function fetchbonsaimenu_changeA(number1, number2, a, b, c, d, e, f, g, h, i, j) {
    document.getElementById("changeA_bonsaia_nr").innerText = "#"+number1+"1";
    document.getElementById("changeA_bonsaia_name").innerText = a.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaia_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, a, "50", "50");
    document.getElementById("ChangeABonsaiA").style.backgroundImage= fetchbonsairanktq(a);
    document.getElementById("changeA_bonsaia_level").innerText = a.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaia_cp").innerHTML = a.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        
    document.getElementById("changeA_bonsaib_nr").innerText = "#"+number1+"2";
    document.getElementById("changeA_bonsaib_name").innerText = b.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaib_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, b, "50", "50");
    document.getElementById("ChangeABonsaiB").style.backgroundImage= fetchbonsairanktq(b);
    document.getElementById("changeA_bonsaib_level").innerText = b.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaib_cp").innerHTML = b.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        
    document.getElementById("changeA_bonsaic_nr").innerText = "#"+number1+"3";
    document.getElementById("changeA_bonsaic_name").innerText = c.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaic_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c, "50", "50");
    document.getElementById("ChangeABonsaiC").style.backgroundImage= fetchbonsairanktq(c);
    document.getElementById("changeA_bonsaic_level").innerText = c.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaic_cp").innerHTML = c.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        
    document.getElementById("changeA_bonsaid_nr").innerText = "#"+number1+"4";
    document.getElementById("changeA_bonsaid_name").innerText = d.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaid_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, d, "50", "50");
    document.getElementById("ChangeABonsaiD").style.backgroundImage= fetchbonsairanktq(d);
    document.getElementById("changeA_bonsaid_level").innerText = d.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaid_cp").innerHTML = d.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        
    document.getElementById("changeA_bonsaie_nr").innerText = "#"+number1+"5";
    document.getElementById("changeA_bonsaie_name").innerText = e.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaie_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, e, "50", "50");
    document.getElementById("ChangeABonsaiE").style.backgroundImage= fetchbonsairanktq(e);
    document.getElementById("changeA_bonsaie_level").innerText = e.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaie_cp").innerHTML = e.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        
    document.getElementById("changeA_bonsaif_nr").innerText = "#"+number1+"6";
    document.getElementById("changeA_bonsaif_name").innerText = f.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaif_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, f, "50", "50");
    document.getElementById("ChangeABonsaiF").style.backgroundImage= fetchbonsairanktq(f);
    document.getElementById("changeA_bonsaif_level").innerText = f.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaif_cp").innerHTML = f.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("changeA_bonsaig_nr").innerText = "#"+number1+"7";
    document.getElementById("changeA_bonsaig_name").innerText = g.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaig_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, g, "50", "50");
    document.getElementById("ChangeABonsaiG").style.backgroundImage= fetchbonsairanktq(g);
    document.getElementById("changeA_bonsaig_level").innerText = g.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaig_cp").innerHTML = g.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("changeA_bonsaih_nr").innerText = "#"+number1+"8";
    document.getElementById("changeA_bonsaih_name").innerText = h.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaih_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, h, "50", "50");
    document.getElementById("ChangeABonsaiH").style.backgroundImage= fetchbonsairanktq(h);
    document.getElementById("changeA_bonsaih_level").innerText = h.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaih_cp").innerHTML = h.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("changeA_bonsaii_nr").innerText = "#"+number1+"9";
    document.getElementById("changeA_bonsaii_name").innerText = i.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaii_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, i, "50", "50");
    document.getElementById("ChangeABonsaiI").style.backgroundImage= fetchbonsairanktq(i);
    document.getElementById("changeA_bonsaii_level").innerText = i.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaii_cp").innerHTML = i.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("changeA_bonsaij_nr").innerText = "#"+number2+"0";
    document.getElementById("changeA_bonsaij_name").innerText = j.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaij_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, j, "50", "50");
    document.getElementById("ChangeABonsaiJ").style.backgroundImage= fetchbonsairanktq(j);
    document.getElementById("changeA_bonsaij_level").innerText = j.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeA_bonsaij_cp").innerHTML = j.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
}

function fetchbonsaimenu_changeB(number1, number2, a, b, c, d, e, f, g, h, i, j) {
    document.getElementById("changeB_bonsaia_nr").innerText = "#"+number1+"1";
    document.getElementById("changeB_bonsaia_name").innerText = a.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaia_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, a, "50", "50");
    document.getElementById("ChangeBBonsaiA").style.backgroundImage= fetchbonsairanktq(a);
    document.getElementById("changeB_bonsaia_level").innerText = a.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaia_cp").innerHTML = a.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        
    document.getElementById("changeB_bonsaib_nr").innerText = "#"+number1+"2";
    document.getElementById("changeB_bonsaib_name").innerText = b.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaib_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, b, "50", "50");
    document.getElementById("ChangeBBonsaiB").style.backgroundImage= fetchbonsairanktq(b);
    document.getElementById("changeB_bonsaib_level").innerText = b.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaib_cp").innerHTML = b.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        
    document.getElementById("changeB_bonsaic_nr").innerText = "#"+number1+"3";
    document.getElementById("changeB_bonsaic_name").innerText = c.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaic_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, c, "50", "50");
    document.getElementById("ChangeBBonsaiC").style.backgroundImage= fetchbonsairanktq(c);
    document.getElementById("changeB_bonsaic_level").innerText = c.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaic_cp").innerHTML = c.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        
    document.getElementById("changeB_bonsaid_nr").innerText = "#"+number1+"4";
    document.getElementById("changeB_bonsaid_name").innerText = d.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaid_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, d, "50", "50");
    document.getElementById("ChangeBBonsaiD").style.backgroundImage= fetchbonsairanktq(d);
    document.getElementById("changeB_bonsaid_level").innerText = d.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaid_cp").innerHTML = d.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        
    document.getElementById("changeB_bonsaie_nr").innerText = "#"+number1+"5";
    document.getElementById("changeB_bonsaie_name").innerText = e.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaie_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, e, "50", "50");
    document.getElementById("ChangeBBonsaiE").style.backgroundImage= fetchbonsairanktq(e);
    document.getElementById("changeB_bonsaie_level").innerText = e.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaie_cp").innerHTML = e.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
        
    document.getElementById("changeB_bonsaif_nr").innerText = "#"+number1+"6";
    document.getElementById("changeB_bonsaif_name").innerText = f.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaif_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, f, "50", "50");
    document.getElementById("ChangeBBonsaiF").style.backgroundImage= fetchbonsairanktq(f);
    document.getElementById("changeB_bonsaif_level").innerText = f.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaif_cp").innerHTML = f.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("changeB_bonsaig_nr").innerText = "#"+number1+"7";
    document.getElementById("changeB_bonsaig_name").innerText = g.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaig_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, g, "50", "50");
    document.getElementById("ChangeBBonsaiG").style.backgroundImage= fetchbonsairanktq(g);
    document.getElementById("changeB_bonsaig_level").innerText = g.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaig_cp").innerHTML = g.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("changeB_bonsaih_nr").innerText = "#"+number1+"8";
    document.getElementById("changeB_bonsaih_name").innerText = h.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaih_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, h, "50", "50");
    document.getElementById("ChangeBBonsaiH").style.backgroundImage= fetchbonsairanktq(h);
    document.getElementById("changeB_bonsaih_level").innerText = h.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaih_cp").innerHTML = h.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("changeB_bonsaii_nr").innerText = "#"+number1+"9";
    document.getElementById("changeB_bonsaii_name").innerText = i.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaii_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, i, "50", "50");
    document.getElementById("ChangeBBonsaiI").style.backgroundImage= fetchbonsairanktq(i);
    document.getElementById("changeB_bonsaii_level").innerText = i.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaii_cp").innerHTML = i.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
    
    document.getElementById("changeB_bonsaij_nr").innerText = "#"+number2+"0";
    document.getElementById("changeB_bonsaij_name").innerText = j.name.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaij_types").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, j, "50", "50");
    document.getElementById("ChangeBBonsaiJ").style.backgroundImage= fetchbonsairanktq(j);
    document.getElementById("changeB_bonsaij_level").innerText = j.level.toLocaleString('en', {minimumFractionDigits: 0});
    document.getElementById("changeB_bonsaij_cp").innerHTML = j.basebeauty.toLocaleString('en', {minimumFractionDigits: 1});
}

function fetchimage_seedling (x, y) {
    document.getElementById("seedling"+x+"_type").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, y, "43.75", "43.75");
    document.getElementById("seedling"+x+"_type_c").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, y, "43.75", "43.75");
    document.getElementById("seedling"+x+"_type_c_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, y, "43.75", "43.75");
    document.getElementById("seedling"+x+"_type_mobile").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, y, "21.875", "21.875");
    document.getElementById("seedling"+x+"_type_mobilexs").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, y, "21.875", "21.875");
    
    document.getElementById("seedling"+x+"_sell").style.backgroundImage = fetchbonsaitreequality_small(y);
    document.getElementById("seedling"+x+"_type_sell").innerHTML = fetchbonsaiimage(fetchbonsaiimage2, y, "43.75", "43.75");
    
    document.getElementById("seedling"+x+"_right").style.backgroundImage= fetchbonsaitreequality_small(y);
    document.getElementById("seedling"+x+"_center").style.backgroundImage= fetchbonsaitreequality(y);
    document.getElementById("seedling"+x+"_center_mobile").style.backgroundImage= fetchbonsaitreequality_small(y);
    document.getElementById("seedling"+x+"_right_mobile").style.backgroundImage= fetchbonsaitreequality_small(y);
    document.getElementById("seedling"+x+"_right_mobilexs").style.backgroundImage= fetchbonsaitreequality_small(y);
}

function fetchbonsaiimage(myCallback, x, size1, size2) {
    if (x.treetype==0) {
        return '<img src="Images/pot.svg" width="'+size1+'" height="'+size2+'">';
    }
    else if (x.treetype==1) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "01")

    }
    else if (x.treetype==2) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "02")

    }
    else if (x.treetype==3) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "03")

    }
    else if (x.treetype==4) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "04")

    }
    else if (x.treetype==5) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "05")

    }
    else if (x.treetype==6) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "06")

    }
    else if (x.treetype==7) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "07")

    }
    else if (x.treetype==8) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "08")

    }
    else if (x.treetype==9) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "09")

    }
    else if (x.treetype==10) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "10")

    }
    else if (x.treetype==11) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "11")

    }
    else if (x.treetype==12) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "12")

    }
    else if (x.treetype==13) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "13")

    }
    else if (x.treetype==14) {
        return myCallback(fetchbonsaiimage3, x, size1, size2, "14")

    }
}

function fetchbonsaiimage2(myCallback, x, size1, size2, a) {
    if (x.styletype==0) {
        return myCallback(x, size1, size2, a, "00")
    }
    else if (x.styletype==1) {
        return myCallback(x, size1, size2, a, "01")
    }
    else if (x.styletype==2) {
        return myCallback(x, size1, size2, a, "02")
    }
    else if (x.styletype==3) {
        return myCallback(x, size1, size2, a, "03")
    }
    else if (x.styletype==4) {
        return myCallback(x, size1, size2, a, "04")
    }
    else if (x.styletype==5) {
        return myCallback(x, size1, size2, a, "05")
    }
    else if (x.styletype==6) {
        return myCallback(x, size1, size2, a, "06")
    }
    else if (x.styletype==7) {
        return myCallback(x, size1, size2, a, "07")
    }
}

function fetchbonsaiimage3(x, size1, size2, a, b) {
    if (x.shiny==1) {
        return '<img src="Images/bonsaitypes/bonsai'+a+'s'+b+'normal.svg" width="'+size1+'" height="'+size2+'">';
    }
    else if (x.shiny==2) {
        return '<img src="Images/bonsaitypes/bonsai'+a+'s'+b+'blooming.svg" width="'+size1+'" height="'+size2+'">';
    }
    else if (x.shiny==3) {
        return '<img src="Images/bonsaitypes/bonsai'+a+'s'+b+'shiny.svg" width="'+size1+'" height="'+size2+'">';
    }
    else if (x.shiny==4) {
        return '<img src="Images/bonsaitypes/bonsai'+a+'s'+b+'b+s.svg" width="'+size1+'" height="'+size2+'">';
    }
}

function fetchbonsaitreequality(x) {
    if (x.treequality==0) {
        return "url('Images/treequality/TQ0.svg')";
    }
    else if (x.treequality==1) {
        return "url('Images/treequality/TQ1.svg')";
    }
    else if (x.treequality==2) {
        return "url('Images/treequality/TQ2.svg')";
    }
    else if (x.treequality==3) {
        return "url('Images/treequality/TQ3.svg')";
    }
    else if (x.treequality==4) {
        return "url('Images/treequality/TQ4.svg')";
    }
    else if (x.treequality==5) {
        return "url('Images/treequality/TQ5.svg')";
    }
    else if (x.treequality==6) {
        return "url('Images/treequality/TQ6.svg')";
    }
    else if (x.treequality==7) {
        return "url('Images/treequality/TQ7.svg')";
    }
    else if (x.treequality==8) {
        return "url('Images/treequality/TQ8.svg')";
    }
    else if (x.treequality==9) {
        return "url('Images/treequality/TQ9.svg')";
    }
    else {
        return "url('Images/treequality/TQ10.svg')";
    }
}

function fetchbonsaitreequality_small(x) {
    if (x.treequality==0) {
        return "url('Images/treequality/TQ0_small.svg')";
    }
    else if (x.treequality==1) {
        return "url('Images/treequality/TQ1_small.svg')";
    }
    else if (x.treequality==2) {
        return "url('Images/treequality/TQ2_small.svg')";
    }
    else if (x.treequality==3) {
        return "url('Images/treequality/TQ3_small.svg')";
    }
    else if (x.treequality==4) {
        return "url('Images/treequality/TQ4_small.svg')";
    }
    else if (x.treequality==5) {
        return "url('Images/treequality/TQ5_small.svg')";
    }
    else if (x.treequality==6) {
        return "url('Images/treequality/TQ6_small.svg')";
    }
    else if (x.treequality==7) {
        return "url('Images/treequality/TQ7_small.svg')";
    }
    else if (x.treequality==8) {
        return "url('Images/treequality/TQ8_small.svg')";
    }
    else if (x.treequality==9) {
        return "url('Images/treequality/TQ9_small.svg')";
    }
    else {
        return "url('Images/treequality/TQ10_small.svg')";
    }
}

function fetchbonsairanktq_small(x) {
    if (x.rank==1 & x.treequality==0) {
        return "url('Images/treequality/TQ0_small.svg')";
    }
    else if (x.rank==1) {
        if (x.treequality==1) {
            return "url('Images/treequality/R1_TQ1_small.svg')";
        }
        else if (x.treequality==2) {
            return "url('Images/treequality/R1_TQ2_small.svg')";
        }
        else if (x.treequality==3) {
            return "url('Images/treequality/R1_TQ3_small.svg')";
        }
        else if (x.treequality==4) {
            return "url('Images/treequality/R1_TQ4_small.svg')";
        }
        else if (x.treequality==5) {
            return "url('Images/treequality/R1_TQ5_small.svg')";
        }
        else if (x.treequality==6) {
            return "url('Images/treequality/R1_TQ6_small.svg')";
        }
        else if (x.treequality==7) {
            return "url('Images/treequality/R1_TQ7_small.svg')";
        }
        else if (x.treequality==8) {
            return "url('Images/treequality/R1_TQ8_small.svg')";
        }
        else if (x.treequality==9) {
            return "url('Images/treequality/R1_TQ9_small.svg')";
        }
        else if (x.treequality==10) {
            return "url('Images/treequality/R1_TQ10_small.svg')";
        }
    }
    else if (x.rank==2) {
        if (x.treequality==1) {
            return "url('Images/treequality/R2_TQ1_small.svg')";
        }
        else if (x.treequality==2) {
            return "url('Images/treequality/R2_TQ2_small.svg')";
        }
        else if (x.treequality==3) {
            return "url('Images/treequality/R2_TQ3_small.svg')";
        }
        else if (x.treequality==4) {
            return "url('Images/treequality/R2_TQ4_small.svg')";
        }
        else if (x.treequality==5) {
            return "url('Images/treequality/R2_TQ5_small.svg')";
        }
        else if (x.treequality==6) {
            return "url('Images/treequality/R2_TQ6_small.svg')";
        }
        else if (x.treequality==7) {
            return "url('Images/treequality/R2_TQ7_small.svg')";
        }
        else if (x.treequality==8) {
            return "url('Images/treequality/R2_TQ8_small.svg')";
        }
        else if (x.treequality==9) {
            return "url('Images/treequality/R2_TQ9_small.svg')";
        }
        else if (x.treequality==10) {
            return "url('Images/treequality/R2_TQ10_small.svg')";
        }
    }
    else if (x.rank==3) {
        if (x.treequality==1) {
            return "url('Images/treequality/R3_TQ1_small.svg')";
        }
        else if (x.treequality==2) {
            return "url('Images/treequality/R3_TQ2_small.svg')";
        }
        else if (x.treequality==3) {
            return "url('Images/treequality/R3_TQ3_small.svg')";
        }
        else if (x.treequality==4) {
            return "url('Images/treequality/R3_TQ4_small.svg')";
        }
        else if (x.treequality==5) {
            return "url('Images/treequality/R3_TQ5_small.svg')";
        }
        else if (x.treequality==6) {
            return "url('Images/treequality/R3_TQ6_small.svg')";
        }
        else if (x.treequality==7) {
            return "url('Images/treequality/R3_TQ7_small.svg')";
        }
        else if (x.treequality==8) {
            return "url('Images/treequality/R3_TQ8_small.svg')";
        }
        else if (x.treequality==9) {
            return "url('Images/treequality/R3_TQ9_small.svg')";
        }
        else if (x.treequality==10) {
            return "url('Images/treequality/R3_TQ10_small.svg')";
        }
    }
}

function fetchbonsairanktq_big(x) {
    if (x.rank==1) {
        if (x.treequality==1) {
            return "url('Images/treequality/R1_TQ1_big.svg')";
        }
        else if (x.treequality==2) {
            return "url('Images/treequality/R1_TQ2_big.svg')";
        }
        else if (x.treequality==3) {
            return "url('Images/treequality/R1_TQ3_big.svg')";
        }
        else if (x.treequality==4) {
            return "url('Images/treequality/R1_TQ4_big.svg')";
        }
        else if (x.treequality==5) {
            return "url('Images/treequality/R1_TQ5_big.svg')";
        }
        else if (x.treequality==6) {
            return "url('Images/treequality/R1_TQ6_big.svg')";
        }
        else if (x.treequality==7) {
            return "url('Images/treequality/R1_TQ7_big.svg')";
        }
        else if (x.treequality==8) {
            return "url('Images/treequality/R1_TQ8_big.svg')";
        }
        else if (x.treequality==9) {
            return "url('Images/treequality/R1_TQ9_big.svg')";
        }
        else if (x.treequality==10) {
            return "url('Images/treequality/R1_TQ10_big.svg')";
        }
    }
    else if (x.rank==2) {
        if (x.treequality==1) {
            return "url('Images/treequality/R2_TQ1_big.svg')";
        }
        else if (x.treequality==2) {
            return "url('Images/treequality/R2_TQ2_big.svg')";
        }
        else if (x.treequality==3) {
            return "url('Images/treequality/R2_TQ3_big.svg')";
        }
        else if (x.treequality==4) {
            return "url('Images/treequality/R2_TQ4_big.svg')";
        }
        else if (x.treequality==5) {
            return "url('Images/treequality/R2_TQ5_big.svg')";
        }
        else if (x.treequality==6) {
            return "url('Images/treequality/R2_TQ6_big.svg')";
        }
        else if (x.treequality==7) {
            return "url('Images/treequality/R2_TQ7_big.svg')";
        }
        else if (x.treequality==8) {
            return "url('Images/treequality/R2_TQ8_big.svg')";
        }
        else if (x.treequality==9) {
            return "url('Images/treequality/R2_TQ9_big.svg')";
        }
        else if (x.treequality==10) {
            return "url('Images/treequality/R2_TQ10_big.svg')";
        }
    }
    else if (x.rank==3) {
        if (x.treequality==1) {
            return "url('Images/treequality/R3_TQ1_big.svg')";
        }
        else if (x.treequality==2) {
            return "url('Images/treequality/R3_TQ2_big.svg')";
        }
        else if (x.treequality==3) {
            return "url('Images/treequality/R3_TQ3_big.svg')";
        }
        else if (x.treequality==4) {
            return "url('Images/treequality/R3_TQ4_big.svg')";
        }
        else if (x.treequality==5) {
            return "url('Images/treequality/R3_TQ5_big.svg')";
        }
        else if (x.treequality==6) {
            return "url('Images/treequality/R3_TQ6_big.svg')";
        }
        else if (x.treequality==7) {
            return "url('Images/treequality/R3_TQ7_big.svg')";
        }
        else if (x.treequality==8) {
            return "url('Images/treequality/R3_TQ8_big.svg')";
        }
        else if (x.treequality==9) {
            return "url('Images/treequality/R3_TQ9_big.svg')";
        }
        else if (x.treequality==10) {
            return "url('Images/treequality/R3_TQ10_big.svg')";
        }
    }
}

function fetchbonsairanktq(x) {
    if (x.rank==1 & x.treequality==0) {
        return "url('Images/treequality/TQ0.svg')";
    }
    else if (x.rank==1) {
        if (x.treequality==1) {
            return "url('Images/treequality/R1_TQ1.svg')";
        }
        else if (x.treequality==2) {
            return "url('Images/treequality/R1_TQ2.svg')";
        }
        else if (x.treequality==3) {
            return "url('Images/treequality/R1_TQ3.svg')";
        }
        else if (x.treequality==4) {
            return "url('Images/treequality/R1_TQ4.svg')";
        }
        else if (x.treequality==5) {
            return "url('Images/treequality/R1_TQ5.svg')";
        }
        else if (x.treequality==6) {
            return "url('Images/treequality/R1_TQ6.svg')";
        }
        else if (x.treequality==7) {
            return "url('Images/treequality/R1_TQ7.svg')";
        }
        else if (x.treequality==8) {
            return "url('Images/treequality/R1_TQ8.svg')";
        }
        else if (x.treequality==9) {
            return "url('Images/treequality/R1_TQ9.svg')";
        }
        else if (x.treequality==10) {
            return "url('Images/treequality/R1_TQ10.svg')";
        }
    }
    else if (x.rank==2) {
        if (x.treequality==1) {
            return "url('Images/treequality/R2_TQ1.svg')";
        }
        else if (x.treequality==2) {
            return "url('Images/treequality/R2_TQ2.svg')";
        }
        else if (x.treequality==3) {
            return "url('Images/treequality/R2_TQ3.svg')";
        }
        else if (x.treequality==4) {
            return "url('Images/treequality/R2_TQ4.svg')";
        }
        else if (x.treequality==5) {
            return "url('Images/treequality/R2_TQ5.svg')";
        }
        else if (x.treequality==6) {
            return "url('Images/treequality/R2_TQ6.svg')";
        }
        else if (x.treequality==7) {
            return "url('Images/treequality/R2_TQ7.svg')";
        }
        else if (x.treequality==8) {
            return "url('Images/treequality/R2_TQ8.svg')";
        }
        else if (x.treequality==9) {
            return "url('Images/treequality/R2_TQ9.svg')";
        }
        else if (x.treequality==10) {
            return "url('Images/treequality/R2_TQ10.svg')";
        }
    }
    else if (x.rank==3) {
        if (x.treequality==1) {
            return "url('Images/treequality/R3_TQ1.svg')";
        }
        else if (x.treequality==2) {
            return "url('Images/treequality/R3_TQ2.svg')";
        }
        else if (x.treequality==3) {
            return "url('Images/treequality/R3_TQ3.svg')";
        }
        else if (x.treequality==4) {
            return "url('Images/treequality/R3_TQ4.svg')";
        }
        else if (x.treequality==5) {
            return "url('Images/treequality/R3_TQ5.svg')";
        }
        else if (x.treequality==6) {
            return "url('Images/treequality/R3_TQ6.svg')";
        }
        else if (x.treequality==7) {
            return "url('Images/treequality/R3_TQ7.svg')";
        }
        else if (x.treequality==8) {
            return "url('Images/treequality/R3_TQ8.svg')";
        }
        else if (x.treequality==9) {
            return "url('Images/treequality/R3_TQ9.svg')";
        }
        else if (x.treequality==10) {
            return "url('Images/treequality/R3_TQ10.svg')";
        }
    }
}

function fetchvalues() {
    document.getElementById("skill_growing_nr").innerHTML = skills.growing+1;
    document.getElementById("skill_growing_nr2").innerHTML = skills.growing+1;
    document.getElementById("skill_shaping_nr").innerHTML = skills.shaping+1;
    document.getElementById("skill_shaping_nr2").innerHTML = skills.shaping+1;
    
    document.getElementById("seedling_number").innerText = state.seedlings.toLocaleString('en', {minimumFractionDigits: 0}); 
    
    document.getElementById("skilllevel").innerHTML = skills.level;
    document.getElementById("skilllevel_mobile").innerHTML = skills.level;
    document.getElementById("skilllevel_mobilexs").innerHTML = skills.level;
    document.getElementById("skillexp_left").innerHTML = skills.exp_nextlevel;
    document.getElementById("skillpoints").innerHTML = skills.skillpoints;
    document.getElementById("skillpoints_mobile").innerHTML = skills.skillpoints;
    document.getElementById("skillpoints_mobilexs").innerHTML = skills.skillpoints;
    document.getElementById("money").innerHTML = resources.money;
    document.getElementById("money_mobile").innerHTML = resources.money;
    document.getElementById("money_mobilexs").innerHTML = resources.money;
    document.getElementById("organic_waste").innerHTML = resources.organic_waste;
    document.getElementById("organic_waste_storage").innerHTML = storage.organic_waste;
    document.getElementById("organic_waste_mobile").innerHTML = resources.organic_waste;
    document.getElementById("organic_waste_mobilexs").innerHTML = resources.organic_waste;
    document.getElementById("compost1").innerHTML = resources.compost1;
    document.getElementById("compost1_storage").innerHTML = storage.compost1;
    document.getElementById("compost1_mobile").innerHTML = resources.compost1;
    document.getElementById("compost1_mobilexs").innerHTML = resources.compost1;
    document.getElementById("chemical").innerHTML = resources.chemical;
    document.getElementById("chemical_storage").innerHTML = storage.chemical;
    document.getElementById("shop_chemical").innerHTML = resources.chemical;
    document.getElementById("fertilizer1").innerHTML = resources.fertilizer1;
    document.getElementById("fertilizer1_storage").innerHTML = storage.fertilizer1;
    document.getElementById("wood").innerHTML = resources.wood;
    document.getElementById("wood_storage").innerHTML = storage.wood;    
    document.getElementById("glass").innerHTML = resources.glass;
    document.getElementById("glass_storage").innerHTML = storage.glass;
    document.getElementById("shop_glass").innerHTML = resources.glass;
    document.getElementById("bolt").innerHTML = resources.bolt;
    document.getElementById("bolt_storage").innerHTML = storage.bolt;
    document.getElementById("bolt_mobile").innerHTML = resources.bolt;
    document.getElementById("bolt_mobilexs").innerHTML = resources.bolt;
    document.getElementById("shop_bolt").innerHTML = resources.bolt;
    document.getElementById("shop_bolt_mobile").innerHTML = resources.bolt;
    document.getElementById("metal").innerHTML = resources.metal;
    document.getElementById("metal_storage").innerHTML = storage.metal;
    document.getElementById("metal_mobile").innerHTML = resources.metal;
    document.getElementById("metal_mobilexs").innerHTML = resources.metal;
    document.getElementById("shop_metal").innerHTML = resources.metal;
    document.getElementById("shop_metal_mobile").innerHTML = resources.metal;
    document.getElementById("wire").innerHTML = resources.wire;
    document.getElementById("wire_storage").innerHTML = storage.wire;
    document.getElementById("wire_mobile").innerHTML = resources.wire;
    document.getElementById("wire_mobilexs").innerHTML = resources.wire;
    document.getElementById("shop_wire").innerHTML = resources.wire;
    document.getElementById("shop_wire_mobile").innerHTML = resources.wire;
    document.getElementById("board").innerHTML = resources.board;
    document.getElementById("board_storage").innerHTML = storage.board;
    document.getElementById("board_mobile").innerHTML = resources.board;
    document.getElementById("board_mobilexs").innerHTML = resources.board;
    document.getElementById("shop_board").innerHTML = resources.board;
    document.getElementById("shop_board_mobile").innerHTML = resources.board;
    
    document.getElementById("seedlinga_price_sell").innerHTML = seedling1.price;
    document.getElementById("seedlingb_price_sell").innerHTML = seedling2.price;
    document.getElementById("seedlingc_price_sell").innerHTML = seedling3.price;
    document.getElementById("seedlingd_price_sell").innerHTML = seedling4.price;
    document.getElementById("seedlinge_price_sell").innerHTML = seedling5.price;
    document.getElementById("seedlingf_price_sell").innerHTML = seedling6.price;
    document.getElementById("seedlingall_price_sell").innerHTML = seedling1.price+seedling2.price+seedling3.price+seedling4.price+seedling5.price+seedling6.price;
    
    document.getElementById("stats_seedlingstotal").innerHTML = statistics.seedlings_total;
    document.getElementById("stats_bonsaitotal").innerHTML = statistics.bonsais_total;
    document.getElementById("stats_treetypetotal").innerHTML = statistics.bondex_treetype_discovered;
    
    conteststime(clubs_leagues.ttg01c1, "club_ttg01_c1time");
    conteststime(clubs_leagues.ttg01c2, "club_ttg01_c2time");
    conteststime(clubs_leagues.ttg01c3, "club_ttg01_c3time");
    conteststime(clubs_leagues.lea01j1, "league_area01_j1time");
    conteststime(clubs_leagues.lea01j2, "league_area01_j2time");
    conteststime(clubs_leagues.lea01j3, "league_area01_j3time");
    conteststime(clubs_leagues.lea01c1, "league_area01_c1time");
    conteststime(clubs_leagues.lea01c2, "league_area01_c2time");
    conteststime(clubs_leagues.lea01c3, "league_area01_c3time");
    
    tablevalues("1st");
    tablevalues("2nd");
    tablevalues("3rd");
    tablevalues("4th");
    tablevalues("5th");
    tablevalues("6th");
    tablevalues("7th");
    tablevalues("8th");
    tablevalues("9th");
    tablevalues("10th");
}

function conteststime(variable, placement) {
    if (variable==0) {
        document.getElementById(placement).innerHTML = "";
    }
    else {
        document.getElementById(placement).innerHTML = "(next in "+timetracker(variable)+")";
    }
}

function fetchunlocks() {
    //Unlock Navigation Buttons
    if (tutorial>=2) {
        document.getElementById("ButtonNavigationLearn").style.cursor = "pointer";
        ButtonNavigationLearn.className = "green";
        $(document).ready(function(){
            $('#ButtonNavigationLearn_Show').show();
        });
    }
    if (tutorial>=4) {
        $(document).ready(function(){
            $('#leftcolumn_pc_show').show();
        });
    }
    if (tutorial>=6) {
        document.getElementById("ButtonNavigationTasks").style.cursor = "pointer";
        ButtonNavigationTasks.className = "green";
        $(document).ready(function(){
            $('#ButtonNavigationTasks_Show').show();
            $('#res_organic_waste_none').hide();
            $('#res_organic_waste_show').show();
        });
    }
    if (tutorial>=10) {
        document.getElementById("ButtonNavigationBonDex").style.cursor = "pointer";
        ButtonNavigationBonDex.className = "green";
        document.getElementById("ButtonNavigationShop").style.cursor = "pointer";
        ButtonNavigationShop.className = "green";
        $(document).ready(function(){
            $('#ButtonNavigationBonDex_Show').show();
            $('#ButtonNavigationShop_Show').show();
            $('#shop_equip_bookrobot1').show();
            $('#Skill_Robot1').show();
        });
    }
    if (tutorial>=12) {
        document.getElementById("ButtonNavigationCraft").style.cursor = "pointer";
        ButtonNavigationCraft.className = "green";
        $(document).ready(function(){
            $('#ButtonNavigationCraft_Show').show();
            $('#res_bolt_none').hide();
            $('#res_bolt_show').show();
            $('#res_metal_none').hide();
            $('#res_metal_show').show();
            $('#res_wire_none').hide();
            $('#res_wire_show').show();
            $('#res_board_none').hide();
            $('#res_board_show').show();
        });
    }
    if (tutorial>=13) {
        document.getElementById("ButtonNavigationCompetitions").style.cursor = "pointer";
        ButtonNavigationCompetitions.className = "green";
        $(document).ready(function(){
            $('#ButtonNavigationCompetitions_Show').show();
        });
        document.getElementById("task_t006_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (tutorial>=15) {
        document.getElementById("task_t007_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (tasks.tracker008==3) {
        $(document).ready(function(){
            $('#res_wood_none').hide();
            $('#res_wood_show').show();
            $('#res_glass_none').hide();
            $('#res_glass_show').show();
        });
    }
    
    //Unlock treetypes and treequality in areas
    //Area01 - Bonsais
    if (exp_area01.treetype01==1) {
        document.getElementById("area01_tt01").innerHTML = '<img src="Images/bonsai01_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treetype02==1) {
        document.getElementById("area01_tt02").innerHTML = '<img src="Images/bonsai02_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treetype04==1) {
        document.getElementById("area01_tt04").innerHTML = '<img src="Images/bonsai04_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treetype05==1) {
        document.getElementById("area01_tt05").innerHTML = '<img src="Images/bonsai05_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treetype07==1) {
        document.getElementById("area01_tt07").innerHTML = '<img src="Images/bonsai07_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treetype08==1) {
        document.getElementById("area01_tt08").innerHTML = '<img src="Images/bonsai08_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treequality01==1) {
        document.getElementById("area01_tq01").innerHTML = '&nbsp;<img src="Images/one_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treequality02==1) {
        document.getElementById("area01_tq02").innerHTML = '&nbsp;<img src="Images/two_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treequality03==1) {
        document.getElementById("area01_tq03").innerHTML = '&nbsp;<img src="Images/three_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treequality04==1) {
        document.getElementById("area01_tq04").innerHTML = '&nbsp;<img src="Images/four_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treequality05==1) {
        document.getElementById("area01_tq05").innerHTML = '&nbsp;<img src="Images/five_stamp.svg" width="35" height="35">';
    }
    if (exp_area01.treequality06==1) {
        document.getElementById("area01_tq06").innerHTML = '&nbsp;<img src="Images/six_stamp.svg" width="35" height="35">';
    }
    if (skills.area1up==3) {
        if (area1menu==3) {}
        else {
            $(document).ready(function(){
                $("#area01_time").html("<option value='6'>6 seconds</option><option value='30'>30 seconds</option><option value='180'>3:00 minutes</option><option value='1200'>20:00 minutes</option><option value='3600'>1:00:00 hour</option><option value='7200'>2:00:00 hours</option>");
            })
            document.getElementById("area01_time").value=6
            area01_time_change();
            area1menu=3;
        }
    }
    else if (skills.area1up==2) {
        if (area1menu==2) {}
        else {
            $(document).ready(function(){
                $("#area01_time").html("<option value='6'>6 seconds</option><option value='30'>30 seconds</option><option value='180'>3:00 minutes</option><option value='1200'>20:00   minutes</option><option value='3600'>1:00:00 hour</option>");
            })
            document.getElementById("area01_time").value=6
            area01_time_change();
            area1menu=2;
        }
    }
    else if (skills.area1up==1) {
        if (area1menu==1) {}
        else {
            $(document).ready(function(){
                $("#area01_time").html("<option value='6'>6 seconds</option><option value='30'>30 seconds</option><option value='180'>3:00 minutes</option><option value='1200'>20:00   minutes</option>");
            })
            document.getElementById("area01_time").value=6
            area01_time_change();
            area1menu=1;
        }
    }
    //Area02 - Bonsais
    if (exp_area02.treetype01==1) {
        document.getElementById("area02_tt01").innerHTML = '<img src="Images/bonsai01_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype03==1) {
        document.getElementById("area02_tt03").innerHTML = '<img src="Images/bonsai03_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype04==1) {
        document.getElementById("area02_tt04").innerHTML = '<img src="Images/bonsai04_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype06==1) {
        document.getElementById("area02_tt06").innerHTML = '<img src="Images/bonsai06_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype09==1) {
        document.getElementById("area02_tt09").innerHTML = '<img src="Images/bonsai09_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype10==1) {
        document.getElementById("area02_tt10").innerHTML = '<img src="Images/bonsai10_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype11==1) {
        document.getElementById("area02_tt11").innerHTML = '<img src="Images/bonsai11_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype13==1) {
        document.getElementById("area02_tt13").innerHTML = '<img src="Images/bonsai13_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treetype14==1) {
        document.getElementById("area02_tt14").innerHTML = '<img src="Images/bonsai14_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treequality01==1) {
        document.getElementById("area02_tq01").innerHTML = '<img src="Images/one_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treequality02==1) {
        document.getElementById("area02_tq02").innerHTML = '&nbsp;<img src="Images/two_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treequality03==1) {
        document.getElementById("area02_tq03").innerHTML = '&nbsp;<img src="Images/three_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treequality04==1) {
        document.getElementById("area02_tq04").innerHTML = '&nbsp;<img src="Images/four_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treequality05==1) {
        document.getElementById("area02_tq05").innerHTML = '&nbsp;<img src="Images/five_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treequality06==1) {
        document.getElementById("area02_tq06").innerHTML = '&nbsp;<img src="Images/six_stamp.svg" width="35" height="35">';
    }
    if (exp_area02.treequality07==1) {
        document.getElementById("area02_tq07").innerHTML = '&nbsp;<img src="Images/seven_stamp.svg" width="35" height="35">';
    }
    if (skills.area2up==3) {
        if (area2menu==3) {}
        else {
            $(document).ready(function(){
                $("#area02_time").html("<option value='30'>30 seconds</option><option value='180'>3:00 minutes</option><option value='1200'>20:00 minutes</option><option value='3600'>1:00:00 hour</option><option value='7200'>2:00:00 hours</option><option value='14400'>4:00:00 hours</option>");
            })
            document.getElementById("area02_time").value=30
            area02_time_change();
            area2menu=3;
        }
    }
    else if (skills.area2up==2) {
        if (area2menu==2) {}
        else {
            $(document).ready(function(){
                $("#area02_time").html("<option value='30'>30 seconds</option><option value='180'>3:00 minutes</option><option value='1200'>20:00 minutes</option><option value='3600'>1:00:00 hour</option><option value='7200'>2:00:00 hours</option>");
            })
            document.getElementById("area02_time").value=30
            area02_time_change();
            area2menu=2;
        }
    }
    else if (skills.area2up==1) {
        if (area2menu==1) {}
        else {
            $(document).ready(function(){
                $("#area02_time").html("<option value='30'>30 seconds</option><option value='180'>3:00 minutes</option><option value='1200'>20:00 minutes</option><option value='3600'>1:00:00 hour</option>");
            })
            document.getElementById("area02_time").value=30
            area02_time_change();
            area2menu=1;
        }
    }
    //Area1 - Resources
    if (expres_area01.money==1) {
        document.getElementById("area1res1").innerHTML = '<img src="Images/currency_stamp.svg" width="35" height="35">';
    }
    if (expres_area01.wood==1) {
        document.getElementById("area1res2").innerHTML = '<img src="Images/wood_stamp.svg" width="35" height="35">';
    }
    if (skills.areares1up==3) {
        if (areares1menu==3) {}
        else {
            $(document).ready(function(){
                $("#areares01_time").html("<option value='120'>2:00 minutes (one chance)</option><option value='240'>4:00 minutes (two chances)</option><option value='360'>6:00 minutes (three chances)</option><option value='480'>8:00 minutes (four chances)</option><option value='600'>10:00 minutes (five chances)</option><option value='720'>12:00 minutes (six chances)</option>");
            })
            document.getElementById("areares01_time").value=120
            areares01_time_change();
            areares1menu=3;
        }
    }
    else if (skills.areares1up==2) {
        if (areares1menu==2) {}
        else {
            $(document).ready(function(){
                $("#areares01_time").html("<option value='120'>2:00 minutes (one chance)</option><option value='240'>4:00 minutes (two chances)</option><option value='360'>6:00 minutes (three chances)</option><option value='480'>8:00 minutes (four chances)</option><option value='600'>10:00 minutes (five chances)</option>");
            })
            document.getElementById("areares01_time").value=120
            areares01_time_change();
            areares1menu=2;
        }
    }
    else if (skills.areares1up==1) {
        if (areares1menu==1) {}
        else {
            $(document).ready(function(){
                $("#areares01_time").html("<option value='120'>2:00 minutes (one chance)</option><option value='240'>4:00 minutes (two chances)</option><option value='360'>6:00 minutes (three chances)</option><option value='480'>8:00 minutes (four chances)</option>");
            })
            document.getElementById("areares01_time").value=120
            areares01_time_change();
            areares1menu=1;
        }
    }
    //Area2 - Resources
    if (expres_area02.money==1) {
        document.getElementById("area2res1").innerHTML = '<img src="Images/currency_stamp.svg" width="35" height="35">';
    }
    if (expres_area02.wood==1) {
        document.getElementById("area2res2").innerHTML = '<img src="Images/wood_stamp.svg" width="35" height="35">';
    }
    if (expres_area02.glass==1) {
        document.getElementById("area2res3").innerHTML = '<img src="Images/glass_stamp.svg" width="35" height="35">';
    }
    if (skills.areares2up==3) {
        if (areares2menu==3) {}
        else {
            $(document).ready(function(){
                $("#areares02_time").html("<option value='300'>5:00 minutes (one chance)</option><option value='600'>10:00 minutes (two chances)</option><option value='900'>15:00 minutes (three chances)</option><option value='1200'>20:00 minutes (four chances)</option><option value='1500'>25:00 minutes (five chances)</option><option value='1800'>30:00 minutes (six chances)</option>");
            })
            document.getElementById("areares02_time").value=300
            areares02_time_change();
            areares2menu=3;
        }
    }
    else if (skills.areares2up==2) {
        if (areares2menu==2) {}
        else {
            $(document).ready(function(){
                $("#areares02_time").html("<option value='300'>5:00 minutes (one chance)</option><option value='600'>10:00 minutes (two chances)</option><option value='900'>15:00 minutes (three chances)</option><option value='1200'>20:00 minutes (four chances)</option><option value='1500'>25:00 minutes (five chances)</option>");
            })
            document.getElementById("areares02_time").value=300
            areares02_time_change();
            areares2menu=2;
        }
    }
    else if (skills.areares2up==1) {
        if (areares2menu==1) {}
        else {
            $(document).ready(function(){
                $("#areares02_time").html("<option value='300'>5:00 minutes (one chance)</option><option value='600'>10:00 minutes (two chances)</option><option value='900'>15:00 minutes (three chances)</option><option value='1200'>20:00 minutes (four chances)</option>");
            })
            document.getElementById("areares02_time").value=300
            areares02_time_change();
            areares2menu=1;
        }
    }
    
    //Unlock workers
    if (state.workers_total==3) {
        $(document).ready(function() {
            $('#worker02div').show();
            $('#worker03div').show();
        });
    }
    else if (state.workers_total==2) {
        $(document).ready(function() {
            $('#worker02div').show();
        });
    }
    
    //Unlock skilllevels
    if (skills.level>=1) {
        $(document).ready(function() {
            $('#Skill_Care1').show();
            $('#Skill_Compost1').show();
            $('#Skill_Growing').show();
            $('#shop_equip_bookgrowing1').show();
        });
    }
    
    if (skills.level>=2) {
        $(document).ready(function() {
            $('#Skill_Patience').show();
            $('#shop_equip_bookpatience1').show();
            $('#shop_equip_memorychips1').show();
            $('#Skill_Fertilizer1').show();
            $('#shop_equip_labkit').show();
            $('#T009').show();
        });
        document.getElementById("Button_equip_bookgrowing1").innerHTML = 'Buy (5&nbsp;<img src="Images/currency_white.svg" width="15" height="15">)';
        document.getElementById("Button_equip_bookgrowing1").style.cursor = "pointer";
        Button_equip_bookgrowing1.className = "grey";
        if (tasks.tracker009==0) {
            tasks.tracker009=1;
        }
    }
    if (skills.level>=3) {
        $(document).ready(function() {
            $('#Skill_Shaping').show();
            $('#shop_equip_bookshaping1').show();
        });
        document.getElementById("Button_equip_bookofpatience").innerHTML = 'Buy (25&nbsp;<img src="Images/currency_white.svg" width="15" height="15">)';
        document.getElementById("Button_equip_bookofpatience").style.cursor = "pointer";
        Button_equip_bookofpatience.className = "grey";
        document.getElementById("Button_equip_memorychips").innerHTML = 'Buy (40&nbsp;<img src="Images/currency_white.svg" width="15" height="15">)';
        document.getElementById("Button_equip_memorychips").style.cursor = "pointer";
        Button_equip_memorychips.className = "grey";
        document.getElementById("Button_equip_labkit").innerHTML = 'Buy (20&nbsp;<img src="Images/currency_white.svg" width="15" height="15">)';
        document.getElementById("Button_equip_labkit").style.cursor = "pointer";
        Button_equip_labkit.className = "grey";
    }
    if (skills.level>=4) {
        $(document).ready(function() {
            $('#Skill_Greenhouse1').show();
            $('#shop_equip_buildingtools').show();
        });
        document.getElementById("Button_equip_bookshaping1").innerHTML = 'Buy (5&nbsp;<img src="Images/currency_white.svg" width="15" height="15">)';
        document.getElementById("Button_equip_bookshaping1").style.cursor = "pointer";
        Button_equip_bookshaping1.className = "grey";
    }
    if (skills.level>=4 && tasks.tracker008==3) {
        $(document).ready(function() {
            $('#T010').show();
            $('#shop_equip_map_areares02').show();
        });
        if (tasks.tracker010==0) {
            tasks.tracker010=1;
        }
    }
    if (skills.level>=5) {
        $(document).ready(function() {
            $('#Skill_Storage1').show();
        });
        document.getElementById("Button_equip_bookstorage1").innerHTML = 'Buy (15&nbsp;<img src="Images/currency_white.svg" width="15" height="15">)';
        document.getElementById("Button_equip_bookstorage1").style.cursor = "pointer";
        Button_equip_bookstorage1.className = "grey";
        document.getElementById("Button_equip_map_areares02").innerHTML = 'Buy (10&nbsp;<img src="Images/currency_white.svg" width="15" height="15">)';
        document.getElementById("Button_equip_map_areares02").style.cursor = "pointer";
        Button_equip_map_areares02.className = "grey";
    }
    if (skills.level>=6) {
        
    }
    if (skills.level>=7) {
        $(document).ready(function(){
            $('#Skill_Treestyles2').show();
            $('#Skill_Treestyles2_Mobile').show();
            $('#shop_equip_bookstyles2').show();
        });
    }
    if (skills.level>=8) {
        document.getElementById("Button_equip_bookstyles2").innerHTML = 'Buy (25&nbsp;<img src="Images/currency_white.svg" width="15" height="15">)';
        document.getElementById("Button_equip_bookstyles2").style.cursor = "pointer";
        Button_equip_bookstyles2.className = "grey";        
    }
    if (skills.level>=9) {
        $(document).ready(function() {
            $('#T011').show();
            $('#shop_equip_map_area02').show();
        });
        if (tasks.tracker011==0) {
            tasks.tracker011=1;
        }
    }
    if (skills.level>=10) {
        document.getElementById("Button_equip_map_area02").innerHTML = 'Buy (20&nbsp;<img src="Images/currency_white.svg" width="15" height="15">)';
        document.getElementById("Button_equip_map_area02").style.cursor = "pointer";
        Button_equip_map_area02.className = "grey";        
    }
    
    //Unlock skillpoints
    if (skills.skillpoints==0) {
        document.getElementById("skill_compost1_rec1").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        document.getElementById("skill_fertilizer1_rec1").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        document.getElementById("skill_greenhouse_rec2").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        document.getElementById("skill_storage_rec2").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        document.getElementById("skill_patience_rec3").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        document.getElementById("skill_care1_rec1").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        document.getElementById("skill_area1up1_rec2").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        document.getElementById("skill_area2up1_rec2").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        document.getElementById("skill_areares1up1_rec2").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        document.getElementById("skill_areares2up1_rec2").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        document.getElementById("skill_growing_rec2").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        document.getElementById("skill_shaping_rec2").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
    }
    if (skills.skillpoints>=1 || skills.compost1==1) {
        document.getElementById("skill_compost1_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (skills.skillpoints>=1 || skills.fertilizer1==1) {
        document.getElementById("skill_fertilizer1_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (skills.skillpoints>=1 || skills.greenhouse1==1) {
        document.getElementById("skill_greenhouse_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (skills.skillpoints>=1 || skills.storage1==1) {
        document.getElementById("skill_storage_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (skills.skillpoints>=1 || skills.patience==1) {
        document.getElementById("skill_patience_rec3").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }    
    if (skills.skillpoints>=1 || skills.care>=2) {
        document.getElementById("skill_care1_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    } 
    if (skills.skillpoints>=1 || skills.area1up>=1) {
        document.getElementById("skill_area1up1_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }  
    if (skills.skillpoints>=1 || skills.area2up>=1) {
        document.getElementById("skill_area2up1_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }  
    if (skills.skillpoints>=1 || skills.areares1up>=1) {
        document.getElementById("skill_areares1up1_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    } 
    if (skills.skillpoints>=1 || skills.areares2up>=1) {
        document.getElementById("skill_areares2up1_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    } 
    if (skills.skillpoints>=1) {
        document.getElementById("skill_growing_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        document.getElementById("skill_shaping_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    //Unlock resources
    if (resources.wood<=5) {
        document.getElementById("skill_compost1_rec2").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
    }
    if (resources.wood>=5 || skills.compost1==1) {
        document.getElementById("skill_compost1_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (statistics.seedlings_total>=1) {
        document.getElementById("task_t001_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (statistics.bonsais_total>=1) {
        document.getElementById("task_t003_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (statistics.bloomingbonsais_total>=1) {
        document.getElementById("task_t009_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (tasks.tracker004>=2) {
        document.getElementById("task_t004_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (tasks.tracker004a>=2) {
        document.getElementById("task_t004a_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    
    //Unlock equipment
    if (tutorial>=10) {
        $(document).ready(function(){
            $('#shop_equip_bookrobot1').show();                
        });
    }
    if (equipment.tools1==1) {
        $(document).ready(function() {
            $('#you_equip_tools1').show();
        });
        document.getElementById("skill_treestyle_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        document.getElementById("skill_treestyle2_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (equipment.backpack==1) {
        $(document).ready(function() {
            $('#shop_equip_backpack').hide();
        });
        $(document).ready(function() {
            $('#you_equip_backpack').show();
        });
        document.getElementById("task_t008_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (equipment.labkit==1) {
        $(document).ready(function() {
            $('#shop_equip_labkit').hide();
        });
        $(document).ready(function() {
            $('#you_equip_labkit').show();
        });
        document.getElementById("skill_fertilizer1_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (equipment.book_styles1==1) {
        $(document).ready(function() {
            $('#you_equip_bookstyles1').show();
        });
        document.getElementById("skill_treestyle_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (equipment.book_styles2==1) {
        $(document).ready(function() {
            $('#shop_equip_bookstyles2').hide();
        });
        $(document).ready(function() {
            $('#you_equip_bookstyles2').show();
        });
        document.getElementById("skill_treestyle2_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (equipment.book_robot1==1) {
        $(document).ready(function() {
            $('#shop_equip_bookrobot1').hide();
        });
        $(document).ready(function() {
            $('#you_equip_bookrobot1').show();
        });
        document.getElementById("skill_robot1_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        document.getElementById("task_t005_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (equipment.book_growing1==1) {
        $(document).ready(function() {
            $('#shop_equip_bookgrowing1').hide();
        });
        $(document).ready(function() {
            $('#you_equip_bookgrowing1').show();
        });
        if (skills.growing<10) {
            document.getElementById("skill_growing_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        }
        else if (skills.growing>=10) {
            document.getElementById("skill_growing_book").innerHTML = 2;
            document.getElementById("skill_growing_rec1").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        }
    }
    if (equipment.book_shaping1==1) {
        $(document).ready(function() {
            $('#shop_equip_bookshaping1').hide();
        });
        $(document).ready(function() {
            $('#you_equip_bookshaping1').show();
        });
        if (skills.shaping<10) {
            document.getElementById("skill_shaping_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        }
        else if (skills.shaping>=10) {
            document.getElementById("skill_shaping_book").innerHTML = 2;
            document.getElementById("skill_shaping_rec1").innerHTML = '<img src="Images/cross.svg" width="20" height="20">';
        }
    }
    if (equipment.book_of_patience1==1) {
        $(document).ready(function() {
            $('#shop_equip_bookpatience1').hide();
        });
        $(document).ready(function() {
            $('#you_equip_bookpatience1').show();
        });
        document.getElementById("skill_patience_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (equipment.memory_chips1==1) {
        $(document).ready(function() {
            $('#shop_equip_memorychips1').hide();
        });
        $(document).ready(function() {
            $('#you_equip_memorychips1').show();
        });
        document.getElementById("skill_patience_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (equipment.map_areares2==1) {
        $(document).ready(function() {
            $('#shop_equip_map_areares02').hide();
        });
        $(document).ready(function() {
            $('#you_equip_map_areares02').show();
        });
        document.getElementById("task_t010_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    
    if (equipment.map_area02==1) {
        $(document).ready(function() {
            $('#shop_equip_map_area02').hide();
        });
        $(document).ready(function() {
            $('#you_equip_map_area02').show();
        });
        document.getElementById("task_t011_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    if (equipment.buildingtools==1) {
        $(document).ready(function() {
            $('#shop_equip_buildingtools').hide();
        });
        $(document).ready(function() {
            $('#you_equip_buildingtools').show();
        });
        document.getElementById("skill_greenhouse_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        document.getElementById("skill_storage_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    
    if (exp_area01.count>=20 || exp_area02.count>=20 || expres_area01.count>=8 || expres_area02.count>=8) {
        $(document).ready(function(){
            $('#T012').show();                
        });
        if (tasks.tracker012==0) {
            tasks.tracker012=1;
        }
    }    
    if (exp_area01.count>=20) {
        $(document).ready(function(){
            $('#Skill_Area1Up1').show();                
        });
        if (exp_area01.count>=25) {
            document.getElementById("skill_area1up1_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        }
    }
    if (exp_area02.count>=20) {
        $(document).ready(function(){
            $('#Skill_Area2Up1').show();                
        });
        if (exp_area02.count>=25) {
            document.getElementById("skill_area2up1_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        }
    }
    if (expres_area01.count>=8) {
        $(document).ready(function(){
            $('#Skill_Areares1Up1').show();                
        });
        if (expres_area01.count>=10) {
            document.getElementById("skill_areares1up1_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        }
    }  
    if (expres_area02.count>=8) {
        $(document).ready(function(){
            $('#Skill_Areares2Up1').show();                
        });
        if (expres_area02.count>=10) {
            document.getElementById("skill_areares2up1_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        }
    }  
    if (skills.area1up>=1 || skills.area2up>=1 || skills.areares1up>=1 ||skills.areares2up>=1) {
        document.getElementById("task_t012_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
        if (tasks.tracker012==1) {
            tasks.tracker012=2;
        }
    }
    if (state.areasresourceunlocked>=1) {
        $(document).ready(function() {
            $('#expeditionresources_show').show();
            $('#expeditionresources1').show();
        });
    }
    if (state.areasresourceunlocked>=2) {
        $(document).ready(function() {
            $('#expeditionresources2').show();
        });
    }
    if (state.areasunlocked>=2) {
        $(document).ready(function(){
            $('#expedition2').show();
        });
        tableunlockttg2 ("1st");
        tableunlockttg2 ("2nd");
        tableunlockttg2 ("3rd");
        tableunlockttg2 ("4th");
        tableunlockttg2 ("5th");
        tableunlockttg2 ("6th");
        tableunlockttg2 ("7th");
        tableunlockttg2 ("8th");
        tableunlockttg2 ("9th");
        tableunlockttg2 ("10th");
    }
    
    //Unlock skills
    if (skills.treestyles1==1) {
        $(document).ready(function(){
            $('#Skill_Treestyles1').hide();
            $('#Skill_Treestyles1_Learned').show();
            $('#Skill_Treestyles1_Mobile').hide();
            $('#Skill_Treestyles1_Learned_Mobile').show();
        });
        document.getElementById("Skill_Treestyles1_Button").innerHTML = "Learned";
        Button_Skill_Treestyles1.className = "";
        document.getElementById("Button_Skill_Treestyles1").style.cursor= "auto";
        $(document).ready(function(){
            $("#menu_style").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option>");
            $("#menu_style_mobile").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option>");
        });
        document.getElementById("task_t002_rec1").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    
    if (skills.treestyles2==1) {
        $(document).ready(function(){
            $('#Skill_Treestyles2').hide();
            $('#Skill_Treestyles2_Learned').show();
            $('#Skill_Treestyles2_Mobile').hide();
            $('#Skill_Treestyles2_Learned_Mobile').show();
        });
        document.getElementById("Skill_Treestyles2_Button").innerHTML = "Learned";
        Button_Skill_Treestyles2.className = "";
        document.getElementById("Button_Skill_Treestyles2").style.cursor= "auto";
        $(document).ready(function(){
            $("#menu_style").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option></option><option value='4'>Han-Kengai - Semi-cascade Style</option></option><option value='5'>Sokan - Double Trunk Style</option></option><option value='6'>Kengai - Full Cascade Style</option></option><option value='7'>Kabudachi - Multi-Trunk Style</option>");
            $("#menu_style_mobile").html("<option value='0'>Choose a style for your bonsai</option><option value='1'>Chokan - Formal Upright Style</option><option value='2'>Moyogi - Informal Upright Style</option><option value='3'>Shakan - Slanting Style</option><option value='4'>Han-Kengai - Semi-cascade Style</option></option><option value='5'>Sokan - Double Trunk Style</option></option><option value='6'>Kengai - Full Cascade Style</option></option><option value='7'>Kabudachi - Multi-Trunk Style</option>");
        });
        tableunlockst2 ("1st");
        tableunlockst2 ("2nd");
        tableunlockst2 ("3rd");
        tableunlockst2 ("4th");
        tableunlockst2 ("5th");
        tableunlockst2 ("6th");
        tableunlockst2 ("7th");
        tableunlockst2 ("8th");
        tableunlockst2 ("9th");
        tableunlockst2 ("10th");
        
    }
    
    if (skills.robot1==1) {
        $(document).ready(function(){
            $('#Craft_Robot1').show();
            $('#Craft_Robot1_Mobile').show();
            $('#Skill_Robot1').hide();
            $('#Skill_Robot1_Learned').show();
        });
        document.getElementById("Skill_Robot1_Button").innerHTML = "Learned";
        Button_Skill_Robot1.className = "";
        document.getElementById("Button_Skill_Robot1").style.cursor= "auto";
        document.getElementById("task_t005_rec2").innerHTML = '<img src="Images/tick.svg" width="20" height="20">';
    }
    
    if (skills.compost1==1) {
        $(document).ready(function(){
            $('#Craft_Compost1').show();
            $('#Craft_Compost1_Mobile').show();
            $('#resources_0').show();
            $('#resources_2').show();
            $('#Skill_Compost1').hide();
            $('#Skill_Compost1_Learned').show();
            $('#Skill_Compost1_Mobile').hide();
            $('#Skill_Compost1_Learned_Mobile').show();
            $('#res_compost1_none').hide();
            $('#res_compost1_show').show();
        });
        document.getElementById("Skill_Compost1_Button").innerHTML = "Learned";
        Button_Skill_Compost1.className = "";
        document.getElementById("Button_Skill_Compost1").style.cursor= "auto";
    }
    
    if (skills.fertilizer1==1) {
        $(document).ready(function(){
            $('#Craft_Fertilizer1').show();
            $('#resources_0').show();
            $('#resources_2').show();
            $('#Skill_Fertilizer1').hide();
            $('#Skill_Fertilizer1_Learned').show();
            $('#res_chemical_none').hide();
            $('#res_chemical_show').show();
            $('#res_fertilizer1_none').hide();
            $('#res_fertilizer1_show').show();
        });
        document.getElementById("Skill_Fertilizer1_Button").innerHTML = "Learned";
        Button_Skill_Fertilizer1.className = "";
        document.getElementById("Button_Skill_Fertilizer1").style.cursor= "auto";
    }
    
    if (skills.shaping>=1) {
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
    
    if (skills.patience==1) {
        $(document).ready(function(){
            $('#bdcc_r_t111').show();
            $('#bdcc_r_t112').hide();
            $('#Skill_Patience').hide();
            $('#Skill_Patience_Learned').show();
        });
        document.getElementById("Skill_Patience_Button").innerHTML = "Learned";
        Button_Skill_Patience.className = "";
        document.getElementById("Button_Skill_Patience").style.cursor= "auto";
    }
    
    if (skills.greenhouse1==1) {
        $(document).ready(function(){
            $('#Craft_Greenhouse1').show();
            $('#Skill_Greenhouse1').hide();
            $('#Skill_Greenhouse1_Learned').show();
        });
        document.getElementById("Skill_Greenhouse1_Button").innerHTML = "Learned";
        Button_Skill_Greenhouse1.className = "";
        document.getElementById("Button_Skill_Greenhouse1").style.cursor= "auto";
    }
    
    if (skills.storage1==1) {
        $(document).ready(function(){
            $('#Craft_Storage').show();
            $('#Skill_Storage1').hide();
            $('#Skill_Storage1_Learned').show();
        });
        document.getElementById("Skill_Storage1_Button").innerHTML = "Learned";
        Button_Skill_Storage1.className = "";
        document.getElementById("Button_Skill_Storage1").style.cursor= "auto";
    }
    
    if (skills.care>=2) {
        $(document).ready(function(){
            $('#Skill_Care1').hide();
            $('#Skill_Care1_Learned').show();
        });
        document.getElementById("Skill_Care1_Button").innerHTML = "Learned";
        Button_Skill_Care1.className = "";
        document.getElementById("Button_Skill_Care1").style.cursor= "auto";
        document.getElementById("worker1_task_clicker").innerHTML = "-2 sec.";
        document.getElementById("worker2_task_clicker").innerHTML = "-2 sec.";
        document.getElementById("worker3_task_clicker").innerHTML = "-2 sec.";
    }
    
    if (skills.area1up==1) {
        $(document).ready(function(){
            $('#Skill_Area1Up1').hide();
            $('#Skill_Area1Up1_Learned').show();
        });
        document.getElementById("Skill_Area1Up1_Button").innerHTML = "Learned";
        Button_Skill_Area1Up1.className = "";
        document.getElementById("Button_Skill_Area1Up1").style.cursor= "auto";
    }
    
    if (skills.area2up==1) {
        $(document).ready(function(){
            $('#Skill_Area2Up1').hide();
            $('#Skill_Area2Up1_Learned').show();
        });
        document.getElementById("Skill_Area2Up1_Button").innerHTML = "Learned";
        Button_Skill_Area2Up1.className = "";
        document.getElementById("Button_Skill_Area2Up1").style.cursor= "auto";
    }
    
    if (skills.areares1up==1) {
        $(document).ready(function(){
            $('#Skill_Areares1Up1').hide();
            $('#Skill_Areares1Up1_Learned').show();
        });
        document.getElementById("Skill_Areares1Up1_Button").innerHTML = "Learned";
        Button_Skill_Areares1Up1.className = "";
        document.getElementById("Button_Skill_Areares1Up1").style.cursor= "auto";
    }
    
    if (skills.areares2up==1) {
        $(document).ready(function(){
            $('#Skill_Areares2Up1').hide();
            $('#Skill_Areares2Up1_Learned').show();
        });
        document.getElementById("Skill_Areares2Up1_Button").innerHTML = "Learned";
        Button_Skill_Areares2Up1.className = "";
        document.getElementById("Button_Skill_Areares2Up1").style.cursor= "auto";
    }
    
    //Unlock Clubs/Leagues
    if (clubs_leagues.ttg01>=2) {
        $(document).ready(function(){
            $('#ButtonTTG01_C1').show();
            $('#ButtonTTG01_C2').show();
            $('#ButtonTTG01_C3').show();
        });
    }
    else if (clubs_leagues.ttg01==1) {
        $(document).ready(function(){
            $('#ButtonTTG01_C1').show();
            $('#ButtonTTG01_C2').show();
            $('#ButtonTTG01_C3').hide();
        });
    }
    
    if (clubs_leagues.lea01>=2) {
        $(document).ready(function(){
            $('#ButtonArea01_C1').show();
            $('#ButtonArea01_C2').show();
            $('#ButtonArea01_C3').show();
        });
    }
    else if (clubs_leagues.lea01==1) {
        $(document).ready(function(){
            $('#ButtonArea01_C1').show();
            $('#ButtonArea01_C2').show();
            $('#ButtonArea01_C3').hide();
        });
    }
    
    //Unlock tasks
    task_unlock("000", tasks.tracker000, ButtonT000);
    task_unlock("001", tasks.tracker001, ButtonT001);
    task_unlock("002", tasks.tracker002, ButtonT002);
    task_unlock("003", tasks.tracker003, ButtonT003);
    task_unlock("004", tasks.tracker004, ButtonT004);
    task_unlock("004a", tasks.tracker004a, ButtonT004a);
    task_unlock("005", tasks.tracker005, ButtonT005);
    task_unlock("006", tasks.tracker006, ButtonT006);
    task_unlock("007", tasks.tracker007, ButtonT007);
    task_unlock("008", tasks.tracker008, ButtonT008);
    task_unlock("009", tasks.tracker009, ButtonT009);
    task_unlock("010", tasks.tracker010, ButtonT010);
    task_unlock("011", tasks.tracker011, ButtonT011);
    task_unlock("012", tasks.tracker012, ButtonT012);
    task_unlock("101", tasks.tracker101, ButtonT101);
    task_unlock("102", tasks.tracker102, ButtonT102);
    task_unlock("103", tasks.tracker103, ButtonT103);
    task_unlock("201", tasks.tracker201, ButtonT201);
    task_unlock("202", tasks.tracker202, ButtonT202);
    task_unlock("203", tasks.tracker203, ButtonT203);
}

function tableunlockttg2 (place) {
    document.getElementById("table_"+place+"_ttg").style.width = "200px"; 
    document.getElementById("table_"+place+"_ttg").style.height = "192px"; 
    document.getElementById("table_"+place+"_ttg").style.marginLeft = "-100px";

    $(document).ready(function(){
        $('#TTGtable_'+place+'_o4').show();
        $('#TTGtable_'+place+'_14').show();
        $('#TTGtable_'+place+'_24').show();
        $('#TTGtable_'+place+'_34').show();
        
        $('#TTGtable_'+place+'_o5').show();
        $('#TTGtable_'+place+'_15').show();
        $('#TTGtable_'+place+'_25').show();
        $('#TTGtable_'+place+'_35').show();
        
        $('#TTGtable_'+place+'_y4').show();
        $('#TTGtable_'+place+'_41').show();
        $('#TTGtable_'+place+'_42').show();
        $('#TTGtable_'+place+'_43').show();
        $('#TTGtable_'+place+'_44').show();
        $('#TTGtable_'+place+'_45').show();
        
        $('#TTGtable_'+place+'_y5').show();
        $('#TTGtable_'+place+'_51').show();
        $('#TTGtable_'+place+'_52').show();
        $('#TTGtable_'+place+'_53').show();
        $('#TTGtable_'+place+'_54').show();
        $('#TTGtable_'+place+'_55').show();
    });
}

function tableunlockttg3 (place) {
    document.getElementById("table_"+place+"_ttg").style.width = "242px";
    document.getElementById("table_"+place+"_ttg").style.height = "234px";
    document.getElementById("table_"+place+"_ttg").style.marginLeft = "-121px";

    $(document).ready(function(){
        $('#TTGtable_'+place+'_o6').show();
        $('#TTGtable_'+place+'_16').show();
        $('#TTGtable_'+place+'_26').show();
        $('#TTGtable_'+place+'_36').show();
        $('#TTGtable_'+place+'_46').show();
        $('#TTGtable_'+place+'_56').show();
        
        $('#TTGtable_'+place+'_o7').show();
        $('#TTGtable_'+place+'_17').show();
        $('#TTGtable_'+place+'_27').show();
        $('#TTGtable_'+place+'_37').show();
        $('#TTGtable_'+place+'_47').show();
        $('#TTGtable_'+place+'_57').show();
        
        $('#TTGtable_'+place+'_y6').show();
        $('#TTGtable_'+place+'_61').show();
        $('#TTGtable_'+place+'_62').show();
        $('#TTGtable_'+place+'_63').show();
        $('#TTGtable_'+place+'_64').show();
        $('#TTGtable_'+place+'_65').show();
        $('#TTGtable_'+place+'_66').show();
        $('#TTGtable_'+place+'_67').show();
        
        $('#TTGtable_'+place+'_y7').show();
        $('#TTGtable_'+place+'_71').show();
        $('#TTGtable_'+place+'_72').show();
        $('#TTGtable_'+place+'_73').show();
        $('#TTGtable_'+place+'_74').show();
        $('#TTGtable_'+place+'_75').show();
        $('#TTGtable_'+place+'_76').show();
        $('#TTGtable_'+place+'_77').show();
    });
}

function tableunlockttg4 (place) {
    document.getElementById("table_"+place+"_ttg").style.width = "263.25px"; 
    document.getElementById("table_"+place+"_ttg").style.height = "255.25px"; 
    document.getElementById("table_"+place+"_ttg").style.marginLeft = "-131.625px";

    $(document).ready(function(){
        $('#TTGtable_'+place+'_o8').show();
        $('#TTGtable_'+place+'_18').show();
        $('#TTGtable_'+place+'_28').show();
        $('#TTGtable_'+place+'_38').show();
        $('#TTGtable_'+place+'_48').show();
        $('#TTGtable_'+place+'_58').show();
        $('#TTGtable_'+place+'_68').show();
        $('#TTGtable_'+place+'_78').show();
        
        $('#TTGtable_'+place+'_y8').show();
        $('#TTGtable_'+place+'_81').show();
        $('#TTGtable_'+place+'_82').show();
        $('#TTGtable_'+place+'_83').show();
        $('#TTGtable_'+place+'_84').show();
        $('#TTGtable_'+place+'_85').show();
        $('#TTGtable_'+place+'_86').show();
        $('#TTGtable_'+place+'_87').show();
        $('#TTGtable_'+place+'_88').show();
    });
}

function tableunlockttg5 (place) {
    document.getElementById("table_"+place+"_ttg").style.width = "284.5px"; 
    document.getElementById("table_"+place+"_ttg").style.height = "276.5px";
    document.getElementById("table_"+place+"_ttg").style.marginLeft = "-142.25px";
    
    $(document).ready(function(){
        $('#TTGtable_'+place+'_o9').show();
        $('#TTGtable_'+place+'_19').show();
        $('#TTGtable_'+place+'_29').show();
        $('#TTGtable_'+place+'_39').show();
        $('#TTGtable_'+place+'_49').show();
        $('#TTGtable_'+place+'_59').show();
        $('#TTGtable_'+place+'_69').show();
        $('#TTGtable_'+place+'_79').show();
        $('#TTGtable_'+place+'_89').show();
        
        $('#TTGtable_'+place+'_y9').show();
        $('#TTGtable_'+place+'_91').show();
        $('#TTGtable_'+place+'_92').show();
        $('#TTGtable_'+place+'_93').show();
        $('#TTGtable_'+place+'_94').show();
        $('#TTGtable_'+place+'_95').show();
        $('#TTGtable_'+place+'_96').show();
        $('#TTGtable_'+place+'_97').show();
        $('#TTGtable_'+place+'_98').show();
        $('#TTGtable_'+place+'_99').show();
    });
}

function tableunlockst2 (place) {
    document.getElementById("table_"+place+"_st").style.width = "242px";
    document.getElementById("table_"+place+"_st").style.height = "234px";
    document.getElementById("table_"+place+"_st").style.marginLeft = "-121px";
    
    $(document).ready(function(){
        $('#STtable_'+place+'_o04').show();
        $('#STtable_'+place+'_0104').show();
        $('#STtable_'+place+'_0204').show();
        $('#STtable_'+place+'_0304').show();
        
        $('#STtable_'+place+'_o05').show();
        $('#STtable_'+place+'_0105').show();
        $('#STtable_'+place+'_0205').show();
        $('#STtable_'+place+'_0305').show();
        
        $('#STtable_'+place+'_o06').show();
        $('#STtable_'+place+'_0106').show();
        $('#STtable_'+place+'_0206').show();
        $('#STtable_'+place+'_0306').show();
        
        $('#STtable_'+place+'_o07').show();
        $('#STtable_'+place+'_0107').show();
        $('#STtable_'+place+'_0207').show();
        $('#STtable_'+place+'_0307').show();
        
        $('#STtable_'+place+'_y04').show();
        $('#STtable_'+place+'_0401').show();
        $('#STtable_'+place+'_0402').show();
        $('#STtable_'+place+'_0403').show();
        $('#STtable_'+place+'_0404').show();
        $('#STtable_'+place+'_0405').show();
        $('#STtable_'+place+'_0406').show();
        $('#STtable_'+place+'_0407').show();
        
        $('#STtable_'+place+'_y05').show();
        $('#STtable_'+place+'_0501').show();
        $('#STtable_'+place+'_0502').show();
        $('#STtable_'+place+'_0503').show();
        $('#STtable_'+place+'_0504').show();
        $('#STtable_'+place+'_0505').show();
        $('#STtable_'+place+'_0506').show();
        $('#STtable_'+place+'_0507').show();
        
        $('#STtable_'+place+'_y06').show();
        $('#STtable_'+place+'_0601').show();
        $('#STtable_'+place+'_0602').show();
        $('#STtable_'+place+'_0603').show();
        $('#STtable_'+place+'_0604').show();
        $('#STtable_'+place+'_0605').show();
        $('#STtable_'+place+'_0606').show();
        $('#STtable_'+place+'_0607').show();
        
        $('#STtable_'+place+'_y07').show();
        $('#STtable_'+place+'_0701').show();
        $('#STtable_'+place+'_0702').show();
        $('#STtable_'+place+'_0703').show();
        $('#STtable_'+place+'_0704').show();
        $('#STtable_'+place+'_0705').show();
        $('#STtable_'+place+'_0706').show();
        $('#STtable_'+place+'_0707').show();        
    });
}

function tableunlockst3 (place) {
    document.getElementById("table_"+place+"_st").style.width = "305.75px";
    document.getElementById("table_"+place+"_st").style.height = "297.75px";
    document.getElementById("table_"+place+"_st").style.marginLeft = "-152.875px";
    
    $(document).ready(function(){
        $('#STtable_'+place+'_o08').show();
        $('#STtable_'+place+'_0108').show();
        $('#STtable_'+place+'_0208').show();
        $('#STtable_'+place+'_0308').show();
        $('#STtable_'+place+'_0408').show();
        $('#STtable_'+place+'_0508').show();
        $('#STtable_'+place+'_0608').show();
        $('#STtable_'+place+'_0708').show();
        
        $('#STtable_'+place+'_o09').show();
        $('#STtable_'+place+'_0109').show();
        $('#STtable_'+place+'_0209').show();
        $('#STtable_'+place+'_0309').show();
        $('#STtable_'+place+'_0409').show();
        $('#STtable_'+place+'_0509').show();
        $('#STtable_'+place+'_0609').show();
        $('#STtable_'+place+'_0709').show();
        
        $('#STtable_'+place+'_o10').show();
        $('#STtable_'+place+'_0110').show();
        $('#STtable_'+place+'_0210').show();
        $('#STtable_'+place+'_0310').show();
        $('#STtable_'+place+'_0410').show();
        $('#STtable_'+place+'_0510').show();
        $('#STtable_'+place+'_0610').show();
        $('#STtable_'+place+'_0710').show();
        
        $('#STtable_'+place+'_y08').show();
        $('#STtable_'+place+'_0801').show();
        $('#STtable_'+place+'_0802').show();
        $('#STtable_'+place+'_0803').show();
        $('#STtable_'+place+'_0804').show();
        $('#STtable_'+place+'_0805').show();
        $('#STtable_'+place+'_0806').show();
        $('#STtable_'+place+'_0807').show();
        $('#STtable_'+place+'_0808').show();
        $('#STtable_'+place+'_0809').show();
        $('#STtable_'+place+'_0810').show();
        
        $('#STtable_'+place+'_y09').show();
        $('#STtable_'+place+'_0901').show();
        $('#STtable_'+place+'_0902').show();
        $('#STtable_'+place+'_0903').show();
        $('#STtable_'+place+'_0904').show();
        $('#STtable_'+place+'_0905').show();
        $('#STtable_'+place+'_0906').show();
        $('#STtable_'+place+'_0907').show();
        $('#STtable_'+place+'_0908').show();
        $('#STtable_'+place+'_0909').show();
        $('#STtable_'+place+'_0910').show();
        
        $('#STtable_'+place+'_y10').show();
        $('#STtable_'+place+'_1001').show();
        $('#STtable_'+place+'_1002').show();
        $('#STtable_'+place+'_1003').show();
        $('#STtable_'+place+'_1004').show();
        $('#STtable_'+place+'_1005').show();
        $('#STtable_'+place+'_1006').show();
        $('#STtable_'+place+'_1007').show();
        $('#STtable_'+place+'_1008').show();
        $('#STtable_'+place+'_1009').show();
        $('#STtable_'+place+'_1010').show();        
    });
}

function tableunlockst4 (place) {
    document.getElementById("table_"+place+"_st").style.width = "348.25px";
    document.getElementById("table_"+place+"_st").style.height = "340.25px";
    document.getElementById("table_"+place+"_st").style.marginLeft = "-174.125px";
    
    $(document).ready(function(){
        $('#STtable_'+place+'_o11').show();
        $('#STtable_'+place+'_0111').show();
        $('#STtable_'+place+'_0211').show();
        $('#STtable_'+place+'_0311').show();
        $('#STtable_'+place+'_0411').show();
        $('#STtable_'+place+'_0511').show();
        $('#STtable_'+place+'_0611').show();
        $('#STtable_'+place+'_0711').show();
        $('#STtable_'+place+'_0811').show();
        $('#STtable_'+place+'_0911').show();
        $('#STtable_'+place+'_1011').show();
        
        $('#STtable_'+place+'_o12').show();
        $('#STtable_'+place+'_0112').show();
        $('#STtable_'+place+'_0212').show();
        $('#STtable_'+place+'_0312').show();
        $('#STtable_'+place+'_0412').show();
        $('#STtable_'+place+'_0512').show();
        $('#STtable_'+place+'_0612').show();
        $('#STtable_'+place+'_0712').show();
        $('#STtable_'+place+'_0812').show();
        $('#STtable_'+place+'_0912').show();
        $('#STtable_'+place+'_1012').show();
        
        $('#STtable_'+place+'_y11').show();
        $('#STtable_'+place+'_1101').show();
        $('#STtable_'+place+'_1102').show();
        $('#STtable_'+place+'_1103').show();
        $('#STtable_'+place+'_1104').show();
        $('#STtable_'+place+'_1105').show();
        $('#STtable_'+place+'_1106').show();
        $('#STtable_'+place+'_1107').show();
        $('#STtable_'+place+'_1108').show();
        $('#STtable_'+place+'_1109').show();
        $('#STtable_'+place+'_1110').show();
        $('#STtable_'+place+'_1111').show();
        $('#STtable_'+place+'_1112').show();
        
        $('#STtable_'+place+'_y12').show();
        $('#STtable_'+place+'_1201').show();
        $('#STtable_'+place+'_1202').show();
        $('#STtable_'+place+'_1203').show();
        $('#STtable_'+place+'_1204').show();
        $('#STtable_'+place+'_1205').show();
        $('#STtable_'+place+'_1206').show();
        $('#STtable_'+place+'_1207').show();
        $('#STtable_'+place+'_1208').show();
        $('#STtable_'+place+'_1209').show();
        $('#STtable_'+place+'_1210').show();
        $('#STtable_'+place+'_1211').show();
        $('#STtable_'+place+'_1212').show();       
    });
}

function tableunlockst5 (place) {
    document.getElementById("table_"+place+"_st").style.width = "390.75px";
    document.getElementById("table_"+place+"_st").style.height = "382.75px";
    document.getElementById("table_"+place+"_st").style.marginLeft = "-195.375px";
    
    $(document).ready(function(){
        $('#STtable_'+place+'_o13').show();
        $('#STtable_'+place+'_0113').show();
        $('#STtable_'+place+'_0213').show();
        $('#STtable_'+place+'_0313').show();
        $('#STtable_'+place+'_0413').show();
        $('#STtable_'+place+'_0513').show();
        $('#STtable_'+place+'_0613').show();
        $('#STtable_'+place+'_0713').show();
        $('#STtable_'+place+'_0813').show();
        $('#STtable_'+place+'_0913').show();
        $('#STtable_'+place+'_1013').show();
        $('#STtable_'+place+'_1113').show();
        $('#STtable_'+place+'_1213').show();
        
        $('#STtable_'+place+'_o14').show();
        $('#STtable_'+place+'_0114').show();
        $('#STtable_'+place+'_0214').show();
        $('#STtable_'+place+'_0314').show();
        $('#STtable_'+place+'_0414').show();
        $('#STtable_'+place+'_0514').show();
        $('#STtable_'+place+'_0614').show();
        $('#STtable_'+place+'_0714').show();
        $('#STtable_'+place+'_0814').show();
        $('#STtable_'+place+'_0914').show();
        $('#STtable_'+place+'_1014').show();
        $('#STtable_'+place+'_1114').show();
        $('#STtable_'+place+'_1214').show();
        
        $('#STtable_'+place+'_y13').show();
        $('#STtable_'+place+'_1301').show();
        $('#STtable_'+place+'_1302').show();
        $('#STtable_'+place+'_1303').show();
        $('#STtable_'+place+'_1304').show();
        $('#STtable_'+place+'_1305').show();
        $('#STtable_'+place+'_1306').show();
        $('#STtable_'+place+'_1307').show();
        $('#STtable_'+place+'_1308').show();
        $('#STtable_'+place+'_1309').show();
        $('#STtable_'+place+'_1310').show();
        $('#STtable_'+place+'_1311').show();
        $('#STtable_'+place+'_1312').show();
        $('#STtable_'+place+'_1313').show();
        $('#STtable_'+place+'_1314').show();
        
        $('#STtable_'+place+'_y14').show();
        $('#STtable_'+place+'_1401').show();
        $('#STtable_'+place+'_1402').show();
        $('#STtable_'+place+'_1403').show();
        $('#STtable_'+place+'_1404').show();
        $('#STtable_'+place+'_1405').show();
        $('#STtable_'+place+'_1406').show();
        $('#STtable_'+place+'_1407').show();
        $('#STtable_'+place+'_1408').show();
        $('#STtable_'+place+'_1409').show();
        $('#STtable_'+place+'_1410').show();
        $('#STtable_'+place+'_1411').show();
        $('#STtable_'+place+'_1412').show();
        $('#STtable_'+place+'_1413').show();
        $('#STtable_'+place+'_1414').show();       
    });
}

function tableunlockst6 (place) {
    document.getElementById("table_"+place+"_st").style.width = "433.2px"; 
    document.getElementById("table_"+place+"_st").style.height = "426px";
    
    $(document).ready(function(){
        $('#STtable_'+place+'_o15').show();
        $('#STtable_'+place+'_0115').show();
        $('#STtable_'+place+'_0215').show();
        $('#STtable_'+place+'_0315').show();
        $('#STtable_'+place+'_0415').show();
        $('#STtable_'+place+'_0515').show();
        $('#STtable_'+place+'_0615').show();
        $('#STtable_'+place+'_0715').show();
        $('#STtable_'+place+'_0815').show();
        $('#STtable_'+place+'_0915').show();
        $('#STtable_'+place+'_1015').show();
        $('#STtable_'+place+'_1115').show();
        $('#STtable_'+place+'_1215').show();
        $('#STtable_'+place+'_1315').show();
        $('#STtable_'+place+'_1415').show();
        
        $('#STtable_'+place+'_o16').show();
        $('#STtable_'+place+'_0116').show();
        $('#STtable_'+place+'_0216').show();
        $('#STtable_'+place+'_0316').show();
        $('#STtable_'+place+'_0416').show();
        $('#STtable_'+place+'_0516').show();
        $('#STtable_'+place+'_0616').show();
        $('#STtable_'+place+'_0716').show();
        $('#STtable_'+place+'_0816').show();
        $('#STtable_'+place+'_0916').show();
        $('#STtable_'+place+'_1016').show();
        $('#STtable_'+place+'_1116').show();
        $('#STtable_'+place+'_1216').show();
        $('#STtable_'+place+'_1316').show();
        $('#STtable_'+place+'_1416').show();
        
        $('#STtable_'+place+'_y15').show();
        $('#STtable_'+place+'_1501').show();
        $('#STtable_'+place+'_1502').show();
        $('#STtable_'+place+'_1503').show();
        $('#STtable_'+place+'_1504').show();
        $('#STtable_'+place+'_1505').show();
        $('#STtable_'+place+'_1506').show();
        $('#STtable_'+place+'_1507').show();
        $('#STtable_'+place+'_1508').show();
        $('#STtable_'+place+'_1509').show();
        $('#STtable_'+place+'_1510').show();
        $('#STtable_'+place+'_1511').show();
        $('#STtable_'+place+'_1512').show();
        $('#STtable_'+place+'_1513').show();
        $('#STtable_'+place+'_1514').show();
        $('#STtable_'+place+'_1515').show();
        $('#STtable_'+place+'_1516').show();
        
        $('#STtable_'+place+'_y16').show();
        $('#STtable_'+place+'_1601').show();
        $('#STtable_'+place+'_1602').show();
        $('#STtable_'+place+'_1603').show();
        $('#STtable_'+place+'_1604').show();
        $('#STtable_'+place+'_1605').show();
        $('#STtable_'+place+'_1606').show();
        $('#STtable_'+place+'_1607').show();
        $('#STtable_'+place+'_1608').show();
        $('#STtable_'+place+'_1609').show();
        $('#STtable_'+place+'_1610').show();
        $('#STtable_'+place+'_1611').show();
        $('#STtable_'+place+'_1612').show();
        $('#STtable_'+place+'_1613').show();
        $('#STtable_'+place+'_1614').show(); 
        $('#STtable_'+place+'_1615').show();
        $('#STtable_'+place+'_1616').show();       
    });
}

function tablevalues(place) {
    document.getElementById("TTGtable_"+place+"_y1").innerHTML = table_ttg._y1;
    document.getElementById("TTGtable_"+place+"_y2").innerHTML = table_ttg._y2;
    document.getElementById("TTGtable_"+place+"_y3").innerHTML = table_ttg._y3;
    document.getElementById("TTGtable_"+place+"_y4").innerHTML = table_ttg._y4;
    document.getElementById("TTGtable_"+place+"_y5").innerHTML = table_ttg._y5;
    document.getElementById("TTGtable_"+place+"_y6").innerHTML = table_ttg._y6;
    document.getElementById("TTGtable_"+place+"_y7").innerHTML = table_ttg._y7;
    document.getElementById("TTGtable_"+place+"_y8").innerHTML = table_ttg._y8;    
    document.getElementById("TTGtable_"+place+"_y9").innerHTML = table_ttg._y9;
    document.getElementById("TTGtable_"+place+"_o1").innerHTML = table_ttg._o1;
    document.getElementById("TTGtable_"+place+"_o2").innerHTML = table_ttg._o2;
    document.getElementById("TTGtable_"+place+"_o3").innerHTML = table_ttg._o3;
    document.getElementById("TTGtable_"+place+"_o4").innerHTML = table_ttg._o4;
    document.getElementById("TTGtable_"+place+"_o5").innerHTML = table_ttg._o5;
    document.getElementById("TTGtable_"+place+"_o6").innerHTML = table_ttg._o6;
    document.getElementById("TTGtable_"+place+"_o7").innerHTML = table_ttg._o7;
    document.getElementById("TTGtable_"+place+"_o8").innerHTML = table_ttg._o8;
    document.getElementById("TTGtable_"+place+"_o9").innerHTML = table_ttg._o9;
    document.getElementById("TTGtable_"+place+"_11").innerHTML = table_ttg._11;
    document.getElementById("TTGtable_"+place+"_12").innerHTML = table_ttg._12;
    document.getElementById("TTGtable_"+place+"_13").innerHTML = table_ttg._13;
    document.getElementById("TTGtable_"+place+"_14").innerHTML = table_ttg._14;
    document.getElementById("TTGtable_"+place+"_15").innerHTML = table_ttg._15;
    document.getElementById("TTGtable_"+place+"_16").innerHTML = table_ttg._16;
    document.getElementById("TTGtable_"+place+"_17").innerHTML = table_ttg._17;
    document.getElementById("TTGtable_"+place+"_18").innerHTML = table_ttg._18;
    document.getElementById("TTGtable_"+place+"_19").innerHTML = table_ttg._19;
    document.getElementById("TTGtable_"+place+"_21").innerHTML = table_ttg._21;
    document.getElementById("TTGtable_"+place+"_22").innerHTML = table_ttg._22;
    document.getElementById("TTGtable_"+place+"_23").innerHTML = table_ttg._23;
    document.getElementById("TTGtable_"+place+"_24").innerHTML = table_ttg._24;
    document.getElementById("TTGtable_"+place+"_25").innerHTML = table_ttg._25;
    document.getElementById("TTGtable_"+place+"_26").innerHTML = table_ttg._26;
    document.getElementById("TTGtable_"+place+"_27").innerHTML = table_ttg._27;
    document.getElementById("TTGtable_"+place+"_28").innerHTML = table_ttg._28;
    document.getElementById("TTGtable_"+place+"_29").innerHTML = table_ttg._29;
    document.getElementById("TTGtable_"+place+"_31").innerHTML = table_ttg._31;
    document.getElementById("TTGtable_"+place+"_32").innerHTML = table_ttg._32;
    document.getElementById("TTGtable_"+place+"_33").innerHTML = table_ttg._33;
    document.getElementById("TTGtable_"+place+"_34").innerHTML = table_ttg._34;
    document.getElementById("TTGtable_"+place+"_35").innerHTML = table_ttg._35;
    document.getElementById("TTGtable_"+place+"_36").innerHTML = table_ttg._36;
    document.getElementById("TTGtable_"+place+"_37").innerHTML = table_ttg._37;
    document.getElementById("TTGtable_"+place+"_38").innerHTML = table_ttg._38;
    document.getElementById("TTGtable_"+place+"_39").innerHTML = table_ttg._39;
    document.getElementById("TTGtable_"+place+"_41").innerHTML = table_ttg._41;
    document.getElementById("TTGtable_"+place+"_42").innerHTML = table_ttg._42;
    document.getElementById("TTGtable_"+place+"_43").innerHTML = table_ttg._43;
    document.getElementById("TTGtable_"+place+"_44").innerHTML = table_ttg._44;
    document.getElementById("TTGtable_"+place+"_45").innerHTML = table_ttg._45;
    document.getElementById("TTGtable_"+place+"_46").innerHTML = table_ttg._46;
    document.getElementById("TTGtable_"+place+"_47").innerHTML = table_ttg._47;
    document.getElementById("TTGtable_"+place+"_48").innerHTML = table_ttg._48;
    document.getElementById("TTGtable_"+place+"_49").innerHTML = table_ttg._49;
    document.getElementById("TTGtable_"+place+"_51").innerHTML = table_ttg._51;
    document.getElementById("TTGtable_"+place+"_52").innerHTML = table_ttg._52;
    document.getElementById("TTGtable_"+place+"_53").innerHTML = table_ttg._53;
    document.getElementById("TTGtable_"+place+"_54").innerHTML = table_ttg._54;
    document.getElementById("TTGtable_"+place+"_55").innerHTML = table_ttg._55;
    document.getElementById("TTGtable_"+place+"_56").innerHTML = table_ttg._56;
    document.getElementById("TTGtable_"+place+"_57").innerHTML = table_ttg._57;
    document.getElementById("TTGtable_"+place+"_58").innerHTML = table_ttg._58;
    document.getElementById("TTGtable_"+place+"_59").innerHTML = table_ttg._59;
    document.getElementById("TTGtable_"+place+"_61").innerHTML = table_ttg._61;
    document.getElementById("TTGtable_"+place+"_62").innerHTML = table_ttg._62;
    document.getElementById("TTGtable_"+place+"_63").innerHTML = table_ttg._63;
    document.getElementById("TTGtable_"+place+"_64").innerHTML = table_ttg._64;
    document.getElementById("TTGtable_"+place+"_65").innerHTML = table_ttg._65;
    document.getElementById("TTGtable_"+place+"_66").innerHTML = table_ttg._66;
    document.getElementById("TTGtable_"+place+"_67").innerHTML = table_ttg._67;
    document.getElementById("TTGtable_"+place+"_68").innerHTML = table_ttg._68;
    document.getElementById("TTGtable_"+place+"_69").innerHTML = table_ttg._69;
    document.getElementById("TTGtable_"+place+"_71").innerHTML = table_ttg._71;
    document.getElementById("TTGtable_"+place+"_72").innerHTML = table_ttg._72;
    document.getElementById("TTGtable_"+place+"_73").innerHTML = table_ttg._73;
    document.getElementById("TTGtable_"+place+"_74").innerHTML = table_ttg._74;
    document.getElementById("TTGtable_"+place+"_75").innerHTML = table_ttg._75;
    document.getElementById("TTGtable_"+place+"_76").innerHTML = table_ttg._76;
    document.getElementById("TTGtable_"+place+"_77").innerHTML = table_ttg._77;
    document.getElementById("TTGtable_"+place+"_78").innerHTML = table_ttg._78;
    document.getElementById("TTGtable_"+place+"_79").innerHTML = table_ttg._79;
    document.getElementById("TTGtable_"+place+"_81").innerHTML = table_ttg._81;
    document.getElementById("TTGtable_"+place+"_82").innerHTML = table_ttg._82;
    document.getElementById("TTGtable_"+place+"_83").innerHTML = table_ttg._83;
    document.getElementById("TTGtable_"+place+"_84").innerHTML = table_ttg._84;
    document.getElementById("TTGtable_"+place+"_85").innerHTML = table_ttg._85;
    document.getElementById("TTGtable_"+place+"_86").innerHTML = table_ttg._86;
    document.getElementById("TTGtable_"+place+"_87").innerHTML = table_ttg._87;
    document.getElementById("TTGtable_"+place+"_88").innerHTML = table_ttg._88;
    document.getElementById("TTGtable_"+place+"_89").innerHTML = table_ttg._89;
    document.getElementById("TTGtable_"+place+"_91").innerHTML = table_ttg._91;
    document.getElementById("TTGtable_"+place+"_92").innerHTML = table_ttg._92;
    document.getElementById("TTGtable_"+place+"_93").innerHTML = table_ttg._93;
    document.getElementById("TTGtable_"+place+"_94").innerHTML = table_ttg._94;
    document.getElementById("TTGtable_"+place+"_95").innerHTML = table_ttg._95;
    document.getElementById("TTGtable_"+place+"_96").innerHTML = table_ttg._96;
    document.getElementById("TTGtable_"+place+"_97").innerHTML = table_ttg._97;
    document.getElementById("TTGtable_"+place+"_98").innerHTML = table_ttg._98;
    document.getElementById("TTGtable_"+place+"_99").innerHTML = table_ttg._99;
    
    document.getElementById("STtable_"+place+"_y01").innerHTML = table_st._y01;
    document.getElementById("STtable_"+place+"_y02").innerHTML = table_st._y02;
    document.getElementById("STtable_"+place+"_y03").innerHTML = table_st._y03;
    document.getElementById("STtable_"+place+"_y04").innerHTML = table_st._y04;
    document.getElementById("STtable_"+place+"_y05").innerHTML = table_st._y05;
    document.getElementById("STtable_"+place+"_y06").innerHTML = table_st._y06;
    document.getElementById("STtable_"+place+"_y07").innerHTML = table_st._y07;
    document.getElementById("STtable_"+place+"_y08").innerHTML = table_st._y08;    
    document.getElementById("STtable_"+place+"_y09").innerHTML = table_st._y09;   
    document.getElementById("STtable_"+place+"_y10").innerHTML = table_st._y10;   
    document.getElementById("STtable_"+place+"_y11").innerHTML = table_st._y11;   
    document.getElementById("STtable_"+place+"_y12").innerHTML = table_st._y12;   
    document.getElementById("STtable_"+place+"_y13").innerHTML = table_st._y13;   
    document.getElementById("STtable_"+place+"_y14").innerHTML = table_st._y14;   
    document.getElementById("STtable_"+place+"_y15").innerHTML = table_st._y15;   
    document.getElementById("STtable_"+place+"_y16").innerHTML = table_st._y16;
    document.getElementById("STtable_"+place+"_o01").innerHTML = table_st._o01;
    document.getElementById("STtable_"+place+"_o02").innerHTML = table_st._o02;
    document.getElementById("STtable_"+place+"_o03").innerHTML = table_st._o03;
    document.getElementById("STtable_"+place+"_o04").innerHTML = table_st._o04;
    document.getElementById("STtable_"+place+"_o05").innerHTML = table_st._o05;
    document.getElementById("STtable_"+place+"_o06").innerHTML = table_st._o06;
    document.getElementById("STtable_"+place+"_o07").innerHTML = table_st._o07;
    document.getElementById("STtable_"+place+"_o08").innerHTML = table_st._o08;
    document.getElementById("STtable_"+place+"_o09").innerHTML = table_st._o09;   
    document.getElementById("STtable_"+place+"_o10").innerHTML = table_st._o10;   
    document.getElementById("STtable_"+place+"_o11").innerHTML = table_st._o11;   
    document.getElementById("STtable_"+place+"_o12").innerHTML = table_st._o12;   
    document.getElementById("STtable_"+place+"_o13").innerHTML = table_st._o13;   
    document.getElementById("STtable_"+place+"_o14").innerHTML = table_st._o14;   
    document.getElementById("STtable_"+place+"_o15").innerHTML = table_st._o15;   
    document.getElementById("STtable_"+place+"_o16").innerHTML = table_st._o16;
    document.getElementById("STtable_"+place+"_0101").innerHTML = table_st._0101;
    document.getElementById("STtable_"+place+"_0102").innerHTML = table_st._0102;
    document.getElementById("STtable_"+place+"_0103").innerHTML = table_st._0103;
    document.getElementById("STtable_"+place+"_0104").innerHTML = table_st._0104;
    document.getElementById("STtable_"+place+"_0105").innerHTML = table_st._0105;
    document.getElementById("STtable_"+place+"_0106").innerHTML = table_st._0106;
    document.getElementById("STtable_"+place+"_0107").innerHTML = table_st._0107;
    document.getElementById("STtable_"+place+"_0108").innerHTML = table_st._0108;
    document.getElementById("STtable_"+place+"_0109").innerHTML = table_st._0109;
    document.getElementById("STtable_"+place+"_0110").innerHTML = table_st._0110;
    document.getElementById("STtable_"+place+"_0111").innerHTML = table_st._0111;
    document.getElementById("STtable_"+place+"_0112").innerHTML = table_st._0112;
    document.getElementById("STtable_"+place+"_0113").innerHTML = table_st._0113;
    document.getElementById("STtable_"+place+"_0114").innerHTML = table_st._0114;
    document.getElementById("STtable_"+place+"_0115").innerHTML = table_st._0115;
    document.getElementById("STtable_"+place+"_0116").innerHTML = table_st._0116;
    document.getElementById("STtable_"+place+"_0201").innerHTML = table_st._0201;
    document.getElementById("STtable_"+place+"_0202").innerHTML = table_st._0202;
    document.getElementById("STtable_"+place+"_0203").innerHTML = table_st._0203;
    document.getElementById("STtable_"+place+"_0204").innerHTML = table_st._0204;
    document.getElementById("STtable_"+place+"_0205").innerHTML = table_st._0205;
    document.getElementById("STtable_"+place+"_0206").innerHTML = table_st._0206;
    document.getElementById("STtable_"+place+"_0207").innerHTML = table_st._0207;
    document.getElementById("STtable_"+place+"_0208").innerHTML = table_st._0208;
    document.getElementById("STtable_"+place+"_0209").innerHTML = table_st._0209;
    document.getElementById("STtable_"+place+"_0210").innerHTML = table_st._0210;
    document.getElementById("STtable_"+place+"_0211").innerHTML = table_st._0211;
    document.getElementById("STtable_"+place+"_0212").innerHTML = table_st._0212;
    document.getElementById("STtable_"+place+"_0213").innerHTML = table_st._0213;
    document.getElementById("STtable_"+place+"_0214").innerHTML = table_st._0214;
    document.getElementById("STtable_"+place+"_0215").innerHTML = table_st._0215;
    document.getElementById("STtable_"+place+"_0216").innerHTML = table_st._0216;
    document.getElementById("STtable_"+place+"_0301").innerHTML = table_st._0301;
    document.getElementById("STtable_"+place+"_0302").innerHTML = table_st._0302;
    document.getElementById("STtable_"+place+"_0303").innerHTML = table_st._0303;
    document.getElementById("STtable_"+place+"_0304").innerHTML = table_st._0304;
    document.getElementById("STtable_"+place+"_0305").innerHTML = table_st._0305;
    document.getElementById("STtable_"+place+"_0306").innerHTML = table_st._0306;
    document.getElementById("STtable_"+place+"_0307").innerHTML = table_st._0307;
    document.getElementById("STtable_"+place+"_0308").innerHTML = table_st._0308;
    document.getElementById("STtable_"+place+"_0309").innerHTML = table_st._0309;
    document.getElementById("STtable_"+place+"_0310").innerHTML = table_st._0310;
    document.getElementById("STtable_"+place+"_0311").innerHTML = table_st._0311;
    document.getElementById("STtable_"+place+"_0312").innerHTML = table_st._0312;
    document.getElementById("STtable_"+place+"_0313").innerHTML = table_st._0313;
    document.getElementById("STtable_"+place+"_0314").innerHTML = table_st._0314;
    document.getElementById("STtable_"+place+"_0315").innerHTML = table_st._0315;
    document.getElementById("STtable_"+place+"_0316").innerHTML = table_st._0316;
    document.getElementById("STtable_"+place+"_0401").innerHTML = table_st._0401;
    document.getElementById("STtable_"+place+"_0402").innerHTML = table_st._0402;
    document.getElementById("STtable_"+place+"_0403").innerHTML = table_st._0403;
    document.getElementById("STtable_"+place+"_0404").innerHTML = table_st._0404;
    document.getElementById("STtable_"+place+"_0405").innerHTML = table_st._0405;
    document.getElementById("STtable_"+place+"_0406").innerHTML = table_st._0406;
    document.getElementById("STtable_"+place+"_0407").innerHTML = table_st._0407;
    document.getElementById("STtable_"+place+"_0408").innerHTML = table_st._0408;
    document.getElementById("STtable_"+place+"_0409").innerHTML = table_st._0409;
    document.getElementById("STtable_"+place+"_0410").innerHTML = table_st._0410;
    document.getElementById("STtable_"+place+"_0411").innerHTML = table_st._0411;
    document.getElementById("STtable_"+place+"_0412").innerHTML = table_st._0412;
    document.getElementById("STtable_"+place+"_0413").innerHTML = table_st._0413;
    document.getElementById("STtable_"+place+"_0414").innerHTML = table_st._0414;
    document.getElementById("STtable_"+place+"_0415").innerHTML = table_st._0415;
    document.getElementById("STtable_"+place+"_0416").innerHTML = table_st._0416;
    document.getElementById("STtable_"+place+"_0501").innerHTML = table_st._0501;
    document.getElementById("STtable_"+place+"_0502").innerHTML = table_st._0502;
    document.getElementById("STtable_"+place+"_0503").innerHTML = table_st._0503;
    document.getElementById("STtable_"+place+"_0504").innerHTML = table_st._0504;
    document.getElementById("STtable_"+place+"_0505").innerHTML = table_st._0505;
    document.getElementById("STtable_"+place+"_0506").innerHTML = table_st._0506;
    document.getElementById("STtable_"+place+"_0507").innerHTML = table_st._0507;
    document.getElementById("STtable_"+place+"_0508").innerHTML = table_st._0508;
    document.getElementById("STtable_"+place+"_0509").innerHTML = table_st._0509;
    document.getElementById("STtable_"+place+"_0510").innerHTML = table_st._0510;
    document.getElementById("STtable_"+place+"_0511").innerHTML = table_st._0511;
    document.getElementById("STtable_"+place+"_0512").innerHTML = table_st._0512;
    document.getElementById("STtable_"+place+"_0513").innerHTML = table_st._0513;
    document.getElementById("STtable_"+place+"_0514").innerHTML = table_st._0514;
    document.getElementById("STtable_"+place+"_0515").innerHTML = table_st._0515;
    document.getElementById("STtable_"+place+"_0516").innerHTML = table_st._0516;
    document.getElementById("STtable_"+place+"_0601").innerHTML = table_st._0601;
    document.getElementById("STtable_"+place+"_0602").innerHTML = table_st._0602;
    document.getElementById("STtable_"+place+"_0603").innerHTML = table_st._0603;
    document.getElementById("STtable_"+place+"_0604").innerHTML = table_st._0604;
    document.getElementById("STtable_"+place+"_0605").innerHTML = table_st._0605;
    document.getElementById("STtable_"+place+"_0606").innerHTML = table_st._0606;
    document.getElementById("STtable_"+place+"_0607").innerHTML = table_st._0607;
    document.getElementById("STtable_"+place+"_0608").innerHTML = table_st._0608;
    document.getElementById("STtable_"+place+"_0609").innerHTML = table_st._0609;
    document.getElementById("STtable_"+place+"_0610").innerHTML = table_st._0610;
    document.getElementById("STtable_"+place+"_0611").innerHTML = table_st._0611;
    document.getElementById("STtable_"+place+"_0612").innerHTML = table_st._0612;
    document.getElementById("STtable_"+place+"_0613").innerHTML = table_st._0613;
    document.getElementById("STtable_"+place+"_0614").innerHTML = table_st._0614;
    document.getElementById("STtable_"+place+"_0615").innerHTML = table_st._0615;
    document.getElementById("STtable_"+place+"_0616").innerHTML = table_st._0616;
    document.getElementById("STtable_"+place+"_0701").innerHTML = table_st._0701;
    document.getElementById("STtable_"+place+"_0702").innerHTML = table_st._0702;
    document.getElementById("STtable_"+place+"_0703").innerHTML = table_st._0703;
    document.getElementById("STtable_"+place+"_0704").innerHTML = table_st._0704;
    document.getElementById("STtable_"+place+"_0705").innerHTML = table_st._0705;
    document.getElementById("STtable_"+place+"_0706").innerHTML = table_st._0706;
    document.getElementById("STtable_"+place+"_0707").innerHTML = table_st._0707;
    document.getElementById("STtable_"+place+"_0708").innerHTML = table_st._0708;
    document.getElementById("STtable_"+place+"_0709").innerHTML = table_st._0709;
    document.getElementById("STtable_"+place+"_0710").innerHTML = table_st._0710;
    document.getElementById("STtable_"+place+"_0711").innerHTML = table_st._0711;
    document.getElementById("STtable_"+place+"_0712").innerHTML = table_st._0712;
    document.getElementById("STtable_"+place+"_0713").innerHTML = table_st._0713;
    document.getElementById("STtable_"+place+"_0714").innerHTML = table_st._0714;
    document.getElementById("STtable_"+place+"_0715").innerHTML = table_st._0715;
    document.getElementById("STtable_"+place+"_0716").innerHTML = table_st._0716;
    document.getElementById("STtable_"+place+"_0801").innerHTML = table_st._0801;
    document.getElementById("STtable_"+place+"_0802").innerHTML = table_st._0802;
    document.getElementById("STtable_"+place+"_0803").innerHTML = table_st._0803;
    document.getElementById("STtable_"+place+"_0804").innerHTML = table_st._0804;
    document.getElementById("STtable_"+place+"_0805").innerHTML = table_st._0805;
    document.getElementById("STtable_"+place+"_0806").innerHTML = table_st._0806;
    document.getElementById("STtable_"+place+"_0807").innerHTML = table_st._0807;
    document.getElementById("STtable_"+place+"_0808").innerHTML = table_st._0808;
    document.getElementById("STtable_"+place+"_0809").innerHTML = table_st._0809;
    document.getElementById("STtable_"+place+"_0810").innerHTML = table_st._0810;
    document.getElementById("STtable_"+place+"_0811").innerHTML = table_st._0811;
    document.getElementById("STtable_"+place+"_0812").innerHTML = table_st._0812;
    document.getElementById("STtable_"+place+"_0813").innerHTML = table_st._0813;
    document.getElementById("STtable_"+place+"_0814").innerHTML = table_st._0814;
    document.getElementById("STtable_"+place+"_0815").innerHTML = table_st._0815;
    document.getElementById("STtable_"+place+"_0816").innerHTML = table_st._0816;
    document.getElementById("STtable_"+place+"_0901").innerHTML = table_st._0901;
    document.getElementById("STtable_"+place+"_0902").innerHTML = table_st._0902;
    document.getElementById("STtable_"+place+"_0903").innerHTML = table_st._0903;
    document.getElementById("STtable_"+place+"_0904").innerHTML = table_st._0904;
    document.getElementById("STtable_"+place+"_0905").innerHTML = table_st._0905;
    document.getElementById("STtable_"+place+"_0906").innerHTML = table_st._0906;
    document.getElementById("STtable_"+place+"_0907").innerHTML = table_st._0907;
    document.getElementById("STtable_"+place+"_0908").innerHTML = table_st._0908;
    document.getElementById("STtable_"+place+"_0909").innerHTML = table_st._0909;
    document.getElementById("STtable_"+place+"_0910").innerHTML = table_st._0910;
    document.getElementById("STtable_"+place+"_0911").innerHTML = table_st._0911;
    document.getElementById("STtable_"+place+"_0912").innerHTML = table_st._0912;
    document.getElementById("STtable_"+place+"_0913").innerHTML = table_st._0913;
    document.getElementById("STtable_"+place+"_0914").innerHTML = table_st._0914;
    document.getElementById("STtable_"+place+"_0915").innerHTML = table_st._0915;
    document.getElementById("STtable_"+place+"_0916").innerHTML = table_st._0916;
    document.getElementById("STtable_"+place+"_1001").innerHTML = table_st._1001;
    document.getElementById("STtable_"+place+"_1002").innerHTML = table_st._1002;
    document.getElementById("STtable_"+place+"_1003").innerHTML = table_st._1003;
    document.getElementById("STtable_"+place+"_1004").innerHTML = table_st._1004;
    document.getElementById("STtable_"+place+"_1005").innerHTML = table_st._1005;
    document.getElementById("STtable_"+place+"_1006").innerHTML = table_st._1006;
    document.getElementById("STtable_"+place+"_1007").innerHTML = table_st._1007;
    document.getElementById("STtable_"+place+"_1008").innerHTML = table_st._1008;
    document.getElementById("STtable_"+place+"_1009").innerHTML = table_st._1009;
    document.getElementById("STtable_"+place+"_1010").innerHTML = table_st._1010;
    document.getElementById("STtable_"+place+"_1011").innerHTML = table_st._1011;
    document.getElementById("STtable_"+place+"_1012").innerHTML = table_st._1012;
    document.getElementById("STtable_"+place+"_1013").innerHTML = table_st._1013;
    document.getElementById("STtable_"+place+"_1014").innerHTML = table_st._1014;
    document.getElementById("STtable_"+place+"_1015").innerHTML = table_st._1015;
    document.getElementById("STtable_"+place+"_1016").innerHTML = table_st._1016;
    document.getElementById("STtable_"+place+"_1101").innerHTML = table_st._1101;
    document.getElementById("STtable_"+place+"_1102").innerHTML = table_st._1102;
    document.getElementById("STtable_"+place+"_1103").innerHTML = table_st._1103;
    document.getElementById("STtable_"+place+"_1104").innerHTML = table_st._1104;
    document.getElementById("STtable_"+place+"_1105").innerHTML = table_st._1105;
    document.getElementById("STtable_"+place+"_1106").innerHTML = table_st._1106;
    document.getElementById("STtable_"+place+"_1107").innerHTML = table_st._1107;
    document.getElementById("STtable_"+place+"_1108").innerHTML = table_st._1108;
    document.getElementById("STtable_"+place+"_1109").innerHTML = table_st._1109;
    document.getElementById("STtable_"+place+"_1110").innerHTML = table_st._1110;
    document.getElementById("STtable_"+place+"_1111").innerHTML = table_st._1111;
    document.getElementById("STtable_"+place+"_1112").innerHTML = table_st._1112;
    document.getElementById("STtable_"+place+"_1113").innerHTML = table_st._1113;
    document.getElementById("STtable_"+place+"_1114").innerHTML = table_st._1114;
    document.getElementById("STtable_"+place+"_1115").innerHTML = table_st._1115;
    document.getElementById("STtable_"+place+"_1116").innerHTML = table_st._1116;
    document.getElementById("STtable_"+place+"_1201").innerHTML = table_st._1201;
    document.getElementById("STtable_"+place+"_1202").innerHTML = table_st._1202;
    document.getElementById("STtable_"+place+"_1203").innerHTML = table_st._1203;
    document.getElementById("STtable_"+place+"_1204").innerHTML = table_st._1204;
    document.getElementById("STtable_"+place+"_1205").innerHTML = table_st._1205;
    document.getElementById("STtable_"+place+"_1206").innerHTML = table_st._1206;
    document.getElementById("STtable_"+place+"_1207").innerHTML = table_st._1207;
    document.getElementById("STtable_"+place+"_1208").innerHTML = table_st._1208;
    document.getElementById("STtable_"+place+"_1209").innerHTML = table_st._1209;
    document.getElementById("STtable_"+place+"_1210").innerHTML = table_st._1210;
    document.getElementById("STtable_"+place+"_1211").innerHTML = table_st._1211;
    document.getElementById("STtable_"+place+"_1212").innerHTML = table_st._1212;
    document.getElementById("STtable_"+place+"_1213").innerHTML = table_st._1213;
    document.getElementById("STtable_"+place+"_1214").innerHTML = table_st._1214;
    document.getElementById("STtable_"+place+"_1215").innerHTML = table_st._1215;
    document.getElementById("STtable_"+place+"_1216").innerHTML = table_st._1216;
    document.getElementById("STtable_"+place+"_1301").innerHTML = table_st._1301;
    document.getElementById("STtable_"+place+"_1302").innerHTML = table_st._1302;
    document.getElementById("STtable_"+place+"_1303").innerHTML = table_st._1303;
    document.getElementById("STtable_"+place+"_1304").innerHTML = table_st._1304;
    document.getElementById("STtable_"+place+"_1305").innerHTML = table_st._1305;
    document.getElementById("STtable_"+place+"_1306").innerHTML = table_st._1306;
    document.getElementById("STtable_"+place+"_1307").innerHTML = table_st._1307;
    document.getElementById("STtable_"+place+"_1308").innerHTML = table_st._1308;
    document.getElementById("STtable_"+place+"_1309").innerHTML = table_st._1309;
    document.getElementById("STtable_"+place+"_1310").innerHTML = table_st._1310;
    document.getElementById("STtable_"+place+"_1311").innerHTML = table_st._1311;
    document.getElementById("STtable_"+place+"_1312").innerHTML = table_st._1312;
    document.getElementById("STtable_"+place+"_1313").innerHTML = table_st._1313;
    document.getElementById("STtable_"+place+"_1314").innerHTML = table_st._1314;
    document.getElementById("STtable_"+place+"_1315").innerHTML = table_st._1315;
    document.getElementById("STtable_"+place+"_1316").innerHTML = table_st._1316;
    document.getElementById("STtable_"+place+"_1401").innerHTML = table_st._1401;
    document.getElementById("STtable_"+place+"_1402").innerHTML = table_st._1402;
    document.getElementById("STtable_"+place+"_1403").innerHTML = table_st._1403;
    document.getElementById("STtable_"+place+"_1404").innerHTML = table_st._1404;
    document.getElementById("STtable_"+place+"_1405").innerHTML = table_st._1405;
    document.getElementById("STtable_"+place+"_1406").innerHTML = table_st._1406;
    document.getElementById("STtable_"+place+"_1407").innerHTML = table_st._1407;
    document.getElementById("STtable_"+place+"_1408").innerHTML = table_st._1408;
    document.getElementById("STtable_"+place+"_1409").innerHTML = table_st._1409;
    document.getElementById("STtable_"+place+"_1410").innerHTML = table_st._1410;
    document.getElementById("STtable_"+place+"_1411").innerHTML = table_st._1411;
    document.getElementById("STtable_"+place+"_1412").innerHTML = table_st._1412;
    document.getElementById("STtable_"+place+"_1413").innerHTML = table_st._1413;
    document.getElementById("STtable_"+place+"_1414").innerHTML = table_st._1414;
    document.getElementById("STtable_"+place+"_1415").innerHTML = table_st._1415;
    document.getElementById("STtable_"+place+"_1416").innerHTML = table_st._1416;
    document.getElementById("STtable_"+place+"_1501").innerHTML = table_st._1501;
    document.getElementById("STtable_"+place+"_1502").innerHTML = table_st._1502;
    document.getElementById("STtable_"+place+"_1503").innerHTML = table_st._1503;
    document.getElementById("STtable_"+place+"_1504").innerHTML = table_st._1504;
    document.getElementById("STtable_"+place+"_1505").innerHTML = table_st._1505;
    document.getElementById("STtable_"+place+"_1506").innerHTML = table_st._1506;
    document.getElementById("STtable_"+place+"_1507").innerHTML = table_st._1507;
    document.getElementById("STtable_"+place+"_1508").innerHTML = table_st._1508;
    document.getElementById("STtable_"+place+"_1509").innerHTML = table_st._1509;
    document.getElementById("STtable_"+place+"_1510").innerHTML = table_st._1510;
    document.getElementById("STtable_"+place+"_1511").innerHTML = table_st._1511;
    document.getElementById("STtable_"+place+"_1512").innerHTML = table_st._1512;
    document.getElementById("STtable_"+place+"_1513").innerHTML = table_st._1513;
    document.getElementById("STtable_"+place+"_1514").innerHTML = table_st._1514;
    document.getElementById("STtable_"+place+"_1515").innerHTML = table_st._1515;
    document.getElementById("STtable_"+place+"_1516").innerHTML = table_st._1516;
    document.getElementById("STtable_"+place+"_1601").innerHTML = table_st._1601;
    document.getElementById("STtable_"+place+"_1602").innerHTML = table_st._1602;
    document.getElementById("STtable_"+place+"_1603").innerHTML = table_st._1603;
    document.getElementById("STtable_"+place+"_1604").innerHTML = table_st._1604;
    document.getElementById("STtable_"+place+"_1605").innerHTML = table_st._1605;
    document.getElementById("STtable_"+place+"_1606").innerHTML = table_st._1606;
    document.getElementById("STtable_"+place+"_1607").innerHTML = table_st._1607;
    document.getElementById("STtable_"+place+"_1608").innerHTML = table_st._1608;
    document.getElementById("STtable_"+place+"_1609").innerHTML = table_st._1609;
    document.getElementById("STtable_"+place+"_1610").innerHTML = table_st._1610;
    document.getElementById("STtable_"+place+"_1611").innerHTML = table_st._1611;
    document.getElementById("STtable_"+place+"_1612").innerHTML = table_st._1612;
    document.getElementById("STtable_"+place+"_1613").innerHTML = table_st._1613;
    document.getElementById("STtable_"+place+"_1614").innerHTML = table_st._1614;
    document.getElementById("STtable_"+place+"_1615").innerHTML = table_st._1615;
    document.getElementById("STtable_"+place+"_1616").innerHTML = table_st._1616;
}

function task_unlock(number, taskunlock, Button) {
    if (taskunlock==1) {
        $(document).ready(function(){
            $('#T'+number+'').show();
        });
    } 
    if (taskunlock==2) {
        $(document).ready(function(){
            $('#T'+number+'').show();
        });
        document.getElementById("t"+number+"goal").innerText = "Get reward";
        document.getElementById("ButtonT"+number+"").style.cursor = "pointer";
        Button.className = "grey";
    } 
    if (taskunlock==3) {
        $(document).ready(function(){
            $('#T'+number+'').hide();
            $('#T'+number+'C').show();
        });
        document.getElementById("t"+number+"goal").innerText = "Completed";
        document.getElementById("ButtonT"+number+"").style.cursor = "auto";
        Button.className = "";
    }
}