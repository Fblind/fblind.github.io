---
title: React recipes and insights
url: "react-recipes"
---

# React Memo

I started in a new project and the first ticket I got was related some snackbar that wasn't hidden correctly at certain amount of time, in fact once the snackbar shows up it will never disapear.

I made a quick look into the code and found where this code was generated, my first thought was alright maybe the timeout and the onTimeout properties which are the ones in charge to handle this are wrong because the library this project is using is on beta since 2016 :/.

After saw the implementation of the library and play around with some console.log I found that it wasn't the problem at all instead the problem was that this component was beign mounted several times, in fact updated every f\*\*cking second because of where it was (inside a component that relays on a clock :face_palm:). And well after seeing this I said to myself: "React.memo !!". I never used it but I knew that it won't re render if props are the same between cycles, so I found this blog post https://dmitripavlutin.com/use-react-memo-wisely/ and I created the following basic memoized snackbar:

```js
import React from "react";
import { FormattedMessage } from "react-intl";
import Snackbar from "react-toolbox/lib/snackbar";

interface IProps {
  label: string; // id of the label to be translated
  onTimeout?: Function;
  active: boolean;
}

const SnackbarWrapper: React.FC<IProps> = ({ label, onTimeout, active }) => {
  const onTimeoutFn = onTimeout ? { onTimeout: onTimeout } : {};
  return (
    <Snackbar
      label={<FormattedMessage id={label} />}
      active={active}
      timeout={5000}
      {...onTimeoutFn}
      type="accept"
    />
  );
};

export const MemoizedSnackbar = React.memo(SnackbarWrapper);
```

# React Redirect Click

I created an app using semantic-ui a while ago and for some part of the application I needed to had a modal that can be moved around so the user can see what is behind it. So what I did was use a lib that makes any component draggable and inside of it I added my Modal with its content. Originally, the app was thought as a web app, not as a mobile app, but since I used semantic-ui it will at least show the content (in a horrible way maybe 😂 but it'll be shown 🤷).
Buuuuut then the app was tested in a mobile and puuuum some things weren't right. The main problem was that when the user tried to click something inside that draggable modal it didn't react to any action.

After some research I came up with a solution using the some basic concepts of the web, event propagation. The click event never arrived to the children component, first I tried to pass the event around, in this case the MouseEvent for the Draggable component but you can't send the same event more than once by default. So the solution was pretty simple, when on mouse down event I stopped the propagation of that event and then the target element dispatch a new fake click event, and depending on how the child component reacts to the click event the behavior of the app will be different.

```js
const redirectClick = (e: MouseEvent) => {
  e.stopPropagation();
  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true
  });
  e.target?.dispatchEvent(event);
};

const handleClick = option => {
  // here I can put the actual code that I want to be dispatch from the click made in the father
  dispatch("something");
};

<Draggable {...draggableProps} onMouseDown={redirectClick}>
  <Modal>
    <Modal.Content>
      {options.map(option => {
        return (
          <Segment
            tertiary
            key={index}
            onClick={() => handleClick(opt)}
            style={{ ...styles, cursor: "pointer" }}
          >
            {intl.formatMessage({ id: opt.id })}
          </Segment>
        );
      })}
    </Modal.Content>
  </Modal>
</Draggable>;
```
