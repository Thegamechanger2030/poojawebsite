const SYNODIC_MONTH_DAYS = 29.530588853;
const KNOWN_NEW_MOON_UTC = Date.UTC(2000, 0, 6, 18, 14);

const TITHI_NAMES = [
  'Pratipada',
  'Dwitiya',
  'Tritiya',
  'Chaturthi',
  'Panchami',
  'Shashthi',
  'Saptami',
  'Ashtami',
  'Navami',
  'Dashami',
  'Ekadashi',
  'Dwadashi',
  'Trayodashi',
  'Chaturdashi',
  'Purnima / Amavasya'
];

export function getApproximateLunarDay(date) {
  const dateUtc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 12);
  const daysSinceReference = (dateUtc - KNOWN_NEW_MOON_UTC) / 86_400_000;
  const lunarAge = ((daysSinceReference % SYNODIC_MONTH_DAYS) + SYNODIC_MONTH_DAYS)
    % SYNODIC_MONTH_DAYS;
  const lunarDay = Math.min(30, Math.floor((lunarAge / SYNODIC_MONTH_DAYS) * 30) + 1);
  const tithiNumber = ((lunarDay - 1) % 15) + 1;
  const paksha = lunarDay <= 15 ? 'Shukla Paksha' : 'Krishna Paksha';
  const tithi = tithiNumber === 15
    ? (lunarDay === 15 ? 'Purnima' : 'Amavasya')
    : TITHI_NAMES[tithiNumber - 1];

  return {
    lunarDay,
    paksha,
    tithi,
    isFullMoonEstimate: lunarDay === 15,
    isNewMoonEstimate: lunarDay === 30
  };
}

export function getApproximateObservances(date) {
  const { lunarDay } = getApproximateLunarDay(date);

  switch (lunarDay) {
    case 4:
      return ['Vinayaki Chaturthi (estimate)'];
    case 11:
    case 26:
      return ['Ekadashi Vrat (estimate)'];
    case 13:
    case 28:
      return ['Pradosh Vrat (estimate)'];
    case 15:
      return ['Purnima (estimate)'];
    case 19:
      return ['Sankashti Chaturthi (estimate)'];
    case 29:
      return ['Masik Shivratri (estimate)'];
    case 30:
      return ['Amavasya (estimate)'];
    default:
      return [];
  }
}
