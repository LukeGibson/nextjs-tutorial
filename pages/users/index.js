import Link from 'next/link';
import styles from '../../styles/users.module.css'

// this keyword function runs before component is rendered
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { users: data }
  }
}

const Users = ({ users }) => {
  return (
    <div>
      <h1>All Users</h1>
      {
        users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <a className={styles.single}>
              <h3>{user.name}</h3>
            </a>
          </Link>
        ))
      }
    </div>
  )
}

export default Users;