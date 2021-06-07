import { Container, Divider, Text, Content } from "./styles";
import Link from 'next/link'
export default function Nav() {
  return (
    <Container>
        <Content>

      <Divider>
        <Link href="/">
        <Text href="">Static Table</Text>
        </Link>
      </Divider>
      <Divider>
        <Link href="/tableApi">
        <Text href="">API Table</Text>
        </Link>
      </Divider>
      <Divider>
        <Link href="/form">
        <Text href="">Form</Text>
        </Link>
      </Divider>
      <Divider>
        <Link href="/card">
        <Text href=""> Card</Text>
        </Link>
      </Divider>
      </Content>

    </Container>
  );
}
