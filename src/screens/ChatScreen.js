import React, { useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import data from '../data/data';


const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        id: messages.length,
        type: 'user',
        text: inputText,
      };

      const botResponse = data.find((item) => item.text.toLowerCase().includes(inputText.toLowerCase()));

      if (botResponse) {
        const botMessage = {
          id: messages.length + 1,
          type: 'bot',
          text: botResponse.text,
        };
        setMessages([...messages, newMessage, botMessage]);
      } else {
        const defaultBotMessage = {
          id: messages.length + 1,
          type: 'bot',
          text: "I'm sorry, I don't have an answer for that question.",
        };
        setMessages([...messages, newMessage, defaultBotMessage]);
      }

      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.messageContainer, item.type === 'user' ? styles.userMessage : styles.botMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  messageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#DCF8C5',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    paddingVertical: 8,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    marginRight: 8,
  },
  sendButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C5',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#C5D9F8',
  },
});

