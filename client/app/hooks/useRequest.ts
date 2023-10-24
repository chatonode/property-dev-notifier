import axios from 'axios'

export const useRequest = () => {
  const sendRequest = async (config: any) => {
    try {
      const response = await axios(config)
      // Handle response here
    } catch (error) {
      // Handle error here
    }
  }

  return {
    sendRequest,
    isLoading: false, // Implement loading state
    error: null, // Implement error handling
    responseData: null, // Store response data
  }
}
