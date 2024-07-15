import { ActionIcon, Avatar, Divider, Group, ScrollArea, Stack, Text, TextInput, rem } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { ChatsIcon } from "@/shared/ui/icon/ChatsIcon";
import { Clip } from "@/shared/ui/icon/Clip";
import { ReadMessage } from "@/shared/ui/icon/ReadMessage";
import { SendIcon } from "@/shared/ui/icon/SendIcon";
import { UnreadMessage } from "@/shared/ui/icon/UnreadMessage";

import { mokeChats } from "../../mockedChatData";
import { ChatItem } from "./chatIem/ui";
import classes from "./styles.module.css";

export const Chat = () => {
  const [activeChat, setActiveChat] = useState<(typeof mokeChats)[number] | null>(mokeChats[0]);

  return (
    <Stack className={classes.pageContainer} gap={rem("64px")}>
      <Text className={classes.chatTitle}>Support</Text>
      <Group gap={32} className={classes.chatContainer}>
        <Stack gap={32} className={clsx(classes.chatsBlock, classes.chatsWrapper)}>
          <Group gap={8}>
            <ChatsIcon />
            <Text className={classes.chatsBlockTitle}>Chats</Text>
          </Group>
          <Divider opacity={"0.12"} color={"white"} />
          <Stack className={classes.chatsListContainer} gap={16} pr={16}>
            {mokeChats.map((chat) => (
              <ChatItem key={chat.id} chat={chat} isActiveChat={chat.id === activeChat?.id} selectChat={() => setActiveChat(chat)} />
            ))}
          </Stack>
        </Stack>
        <Stack gap={32} className={clsx(classes.chatWindow, classes.chatsWrapper)}>
          <Group gap={16}>
            <div className={classes.avatarWrapper}>
              <Avatar size={64} src={`${import.meta.env.BASE_URL}assets/support-avatar.png`} />
              {typeof activeChat?.isOnline === "boolean" && (
                <div className={clsx(classes.indicator, activeChat?.isOnline ? classes.online : classes.offline)} />
              )}
            </div>
            <Stack gap={4} h={"70%"}>
              <Text className={classes.chatSupportName}>Support</Text>
              <Text className={classes.online}>{activeChat?.isOnline && "Online"}</Text>
            </Stack>
          </Group>
          <Divider opacity={"0.12"} color={"white"} />
          <ScrollArea type="never" style={{ flex: 1 }}>
            <div className={classes.messagesWindow}>
              <p className={clsx(classes.message, classes.supportMessage)}>Hello Linh!</p>
              <p className={clsx(classes.message, classes.supportMessage)}>I really love your work great job 👌 </p>
              <Group className={classes.messageTimeWrapper} gap={4}>
                <ReadMessage />
                <Text className={classes.messageTimeText}>03:49PM</Text>
              </Group>
              <p className={clsx(classes.message, classes.userMessage)}>Hi Tom </p>
              <p className={clsx(classes.message, classes.userMessage)}>Thank you, I also love it</p>
              <Group className={classes.messageTimeWrapper} gap={4}>
                <UnreadMessage />
                <Text className={classes.messageTimeText}>03:55PM</Text>
              </Group>
            </div>
          </ScrollArea>
          <Group className={classes.inputMessageContainer} gap={16}>
            <Clip />
            <Divider orientation="vertical" color="white" opacity={0.12} />
            <TextInput className={classes.input} placeholder="Start a new message" />
            <ActionIcon className={classes.sendButton}>
              <SendIcon />
            </ActionIcon>
          </Group>
        </Stack>
      </Group>
    </Stack>
  );
};
