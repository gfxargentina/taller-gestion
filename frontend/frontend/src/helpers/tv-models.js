const tvModels = [
  {
    value: 'LCDADMIRAL24',
    label: 'LCD ADMIRAL 24"',
  },
  {
    value: 'LEDADMIRAL24',
    label: 'LED ADMIRAL 24"',
  },
  {
    value: 'LEDADMIRAL32',
    label: 'LED ADMIRAL 32"',
  },
  {
    value: 'LEDADMIRAL39',
    label: 'LED ADMIRAL 39"',
  },
  {
    value: 'LEDADMIRAL40',
    label: 'LED ADMIRAL 40"',
  },
  {
    value: 'LEDADMIRAL43',
    label: 'LED ADMIRAL 43"',
  },
  {
    value: 'LEDADMIRAL46',
    label: 'LED ADMIRAL 46"',
  },
  {
    value: 'LEDADMIRAL49',
    label: 'LED ADMIRAL 49"',
  },
  {
    value: 'LEDADMIRAL50',
    label: 'LED ADMIRAL 50"',
  },
  {
    value: 'LEDADMIRAL55',
    label: 'LED ADMIRAL 55"',
  },
  {
    value: 'LCDAIWA32',
    label: 'LED AIWA 32"',
  },
  {
    value: 'LEDAIWA40',
    label: 'LED AIWA 40"',
  },
  {
    value: 'LEDAIWA43',
    label: 'LED AIWA 43"',
  },
  {
    value: 'LEDAIWA49',
    label: 'LED AIWA 49"',
  },
  {
    value: 'LEDAIWA50',
    label: 'LED AIWA 50"',
  },
  {
    value: 'LEDAIWA55',
    label: 'LED AIWA 55"',
  },
  {
    value: 'LEDAIWA65',
    label: 'LED AIWA 65"',
  },
  {
    value: 'LCDAOC32',
    label: 'LCD AOC 32"',
  },
  {
    value: 'LEDAOCL22',
    label: 'LED AOC 22"',
  },
  {
    value: 'LEDAOCL24',
    label: 'LED AOC 24"',
  },
  {
    value: 'LEDAOCL32',
    label: 'LED AOC 32"',
  },
  {
    value: 'LEDAOCL40',
    label: 'LED AOC 40"',
  },
  {
    value: 'LEDAOCL42',
    label: 'LED AOC 42"',
  },
  {
    value: 'LEDAOCL43',
    label: 'LED AOC 43"',
  },
  {
    value: 'LEDAOCL46',
    label: 'LED AOC 46"',
  },
  {
    value: 'LEDAOCL49',
    label: 'LED AOC 49"',
  },
  {
    value: 'LEDAOCL46',
    label: 'LED AOC 50"',
  },
  {
    value: 'LCDBGH24',
    label: 'LCD BGH 24"',
  },
  {
    value: 'LCDBGH26',
    label: 'LCD BGH 26"',
  },
  {
    value: 'LCDBGH32',
    label: 'LCD BGH 32"',
  },
  {
    value: 'LCDBGH37',
    label: 'LCD BGH 37"',
  },
  {
    value: 'LCDBGH42',
    label: 'LCD BGH 42"',
  },
  {
    value: 'LCDBGH47',
    label: 'LCD BGH 47"',
  },
  {
    value: 'LEDBGH24',
    label: 'LED BGH 24"',
  },
  {
    value: 'LEDBGH28',
    label: 'LED BGH 28"',
  },
  {
    value: 'LEDBGH32',
    label: 'LED BGH 32"',
  },
  {
    value: 'LEDBGH39',
    label: 'LED BGH 39"',
  },
  {
    value: 'LEDBGH40',
    label: 'LED BGH 40"',
  },
  {
    value: 'LEDBGH42',
    label: 'LED BGH 42"',
  },
  {
    value: 'LEDBGH43',
    label: 'LED BGH 43"',
  },
  {
    value: 'LEDBGH46',
    label: 'LED BGH 46"',
  },
  {
    value: 'LEDBGH47',
    label: 'LED BGH 47"',
  },
  {
    value: 'LEDBGH48',
    label: 'LED BGH 48"',
  },
  {
    value: 'LEDBGH49',
    label: 'LED BGH 49"',
  },
  {
    value: 'LEDBGH50',
    label: 'LED BGH 50"',
  },
  {
    value: 'LEDBGH55',
    label: 'LED BGH 55"',
  },
  {
    value: 'LEDBGH65',
    label: 'LED BGH 65"',
  },
  {
    value: 'LEDBGH75',
    label: 'LED BGH 75"',
  },
  {
    value: 'LEDCROWMUSTANG32',
    label: 'LED CROWN MUSTANG 32"',
  },
  {
    value: 'LEDCROWMUSTANG43',
    label: 'LED CROWN MUSTANG 43"',
  },
  {
    value: 'LEDCROWMUSTANG55',
    label: 'LED CROWN MUSTANG 55"',
  },
  {
    value: 'LEDDAEWOO24',
    label: 'LED DAEWOO 24"',
  },
  {
    value: 'LEDDAEWOO32',
    label: 'LED DAEWOO 32"',
  },
  {
    value: 'LEDDAEWOO39',
    label: 'LED DAEWOO 39"',
  },
  {
    value: 'LEDDAEWOO40',
    label: 'LED DAEWOO 40"',
  },
  {
    value: 'LEDDAEWOO42',
    label: 'LED DAEWOO 42"',
  },
  {
    value: 'LEDDAEWOO43',
    label: 'LED DAEWOO 43"',
  },
  {
    value: 'LEDDAEWOO48',
    label: 'LED DAEWOO 48"',
  },
  {
    value: 'LEDDAEWOO49',
    label: 'LED DAEWOO 49"',
  },
  {
    value: 'LEDDAEWOO50',
    label: 'LED DAEWOO 50"',
  },
  {
    value: 'LEDDAEWOO55',
    label: 'LED DAEWOO 55"',
  },
  {
    value: 'LEDDAEWOO60',
    label: 'LED DAEWOO 60"',
  },
  {
    value: 'LEDDAIHATSU32',
    label: 'LED DAIHATSU 32"',
  },
  {
    value: 'LEDDAIHATSU43',
    label: 'LED DAIHATSU 43"',
  },
  {
    value: 'LEDDAIHATSU50',
    label: 'LED DAIHATSU 50"',
  },
  {
    value: 'LEDDAIHATSU55',
    label: 'LED DAIHATSU 55"',
  },
  {
    value: 'LCDFISHER32',
    label: 'LCD FISHER 32"',
  },
  {
    value: 'LCDFISHER42',
    label: 'LCD FISHER 42"',
  },
  {
    value: 'LEDGOLDSTAR32',
    label: 'LED GOLDSTAR 32"',
  },
  {
    value: 'LEDGOLDSTAR43',
    label: 'LED GOLDSTAR 43"',
  },
  {
    value: 'LEDGOLDSTAR49',
    label: 'LED GOLDSTAR 49"',
  },
  {
    value: 'LEDGOLDSTAR50',
    label: 'LED GOLDSTAR 50"',
  },
  {
    value: 'LEDGOLDSTAR55',
    label: 'LED GOLDSTAR 55"',
  },
  {
    value: 'LEDGOLDSTAR65',
    label: 'LED GOLDSTAR 65"',
  },
  {
    value: 'LCDGRUNDIG32',
    label: 'LCD GRUNDIG 32"',
  },
  {
    value: 'LCDGRUNDIG40',
    label: 'LCD GRUNDIG 40"',
  },
  {
    value: 'LCDHISENSE24',
    label: 'LCD HISENSE 24"',
  },
  {
    value: 'LCDHISENSE32',
    label: 'LCD HISENSE 32"',
  },
  {
    value: 'LEDHISENSE20',
    label: 'LED HISENSE 20"',
  },
  {
    value: 'LEDHISENSE24',
    label: 'LED HISENSE 24"',
  },
  {
    value: 'LEDHISENSE32',
    label: 'LED HISENSE 32"',
  },
  {
    value: 'LEDHISENSE39',
    label: 'LED HISENSE 39"',
  },
  {
    value: 'LEDHISENSE40',
    label: 'LED HISENSE 40"',
  },
  {
    value: 'LEDHISENSE42',
    label: 'LED HISENSE 42"',
  },
  {
    value: 'LEDHISENSE43',
    label: 'LED HISENSE 43"',
  },
  {
    value: 'LEDHISENSE48',
    label: 'LED HISENSE 48"',
  },
  {
    value: 'LEDHISENSE49',
    label: 'LED HISENSE 49"',
  },
  {
    value: 'LEDHISENSE50',
    label: 'LED HISENSE 50"',
  },
  {
    value: 'LEDHISENSE55',
    label: 'LED HISENSE 55"',
  },
  {
    value: 'LEDHISENSE65',
    label: 'LED HISENSE 65"',
  },
  {
    value: 'LEDHISENSE70',
    label: 'LED HISENSE 70"',
  },
  {
    value: 'LEDHISENSE75',
    label: 'LED HISENSE 75"',
  },
  {
    value: 'LCDHITACHI24',
    label: 'LCD HITACHI 24"',
  },
  {
    value: 'LCDHITACHI26',
    label: 'LCD HITACHI 26"',
  },
  {
    value: 'LCDHITACHI32',
    label: 'LCD HITACHI 32"',
  },
  {
    value: 'LCDHITACHI37',
    label: 'LCD HITACHI 37"',
  },
  {
    value: 'LCDHITACHI42',
    label: 'LCD HITACHI 42"',
  },
  {
    value: 'LEDHITACHI24',
    label: 'LED HITACHI 24"',
  },
  {
    value: 'LEDHITACHI32',
    label: 'LED HITACHI 32"',
  },
  {
    value: 'LEDHITACHI39',
    label: 'LED HITACHI 39"',
  },
  {
    value: 'LEDHITACHI40',
    label: 'LED HITACHI 40"',
  },
  {
    value: 'LEDHITACHI42',
    label: 'LED HITACHI 42"',
  },
  {
    value: 'LEDHITACHI43',
    label: 'LED HITACHI 43"',
  },
  {
    value: 'LEDHITACHI46',
    label: 'LED HITACHI 46"',
  },
  {
    value: 'LEDHITACHI49',
    label: 'LED HITACHI 49"',
  },
  {
    value: 'LEDHITACHI50',
    label: 'LED HITACHI 50"',
  },
  {
    value: 'LEDHITACHI55',
    label: 'LED HITACHI 55"',
  },
  {
    value: 'LEDHITACHI65',
    label: 'LED HITACHI 65"',
  },
  {
    value: 'LEDHYUNDAI32',
    label: 'LED HYUNDAI 32"',
  },
  {
    value: 'LEDHYUNDAI40',
    label: 'LED HYUNDAI 40"',
  },
  {
    value: 'LEDHYUNDAI43',
    label: 'LED HYUNDAI 43"',
  },
  {
    value: 'LEDHYUNDAI49',
    label: 'LED HYUNDAI 49"',
  },
  {
    value: 'LEDHYUNDAI50',
    label: 'LED HYUNDAI 50"',
  },
  {
    value: 'LEDHYUNDAI55',
    label: 'LED HYUNDAI 55"',
  },
  {
    value: 'LEDHYUNDAI58',
    label: 'LED HYUNDAI 58"',
  },
  {
    value: 'LEDHYUNDAI60',
    label: 'LED HYUNDAI 60"',
  },
  {
    value: 'LCDILO26',
    label: 'LCD ILO 26"',
  },
  {
    value: 'LCDILO32',
    label: 'LCD ILO 32"',
  },
  {
    value: 'LCDILO42',
    label: 'LCD ILO 42"',
  },
  {
    value: 'LCDILO55',
    label: 'LCD ILO 55"',
  },
  {
    value: 'LEDILO24',
    label: 'LED ILO 24"',
  },
  {
    value: 'LEDILO32',
    label: 'LED ILO 32"',
  },
  {
    value: 'LEDILO39',
    label: 'LED ILO 39"',
  },
  {
    value: 'LEDILO40',
    label: 'LED ILO 40"',
  },
  {
    value: 'LEDILO42',
    label: 'LED ILO 42"',
  },
  {
    value: 'LEDILO43',
    label: 'LED ILO 43"',
  },
  {
    value: 'LEDILO46',
    label: 'LED ILO 46"',
  },
  {
    value: 'LEDILO50',
    label: 'LED ILO 50"',
  },
  {
    value: 'LEDILO55',
    label: 'LED ILO 55"',
  },
  {
    value: 'LCDJVC26',
    label: 'LCD JVC 26"',
  },
  {
    value: 'LCDJVC32',
    label: 'LCD JVC 32"',
  },
  {
    value: 'LCDJVC37',
    label: 'LCD JVC 37"',
  },
  {
    value: 'LCDJVC42',
    label: 'LCD JVC 42"',
  },
  {
    value: 'LEDJVC24',
    label: 'LED JVC 24"',
  },
  {
    value: 'LEDJVC32',
    label: 'LED JVC 32"',
  },
  {
    value: 'LEDJVC39',
    label: 'LED JVC 39"',
  },
  {
    value: 'LEDJVC40',
    label: 'LED JVC 40"',
  },
  {
    value: 'LEDJVC42',
    label: 'LED JVC 42"',
  },
  {
    value: 'LEDJVC43',
    label: 'LED JVC 43"',
  },
  {
    value: 'LEDJVC46',
    label: 'LED JVC 46"',
  },
  {
    value: 'LEDJVC47',
    label: 'LED JVC 47"',
  },
  {
    value: 'LEDJVC50',
    label: 'LED JVC 50"',
  },
  {
    value: 'LEDJVC55',
    label: 'LED JVC 55"',
  },
  {
    value: 'LEDJVC65',
    label: 'LED JVC 65"',
  },
  {
    value: 'LEDKANJI18',
    label: 'LED KANJI 18"',
  },
  {
    value: 'LEDKANJI22',
    label: 'LED KANJI 22"',
  },
  {
    value: 'LEDKANJI24',
    label: 'LED KANJI 24"',
  },
  {
    value: 'LEDKANJI32',
    label: 'LED KANJI 32"',
  },
  {
    value: 'LEDKANJI43',
    label: 'LED KANJI 43"',
  },
  {
    value: 'LEDKANJI50',
    label: 'LED KANJI 50"',
  },
  {
    value: 'LEDKANJI55',
    label: 'LED KANJI 55"',
  },
  {
    value: 'LEDKANJI60',
    label: 'LED KANJI 60"',
  },
  {
    value: 'LEDKENBROWN24',
    label: 'LED KEN BROWN 24"',
  },
  {
    value: 'LEDKENBROWN32',
    label: 'LED KEN BROWN 32"',
  },
  {
    value: 'LEDKENBROWN39',
    label: 'LED KEN BROWN 39"',
  },
  {
    value: 'LEDKENBROWN40',
    label: 'LED KEN BROWN 40"',
  },
  {
    value: 'LEDKENBROWN48',
    label: 'LED KEN BROWN 48"',
  },
  {
    value: 'LEDKENBROWN49',
    label: 'LED KEN BROWN 49"',
  },
  {
    value: 'LEDKENBROWN50',
    label: 'LED KEN BROWN 50"',
  },
  {
    value: 'LEDKENBROWN55',
    label: 'LED KEN BROWN 55"',
  },
  {
    value: 'LEDKODAK32',
    label: 'LED KODAK 32"',
  },
  {
    value: 'LEDKODAK43',
    label: 'LED KODAK 43"',
  },
  {
    value: 'LEDKODAK50',
    label: 'LED KODAK 50"',
  },
  {
    value: 'LEDKODAK55',
    label: 'LED KODAK 55"',
  },
  {
    value: 'LEDKODAK65',
    label: 'LED KODAK 65"',
  },
  {
    value: 'LCDLG19',
    label: 'LCD LG 19"',
  },
  {
    value: 'LCDLG32',
    label: 'LCD LG 32"',
  },
  {
    value: 'LCDLG40',
    label: 'LCD LG 40"',
  },
  {
    value: 'LCDLG42',
    label: 'LCD LG 42"',
  },
  {
    value: 'LEDLG19',
    label: 'LED LG 19"',
  },
  {
    value: 'LEDLG20',
    label: 'LED LG 20"',
  },
  {
    value: 'LEDLG23',
    label: 'LED LG 23 MONITOR"',
  },
  {
    value: 'LEDLG24',
    label: 'LED LG 24"',
  },
  {
    value: 'LEDLG25',
    label: 'LED LG 25"',
  },
  {
    value: 'LEDLG32',
    label: 'LED LG 32"',
  },
  {
    value: 'LEDLG40',
    label: 'LED LG 40"',
  },
  {
    value: 'LEDLG42',
    label: 'LED LG 42"',
  },
  {
    value: 'LEDLG43',
    label: 'LED LG 43"',
  },
  {
    value: 'LEDLG47',
    label: 'LED LG 47"',
  },
  {
    value: 'LEDLG49',
    label: 'LED LG 49"',
  },
  {
    value: 'LEDLG50',
    label: 'LED LG 50"',
  },
  {
    value: 'LEDLG55',
    label: 'LED LG 55"',
  },
  {
    value: 'LEDLG60',
    label: 'LED LG 60"',
  },
  {
    value: 'LEDLG65',
    label: 'LED LG 65"',
  },
  {
    value: 'LEDLG70',
    label: 'LED LG 70"',
  },
  {
    value: 'LEDMOTOROLA32',
    label: 'LED MOTOROLA 32"',
  },
  {
    value: 'LEDMOTOROLA43',
    label: 'LED MOTOROLA 43"',
  },
  {
    value: 'LEDMOTOROLA50',
    label: 'LED MOTOROLA 50"',
  },
  {
    value: 'LEDMOTOROLA55',
    label: 'LED MOTOROLA 55"',
  },
  {
    value: 'LEDNEX32',
    label: 'LED NEXT 32"',
  },
  {
    value: 'LEDNEX39',
    label: 'LED NEXT 39"',
  },
  {
    value: 'LEDNEX40',
    label: 'LED NEXT 40"',
  },
  {
    value: 'LEDNEX43',
    label: 'LED NEXT 43"',
  },
  {
    value: 'LEDNEX49',
    label: 'LED NEXT 49"',
  },
  {
    value: 'LEDNEX50',
    label: 'LED NEXT 50"',
  },
  {
    value: 'LCDNOBLEX22',
    label: 'LCD NOBLEX 22"',
  },
  {
    value: 'LCDNOBLEX24',
    label: 'LCD NOBLEX 24"',
  },
  {
    value: 'LCDNOBLEX32',
    label: 'LCD NOBLEX 32"',
  },
  {
    value: 'LCDNOBLEX37',
    label: 'LCD NOBLEX 37"',
  },
  {
    value: 'LCDNOBLEX42',
    label: 'LCD NOBLEX 42"',
  },
  {
    value: 'LEDNOBLEX24',
    label: 'LED NOBLEX 24"',
  },
  {
    value: 'LEDNOBLEX32',
    label: 'LED NOBLEX 32"',
  },
  {
    value: 'LEDNOBLEX39',
    label: 'LED NOBLEX 39"',
  },
  {
    value: 'LEDNOBLEX40',
    label: 'LED NOBLEX 40"',
  },
  {
    value: 'LEDNOBLEX42',
    label: 'LED NOBLEX 42"',
  },
  {
    value: 'LEDNOBLEX43',
    label: 'LED NOBLEX 43"',
  },
  {
    value: 'LEDNOBLEX46',
    label: 'LED NOBLEX 46"',
  },
  {
    value: 'LEDNOBLEX49',
    label: 'LED NOBLEX 49"',
  },
  {
    value: 'LEDNOBLEX50',
    label: 'LED NOBLEX 50"',
  },
  {
    value: 'LEDNOBLEX55',
    label: 'LED NOBLEX 55"',
  },
  {
    value: 'LEDNOBLEX58',
    label: 'LED NOBLEX 58"',
  },
  {
    value: 'LEDNOBLEX65',
    label: 'LED NOBLEX 65"',
  },
  {
    value: 'LEDNOBLEX75',
    label: 'LED NOBLEX 75"',
  },
  {
    value: 'LCDPANASONIC32',
    label: 'LCD PANASONIC 32"',
  },
  {
    value: 'LEDPANASONIC32',
    label: 'LED PANASONIC 32"',
  },
  {
    value: 'LEDPANASONIC42',
    label: 'LED PANASONIC 42"',
  },
  {
    value: 'LEDPANORAMMIC32',
    label: 'LED PANORAMIC 32"',
  },
  {
    value: 'LCDPHILCO27',
    label: 'LCD PHILCO 27"',
  },
  {
    value: 'LCDPHILCO32',
    label: 'LCD PHILCO 32"',
  },
  {
    value: 'LCDPHILCO42',
    label: 'LCD PHILCO 42"',
  },
  {
    value: 'LEDPHILCO24',
    label: 'LED PHILCO 24"',
  },
  {
    value: 'LEDPHILCO32',
    label: 'LED PHILCO 32"',
  },
  {
    value: 'LEDPHILCO39',
    label: 'LED PHILCO 39"',
  },
  {
    value: 'LEDPHILCO40',
    label: 'LED PHILCO 40"',
  },
  {
    value: 'LEDPHILCO42',
    label: 'LED PHILCO 42"',
  },
  {
    value: 'LEDPHILCO43',
    label: 'LED PHILCO 43"',
  },
  {
    value: 'LEDPHILCO49',
    label: 'LED PHILCO 49"',
  },
  {
    value: 'LEDPHILCO50',
    label: 'LED PHILCO 50"',
  },
  {
    value: 'LEDPHILCO55',
    label: 'LED PHILCO 55"',
  },
  {
    value: 'LEDPHILCO65',
    label: 'LED PHILCO 65"',
  },
  {
    value: 'LCDPHILIPS19',
    label: 'LCD PHILIPS 19"',
  },
  {
    value: 'LCDPHILIPS20',
    label: 'LCD PHILIPS 20"',
  },
  {
    value: 'LCDPHILIPS22',
    label: 'LCD PHILIPS 22"',
  },
  {
    value: 'LCDPHILIPS24',
    label: 'LCD PHILIPS 24"',
  },
  {
    value: 'LCDPHILIPS26',
    label: 'LCD PHILIPS 26"',
  },
  {
    value: 'LCDPHILIPS32',
    label: 'LCD PHILIPS 32"',
  },
  {
    value: 'LCDPHILIPS37',
    label: 'LCD PHILIPS 37"',
  },
  {
    value: 'LCDPHILIPS40',
    label: 'LCD PHILIPS 40"',
  },
  {
    value: 'LCDPHILIPS42',
    label: 'LCD PHILIPS 42"',
  },
  {
    value: 'LCDPHILIPS46',
    label: 'LCD PHILIPS 46"',
  },
  {
    value: 'LCDPHILIPS47',
    label: 'LCD PHILIPS 47"',
  },
  {
    value: 'LCDPHILIPS52',
    label: 'LCD PHILIPS 52"',
  },
  {
    value: 'LEDPHILIPS22',
    label: 'LED PHILIPS 22"',
  },
  {
    value: 'LEDPHILIPS24',
    label: 'LED PHILIPS 24"',
  },
  {
    value: 'LEDPHILIPS28',
    label: 'LED PHILIPS 28"',
  },
  {
    value: 'LEDPHILIPS32',
    label: 'LED PHILIPS 32"',
  },
  {
    value: 'LEDPHILIPS39',
    label: 'LED PHILIPS 39"',
  },
  {
    value: 'LEDPHILIPS40',
    label: 'LED PHILIPS 40"',
  },
  {
    value: 'LEDPHILIPS42',
    label: 'LED PHILIPS 42"',
  },
  {
    value: 'LEDPHILIPS43',
    label: 'LED PHILIPS 43"',
  },
  {
    value: 'LEDPHILIPS46',
    label: 'LED PHILIPS 46"',
  },
  {
    value: 'LEDPHILIPS47',
    label: 'LED PHILIPS 47"',
  },
  {
    value: 'LEDPHILIPS48',
    label: 'LED PHILIPS 48"',
  },
  {
    value: 'LEDPHILIPS49',
    label: 'LED PHILIPS 49"',
  },
  {
    value: 'LEDPHILIPS50',
    label: 'LED PHILIPS 50"',
  },
  {
    value: 'LEDPHILIPS55',
    label: 'LED PHILIPS 55"',
  },
  {
    value: 'LEDPHILIPS58',
    label: 'LED PHILIPS 58"',
  },
  {
    value: 'LEDPHILIPS65',
    label: 'LED PHILIPS 65"',
  },
  {
    value: 'LEDPHILIPS70',
    label: 'LED PHILIPS 70"',
  },
  {
    value: 'LEDPHILIPS75',
    label: 'LED PHILIPS 75"',
  },
  {
    value: 'LEDPIONEER24',
    label: 'LED PIONEER 24"',
  },
  {
    value: 'LEDPIONEER32',
    label: 'LED PIONEER 32"',
  },
  {
    value: 'LEDPIONEER39',
    label: 'LED PIONEER 39"',
  },
  {
    value: 'LEDPIONEER40',
    label: 'LED PIONEER 40"',
  },
  {
    value: 'LEDPIONEER42',
    label: 'LED PIONEER 42"',
  },
  {
    value: 'LEDPIONEER43',
    label: 'LED PIONEER 43"',
  },
  {
    value: 'LEDPIONEER47',
    label: 'LED PIONEER 47"',
  },
  {
    value: 'LEDPIONEER50',
    label: 'LED PIONEER 50"',
  },
  {
    value: 'LEDPIONEER55',
    label: 'LED PIONEER 55"',
  },
  {
    value: 'LCDRCA24',
    label: 'LCD RCA 24"',
  },
  {
    value: 'LCDRCA32',
    label: 'LCD RCA 32"',
  },
  {
    value: 'LCDRCA42',
    label: 'LCD RCA 42"',
  },
  {
    value: 'LCDRCA46',
    label: 'LCD RCA 46"',
  },
  {
    value: 'LEDRCA19',
    label: 'LED RCA 19"',
  },
  {
    value: 'LEDRCA24',
    label: 'LED RCA 24"',
  },
  {
    value: 'LEDRCA32',
    label: 'LED RCA 32"',
  },
  {
    value: 'LEDRCA39',
    label: 'LED RCA 39"',
  },
  {
    value: 'LEDRCA40',
    label: 'LED RCA 40"',
  },
  {
    value: 'LEDRCA42',
    label: 'LED RCA 42"',
  },
  {
    value: 'LEDRCA43',
    label: 'LED RCA 43"',
  },
  {
    value: 'LEDRCA46',
    label: 'LED RCA 46"',
  },
  {
    value: 'LEDRCA48',
    label: 'LED RCA 48"',
  },
  {
    value: 'LEDRCA49',
    label: 'LED RCA 49"',
  },
  {
    value: 'LEDRCA50',
    label: 'LED RCA 50"',
  },
  {
    value: 'LEDRCA55',
    label: 'LED RCA 55"',
  },
  {
    value: 'LEDRCA65',
    label: 'LED RCA 65"',
  },
  {
    value: 'LCDSAMUNG19',
    label: 'LCD SAMSUNG 19"',
  },
  {
    value: 'LCDSAMUNG22',
    label: 'LCD SAMSUNG 22"',
  },
  {
    value: 'LCDSAMUNG26',
    label: 'LCD SAMSUNG 26"',
  },
  {
    value: 'LCDSAMUNG32',
    label: 'LCD SAMSUNG 32"',
  },
  {
    value: 'LCDSAMUNG37',
    label: 'LCD SAMSUNG 37"',
  },
  {
    value: 'LCDSAMUNG40',
    label: 'LCD SAMSUNG 40"',
  },
  {
    value: 'LCDSAMUNG46',
    label: 'LCD SAMSUNG 46"',
  },
  {
    value: 'LCDSAMUNG52',
    label: 'LCD SAMSUNG 52"',
  },
  {
    value: 'LCDSAMUNG55',
    label: 'LCD SAMSUNG 55"',
  },
  {
    value: 'LCDSAMUNG60',
    label: 'LCD SAMSUNG 60"',
  },
  {
    value: 'LEDSAMUNG19',
    label: 'LED SAMSUNG 19"',
  },
  {
    value: 'LEDSAMUNG22',
    label: 'LED SAMSUNG 22"',
  },
  {
    value: 'LEDSAMUNG24',
    label: 'LED SAMSUNG 24"',
  },
  {
    value: 'LEDSAMUNG26',
    label: 'LED SAMSUNG 26"',
  },
  {
    value: 'LEDSAMUNG27',
    label: 'LED SAMSUNG 27"',
  },
  {
    value: 'LEDSAMUNG28',
    label: 'LED SAMSUNG 28"',
  },
  {
    value: 'LEDSAMUNG32',
    label: 'LED SAMSUNG 32"',
  },
  {
    value: 'LEDSAMUNG40',
    label: 'LED SAMSUNG 40"',
  },
  {
    value: 'LEDSAMUNG43',
    label: 'LED SAMSUNG 43"',
  },
  {
    value: 'LEDSAMUNG46',
    label: 'LED SAMSUNG 46"',
  },
  {
    value: 'LEDSAMUNG48',
    label: 'LED SAMSUNG 48"',
  },
  {
    value: 'LEDSAMUNG49',
    label: 'LED SAMSUNG 49"',
  },
  {
    value: 'LEDSAMUNG50',
    label: 'LED SAMSUNG 50"',
  },
  {
    value: 'LEDSAMUNG55',
    label: 'LED SAMSUNG 55"',
  },
  {
    value: 'LEDSAMUNG58',
    label: 'LED SAMSUNG 58"',
  },
  {
    value: 'LEDSAMUNG60',
    label: 'LED SAMSUNG 60"',
  },
  {
    value: 'LEDSAMUNG65',
    label: 'LED SAMSUNG 65"',
  },
  {
    value: 'LEDSAMUNG70',
    label: 'LED SAMSUNG 70"',
  },
  {
    value: 'LEDSAMUNG75',
    label: 'LED SAMSUNG 75"',
  },
  {
    value: 'LEDSAMUNG78',
    label: 'LED SAMSUNG 78"',
  },
  {
    value: 'LEDSAMUNG82',
    label: 'LED SAMSUNG 82"',
  },
  {
    value: 'LEDSAMUNG85',
    label: 'LED SAMSUNG 85"',
  },
  {
    value: 'LCDSANSEI24',
    label: 'LCD SANSEI 24"',
  },
  {
    value: 'LCDSANSEI32',
    label: 'LCD SANSEI 32"',
  },
  {
    value: 'LCDSANSEI42',
    label: 'LCD SANSEI 42"',
  },
  {
    value: 'LEDSANSEI24',
    label: 'LED SANSEI 24"',
  },
  {
    value: 'LEDSANSEI32',
    label: 'LED SANSEI 32"',
  },
  {
    value: 'LEDSANSEI39',
    label: 'LED SANSEI 39"',
  },
  {
    value: 'LEDSANSEI40',
    label: 'LED SANSEI 40"',
  },
  {
    value: 'LEDSANSEI42',
    label: 'LED SANSEI 42"',
  },
  {
    value: 'LEDSANSEI43',
    label: 'LED SANSEI 43"',
  },
  {
    value: 'LEDSANSEI49',
    label: 'LED SANSEI 49"',
  },
  {
    value: 'LEDSANSEI50',
    label: 'LED SANSEI 50"',
  },
  {
    value: 'LEDSANSEI55',
    label: 'LED SANSEI 55"',
  },
  {
    value: 'LCDSANYO17',
    label: 'LCD SANYO 17"',
  },
  {
    value: 'LCDSANYO19',
    label: 'LCD SANYO 19"',
  },
  {
    value: 'LCDSANYO23',
    label: 'LCD SANYO 23"',
  },
  {
    value: 'LCDSANYO24',
    label: 'LCD SANYO 24"',
  },
  {
    value: 'LCDSANYO27',
    label: 'LCD SANYO 27"',
  },
  {
    value: 'LCDSANYO32',
    label: 'LCD SANYO 32"',
  },
  {
    value: 'LCDSANYO37',
    label: 'LCD SANYO 37"',
  },
  {
    value: 'LCDSANYO42',
    label: 'LCD SANYO 42"',
  },
  {
    value: 'LCDSANYO47',
    label: 'LCD SANYO 47"',
  },
  {
    value: 'LEDSANYO24',
    label: 'LED SANYO 24"',
  },
  {
    value: 'LEDSANYO32',
    label: 'LED SANYO 32"',
  },
  {
    value: 'LEDSANYO39',
    label: 'LED SANYO 39"',
  },
  {
    value: 'LEDSANYO40',
    label: 'LED SANYO 40"',
  },
  {
    value: 'LEDSANYO42',
    label: 'LED SANYO 42"',
  },
  {
    value: 'LEDSANYO43',
    label: 'LED SANYO 43"',
  },
  {
    value: 'LEDSANYO46',
    label: 'LED SANYO 46"',
  },
  {
    value: 'LEDSANYO49',
    label: 'LED SANYO 49"',
  },
  {
    value: 'LEDSANYO50',
    label: 'LED SANYO 50"',
  },
  {
    value: 'LEDSANYO55',
    label: 'LED SANYO 55"',
  },
  {
    value: 'LEDSERIEDORADA24',
    label: 'LED SERIE DORADA 24"',
  },
  {
    value: 'LEDSERIEDORADA32',
    label: 'LED SERIE DORADA 32"',
  },
  {
    value: 'LCDSHARP32',
    label: 'LCD SHARP 32"',
  },
  {
    value: 'LCDSHARP52',
    label: 'LCD SHARP 52"',
  },
  {
    value: 'LEDSHARP32',
    label: 'LED SHARP 32"',
  },
  {
    value: 'LEDSHARP40',
    label: 'LED SHARP 40"',
  },
  {
    value: 'LEDSHARP43',
    label: 'LED SHARP 43"',
  },
  {
    value: 'LEDSHARP50',
    label: 'LED SHARP 50"',
  },
  {
    value: 'LEDSHARP55',
    label: 'LED SHARP 55"',
  },
  {
    value: 'LEDSHARP65',
    label: 'LED SHARP 65"',
  },
  {
    value: 'LEDSHARP70',
    label: 'LED SHARP 70"',
  },
  {
    value: 'LEDSHARP75',
    label: 'LED SHARP 75"',
  },
  {
    value: 'LEDSKYWORTH32',
    label: 'LED SKYWORTH 32"',
  },
  {
    value: 'LEDSKYWORTH40',
    label: 'LED SKYWORTH 40"',
  },
  {
    value: 'LEDSKYWORTH49',
    label: 'LED SKYWORTH 49"',
  },
  {
    value: 'LEDSKYWORTH50',
    label: 'LED SKYWORTH 50"',
  },
  {
    value: 'LEDSKYWORTH55',
    label: 'LED SKYWORTH 55"',
  },
  {
    value: 'LEDSKYWORTH60',
    label: 'LED SKYWORTH 60"',
  },
  {
    value: 'LEDSKYWORTH65',
    label: 'LED SKYWORTH 65"',
  },
  {
    value: 'LCDSSONY19',
    label: 'LCD SONY 19"',
  },
  {
    value: 'LCDSSONY20',
    label: 'LCD SONY 20"',
  },
  {
    value: 'LCDSSONY22',
    label: 'LCD SONY 22"',
  },
  {
    value: 'LCDSSONY24',
    label: 'LCD SONY 24"',
  },
  {
    value: 'LCDSSONY32',
    label: 'LCD SONY 32"',
  },
  {
    value: 'LCDSSONY37',
    label: 'LCD SONY 37"',
  },
  {
    value: 'LCDSSONY40',
    label: 'LCD SONY 40"',
  },
  {
    value: 'LCDSSONY42',
    label: 'LCD SONY 42"',
  },
  {
    value: 'LCDSSONY46',
    label: 'LCD SONY 46"',
  },
  {
    value: 'LCDSSONY47',
    label: 'LCD SONY 47"',
  },
  {
    value: 'LCDSSONY48',
    label: 'LCD SONY 48"',
  },
  {
    value: 'LCDSSONY49',
    label: 'LCD SONY 49"',
  },
  {
    value: 'LCDSSONY50',
    label: 'LCD SONY 50"',
  },
  {
    value: 'LCDSSONY52',
    label: 'LCD SONY 52"',
  },
  {
    value: 'LEDSSONY19',
    label: 'LCD SONY 19"',
  },
  {
    value: 'LEDSSONY20',
    label: 'LED SONY 20"',
  },
  {
    value: 'LEDSSONY22',
    label: 'LED SONY 22"',
  },
  {
    value: 'LEDSSONY24',
    label: 'LED SONY 24"',
  },
  {
    value: 'LEDSSONY32',
    label: 'LED SONY 32"',
  },
  {
    value: 'LCDSSONY37',
    label: 'LCD SONY 37"',
  },
  {
    value: 'LEDSSONY40',
    label: 'LED SONY 40"',
  },
  {
    value: 'LEDSSONY42',
    label: 'LED SONY 42"',
  },
  {
    value: 'LEDSSONY46',
    label: 'LED SONY 46"',
  },
  {
    value: 'LEDSSONY47',
    label: 'LED SONY 47"',
  },
  {
    value: 'LEDSSONY48',
    label: 'LED SONY 48"',
  },
  {
    value: 'LEDSSONY49',
    label: 'LED SONY 49"',
  },
  {
    value: 'LEDSSONY50',
    label: 'LED SONY 50"',
  },
  {
    value: 'LEDSSONY52',
    label: 'LED SONY 52"',
  },
  {
    value: 'LCDTCL23',
    label: 'LCD TCL 23"',
  },
  {
    value: 'LCDTCL24',
    label: 'LCD TCL 24"',
  },
  {
    value: 'LCDTCL26',
    label: 'LCD TCL 26"',
  },
  {
    value: 'LCDTCL27',
    label: 'LCD TCL 27"',
  },
  {
    value: 'LCDTCL32',
    label: 'LCD TCL 32"',
  },
  {
    value: 'LCDTCL40',
    label: 'LCD TCL 40"',
  },
  {
    value: 'LCDTCL42',
    label: 'LCD TCL 42"',
  },
  {
    value: 'LCDTCL46',
    label: 'LCD TCL 46"',
  },
  {
    value: 'LCDTCL55',
    label: 'LCD TCL 55"',
  },
  {
    value: 'LEDTCL23',
    label: 'LED TCL 23"',
  },
  {
    value: 'LEDTCL24',
    label: 'LED TCL 24"',
  },
  {
    value: 'LEDTCL32',
    label: 'LED TCL 32"',
  },
  {
    value: 'LEDTCL39',
    label: 'LED TCL 39"',
  },
  {
    value: 'LEDTCL40',
    label: 'LED TCL 40"',
  },
  {
    value: 'LEDTCL42',
    label: 'LED TCL 42"',
  },
  {
    value: 'LEDTCL43',
    label: 'LED TCL 43"',
  },
  {
    value: 'LEDTCL46',
    label: 'LED TCL 46"',
  },
  {
    value: 'LEDTCL48',
    label: 'LED TCL 48"',
  },
  {
    value: 'LEDTCL49',
    label: 'LED TCL 49"',
  },
  {
    value: 'LEDTCL50',
    label: 'LED TCL 50"',
  },
  {
    value: 'LEDTCL55',
    label: 'LED TCL 55"',
  },
  {
    value: 'LEDTCL65',
    label: 'LED TCL 65"',
  },
  {
    value: 'LEDTCL75',
    label: 'LED TCL 75"',
  },
  {
    value: 'LCDTELEFUNKEN26',
    label: 'LCD TELEFUNKEN 26"',
  },
  {
    value: 'LCDTELEFUNKEN32',
    label: 'LCD TELEFUNKEN 32"',
  },
  {
    value: 'LEDTELEFUNKEN24',
    label: 'LED TELEFUNKEN 24"',
  },
  {
    value: 'LEDTELEFUNKEN28',
    label: 'LED TELEFUNKEN 28"',
  },
  {
    value: 'LEDTELEFUNKEN32',
    label: 'LED TELEFUNKEN 32"',
  },
  {
    value: 'LEDTELEFUNKEN43',
    label: 'LED TELEFUNKEN 43"',
  },
  {
    value: 'LEDTELEFUNKEN49',
    label: 'LED TELEFUNKEN 49"',
  },
  {
    value: 'LEDTELEFUNKEN50',
    label: 'LED TELEFUNKEN 50"',
  },
  {
    value: 'LCDTONOMAC32',
    label: 'LCD TONOMAC 32"',
  },
  {
    value: 'LEDTONOMAC24',
    label: 'LED TONOMAC 24"',
  },
  {
    value: 'LEDTONOMAC32',
    label: 'LED TONOMAC 32"',
  },
  {
    value: 'LEDTONOMAC39',
    label: 'LED TONOMAC 39"',
  },
  {
    value: 'LEDTONOMAC43',
    label: 'LED TONOMAC 43"',
  },
  {
    value: 'LEDTONOMAC49',
    label: 'LED TONOMAC 49"',
  },
  {
    value: 'LEDTONOMAC50',
    label: 'LED TONOMAC 50"',
  },
  {
    value: 'LEDTONOMAC55',
    label: 'LED TONOMAC 55"',
  },
  {
    value: 'LEDTOSHIBA26',
    label: 'LED TOSHIBA 26"',
  },
  {
    value: 'LEDTOSHIBA32',
    label: 'LED TOSHIBA 32"',
  },
  {
    value: 'LEDTOSHIBA40',
    label: 'LED TOSHIBA 40"',
  },
  {
    value: 'LEDTOSHIBA43',
    label: 'LED TOSHIBA 43"',
  },
  {
    value: 'LEDTOSHIBA49',
    label: 'LED TOSHIBA 49"',
  },
  {
    value: 'LEDTOSHIBA50',
    label: 'LED TOSHIBA 50"',
  },
  {
    value: 'LEDTOSHIBA55',
    label: 'LED TOSHIBA 55"',
  },
  {
    value: 'LEDTOSHIBA60',
    label: 'LED TOSHIBA 60"',
  },
  {
    value: 'LEDTOSHIBA65',
    label: 'LED TOSHIBA 65"',
  },
  {
    value: 'LEDVIEWSONIC24',
    label: 'LED VIEWSONIC 24"',
  },
  {
    value: 'LEDVIEWSONIC32',
    label: 'LED VIEWSONIC 32"',
  },
  {
    value: 'LEDVIEWSONIC43',
    label: 'LED VIEWSONIC 43"',
  },
  {
    value: 'LEDVIEWSONIC50',
    label: 'LED VIEWSONIC 50"',
  },
  {
    value: 'LEDVIEWSONIC55',
    label: 'LED VIEWSONIC 55"',
  },
  {
    value: 'LEDVIEWSONIC65',
    label: 'LED VIEWSONIC 65"',
  },
  {
    value: 'LEDZENITH50',
    label: 'LED ZENITH 50"',
  },
  {
    value: 'LEDZENITH55',
    label: 'LED ZENITH 55"',
  },
  {
    value: 'LEDZENITH65',
    label: 'LED ZENITH 65"',
  },
];

export default tvModels;
