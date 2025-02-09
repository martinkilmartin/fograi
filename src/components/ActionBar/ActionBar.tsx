import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from 'react';
import { Button } from '@nextui-org/react';

const ActionBar = () => {
  const actions: { label: ActionLabel; icon: string }[] = [
    { label: 'Media Types', icon: '🎥' },
    { label: 'Countries', icon: '🌍' },
    { label: 'Languages', icon: '🗣️' },
    { label: 'Categories', icon: '📚' },
    { label: 'Search', icon: '🔍' },
  ];

  type ActionLabel =
    | 'Media Types'
    | 'Countries'
    | 'Languages'
    | 'Categories'
    | 'Search';

  const secondaryActions: Record<ActionLabel, string[]> = {
    'Media Types': ['🎬', '📺', '🎵', '🎮'],
    Countries: ['🇨🇦', '🇺🇸', '🇬🇧', '🇮🇳'],
    Languages: ['🇬🇧', '🇫🇷', '🇪🇸', '🇩🇪'],
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
            (
              action:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | PromiseLikeOfReactNode
                | null
                | undefined,
              index: Key | null | undefined,
            ) => (
              <Button key={index} auto light>
                {action}
              </Button>
            ),
          )}
        </Button.Group>
      )}

      {/* Bottom Button.Group - Main Actions */}
      <Button.Group color="gradient" ghost>
        {actions.map((action, index) => (
          <Button
            key={index}
            auto
            light
            onClick={() => handleActionClick(action.label)}
          >
            {action.icon}
          </Button>
        ))}
      </Button.Group>
    </div>
  );
};

export default ActionBar;
