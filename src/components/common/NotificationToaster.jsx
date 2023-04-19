import toast, { Toaster } from 'react-hot-toast'

export const sucessNotify =
  () =>
  ({ message }) =>
    toast.success(message)
export const notify =
  () =>
  ({ message }) =>
    toast(message)
export const errorNotify = ({ message }) => toast.error(message)

const NotificationToaster = () => {
  return (
    <Toaster
      position='bottom-center'
      reverseOrder={false}
      gutter={8}
      containerClassName=''
      containerStyle={{}}
      toastOptions={{
        error: {
          className: 'bg-darky',
          style: {
            backgroundColor: 'black',
            color: 'white',
            padding: '10px 20px',
            minWidth: '200px',
          },
        },
      }}
    />
  )
}

export default NotificationToaster
