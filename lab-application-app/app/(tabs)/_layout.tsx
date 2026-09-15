import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: '#2F6B6B',
        tabBarInactiveTintColor: '#222',

        tabBarStyle: {
          height: 77,
          paddingTop: 10,
          paddingBottom: 5,
          borderRadius: 12,
          marginHorizontal: 8,
          marginBottom: 8,
          backgroundColor: '#FFFFFF',
          borderWidth: 1,
          borderColor: '#D7E7E5',
        },

        tabBarLabelStyle: {
          fontFamily: 'InterMedium',
          fontSize: 12,
        },
      }}
    >
      {/* HOME */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="home-outline"
              size={20}
              color={color}
            />
          ),
        }}
      />

      {/* BOOKINGS */}
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="book-outline"
              size={20}
              color={color}
            />
          ),
        }}
      />

      {/* TESTS - ONLY THIS SCREEN HAS NO BOTTOM BAR */}
      <Tabs.Screen
        name="tests"
        options={{
          title: 'Tests',
          tabBarStyle: {
            display: 'none',
          },
        }}
      />

      {/* SAMPLES */}
      <Tabs.Screen
        name="sample"
        options={{
          title: 'Samples',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="eyedrop-outline"
              size={20}
              color={color}
            />
          ),
        }}
      />

      {/* MORE */}
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="ellipsis-horizontal"
              size={20}
              color={color}
            />
          ),
        }}
      />

      {/* ADD TEST */}
      <Tabs.Screen
        name="add-test"
        options={{
          href: null,
           tabBarStyle: {
            display: 'none',
          },
        }}
      />

      {/* TEST DETAILS */}
      <Tabs.Screen
        name="test-details"
        options={{
          href: null,
           tabBarStyle: {
            display: 'none',
          },
        }}
      />
    </Tabs>
  );
}

