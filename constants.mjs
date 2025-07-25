export const OK = 0;
export const ERR = -1;
export const SE_AUNIT_TO_KM = 149597870.700;
export const SE_AUNIT_TO_LIGHTYEAR = 1 / 63241.07708427;
export const SE_AUNIT_TO_PARSEC = 1 / 206264.8062471;
export const SE_JUL_CAL = 0;
export const SE_GREG_CAL = 1;
export const SE_ECL_NUT = -1;
export const SE_SUN = 0;
export const SE_MOON = 1;
export const SE_MERCURY = 2;
export const SE_VENUS = 3;
export const SE_MARS = 4;
export const SE_JUPITER = 5;
export const SE_SATURN = 6;
export const SE_URANUS = 7;
export const SE_NEPTUNE = 8;
export const SE_PLUTO = 9;
export const SE_MEAN_NODE = 10;
export const SE_TRUE_NODE = 11;
export const SE_MEAN_APOG = 12;
export const SE_OSCU_APOG = 13;
export const SE_EARTH = 14;
export const SE_CHIRON = 15;
export const SE_PHOLUS = 16;
export const SE_CERES = 17;
export const SE_PALLAS = 18;
export const SE_JUNO = 19;
export const SE_VESTA = 20;
export const SE_INTP_APOG = 21;
export const SE_INTP_PERG = 22;
export const SE_NPLANETS = 23;
export const SE_PLMOON_OFFSET = 9000;
export const SE_AST_OFFSET = 10000;
export const SE_VARUNA = SE_AST_OFFSET + 20000;
export const SE_FICT_OFFSET = 40;
export const SE_FICT_OFFSET_1 = 39;
export const SE_FICT_MAX = 999;
export const SE_NFICT_ELEM = 15;
export const SE_COMET_OFFSET = 1000;
export const SE_NALL_NAT_POINTS = SE_NPLANETS + SE_NFICT_ELEM;
export const SE_CUPIDO = 40;
export const SE_HADES = 41;
export const SE_ZEUS = 42;
export const SE_KRONOS = 43;
export const SE_APOLLON = 44;
export const SE_ADMETOS = 45;
export const SE_VULKANUS = 46;
export const SE_POSEIDON = 47;
export const SE_ISIS = 48;
export const SE_NIBIRU = 49;
export const SE_HARRINGTON = 50;
export const SE_NEPTUNE_LEVERRIER = 51;
export const SE_NEPTUNE_ADAMS = 52;
export const SE_PLUTO_LOWELL = 53;
export const SE_PLUTO_PICKERING = 54;
export const SE_VULCAN = 55;
export const SE_WHITE_MOON = 56;
export const SE_PROSERPINA = 57;
export const SE_WALDEMATH = 58;
export const SE_FIXSTAR = -10;
export const SE_ASC = 0;
export const SE_MC = 1;
export const SE_ARMC = 2;
export const SE_VERTEX = 3;
export const SE_EQUASC = 4;
export const SE_COASC1 = 5;
export const SE_COASC2 = 6;
export const SE_POLASC = 7;
export const SE_NASCMC = 8;
export const SEFLG_JPLEPH = 1;
export const SEFLG_SWIEPH = 2;
export const SEFLG_MOSEPH = 4;
export const SEFLG_HELCTR = 8;
export const SEFLG_TRUEPOS = 16;
export const SEFLG_J2000 = 32;
export const SEFLG_NONUT = 64;
export const SEFLG_SPEED3 = 128;
export const SEFLG_SPEED = 256;
export const SEFLG_NOGDEFL = 512;
export const SEFLG_NOABERR = 1024;
export const SEFLG_ASTROMETRIC = SEFLG_NOABERR | SEFLG_NOGDEFL;
export const SEFLG_EQUATORIAL = 2 * 1024;
export const SEFLG_XYZ = 4 * 1024;
export const SEFLG_RADIANS = 8 * 1024;
export const SEFLG_BARYCTR = 16 * 1024;
export const SEFLG_TOPOCTR = 32 * 1024;
export const SEFLG_ORBEL_AA = SEFLG_TOPOCTR;
export const SEFLG_TROPICAL = 0;
export const SEFLG_SIDEREAL = 64 * 1024;
export const SEFLG_ICRS = 128 * 1024;
export const SEFLG_DPSIDEPS_1980 = 256 * 1024;
export const SEFLG_JPLHOR = SEFLG_DPSIDEPS_1980;
export const SEFLG_JPLHOR_APPROX = 512 * 1024;
export const SEFLG_CENTER_BODY = 1024 * 1024;
export const SEFLG_TEST_PLMOON = 2 * 1024 * 1024 | SEFLG_J2000 | SEFLG_ICRS | SEFLG_HELCTR | SEFLG_TRUEPOS;
export const SE_SIDBITS = 256;
export const SE_SIDBIT_ECL_T0 = 256;
export const SE_SIDBIT_SSY_PLANE = 512;
export const SE_SIDBIT_USER_UT = 1024;
export const SE_SIDBIT_ECL_DATE = 2048;
export const SE_SIDBIT_NO_PREC_OFFSET = 4096;
export const SE_SIDBIT_PREC_ORIG = 8192;
export const SE_SIDM_FAGAN_BRADLEY = 0;
export const SE_SIDM_LAHIRI = 1;
export const SE_SIDM_DELUCE = 2;
export const SE_SIDM_RAMAN = 3;
export const SE_SIDM_USHASHASHI = 4;
export const SE_SIDM_KRISHNAMURTI = 5;
export const SE_SIDM_DJWHAL_KHUL = 6;
export const SE_SIDM_YUKTESHWAR = 7;
export const SE_SIDM_JN_BHASIN = 8;
export const SE_SIDM_BABYL_KUGLER1 = 9;
export const SE_SIDM_BABYL_KUGLER2 = 10;
export const SE_SIDM_BABYL_KUGLER3 = 11;
export const SE_SIDM_BABYL_HUBER = 12;
export const SE_SIDM_BABYL_ETPSC = 13;
export const SE_SIDM_ALDEBARAN_15TAU = 14;
export const SE_SIDM_HIPPARCHOS = 15;
export const SE_SIDM_SASSANIAN = 16;
export const SE_SIDM_GALCENT_0SAG = 17;
export const SE_SIDM_J2000 = 18;
export const SE_SIDM_J1900 = 19;
export const SE_SIDM_B1950 = 20;
export const SE_SIDM_SURYASIDDHANTA = 21;
export const SE_SIDM_SURYASIDDHANTA_MSUN = 22;
export const SE_SIDM_ARYABHATA = 23;
export const SE_SIDM_ARYABHATA_MSUN = 24;
export const SE_SIDM_SS_REVATI = 25;
export const SE_SIDM_SS_CITRA = 26;
export const SE_SIDM_TRUE_CITRA = 27;
export const SE_SIDM_TRUE_REVATI = 28;
export const SE_SIDM_TRUE_PUSHYA = 29;
export const SE_SIDM_GALCENT_RGILBRAND = 30;
export const SE_SIDM_GALEQU_IAU1958 = 31;
export const SE_SIDM_GALEQU_TRUE = 32;
export const SE_SIDM_GALEQU_MULA = 33;
export const SE_SIDM_GALALIGN_MARDYKS = 34;
export const SE_SIDM_TRUE_MULA = 35;
export const SE_SIDM_GALCENT_MULA_WILHELM = 36;
export const SE_SIDM_ARYABHATA_522 = 37;
export const SE_SIDM_BABYL_BRITTON = 38;
export const SE_SIDM_TRUE_SHEORAN = 39;
export const SE_SIDM_GALCENT_COCHRANE = 40;
export const SE_SIDM_GALEQU_FIORENZA = 41;
export const SE_SIDM_VALENS_MOON = 42;
export const SE_SIDM_LAHIRI_1940 = 43;
export const SE_SIDM_LAHIRI_VP285 = 44;
export const SE_SIDM_KRISHNAMURTI_VP291 = 45;
export const SE_SIDM_LAHIRI_ICRC = 46;
export const SE_SIDM_USER = 255;
export const SE_NSIDM_PREDEF = 47;
export const SE_NODBIT_MEAN = 1;
export const SE_NODBIT_OSCU = 2;
export const SE_NODBIT_OSCU_BAR = 4;
export const SE_NODBIT_FOPOINT = 256;
export const SEFLG_DEFAULTEPH = SEFLG_SWIEPH;
export const SE_MAX_STNAME = 256;
export const SE_ECL_CENTRAL = 1;
export const SE_ECL_NONCENTRAL = 2;
export const SE_ECL_TOTAL = 4;
export const SE_ECL_ANNULAR = 8;
export const SE_ECL_PARTIAL = 16;
export const SE_ECL_ANNULAR_TOTAL = 32;
export const SE_ECL_HYBRID = 32;
export const SE_ECL_PENUMBRAL = 64;
export const SE_ECL_ALLTYPES_SOLAR = SE_ECL_CENTRAL | SE_ECL_NONCENTRAL | SE_ECL_TOTAL | SE_ECL_ANNULAR | SE_ECL_PARTIAL | SE_ECL_ANNULAR_TOTAL;
export const SE_ECL_ALLTYPES_LUNAR = SE_ECL_TOTAL | SE_ECL_PARTIAL | SE_ECL_PENUMBRAL;
export const SE_ECL_VISIBLE = 128;
export const SE_ECL_MAX_VISIBLE = 256;
export const SE_ECL_1ST_VISIBLE = 512;
export const SE_ECL_PARTBEG_VISIBLE = 512;
export const SE_ECL_2ND_VISIBLE = 1024;
export const SE_ECL_TOTBEG_VISIBLE = 1024;
export const SE_ECL_3RD_VISIBLE = 2048;
export const SE_ECL_TOTEND_VISIBLE = 2048;
export const SE_ECL_4TH_VISIBLE = 4096;
export const SE_ECL_PARTEND_VISIBLE = 4096;
export const SE_ECL_PENUMBBEG_VISIBLE = 8192;
export const SE_ECL_PENUMBEND_VISIBLE = 16384;
export const SE_ECL_OCC_BEG_DAYLIGHT = 8192;
export const SE_ECL_OCC_END_DAYLIGHT = 16384;
export const SE_ECL_ONE_TRY = 32 * 1024;
export const SE_CALC_RISE = 1;
export const SE_CALC_SET = 2;
export const SE_CALC_MTRANSIT = 4;
export const SE_CALC_ITRANSIT = 8;
export const SE_BIT_DISC_CENTER = 256;
export const SE_BIT_DISC_BOTTOM = 8192;
export const SE_BIT_GEOCTR_NO_ECL_LAT = 128;
export const SE_BIT_NO_REFRACTION = 512;
export const SE_BIT_CIVIL_TWILIGHT = 1024;
export const SE_BIT_NAUTIC_TWILIGHT = 2048;
export const SE_BIT_ASTRO_TWILIGHT = 4096;
export const SE_BIT_FIXED_DISC_SIZE = 16384;
export const SE_BIT_FORCE_SLOW_METHOD = 32768;
export const SE_BIT_HINDU_RISING = SE_BIT_DISC_CENTER | SE_BIT_NO_REFRACTION | SE_BIT_GEOCTR_NO_ECL_LAT;
export const SE_ECL2HOR = 0;
export const SE_EQU2HOR = 1;
export const SE_HOR2ECL = 0;
export const SE_HOR2EQU = 1;
export const SE_TRUE_TO_APP = 0;
export const SE_APP_TO_TRUE = 1;
export const SE_DE_NUMBER = 431;
export const SE_FNAME_DE200 = "de200.eph";
export const SE_FNAME_DE403 = "de403.eph";
export const SE_FNAME_DE404 = "de404.eph";
export const SE_FNAME_DE405 = "de405.eph";
export const SE_FNAME_DE406 = "de406.eph";
export const SE_FNAME_DE431 = "de431.eph";
export const SE_FNAME_DFT = SE_FNAME_DE431;
export const SE_FNAME_DFT2 = SE_FNAME_DE406;
export const SE_STARFILE_OLD = "fixstars.cat";
export const SE_STARFILE = "sefstars.txt";
export const SE_ASTNAMFILE = "seasnam.txt";
export const SE_FICTFILE = "seorbel.txt";
export const SE_SPLIT_DEG_ROUND_SEC = 1;
export const SE_SPLIT_DEG_ROUND_MIN = 2;
export const SE_SPLIT_DEG_ROUND_DEG = 4;
export const SE_SPLIT_DEG_ZODIACAL = 8;
export const SE_SPLIT_DEG_NAKSHATRA = 1024;
export const SE_SPLIT_DEG_KEEP_SIGN = 16;
export const SE_SPLIT_DEG_KEEP_DEG = 32;
export const SE_HELIACAL_RISING = 1;
export const SE_HELIACAL_SETTING = 2;
export const SE_MORNING_FIRST = SE_HELIACAL_RISING;
export const SE_EVENING_LAST = SE_HELIACAL_SETTING;
export const SE_EVENING_FIRST = 3;
export const SE_MORNING_LAST = 4;
export const SE_ACRONYCHAL_RISING = 5;
export const SE_ACRONYCHAL_SETTING = 6;
export const SE_COSMICAL_SETTING = SE_ACRONYCHAL_SETTING;
export const SE_HELFLAG_LONG_SEARCH = 128;
export const SE_HELFLAG_HIGH_PRECISION = 256;
export const SE_HELFLAG_OPTICAL_PARAMS = 512;
export const SE_HELFLAG_NO_DETAILS = 1024;
export const SE_HELFLAG_SEARCH_1_PERIOD = 1 << 11;
export const SE_HELFLAG_VISLIM_DARK = 1 << 12;
export const SE_HELFLAG_VISLIM_NOMOON = 1 << 13;
export const SE_HELFLAG_VISLIM_PHOTOPIC = 1 << 14;
export const SE_HELFLAG_VISLIM_SCOTOPIC = 1 << 15;
export const SE_HELFLAG_AV = 1 << 16;
export const SE_HELFLAG_AVKIND_VR = 1 << 16;
export const SE_HELFLAG_AVKIND_PTO = 1 << 17;
export const SE_HELFLAG_AVKIND_MIN7 = 1 << 18;
export const SE_HELFLAG_AVKIND_MIN9 = 1 << 19;
export const SE_HELFLAG_AVKIND = SE_HELFLAG_AVKIND_VR | SE_HELFLAG_AVKIND_PTO | SE_HELFLAG_AVKIND_MIN7 | SE_HELFLAG_AVKIND_MIN9;
export const TJD_INVALID = 99999999.0;
export const SIMULATE_VICTORVB = 1;
export const SE_PHOTOPIC_FLAG = 0;
export const SE_SCOTOPIC_FLAG = 1;
export const SE_MIXEDOPIC_FLAG = 2;
export const SE_TIDAL_DE200 = -23.8946;
export const SE_TIDAL_DE403 = -25.580;
export const SE_TIDAL_DE404 = -25.580;
export const SE_TIDAL_DE405 = -25.826;
export const SE_TIDAL_DE406 = -25.826;
export const SE_TIDAL_DE421 = -25.85;
export const SE_TIDAL_DE422 = -25.85;
export const SE_TIDAL_DE430 = -25.82;
export const SE_TIDAL_DE431 = -25.80;
export const SE_TIDAL_26 = -26.0;
export const SE_TIDAL_STEPHENSON_2016 = -25.85;
export const SE_TIDAL_DEFAULT = SE_TIDAL_DE431;
export const SE_TIDAL_AUTOMATIC = 999999;
export const SE_TIDAL_MOSEPH = SE_TIDAL_DE404;
export const SE_TIDAL_SWIEPH = SE_TIDAL_DEFAULT;
export const SE_TIDAL_JPLEPH = SE_TIDAL_DEFAULT;
export const SE_DELTAT_AUTOMATIC = -1E-10;
export const SE_MODEL_DELTAT = 0;
export const SE_MODEL_PREC_LONGTERM = 1;
export const SE_MODEL_PREC_SHORTTERM = 2;
export const SE_MODEL_NUT = 3;
export const SE_MODEL_BIAS = 4;
export const SE_MODEL_JPLHOR_MODE = 5;
export const SE_MODEL_JPLHORA_MODE = 6;
export const SE_MODEL_SIDT = 7;
export const NSE_MODELS = 8;
export const SEMOD_NPREC = 11;
export const SEMOD_PREC_IAU_1976 = 1;
export const SEMOD_PREC_LASKAR_1986 = 2;
export const SEMOD_PREC_WILL_EPS_LASK = 3;
export const SEMOD_PREC_WILLIAMS_1994 = 4;
export const SEMOD_PREC_SIMON_1994 = 5;
export const SEMOD_PREC_IAU_2000 = 6;
export const SEMOD_PREC_BRETAGNON_2003 = 7;
export const SEMOD_PREC_IAU_2006 = 8;
export const SEMOD_PREC_VONDRAK_2011 = 9;
export const SEMOD_PREC_OWEN_1990 = 10;
export const SEMOD_PREC_NEWCOMB = 11;
export const SEMOD_PREC_DEFAULT = SEMOD_PREC_VONDRAK_2011;
export const SEMOD_PREC_DEFAULT_SHORT = SEMOD_PREC_VONDRAK_2011;
export const SEMOD_NNUT = 5;
export const SEMOD_NUT_IAU_1980 = 1;
export const SEMOD_NUT_IAU_CORR_1987 = 2;
export const SEMOD_NUT_IAU_2000A = 3;
export const SEMOD_NUT_IAU_2000B = 4;
export const SEMOD_NUT_WOOLARD = 5;
export const SEMOD_NUT_DEFAULT = SEMOD_NUT_IAU_2000B;
export const SEMOD_NSIDT = 4;
export const SEMOD_SIDT_IAU_1976 = 1;
export const SEMOD_SIDT_IAU_2006 = 2;
export const SEMOD_SIDT_IERS_CONV_2010 = 3;
export const SEMOD_SIDT_LONGTERM = 4;
export const SEMOD_SIDT_DEFAULT = SEMOD_SIDT_LONGTERM;
export const SEMOD_NBIAS = 3;
export const SEMOD_BIAS_NONE = 1;
export const SEMOD_BIAS_IAU2000 = 2;
export const SEMOD_BIAS_IAU2006 = 3;
export const SEMOD_BIAS_DEFAULT = SEMOD_BIAS_IAU2006;
export const SEMOD_NJPLHOR = 2;
export const SEMOD_JPLHOR_LONG_AGREEMENT = 1;
export const SEMOD_JPLHOR_DEFAULT = SEMOD_JPLHOR_LONG_AGREEMENT;
export const SEMOD_NJPLHORA = 3;
export const SEMOD_JPLHORA_1 = 1;
export const SEMOD_JPLHORA_2 = 2;
export const SEMOD_JPLHORA_3 = 3;
export const SEMOD_JPLHORA_DEFAULT = SEMOD_JPLHORA_3;
export const SEMOD_NDELTAT = 5;
export const SEMOD_DELTAT_STEPHENSON_MORRISON_1984 = 1;
export const SEMOD_DELTAT_STEPHENSON_1997 = 2;
export const SEMOD_DELTAT_STEPHENSON_MORRISON_2004 = 3;
export const SEMOD_DELTAT_ESPENAK_MEEUS_2006 = 4;
export const SEMOD_DELTAT_STEPHENSON_ETC_2016 = 5;
export const SEMOD_DELTAT_DEFAULT = SEMOD_DELTAT_STEPHENSON_ETC_2016;
export default {
  OK,
  ERR,
  SE_AUNIT_TO_KM,
  SE_AUNIT_TO_LIGHTYEAR,
  SE_AUNIT_TO_PARSEC,
  SE_JUL_CAL,
  SE_GREG_CAL,
  SE_ECL_NUT,
  SE_SUN,
  SE_MOON,
  SE_MERCURY,
  SE_VENUS,
  SE_MARS,
  SE_JUPITER,
  SE_SATURN,
  SE_URANUS,
  SE_NEPTUNE,
  SE_PLUTO,
  SE_MEAN_NODE,
  SE_TRUE_NODE,
  SE_MEAN_APOG,
  SE_OSCU_APOG,
  SE_EARTH,
  SE_CHIRON,
  SE_PHOLUS,
  SE_CERES,
  SE_PALLAS,
  SE_JUNO,
  SE_VESTA,
  SE_INTP_APOG,
  SE_INTP_PERG,
  SE_NPLANETS,
  SE_PLMOON_OFFSET,
  SE_AST_OFFSET,
  SE_VARUNA,
  SE_FICT_OFFSET,
  SE_FICT_OFFSET_1,
  SE_FICT_MAX,
  SE_NFICT_ELEM,
  SE_COMET_OFFSET,
  SE_NALL_NAT_POINTS,
  SE_CUPIDO,
  SE_HADES,
  SE_ZEUS,
  SE_KRONOS,
  SE_APOLLON,
  SE_ADMETOS,
  SE_VULKANUS,
  SE_POSEIDON,
  SE_ISIS,
  SE_NIBIRU,
  SE_HARRINGTON,
  SE_NEPTUNE_LEVERRIER,
  SE_NEPTUNE_ADAMS,
  SE_PLUTO_LOWELL,
  SE_PLUTO_PICKERING,
  SE_VULCAN,
  SE_WHITE_MOON,
  SE_PROSERPINA,
  SE_WALDEMATH,
  SE_FIXSTAR,
  SE_ASC,
  SE_MC,
  SE_ARMC,
  SE_VERTEX,
  SE_EQUASC,
  SE_COASC1,
  SE_COASC2,
  SE_POLASC,
  SE_NASCMC,
  SEFLG_JPLEPH,
  SEFLG_SWIEPH,
  SEFLG_MOSEPH,
  SEFLG_HELCTR,
  SEFLG_TRUEPOS,
  SEFLG_J2000,
  SEFLG_NONUT,
  SEFLG_SPEED3,
  SEFLG_SPEED,
  SEFLG_NOGDEFL,
  SEFLG_NOABERR,
  SEFLG_ASTROMETRIC,
  SEFLG_EQUATORIAL,
  SEFLG_XYZ,
  SEFLG_RADIANS,
  SEFLG_BARYCTR,
  SEFLG_TOPOCTR,
  SEFLG_ORBEL_AA,
  SEFLG_TROPICAL,
  SEFLG_SIDEREAL,
  SEFLG_ICRS,
  SEFLG_DPSIDEPS_1980,
  SEFLG_JPLHOR,
  SEFLG_JPLHOR_APPROX,
  SEFLG_CENTER_BODY,
  SEFLG_TEST_PLMOON,
  SE_SIDBITS,
  SE_SIDBIT_ECL_T0,
  SE_SIDBIT_SSY_PLANE,
  SE_SIDBIT_USER_UT,
  SE_SIDBIT_ECL_DATE,
  SE_SIDBIT_NO_PREC_OFFSET,
  SE_SIDBIT_PREC_ORIG,
  SE_SIDM_FAGAN_BRADLEY,
  SE_SIDM_LAHIRI,
  SE_SIDM_DELUCE,
  SE_SIDM_RAMAN,
  SE_SIDM_USHASHASHI,
  SE_SIDM_KRISHNAMURTI,
  SE_SIDM_DJWHAL_KHUL,
  SE_SIDM_YUKTESHWAR,
  SE_SIDM_JN_BHASIN,
  SE_SIDM_BABYL_KUGLER1,
  SE_SIDM_BABYL_KUGLER2,
  SE_SIDM_BABYL_KUGLER3,
  SE_SIDM_BABYL_HUBER,
  SE_SIDM_BABYL_ETPSC,
  SE_SIDM_ALDEBARAN_15TAU,
  SE_SIDM_HIPPARCHOS,
  SE_SIDM_SASSANIAN,
  SE_SIDM_GALCENT_0SAG,
  SE_SIDM_J2000,
  SE_SIDM_J1900,
  SE_SIDM_B1950,
  SE_SIDM_SURYASIDDHANTA,
  SE_SIDM_SURYASIDDHANTA_MSUN,
  SE_SIDM_ARYABHATA,
  SE_SIDM_ARYABHATA_MSUN,
  SE_SIDM_SS_REVATI,
  SE_SIDM_SS_CITRA,
  SE_SIDM_TRUE_CITRA,
  SE_SIDM_TRUE_REVATI,
  SE_SIDM_TRUE_PUSHYA,
  SE_SIDM_GALCENT_RGILBRAND,
  SE_SIDM_GALEQU_IAU1958,
  SE_SIDM_GALEQU_TRUE,
  SE_SIDM_GALEQU_MULA,
  SE_SIDM_GALALIGN_MARDYKS,
  SE_SIDM_TRUE_MULA,
  SE_SIDM_GALCENT_MULA_WILHELM,
  SE_SIDM_ARYABHATA_522,
  SE_SIDM_BABYL_BRITTON,
  SE_SIDM_TRUE_SHEORAN,
  SE_SIDM_GALCENT_COCHRANE,
  SE_SIDM_GALEQU_FIORENZA,
  SE_SIDM_VALENS_MOON,
  SE_SIDM_LAHIRI_1940,
  SE_SIDM_LAHIRI_VP285,
  SE_SIDM_KRISHNAMURTI_VP291,
  SE_SIDM_LAHIRI_ICRC,
  SE_SIDM_USER,
  SE_NSIDM_PREDEF,
  SE_NODBIT_MEAN,
  SE_NODBIT_OSCU,
  SE_NODBIT_OSCU_BAR,
  SE_NODBIT_FOPOINT,
  SEFLG_DEFAULTEPH,
  SE_MAX_STNAME,
  SE_ECL_CENTRAL,
  SE_ECL_NONCENTRAL,
  SE_ECL_TOTAL,
  SE_ECL_ANNULAR,
  SE_ECL_PARTIAL,
  SE_ECL_ANNULAR_TOTAL,
  SE_ECL_HYBRID,
  SE_ECL_PENUMBRAL,
  SE_ECL_ALLTYPES_SOLAR,
  SE_ECL_ALLTYPES_LUNAR,
  SE_ECL_VISIBLE,
  SE_ECL_MAX_VISIBLE,
  SE_ECL_1ST_VISIBLE,
  SE_ECL_PARTBEG_VISIBLE,
  SE_ECL_2ND_VISIBLE,
  SE_ECL_TOTBEG_VISIBLE,
  SE_ECL_3RD_VISIBLE,
  SE_ECL_TOTEND_VISIBLE,
  SE_ECL_4TH_VISIBLE,
  SE_ECL_PARTEND_VISIBLE,
  SE_ECL_PENUMBBEG_VISIBLE,
  SE_ECL_PENUMBEND_VISIBLE,
  SE_ECL_OCC_BEG_DAYLIGHT,
  SE_ECL_OCC_END_DAYLIGHT,
  SE_ECL_ONE_TRY,
  SE_CALC_RISE,
  SE_CALC_SET,
  SE_CALC_MTRANSIT,
  SE_CALC_ITRANSIT,
  SE_BIT_DISC_CENTER,
  SE_BIT_DISC_BOTTOM,
  SE_BIT_GEOCTR_NO_ECL_LAT,
  SE_BIT_NO_REFRACTION,
  SE_BIT_CIVIL_TWILIGHT,
  SE_BIT_NAUTIC_TWILIGHT,
  SE_BIT_ASTRO_TWILIGHT,
  SE_BIT_FIXED_DISC_SIZE,
  SE_BIT_FORCE_SLOW_METHOD,
  SE_BIT_HINDU_RISING,
  SE_ECL2HOR,
  SE_EQU2HOR,
  SE_HOR2ECL,
  SE_HOR2EQU,
  SE_TRUE_TO_APP,
  SE_APP_TO_TRUE,
  SE_DE_NUMBER,
  SE_FNAME_DE200,
  SE_FNAME_DE403,
  SE_FNAME_DE404,
  SE_FNAME_DE405,
  SE_FNAME_DE406,
  SE_FNAME_DE431,
  SE_FNAME_DFT,
  SE_FNAME_DFT2,
  SE_STARFILE_OLD,
  SE_STARFILE,
  SE_ASTNAMFILE,
  SE_FICTFILE,
  SE_SPLIT_DEG_ROUND_SEC,
  SE_SPLIT_DEG_ROUND_MIN,
  SE_SPLIT_DEG_ROUND_DEG,
  SE_SPLIT_DEG_ZODIACAL,
  SE_SPLIT_DEG_NAKSHATRA,
  SE_SPLIT_DEG_KEEP_SIGN,
  SE_SPLIT_DEG_KEEP_DEG,
  SE_HELIACAL_RISING,
  SE_HELIACAL_SETTING,
  SE_MORNING_FIRST,
  SE_EVENING_LAST,
  SE_EVENING_FIRST,
  SE_MORNING_LAST,
  SE_ACRONYCHAL_RISING,
  SE_ACRONYCHAL_SETTING,
  SE_COSMICAL_SETTING,
  SE_HELFLAG_LONG_SEARCH,
  SE_HELFLAG_HIGH_PRECISION,
  SE_HELFLAG_OPTICAL_PARAMS,
  SE_HELFLAG_NO_DETAILS,
  SE_HELFLAG_SEARCH_1_PERIOD,
  SE_HELFLAG_VISLIM_DARK,
  SE_HELFLAG_VISLIM_NOMOON,
  SE_HELFLAG_VISLIM_PHOTOPIC,
  SE_HELFLAG_VISLIM_SCOTOPIC,
  SE_HELFLAG_AV,
  SE_HELFLAG_AVKIND_VR,
  SE_HELFLAG_AVKIND_PTO,
  SE_HELFLAG_AVKIND_MIN7,
  SE_HELFLAG_AVKIND_MIN9,
  SE_HELFLAG_AVKIND,
  TJD_INVALID,
  SIMULATE_VICTORVB,
  SE_PHOTOPIC_FLAG,
  SE_SCOTOPIC_FLAG,
  SE_MIXEDOPIC_FLAG,
  SE_TIDAL_DE200,
  SE_TIDAL_DE403,
  SE_TIDAL_DE404,
  SE_TIDAL_DE405,
  SE_TIDAL_DE406,
  SE_TIDAL_DE421,
  SE_TIDAL_DE422,
  SE_TIDAL_DE430,
  SE_TIDAL_DE431,
  SE_TIDAL_26,
  SE_TIDAL_STEPHENSON_2016,
  SE_TIDAL_DEFAULT,
  SE_TIDAL_AUTOMATIC,
  SE_TIDAL_MOSEPH,
  SE_TIDAL_SWIEPH,
  SE_TIDAL_JPLEPH,
  SE_DELTAT_AUTOMATIC,
  SE_MODEL_DELTAT,
  SE_MODEL_PREC_LONGTERM,
  SE_MODEL_PREC_SHORTTERM,
  SE_MODEL_NUT,
  SE_MODEL_BIAS,
  SE_MODEL_JPLHOR_MODE,
  SE_MODEL_JPLHORA_MODE,
  SE_MODEL_SIDT,
  NSE_MODELS,
  SEMOD_NPREC,
  SEMOD_PREC_IAU_1976,
  SEMOD_PREC_LASKAR_1986,
  SEMOD_PREC_WILL_EPS_LASK,
  SEMOD_PREC_WILLIAMS_1994,
  SEMOD_PREC_SIMON_1994,
  SEMOD_PREC_IAU_2000,
  SEMOD_PREC_BRETAGNON_2003,
  SEMOD_PREC_IAU_2006,
  SEMOD_PREC_VONDRAK_2011,
  SEMOD_PREC_OWEN_1990,
  SEMOD_PREC_NEWCOMB,
  SEMOD_PREC_DEFAULT,
  SEMOD_PREC_DEFAULT_SHORT,
  SEMOD_NNUT,
  SEMOD_NUT_IAU_1980,
  SEMOD_NUT_IAU_CORR_1987,
  SEMOD_NUT_IAU_2000A,
  SEMOD_NUT_IAU_2000B,
  SEMOD_NUT_WOOLARD,
  SEMOD_NUT_DEFAULT,
  SEMOD_NSIDT,
  SEMOD_SIDT_IAU_1976,
  SEMOD_SIDT_IAU_2006,
  SEMOD_SIDT_IERS_CONV_2010,
  SEMOD_SIDT_LONGTERM,
  SEMOD_SIDT_DEFAULT,
  SEMOD_NBIAS,
  SEMOD_BIAS_NONE,
  SEMOD_BIAS_IAU2000,
  SEMOD_BIAS_IAU2006,
  SEMOD_BIAS_DEFAULT,
  SEMOD_NJPLHOR,
  SEMOD_JPLHOR_LONG_AGREEMENT,
  SEMOD_JPLHOR_DEFAULT,
  SEMOD_NJPLHORA,
  SEMOD_JPLHORA_1,
  SEMOD_JPLHORA_2,
  SEMOD_JPLHORA_3,
  SEMOD_JPLHORA_DEFAULT,
  SEMOD_NDELTAT,
  SEMOD_DELTAT_STEPHENSON_MORRISON_1984,
  SEMOD_DELTAT_STEPHENSON_1997,
  SEMOD_DELTAT_STEPHENSON_MORRISON_2004,
  SEMOD_DELTAT_ESPENAK_MEEUS_2006,
  SEMOD_DELTAT_STEPHENSON_ETC_2016,
  SEMOD_DELTAT_DEFAULT
};
