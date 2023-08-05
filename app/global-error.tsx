'use client'
// error 파일은 동일 세그먼트의 layout 이나 template 파일에서 발생한 에러를 잡지 못하는데(부모 세트먼트에서 잡아야함)
// 더이상 부모가 없는 root 세그먼트의 layout 이나 template 에서 발생한 에러를 잡으려면 global-error 파일을 써야한다.
// root layout 조차 감싸기 때문에, 여기에 html 과 body 를 정의해야 한다.
export default function RootGlobalError({
  error,
  reset
}: {
  error: { digest?: string },
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h1>Global 에러 페이지</h1>
        <button onClick={() => reset()}>재시도</button>
      </body>
    </html>
  )
}