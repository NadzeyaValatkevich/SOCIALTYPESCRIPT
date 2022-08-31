import {addPostActionCreator, deletePost, PostType, profileReducer} from "./profile-Reducer";

const state = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 20},
        {id: 2, message: "It's my first post", likesCount: 10}
    ] as Array<PostType>,
    profile: null,
    status: ''
};

test('length of post should be incremented', () => {
    const action = addPostActionCreator('Hello, my friend');

    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

test('message of  new post should be correct', () => {
    const action = addPostActionCreator('Hello, my friend');

    const newState = profileReducer(state, action);

    expect(newState.posts[1].message).toBe("It's my first post");
});

test('after deleting length of messages should be decrement', () => {
    const action = deletePost(1);

    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    const action = deletePost(1000);

    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});