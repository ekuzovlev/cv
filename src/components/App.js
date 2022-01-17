import React from 'react';
import {
  ChakraProvider,
  Box,
  ListItem,
  Text,
  Link,
  VStack,
  theme,
  HStack,
  Heading,
  Avatar,
  Spacer,
  Container,
  Flex,
  UnorderedList,
  Icon,
  Tooltip,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { MdSettings } from 'react-icons/md';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import avatar from './images/av_my.jpg';
import { GoRuby } from 'react-icons/go';
import {
  SiRails,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiGithub,
} from 'react-icons/si';
import { IoMdGlobe } from 'react-icons/io';
import { FaTelegram } from 'react-icons/fa';
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
        <HStack my="3">
          <Icon as={GoRuby} color="#820C02" boxSize="40px" mr="4" />
          <Text fontSize="xl" fontWeight="bold">
            Ruby
          </Text>{' '}
          <Text>Понимание принципов ООП, Code style, Gems</Text>
        </HStack>

        <HStack my="3">
          <Icon as={SiRails} color="#CC0000" boxSize="40px" mr="4" />
          <Text fontSize="xl" fontWeight="bold">
            Ruby on Rails
          </Text>{' '}
          <Text>MVC, REST, CRUD, API, I18n, RSpec, Postgres</Text>
        </HStack>

        <HStack my="3">
          <Icon as={SiJavascript} color="#F0DB4F" boxSize="30px" mr="6" />

          <Text fontSize="xl" fontWeight="bold">
            Java Script
          </Text>
          <Text>ES6, DOM API, npm, модули, асинхронный JS</Text>
        </HStack>

        <HStack my="2">
          <Icon as={SiReact} color="#61DBFB" boxSize="40px" mr="4" />

          <Text fontSize="xl" fontWeight="bold">
            React
          </Text>
          <Text>Create React App, React Router, хуки</Text>
        </HStack>

        <HStack my="2">
          <Icon as={SiHtml5} color="#E34C26" boxSize="35px" mr="5" />

          <Text fontSize="xl" fontWeight="bold">
            HTML, CSS
          </Text>
          <Text>Flex, Grid, Bootstrap</Text>
        </HStack>

        <HStack my="2">
          <Icon as={MdSettings} color="green.500" boxSize="40px" mr="4" />

          <Text fontSize="xl" fontWeight="bold">
            Инструменты
          </Text>
          <Text>Git, RubyMine, IRB, PRY, VSCode</Text>
        </HStack>

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
        <Flex direction="row" alignItems="center">
          <Link href="https://github.com/kuz-en/bbq" isExternal mr="2">
            <Tooltip
              label="Учебное приложение, в котором пользователи могут создать свое мероприятие и пригласить на него друзей. Можно загружать фотографии, обозначать на карте, комментировать и подписываться"
              placement="top-start"
              hasArrow
              arrowSize={15}
            >
              BBQ (devise, pundit, carrierwave)
            </Tooltip>
          </Link>
          <SiGithub ml="4" />
        </Flex>
        <Flex direction="row" alignItems="center">
          <Link href="https://github.com/kuz-en/millionare" isExternal mr="2">
            <Tooltip
              label="Учебное приложение, по мотивам игры 'Кто хочет стать миллионером'. Много-много тестов."
              placement="top-start"
              hasArrow
              arrowSize={15}
            >
              Millionare (RSpec)
            </Tooltip>
          </Link>
          <SiGithub ml="4" />
        </Flex>
        <Flex direction="row" alignItems="center">
          <Link
            href="https://github.com/kuz-en/market_place_api"
            isExternal
            mr="2"
          >
            <Tooltip
              label="API на основе Rails, JWT, jsonapi-serializer, kaminari, bullet"
              placement="top-start"
              hasArrow
              arrowSize={15}
            >
              API (по мотивам API on Rails 6, A.Rousseau)
            </Tooltip>
          </Link>
          <SiGithub ml="4" />
        </Flex>
        <Flex direction="row" alignItems="center">
          <Link href="https://ip-find.vercel.app/" isExternal mr="2">
            <Tooltip
              label="Учебное приложение которое определяет местоположение по ip, построено по модульному принципу, от себя добавил автоматический поиск местоположения пользователя, в том числе с использованием Geo API (нужно разрешить определять местоположение вашему браузеру"
              placement="top-start"
              hasArrow
              arrowSize={15}
            >
              IP-find (JS ES6, API, GEO)
            </Tooltip>
          </Link>
          <IoMdGlobe ml="4" />
        </Flex>
        <Flex direction="row" alignItems="center">
          <Link href="https://flag-app.vercel.app/" isExternal mr="2">
            <Tooltip
              label="Простое приложение, использует API, показывает флаги стран в соответствии с поисковым запросом"
              placement="top-start"
              hasArrow
              arrowSize={15}
            >
              Flag-app (React)
            </Tooltip>
          </Link>
          <IoMdGlobe ml="4" />
        </Flex>
        <Flex direction="row" alignItems="center">
          <Link href="https://print-labels.vercel.app/" isExternal mr="2">
            <Tooltip
              label="Приложение для печати стандартных этикеток для принтеров Zebra, используется React, Zebra Programming Languagee, Skeleton CSS"
              placement="top-start"
              hasArrow
              arrowSize={15}
            >
              Zebra print (React, ZPL)
            </Tooltip>
          </Link>
          <IoMdGlobe ml="4" />
        </Flex>
        <Flex direction="row" alignItems="center">
          <Link href="https://tap.pora-v-roddom.ru/" isExternal mr="2">
            <Tooltip
              label="Небольшая страничка для магазина, аналог TapLink для Instagram, хостится как статический сайт на Яндекс облаке"
              placement="top-start"
              hasArrow
              arrowSize={15}
            >
              Tap Pora-v-roddom.ru (React, Yandex Cloud Object Storage)
            </Tooltip>
          </Link>
          <IoMdGlobe ml="4" />
        </Flex>

        <Heading textAlign="left" mt="10" mb="4" color="gray.600">
          Связаться со мной
        </Heading>

        <Flex direction="row" alignItems="center">
          <FaTelegram color="#229ED9" />
          <Link href="https://t.me/kuzovlev" isExternal ml="2">
            Telegram (@kuzovlev)
          </Link>
        </Flex>
        <Flex direction="row" alignItems="center">
          <EmailIcon color="gray.600" />
          <Link href="mailto:bio19@yandex.ru" isExternal ml="2">
            E-mail (bio19@yandex.ru)
          </Link>
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
