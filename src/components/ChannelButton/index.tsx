import React from 'react';

// styles
import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

// interface
export interface Props {
  channelName: string;
  selected?: boolean;
}

// -------------------------------------------------
// Export Function
// -------------------------------------------------
const ChannelButton: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
