import style from './style.module.scss'

export function Item() {
  return (
    <section className={style.Item}>
        <div className={style.ItemInformation}>
            <span className={style.InfoName}>Usuário ABC da Silva</span>
            <i className={style.InfoStatus}>Ativo</i>
            <span className={style.InfoCreationDate}>23/04/2023, 20:30</span>
        </div>
        <div className={style.ItemColor} style={{ background: '#000'}}>
            <span className={style.ItemColorLabel}>Cor selecionada</span>
            <div className={style.ItemColorBanner} />
        </div>
    </section>
  )
}
