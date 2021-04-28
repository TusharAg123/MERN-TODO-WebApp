# react-icon-checkbox
A quick component to build instagram-esque like or heart or favorite button for your application. Or can also be used for building custom toggles or anything that a checkbox can do.

# Install
`npm install react-icon-checkbox --save`

# Usage 
```
import React from "react";

import { IconCheckbox } from "react-icon-checkbox";

class App extends React.Component {

    constructor(){
        this.state = {
            checked = false
        }
    }
    
    _onCheckboxClicked = () => {
        this.setState({checked: !this.state.checked});
    }

  render() {
    return (
      <IconCheckbox checked={this.state.checked} 
                    checkedIcon={<Icon type="heart" />} 
                    uncheckedIcon={<Icon type="heart-o" />} 
                    onClick={this._onCheckboxClicked} />
    );
  }
}

export default App;

```

# Props

| props                 | type                    | default  |
|-----------------------|-------------------------|----------|
| checked               | boolean                 | false    |
| onClick               | func                    |          |
| checkedIcon           | string / func / element |          |
| uncheckedIcon         | string / func / element |          |
| iconContainerStyle    | style                   |          |
| iconContainerClassName| string                  |          |

# Who's using it 
* [Bazr](https://bazr.io)