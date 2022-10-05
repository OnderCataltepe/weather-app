/**Processes the icons that comes from Open Weather Map then change them with donwloaded icons */
import { a01d, a01n, a02d, a02n, a04, a09, a10d, a10n, a11, a13, a50 } from '../assets/index';

export const dailyIconHandler = (arr) => {
  switch (true) {
    case arr.includes('50d') || arr.includes('50n'):
      return a50;
    case arr.includes('13d') || arr.includes('13n'):
      return a13;
    case arr.includes('11d') || arr.includes('11n'):
      return a11;
    case arr.includes('09d') || arr.includes('09n'):
      return a09;
    case arr.includes('10d'):
      return a10d;
    case arr.includes('04d') || arr.includes('04n') || arr.includes('03d') || arr.includes('03n'):
      return a04;
    case arr.includes('02d'):
      return a02d;
    case arr.includes('01d'):
      return a01d;
    case arr.includes('10n'):
      return a10n;
    case arr.includes('02n'):
      return a02n;
    case arr.includes('01n'):
      return a01n;
  }
};
