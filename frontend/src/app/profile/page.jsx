import { get } from '../../utils/serverFetch';
import Profile from '../../components/Profile/Profile';

async function getUser(id) {
  const res = await get(`users/${id}`);
  if(res.ok) return res.body;
  else console.error(`${res.code} ${res.status}`);
}

export default async function ProfilePage() {

  const data = await getUser(6);

  return (
    <section className='page'>
      <Profile data={data} />
    </section>
  )
}