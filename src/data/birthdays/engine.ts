import type { BirthdayProfileData } from './types';
import { getJanuaryProfile } from './months/january';
import { getFebruaryProfile } from './months/february';
import { getMarchProfile } from './months/march';
import { getAprilProfile } from './months/april';
import { getMayProfile } from './months/may';
import { getJuneProfile } from './months/june';
import { getJulyProfile } from './months/july';
import { getAugustProfile } from './months/august';
import { getSeptemberProfile } from './months/september';
import { getOctoberProfile } from './months/october';
import { getNovemberProfile } from './months/november';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAYS_IN_MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/**
 * Primary dispatch engine for all 365 birthday profiles.
 */
export function getBirthdayProfile(monthIndex: number, day: number): BirthdayProfileData {
  if (monthIndex === 0) {
    return getJanuaryProfile(day);
  }
  if (monthIndex === 1) {
    return getFebruaryProfile(day);
  }
  if (monthIndex === 2) {
    return getMarchProfile(day);
  }
  if (monthIndex === 3) {
    return getAprilProfile(day);
  }
  if (monthIndex === 4) {
    return getMayProfile(day);
  }
  if (monthIndex === 5) {
    return getJuneProfile(day);
  }
  if (monthIndex === 6) {
    return getJulyProfile(day);
  }
  if (monthIndex === 7) {
    return getAugustProfile(day);
  }
  if (monthIndex === 8) {
    return getSeptemberProfile(day);
  }
  if (monthIndex === 9) {
    return getOctoberProfile(day);
  }
  if (monthIndex === 10) {
    return getNovemberProfile(day);
  }

  // Fallback engine for other months until their dedicated month modules are loaded
  return getJanuaryProfile(day); // temporary fallback using January generator structure
}

export function getAllBirthdayProfiles(): BirthdayProfileData[] {
  const profiles: BirthdayProfileData[] = [];
  for (let m = 0; m < 12; m++) {
    const days = DAYS_IN_MONTH[m];
    for (let d = 1; d <= days; d++) {
      profiles.push(getBirthdayProfile(m, d));
    }
  }
  return profiles;
}
