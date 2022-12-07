
const getTimeZone=(timezone)=>{
    switch(timezone){
        case -43200:
         return "Etc/GMT+12";
        case -39600:
         return "Pacific/Midway";
        case -36000:
          return "US/Aleutian";
        case -32400:
          return "America/Anchorage";
        case -28800:
          return "America/Dawson_Creek";
        case -25200:
          return "MST";
        case -21600:
          return "Canada/Saskatchewan";
        case -18000:
          return "EST";
        case -14400:
          return "America/Halifax";
        case -12600:
          return "America/St_Johns";
        case -10800:
          return "America/Buenos_Aires";
        case 0:
          return "Europe/London";
        case 3600:
          return "CET";
        case 7200:
          return "GMT-2";
        case 10800:
          return "Asia/Baghdad";
        case 12600:
          return "Asia/Tehran";
        case 14400:
          return "Asia/Dubai";
        case 16200:
          return "Asia/Kabul";
        case 18000:
          return "Asia/Tashkent";
        case 19800:
          return "Asia/Calcutta";
        case 20700:
          return "Asia/Katmandu";
        case 21600:
          return "Asia/Novosibirsk";
        case 23400:
          return "Asia/Rangoon";
        case 25200:
          return "Asia/Jakarta";
        case 28800:
          return "Hongkong";
        case 32400:
          return "Japan";
        case 34200:
          return "Australia/Darwin";
        case 36000:
          return "Australia/Sydney";
        case 43200:
          return "Pacific/Auckland";
        default:
            return "Asia/Calcutta";
        
    }
}



export {getTimeZone};