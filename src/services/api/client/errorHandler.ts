import { toast } from 'react-toastify'

const errorHandler = (error: any, handleError: boolean) => {
  if (!handleError) {
    return Promise.reject(error)
  }

  if (error.response) {
    switch (error.response.status) {
      case 422:
        toast(error?.response?.data?.message, {
          type: 'error'
        })
        break

      case 400:
        console.log(error.response)
        toast(error?.response?.data[0].msg, {
          type: 'error'
        })
        break
      default:
        toast('Algo de errado aconteceu, tente novamente', { type: 'error' })
        break
    }
  }

  return Promise.reject(error)
}

export default errorHandler
