import ServerAddPost from '@/app/serverActionSample/serverComponent/serverAddPost'
import ClientAddPost from '@/app/serverActionSample/clientComponent/clientAddPost';

export default function ServerActionPage() {
  return (
    <div>
      <div>Server Action 페이지</div>
      <div>
        <ServerAddPost />
        <ClientAddPost />
      </div>
    </div>
  )
}