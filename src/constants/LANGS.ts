import { LangTypes } from '../types';
import { flags } from '../types';
interface LangsMapType {
  text: string;
  icon: flags;
}

export const LangsMap = new Map<LangTypes, LangsMapType>([
  ['fr', { text: 'French', icon: '🇫🇷' }],
  ['en', { text: 'English', icon: '🇺🇸' }],
  ['pl', { text: 'Polish', icon: '🇵🇱' }],
  ['ga', { text: 'Irish', icon: '🇮🇪' }],
  ['gu', { text: 'Gujarati', icon: '🇮🇳' }],
  ['hi', { text: 'Hindi', icon: '🇮🇳' }],
  ['ta', { text: 'Tamil', icon: '🇮🇳' }],
  ['sw', { text: 'Swahili', icon: '🇹🇿' }],
  ['ar', { text: 'Arabic', icon: '🇸🇦' }],
  ['de', { text: 'German', icon: '🇩🇪' }],
  ['es', { text: 'Spanish', icon: '🇪🇸' }],
  ['id', { text: 'Indonesian', icon: '🇮🇩' }],
  ['ja', { text: 'Japanese', icon: '🇯🇵' }],
  ['ko', { text: 'Korean', icon: '🇰🇷' }],
  ['it', { text: 'Italian', icon: '🇮🇹' }],
  ['pt', { text: 'Portuguese', icon: '🇵🇹' }],
  ['he', { text: 'Hebrew', icon: '🇮🇱' }],
  ['bn', { text: 'Bengali', icon: '🇧🇩' }],
  ['tl', { text: 'Filipino', icon: '🇵🇭' }],
  ['ur', { text: 'Urdu', icon: '🇵🇰' }],
  ['pt', { text: 'Portuguese', icon: '🇵🇹' }],
]);
