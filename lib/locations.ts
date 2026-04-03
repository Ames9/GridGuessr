export type StadiumType = "NFL" | "SEC" | "Big Ten" | "Big 12" | "Pac-12" | "ACC";

export interface Stadium {
  id: number;
  name: string;
  team: string;
  type: StadiumType;
  lat: number;
  lng: number;
}

// NFL stadiums (PHI corrected to Lincoln Financial Field, Philadelphia)
// LA and LAC share SoFi Stadium — both included, same coordinates
export const NFL_STADIUMS: Stadium[] = [
  { id: 1, name: "NRG Stadium", team: "Houston Texans", type: "NFL", lat: 29.684723, lng: -95.410835 },
  { id: 2, name: "Lumen Field", team: "Seattle Seahawks", type: "NFL", lat: 47.5952, lng: -122.3316 },
  { id: 3, name: "Highmark Stadium", team: "Buffalo Bills", type: "NFL", lat: 42.774, lng: -78.787 },
  { id: 4, name: "Acrisure Stadium", team: "Pittsburgh Steelers", type: "NFL", lat: 40.446667, lng: -80.015830 },
  { id: 5, name: "State Farm Stadium", team: "Arizona Cardinals", type: "NFL", lat: 33.528, lng: -112.263 },
  { id: 6, name: "SoFi Stadium", team: "LA Rams / LA Chargers", type: "NFL", lat: 33.953, lng: -118.339 },
  { id: 7, name: "Hard Rock Stadium", team: "Miami Dolphins", type: "NFL", lat: 25.958055, lng: -80.238890 },
  { id: 8, name: "M&T Bank Stadium", team: "Baltimore Ravens", type: "NFL", lat: 39.278057, lng: -76.622780 },
  { id: 9, name: "Huntington Bank Field", team: "Cleveland Browns", type: "NFL", lat: 41.50611, lng: -81.699450 },
  { id: 10, name: "Empower Field at Mile High", team: "Denver Broncos", type: "NFL", lat: 39.74389, lng: -105.020 },
  { id: 11, name: "Ford Field", team: "Detroit Lions", type: "NFL", lat: 42.34, lng: -83.045555 },
  { id: 12, name: "Levi's Stadium", team: "San Francisco 49ers", type: "NFL", lat: 37.403, lng: -121.970 },
  { id: 13, name: "Allegiant Stadium", team: "Las Vegas Raiders", type: "NFL", lat: 36.090557, lng: -115.183890 },
  { id: 14, name: "Arrowhead Stadium", team: "Kansas City Chiefs", type: "NFL", lat: 39.04889, lng: -94.483890 },
  { id: 15, name: "Gillette Stadium", team: "New England Patriots", type: "NFL", lat: 42.091, lng: -71.264 },
  { id: 16, name: "Caesars Superdome", team: "New Orleans Saints", type: "NFL", lat: 29.950832, lng: -90.081110 },
  { id: 17, name: "Nissan Stadium", team: "Tennessee Titans", type: "NFL", lat: 36.16639, lng: -86.771385 },
  { id: 18, name: "Paycor Stadium", team: "Cincinnati Bengals", type: "NFL", lat: 39.095, lng: -84.516 },
  { id: 19, name: "MetLife Stadium", team: "NY Giants / NY Jets", type: "NFL", lat: 40.8, lng: -74.066666 },
  { id: 20, name: "EverBank Stadium", team: "Jacksonville Jaguars", type: "NFL", lat: 30.323889, lng: -81.637500 },
  { id: 21, name: "Raymond James Stadium", team: "Tampa Bay Buccaneers", type: "NFL", lat: 27.975834, lng: -82.503334 },
  { id: 22, name: "Mercedes-Benz Stadium", team: "Atlanta Falcons", type: "NFL", lat: 33.755554, lng: -84.400 },
  { id: 23, name: "U.S. Bank Stadium", team: "Minnesota Vikings", type: "NFL", lat: 44.974, lng: -93.258 },
  { id: 24, name: "AT&T Stadium", team: "Dallas Cowboys", type: "NFL", lat: 32.747776, lng: -97.092780 },
  { id: 25, name: "Bank of America Stadium", team: "Carolina Panthers", type: "NFL", lat: 35.225834, lng: -80.852776 },
  { id: 26, name: "Lambeau Field", team: "Green Bay Packers", type: "NFL", lat: 44.50139, lng: -88.062225 },
  { id: 27, name: "Soldier Field", team: "Chicago Bears", type: "NFL", lat: 41.8623, lng: -87.6167 },
  { id: 28, name: "Lincoln Financial Field", team: "Philadelphia Eagles", type: "NFL", lat: 39.9009, lng: -75.1675 },
  { id: 29, name: "Lucas Oil Stadium", team: "Indianapolis Colts", type: "NFL", lat: 39.750, lng: -86.150 },
  { id: 30, name: "Northwest Stadium", team: "Washington Commanders", type: "NFL", lat: 38.907776, lng: -76.864440 },
];

// NCAA Power 5 stadiums — SEC, Big Ten, Big 12, Pac-12, ACC (FBS only, top ~10 per conf)
export const NCAA_STADIUMS: Stadium[] = [
  // SEC
  { id: 101, name: "Kyle Field", team: "Texas A&M", type: "SEC", lat: 30.61009, lng: -96.34073 },
  { id: 102, name: "Neyland Stadium", team: "Tennessee", type: "SEC", lat: 35.95473, lng: -83.92533 },
  { id: 103, name: "Tiger Stadium", team: "LSU", type: "SEC", lat: 30.41201, lng: -91.18382 },
  { id: 104, name: "Bryant–Denny Stadium", team: "Alabama", type: "SEC", lat: 33.20749, lng: -87.55039 },
  { id: 105, name: "Sanford Stadium", team: "Georgia", type: "SEC", lat: 33.94982, lng: -83.37344 },
  { id: 106, name: "Ben Hill Griffin Stadium", team: "Florida", type: "SEC", lat: 29.64987, lng: -82.34867 },
  { id: 107, name: "Jordan–Hare Stadium", team: "Auburn", type: "SEC", lat: 32.60236, lng: -85.48891 },
  { id: 108, name: "Williams-Brice Stadium", team: "South Carolina", type: "SEC", lat: 33.97259, lng: -81.02022 },
  { id: 109, name: "Donald W. Reynolds Razorback Stadium", team: "Arkansas", type: "SEC", lat: 36.06785, lng: -94.17880 },
  { id: 110, name: "Faurot Field", team: "Missouri", type: "SEC", lat: 38.93590, lng: -92.33311 },
  { id: 111, name: "Vaught–Hemingway Stadium", team: "Ole Miss", type: "SEC", lat: 34.36215, lng: -89.53415 },
  { id: 112, name: "Davis Wade Stadium", team: "Mississippi State", type: "SEC", lat: 33.45623, lng: -88.79342 },
  { id: 113, name: "Commonwealth Stadium", team: "Kentucky", type: "SEC", lat: 38.02262, lng: -84.50521 },
  { id: 114, name: "Vanderbilt Stadium", team: "Vanderbilt", type: "SEC", lat: 36.14356, lng: -86.80877 },

  // Big Ten
  { id: 201, name: "Michigan Stadium", team: "Michigan", type: "Big Ten", lat: 42.26587, lng: -83.74873 },
  { id: 202, name: "Beaver Stadium", team: "Penn State", type: "Big Ten", lat: 40.81215, lng: -77.85620 },
  { id: 203, name: "Ohio Stadium", team: "Ohio State", type: "Big Ten", lat: 40.00169, lng: -83.01973 },
  { id: 204, name: "Memorial Stadium", team: "Nebraska", type: "Big Ten", lat: 40.82048, lng: -96.70572 },
  { id: 205, name: "Camp Randall Stadium", team: "Wisconsin", type: "Big Ten", lat: 43.06994, lng: -89.41275 },
  { id: 206, name: "Spartan Stadium", team: "Michigan State", type: "Big Ten", lat: 42.72817, lng: -84.48488 },
  { id: 207, name: "Kinnick Stadium", team: "Iowa", type: "Big Ten", lat: 41.65839, lng: -91.55148 },
  { id: 208, name: "Ross–Ade Stadium", team: "Purdue", type: "Big Ten", lat: 40.43432, lng: -86.91849 },
  { id: 209, name: "Memorial Stadium (IL)", team: "Illinois", type: "Big Ten", lat: 40.09931, lng: -88.23599 },
  { id: 210, name: "Memorial Stadium (IND)", team: "Indiana", type: "Big Ten", lat: 39.18091, lng: -86.52557 },
  { id: 211, name: "Ryan Field", team: "Northwestern", type: "Big Ten", lat: 42.06540, lng: -87.69250 },
  { id: 212, name: "TCF Bank Stadium", team: "Minnesota", type: "Big Ten", lat: 44.97652, lng: -93.22458 },

  // Big 12
  { id: 301, name: "Darrell K Royal–Texas Memorial Stadium", team: "Texas", type: "Big 12", lat: 30.28360, lng: -97.73234 },
  { id: 302, name: "Gaylord Family Oklahoma Memorial Stadium", team: "Oklahoma", type: "Big 12", lat: 35.20590, lng: -97.44255 },
  { id: 303, name: "Boone Pickens Stadium", team: "Oklahoma State", type: "Big 12", lat: 36.12571, lng: -97.06650 },
  { id: 304, name: "Jones AT&T Stadium", team: "Texas Tech", type: "Big 12", lat: 33.59103, lng: -101.87294 },
  { id: 305, name: "Jack Trice Stadium", team: "Iowa State", type: "Big 12", lat: 42.01401, lng: -93.63581 },
  { id: 306, name: "McLane Stadium", team: "Baylor", type: "Big 12", lat: 31.55866, lng: -97.11560 },
  { id: 307, name: "Amon G. Carter Stadium", team: "TCU", type: "Big 12", lat: 32.70992, lng: -97.36800 },
  { id: 308, name: "Mountaineer Field", team: "West Virginia", type: "Big 12", lat: 39.65222, lng: -79.95518 },
  { id: 309, name: "Memorial Stadium (KS)", team: "Kansas", type: "Big 12", lat: 38.96295, lng: -95.24632 },
  { id: 310, name: "Bill Snyder Family Football Stadium", team: "Kansas State", type: "Big 12", lat: 39.20186, lng: -96.59379 },

  // Pac-12
  { id: 401, name: "Los Angeles Memorial Coliseum", team: "USC", type: "Pac-12", lat: 34.01401, lng: -118.28790 },
  { id: 402, name: "Rose Bowl", team: "UCLA", type: "Pac-12", lat: 34.16157, lng: -118.16761 },
  { id: 403, name: "Sun Devil Stadium", team: "Arizona State", type: "Pac-12", lat: 33.42636, lng: -111.93262 },
  { id: 404, name: "Husky Stadium", team: "Washington", type: "Pac-12", lat: 47.65043, lng: -122.30292 },
  { id: 405, name: "Autzen Stadium", team: "Oregon", type: "Pac-12", lat: 44.05827, lng: -123.06850 },
  { id: 406, name: "California Memorial Stadium", team: "Cal", type: "Pac-12", lat: 37.87069, lng: -122.25071 },
  { id: 407, name: "Stanford Stadium", team: "Stanford", type: "Pac-12", lat: 37.43473, lng: -122.16102 },
  { id: 408, name: "Arizona Stadium", team: "Arizona", type: "Pac-12", lat: 32.22834, lng: -110.94904 },
  { id: 409, name: "Reser Stadium", team: "Oregon State", type: "Pac-12", lat: 44.55948, lng: -123.28141 },
  { id: 410, name: "Rice-Eccles Stadium", team: "Utah", type: "Pac-12", lat: 40.75995, lng: -111.84882 },
  { id: 411, name: "Folsom Field", team: "Colorado", type: "Pac-12", lat: 40.00940, lng: -105.26689 },
  { id: 412, name: "Martin Stadium", team: "Washington State", type: "Pac-12", lat: 46.73197, lng: -117.16059 },

  // ACC
  { id: 501, name: "Bobby Bowden Field at Doak Campbell Stadium", team: "Florida State", type: "ACC", lat: 30.43755, lng: -84.30453 },
  { id: 502, name: "Memorial Stadium (Clemson)", team: "Clemson", type: "ACC", lat: 34.67875, lng: -82.84318 },
  { id: 503, name: "Heinz Field", team: "Pittsburgh", type: "ACC", lat: 40.44678, lng: -80.01576 },
  { id: 504, name: "Lane Stadium", team: "Virginia Tech", type: "ACC", lat: 37.21997, lng: -80.41806 },
  { id: 505, name: "Sun Life Stadium", team: "Miami (FL)", type: "ACC", lat: 25.95793, lng: -80.23884 },
  { id: 506, name: "Kenan Memorial Stadium", team: "North Carolina", type: "ACC", lat: 35.90699, lng: -79.04792 },
  { id: 507, name: "Carter–Finley Stadium", team: "NC State", type: "ACC", lat: 35.80076, lng: -78.71949 },
  { id: 508, name: "Bobby Dodd Stadium", team: "Georgia Tech", type: "ACC", lat: 33.77256, lng: -84.39285 },
  { id: 509, name: "Papa John's Cardinal Stadium", team: "Louisville", type: "ACC", lat: 38.20542, lng: -85.75811 },
  { id: 510, name: "Scott Stadium", team: "Virginia", type: "ACC", lat: 38.03112, lng: -78.51371 },
  { id: 511, name: "Carrier Dome", team: "Syracuse", type: "ACC", lat: 43.03613, lng: -76.13652 },
  { id: 512, name: "Alumni Stadium (BC)", team: "Boston College", type: "ACC", lat: 42.33511, lng: -71.16647 },
  { id: 513, name: "Wallace Wade Stadium", team: "Duke", type: "ACC", lat: 35.99532, lng: -78.94172 },
  { id: 514, name: "BB&T Field", team: "Wake Forest", type: "ACC", lat: 36.09183, lng: -80.25534 },
];

export const ALL_STADIUMS: Stadium[] = [...NFL_STADIUMS, ...NCAA_STADIUMS];

export const CONFERENCE_COLORS: Record<StadiumType, string> = {
  NFL: "#1a56db",
  SEC: "#dc2626",
  "Big Ten": "#7c3aed",
  "Big 12": "#d97706",
  "Pac-12": "#059669",
  ACC: "#db2777",
};
