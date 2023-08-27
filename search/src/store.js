import {atom, useAtom} from 'jotai'

const searchAtom = atom('')

const useSearch= () => useAtom(searchAtom)

export default useSearch