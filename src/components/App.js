import React from 'react';
import { extendTheme } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import avatar from './images/av_my.jpg';
import projects from '../data/projects';
import contacts from '../data/contacts';
import skills from '../data/skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Skill from './Skill';
import {
  ChakraProvider,
  Box,
  ListItem,
  Text,
  Link,
  VStack,
  HStack,
  Heading,
  Avatar,
  Spacer,
  Container,
  Flex,
  UnorderedList,
} from '@chakra-ui/react';

import { SiGithub } from 'react-icons/si';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="row" justifyContent="right" m="4">
        <Link href="https://github.com/kuz-en/" isExternal mr="1">
          <Box border="1px" borderColor="gray.200" borderRadius="md" p="1">
            <SiGithub size="30px" color="gray.600" />
          </Box>
        </Link>
        <ColorModeSwitcher border="1px" borderColor="gray.200" />
      </Flex>
      <Container maxW="container.md" mt="6" mb="20">
        <HStack>
          <Avatar size="2xl" name="Евгений Кузовлев" src={avatar} />
          <Spacer />
          <VStack textAlign="left">
            <Heading as="h1" size="2xl">
              Евгений Кузовлев
            </Heading>
            <Heading as="h2" size="d" color="gray.600" alignSelf="left">
              Ruby on Rails Developer
            </Heading>
          </VStack>
        </HStack>
        <Heading textAlign="left" mt="20" color="gray.600">
          О себе
        </Heading>
        <Text mt="4">
          Занимаюсь веб-разработкой, люблю создавать работающие приложения.
          Забочусь о пользователях. Люблю красивое. Требователен к себе. DRY.
          Соединяю фронтенд с бэкендом.
        </Text>
        <Heading textAlign="left" mt="10" color="gray.600" mb="4">
          Навыки
        </Heading>

        {skills.map(item => {
          return (
            <Skill
              id={item.id}
              title={item.title}
              color={item.color}
              iconSize={item.icon_size}
              description={item.description}
            />
          );
        })}

        <Heading textAlign="left" mt="10" mb="4" color="gray.600">
          Образование
        </Heading>
        <UnorderedList>
          <ListItem>Первый МГМУ имени И.М. Сеченова (Ph.D)</ListItem>
          <ListItem>
            Высшая школа бизнеса МГУ им. М. В. Ломоносова (MBA)
          </ListItem>
        </UnorderedList>
        <Heading textAlign="left" mt="10" mb="4" color="gray.600">
          Курсы
        </Heading>
        <UnorderedList>
          <ListItem>Хороший Программист, 2021. Ruby, Ruby On Rails</ListItem>
        </UnorderedList>

        <Heading textAlign="left" mt="10" mb="4" color="gray.600">
          Проекты
        </Heading>

        {projects.map(project => {
          return (
            <Portfolio
              key={project.id}
              title={project.title}
              label={project.label}
              link={project.link}
              type={project.type}
            />
          );
        })}

        <Heading textAlign="left" mt="10" mb="4" color="gray.600">
          Связаться со мной
        </Heading>

        {contacts.map(contact => {
          return (
            <Contact
              key={contact.id}
              title={contact.title}
              link={contact.link}
              color={contact.color}
              icon={contact.icon}
            />
          );
        })}
      </Container>
    </ChakraProvider>
  );
}

export default App;
