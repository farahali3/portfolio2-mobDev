// In App.js in a new project

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Task from './components/task';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Click a folder below!</Text>
      <Button 
      title="Personal To-Do" 
      onPress={()=> navigation.navigate('Personal')}
      />
      <Button 
      title="Work To-Do" 
      onPress={()=> navigation.navigate('Work')}
      />
      <Button 
      title="School To-Do" 
      onPress={()=> navigation.navigate('School')}
      />
      <Button 
      title="Groceries List" 
      onPress={()=> navigation.navigate('Groceries')}
      />
    </View>
  );
}

const PersonalScreen = ({ navigation }) => {
  const [task, setNewTask] = useState();
  const [taskItems, setTaskItems] = useState ( [] );
   const addTask = () => {
      setTaskItems([...taskItems, task])
      setNewTask(null);
   }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Personal Tasks</Text>
    
    <View style={styles.items}>
      {
        taskItems.map((item, index) => {
          return <Task key ={index}text={item} />
        })
      }
      <Task text={'Do Laundry'} />
      <Task text={'Organize Shelf'} />
      <Task text={'Find airpods'} />
      </View>

    <KeyboardAvoidingView
      behavior={Platform.ios === "ios" ? "padding" : "height"}
      style={styles.creatNewTask}
      >
       <TextInput style={styles.input}
      placeholder={'Write a new task'} 
      value={task} 
      onChangeText={text => setNewTask(text)} 
      />
        <TouchableOpacity onPress={() => addTask()}>
        <View style={styles.addwrapper}>
        <Text style={styles.plus}> + </Text>
         </View>
         </TouchableOpacity>
      </KeyboardAvoidingView>
  </View>
  )
};

const WorkScreen = ({ navigation }) => {
  const [task, setNewTask] = useState();
  const [taskItems, setTaskItems] = useState ( [] );
   const addTask = () => {
      setTaskItems([...taskItems, task])
      setNewTask(null);
   }

  return (
    <View style={styles.container}>
    <Text style={styles.textStyle}> Work Tasks </Text>
    <View style={styles.items}>
      {
        taskItems.map((item, index) => {
          return <Task key ={index}text={item} />
        })
      }

      <Task text={'Fix Timesheet'} />
      <Task text={'Call at least 3 clients'} />
      <Task text={'Be nice to coworkers'} />  
      <Task text={'Reboot the computers'} /> 
      </View>

      <KeyboardAvoidingView
      behavior={Platform.ios === "ios" ? "padding" : "height"}
      style={styles.creatNewTask}
      >
       <TextInput style={styles.input}
      placeholder={'Write a new task'} 
      value={task} 
      onChangeText={text => setNewTask(text)} 
      />
        <TouchableOpacity onPress={() => addTask()}>
        <View style={styles.addwrapper}>
        <Text style={styles.plus}> + </Text>
         </View>
         </TouchableOpacity>
      </KeyboardAvoidingView>
  </View>
  )
};

const SchoolScreen = ({ navigation }) => {
  const [task, setNewTask] = useState();
  const [taskItems, setTaskItems] = useState ( [] );
   const addTask = () => {
      setTaskItems([...taskItems, task])
      setNewTask(null);
   }

  return (
    <View style={styles.container}>
    <Text style={styles.textStyle}>School Tasks</Text>
    <View style={styles.items}>
      {
        taskItems.map((item, index) => {
          return <Task key ={index}text={item} />
        })
      }
      <Task text={'Learn React Native'} />
      <Task text={'Learn React Navigation'} /> 
      <Task text={'Film Papers Due'} />
      <Task text={'???'} /> 
      <Task text={'Try to graduate'} />  
      </View>

      <KeyboardAvoidingView
      behavior={Platform.ios === "ios" ? "padding" : "height"}
      style={styles.creatNewTask}
      >
       <TextInput style={styles.input}
      placeholder={'Write a new task'} 
      value={task} 
      onChangeText={text => setNewTask(text)} 
      />
        <TouchableOpacity onPress={() => addTask()}>
        <View style={styles.addwrapper}>
        <Text style={styles.plus}> + </Text>
         </View>
         </TouchableOpacity>
      </KeyboardAvoidingView>
  </View>
  )
};

const GroceriesScreen = ({ navigation }) => {
  const [task, setNewTask] = useState();
  const [taskItems, setTaskItems] = useState ( [] );
   const addTask = () => {
      setTaskItems([...taskItems, task])
      setNewTask(null);
   }

  return (
    <View style={styles.container}>
    <Text style={styles.textStyle}> Groceries List </Text>
    <View style={styles.items}>
      {
        taskItems.map((item, index) => {
          return <Task key ={index}text={item} />
        })
      }
      <Task text={'Waffles'} />
      <Task text={'Eggs'} />
      <Task text={'Cake mix'} />
      <Task text={'Taco Seasoning'} />  
      </View>

      <KeyboardAvoidingView
      behavior={Platform.ios === "ios" ? "padding" : "height"}
      style={styles.creatNewTask}
      >
       <TextInput style={styles.input}
      placeholder={'Write a new task'} 
      value={task} 
      onChangeText={text => setNewTask(text)} 
      />
        <TouchableOpacity onPress={() => addTask()}>
        <View style={styles.addwrapper}>
        <Text style={styles.plus}> + </Text>
         </View>
         </TouchableOpacity>
      </KeyboardAvoidingView>
  </View>
  )
};

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={"Home"}
        screenOptions = {{ 
          headerTitleAlign: "center",
          headerTintColor: 'black',
          headerStyle: {
           backgroundColor: 'lightblue', 
          }
        }}
        >
        <Stack.Screen
          name="Personal" 
          component={PersonalScreen} 
          options= {{  
            title:'Personal',
          }}
          />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options= {{  
            title:'Welcome, to your Tasks.',
          }}
         />
        <Stack.Screen 
          name="Work" 
          component={WorkScreen} 
          options= {{  
            title:'Work',
          }}
          />
      <Stack.Screen 
        name="School" 
        component={SchoolScreen} 
        options= {{  
          title:'School',
        }}
        />
      <Stack.Screen 
        name="Groceries" 
        component={GroceriesScreen} 
        options= {{  
          title:'Groceries',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create ({
  container: {  
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center' 
    },
    items: {
      marginTop: 30,
      color: 'blue',
    },
    creatNewTask: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 200,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    plus: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    textStyle: {
      color: 'black',
      fontSize: 30,
    },
});

export default App;