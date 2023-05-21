import { InteractiveHeader } from '../InteractiveHeader'
import { Item } from '../Item'
import style from './style.module.scss'

export function PageWrapper() {
  return (
    <div className={style.PageWrapper}>
        <InteractiveHeader />
        <>
            <Item />
            <Item />
        </>
    </div>
  )
}
