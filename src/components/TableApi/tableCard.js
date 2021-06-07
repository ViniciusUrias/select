import { Card, CardImg, CardText} from './styles'
import Link from 'next/link'

export default function TableCard(props){
    return (
        <Link href={props.href} passHref={true}>
  
<Card>
        <CardImg src={props.src}></CardImg>
        <CardText>{props.text}</CardText>
        </Card>
        </Link>
    )
}


