import { Button } from '@nextui-org/react';

const ActionBar = () => {
  const actions = [
    { label: 'Media Types', icon: '🎥' },
    { label: 'Countries', icon: '🌍' },
    { label: 'Languages', icon: '🗣️' },
    { label: 'Categories', icon: '📚' },
    { label: 'Search', icon: '🔍' },
  ];

  return (
    <Button.Group
      color="gradient"
      ghost
      css={{
        position: 'fixed',
        bottom: 0,
        width: 'min-content',
        backgroundColor: '#ffffff',
        boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}
    >
      {actions.map((action, index) => (
        <Button key={index} auto light size={'xs'}>
          {action.icon}
        </Button>
      ))}
    </Button.Group>
  );
};

export default ActionBar;
