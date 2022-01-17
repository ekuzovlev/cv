import React from 'react';
import { Link, Flex } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaTelegram } from 'react-icons/fa';

function Contact({ title, link, color, icon }) {
  return (
    <Flex direction="row" alignItems="center" mt="1">
      {icon === 'telegram' ? (
        <FaTelegram color={color} />
      ) : (
        <EmailIcon color={color} />
      )}

      <Link href={link} isExternal ml="2">
        {title}
      </Link>
    </Flex>
  );
}

export default Contact;
