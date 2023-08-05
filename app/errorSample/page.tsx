import ClientErrorComponent from '@/app/errorSample/clientErrorComponent'

export default function ErrorSamplePage() {
  throw new Error('서버컴포넌트 에러 발생')
  return (
    <div>
      <div>에러 샘플 페이지 내용</div>
      <ClientErrorComponent></ClientErrorComponent>
    </div>
  )
}