import Frame from '@/components/frame/frame'
import Modal from '@/components/modal/modal'

export default function ModalInterceptor({
  params: {
    id
  }
}: {
  params: {
    id: string
  }
}) {
  return (
    <Modal>
      <Frame id={id}></Frame>
    </Modal>
  )
}
