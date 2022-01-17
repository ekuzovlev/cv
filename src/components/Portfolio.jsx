import React from 'react';

import { Link, Flex, Tooltip } from '@chakra-ui/react';

import { SiGithub } from 'react-icons/si';
import { IoMdGlobe } from 'react-icons/io';

function Portfolio({ title, label, link, type }) {
  return (
    <Flex direction="row" alignItems="center" mt="1">
      {type === 'git' ? <SiGithub ml="4" /> : <IoMdGlobe ml="4" />}
      <Link href={link} isExternal ml="2">
        <Tooltip label={label} placement="right" hasArrow arrowSize={15}>
          {title}
        </Tooltip>
      </Link>
    </Flex>
  );
}

export default Portfolio;
