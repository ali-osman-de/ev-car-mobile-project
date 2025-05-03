import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'

const AIContent = () => {
  const [messages, setMessages] = useState([
    { id: '1', sender: 'bot', text: 'Merhaba! Size nasıl yardımcı olabilirim?' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (!input.trim()) return

    const newMessage = { id: Date.now().toString(), sender: 'user', text: input }
    setMessages(prev => [...prev, newMessage])

    setTimeout(() => {
      const botResponse = { id: Date.now().toString() + '_bot', sender: 'bot', text: 'Bunu yakında anlayacağım!' }
      setMessages(prev => [...prev, botResponse])
    }, 1000)

    setInput('')
  }

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.botMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  )

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messagesList}
        keyboardShouldPersistTaps="handled"
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Mesajınızı yazın..."
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendText}>Gönder</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>

  )
}

export default AIContent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingVertical: 80
  },
  messagesList: {
    paddingHorizontal: 20
  },
  messageContainer: {
    maxWidth: '80%',
    padding: 10,
    marginVertical: 4,
    borderRadius: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E2E2E2',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 20,
  },
  sendText: {
    color: '#fff',
    fontWeight: 'bold',
  },
})
