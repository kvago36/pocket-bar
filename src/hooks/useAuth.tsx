import { useContext } from 'react'

import AuthContext from 'context/auth/auth'

const useAuth = () => useContext(AuthContext)

export default useAuth
