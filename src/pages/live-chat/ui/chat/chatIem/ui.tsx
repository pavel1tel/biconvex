import { Avatar, Group, Stack, Text } from "@mantine/core";
import clsx from "clsx";

import classes from "./styles.module.css";

export const ChatItem = ({ chat, isActiveChat, selectChat }: { chat: any; isActiveChat: boolean; selectChat: () => void }) => {
  return (
    <Stack className={clsx(classes.chatItemContainer, { [classes.activeChat]: isActiveChat })} gap={16} onClick={selectChat}>
      <Group className={classes.chatItemHeader} gap={8} align="start" wrap="nowrap">
        <Avatar size={40} src={chat.img} />
        <Stack className={classes.chatInfo} gap={0}>
          <Text truncate="end" className={classes.chatName} title={chat.chatName}>
            {chat.chatName}
          </Text>
          <Text truncate="end" className={classes.chatRole} title={chat.chatRole}>
            {chat.chatRole}
          </Text>
        </Stack>
        <Text className={classes.chatDate}>{chat.date}</Text>
      </Group>
      <Text className={classes.chatDescription} lineClamp={3} title={chat.description}>
        {chat.description}
      </Text>
    </Stack>
  );
};
