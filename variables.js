var state = {
    zeitsave: 0,
    zeitjetzt: 0,
    zeitsincesave: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
    random_treetype: 0,
    random_treequality: 0,
    random_shiny: 0,
    random_nature: 0,
    random_contests: 0,
    newpotentialtotal: 0,
    potentialfoliage: 0,
    potentialbranches: 0,
    potentialtrunk: 0,
    potentialroots: 0,
    inheritedpotentialbase: 0,
    inheritedpotentialfactor: 0,
    obtainedpotentialbase: 0,
    obtainedpotentialfactor: 0,
    obtainedpotentialpre: 0,
    bonsai_showing: 0,
    bonsaislots: 12,
    workers_total: 1,
    workers_available: 1,
    seedlings: 0,
    seedlings_ontheway: 0,
    workerstandin: 0,
    areasunlocked: 1,
    areasresourceunlocked: 0,
    yourname: "-",
    youravatar: 0,
    yoursensei: 0,
    avatarpick: 0,
}

var statistics = {
    seedlings_total: 0,
    bloomingseedlings_total: 0,
    bonsais_total: 0,
    bloomingbonsais_total: 0,
    bondex_treetype_discovered: 0,
    bondex_bonsai01_discovered: 0,
    bondex_bonsai02_discovered: 0,
    bondex_bonsai03_discovered: 0,
    bondex_bonsai04_discovered: 0,
    bondex_bonsai05_discovered: 0,
    bondex_bonsai06_discovered: 0,
    bondex_bonsai07_discovered: 0,
    bondex_bonsai08_discovered: 0,
    bondex_bonsai09_discovered: 0,
    bondex_bonsai10_discovered: 0,
    bondex_bonsai11_discovered: 0,
    bondex_bonsai12_discovered: 0,
    bondex_bonsai13_discovered: 0,
    bondex_bonsai14_discovered: 0,
}

var resources = {
    money: 100,
    energy: 0.5,
    organic_waste: 0,
    compost1: 0,
    chemical: 0,
    fertilizer1: 0,
    wood: 20,
    glass: 20,
    bolt: 15,
    metal: 13,
    wire: 12,
    board: 1,
    cement: 0,
}

var equipment = {
    backpack: 0,
    labkit: 0,
    map_areares2: 0,
    map_area02: 0,
    book_of_patience1: 0,
    memory_chips1: 0,
    book_growing1: 0,
    book_shaping1: 0,
    book_robot1: 0,
    tools1: 0,
    book_styles1: 0,
    book_styles2: 0,
    buildingtools: 0,
}

var skills = {
    level: 0,
    exp_nextlevel: 20,
    skillpoints: 0,
    care: 1,
    treestyles1: 0,
    treestyles2: 0,
    robot1: 0,
    compost1: 0,
    fertilizer1: 0,
    growing: 0,
    shaping: 0,
    patience: 0,
    greenhouse1: 0,
    storage1: 0,
    storage2: 0,
    storage3: 0,
    area1up: 0,
    area2up: 0,
    areares1up: 0,
    areares2up: 0,
}

var storage = {
    wood: 25,
    wood_upgrading: 0,
    glass: 25,
    glass_upgrading: 0,
    bolt: 25,
    bolt_upgrading: 0,
    metal: 25,
    metal_upgrading: 0,
    wire: 25,
    wire_upgrading: 0,
    board: 25,
    board_upgrading: 0,
    organic_waste: 25,
    organic_waste_upgrading: 0,
    compost1: 25,
    compost1_upgrading: 0,
    chemical: 25,
    chemical_upgrading: 0,
    fertilizer1: 25,
    fertilizer1_upgrading: 0,
}

const skillexperience = [];
skillexperience[0]= 20;
skillexperience[1]= 24;
skillexperience[2]= 29;
skillexperience[3]= 35;
skillexperience[4]= 41;
skillexperience[5]= 50;
skillexperience[6]= 60;
skillexperience[7]= 72;
skillexperience[8]= 86;
skillexperience[9]= 103;
skillexperience[10]= 124;
skillexperience[11]= 149;
skillexperience[12]= 178;
skillexperience[13]= 214;
skillexperience[14]= 257;
skillexperience[15]= 308;
skillexperience[16]= 370;
skillexperience[17]= 444;
skillexperience[18]= 532;
skillexperience[19]= 639;

var clubs_leagues = {
    ttg01: 0,
    ttg01c1: 0,
    ttg01c2: 0,
    ttg01c3: 0,
    ttg02: 0,
    ttg03: 0,
    ttg04: 0,
    ttg05: 0,
    ttg06: 0,
    ttg07: 0,
    ttg08: 0,
    ttg09: 0,
    st01: 0,
    st02: 0,
    st03: 0,
    st04: 0,
    st05: 0,
    st06: 0,
    st07: 0,
    st08: 0,
    st09: 0,
    st10: 0,
    st11: 0,
    st12: 0,
    st13: 0,
    st14: 0,
    st15: 0,
    st16: 0,
    lea01: 0,
    lea01j1: 0,
    lea01j2: 0,
    lea01j3: 0,
    lea01c1: 0,
    lea01c2: 0,
    lea01c3: 0,
    lea02: 0,
    lea03: 0,
    lea04: 0,
    lea05: 0,
    lea06: 0,
    lea07: 0,
    lea08: 0,
    lea09: 0,
    lea10: 0,
}

var contests_bonsai_c1 = {
    avatar: 0,
    name: "-",
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    inheritedpotentialfoliage: 0,
    inheritedpotentialbranches: 0,
    inheritedpotentialtrunk: 0,
    inheritedpotentialroots: 0,
    obtainedpotentialfoliage: 0,
    obtainedpotentialbranches: 0,
    obtainedpotentialtrunk: 0,
    obtainedpotentialroots: 0,
    basebeauty: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    score_contest: 0,
    score_judges: 0,
    score_competitors: 0,
    score_look: 0,
    advantages: 0,
    place: 1,
    prestige: 0,
    rank: 1,
    rank_lvl: 1,
    rank_tq: 1,
    rank_ap: 1,
    rank_pot: 1,
    rank_pre: 1,
    rank_look: 1,
}
var contests_bonsai_c2 = {
    avatar: 0,
    name: "-",
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    inheritedpotentialfoliage: 0,
    inheritedpotentialbranches: 0,
    inheritedpotentialtrunk: 0,
    inheritedpotentialroots: 0,
    obtainedpotentialfoliage: 0,
    obtainedpotentialbranches: 0,
    obtainedpotentialtrunk: 0,
    obtainedpotentialroots: 0,
    basebeauty: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    score_contest: 0,
    score_judges: 0,
    score_competitors: 0,
    score_look: 0,
    advantages: 0,
    place: 1,
    prestige: 0,
    rank: 1,
    rank_lvl: 1,
    rank_tq: 1,
    rank_ap: 1,
    rank_pot: 1,
    rank_pre: 1,
    rank_look: 1,
}
var contests_bonsai_c3 = {
    avatar: 0,
    name: "-",
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    inheritedpotentialfoliage: 0,
    inheritedpotentialbranches: 0,
    inheritedpotentialtrunk: 0,
    inheritedpotentialroots: 0,
    obtainedpotentialfoliage: 0,
    obtainedpotentialbranches: 0,
    obtainedpotentialtrunk: 0,
    obtainedpotentialroots: 0,
    basebeauty: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    score_contest: 0,
    score_judges: 0,
    score_competitors: 0,
    score_look: 0,
    advantages: 0,
    place: 1,
    prestige: 0,
    rank: 1,
    rank_lvl: 1,
    rank_tq: 1,
    rank_ap: 1,
    rank_pot: 1,
    rank_pre: 1,
    rank_look: 1,
}
var contests_bonsai_c4 = {
    avatar: 0,
    name: "-",
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    inheritedpotentialfoliage: 0,
    inheritedpotentialbranches: 0,
    inheritedpotentialtrunk: 0,
    inheritedpotentialroots: 0,
    obtainedpotentialfoliage: 0,
    obtainedpotentialbranches: 0,
    obtainedpotentialtrunk: 0,
    obtainedpotentialroots: 0,
    basebeauty: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    score_contest: 0,
    score_judges: 0,
    score_competitors: 0,
    score_look: 0,
    advantages: 0,
    place: 1,
    prestige: 0,
    rank: 1,
    rank_lvl: 1,
    rank_tq: 1,
    rank_ap: 1,
    rank_pot: 1,
    rank_pre: 1,
    rank_look: 1,
}
var contests_bonsai_c5 = {
    avatar: 0,
    name: "-",
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    inheritedpotentialfoliage: 0,
    inheritedpotentialbranches: 0,
    inheritedpotentialtrunk: 0,
    inheritedpotentialroots: 0,
    obtainedpotentialfoliage: 0,
    obtainedpotentialbranches: 0,
    obtainedpotentialtrunk: 0,
    obtainedpotentialroots: 0,
    basebeauty: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    score_contest: 0,
    score_judges: 0,
    score_competitors: 0,
    score_look: 0,
    advantages: 0,
    place: 1,
    prestige: 0,
    rank: 1,
    rank_lvl: 1,
    rank_tq: 1,
    rank_ap: 1,
    rank_pot: 1,
    rank_pre: 1,
    rank_look: 1,
}
var contests_bonsai_c6 = {
    avatar: 0,
    name: "-",
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    inheritedpotentialfoliage: 0,
    inheritedpotentialbranches: 0,
    inheritedpotentialtrunk: 0,
    inheritedpotentialroots: 0,
    obtainedpotentialfoliage: 0,
    obtainedpotentialbranches: 0,
    obtainedpotentialtrunk: 0,
    obtainedpotentialroots: 0,
    basebeauty: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    score_contest: 0,
    score_judges: 0,
    score_competitors: 0,
    score_look: 0,
    advantages: 0,
    place: 1,
    prestige: 0,
    rank: 1,
    rank_lvl: 1,
    rank_tq: 1,
    rank_ap: 1,
    rank_pot: 1,
    rank_pre: 1,
    rank_look: 1,
}
var contests_bonsai_c7 = {
    avatar: 0,
    name: "-",
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    inheritedpotentialfoliage: 0,
    inheritedpotentialbranches: 0,
    inheritedpotentialtrunk: 0,
    inheritedpotentialroots: 0,
    obtainedpotentialfoliage: 0,
    obtainedpotentialbranches: 0,
    obtainedpotentialtrunk: 0,
    obtainedpotentialroots: 0,
    basebeauty: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    score_contest: 0,
    score_judges: 0,
    score_competitors: 0,
    score_look: 0,
    advantages: 0,
    place: 1,
    prestige: 0,
    rank: 1,
    rank_lvl: 1,
    rank_tq: 1,
    rank_ap: 1,
    rank_pot: 1,
    rank_pre: 1,
    rank_look: 1,
}
var contests_bonsai_c8 = {
    avatar: 0,
    name: "-",
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    inheritedpotentialfoliage: 0,
    inheritedpotentialbranches: 0,
    inheritedpotentialtrunk: 0,
    inheritedpotentialroots: 0,
    obtainedpotentialfoliage: 0,
    obtainedpotentialbranches: 0,
    obtainedpotentialtrunk: 0,
    obtainedpotentialroots: 0,
    basebeauty: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    score_contest: 0,
    score_judges: 0,
    score_competitors: 0,
    score_look: 0,
    advantages: 0,
    place: 1,
    prestige: 0,
    rank: 1,
    rank_lvl: 1,
    rank_tq: 1,
    rank_ap: 1,
    rank_pot: 1,
    rank_pre: 1,
    rank_look: 1,
}
var contests_bonsai_c9 = {
    avatar: 0,
    name: "-",
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    inheritedpotentialfoliage: 0,
    inheritedpotentialbranches: 0,
    inheritedpotentialtrunk: 0,
    inheritedpotentialroots: 0,
    obtainedpotentialfoliage: 0,
    obtainedpotentialbranches: 0,
    obtainedpotentialtrunk: 0,
    obtainedpotentialroots: 0,
    basebeauty: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    shaping: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    leftpointstotal: 0,
    distributiontype: 0,
    score: 0,
    score_contest: 0,
    score_judges: 0,
    score_competitors: 0,
    score_look: 0,
    advantages: 0,
    place: 1,
    prestige: 0,
    rank: 1,
    rank_lvl: 1,
    rank_tq: 1,
    rank_ap: 1,
    rank_pot: 1,
    rank_pre: 1,
    rank_look: 1,
}

var newOption = 0;
var x=1;
var x_shop=1;
var x_contests=1;
var z=0;
var levels=0;
var id_string=0;
var naturepoints=0;
var leftpoints=0;
var foliage_new= 0;
var branches_new= 0;
var leftpoints_new= 0;
var trunk_new= 0;
var roots_new= 0;
var autosave=0;
var styletype=0;
var tutorial=0;
var tutorialid=0;
var storage_resource_selected=0;
var crafting_countdown_leftover=0;
var area1menu= 0;
var area2menu= 0;
var areares1menu= 0;
var areares2menu= 0;

var contests = {
    z:0,
    visible:0,
    bonsaichoosen:0,
    bonsaichoosenx:0,
    id: "-",
    entryprice:0,
    difficulty:0,
    a_score:0,
    b_score:0,
    a_advantages:0,
    b_advantages:0,
    own_place:0,
    judge1_preference: "-",
    judge1_dislike: "-",
    judge1_avatar: 0,
    judge2_preference: "-",
    judge2_dislike: "-",
    judge2_avatar: 0,
    judge3_preference: "-",
    judge3_dislike: "-",
    judge3_avatar: 0,
    focus_ttgst: 0,
    ttgsttext: "-",
    focus_attribute: 0,
    attributetext: "-",
    ttg1: 0,
    ttg2: 0,
    ttg3: 0,
    ttg4: 0,
    ttg5: 0,
    ttg6: 0,
    ttg7: 0,
    ttg8: 0,
    ttg9: 0,
    st1: 0,
    st2: 0,
    st3: 0,
    st4: 0,
    st5: 0,
    st6: 0,
    st7: 0,
    st8: 0,
    st9: 0,
    st10: 0,
    st11: 0,
    st12: 0,
    st13: 0,
    st14: 0,
    st15: 0,
    st16: 0,
}

var focus = {
    attribute_cttg01c2: 0,
    attribute_cttg01c3: 0,
    ttgst_a01c1: 0,
    attribute_a01c1: 0,
    ttgst_a01c2: 0,
    attribute_a01c2: 0,
    ttgst_a01c3: 0,
    attribute_a01c3: 0,
}

var judges = {
    a01j1_j1_ava: 0,
    a01j2_j1_ava: 0,
    a01j2_j2_ava: 0,
    a01j3_j1_ava: 0,
    a01j3_j2_ava: 0,
    a01j3_j3_ava: 0,
    
    a01c1_j1_pre: "-",
    a01c1_j1_dis: "-",
    a01c1_j1_ava: 0,
    a01c1_j2_pre: "-",
    a01c1_j2_dis: "-",
    a01c1_j2_ava: 0,
    a01c1_j3_pre: "-",
    a01c1_j3_dis: "-",
    a01c1_j3_ava: 0,
    a01c2_j1_pre: "-",
    a01c2_j1_dis: "-",
    a01c2_j1_ava: 0,
    a01c2_j2_pre: "-",
    a01c2_j2_dis: "-",
    a01c2_j2_ava: 0,
    a01c2_j3_pre: "-",
    a01c2_j3_dis: "-",
    a01c2_j3_ava: 0,
    a01c3_j1_pre: "-",
    a01c3_j1_dis: "-",
    a01c3_j1_ava: 0,
    a01c3_j2_pre: "-",
    a01c3_j2_dis: "-",
    a01c3_j2_ava: 0,
    a01c3_j3_pre: "-",
    a01c3_j3_dis: "-",
    a01c3_j3_ava: 0,
}
var judge_preference ="-";
var judge_dislike ="-";
var ajudge =0;

var worker01 = {
    busy: 0,
    expedition: 0,
    expedition_zeit: 0,
    expedition_time: 0,
    growing: 0,
    crafting: 0,
    crafting_zeit: 0,
    crafting_zeitone: 0,
}

var worker02 = {
    busy: 1,
    expedition: 0,
    expedition_zeit: 0,
    expedition_time: 0,
    growing: 0,
    crafting: 0,
    crafting_zeit: 0,
    crafting_zeitone: 0,
}

var worker03 = {
    busy: 1,
    expedition: 0,
    expedition_zeit: 0,
    expedition_time: 0,
    growing: 0,
    crafting: 0,
    crafting_zeit: 0,
    crafting_zeitone: 0,
}

/* Expedition treetypes and treequality discovered */
var exp_area01 = {
    count: 0,
    alltreetype: 0,
    treetype01: 0,
    treetype02: 0,
    treetype04: 0,
    treetype05: 0,
    treetype07: 0,
    treetype08: 0,
    alltreequality: 0,
    treequality01: 0,
    treequality02: 0,
    treequality03: 0,
    treequality04: 0,
    treequality05: 0,
    treequality06: 0,
}

var exp_area02 = {
    count: 0,
    alltreetype: 0,
    treetype01: 0,
    treetype03: 0,
    treetype04: 0,
    treetype06: 0,
    treetype09: 0,
    treetype10: 0,
    treetype11: 0,
    treetype13: 0,
    treetype14: 0,
    alltreequality: 0,
    treequality01: 0,
    treequality02: 0,
    treequality03: 0,
    treequality04: 0,
    treequality05: 0,
    treequality06: 0,
    treequality07: 0,
}

var expres = {
    money: 0,
    wood: 0,
    glass: 0,
    bolt: 0,
    metal: 0,
    wire: 0,
}

var expres_area01 = {
    count: 0,
    busy: 0,
    allresource: 0,
    money: 0,
    wood: 0,
}
var expres_area02 = {
    count: 0,
    busy: 0,
    allresource: 0,
    money: 0,
    wood: 0,
    glass: 0,
}

/* Task variables */
var tasks = {
    tracker000: 1, //0=Not visible, 1=Visible, 2=Visible&Goal fulfilled, 3=Task Finished
    tracker001: 1,
    tracker002: 0,
    tracker003: 0,
    tracker004: 0,
    tracker004a: 0,
    tracker005: 0,
    tracker006: 0,
    tracker007: 0,
    tracker008: 0,
    tracker009: 0,
    tracker010: 0,
    tracker011: 0,
    tracker012: 0,
    tracker101: 0,
    tracker102: 0,
    tracker103: 0,
    tracker201: 0,
    tracker202: 0,
    tracker203: 0,
}

/* Bonsai variables */
const treetypename = [];
treetypename[0]= "-";
treetypename[1]= "Maru";
treetypename[2]= "Daen";
treetypename[3]= "Yubiwa";
treetypename[4]= "Otosu";
treetypename[5]= "Hi";
treetypename[6]= "Kumo";
treetypename[7]= "Rokkakkei";
treetypename[8]= "Asutarisuku";
treetypename[9]= "Sunōfurēku";
treetypename[10]= "Fezā";
treetypename[11]= "Makigai";
treetypename[12]= "Me";
treetypename[13]= "Sankakkei";
treetypename[14]= "Yajirushi";
treetypename[15]= "Shīrudo";
treetypename[16]= "Daiyamondo";
treetypename[17]= "Mitsuba";
treetypename[18]= "Shikaku";
treetypename[19]= "Kukei";
treetypename[20]= "Hishigata";
treetypename[21]= "Kokki";
treetypename[22]= "Māku";
treetypename[23]= "Sōbi";
treetypename[24]= "Beru";
treetypename[25]= "Bōru";
treetypename[26]= "Paretto";
treetypename[27]= "Genshi";
treetypename[28]= "Tako";
treetypename[29]= "Kami hikōki";
treetypename[30]= "Tsuki";
treetypename[31]= "Hoshi";
treetypename[32]= "Taiyō";
treetypename[33]= "Hana";
treetypename[34]= "Kurōbā";
treetypename[35]= "Ha";


const treetypegroupname = [];
treetypegroupname[0]= "-";
treetypegroupname[1]= "Raundo";
treetypegroupname[2]= "Erementaru";
treetypegroupname[3]= "Roku-men";
treetypegroupname[4]= "Seikatsu";
treetypegroupname[5]= "Sanmen";
treetypegroupname[6]= "Shihen";
treetypegroupname[7]= "Jinkō-teki";
treetypegroupname[8]= "Sora";
treetypegroupname[9]= "Shizen";

const styletypename = [];
styletypename[0]= "-";
styletypename[1]= "Chokan";
styletypename[2]= "Moyogi";
styletypename[3]= "Shakan";
styletypename[4]= "Han-Kengai";
styletypename[5]= "Sokan";
styletypename[6]= "Kengai";
styletypename[7]= "Kabudachi";
styletypename[8]= "Hokidachi";
styletypename[9]= "Bunjin";
styletypename[10]= "Fukinagashi";
styletypename[11]= "Ikadabuki";
styletypename[12]= "Neagari";
styletypename[13]= "Sharimiki";
styletypename[14]= "Ishizuki";
styletypename[15]= "Sabamiki";
styletypename[16]= "Seki-joju";

const natures = [];
natures[0]= "-";
natures[1]= "Balanced";
natures[2]= "Leafed";
natures[3]= "Branched";
natures[4]= "Strengthened";
natures[5]= "Equalised";
natures[6]= "Adorned";
natures[7]= "Ramified";
natures[8]= "Grounded";
natures[9]= "Adjusted";
natures[10]= "Decorated";
natures[11]= "Fortified";
natures[12]= "Fixed";
natures[13]= "Tempered";
natures[14]= "Dispersed";
natures[15]= "Consolidated";
natures[16]= "Earthed";

/* Seedling variables */
var seedling1 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    newpotentialfoliage: 0,
    newpotentialbranches: 0,
    newpotentialtrunk: 0,
    newpotentialroots: 0,
    inheritedpotentialfoliage: 0,
    inheritedpotentialbranches: 0,
    inheritedpotentialtrunk: 0,
    inheritedpotentialroots: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var seedling2 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    newpotentialfoliage: 0,
    newpotentialbranches: 0,
    newpotentialtrunk: 0,
    newpotentialroots: 0,
    inheritedpotentialfoliage: 0,
    inheritedpotentialbranches: 0,
    inheritedpotentialtrunk: 0,
    inheritedpotentialroots: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var seedling3 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    newpotentialfoliage: 0,
    newpotentialbranches: 0,
    newpotentialtrunk: 0,
    newpotentialroots: 0,
    inheritedpotentialfoliage: 0,
    inheritedpotentialbranches: 0,
    inheritedpotentialtrunk: 0,
    inheritedpotentialroots: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var seedling4 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    newpotentialfoliage: 0,
    newpotentialbranches: 0,
    newpotentialtrunk: 0,
    newpotentialroots: 0,
    inheritedpotentialfoliage: 0,
    inheritedpotentialbranches: 0,
    inheritedpotentialtrunk: 0,
    inheritedpotentialroots: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var seedling5 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    newpotentialfoliage: 0,
    newpotentialbranches: 0,
    newpotentialtrunk: 0,
    newpotentialroots: 0,
    inheritedpotentialfoliage: 0,
    inheritedpotentialbranches: 0,
    inheritedpotentialtrunk: 0,
    inheritedpotentialroots: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var seedling6 = {
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    newpotentialfoliage: 0,
    newpotentialbranches: 0,
    newpotentialtrunk: 0,
    newpotentialroots: 0,
    inheritedpotentialfoliage: 0,
    inheritedpotentialbranches: 0,
    inheritedpotentialtrunk: 0,
    inheritedpotentialroots: 0,
    shiny: 0,
    planting_choosen: 0,
    price: 0,
}

var bonsaiplaceholder = {
    name: "-",
    id:0,
    id_string:0,
    treetype: 0,
    treetypegroup: 0,
    styletype: 0,
    treequality: 0,
    shiny: 0,
    nature: 0,
    level: 0,
    foliage: 0,
    branches: 0,
    trunk: 0,
    roots: 0,
    growing: 0,
    growing_zeit: 0,
    level_new: 0,
    foliage_new: 0,
    branches_new: 0,
    trunk_new: 0,
    roots_new: 0,
    leftpoints: 0,
    level_lp: 0,
    foliage_lp: 0,
    branches_lp: 0,
    trunk_lp: 0,
    roots_lp: 0,
    price: 0,
}

var growtime=0;

const grow_time_tq1 = [];
grow_time_tq1[0]= 6;
grow_time_tq1[1]= 12;
grow_time_tq1[2]= 18;
grow_time_tq1[3]= 24;
grow_time_tq1[4]= 36;
grow_time_tq1[5]= 48;
grow_time_tq1[6]= 60;
grow_time_tq1[7]= 90;
grow_time_tq1[8]= 120;
grow_time_tq1[9]= 150;
grow_time_tq1[10]= 180;
grow_time_tq1[11]= 240;
grow_time_tq1[12]= 300;
grow_time_tq1[13]= 360;
grow_time_tq1[14]= 420;
grow_time_tq1[15]= 480;
grow_time_tq1[16]= 600;
grow_time_tq1[17]= 720;
grow_time_tq1[18]= 840;
grow_time_tq1[19]= 960;
grow_time_tq1[20]= 1080;
grow_time_tq1[21]= 1200;
grow_time_tq1[22]= 1320;
grow_time_tq1[23]= 1440;
grow_time_tq1[24]= 1560;
grow_time_tq1[25]= 1680;
grow_time_tq1[26]= 1800;
grow_time_tq1[27]= 1920;
grow_time_tq1[28]= 2040;
grow_time_tq1[29]= 2160;
grow_time_tq1[30]= 2280;
grow_time_tq1[31]= 2400;
grow_time_tq1[32]= 2520;
grow_time_tq1[33]= 2640;
grow_time_tq1[34]= 2760;
grow_time_tq1[35]= 2880;
grow_time_tq1[36]= 3000;
grow_time_tq1[37]= 3120;
grow_time_tq1[38]= 3240;
grow_time_tq1[39]= 3360;
grow_time_tq1[40]= 3480;
grow_time_tq1[41]= 3600;
grow_time_tq1[42]= 3720;
grow_time_tq1[43]= 3840;
grow_time_tq1[44]= 3960;
grow_time_tq1[45]= 4080;
grow_time_tq1[46]= 4200;
grow_time_tq1[47]= 4320;
grow_time_tq1[48]= 4440;
grow_time_tq1[49]= 4560;
grow_time_tq1[50]= 4680;
grow_time_tq1[51]= 4800;
grow_time_tq1[52]= 4920;
grow_time_tq1[53]= 5040;
grow_time_tq1[54]= 5160;
grow_time_tq1[55]= 5280;
grow_time_tq1[56]= 5400;
grow_time_tq1[57]= 5520;
grow_time_tq1[58]= 5640;
grow_time_tq1[59]= 5760;
grow_time_tq1[60]= 5880;
grow_time_tq1[61]= 6000;
grow_time_tq1[62]= 6120;
grow_time_tq1[63]= 6240;
grow_time_tq1[64]= 6360;
grow_time_tq1[65]= 6480;
grow_time_tq1[66]= 6600;
grow_time_tq1[67]= 6720;
grow_time_tq1[68]= 6840;
grow_time_tq1[69]= 6960;
grow_time_tq1[70]= 7080;
grow_time_tq1[71]= 7200;
grow_time_tq1[72]= 7320;
grow_time_tq1[73]= 7440;
grow_time_tq1[74]= 7560;
grow_time_tq1[75]= 7680;
grow_time_tq1[76]= 7800;
grow_time_tq1[77]= 7920;
grow_time_tq1[78]= 8040;
grow_time_tq1[79]= 8160;
grow_time_tq1[80]= 8280;
grow_time_tq1[81]= 8400;
grow_time_tq1[82]= 8520;
grow_time_tq1[83]= 8640;
grow_time_tq1[84]= 8760;
grow_time_tq1[85]= 8880;
grow_time_tq1[86]= 9000;
grow_time_tq1[87]= 9120;
grow_time_tq1[88]= 9240;
grow_time_tq1[89]= 9360;
grow_time_tq1[90]= 9480;
grow_time_tq1[91]= 9600;
grow_time_tq1[92]= 9720;
grow_time_tq1[93]= 9840;
grow_time_tq1[94]= 9960;
grow_time_tq1[95]= 10080;
grow_time_tq1[96]= 10200;
grow_time_tq1[97]= 10320;
grow_time_tq1[98]= 10440;
grow_time_tq1[99]= 10560;
grow_time_tq1[100]= 10000000;

const grow_time_tq2 = [];
grow_time_tq2[0]= 6;
grow_time_tq2[1]= 12;
grow_time_tq2[2]= 18;
grow_time_tq2[3]= 24;
grow_time_tq2[4]= 36;
grow_time_tq2[5]= 48;
grow_time_tq2[6]= 60;
grow_time_tq2[7]= 90;
grow_time_tq2[8]= 120;
grow_time_tq2[9]= 150;
grow_time_tq2[10]= 180;
grow_time_tq2[11]= 240;
grow_time_tq2[12]= 300;
grow_time_tq2[13]= 360;
grow_time_tq2[14]= 420;
grow_time_tq2[15]= 480;
grow_time_tq2[16]= 600;
grow_time_tq2[17]= 720;
grow_time_tq2[18]= 840;
grow_time_tq2[19]= 960;
grow_time_tq2[20]= 1080;
grow_time_tq2[21]= 1260;
grow_time_tq2[22]= 1440;
grow_time_tq2[23]= 1620;
grow_time_tq2[24]= 1800;
grow_time_tq2[25]= 1980;
grow_time_tq2[26]= 2160;
grow_time_tq2[27]= 2340;
grow_time_tq2[28]= 2520;
grow_time_tq2[29]= 2700;
grow_time_tq2[30]= 2880;
grow_time_tq2[31]= 3060;
grow_time_tq2[32]= 3240;
grow_time_tq2[33]= 3420;
grow_time_tq2[34]= 3600;
grow_time_tq2[35]= 3780;
grow_time_tq2[36]= 3960;
grow_time_tq2[37]= 4140;
grow_time_tq2[38]= 4320;
grow_time_tq2[39]= 4500;
grow_time_tq2[40]= 4680;
grow_time_tq2[41]= 4860;
grow_time_tq2[42]= 5040;
grow_time_tq2[43]= 5220;
grow_time_tq2[44]= 5400;
grow_time_tq2[45]= 5580;
grow_time_tq2[46]= 5760;
grow_time_tq2[47]= 5940;
grow_time_tq2[48]= 6120;
grow_time_tq2[49]= 6300;
grow_time_tq2[50]= 6480;
grow_time_tq2[51]= 6660;
grow_time_tq2[52]= 6840;
grow_time_tq2[53]= 7020;
grow_time_tq2[54]= 7200;
grow_time_tq2[55]= 7380;
grow_time_tq2[56]= 7560;
grow_time_tq2[57]= 7740;
grow_time_tq2[58]= 7920;
grow_time_tq2[59]= 8100;
grow_time_tq2[60]= 8280;
grow_time_tq2[61]= 8460;
grow_time_tq2[62]= 8640;
grow_time_tq2[63]= 8820;
grow_time_tq2[64]= 9000;
grow_time_tq2[65]= 9180;
grow_time_tq2[66]= 9360;
grow_time_tq2[67]= 9540;
grow_time_tq2[68]= 9720;
grow_time_tq2[69]= 9900;
grow_time_tq2[70]= 10080;
grow_time_tq2[71]= 10260;
grow_time_tq2[72]= 10440;
grow_time_tq2[73]= 10620;
grow_time_tq2[74]= 10800;
grow_time_tq2[75]= 10980;
grow_time_tq2[76]= 11160;
grow_time_tq2[77]= 11340;
grow_time_tq2[78]= 11520;
grow_time_tq2[79]= 11700;
grow_time_tq2[80]= 11880;
grow_time_tq2[81]= 12060;
grow_time_tq2[82]= 12240;
grow_time_tq2[83]= 12420;
grow_time_tq2[84]= 12600;
grow_time_tq2[85]= 12780;
grow_time_tq2[86]= 12960;
grow_time_tq2[87]= 13140;
grow_time_tq2[88]= 13320;
grow_time_tq2[89]= 13500;
grow_time_tq2[90]= 13680;
grow_time_tq2[91]= 13860;
grow_time_tq2[92]= 14040;
grow_time_tq2[93]= 14220;
grow_time_tq2[94]= 14400;
grow_time_tq2[95]= 14580;
grow_time_tq2[96]= 14760;
grow_time_tq2[97]= 14940;
grow_time_tq2[98]= 15120;
grow_time_tq2[99]= 15300;
grow_time_tq2[100]= 10000000;

const grow_time_tq3 = [];
grow_time_tq3[0]= 6;
grow_time_tq3[1]= 12;
grow_time_tq3[2]= 18;
grow_time_tq3[3]= 24;
grow_time_tq3[4]= 36;
grow_time_tq3[5]= 48;
grow_time_tq3[6]= 60;
grow_time_tq3[7]= 90;
grow_time_tq3[8]= 120;
grow_time_tq3[9]= 150;
grow_time_tq3[10]= 180;
grow_time_tq3[11]= 240;
grow_time_tq3[12]= 300;
grow_time_tq3[13]= 360;
grow_time_tq3[14]= 420;
grow_time_tq3[15]= 480;
grow_time_tq3[16]= 600;
grow_time_tq3[17]= 720;
grow_time_tq3[18]= 840;
grow_time_tq3[19]= 960;
grow_time_tq3[20]= 1080;
grow_time_tq3[21]= 1260;
grow_time_tq3[22]= 1440;
grow_time_tq3[23]= 1620;
grow_time_tq3[24]= 1800;
grow_time_tq3[25]= 2100;
grow_time_tq3[26]= 2400;
grow_time_tq3[27]= 2700;
grow_time_tq3[28]= 3000;
grow_time_tq3[29]= 3300;
grow_time_tq3[30]= 3600;
grow_time_tq3[31]= 3900;
grow_time_tq3[32]= 4200;
grow_time_tq3[33]= 4500;
grow_time_tq3[34]= 4800;
grow_time_tq3[35]= 5100;
grow_time_tq3[36]= 5400;
grow_time_tq3[37]= 5700;
grow_time_tq3[38]= 6000;
grow_time_tq3[39]= 6300;
grow_time_tq3[40]= 6600;
grow_time_tq3[41]= 6900;
grow_time_tq3[42]= 7200;
grow_time_tq3[43]= 7500;
grow_time_tq3[44]= 7800;
grow_time_tq3[45]= 8100;
grow_time_tq3[46]= 8400;
grow_time_tq3[47]= 8700;
grow_time_tq3[48]= 9000;
grow_time_tq3[49]= 9300;
grow_time_tq3[50]= 9600;
grow_time_tq3[51]= 9900;
grow_time_tq3[52]= 10200;
grow_time_tq3[53]= 10500;
grow_time_tq3[54]= 10800;
grow_time_tq3[55]= 11100;
grow_time_tq3[56]= 11400;
grow_time_tq3[57]= 11700;
grow_time_tq3[58]= 12000;
grow_time_tq3[59]= 12300;
grow_time_tq3[60]= 12600;
grow_time_tq3[61]= 12900;
grow_time_tq3[62]= 13200;
grow_time_tq3[63]= 13500;
grow_time_tq3[64]= 13800;
grow_time_tq3[65]= 14100;
grow_time_tq3[66]= 14400;
grow_time_tq3[67]= 14700;
grow_time_tq3[68]= 15000;
grow_time_tq3[69]= 15300;
grow_time_tq3[70]= 15600;
grow_time_tq3[71]= 15900;
grow_time_tq3[72]= 16200;
grow_time_tq3[73]= 16500;
grow_time_tq3[74]= 16800;
grow_time_tq3[75]= 17100;
grow_time_tq3[76]= 17400;
grow_time_tq3[77]= 17700;
grow_time_tq3[78]= 18000;
grow_time_tq3[79]= 18300;
grow_time_tq3[80]= 18600;
grow_time_tq3[81]= 18900;
grow_time_tq3[82]= 19200;
grow_time_tq3[83]= 19500;
grow_time_tq3[84]= 19800;
grow_time_tq3[85]= 20100;
grow_time_tq3[86]= 20400;
grow_time_tq3[87]= 20700;
grow_time_tq3[88]= 21000;
grow_time_tq3[89]= 21300;
grow_time_tq3[90]= 21600;
grow_time_tq3[91]= 21900;
grow_time_tq3[92]= 22200;
grow_time_tq3[93]= 22500;
grow_time_tq3[94]= 22800;
grow_time_tq3[95]= 23100;
grow_time_tq3[96]= 23400;
grow_time_tq3[97]= 23700;
grow_time_tq3[98]= 24000;
grow_time_tq3[99]= 24300;
grow_time_tq3[100]= 10000000;

const grow_time_tq4 = [];
grow_time_tq4[0]= 6;
grow_time_tq4[1]= 12;
grow_time_tq4[2]= 18;
grow_time_tq4[3]= 24;
grow_time_tq4[4]= 36;
grow_time_tq4[5]= 48;
grow_time_tq4[6]= 60;
grow_time_tq4[7]= 90;
grow_time_tq4[8]= 120;
grow_time_tq4[9]= 150;
grow_time_tq4[10]= 180;
grow_time_tq4[11]= 240;
grow_time_tq4[12]= 300;
grow_time_tq4[13]= 360;
grow_time_tq4[14]= 420;
grow_time_tq4[15]= 480;
grow_time_tq4[16]= 600;
grow_time_tq4[17]= 720;
grow_time_tq4[18]= 840;
grow_time_tq4[19]= 960;
grow_time_tq4[20]= 1080;
grow_time_tq4[21]= 1260;
grow_time_tq4[22]= 1440;
grow_time_tq4[23]= 1620;
grow_time_tq4[24]= 1800;
grow_time_tq4[25]= 2100;
grow_time_tq4[26]= 2400;
grow_time_tq4[27]= 2700;
grow_time_tq4[28]= 3000;
grow_time_tq4[29]= 3300;
grow_time_tq4[30]= 3600;
grow_time_tq4[31]= 4200;
grow_time_tq4[32]= 4800;
grow_time_tq4[33]= 5400;
grow_time_tq4[34]= 6000;
grow_time_tq4[35]= 6600;
grow_time_tq4[36]= 7200;
grow_time_tq4[37]= 7800;
grow_time_tq4[38]= 8400;
grow_time_tq4[39]= 9000;
grow_time_tq4[40]= 9600;
grow_time_tq4[41]= 10200;
grow_time_tq4[42]= 10800;
grow_time_tq4[43]= 11400;
grow_time_tq4[44]= 12000;
grow_time_tq4[45]= 12600;
grow_time_tq4[46]= 13200;
grow_time_tq4[47]= 13800;
grow_time_tq4[48]= 14400;
grow_time_tq4[49]= 15000;
grow_time_tq4[50]= 15600;
grow_time_tq4[51]= 16200;
grow_time_tq4[52]= 16800;
grow_time_tq4[53]= 17400;
grow_time_tq4[54]= 18000;
grow_time_tq4[55]= 18600;
grow_time_tq4[56]= 19200;
grow_time_tq4[57]= 19800;
grow_time_tq4[58]= 20400;
grow_time_tq4[59]= 21000;
grow_time_tq4[60]= 21600;
grow_time_tq4[61]= 22200;
grow_time_tq4[62]= 22800;
grow_time_tq4[63]= 23400;
grow_time_tq4[64]= 24000;
grow_time_tq4[65]= 24600;
grow_time_tq4[66]= 25200;
grow_time_tq4[67]= 25800;
grow_time_tq4[68]= 26400;
grow_time_tq4[69]= 27000;
grow_time_tq4[70]= 27600;
grow_time_tq4[71]= 28200;
grow_time_tq4[72]= 28800;
grow_time_tq4[73]= 29400;
grow_time_tq4[74]= 30000;
grow_time_tq4[75]= 30600;
grow_time_tq4[76]= 31200;
grow_time_tq4[77]= 31800;
grow_time_tq4[78]= 32400;
grow_time_tq4[79]= 33000;
grow_time_tq4[80]= 33600;
grow_time_tq4[81]= 34200;
grow_time_tq4[82]= 34800;
grow_time_tq4[83]= 35400;
grow_time_tq4[84]= 36000;
grow_time_tq4[85]= 36600;
grow_time_tq4[86]= 37200;
grow_time_tq4[87]= 37800;
grow_time_tq4[88]= 38400;
grow_time_tq4[89]= 39000;
grow_time_tq4[90]= 39600;
grow_time_tq4[91]= 40200;
grow_time_tq4[92]= 40800;
grow_time_tq4[93]= 41400;
grow_time_tq4[94]= 42000;
grow_time_tq4[95]= 42600;
grow_time_tq4[96]= 43200;
grow_time_tq4[97]= 43800;
grow_time_tq4[98]= 44400;
grow_time_tq4[99]= 45000;
grow_time_tq4[100]= 10000000;

const level_cp_tq1 = [];
level_cp_tq1[0]= 2;
level_cp_tq1[1]= 4;
level_cp_tq1[2]= 6;
level_cp_tq1[3]= 8;
level_cp_tq1[4]= 12;
level_cp_tq1[5]= 16;
level_cp_tq1[6]= 20;
level_cp_tq1[7]= 28;
level_cp_tq1[8]= 40;
level_cp_tq1[9]= 64;

const level_cp_tq2 = [];
level_cp_tq2[0]= 2;
level_cp_tq2[1]= 4;
level_cp_tq2[2]= 6;
level_cp_tq2[3]= 10;
level_cp_tq2[4]= 14;
level_cp_tq2[5]= 18;
level_cp_tq2[6]= 22;
level_cp_tq2[7]= 30;
level_cp_tq2[8]= 44;
level_cp_tq2[9]= 70;

const level_cp_tq3 = [];
level_cp_tq3[0]= 2;
level_cp_tq3[1]= 4;
level_cp_tq3[2]= 8;
level_cp_tq3[3]= 12;
level_cp_tq3[4]= 16;
level_cp_tq3[5]= 20;
level_cp_tq3[6]= 24;
level_cp_tq3[7]= 32;
level_cp_tq3[8]= 48;
level_cp_tq3[9]= 74;

const level_cp_tq4 = [];
level_cp_tq4[0]= 2;
level_cp_tq4[1]= 4;
level_cp_tq4[2]= 8;
level_cp_tq4[3]= 12;
level_cp_tq4[4]= 16;
level_cp_tq4[5]= 20;
level_cp_tq4[6]= 28;
level_cp_tq4[7]= 36;
level_cp_tq4[8]= 52;
level_cp_tq4[9]= 82;

var table_ttg = {
    _y1: "?",
    _y2: "?",
    _y3: "?",
    _y4: "?",
    _y5: "?",
    _y6: "?",
    _y7: "?",
    _y8: "?",
    _y9: "?",
    _o1: "?",
    _o2: "?",
    _o3: "?",
    _o4: "?",
    _o5: "?",
    _o6: "?",
    _o7: "?",
    _o8: "?",
    _o9: "?",
    _11: "o",
    _12: "?",
    _13: "?",
    _14: "?",
    _15: "?",
    _16: "?",
    _17: "?",
    _18: "?",
    _19: "?",
    _21: "?",
    _22: "o",
    _23: "?",
    _24: "?",
    _25: "?",
    _26: "?",
    _27: "?",
    _28: "?",
    _29: "?",
    _31: "?",
    _32: "?",
    _33: "o",
    _34: "?",
    _35: "?",
    _36: "?",
    _37: "?",
    _38: "?",
    _39: "?",
    _41: "?",
    _42: "?",
    _43: "?",
    _44: "o",
    _45: "?",
    _46: "?",
    _47: "?",
    _48: "?",
    _49: "?",
    _51: "?",
    _52: "?",
    _53: "?",
    _54: "?",
    _55: "o",
    _56: "?",
    _57: "?",
    _58: "?",
    _59: "?",
    _61: "?",
    _62: "?",
    _63: "?",
    _64: "?",
    _65: "?",
    _66: "o",
    _67: "?",
    _68: "?",
    _69: "?",
    _71: "?",
    _72: "?",
    _73: "?",
    _74: "?",
    _75: "?",
    _76: "?",
    _77: "o",
    _78: "?",
    _79: "?",
    _81: "?",
    _82: "?",
    _83: "?",
    _84: "?",
    _85: "?",
    _86: "?",
    _87: "?",
    _88: "o",
    _89: "?",
    _91: "?",
    _92: "?",
    _93: "?",
    _94: "?",
    _95: "?",
    _96: "?",
    _97: "?",
    _98: "?",
    _99: "o",  
}

var table_st = {
    _y01: "?",
    _y02: "?",
    _y03: "?",
    _y04: "?",
    _y05: "?",
    _y06: "?",
    _y07: "?",
    _y08: "?",    
    _y09: "?",   
    _y10: "?",   
    _y11: "?",   
    _y12: "?",   
    _y13: "?",   
    _y14: "?",   
    _y15: "?",   
    _y16: "?",
    _o01: "?",
    _o02: "?",
    _o03: "?",
    _o04: "?",
    _o05: "?",
    _o06: "?",
    _o07: "?",
    _o08: "?",
    _o09: "?",   
    _y10: "?",   
    _y11: "?",   
    _y12: "?",   
    _y13: "?",   
    _y14: "?",   
    _y15: "?",   
    _y16: "?",
    _0101: "?",
    _0102: "?",
    _0103: "?",
    _0104: "?",
    _0105: "?",
    _0106: "?",
    _0107: "?",
    _0108: "?",
    _0109: "?",
    _0110: "?",
    _0111: "?",
    _0112: "?",
    _0113: "?",
    _0114: "?",
    _0115: "?",
    _0116: "?",
    _0201: "?",
    _0202: "?",
    _0203: "?",
    _0204: "?",
    _0205: "?",
    _0206: "?",
    _0207: "?",
    _0208: "?",
    _0209: "?",
    _0210: "?",
    _0211: "?",
    _0212: "?",
    _0213: "?",
    _0214: "?",
    _0215: "?",
    _0216: "?",
    _0301: "?",
    _0302: "?",
    _0303: "?",
    _0304: "?",
    _0305: "?",
    _0306: "?",
    _0307: "?",
    _0308: "?",
    _0309: "?",
    _0310: "?",
    _0311: "?",
    _0312: "?",
    _0313: "?",
    _0314: "?",
    _0315: "?",
    _0316: "?",
    _0401: "?",
    _0402: "?",
    _0403: "?",
    _0404: "?",
    _0405: "?",
    _0406: "?",
    _0407: "?",
    _0408: "?",
    _0409: "?",
    _0410: "?",
    _0411: "?",
    _0412: "?",
    _0413: "?",
    _0414: "?",
    _0415: "?",
    _0416: "?",
    _0501: "?",
    _0502: "?",
    _0503: "?",
    _0504: "?",
    _0505: "?",
    _0506: "?",
    _0507: "?",
    _0508: "?",
    _0509: "?",
    _0510: "?",
    _0511: "?",
    _0512: "?",
    _0513: "?",
    _0514: "?",
    _0515: "?",
    _0516: "?",
    _0601: "?",
    _0602: "?",
    _0603: "?",
    _0604: "?",
    _0605: "?",
    _0606: "?",
    _0607: "?",
    _0608: "?",
    _0609: "?",
    _0610: "?",
    _0611: "?",
    _0612: "?",
    _0613: "?",
    _0614: "?",
    _0615: "?",
    _0616: "?",
    _0701: "?",
    _0702: "?",
    _0703: "?",
    _0704: "?",
    _0705: "?",
    _0706: "?",
    _0707: "?",
    _0708: "?",
    _0709: "?",
    _0710: "?",
    _0711: "?",
    _0712: "?",
    _0713: "?",
    _0714: "?",
    _0715: "?",
    _0716: "?",
    _0801: "?",
    _0802: "?",
    _0803: "?",
    _0804: "?",
    _0805: "?",
    _0806: "?",
    _0807: "?",
    _0808: "?",
    _0809: "?",
    _0810: "?",
    _0811: "?",
    _0812: "?",
    _0813: "?",
    _0814: "?",
    _0815: "?",
    _0816: "?",
    _0901: "?",
    _0902: "?",
    _0903: "?",
    _0904: "?",
    _0905: "?",
    _0906: "?",
    _0907: "?",
    _0908: "?",
    _0909: "?",
    _0910: "?",
    _0911: "?",
    _0912: "?",
    _0913: "?",
    _0914: "?",
    _0915: "?",
    _0916: "?",
    _1001: "?",
    _1002: "?",
    _1003: "?",
    _1004: "?",
    _1005: "?",
    _1006: "?",
    _1007: "?",
    _1008: "?",
    _1009: "?",
    _1010: "?",
    _1011: "?",
    _1012: "?",
    _1013: "?",
    _1014: "?",
    _1015: "?",
    _1016: "?",
    _1101: "?",
    _1102: "?",
    _1103: "?",
    _1104: "?",
    _1105: "?",
    _1106: "?",
    _1107: "?",
    _1108: "?",
    _1109: "?",
    _1110: "?",
    _1111: "?",
    _1112: "?",
    _1113: "?",
    _1114: "?",
    _1115: "?",
    _1116: "?",
    _1201: "?",
    _1202: "?",
    _1203: "?",
    _1204: "?",
    _1205: "?",
    _1206: "?",
    _1207: "?",
    _1208: "?",
    _1209: "?",
    _1210: "?",
    _1211: "?",
    _1212: "?",
    _1213: "?",
    _1214: "?",
    _1215: "?",
    _1216: "?",
    _1301: "?",
    _1302: "?",
    _1303: "?",
    _1304: "?",
    _1305: "?",
    _1306: "?",
    _1307: "?",
    _1308: "?",
    _1309: "?",
    _1310: "?",
    _1311: "?",
    _1312: "?",
    _1313: "?",
    _1314: "?",
    _1315: "?",
    _1316: "?",
    _1401: "?",
    _1402: "?",
    _1403: "?",
    _1404: "?",
    _1405: "?",
    _1406: "?",
    _1407: "?",
    _1408: "?",
    _1409: "?",
    _1410: "?",
    _1411: "?",
    _1412: "?",
    _1413: "?",
    _1414: "?",
    _1415: "?",
    _1416: "?",
    _1501: "?",
    _1502: "?",
    _1503: "?",
    _1504: "?",
    _1505: "?",
    _1506: "?",
    _1507: "?",
    _1508: "?",
    _1509: "?",
    _1510: "?",
    _1511: "?",
    _1512: "?",
    _1513: "?",
    _1514: "?",
    _1515: "?",
    _1516: "?",
    _1601: "?",
    _1602: "?",
    _1603: "?",
    _1604: "?",
    _1605: "?",
    _1606: "?",
    _1607: "?",
    _1608: "?",
    _1609: "?",
    _1610: "?",
    _1611: "?",
    _1612: "?",
    _1613: "?",
    _1614: "?",
    _1615: "?",
    _1616: "?",
}

const names_male = [];
names_male[0]= "Henry"; //American (English)
names_male[1]= "Bryce";
names_male[2]= "Kaleb";
names_male[3]= "Jack";
names_male[4]= "Mark";
names_male[5]= "Dwane"; //African-American
names_male[6]= "Jakobe";
names_male[7]= "Wendall";
names_male[8]= "Hugh"; //British English
names_male[9]= "Zac";
names_male[10]= "Cameron";
names_male[11]= "Tommy";
names_male[12]= "Phoenix";
names_male[13]= "Sean"; //Canadian
names_male[14]= "Spencer";
names_male[15]= "Tyler";
names_male[16]= "Thomas";
names_male[17]= "Walter";
names_male[18]= "Florian"; //German
names_male[19]= "Roman";
names_male[20]= "Fabian";
names_male[21]= "Erik";
names_male[22]= "Thorsten";
names_male[23]= "Florent"; //French
names_male[24]= "Alexandre";
names_male[25]= "Mathéo";
names_male[26]= "Grégory";
names_male[27]= "Adam";
names_male[28]= "Alfonso"; //Spanish
names_male[29]= "Emilio";
names_male[30]= "Leo";
names_male[31]= "Luis";
names_male[32]= "Jose";
names_male[33]= "Baldo"; //Italian
names_male[34]= "Valerio";
names_male[35]= "Andrea";
names_male[36]= "Cristaldo";
names_male[37]= "Sergio";
names_male[38]= "Makoto"; //Japanese
names_male[39]= "Yoshida";
names_male[40]= "Takao";
names_male[41]= "Kenji";
names_male[42]= "Akira";
names_male[43]= "Liang"; //Chinese
names_male[44]= "Shi";
names_male[45]= "Zheng";
names_male[46]= "Ding";
names_male[47]= "Xian";
names_male[48]= "Krishna"; //Hindi
names_male[49]= "Gopal";
names_male[50]= "Karam";
names_male[51]= "Aakash";
names_male[52]= "Vishnu";
names_male[53]= "Romesh"; //Tamil
names_male[54]= "Neethen";
names_male[55]= "Muhesh";
names_male[56]= "Varakan";
names_male[57]= "Sivas";
names_male[58]= "Xavier"; //Hispanic
names_male[59]= "César";
names_male[60]= "Joaquin";
names_male[61]= "Dante";
names_male[62]= "Pedro";
names_male[63]= "Roberto"; //Brazilian
names_male[64]= "Sérgio";
names_male[65]= "Thiago";
names_male[66]= "Danilo";
names_male[67]= "Emanuel";
names_male[68]= "Ibraahim"; //Muslim
names_male[69]= "Imraan";
names_male[70]= "Abdul";
names_male[71]= "Muhammad";
names_male[72]= "Salmaan";
names_male[73]= "Yener"; //Turkish
names_male[74]= "Ali";
names_male[75]= "Eroz";
names_male[76]= "Adli";
names_male[77]= "Emre";
names_male[78]= "Thys"; //Afrikaans
names_male[79]= "Henrico";
names_male[80]= "Yerodin";
names_male[81]= "Renier";
names_male[82]= "Pieter";
names_male[83]= "Kareem"; //Egyptian
names_male[84]= "Wael";
names_male[85]= "Madu";
names_male[86]= "Waleed";
names_male[87]= "Omar";
names_male[88]= "Kubri"; //Cameroonian
names_male[89]= "Seidou";
names_male[90]= "Basile";
names_male[91]= "Kouam";
names_male[92]= "Hji";
names_male[93]= "Korneliusz"; //Polish
names_male[94]= "Brunon";
names_male[95]= "Iwo";
names_male[96]= "Jaroslaw";
names_male[97]= "Boris"; //Croatian
names_male[98]= "Matej";
names_male[99]= "Luka";
names_male[100]= "Danijel";


const names_female = [];
names_female[0]= "Sara"; //American (English)
names_female[1]= "Halle";
names_female[2]= "Abby";
names_female[3]= "Olivia";
names_female[4]= "Melody";
names_female[5]= "Shantana"; //African-American
names_female[6]= "Katarina";
names_female[7]= "Jaquoya";
names_female[8]= "Billie"; //British English
names_female[9]= "Lily";
names_female[10]= "Renee";
names_female[11]= "Scarlet";
names_female[12]= "Madison";
names_female[13]= "Allison"; //Canadian
names_female[14]= "Annie";
names_female[15]= "Molly";
names_female[16]= "Ariana";
names_female[17]= "Bailey";
names_female[18]= "Sahra"; //German
names_female[19]= "Mareike";
names_female[20]= "Ida";
names_female[21]= "Luisa";
names_female[22]= "Sabine";
names_female[23]= "Claire"; //French
names_female[24]= "Lydie";
names_female[25]= "Elise";
names_female[26]= "Madeleine";
names_female[27]= "Ève";
names_female[28]= "Lola"; //Spanish
names_female[29]= "Maria";
names_female[30]= "Jennifer";
names_female[31]= "Adriana";
names_female[32]= "Cristina";
names_female[33]= "Tabita"; //Italian
names_female[34]= "Elsa";
names_female[35]= "Norma";
names_female[36]= "Isa";
names_female[37]= "Rachele";
names_female[38]= "Yura"; //Japanese
names_female[39]= "Asami";
names_female[40]= "Kyoko";
names_female[41]= "Rika";
names_female[42]= "Yae";
names_female[43]= "Xie"; //Chinese
names_female[44]= "Song";
names_female[45]= "Dai";
names_female[46]= "Cheng";
names_female[47]= "Lin";
names_female[48]= "Sena"; //Hindi
names_female[49]= "Anushka";
names_female[50]= "Radha";
names_female[51]= "Indira";
names_female[52]= "Shinu";
names_female[53]= "Nirsha"; //Tamil
names_female[54]= "Bagiri";
names_female[55]= "Mallika";
names_female[56]= "Sarunja";
names_female[57]= "Aram";
names_female[58]= "Marta"; //Hispanic
names_female[59]= "Maya";
names_female[60]= "Alma";
names_female[61]= "Melina";
names_female[62]= "Paloma";
names_female[63]= "Manuela"; //Brazilian
names_female[64]= "Caroline";
names_female[65]= "Helena";
names_female[66]= "Angela";
names_female[67]= "Lúcia";
names_female[68]= "Azza"; //Muslim
names_female[69]= "Naadiya";
names_female[70]= "Aaisha";
names_female[71]= "Zainab";
names_female[72]= "Miska";
names_female[73]= "Algul"; //Turkish
names_female[74]= "Asa";
names_female[75]= "Nazik";
names_female[76]= "Ornek";
names_female[77]= "Eda";
names_female[78]= "Esca";  //Afrikaans
names_female[79]= "Wilona";
names_female[80]= "Nadea";
names_female[81]= "Hentie";
names_female[82]= "Christien";
names_female[83]= "Mosi"; //Egyptian
names_female[84]= "Tabia";
names_female[85]= "Sohaila";
names_female[86]= "Heba";
names_female[87]= "Fatma";
names_female[88]= "Leke"; //Cameroonian
names_female[89]= "Anyi";
names_female[90]= "Anu";
names_female[91]= "Mia";
names_female[92]= "Odette";
names_female[93]= "Luiza"; //Polish
names_female[94]= "Matylda";
names_female[95]= "Iga";
names_female[96]= "Aneta";
names_female[97]= "Jelena"; //Croatian
names_female[98]= "Helena";
names_female[99]= "Eva";
names_female[100]= "Vesna";

const names_nb = [];
names_nb[0]= "Sam"; //American (English)
names_nb[1]= "Harper";
names_nb[2]= "Rene";
names_nb[3]= "Jess";
names_nb[4]= "Leslie";
names_nb[5]= "Blake"; //British English
names_nb[6]= "Alex";
names_nb[7]= "Val";
names_nb[8]= "Quinn";
names_nb[9]= "Jordan";
names_nb[10]= "Minori"; //Japanese
names_nb[11]= "Tomo";
names_nb[12]= "Iori";
names_nb[13]= "Mizuki";
names_nb[14]= "Anri";
names_nb[15]= "Sun"; //Chinese
names_nb[16]= "Yi";
names_nb[17]= "Pan";
names_nb[18]= "Tian";
names_nb[19]= "Zhao";
names_nb[20]= "Charlie"; //Random
names_nb[21]= "Zion";
names_nb[22]= "Rae";
names_nb[23]= "Apri";
names_nb[24]= "Chey";
names_nb[25]= "Cosmo";
names_nb[26]= "Dyle";
names_nb[27]= "Goby";
names_nb[28]= "Kap";
names_nb[29]= "Maple";
names_nb[30]= "Milli";
names_nb[31]= "Opal";
names_nb[32]= "Raine";
names_nb[33]= "Rin";
names_nb[34]= "Tyad";
names_nb[35]= "Willow";
names_nb[36]= "Vio";
names_nb[37]= "Glen";
names_nb[38]= "Ash";
names_nb[39]= "Robin";
names_nb[40]= "Adair";

var exchange_or = 0;
var exchange_to = 0;
var exchange_placeholder = 0;
var exchange_growingA = 0;
var exchange_growingB = 0;
var exchange_growing = 0;
var exchange_growbonsaiA = 0;
var exchange_growbonsaiB = 0;