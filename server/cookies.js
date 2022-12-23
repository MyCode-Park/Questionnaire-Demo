import Cookies from 'js-cookie'

export const getSessionId = (name) => Cookies.get(name) || ''

export const setCookie = () => Cookies.set('foo', 'bar')
