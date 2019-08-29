import request from '@/utils/request'

export function login(userName, passWord) {
  return request({
    url: 'user/login',
    method: 'post',
    data: {
      "userName": userName,
      "passWord": passWord
    }
  })
}

export function register(userName, passWord) {
  return request({
    url: 'user/register',
    method: 'post',
    data: {
      "userName": userName,
      "passWord": passWord
    }
  })
}

