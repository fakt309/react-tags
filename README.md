# React tags

You can easy input tags in your React project.

![tags](https://user-images.githubusercontent.com/43887554/194263617-aa828ff1-b153-4ea8-b875-2bd83d610617.gif)

#DEMO

https://fakt309.github.io/react-tags/

# Why you should use this library

 - It's very simple
 - Works with or without an drop-down list
 - Full customization style css
 - Neat animations
 - No extra elements
 - It is possible to choose only from the drop-down list or add any tags
 - Supports the interactions we're used to, such as selecting from a drop-down list with keyboard arrows, deleting tags with backspace, etc.

# How it use

##### 1
`npm i @vgaidadei/react-tags`

##### 2
```
  import { useState } from 'react'
  import Tags from '@vgaidadei/react-tags'

  function App() {
    const [tags, setTags] = useState([])
    return (
      <div>
        <Tags value={tags} onChange={(t) => setTags(t)} />
      </div>
    );
  }

  export default App;
 ```
