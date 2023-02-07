"use client";
import React from "react";
import { useState } from "react";

import {
  Box,
  Button,
  chakra,
  ChakraProvider,
  Checkbox,
  Flex,
  Input,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

type TodoType = { name: string; isDone: boolean };
export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { name: "Todo 1", isDone: false },
    { name: "Todo 2", isDone: false },
    { name: "Todo 3", isDone: false },
    { name: "Todo 4", isDone: false },
    { name: "Todo 5", isDone: false },
  ]);

  const handleUpdate = (x: TodoType) => {
    const newTodos = todos.map((y, i) => {
      if (y.name == x.name) {
        y.isDone = !y.isDone;
      }
      return y;
    });
    setTodos(newTodos);
  };

  const handleAddTodo = () => {
    todos.push({ name: todo, isDone: false });
    setTodos(todos);
    setTodo("");
  };

  const handleDeleteTodo = (todo: string) => {
    const newTodos = todos.filter((x) => {
      return todo != x.name;
    });

    setTodos(newTodos);
  };

  return (
    <>
      <ChakraProvider>
        <Flex
          min-height="auto"
          px={4}
          py={32}
          mx="auto"
          backgroundColor="#F0EAFB">
          <Box
            mx="auto"
            w={{
              lg: 8 / 12,
              xl: 5 / 12,
            }}>
            <chakra.h1
              mb={3}
              fontSize={{
                base: "3xl",
                md: "4xl",
              }}
              fontWeight="bold"
              lineHeight="shorter"
              color="gray.900"
              _dark={{
                color: "white",
              }}>
              Awsome Todo App
            </chakra.h1>
            <chakra.p>
              <Flex
                direction={"row"}
                gap="0.9rem"
                alignItems={"center"}
                pt={["0.2rem", "2rem"]}>
                <Input
                  size={"md"}
                  placeholder="enter todo"
                  focusBorderColor="gray"
                  textColor={"white"}
                  fontSize="3xl"
                  bg={"gray.500"}
                  fontWeight="400"
                  p={7}
                  value={todo}
                  onChange={(e) => {
                    setTodo(e.target.value);
                  }}
                />
                <Button
                  colorScheme="teal"
                  as="a"
                  w={{
                    base: "full",
                    sm: "auto",
                  }}
                  mb={{
                    base: 2,
                    sm: 0,
                  }}
                  p={7}
                  size="lg"
                  cursor="pointer"
                  onClick={handleAddTodo}>
                  Add Todo
                </Button>
              </Flex>
            </chakra.p>
            <chakra.p
              mb={5}
              color="gray.500"
              fontSize={{
                md: "lg",
              }}>
              <List spacing={3}>
                {todos.map((x) => {
                  return (
                    <ListItem key={x.name}>
                      <Flex
                        direction={"row"}
                        gap="0.9rem"
                        alignItems={"center"}
                        pt={["0.2rem", "2rem"]}>
                        <Checkbox
                          checked={x.isDone}
                          colorScheme="green"
                          iconColor="blue.400"
                          iconSize="1rem"
                          backgroundColor={"white"}
                          borderColor={"blue.400"}
                          onChange={(e) => handleUpdate(x)}
                        />
                        <Text fontSize="22px" color="red.700">
                          {x.name}
                        </Text>
                        <Button
                          colorScheme="blue"
                          as="a"
                          w={{
                            base: "full",
                            sm: "auto",
                          }}
                          mb={{
                            base: 2,
                            sm: 0,
                          }}
                          size="sm"
                          cursor="pointer"
                          onClick={() => handleDeleteTodo(x.name)}>
                          Delete
                        </Button>
                      </Flex>
                    </ListItem>
                  );
                })}
              </List>
            </chakra.p>
          </Box>
        </Flex>
        ;
      </ChakraProvider>
      ;
    </>
  );
}
