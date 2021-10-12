import { useHook } from './modal.hook'
import { Modal } from './modal.view'
import { useCallback } from 'react'

export type UseModal = (
  id: string
) => [ModalWrapper: React.FC<{ children: React.ReactNode }>, open: () => void, close: () => void]

export const useModal: UseModal = (id: string) => {
  const { open, close } = useHook(id)

  const ModalWrapper = useCallback(
    ({ children }) => {
      return <Modal id={id}>{children}</Modal>
    },
    [id]
  )

  return [ModalWrapper, open, close]
}
