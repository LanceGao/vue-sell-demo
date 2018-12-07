import axios from 'axios'

const errOk = 0

export function get(url) {
  return function(params) {
    return axios.get(url, {
      params
    }).then((res) => {
      const { errno, data } = res.data
      if (errno === errOk) {
        return data
      }
    })
  }
}
