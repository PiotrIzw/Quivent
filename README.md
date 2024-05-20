Attention! This is not the main project repository. It only contains some details about the app I'm  building.

Current progress: 
- Backend apps: 90% completed
- Mobile app: 70% completed
- Web app: Stage I about to be published (Alpha version)


# Quivent

**Quivent** is a multi-platform application designed to help people find events that match their interests and hobbies. If you're too busy to keep track of what's happening near you, or you want to go out, play sports, or enjoy your hobbies but your friends are unavailable, try Quivent. Find friends, socialize, and enjoy your life!

## Main Features

There are many applications with similar purposes, but what makes Quivent unique?

### Nearby Events

Find nearby events using the location filter and adjust the distance range to what suits you. Get notified when there are new events you might be interested in or wouldn’t want to miss.

### Create Your Own Events

Unlike many other applications that require multiple steps and extensive information to post your own event, Quivent makes it simple. When you create a new event, you can be sure it will be visible and accessible.

### Private Meetings

When you set your event privacy criteria to 'private', the event won't be shared publicly. You'll receive a code to share with your friends, ensuring only they can see the event details.

### Event Chats

Each event has its own live chat channel, allowing you to quickly communicate with all attendees.

### Additional Features

The app also includes user notifications, user profiles (with followers), event history, and a variety of filters.

## Technical Stack

![Stack of technologies diagram v 0 1](https://github.com/PiotrIzw/Quivent/assets/58219259/3bd774bb-3f4c-49a5-8277-a97dcba0af97)

The application stack consists of three main components:

- **Scraper Application**: A Java app using the Selenium framework to scrape event data from various source websites. It continuously looks for new events based on selected date ranges and locations, sending the data to a Kafka topic. Multiple instances can run with different startup parameters.

- **Processor Application**: This application receives data from Kafka and sends it to the REST API. This process should ideally save events directly to the database to avoid delays in the API, though this is currently not necessary.

- **REST API**: The main app provides an interface for the front-end applications. Security is ensured through user access, JWT tokens, and user roles.

- **Front-end Applications**:
  - **Mobile Application**: Developed using React Native, supporting Android devices (iOS support is planned).
  - **Web Application**: Developed using React.js.

## Demo

A demo is not available at the moment. This part will be updated soon.

