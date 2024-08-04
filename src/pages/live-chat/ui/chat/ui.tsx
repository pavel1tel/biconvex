import { ActionIcon, Avatar, Divider, FileInput, Group, Image, ScrollArea, Stack, Text, TextInput, rem } from "@mantine/core";
import clsx from "clsx";
import { useUnit } from "effector-react";
import { useEffect, useRef, useState } from "react";
import { Scrollbar } from "react-scrollbars-custom";

import { getChat, sendTextMessage, uploadChatPhoto } from "@/shared/api/chat/requests";
import { ChartResponse } from "@/shared/api/types";
import { NoMsgIcon } from "@/shared/ui";
import { Clip } from "@/shared/ui/icon/Clip";
import { ReadMessage } from "@/shared/ui/icon/ReadMessage";
import { SendIcon } from "@/shared/ui/icon/SendIcon";
import { UnreadMessage } from "@/shared/ui/icon/UnreadMessage";

import { $chatResponse } from "../../model";
import classes from "./styles.module.css";

export const Chat = () => {
  const chatResponse = useUnit<ChartResponse>($chatResponse);
  const chatReponsePending = useUnit<boolean>(getChat.pending);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const inputFile = useRef<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const handleSendClick = () => {
    if (file) {
      uploadChatPhoto(file);
      setFile(null);
    }
    if (message) {
      sendTextMessage(message);
      setMessage("");
    }
  };
  useEffect(() => {
    let temp: any = [];
    if (!chatReponsePending) {
      Object.keys(chatResponse.messages).forEach((key) => {
        let temp2: any[] = [];
        chatResponse.messages[key].forEach((message) => {
          if (temp2.length == 0) {
            temp2.push(
              <p key={message.id + key} className={clsx(classes.date)}>
                {key}
              </p>,
            );
          }
          temp2.push(
            <>
              {message.type == 1 ? (
                // <></> :
                <Image
                  src={message.text}
                  className={clsx(classes.message, message.target == 1 ? classes.supportMessage : classes.userMessage)}
                ></Image>
              ) : (
                <p className={clsx(classes.message, message.target == 1 ? classes.supportMessage : classes.userMessage)}>{message.text}</p>
              )}
              <Group className={classes.messageTimeWrapper} gap={4}>
                {message.target == 1 ? <ReadMessage /> : message.supporter_viewed === true ? <ReadMessage /> : <UnreadMessage />}
                <Text className={classes.messageTimeText}>{message.time}</Text>
              </Group>
            </>,
          );
        });
        temp.push(temp2);
      });
      setMessages(temp);
    }
  }, [chatReponsePending, chatResponse]);

  useEffect(() => {
    const interval = setInterval(() => {
      getChat();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Stack className={classes.pageContainer} gap={rem("64px")}>
      <Text className={classes.chatTitle}>Support</Text>
      <Group gap={32} className={classes.chatContainer}>
        <Stack gap={32} className={clsx(classes.chatWindow, classes.chatsWrapper)}>
          <Group id={"head"} gap={16}>
            <div className={classes.avatarWrapper}>
              <Avatar size={64} src={`${import.meta.env.BASE_URL}assets/support-avatar.webp`} />
              <div className={clsx(classes.online)} />
            </div>
            <Stack gap={4} h={"70%"}>
              <Text className={classes.chatSupportName}>Support agent</Text>
              <Text className={classes.online}>{"Online"}</Text>
            </Stack>
          </Group>
          <Divider opacity={"0.12"} color={"white"} />
          {messages.length === 0 ? (
            <Stack display="flex" justify="center" align="center" h="100%">
              <NoMsgIcon />
              <Text className={classes.notContactedText}>
                You have not contacted the support center
                <br />
                Ask your question right now
              </Text>
            </Stack>
          ) : (
            <ScrollArea type="scroll" style={{ flex: 1 }}>
              <Scrollbar color="red" style={{ height: "850px", width: "100%" }}>
                <div className={classes.messagesWindow}>{messages.flatMap((message) => message)}</div>
              </Scrollbar>
            </ScrollArea>
          )}

          <Group id="foot" className={classes.inputMessageContainer} gap={16}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                inputFile.current ? inputFile.current.click() : "";
              }}
            >
              {file ? <Image h={24} w="auto" src={URL.createObjectURL(file)}></Image> : <Clip />}
            </div>
            <Divider orientation="vertical" color="white" opacity={0.12} />
            <TextInput value={message} onChange={(e) => setMessage(e.target.value)} className={classes.input} placeholder="Start a new message" />
            <ActionIcon onClick={handleSendClick} className={classes.sendButton}>
              <SendIcon />
            </ActionIcon>
          </Group>
        </Stack>
      </Group>
      <FileInput value={file} onChange={setFile} accept="image/png,image/jpeg" ref={inputFile} display={"none"} />
    </Stack>
  );
};
