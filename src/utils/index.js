export const cities = [
  'Adana',
  'Adıyaman',
  'Afyon',
  'Ağrı',
  'Aksaray',
  'Amasya',
  'Ankara',
  'Antalya',
  'Ardahan',
  'Artvin',
  'Aydın',
  'Balıkesir',
  'Bartın',
  'Batman',
  'Bayburt',
  'Bilecik',
  'Bingöl',
  'Bitlis',
  'Bolu',
  'Burdur',
  'Bursa',
  'Çanakkale',
  'Çankırı',
  'Çorum',
  'Denizli',
  'Diyarbakır',
  'Düzce',
  'Edirne',
  'Elazığ',
  'Erzincan',
  'Erzurum',
  'Eskişehir',
  'Gaziantep',
  'Giresun',
  'Gümüşhane',
  'Hakkari',
  'Hatay',
  'Iğdır',
  'Isparta',
  'İstanbul',
  'İzmir',
  'Kahramanmaraş',
  'Karabük',
  'Karaman',
  'Kars',
  'Kastamonu',
  'Kayseri',
  'Kilis',
  'Kırıkkale',
  'Kırklareli',
  'Kırşehir',
  'Kocaeli',
  'Konya',
  'Kütahya',
  'Malatya',
  'Manisa',
  'Mardin',
  'Mersin',
  'Muğla',
  'Muş',
  'Nevşehir',
  'Niğde',
  'Ordu',
  'Osmaniye',
  'Rize',
  'Sakarya',
  'Samsun',
  'Şanlıurfa',
  'Siirt',
  'Sinop',
  'Şırnak',
  'Sivas',
  'Tekirdağ',
  'Tokat',
  'Trabzon',
  'Tunceli',
  'Uşak',
  'Van',
  'Yalova',
  'Yozgat',
  'Zonguldak'
];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/** We fetch the data in three-hour periods without breakpoints by days. It seperates data by days. */

export const separateDays = (data) => {
  let dayArr = [];
  data.list.forEach((item, index, arr) => {
    if (index === 0) {
      let newArr = [{ ...item, city: data.city.name }];
      dayArr.push(newArr);
    } else {
      let d1 = new Date(arr[index].dt_txt);
      let d2 = new Date(arr[index - 1].dt_txt);
      let day1 = days[d1.getDay()];
      let day2 = days[d2.getDay()];
      if (day1 === day2) {
        dayArr[dayArr.length - 1].push({ ...item, city: data.city.name });
      } else {
        let newArr = [{ ...item, city: data.city.name }];
        dayArr.push(newArr);
      }
    }
  });
  if (dayArr.length === 6) {
    dayArr.splice(5, 1);
  }

  return dayArr;
};
/**Creates an array of objects including necessary data for daily and hourly weather cards. */
export const getCardDatas = (data) => {
  let newData = separateDays(data);
  let list = newData.map((item) => {
    let cityProvince = item[0].city;
    let city = cityProvince.split(' ')[0];
    let d = new Date(item[0].dt_txt);
    let date = d.toLocaleDateString();
    let day = days[d.getDay()];
    let minTemp = Math.floor(Math.min(...item.map((element) => element.main.temp_min)));
    let maxTemp = Math.floor(Math.max(...item.map((element) => element.main.temp_max)));
    let hourlyList = item.map((element) => {
      let dHour = new Date(element.dt_txt);
      let hour = `${dHour.getHours()}:00`;
      let weatherType = element.weather[0].main;
      let weatherIcon = element.weather[0].icon;
      let temp = element.main.temp;
      let windSpeed = element.wind.speed;
      let windDeg = element.wind.deg;
      let windGust = element.wind.gust;
      return { hour, temp, weatherIcon, weatherType, windSpeed, windDeg, windGust };
    });

    return { day, date, minTemp, maxTemp, hourlyList, city };
  });

  return list;
};
