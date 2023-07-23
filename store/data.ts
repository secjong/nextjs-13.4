import {atom} from 'jotai'
import {atomWithStorage} from 'jotai/utils'
import {Result} from '@/types/randomUser'

const countAtom = atom<number>(0)
const darkModeAtom = atomWithStorage<boolean>('datkMode', false)
const randomUserListAtom = atom<Result[]>([])

export {countAtom, darkModeAtom, randomUserListAtom}