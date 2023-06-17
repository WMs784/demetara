import { useEffect } from 'react'
import Link from 'next/link'
import { useAuthContext } from '@/app/providers/AuthProvider'
import { login } from '@/firebase/auth'

const OWNER = '<OWNER>'
const REPO = '<REPO>'

export const Main: React.FC = () => {
  const { userData } = useAuthContext()
  const token = userData?.idToken
  // const token = userData?.accessToken

  // // アクセストークンを使用してGitHub API（GET /Issues）へリクエストする
  // useEffect(() => {
  //   if (token) {
  //     fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
  //       headers: {
  //         Authorization: `token ${token}`,
  //         Accept: 'application / vnd.github.v3 + json',
  //       },
  //     }).then((result) => {
  //       result.json().then((result) => {
  //         console.log(result)
  //       })
  //     })
  //   }
  // }, [token])

  return (
    <>
      <div>
        {token ? (
          <span></span>
        ) : (
          <div>
            <button onClick={() => login()}>login</button>
          </div>
        )}
        <Link href="/ranking">Ranking</Link>
      </div>
    </>
  )
}
