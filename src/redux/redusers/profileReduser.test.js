import React from "react";
import profileReduser, { addPost } from "./profileReduser";

let state = {
    postData: [
        { id: 0, text: 'Это статья номер 1' },
        { id: 1, text: 'Это статья номер 2' },
        { id: 2, text: 'Это статья номер 3' }, // Нужно обязательно ставить зпт.
    ]
};

test('Length of posts, should be incremented', () => {
    // 1. Test data
    let action = addPost('it-kamasutra');

    // 2. Action
    let newState = profileReduser(state, action);

    // 3. Expectation
    expect(newState.postData.length).toBe(4);
  });

test('Message of the new post, should be correct', () => {
    let action = addPost('it-kamasutra');

    let newState = profileReduser(state, action);

    expect(newState.postData[3].text).toBe('it-kamasutra');
  });

  