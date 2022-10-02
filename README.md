# 📦 use-toast-notification

React hooks library to display notification toast.

[![NPM](https://img.shields.io/npm/v/use-toast-notification.svg)](https://www.npmjs.com/package/use-toast-notification)
[![npm](https://img.shields.io/npm/dm/use-toast-notification.svg)](https://www.npmjs.com/package/use-toast-notification)

## Install

```sh
npm install use-toast-notification

# or

yarn add use-toast-notification
```

<br />


# Usage

## Simple Usage

```tsx
import React from 'react'
import NotificationProvider, { useNotification } from 'use-toast-notification'

const App = () => {
  const notification = useNotification()

  const handleSubmit = async (e) => {
    try {
        notification.show({
            message: 'Your delivery is on its way', 
            title: 'Delivery Status',
            variant: 'success'
        })
    } catch(e){
        notification.show({
            message: 'Your delivery could not be processed', 
            title: 'Delivery Status',
            variant: 'error'
        })
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input name='address'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}


const Main = () =>{
    return (
        <NotificationProvider
			config={{
				position: 'top-center'
			}}
		>
            <App/>
        </NotificationProvider>
    )
}


export default Main
```


| Name          | Type      | Default            | Description                                                  |
| ------------- | --------- | ------------------ | ------------------------------------------------------------ |
| title         | String    | notify             | Title of the notification                                    |
| message       | ReactNode |                    | The body of the notification `required`                      |
| duration      | Number    | `config.duration`  | The duration in seconds                                      |

<br />

## ⚙️ Config

You can customize your notification toast 
>all configurations are optional

```tsx
import React from 'react'
import NotificationProvider from 'use-toast-notification'

const App = () => {
  ...
}

const Main = () =>{
    return (
        <NotificationProvider
			config={{
				position: 'center',
				showClose: true,
				showIcon: false,
				showTitle: true,
				duration: 30, 
			}}
		>
            <App/>
        </NotificationProvider>
    )
}

export default Main
```

## Available Config Properties

| Name             | Type          | Default            | Description                                                  |
| ---------------- | ------------- | ------------------ | ------------------------------------------------------------ |
| position         | String        | 'top-right'                 | The position of the card                                  |
| duration         | Number        | 5                  | The duration in seconds                                       |
| showClose        | Boolean       | false              | Toggle close button                                          |
| showIcon         | Boolean       | true               | Toggle card heading icon                                         |
| showTitle        | Boolean       | true               | Toggle card heading (icon and title) button                                          |
| containerClassName        | String       |                | css class(es) to update the card styling                                          |
| titleClassName        | String       |                | css class(es) to update the title styling                                          |
| messageClassName        | String       |                | css class(es) to update the message styling                                          |
| messageClassName        | String       |                | css class(es) to update the message styling                                          |
| closeIcon        | ReactNode       |               | Custom close icon                                          |
| successIcon        | ReactNode       |               | Custom success icon                                          |
| errorIcon        | ReactNode       |               | Custom error icon                                          |
| infoIcon        | ReactNode       |               | Custom info icon                                          |
| errorColor        | string       |      'red'         | color for the error variant if no custom Icon                                          |
| successColor        | string       |      'green'         | color for the success variant if no custom Icon                                          |
| infoColor        | string       |      'blue'         | color for the info variant if no custom Icon                                          |


> position is one of `'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center' | 'center'`;



## License

MIT © [thelamina](https://github.com/thelamina)
