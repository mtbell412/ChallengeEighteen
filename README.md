# ChallengeEighteen
mongoDB challenge

## Description
using mongoDB create a user friends list with thoughts and reactions. Getting comfortable and familiar with mongoDB routes

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

## Future Dev

**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value


### Walkthrough Video:
https://drive.google.com/file/d/1NEDYmBEZ7ifcMWnE1yCURCzvs_GmKl2u/view