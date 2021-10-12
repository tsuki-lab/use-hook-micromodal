import MicroModal from 'micromodal'
import { useEffect, useCallback, useState } from 'react'

export const useHook = (id: string) => {
  const [microModal, setMicroModal] = useState<typeof MicroModal | null>(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const client = require('micromodal').default as typeof MicroModal
    setMicroModal(client)
    client.init({
      disableScroll: true
    })
  }, [])

  const open = useCallback(() => {
    if (!microModal) return
    microModal.show(id)
  }, [id, microModal])

  const close = useCallback(() => {
    if (!microModal) return
    microModal.close(id)
  }, [id, microModal])

  return { open, close }
}
