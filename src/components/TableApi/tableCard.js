import { Card, CardImg, CardText } from "./styles";
import Link from "next/link";

export default function TableCard() {
  return (
    <>
      <Link href="/people">
        <Card>
          <CardImg src="https://wallpaperaccess.com/full/2835756.jpg"></CardImg>
          <CardText>People</CardText>
        </Card>
      </Link>
      <Link href="/starships">
        <Card>
          <CardImg src="https://inteng-storage.s3.amazonaws.com/img/iea/BxG2d8lJw9/sizes/porsche-lucasfilm-starship-ie_resize_md.jpg"></CardImg>
          <CardText>Starships</CardText>
        </Card>
      </Link>
      <Link href="/tableApi">
        <Card>
          <CardImg src="https://images2.alphacoders.com/110/thumb-1920-110412.jpg"></CardImg>
          <CardText>Planets</CardText>
        </Card>
      </Link>
    </>
  );
}
