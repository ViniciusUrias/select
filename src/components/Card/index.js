import {Container, LeftContent, CardWrapper, RightContent, Image, Button} from './styles'

export default function CardElement(){
    return(
        <CardWrapper>
        <Container>
            <LeftContent>
            <h1>STORMTROOPER</h1>
               <p>
               Os stormtroopers eram soldados de elite imperial pertencentes à Corporação Stormtrooper. Basicamente, eles constituíam um grupo militar de assalto, atuando em conflitos para reestabelecer a ordem e a segurança no Império Galático. Seus membros tinham uma inquestionável lealdade ao Imperador e uma veneração fanática por Darth Vader.
               </p>
               <p>Os stormtroopers usavam armaduras brancas (com macacões preto por baixo) que oferecia uma resistência limitada contra tiros de blasters. Em todas armaduras haviam equipamentos de sobrevivência e de controle de temperatura, que permitiam aos soldados sobreviverem na maioria dos ambientes dos planetas da Galáxia. O soldado stormtrooper sempre levava consigo duas armas básicas: um rifle E-11 e uma pistola DL-44, que ficava de reserva.</p>
            <Button>
                Ler mais
            </Button>
            </LeftContent>

            <RightContent>
                <Image src="https://pm1.narvii.com/6672/1802295ad9fb26c05a84433eefda7ce49e807688_hq.jpg"/>
               
            </RightContent>
        </Container>
        </CardWrapper>
    )
}