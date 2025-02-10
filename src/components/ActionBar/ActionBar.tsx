import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
  useEffect,
} from 'react';
import { Button } from '@nextui-org/react';
import { ADJACENTS } from '@constants/ADJACENTS';
import { flags } from '@constants/FLAGS';
import { LangsMap } from '@constants/LANGS';
import { Countries as CountryTypes } from '../../types/countries';
import { LangTypes } from 'src/types';

const AnimatedButton = ({
  action,
  secondaryActions,
  onClick,
}: {
  action: { label: ActionLabel; icon: string };
  secondaryActions: string[];
  onClick: () => void;
}) => {
  const [displayIcon, setDisplayIcon] = useState(action.icon);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    let index = 0;
    const cycleDurations = [3000, 6000, 9000]; // Cycles with increasing intervals
    let cycleIndex = 0;

    const startCycle = () => {
      if (cycleIndex >= cycleDurations.length) return; // Stop after 3 cycles

      setTimeout(() => {
        interval = setInterval(() => {
          index = (index + 1) % (secondaryActions.length + 1);
          setDisplayIcon(
            index === secondaryActions.length
              ? action.icon
              : secondaryActions[index],
          );
          if (index === secondaryActions.length) {
            clearInterval(interval!);
            cycleIndex++;
            startCycle();
          }
        }, 1500);
      }, cycleDurations[cycleIndex]);
    };

    startCycle();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [action.icon, secondaryActions]);

  return (
    <Button auto light onClick={onClick} aria-label={action.label}>
      {displayIcon}
    </Button>
  );
};

interface ActionBarProps {
  userCountry?: CountryTypes;
}

type ActionLabel =
  | 'Media Types'
  | 'Countries'
  | 'Languages'
  | 'Categories'
  | 'Search';

const ActionBar = ({ userCountry }: ActionBarProps) => {
  const actions: { label: ActionLabel; icon: string }[] = [
    { label: 'Media Types', icon: '🎥' },
    { label: 'Countries', icon: '🌍' },
    { label: 'Languages', icon: '🗣️' },
    { label: 'Categories', icon: '📚' },
    { label: 'Search', icon: '🔍' },
  ];

  const secondaryActions: Record<ActionLabel, string[]> = {
    'Media Types': ['🎬', '📺', '🎵', '🎮'],
    Countries: (userCountry &&
      ADJACENTS.get(userCountry)?.countries.map((c) => flags.get(c) ?? c)) ?? [
      '🇨🇦',
      '🇺🇸',
      '🇬🇧',
      '🇮🇳',
    ],
    Languages: (userCountry &&
      ADJACENTS.get(userCountry)?.langs.map(
        (l) => LangsMap.get(l as LangTypes)?.icon ?? (l as LangTypes),
      )) ?? ['🇬🇧', '🇫🇷', '🇪🇸', '🇩🇪'],
    Categories: ['📖', '🎨', '🏀', '💼'],
    Search: ['🔍', '📅', '🔥'],
  };

  const [selectedAction, setSelectedAction] = useState<ActionLabel | null>(
    null,
  );

  const handleActionClick = (actionLabel: ActionLabel | null) => {
    setSelectedAction((prev) => (prev === actionLabel ? null : actionLabel));
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        width: 'min-content',
        zIndex: 1000,
      }}
    >
      {/* Top Button.Group - Secondary Actions */}
      {selectedAction && (
        <Button.Group color="gradient" ghost>
          {secondaryActions[selectedAction].map(
            (action: string, index: number) => (
              <Button key={index} auto light aria-label={action}>
                {action}
              </Button>
            ),
          )}
        </Button.Group>
      )}

      {/* Bottom Button.Group - Main Actions */}
      <Button.Group color="gradient" ghost>
        {actions.map((action, index) => (
          <AnimatedButton
            key={index}
            action={action}
            secondaryActions={secondaryActions[action.label]}
            onClick={() => handleActionClick(action.label)}
          />
        ))}
      </Button.Group>
    </div>
  );
};

export default ActionBar;
