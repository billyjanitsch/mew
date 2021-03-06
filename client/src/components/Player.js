import {observer} from 'mobx-react'
import cs from './styles/Player.css'

const translate = percent => ({transform: `translateX(${percent - 100}%)`})

const Control = props =>
  <div onClick={props.onClick} className={cs.control}>
    {props.icon}
  </div>

let ProgressBar = props =>
  <div className={cs.progress} onClick={props.player.navigate}>
    <div className={cs.bar} style={translate(props.player.percent)} />
  </div>

ProgressBar = observer(ProgressBar)

const Player = props =>
  <div className={cs.player}>
    <ProgressBar player={props.player} />
    <div className={cs.controls}>
      <Control onClick={props.player.prev} icon='prev' />
      {props.player.isPlaying
        ? <Control onClick={props.player.stop} icon='stop' />
        : <Control onClick={props.player.play} icon='play' />
      }
      <Control onClick={props.player.next} icon='next' />
    </div>
  </div>

export default observer(['player'], Player)
