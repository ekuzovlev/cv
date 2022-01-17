import React from 'react';

import { Text, HStack, Icon } from '@chakra-ui/react';
import { MdSettings } from 'react-icons/md';

import { GoRuby } from 'react-icons/go';
import { SiRails, SiJavascript, SiReact, SiHtml5 } from 'react-icons/si';

function Skill({ title, color, icon = '', iconSize, description }) {
  let margin = '4';
  switch (title) {
    case 'Ruby':
      icon = GoRuby;
      break;

    case 'Ruby on Rails':
      icon = SiRails;
      break;

    case 'Java Script':
      icon = SiJavascript;
      margin = '6';
      break;

    case 'React':
      icon = SiReact;
      break;

    case 'HTML, CSS':
      icon = SiHtml5;
      margin = '5';
      break;

    case 'Инструменты':
      icon = MdSettings;
      margin = '4';
      break;

    default:
      break;
  }

  return (
    <HStack my="3">
      <Icon as={icon} color={color} boxSize={iconSize} mr={margin} />
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Text>{description}</Text>
    </HStack>
  );
}

export default Skill;
