import style from './style.module.scss'

export function InteractiveHeader() {
  return (
    <div className={style.InteractiveHeader}>
        <div className={style.InteractiveHeaderContent}>
            <h1 className={style.HeaderTitle}>Lista de usuários e preferências</h1>
            <h2 className={style.HeaderSubTitle}>Confira a lista com os conteúdos já reservados para esta entrega.</h2>
        </div>
        <button className={style.HeaderButton}>Carregar agora</button>
    </div>
  )
}
