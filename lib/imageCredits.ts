export interface ImageCredit {
  text: string;
  link?: string;
}

// スタジアムIDをキーにして、画像の出典（クレジット）を記述してください。
// 例: { 1: { text: "Photo by XYZ, CC BY 2.0", link: "https://..." } }
// ここに記述されたクレジットのみ、画像と一緒に表示されます。
export const IMAGE_CREDITS: Record<number, ImageCredit> = {
  // --- 記述例 ---
  // 1: { 
  //   text: "Photo by John Doe / CC BY-SA 4.0", 
  //   link: "https://commons.wikimedia.org/..." 
  // },
  14: {
    text: "Larry Koester, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons",
    link: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Arrowhead_Stadium_for_Chiefs_vs_Chargers_10-22-2023_%2810%29_%2853283485226%29.jpg"
  },
  24: {
    text: "Nicole Cordeiro, CC BY 2.0 <https://creativecommons.org/licenses/by/2.0>, via Wikimedia Commons",
    link: "https://upload.wikimedia.org/wikipedia/commons/5/52/Cowboys_Stadium_full_view.jpg"
  },
  10: {
    text: "Pdubs.94, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    link: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Empower_Field_at_Mile_High_20241001.jpg"
  },
  20: {
    text: "By Quintin Soloviev - Own work, CC BY 4.0, https://commons.wikimedia.org/w/index.php?curid=182006237",
    link: "https://en.wikipedia.org/wiki/EverBank_Stadium#/media/File:EverBank_Stadium_aerial_view.jpg"
  },
  11: {
    text: "By Michael Barera, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=46008464",
    link: "https://en.wikipedia.org/wiki/Ford_Field#/media/File:Detroit_December_2015_09_(Ford_Field).jpg"
  },
  7: {
    text: "Gatorfan252525, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    link: "https://upload.wikimedia.org/wikipedia/commons/4/45/Hard_Rock_Stadium_during_the_national_anthem_before_a_Miami_Dolphins_game.jpg"
  },
  3: {
    text: "Quintin Soloviev, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons",
    link: "https://upload.wikimedia.org/wikipedia/commons/0/04/Highmark_Stadium%2C_autumn_2022.jpg"
  },

  17: {
    text: "Quintin Soloviev, CC BY 4.0 <https://creativecommons.org/licenses/by/4.0>, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Nissan_Stadium_(Tennessee_Titans).jpg"
  },
  8: {
    text: "Mrgoggins90, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    link: " https://upload.wikimedia.org/wikipedia/commons/c/c0/M%26T_Bank_Stadium.jpghttps://en.wikipedia.org/wiki/M%26T_Bank_Stadium#/media/File:M&T_Bank_Stadium_in_Baltimore.jpg"
  },

  28: {
    text: "JJonahJackalope, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Lincoln_Financial_Field,_Philadelphia,_2024.jpg"
  },

  1: {
    text: "Carlos.dkfi, CC0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Nrg_stadium.jpg"
  },
  2: {
    text: `"Smart Destinations", GoSeattleCard.com, and Go Seattle Card Blog, CC BY-SA 2.0, via Wikimedia Commons`,
    link: "https://commons.wikimedia.org/wiki/File:Qwest_Field_North.jpg"
  },
  5: {
    text: "Troutfarm27, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:State_Farm_Stadium_2022.jpg"
  },
  6: {
    text: "Troutfarm27, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:SoFi_Stadium_2023.jpg"
  },
  9: {
    text: "Cards84664, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:FirstEnergy_Stadium_50_yardline_panorama.png"
  },
  18: {
    text: "JonRidinger, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Paul_Brown_Stadium_interior_2017.jpg"
  },
  19: {
    text: "Anthony Quintano from Hillsborough, NJ, United States, CC BY 2.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Metlife_stadium_(Aerial_view).jpg"
  },
  21: {
    text: "Devin Morris, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Raymond_James_Stadium_Aerial_(2).jpg"
  },
  23: {
    text: "August Schwerdfeger, CC BY 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:U.S._Bank_Stadium_2021-09-23.jpg"
  },
  27: {
    text: "Sea Cow, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Soldier_Field_S.jpg"
  },
  29: {
    text: "Carol M. Highsmith, Public domain, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Indianapolis,_Indiana,_with_a_focus_on_Lucas_Oil_Stadium,_highsm.40934.jpg"
  },
  30: {
    text: "Government of the District of Columbia, CC BY 3.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:New_Commanders_Stadium_concept.jpg"
  },
  101: {
    text: "Janreagan at English Wikipedia, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Kyle_Field_Panorama.jpg"
  },
  102: {
    text: "Neomrbungle, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Neyland_aerial_view_of_checkerboard.jpg"
  },
  103: {
    text: "Spatms, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Tiger_Stadium_(LSU)_Champions_Plaza-Mike_the_Tiger.jpg"
  },
  104: {
    text: "DXR, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Bryant%E2%80%93Denny_Stadium,_Tuscaloosa_AL,_North_view_20160714_1.jpg"
  },
  105: {
    text: "TarheelBornBred, CC0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:UGA_vs._Marshall_2025_(corner).jpg"
  },
  106: {
    text: "Quintin Soloviev, CC BY 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Ben_Hill_Griffin_Stadium_-_Florida_Gators.jpg"
  },
  107: {
    text: "Auburn Alumni Association, CC BY 2.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Jordan-Hare_Stadium_Exterior_2017.jpg"
  },
  108: {
    text: "Eisenthesky Productions, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Williams_Brice_Stadium.jpg"
  },
  109: {
    text: "The original uploader was Bobak at English Wikipedia., CC BY-SA 2.5, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:09-02-06-RRS-Ozarks.jpg"
  },
  110: {
    text: "Lectrician2, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Faurot_Field_Aerial.jpg"
  },
  111: {
    text: "Matthew Nichols, CC BY 2.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Vaught-Hemingway_Stadium.jpg"
  },
  112: {
    text: "Nateb2003, CC BY-SA 3.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:DavisWadeStadiumExpansion.jpg"
  },
  113: {
    text: "Navin75, CC BY-SA 2.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Commonwealth_Stadium_of_Kentucky_-_Kentucky_Wildcats_v.s._Georgia_Bulldogs_-_SEC_football,_October_2012_(2012-10-20_by_Navin75).jpg"
  },
  201: {
    text: "Lectrician2, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Michigan_Stadium_Aerial.jpg"
  },
  202: {
    text: "StateLionPro, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Beaver_Stadium_Whiteout_2018_Pregame.jpg"
  },
  204: {
    text: "Bobak Ha'Eri, CC BY 3.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:091507-USCNeb-MemorialStadium.jpg"
  },
  205: {
    text: "Lectrician2, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Camp_Randall_Aerial.jpg"
  },
  207: {
    text: "Count_de_Des_Moines (talk) (Uploads), CC BY-SA 3.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Kinnick_Night.jpg"
  },
  208: {
    text: "Lectrician2, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Ross-Ade_Stadium.jpg"
  },
  209: {
    text: "Lectrician2, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Memorial_Stadium,_Smith_Football_Performance_Center_and_State_Farm_Center,_University_of_Illinois.jpg"
  },
  210: {
    text: "JYDecker, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:GEU_0557.jpg"
  },
  212: {
    text: "Lectrician2, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Huntington_Bank_Stadium_Aerial.jpg"
  },
  301: {
    text: "Brint03, CC BY-SA 3.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Darrell_K_Royal-Texas_Memorial_Stadium_at_Night.jpg"
  },
  302: {
    text: "Toniklemm, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:OMU_with_2016_extension.jpg"
  },
  303: {
    text: "XStewart2007, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Boone_Pickens_Stadium_-_Night.jpg"
  },
  304: {
    text: "Michael Barera, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Arlington_June_2020_4_(AT%26T_Stadium).jpg"
  },
  305: {
    text: "Unknown, CC BY-SA 3.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:American_football_at_jack_trice_stadium.jpeg"
  },
  306: {
    text: "Djyueng, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:McLane_Stadium_facingsouth7.16.14.jpg"
  },
  307: {
    text: "Michael Barera, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Southern_Methodist_vs._Texas_Christian_football_2019_01_(opening_kickoff).jpg"
  },
  309: {
    text: "Kuwxman, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:David_Booth_Memorial_Stadium_-_August_2025.jpg"
  },
  310: {
    text: "Dawson Wagner, CC BY 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Stripe_out_Game_at_Bill_Snyder_Family_Stadium_01_(cropped).jpg"
  },
  401: {
    text: "Richard H. Kim, CC BY 3.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Los_angeles_memorial_sports_arena3.jpg"
  },
  402: {
    text: "Ted Eytan, CC BY-SA 2.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:2018.06.17_Over_the_Rose_Bowl,_Pasadena,_CA_USA_0039_(42855669451)_(cropped).jpg"
  },
  403: {
    text: "Troutfarm27, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:State_Farm_Stadium_2022.jpg"
  },
  404: {
    text: "Atomic Taco, CC BY-SA 2.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Husky_Stadium_-_March_19,_2016.jpg"
  },
  405: {
    text: "Ray Terrill, CC BY-SA 2.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Autzen_Stadium_at_night.jpg"
  },
  406: {
    text: "Quintin Soloviev, CC BY 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:California_Memorial_Stadium_aerial_view.jpg"
  },
  407: {
    text: "NASA World Wind, Public domain, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Stanford_Stadium_new.jpg"
  },
  408: {
    text: "Troutfarm27, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:State_Farm_Stadium_2022.jpg"
  },
  409: {
    text: "Thomasg86, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Reser_Stadium_viewed_from_the_South_Endzone,_September_16,_2023.jpg"
  },
  410: {
    text: "Kuleralsen, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Ken-Garff-Red-Zone-at-Rice-Eccles-Stadium-4_081121.jpg"
  },
  411: {
    text: "Thelastcanadian, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Folsom_Field_vs._Utah_2016.jpg"
  },
  412: {
    text: "Spicypepper999, CC0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Martin_Stadium_Aerial,_Pullman_WA,_March_2024.jpg"
  },
  501: {
    text: "SeminoleNation, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Doak_Campbell_Stadium.jpg"
  },
  502: {
    text: "Daderot, CC0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Clemson_Memorial_Stadium_-_Clemson_University_-_DSC07484.JPG"
  },
  503: {
    text: "Cramerwiki, CC0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Acrisure_Stadium_2024.jpg"
  },
  504: {
    text: "Jmcgough21, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:LaneStadiumSouthStand.jpg"
  },
  505: {
    text: "Quintin Soloviev, CC BY 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Miami_Freedom_Park_construction.jpg"
  },
  506: {
    text: "CramBetter.com, CC BY 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:UNC_chapel_hill_kenan_football_stadium_aerial.jpg"
  },
  507: {
    text: "SMaloney, CC BY 3.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Carter-Finley_Stadium_1.jpg"
  },
  508: {
    text: "WhoIsDanielHord, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:BDS2024.jpg"
  },
  509: {
    text: "Perthsider, CC BY-SA 3.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Papa_John%27s_Cardinal_Stadium_after_expansion_in_2010.jpeg"
  },
  510: {
    text: "Government of the District of Columbia, CC BY 3.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:New_Commanders_Stadium_concept.jpg"
  },
  511: {
    text: "Jimhoward03, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Carrier_Dome_-_New_Roof_2021_(Jimhoward03).jpg"
  },
  512: {
    text: "Quintinsoloviev, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Alumni_Stadium_Boston_College_2023_(Quintin_Soloviev).png"
  },
  513: {
    text: "User:B, CC BY-SA 4.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:Wallace_Wade_Stadium_2018_panoramic.jpg"
  },
  514: {
    text: "BobHWS, CC BY-SA 3.0, via Wikimedia Commons",
    link: "https://commons.wikimedia.org/wiki/File:BBT_Field_Deacon_Tower_Wake_Forest_University_football_stadium.jpg"
  },
};
